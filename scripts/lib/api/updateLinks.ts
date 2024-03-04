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

import { initial, keyBy, keys, last } from "lodash";
import { Root } from "mdast";
import { visit } from "unist-util-visit";
import isAbsoluteUrl from "is-absolute-url";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";

import { removePart, removePrefix, removeSuffix } from "../stringUtils";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";
import { remarkStringifyOptions } from "./commonParserConfig";
import { ObjectsInv } from "./objectsInv";
import { transformSpecialCaseUrl } from "./specialCaseResults";

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
): string {
  if (isAbsoluteUrl(url)) return url;
  if (url.startsWith("/")) return url;
  url = transformSpecialCaseUrl(url);

  url = removePart(url, "/", ["stubs", "apidocs", "apidoc", ".."]);

  const urlParts = url.split("/");
  const initialUrlParts = initial(urlParts);
  const [path, hash] = last(urlParts)!.split("#") as [
    string,
    string | undefined,
  ];

  // qiskit_ibm_runtime.RuntimeJob
  // qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob
  if (itemNames.has(path)) {
    if (hash === path) {
      url = [...initialUrlParts, path].join("/");
    }

    // qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.job -> qiskit_ibm_runtime.RuntimeJob#job
    if (hash?.startsWith(`${path}.`)) {
      const member = removePrefix(hash, `${path}.`);
      url = [...initialUrlParts, path].join("/") + `#${member}`;
    }
  }

  // qiskit_ibm_runtime.QiskitRuntimeService.job -> qiskit_ibm_runtime.QiskitRuntimeService#job
  const pathParts = path.split(".");
  const member = last(pathParts);
  const initialPathParts = initial(pathParts);
  const parentName = initialPathParts.join(".");
  if ("class" === resultsByName[parentName]?.meta.apiType) {
    url = [...initialUrlParts, parentName].join("/") + "#" + member;
  }

  url = lowerCaseIfMarkdownAnchor(url);
  return url;
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
          node.url = normalizeUrl(node.url, resultsByName, itemNames);
        });
      })
      .use(remarkStringify, remarkStringifyOptions)
      .process(result.markdown);

    result.markdown = output?.toString();
  }

  maybeObjectsInv?.updateUris((uri: string) =>
    normalizeUrl(uri, resultsByName, itemNames),
  );
}
