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

import { join } from "path";
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
import { DOCS_BASE_PATH } from "./conversionPipeline.js";

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
  kwargs: {
    kebabCaseAndShorten: boolean;
    pkgName: string;
    pkgOutputDir: string;
  },
): string {
  if (isAbsoluteUrl(url)) return url;

  // We add the base path to the internal links if needed
  if (
    url.startsWith("/") &&
    !url.startsWith(DOCS_BASE_PATH) &&
    !url.endsWith(DOCS_BASE_PATH)
  ) {
    url = `${DOCS_BASE_PATH}${url}`;
  }

  // Absolute URLs are already normalized, except those pointing to the same API docs.
  // For those cases, we need to transform them to kebab-case.
  // Todo: Transform URLs pointing to other APIs, when they all use kebab-case.
  if (
    url.startsWith("/") &&
    !url.startsWith(`${DOCS_BASE_PATH}/api/${kwargs.pkgName}`)
  )
    return url;
  url = transformSpecialCaseUrl(url);

  const nonCAPIFolders = ["stubs", "apidocs", "apidoc"];
  const addQiskitPrefix =
    kwargs.pkgName == "qiskit-c" &&
    nonCAPIFolders.some((f) => url.split("/").includes(f));

  url = removePart(url, "/", [...nonCAPIFolders, ".."]);

  // The Qiskit C API sometimes links to the Python API. In those cases, we need to add the
  // full prefix
  if (addQiskitPrefix) {
    return `${kwargs.pkgOutputDir.replace(kwargs.pkgName, "qiskit")}/${url}`;
  }

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

    // Rather than linking to the component like `Function` or `Attribute`, we link to the header.
    // This is necessary because until we implement https://github.com/Qiskit/documentation/issues/1395, the
    // anchor for the component would take you too low in the page, given that the header is above the component.
    // qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.job -> qiskit_ibm_runtime.RuntimeJob#job
    //
    // TODO(#2217): Remove this special case and use the full ID instead.
    if (hash?.startsWith(`${page}.`)) {
      let member = removePrefix(hash, `${page}.`);
      // Also check for inline classes, which often show up on module pages.
      // qiskit_addon_obp.utils.truncating#qiskit_addon_obp.utils.truncating.TruncationErrorBudget.p_norm
      // -> qiskit_addon_obp.utils.truncating#p_norm, whereas without this check
      // it would be qiskit_addon_obp.utils.truncating#TruncationErrorBudget.p_norm.
      if (member.includes(".")) {
        member = member.split(".", 2)[1];
      }
      url = `${normalizedUrlWithoutHash}#${member}`;
    }
  }

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
    ["https://quantum.cloud.ibm.com/docs", "/docs"],
    ["https://quantum.cloud.ibm.com/learning", "/learning"],
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
  const relativeUrl = removePrefix(join(newPrefix, url), "/");
  return { url: `/${relativeUrl}`, text: newText };
}

export async function updateLinks(
  results: HtmlToMdResultWithUrl[],
  kwargs: {
    kebabCaseAndShorten: boolean;
    pkgName: string;
    pkgOutputDir: string;
  },
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
