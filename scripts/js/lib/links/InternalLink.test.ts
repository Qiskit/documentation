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

import { expect, test } from "@playwright/test";

import { File, InternalLink } from "./InternalLink.js";

test.describe("Test the constructor of InternalLink", () => {
  test("without anchors", () => {
    let testLink = new InternalLink("/testpath", ["/testorigin.mdx"]);
    const attributes = [testLink.value, testLink.anchor, testLink.originFiles];
    const correct_values = ["/testpath", "", new Set(["/testorigin.mdx"])];
    expect(attributes).toEqual(correct_values);
  });

  test("with anchors", () => {
    let testLink = new InternalLink("/testpath#testanchor", [
      "/testorigin.mdx",
    ]);
    const attributes = [testLink.value, testLink.anchor, testLink.originFiles];
    const correct_values = [
      "/testpath",
      "#testanchor",
      new Set(["/testorigin.mdx"]),
    ];
    expect(attributes).toEqual(correct_values);
  });
});

test.describe("Validate links", () => {
  test("existing with absolute path", () => {
    let testLink = new InternalLink("/testpath", ["/testorigin.mdx"]);
    let testFile = new File("docs/testpath.mdx", new Set());
    const results = testLink.check([testFile]);
    expect(results).toBeUndefined();
  });

  test("non-existing with absolute path", () => {
    let testLink = new InternalLink("/test-alternative-path", [
      "/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", new Set());
    const results = testLink.check([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '/test-alternative-path'. Appears in:\n    /testorigin.mdx",
    );
  });

  test("existing with relative path", () => {
    let testLink = new InternalLink("../testpath", [
      "docs/test/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", new Set());
    const results = testLink.check([testFile]);
    expect(results).toBeUndefined();
  });

  test("non-existing with relative path", () => {
    let testLink = new InternalLink("../testpath", [
      "docs/test1/test2/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", new Set());
    const results = testLink.check([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '../testpath'. Appears in:\n" +
        "    docs/test1/test2/testorigin.mdx    ❓ Did you mean '/testpath'?",
    );
  });

  test("existing absolute path and multiple origin files", () => {
    let testLink = new InternalLink("/testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/testpath.mdx", new Set());
    let testFile2 = new File("docs/test/test2/testpath.mdx", new Set());
    const results = testLink.check([testFile1, testFile2]);
    expect(results).toBeUndefined();
  });

  test("non-existing with absolute path and multiple origin files", () => {
    let testLink = new InternalLink("/testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/test/testpath.mdx", new Set());
    let testFile2 = new File("docs/test2/test3/testpath.mdx", new Set());
    const results = testLink.check([testFile1, testFile2]);
    expect(results).toEqual(
      "❌ Could not find link '/testpath'. Appears in:\n" +
        "    docs/test/test2/test4/testorigin.mdx    ❓ Did you mean '/test/testpath'?\n" +
        "    docs/test/test2/testorigin.mdx    ❓ Did you mean '/test/testpath'?\n" +
        "    docs/test/test3/testorigin.mdx    ❓ Did you mean '/test/testpath'?\n" +
        "    docs/test/testorigin.mdx    ❓ Did you mean '/test/testpath'?",
    );
  });

  test("existing image", () => {
    let testLink = new InternalLink("/images/my-img.png", [
      "docs/test/testorigin.mdx",
    ]);
    let imgFile = new File("public/docs/images/my-img.png", new Set());
    const results = testLink.check([imgFile]);
    expect(results).toBeUndefined();
  });

  test("non-existing image", () => {
    let testLink = new InternalLink("/images/my-img.png", [
      "docs/test/testorigin.mdx",
    ]);
    let imgFile = new File("public/docs/images/another-img.png", new Set());
    const results = testLink.check([imgFile]);
    expect(results).toEqual(
      "❌ Could not find link '/images/my-img.png'. Appears in:\n" +
        "    docs/test/testorigin.mdx    ❓ Did you mean '/images/another-img.png'?",
    );
  });

  test("relative path and multiple origin files", () => {
    let testLink = new InternalLink("../testpath", [
      "docs/test/testorigin.mdx",
      "docs/test/test2/testorigin.mdx",
      // Duplicate of the above value to confirm we de-duplicate originFiles.
      "docs/test/test2/testorigin.mdx",
      "docs/test/test3/testorigin.mdx",
      "docs/test/test2/test4/testorigin.mdx",
    ]);
    let testFile1 = new File("docs/testpath.mdx", new Set());
    let testFile2 = new File("docs/test/test2/testpath.mdx", new Set());
    const results = testLink.check([testFile1, testFile2]);
    expect(results).toEqual(
      "❌ Could not find link '../testpath'. Appears in:\n" +
        "    docs/test/test2/testorigin.mdx    ❓ Did you mean '/testpath'?\n" +
        "    docs/test/test3/testorigin.mdx    ❓ Did you mean '/testpath'?",
    );
  });

  test("anchor with absolute path", () => {
    let testLink = new InternalLink("/testpath#test_anchor", [
      "/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", new Set(["#test_anchor"]));
    const results = testLink.check([testFile]);
    expect(results).toBeUndefined();
  });

  test("non-existing anchor with absolute path", () => {
    let testLink = new InternalLink("/testpath#test_anchor", [
      "/testorigin.mdx",
    ]);
    let testFile = new File(
      "docs/testpath.mdx",
      new Set(["#test_diff_anchor"]),
    );
    const results = testLink.check([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '/testpath#test_anchor'. Appears in:\n    /testorigin.mdx    ❓ Did you mean '/testpath#test_diff_anchor'?",
    );
  });

  test("anchor with relative path", () => {
    let testLink = new InternalLink("../testpath#test_anchor", [
      "docs/test/testorigin.mdx",
    ]);
    let testFile = new File("docs/testpath.mdx", new Set(["#test_anchor"]));
    const results = testLink.check([testFile]);
    expect(results).toBeUndefined();
  });

  test("non-existing anchor with relative path", () => {
    let testLink = new InternalLink("../testpath#test-anchor", [
      "docs/test/testorigin.mdx",
    ]);
    let testFile = new File(
      "docs/testpath.mdx",
      new Set(["#test_diff_anchor"]),
    );
    const results = testLink.check([testFile]);
    expect(results).toEqual(
      "❌ Could not find link '../testpath#test-anchor'. Appears in:\n    docs/test/testorigin.mdx    ❓ Did you mean '/testpath#test_diff_anchor'?",
    );
  });
});

test.describe("Generate the possible paths of a given link", () => {
  test("Possible links with a relative path", () => {
    let testLink = new InternalLink("../testFile", [
      "docs/test/test2/testorigin.mdx",
    ]);
    let possiblePaths = testLink.possibleFilePaths(
      "docs/test/test2/testorigin.mdx",
    );
    let expectedPaths = [
      "docs/test/testFile.mdx",
      "docs/test/testFile.ipynb",
      "docs/test/testFile/index.mdx",
      "docs/test/testFile/index.ipynb",
    ];
    expect(possiblePaths).toEqual(expectedPaths);
  });

  test("Possible links with an absolute path", () => {
    let testLink = new InternalLink("/testFile", [
      "docs/test/test2/testorigin.mdx",
    ]);
    let possiblePaths = testLink.possibleFilePaths(
      "docs/test/test2/testorigin.mdx",
    );
    let expectedPaths = [
      "docs/testFile.mdx",
      "docs/testFile.ipynb",
      "docs/testFile/index.mdx",
      "docs/testFile/index.ipynb",
    ];
    expect(possiblePaths).toEqual(expectedPaths);
  });
});
