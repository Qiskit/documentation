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

import { expect, test } from "@playwright/test";

import { transformSpecialCaseUrl } from "./specialCaseResults.js";

test("transformSpecialCaseUrl()", () => {
  const urls = ["release_notes", "release_notes#release-notes-0-2-1-bug-fixes"];
  const transformedUrls = urls.map((x) => transformSpecialCaseUrl(x));
  expect(transformedUrls).toEqual([
    "release-notes",
    "release-notes#release-notes-0-2-1-bug-fixes",
  ]);
});
