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

import { visit } from "unist-util-visit";
import { unified } from "unified";
import { Root } from "remark-mdx";
import remarkStringify from "remark-stringify";
import rehypeRemark from "rehype-remark";
import rehypeParse from "rehype-parse";
import remarkGfm from "remark-gfm";
 
export interface AltText {
  imageName: Set<string>; 
  altText: Set<string | null | undefined>;
};


export async function extractAlt(
  markdown: string,
): Promise<AltText> {
  const imageName = new Set<string>();
  const altText = new Set<string | null | undefined>();

  const getAlt = (link: string, a: string | null | undefined): void => {
    imageName.add(link);
    altText.add(a);
  };

  await unified()
    .use(rehypeParse)
    .use(remarkGfm)
    .use(rehypeRemark)
    .use(() => (tree: Root) => {
      visit(tree, "image", (TreeNode) => getAlt(TreeNode.url, TreeNode.alt));
    })
    .use(remarkStringify)
    .process(markdown);

  return { imageName, altText };
}