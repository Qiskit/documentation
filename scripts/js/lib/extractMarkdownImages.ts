// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { unified } from "unified";
import { Root } from "remark-mdx";
import { visit } from "unist-util-visit";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";

export async function findImagesWithoutAltText(
  markdown: string,
): Promise<Set<string>> {
  const images = new Set<string>();

  await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(() => (tree: Root) => {
      visit(tree, "image", (node) => {
        if (!node.alt) {
          images.add(node.url);
        }
      });
    })
    .use(remarkStringify)
    .process(markdown);

  return images;
}
