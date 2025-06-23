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

import { hasInlineMath, removeFileExtension } from "./checkKatexRender";

test("hasInlineMath()", () => {
  const md1 = `
  ---
title: Migrate to the upgraded IBM Quantum Platform
description: Migrate to using the upgraded IBM Quantum Platform for Open users
---

# Migrate to the upgraded IBM Quantum Platform

This guide describes how, why, and when to transition to the [new version of IBM Quantum Platform,](https://quantum.cloud.ibm.com/) which is now available in early access mode.
`;
  expect(hasInlineMath(md1)).toEqual(false);

  const md2 =
    md1 +
    `
    Katex-display
    $$
        1 + 2 + 3
    $$
  `;

  expect(hasInlineMath(md2)).toEqual(false);

  const md3 = md2 + "Inline math $ 1 + 2 + 3 $";

  expect(hasInlineMath(md3)).toEqual(true);
});

test("removeFileExtension()", () => {
  expect(removeFileExtension("docs/guides/my-page.mdx")).toEqual(
    "docs/guides/my-page",
  );
  expect(removeFileExtension("docs/guides/my-page.ipynb")).toEqual(
    "docs/guides/my-page",
  );
  expect(removeFileExtension("docs/guides/my-dir.my-page.mdx")).toEqual(
    "docs/guides/my-dir.my-page",
  );
  expect(removeFileExtension("docs/guides/my-dir.my-page")).toEqual(
    "docs/guides/my-dir.my-page",
  );
  expect(removeFileExtension("docs/guides/my-page")).toEqual(
    "docs/guides/my-page",
  );
});
