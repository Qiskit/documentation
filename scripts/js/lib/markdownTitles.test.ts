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

test("Test for matching titles and headings", async () => {
  const markdown1 = `---
title: My Awesome Guide
---

# My Awesome Guide
  `;
  const tree = parseMarkdown(markdown1);
  const mismatched = await collectHeadingTitleMismatch(tree);
  expect(mismatched).toEqual(new Set());
});

test("Test to find mismatched titles and headings", async () => {
  const markdown2 = `---
title: Qiskit Doc
author: John
---

# Introduction

This guide will walk you through everything.`;

  const tree = parseMarkdown(markdown2);
  const mismatched2 = await collectHeadingTitleMismatch(tree);

  const result2 = new Set([
    `Mismatch: frontmatter title "Qiskit Doc" does not match heading "Introduction"`,
  ]);

  expect(mismatched2).toEqual(result2);
});

test("Test to mismatched and complex titles and headings", async () => {
  const markdown3 = `---
title: My Awesome Guide
---

# This is a *Heading*

This guide will walk you through everything.`;

  const tree = parseMarkdown(markdown3);
  const mismatched3 = await collectHeadingTitleMismatch(tree);

  const result3 = new Set([
    `Mismatch: frontmatter title "My Awesome Guide" does not match heading "This is a  Heading"`,
  ]);

  expect(mismatched3).toEqual(result3);
});
