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

import { removePart, removePrefix } from "../stringUtils";
import { HtmlToMdResultWithUrl } from "./SphinxToMdResult";
import { remarkStringifyOptions } from "./commonParserConfig";
import { Link } from "../sharedTypes";

export function updateUrl(
  url: string,
  resultsByName: { [key: string]: HtmlToMdResultWithUrl },
  itemNames: Set<string>,
): string {
  if (isAbsoluteUrl(url)) return url;
  if (url.startsWith("/")) return url;

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
      return [...initialUrlParts, path].join("/");
    }

    // qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.job -> qiskit_ibm_runtime.RuntimeJob#job
    if (hash?.startsWith(`${path}.`)) {
      const member = removePrefix(hash, `${path}.`);
      return [...initialUrlParts, path].join("/") + `#${member}`;
    }
  }

  // qiskit_ibm_runtime.QiskitRuntimeService.job -> qiskit_ibm_runtime.QiskitRuntimeService#job
  const pathParts = path.split(".");
  const member = last(pathParts);
  const initialPathParts = initial(pathParts);
  const parentName = initialPathParts.join(".");
  if ("class" === resultsByName[parentName]?.meta.apiType) {
    return [...initialUrlParts, parentName].join("/") + "#" + member;
  }
  return url;
}

export async function updateLinks(
  results: HtmlToMdResultWithUrl[],
  transformLink?: (link: Link) => Link | undefined,
): Promise<void> {
  const resultsByName = keyBy(results, (result) => result.meta.apiName!);
  const itemNames = new Set(keys(resultsByName));

  for (const result of results) {
    const output = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkGfm)
      .use(remarkMdx)
      .use(() => {
        return async (tree: Root) => {
          visit(tree, "link", (node) => {
            if (transformLink) {
              const textNode =
                node.children?.[0]?.type === "text"
                  ? node.children?.[0]
                  : undefined;
              const transformedLink = transformLink({
                url: node.url,
                text: textNode?.value,
              });
              if (transformedLink) {
                node.url = transformedLink.url;
                if (textNode && transformedLink.text) {
                  textNode.value = transformedLink.text;
                }
                return;
              }
            }
            node.url = updateUrl(node.url, resultsByName, itemNames);
          });
        };
      })
      .use(remarkStringify, remarkStringifyOptions)
      .process(result.markdown);

    result.markdown = output?.toString();
  }
}
