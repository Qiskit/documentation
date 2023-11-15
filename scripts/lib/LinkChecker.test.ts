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
    const correct_values = ["/testpath", "", ["/testorigin.mdx"], false];
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
      ["/testorigin.mdx"],
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
      ["/testorigin.mdx"],
      true,
    ];
    expect(attributes).toEqual(correct_values);
  });
});

describe("Validate links", () => {
  test("Validate existing internal links with absolute path", async () => {
    let testLink = new Link("/testpath", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", [], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([]);
  });

  test("Validate non-existing internal links with absolute path", async () => {
    let testLink = new Link("/test-alternative-path", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", [], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([
      "❌ /testorigin.mdx: Could not find link '/test-alternative-path'",
    ]);
  });

  test("Validate existing internal links with relative path", async () => {
    let testLink = new Link("../testpath", ["docs/test/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", [], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([]);
  });

  test("Validate non-existing internal links with relative path", async () => {
    let testLink = new Link("../testpath", ["docs/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", [], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([
      "❌ docs/testorigin.mdx: Could not find link '../testpath'",
    ]);
  });

  test("Validate existing internal links with absolute path and multiple origin files", async () => {
    let testLink = new Link("/testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/testpath.mdx", [], false);
    let testFile2 = new File("docs/test/test2/testpath.mdx", [], false);
    const results = await testLink.checkLink([testFile1, testFile2]);
    expect(results).toEqual([]);
  });

  test("Validate non-existing internal links with absolute path and multiple origin files", async () => {
    let testLink = new Link("/testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/test/testpath.mdx", [], false);
    let testFile2 = new File("docs/test2/test3/testpath.mdx", [], false);
    const results = await testLink.checkLink([testFile1, testFile2]);
    expect(results).toEqual([
      "❌ docs/test/testorigin.mdx: Could not find link '/testpath'",
      "❌ docs/test/test2/testorigin.mdx: Could not find link '/testpath'",
      "❌ docs/test/test3/testorigin.mdx: Could not find link '/testpath'",
      "❌ docs/test/test2/test4/testorigin.mdx: Could not find link '/testpath'",
    ]);
  });

  test("Validate internal links with relative path and multiple origin files", async () => {
    let testLink = new Link("../testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/testpath.mdx", [], false);
    let testFile2 = new File("docs/test/test2/testpath.mdx", [], false);
    const results = await testLink.checkLink([testFile1, testFile2]);
    expect(results).toEqual([
      "❌ docs/test/test2/testorigin.mdx: Could not find link '../testpath'",
      "❌ docs/test/test3/testorigin.mdx: Could not find link '../testpath'",
    ]);
  });

  test("Validate anchor of existing internal links with absolute path", async () => {
    let testLink = new Link("/testpath#test_anchor", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", ["#test_anchor"], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([]);
  });

  test("Validate anchor of non-existing internal links with absolute path", async () => {
    let testLink = new Link("/testpath#test_anchor", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", ["#test_diff_anchor"], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([
      "❌ /testorigin.mdx: Could not find link '/testpath#test_anchor'",
    ]);
  });

  test("Validate anchor of existing internal links with relative path", async () => {
    let testLink = new Link("../testpath#test_anchor", [
      "docs/test/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", ["#test_anchor"], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([]);
  });

  test("Validate anchor of non-existing internal links with relative path", async () => {
    let testLink = new Link("../testpath#test-anchor", [
      "docs/test/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", ["#test_diff_anchor"], false);
    const results = await testLink.checkLink([testFile]);
    expect(results).toEqual([
      "❌ docs/test/testorigin.mdx: Could not find link '../testpath#test-anchor'",
    ]);
  });

  test("Validate existing external links", async () => {
    let testLink = new Link("https://github.com/Qiskit", ["/testorigin.mdx"]);
    const results = await testLink.checkLink([]);
    expect(results).toEqual([]);
  });

  test("Validate existing external links", async () => {
    let testLink = new Link("https://github.com/QiskitNotExistingRepo", [
      "/testorigin.mdx",
    ]);
    const results = await testLink.checkLink([]);
    expect(results).toEqual([
      "❌ /testorigin.mdx: Could not find link 'https://github.com/QiskitNotExistingRepo'",
    ]);
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
