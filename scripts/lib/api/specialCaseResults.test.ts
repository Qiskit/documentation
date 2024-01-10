// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { expect, test } from "@jest/globals";

import {
  specialCaseResults,
  transformSpecialCaseUrl,
  PROVIDER_INDEX_META,
  RUNTIME_INDEX_META,
} from "./specialCaseResults";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

test("specialCaseResults()", () => {
  const results = [
    { url: "/api/my-pkg/release_notes" },
    { url: "/api/my-pkg/terra" },
    {
      url: "/api/my-pkg/ibm-runtime",
      meta: {},
    },
    {
      url: "/api/my-pkg/ibm-provider",
      meta: {},
    },
    { url: "/api/my-pkg/other-file" },
  ] as HtmlToMdResultWithUrl[];

  specialCaseResults(results);
  expect(results).toEqual([
    {
      url: "/api/my-pkg/release-notes",
    },
    {
      url: "/api/my-pkg/index",
    },
    {
      url: "/api/my-pkg/index",
      meta: { hardcodedFrontmatter: RUNTIME_INDEX_META },
    },
    {
      url: "/api/my-pkg/index",
      meta: { hardcodedFrontmatter: PROVIDER_INDEX_META },
    },
    {
      url: "/api/my-pkg/other-file",
    },
  ]);
});

test("transformSpecialCaseUrl()", () => {
  const urls = [
    "release_notes",
    "release_notes#release-notes-0-2-1-bug-fixes",
    "ibm-provider#qiskit-ibm-provider",
  ];
  const transformedUrls = urls.map((x) => transformSpecialCaseUrl(x));
  expect(transformedUrls).toMatchInlineSnapshot(`
    [
      "release-notes",
      "release-notes#release-notes-0-2-1-bug-fixes",
      "index#qiskit-ibm-provider",
    ]
  `);
});
