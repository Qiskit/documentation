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

import { visit } from "unist-util-visit";
import { Root } from "mdast";
import remarkMath from "remark-math";
import remarkMdx from "remark-mdx";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import { last, first, initial, tail } from "lodash";
import { Handle } from "hast-util-to-mdast";
import { removePrefix, removeSuffix } from "../stringUtils";

export const remarkStringifyOptions = {
  fences: true,
  resourceLink: true,
};

export async function sphinxHtmlToMarkdownUnifiedPlugin(
  htmlToProcess: string,
  handlers?: Record<string, Handle>,
) {
  return await unified()
    .use(rehypeParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkMdx)
    .use(rehypeRemark, {
      handlers,
    })
    .use(remarkStringify, remarkStringifyOptions)
    .use(() => (root: Root) => {
      // merge contiguous emphasis
      visit(root, "emphasis", (node, index, parent) => {
        if (index === null || parent === null) return;
        let nextIndex = index + 1;
        while (parent.children[nextIndex]?.type === "emphasis") {
          node.children.push(
            ...((parent.children[nextIndex] as any).children ?? []),
          );
          nextIndex++;
        }
        parent.children.splice(index + 1, nextIndex - (index + 1));

        // remove initial and trailing spaces from emphasis
        const firstChild = first(node.children);
        if (firstChild?.type === "text") {
          const match = firstChild.value.match(/^\s+/);
          if (match) {
            if (match[0] === firstChild.value) {
              node.children = tail(node.children);
            } else {
              firstChild.value = removePrefix(firstChild.value, match[0]);
            }
            parent.children.splice(index, 0, {
              type: "text",
              value: match[0],
            });
          }
        }
        const lastChild = last(node.children);
        if (lastChild?.type === "text") {
          const match = lastChild.value.match(/\s+$/);
          if (match) {
            if (match[0] === lastChild.value) {
              node.children = initial(node.children);
            } else {
              lastChild.value = removeSuffix(lastChild.value, match[0]);
            }
            parent.children.splice(index + 1, 0, {
              type: "text",
              value: match[0],
            });
          }
        }
      });
    })
    .process(htmlToProcess);
}
