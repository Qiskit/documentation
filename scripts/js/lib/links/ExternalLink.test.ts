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

import { ExternalLink } from "./ExternalLink.js";

test("ExternalLink constructor ignores anchors", () => {
  const link = new ExternalLink("https://ibm.com#my-anchor", []);
  expect(link.value).toEqual("https://ibm.com");
});

test.describe("ExternalLink.check()", () => {
  test("valid link", async () => {
    let link = new ExternalLink("https://github.com/Qiskit", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toBeUndefined();
  });

  test("Validate existing external links", async () => {
    let link = new ExternalLink("https://ibm.com/FakePageDoesNotExist", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toEqual(
      "❌ Could not find link 'https://ibm.com/FakePageDoesNotExist'. Appears in:\n    /testorigin.mdx",
    );
  });
});
