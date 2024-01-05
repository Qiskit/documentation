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

import { expect, test } from "@jest/globals";

import { dedupeHtmlIds } from "./dedupeHtmlIds";

test("dedupeHtmlIds()", async () => {
  expect(
    await dedupeHtmlIds(`
  <span id="foo" />
  <span id="bar" />
  # foo
  <span id="foo" />
  `),
  ).toMatchInlineSnapshot(`
    "<span id="bar" />

    # foo
    "
  `);
});
