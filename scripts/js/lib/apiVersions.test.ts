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

import { parseMinorVersion } from "./apiVersions.js";

test("parseMinorVersion()", async () => {
  const normal = parseMinorVersion("1.2.2");
  expect(normal).toEqual("1.2");
  const dev = parseMinorVersion("1.2.2-dev");
  expect(dev).toEqual("1.2");
  const rc = parseMinorVersion("1.2.2rc1");
  expect(rc).toEqual("1.2");
  const bad = parseMinorVersion("1");
  expect(bad).toBeNull();
});
