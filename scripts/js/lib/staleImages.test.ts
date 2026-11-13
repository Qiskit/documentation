// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { test, expect } from "@playwright/test";

import { findUnusedImages, stripImagePaths } from "./staleImages.js";

test("stripImagePaths() removes the public prefix and dark mode suffix", () => {
  expect(
    stripImagePaths([
      "public/docs/images/guides/circuit.png",
      "public/docs/images/guides/circuit@dark.png",
      "public/learning/images/courses/bloch.svg",
    ]),
  ).toEqual(
    new Set([
      "docs/images/guides/circuit.png",
      "learning/images/courses/bloch.svg",
    ]),
  );
});

test("findUnusedImages()", () => {
  const images = [
    "docs/images/guides/markdown-link.png",
    "docs/images/guides/jsx-src.png",
    "docs/images/guides/unused.png",
    "docs/images/guides/allowed.png",
    // Regex metacharacters must be treated literally.
    "docs/images/guides/a+b(1).png",
    "docs/images/guides/dotXpng",
  ];
  const contents = [
    "![Alt](/docs/images/guides/markdown-link.png)",
    '<img src="/docs/images/guides/jsx-src.png" />',
    "![Alt](/docs/images/guides/a+b(1).png)",
    "![Alt](/docs/images/guides/dot.png)",
  ];
  const allowList = new Set(["public/docs/images/guides/allowed.png"]);

  expect(findUnusedImages(images, contents, allowList)).toEqual([
    "docs/images/guides/unused.png",
    "docs/images/guides/dotXpng",
  ]);
});
