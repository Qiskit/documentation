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

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import { Root } from "mdast";
import { visit } from "unist-util-visit";
import remarkStringify from "remark-stringify";
import { toText } from "hast-util-to-text";
import Slugger from "github-slugger";

import { remarkStringifyOptions } from "./commonParserConfig";
import { HtmlToMdResult } from "./HtmlToMdResult";

export async function dedupeHtmlIdsFromResults(
  results: HtmlToMdResult[],
): Promise<void> {
  for (let result of results) {
    result.markdown = await dedupeHtmlIds(result.markdown);
  }
}

export async function dedupeHtmlIds(md: string): Promise<string> {
  const output = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkMdx)
    .use(() => {
      return async (tree: Root) => {
        const existingIds = new Set();

        const slugger = new Slugger();
        visit(tree, "heading", (node) => {
          const headingText = toText(node as any);
          existingIds.add(slugger.slug(headingText));
        });

        visit(tree, "mdxJsxFlowElement", (node, index, parent) => {
          if (node.name === "span") {
            const id = node.attributes?.find(
              (attr) => "name" in attr && attr.name === "id",
            )?.value;
            if (id) {
              if (existingIds.has(id) && parent !== null && index !== null) {
                parent.children.splice(index, 1);
              }
            }
          }
        });
      };
    })
    .use(remarkStringify, remarkStringifyOptions)
    .process(md);

  return output.toString();
}
