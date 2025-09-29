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

import { isValidVersion, parseMinorVersion } from "./apiVersions.js";

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

test("isValidVersion()", async () => {
  const validVersions = ["0.46.3", "2.0.0", "2.0.0rc1", "0.37.0-dev"];
  validVersions.forEach((version) =>
    expect(isValidVersion(version)).toBeTruthy(),
  );

  const invalidVersions = [
    "0.46",
    "2",
    "2.0.0-rc1",
    "2.0.0rc",
    "0.37.0dev",
    "0.37.0-dev1",
    "1.0.0.0",
  ];
  invalidVersions.forEach((version) =>
    expect(isValidVersion(version)).toBeFalsy(),
  );
});
