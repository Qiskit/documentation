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

import { parseTocUrls } from "./tocFiles.js";

test("parseTocUrls() collects urls recursively and skips entries without a url", () => {
  const entries = [
    { title: "Introduction", url: "/docs/guides" },
    {
      title: "Section header without url",
      children: [
        { title: "Quickstart", url: "/docs/guides/quick-start" },
        {
          title: "Nested group",
          children: [
            { title: "Deep page", url: "/docs/guides/deep/page" },
            { title: "External", url: "https://example.com" },
          ],
        },
      ],
    },
    { title: "No url and no children" },
  ];

  expect(parseTocUrls(entries)).toEqual([
    "/docs/guides",
    "/docs/guides/quick-start",
    "/docs/guides/deep/page",
    "https://example.com",
  ]);
});
