// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
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
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { Root } from "mdast";

export function parseMarkdown(markdown: string): Root {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter, ["yaml"])
    .parse(markdown);
}

export function extractHeadingText(headingNode: any): string {
  if (headingNode.type === "text" || headingNode.type === "inlineCode") {
    return headingNode.value;
  }

  if (headingNode.type === "link" && headingNode.children) {
    return headingNode.children.map(extractHeadingText).join(" ");
  }

  if (headingNode.children && Array.isArray(headingNode.children)) {
    return headingNode.children.map(extractHeadingText).join(" ");
  }

  return "";
}
