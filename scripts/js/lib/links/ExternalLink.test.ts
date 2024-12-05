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
  let originalFetch: typeof global.fetch;

  test.beforeEach(() => {
    originalFetch = global.fetch;
  });

  test.afterEach(() => {
    global.fetch = originalFetch;
  });

  test("valid link", async () => {
    global.fetch = () => Promise.resolve(new Response());
    let link = new ExternalLink("https://good-link.com", ["/testorigin.mdx"]);
    const result = await link.check();
    expect(result).toBeUndefined();
  });

  test("invalid link", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 404 }));
    let link = new ExternalLink("https://bad-link.com", ["/testorigin.mdx"]);
    const result = await link.check();
    expect(result).toEqual(
      "❌ Could not find link 'https://bad-link.com'. Appears in:\n    /testorigin.mdx",
    );
  });

  test("exception handling", async () => {
    global.fetch = () => Promise.reject(new Error("some issue"));
    let link = new ExternalLink("https://bad-link.com", ["/testorigin.mdx"]);
    const result = await link.check();
    expect(result).toEqual(
      "❌ Failed to fetch 'https://bad-link.com': some issue. Appears in:\n    /testorigin.mdx",
    );
  });
});
