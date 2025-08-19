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

import { collectHeadingTitleMismatch } from "./markdownTitles";
import { parseMarkdown } from "./markdownUtils";

const assert = async (
  markdown: string,
  expected: Set<string>,
): Promise<void> => {
  const tree = parseMarkdown(markdown);
  const result = await collectHeadingTitleMismatch(tree);
  expect(result).toEqual(expected);
};

test.describe("collectHeadingTitleMismatch", () => {
  test("valid", async () => {
    const markdown1 = `---
title: My Awesome Guide
---

# My Awesome Guide
  `;
    await assert(markdown1, new Set());
  });

  test("mismatched - simple h1", async () => {
    const markdown2 = `---
title: Qiskit Doc
author: John
---

# Introduction

This guide will walk you through everything.`;

    const expected = new Set([
      `Mismatch: frontmatter title "Qiskit Doc" does not match heading "Introduction"`,
    ]);

    await assert(markdown2, expected);
  });

  test("mismatched - complex h1", async () => {
    const markdown3 = `---
title: My Awesome Guide
---

# This is a *Heading*

This guide will walk you through everything.`;

    const expected = new Set([
      `Mismatch: frontmatter title "My Awesome Guide" does not match heading "This is a  Heading"`,
    ]);

    await assert(markdown3, expected);
  });
});
