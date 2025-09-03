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

import { extractHeadingText } from "./markdownUtils";

export async function collectHeadingTitleMismatch(
  tree: Root,
  metadata: Record<string, any>,
): Promise<Set<string>> {
  const mismatches = new Set<string>();

  const frontmatterTitle: string | undefined = metadata.title;
  let headingText: string | undefined;

  // Extract first level-1 heading with full formatting
  visit(tree, "heading", (node: any) => {
    if (node.depth === 1 && !headingText) {
      headingText = extractHeadingText(node).trim();
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
