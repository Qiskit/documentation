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

import { ignoreTitleMismatch } from "./allowLists.js";

test("ignoreTitleMismatch()", async () => {
  // Ignore all API pages
  expect(ignoreTitleMismatch("docs/api/package/thing.mdx")).toEqual(true);

  // Ignore all learning pages
  expect(
    ignoreTitleMismatch("learning/courses/my-course/nested/page.mdx"),
  ).toEqual(true);

  expect(ignoreTitleMismatch("learning/modules/my-module/exam.mdx")).toEqual(
    true,
  );

  // Ignore specific guides pages mentioned in allowLists
  // (Test may need updating if the allowlist changes)
  expect(ignoreTitleMismatch("docs/guides/create-a-provider.mdx")).toEqual(
    true,
  );

  // Don't ignore guides in general
  expect(ignoreTitleMismatch("docs/guides/example-page.mdx")).toEqual(false);

  expect(ignoreTitleMismatch("docs/security/nested/something.mdx")).toEqual(
    false,
  );
});
