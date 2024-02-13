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

import { describe, expect, test } from "@jest/globals";
import { File, Link } from "./LinkChecker";

describe("Test the constructor of Link", () => {
  test("Initialize internal link without anchors", () => {
    let testLink = new Link("/testpath", ["/testorigin.mdx"]);
    const attributes = [
      testLink.value,
      testLink.anchor,
      testLink.originFiles,
      testLink.isExternal,
    ];
    const correct_values = [
      "/testpath",
      "",
      new Set(["/testorigin.mdx"]),
      false,
    ];
    expect(attributes).toEqual(correct_values);
  });

  test("Initialize internal link with anchors", () => {
    let testLink = new Link("/testpath#testanchor", ["/testorigin.mdx"]);
    const attributes = [
      testLink.value,
      testLink.anchor,
      testLink.originFiles,
      testLink.isExternal,
    ];
    const correct_values = [
      "/testpath",
      "#testanchor",
      new Set(["/testorigin.mdx"]),
      false,
    ];
    expect(attributes).toEqual(correct_values);
  });

  test("Initialize external link", () => {
    let testLink = new Link("https://test.link.com", ["/testorigin.mdx"]);
    const attributes = [
      testLink.value,
      testLink.anchor,
      testLink.originFiles,
      testLink.isExternal,
    ];
    const correct_values = [
      "https://test.link.com",
      "",
      new Set(["/testorigin.mdx"]),
      true,
    ];
    expect(attributes).toEqual(correct_values);
  });
});

describe("Validate links", () => {
  test("Validate existing internal links with absolute path", async () => {
    let testLink = new Link("/testpath", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", []);
    const results = await testLink.checkLink([testFile]);
    expect(results).toBeUndefined();
  });

  test("Validate non-existing internal links with absolute path", async () => {
    let testLink = new Link("/test-alternative-path", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", []);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '/test-alternative-path'. Appears in:\n    /testorigin.mdx",
    );
  });

  test("Validate existing internal links with relative path", async () => {
    let testLink = new Link("../testpath", ["docs/test/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", []);
    const results = await testLink.checkLink([testFile]);
    expect(results).toBeUndefined();
  });

  test("Validate non-existing internal links with relative path", async () => {
    let testLink = new Link("../testpath", ["docs/test1/test2/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", []);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '../testpath'. Appears in:\n    docs/test1/test2/testorigin.mdx",
    );
  });

  test("Validate existing internal links with absolute path and multiple origin files", async () => {
    let testLink = new Link("/testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/testpath.mdx", []);
    let testFile2 = new File("docs/test/test2/testpath.mdx", []);
    const results = await testLink.checkLink([testFile1, testFile2]);
    expect(results).toBeUndefined();
  });

  test("Validate non-existing internal links with absolute path and multiple origin files", async () => {
    let testLink = new Link("/testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/test/testpath.mdx", []);
    let testFile2 = new File("docs/test2/test3/testpath.mdx", []);
    const results = await testLink.checkLink([testFile1, testFile2]);
    expect(results).toEqual(
      "❌ Could not find link '/testpath'. Appears in:\n" +
        "    docs/test/test2/test4/testorigin.mdx    ❓ Did you mean '/test/testpath'?\n" +
        "    docs/test/test2/testorigin.mdx    ❓ Did you mean '/test/testpath'?\n" +
        "    docs/test/test3/testorigin.mdx    ❓ Did you mean '/test/testpath'?\n" +
        "    docs/test/testorigin.mdx    ❓ Did you mean '/test/testpath'?",
    );
  });

  test("Validate internal links with relative path and multiple origin files", async () => {
    let testLink = new Link("../testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      // Duplicate of the above value to confirm we de-duplicate originFiles.
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/testpath.mdx", []);
    let testFile2 = new File("docs/test/test2/testpath.mdx", []);
    const results = await testLink.checkLink([testFile1, testFile2]);
    expect(results).toEqual(
      "❌ Could not find link '../testpath'. Appears in:\n    docs/test/test2/testorigin.mdx\n    docs/test/test3/testorigin.mdx",
    );
  });

  test("Validate anchor of existing internal links with absolute path", async () => {
    let testLink = new Link("/testpath#test_anchor", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", ["#test_anchor"]);
    const results = await testLink.checkLink([testFile]);
    expect(results).toBeUndefined();
  });

  test("Validate anchor of non-existing internal links with absolute path", async () => {
    let testLink = new Link("/testpath#test_anchor", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", ["#test_diff_anchor"]);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '/testpath#test_anchor'. Appears in:\n    /testorigin.mdx    ❓ Did you mean '/testpath#test_diff_anchor'?",
    );
  });

  test("Validate anchor of existing internal links with relative path", async () => {
    let testLink = new Link("../testpath#test_anchor", [
      "docs/test/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", ["#test_anchor"]);
    const results = await testLink.checkLink([testFile]);
    expect(results).toBeUndefined();
  });

  test("Validate anchor of non-existing internal links with relative path", async () => {
    let testLink = new Link("../testpath#test-anchor", [
      "docs/test/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", ["#test_diff_anchor"]);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '../testpath#test-anchor'. Appears in:\n    docs/test/testorigin.mdx    ❓ Did you mean '/testpath#test_diff_anchor'?",
    );
  });

  test("Validate existing external links", async () => {
    let testLink = new Link("https://github.com/Qiskit", ["/testorigin.mdx"]);
    const results = await testLink.checkLink([]);
    expect(results).toBeUndefined();
  });

  test("Validate existing external links", async () => {
    let testLink = new Link("https://github.com/QiskitNotExistingRepo", [
      "/testorigin.mdx",
    ]);
    const results = await testLink.checkLink([]);
    expect(results).toEqual(
      "❌ Could not find link 'https://github.com/QiskitNotExistingRepo'. Appears in:\n    /testorigin.mdx",
    );
  });
});

describe("Generate the possible paths of a given link", () => {
  test("Possible links for an internal link with a relative path", () => {
    let testLink = new Link("../testFile", ["docs/test/test2/testorigin.mdx"]);
    let possiblePaths = testLink.possibleFilePaths(
      "docs/test/test2/testorigin.mdx",
    );
    let expectedPaths = [
      "docs/test/testFile.md",
      "docs/test/testFile.mdx",
      "docs/test/testFile.ipynb",
      "docs/test/testFile/index.md",
      "docs/test/testFile/index.mdx",
      "docs/test/testFile/index.ipynb",
    ];
    expect(possiblePaths).toEqual(expectedPaths);
  });

  test("Possible links for an internal link with an absolute path", () => {
    let testLink = new Link("/testFile", ["docs/test/test2/testorigin.mdx"]);
    let possiblePaths = testLink.possibleFilePaths(
      "docs/test/test2/testorigin.mdx",
    );
    let expectedPaths = [
      "docs/testFile.md",
      "docs/testFile.mdx",
      "docs/testFile.ipynb",
      "docs/testFile/index.md",
      "docs/testFile/index.mdx",
      "docs/testFile/index.ipynb",
    ];
    expect(possiblePaths).toEqual(expectedPaths);
  });
});
