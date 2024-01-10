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

import { expect, test } from "@jest/globals";

import flattenFolders from "./flattenFolders";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

test("flattenFolders()", () => {
  const results = [
    { url: "/api/my-pkg/apidoc/my_module" },
    { url: "/api/my-pkg/apidocs/my_module2" },
    { url: "/api/my-pkg/stubs/my_module.foo.Bar" },
    { url: "/api/my-pkg/release_notes" },
  ] as HtmlToMdResultWithUrl[];

  flattenFolders(results);
  expect(results.map((result) => result.url)).toEqual([
    "/api/my-pkg/my_module",
    "/api/my-pkg/my_module2",
    "/api/my-pkg/my_module.foo.Bar",
    "/api/my-pkg/release_notes",
  ]);
});
