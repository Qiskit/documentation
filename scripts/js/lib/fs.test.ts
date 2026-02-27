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

import { pathExists } from "./fs.js";

test("pathExists()", async () => {
  const readme = await pathExists(`README.md`);
  expect(readme).toBe(true);

  const dir = await pathExists(`docs/`);
  expect(dir).toBe(true);

  const fake = await pathExists(`fake-file`);
  expect(fake).toBe(false);
});
