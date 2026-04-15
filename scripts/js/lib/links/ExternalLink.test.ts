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
  expect(link.value).toEqual("https://ibm.com/");
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

  test("404", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 404 }));
    let link = new ExternalLink("https://bad-link.com", ["/testorigin.mdx"]);
    const result = await link.check();
    expect(result).toEqual(
      "❌ Could not find link 'https://bad-link.com/' (404). Appears in:\n    /testorigin.mdx",
    );
  });

  test("410", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 410 }));
    let link = new ExternalLink("https://bad-link.com", ["/testorigin.mdx"]);
    const result = await link.check();
    expect(result).toEqual(
      "❌ Link 'https://bad-link.com/' has been removed (410). Appears in:\n    /testorigin.mdx",
    );
  });

  test("other problem", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 502 }));
    let link = new ExternalLink("https://bad-link.com", ["/testorigin.mdx"]);
    const result = await link.check();
    expect(result).toEqual(
      "❌ Link 'https://bad-link.com/' returned unexpected code: 502. Appears in:\n    /testorigin.mdx",
    );
  });

  test("exception handling", async () => {
    global.fetch = () => Promise.reject(new Error("some issue"));
    let link = new ExternalLink("https://bad-link.com", ["/testorigin.mdx"]);
    const result = await link.check();
    expect(result).toEqual(
      "❌ Failed to fetch 'https://bad-link.com/': some issue. Appears in:\n    /testorigin.mdx",
    );
  });

  test("301 redirect is considered valid", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 301 }));
    let link = new ExternalLink("https://redirect-link.com", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toBeUndefined();
  });

  test("302 redirect is considered valid", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 302 }));
    let link = new ExternalLink("https://redirect-link.com", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toBeUndefined();
  });

  test("403 Forbidden is considered valid", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 403 }));
    let link = new ExternalLink("https://forbidden-link.com", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toBeUndefined();
  });

  test("429 Too Many Requests is considered valid", async () => {
    global.fetch = () => Promise.resolve(new Response("", { status: 429 }));
    let link = new ExternalLink("https://rate-limited-link.com", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toBeUndefined();
  });

  test("405 Method Not Allowed triggers GET fallback", async () => {
    let callCount = 0;
    global.fetch = (url: any, options: any) => {
      callCount++;
      if (callCount === 1) {
        // First call (HEAD) returns 405
        expect(options.method).toBe("HEAD");
        return Promise.resolve(new Response("", { status: 405 }));
      } else {
        // Second call (GET) returns 200
        expect(options.method).toBe("GET");
        return Promise.resolve(new Response("", { status: 200 }));
      }
    };
    let link = new ExternalLink("https://pdf-link.com/file.pdf", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toBeUndefined();
    expect(callCount).toBe(2); // Verify both HEAD and GET were called
  });

  test("501 Not Implemented triggers GET fallback", async () => {
    let callCount = 0;
    global.fetch = (url: any, options: any) => {
      callCount++;
      if (callCount === 1) {
        // First call (HEAD) returns 501
        expect(options.method).toBe("HEAD");
        return Promise.resolve(new Response("", { status: 501 }));
      } else {
        // Second call (GET) returns 200
        expect(options.method).toBe("GET");
        return Promise.resolve(new Response("", { status: 200 }));
      }
    };
    let link = new ExternalLink("https://binary-link.com/file.zip", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toBeUndefined();
    expect(callCount).toBe(2);
  });

  test("URL with escape characters is handled correctly", async () => {
    global.fetch = (url: any) => {
      // Verify the URL is properly normalized
      expect(url).toContain("%20");
      return Promise.resolve(new Response("", { status: 200 }));
    };
    let link = new ExternalLink(
      "https://example.com/file%20with%20spaces.pdf",
      ["/testorigin.mdx"],
    );
    const result = await link.check();
    expect(result).toBeUndefined();
  });

  test("405 followed by GET failure still reports error", async () => {
    let callCount = 0;
    global.fetch = (url: any, options: any) => {
      callCount++;
      if (callCount === 1) {
        return Promise.resolve(new Response("", { status: 405 }));
      } else {
        return Promise.resolve(new Response("", { status: 404 }));
      }
    };
    let link = new ExternalLink("https://bad-pdf.com/missing.pdf", [
      "/testorigin.mdx",
    ]);
    const result = await link.check();
    expect(result).toContain("Could not find link");
    expect(result).toContain("404");
  });
});
