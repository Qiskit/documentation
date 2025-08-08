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

import { expect, test } from "@playwright/test";

import { collectHeadingTitleMismatch } from "./markdownTitles";

test("Test for matching titles and headings", async () => {
  const markdown1 = `---
title: My Awesome Guide
---

# My Awesome Guide
    `;
  const mismatched = await collectHeadingTitleMismatch(markdown1);
  const result: Set<string> = new Set();
  expect(mismatched).toEqual(result);
});

test("Test to find mismatched titles and headings", async () => {
  const markdown2 = `---
title: Qiskit Doc
author: John
---

# Introduction

This guide will walk you through everything.`;

  const mismatched2 = await collectHeadingTitleMismatch(markdown2);

  const result2: Set<string> = new Set([
    `Mismatch: frontmatter title "Qiskit Doc" does not match heading "Introduction"`,
  ]);

  expect(mismatched2).toEqual(result2);
});

test("Test to mismatched and complex titles and headings", async () => {
  const markdown2 = `---
title: My Awesome Guide
---

# This is a *Heading*

This guide will walk you through everything.`;

  const mismatched2 = await collectHeadingTitleMismatch(markdown2);

  const result2: Set<string> = new Set([
    `Mismatch: frontmatter title "My Awesome Guide" does not match heading "This is a  Heading"`,
  ]);

  expect(mismatched2).toEqual(result2);
});
