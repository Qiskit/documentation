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

import { expect, test } from "@playwright/test";
import { parseMarkdown } from "./markdownUtils";

import { collectHeadingTitleMismatch } from "./markdownTitles";

const assert = async (
  markdown: string,
  metadata: Record<string, string>,
  expected: Set<string>,
): Promise<void> => {
  const tree = parseMarkdown(markdown);
  const result = await collectHeadingTitleMismatch(tree, metadata);
  expect(result).toEqual(expected);
};

test.describe("collectHeadingTitleMismatch", () => {
  test("matches frontmatter title with H1 heading", async () => {
    const markdown = `---
      title: My Awesome Guide
      ---

      # My Awesome Guide
    `;
    await assert(markdown, { title: "My Awesome Guide" }, new Set());
  });

  test("detects mismatch with simple H1", async () => {
    const markdown = `---
      title: Qiskit Doc
      author: John
      ---

      # Introduction

      This guide will walk you through everything.`;

    const expected = new Set([
      `Mismatch: frontmatter title "Qiskit Doc" does not match heading "Introduction"`,
    ]);

    await assert(markdown, { title: "Qiskit Doc" }, expected);
  });

  test("detects mismatch with formatted H1", async () => {
    const markdown = `---
      title: My Awesome Guide
      ---

      # This is a *Heading*

      This guide will walk you through everything.`;

    const expected = new Set([
      `Mismatch: frontmatter title \"My Awesome Guide\" does not match heading \"This is a  Heading\"`,
    ]);

    await assert(markdown, { title: "My Awesome Guide" }, expected);
  });
});
