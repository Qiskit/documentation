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

import { visit, EXIT } from "unist-util-visit";
import { Root } from "mdast";
import yaml from "js-yaml";

// Helper to recursively extract visible text from heading node
function extractText(node: any): string {
  if (node.type === "text" || node.type === "inlineCode") {
    return node.value;
  }

  if (node.type === "link" && node.children) {
    return node.children.map(extractText).join(" ");
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractText).join(" ");
  }

  return "";
}

export async function collectHeadingTitleMismatch(
  tree: Root,
): Promise<Set<string>> {
  const mismatches = new Set<string>();

  let frontmatterTitle: string | undefined;
  let headingText: string | undefined;

  // Extract frontmatter title
  visit(tree, "yaml", (node: any) => {
    const data = yaml.load(node.value);
    if (typeof data === "object" && data !== null && "title" in data) {
      frontmatterTitle = (data as any).title;
      return EXIT;
    }
  });

  // Extract first level-1 heading with full formatting
  visit(tree, "heading", (node: any) => {
    if (node.depth === 1 && !headingText) {
      headingText = extractText(node).trim();
      return EXIT;
    }
  });

  // Compare and collect mismatch
  if (frontmatterTitle && headingText && frontmatterTitle !== headingText) {
    mismatches.add(
      `Mismatch: frontmatter title "${frontmatterTitle}" does not match heading "${headingText}"`,
    );
  }

  return mismatches;
}
