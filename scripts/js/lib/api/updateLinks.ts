// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { initial, keyBy, keys, last } from "lodash-es";
import { Root } from "mdast";
import { visit } from "unist-util-visit";
import isAbsoluteUrl from "is-absolute-url";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";

import { removePart, removePrefix, removeSuffix } from "../stringUtils.js";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { remarkStringifyOptions } from "./commonParserConfig.js";
import { ObjectsInv } from "./objectsInv.js";
import { transformSpecialCaseUrl } from "./specialCaseResults.js";
import { kebabCaseAndShortenPage } from "./normalizeResultUrls.js";

export interface Link {
  url: string; // Where the link goes
  text?: string; // What the user sees
}

/**
 * Anchors generated from markdown headings are always lower case but, if these
 * headings are API references, Sphinx sometimes expects them to include
 * uppercase characters.
 *
 * As a heuristic, we assume urls containing periods are anchors to HTML id
 * tags (which preserve Sphinx's original casing), and anchors with no periods
 * are from markdown headings (which must be lower-cased). This seems to work
 * ok.
 */
function lowerCaseIfMarkdownAnchor(url: string): string {
  if (!url.includes("#")) {
    return url;
  }
  const [base, anchor] = url.split("#");
  if (anchor.includes(".")) {
    return url;
  }
  const newAnchor = anchor.toLowerCase();
  return `${base}#${newAnchor}`;
}

export function normalizeUrl(
  url: string,
  resultsByName: { [key: string]: HtmlToMdResultWithUrl },
  itemNames: Set<string>,
  kwargs: { kebabCaseAndShorten: boolean; pkgName: string },
): string {
  if (isAbsoluteUrl(url)) return url;
  if (url.startsWith("/")) return url;
  url = transformSpecialCaseUrl(url);

  url = removePart(url, "/", ["stubs", "apidocs", "apidoc", ".."]);

  const urlParts = url.split("/");
  const initialUrlParts = initial(urlParts);
  const [page, hash] = last(urlParts)!.split("#") as [
    string,
    string | undefined,
  ];

  const normalizedPage = kwargs.kebabCaseAndShorten
    ? kebabCaseAndShortenPage(page, kwargs.pkgName)
    : page;
  const normalizedUrlWithoutHash = [...initialUrlParts, normalizedPage].join(
    "/",
  );

  // Default case. We'll then check if the hash should be transformed
  // for a few edge cases.
  url = hash ? `${normalizedUrlWithoutHash}#${hash}` : normalizedUrlWithoutHash;

  // qiskit_ibm_runtime.RuntimeJob
  // qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob
  if (itemNames.has(page)) {
    if (hash === page) {
      url = normalizedUrlWithoutHash;
    }
  }

  // We inline methods to live on class pages in mergeClassMembers.ts.
  // qiskit_ibm_runtime.QiskitRuntimeService.job -> qiskit_ibm_runtime.QiskitRuntimeService#job
  const pathParts = page.split(".");
  const member = last(pathParts);
  const initialPathParts = initial(pathParts);
  const parentName = initialPathParts.join(".");
  if ("class" === resultsByName[parentName]?.meta.apiType) {
    const normalizedParentName = kwargs.kebabCaseAndShorten
      ? kebabCaseAndShortenPage(parentName, kwargs.pkgName)
      : parentName;
    url = [...initialUrlParts, normalizedParentName].join("/") + "#" + member;
  }

  return lowerCaseIfMarkdownAnchor(url);
}

export function relativizeLink(link: Link): Link | undefined {
  const priorPrefixToNewPrefix = new Map([
    ["https://qiskit.org/documentation/apidoc/", "/api/qiskit"],
    ["https://qiskit.org/documentation/stubs/", "/api/qiskit"],
    ["https://docs.quantum.ibm.com/", ""],
    ["https://docs.quantum-computing.ibm.com/", ""],
  ]);
  const priorPrefix = Array.from(priorPrefixToNewPrefix.keys()).find((prefix) =>
    link.url.startsWith(prefix),
  );
  if (!priorPrefix) {
    return;
  }
  let [url, anchor] = link.url.split("#");
  url = removePrefix(url, priorPrefix);
  url = removeSuffix(url, ".html");
  if (anchor && anchor !== url) {
    url = `${url}#${anchor}`;
  }

  const newText = link.url === link.text ? url : undefined;
  const newPrefix = priorPrefixToNewPrefix.get(priorPrefix)!;
  return { url: `${newPrefix}/${url}`, text: newText };
}

export async function updateLinks(
  results: HtmlToMdResultWithUrl[],
  kwargs: { kebabCaseAndShorten: boolean; pkgName: string },
  maybeObjectsInv?: ObjectsInv,
): Promise<void> {
  const resultsByName = keyBy(results, (result) => result.meta.apiName!);
  const itemNames = new Set(keys(resultsByName));

  for (const result of results) {
    const output = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkGfm)
      .use(remarkMdx)
      .use(() => async (tree: Root) => {
        visit(tree, "link", (node) => {
          const textNode =
            node.children?.[0]?.type === "text"
              ? node.children?.[0]
              : undefined;
          const relativizedLink = relativizeLink({
            url: node.url,
            text: textNode?.value,
          });
          if (relativizedLink) {
            node.url = relativizedLink.url;
            if (textNode && relativizedLink.text) {
              textNode.value = relativizedLink.text;
            }
          }
          node.url = normalizeUrl(node.url, resultsByName, itemNames, kwargs);
        });
      })
      .use(remarkStringify, remarkStringifyOptions)
      .process(result.markdown);

    result.markdown = output?.toString();
  }

  maybeObjectsInv?.updateUris((uri: string) =>
    normalizeUrl(uri, resultsByName, itemNames, kwargs),
  );
}
