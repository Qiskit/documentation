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

import {
  kebabCaseAndShortenPage,
  normalizeResultUrls,
} from "./normalizeResultUrls.js";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";

test.describe("kebabCaseAndShortenPage()", () => {
  const cases = [
    ["my_api", "my-api"],
    ["my_api.Foo", "foo"],
    ["my_api.a_function", "a-function"],
    ["my_api.module.FooBar2", "module-foo-bar-2"],
    ["another_api.Foo", "another-api-foo"],
  ];

  cases.forEach(([input, expected]) => {
    test(input, () => {
      const result = kebabCaseAndShortenPage(input, "my-api");
      expect(result).toEqual(expected);
    });
  });
});

test.describe("normalizeResultUrls()", () => {
  const results = [
    { url: "/api/my-pkg/apidoc/my_pkg" },
    { url: "/api/my-pkg/apidoc/my_module" },
    { url: "/api/my-pkg/apidocs/my_module2" },
    { url: "/api/my-pkg/apidocs/my_moduleV2" },
    { url: "/api/my-pkg/stubs/my_pkg.foo.Bar" },
    { url: "/api/my-pkg/stubs/my_pkg.a_function" },
    { url: "/api/my-pkg/release_notes" },
    { url: "/api/my-pkg/cdoc/my_pkg.c_api" },
  ] as HtmlToMdResultWithUrl[];

  test("no kebab-case", () => {
    normalizeResultUrls(results, {
      kebabCaseAndShorten: false,
      pkgName: "my-pkg",
    });
    expect(results.map((result) => result.url)).toEqual([
      "/api/my-pkg/my_pkg",
      "/api/my-pkg/my_module",
      "/api/my-pkg/my_module2",
      "/api/my-pkg/my_moduleV2",
      "/api/my-pkg/my_pkg.foo.Bar",
      "/api/my-pkg/my_pkg.a_function",
      "/api/my-pkg/release_notes",
      "/api/my-pkg/my_pkg.c_api",
    ]);
  });

  test("kebab-case", () => {
    normalizeResultUrls(results, {
      kebabCaseAndShorten: true,
      pkgName: "my-pkg",
    });
    expect(results.map((result) => result.url)).toEqual([
      "/api/my-pkg/my-pkg",
      "/api/my-pkg/my-module",
      "/api/my-pkg/my-module-2",
      "/api/my-pkg/my-module-v2",
      "/api/my-pkg/foo-bar",
      "/api/my-pkg/a-function",
      "/api/my-pkg/release-notes",
      "/api/my-pkg/c-api",
    ]);
  });
});
