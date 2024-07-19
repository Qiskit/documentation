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

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { removePart } from "../stringUtils.js";

function flattenFolders(results: HtmlToMdResultWithUrl[]): void {
  for (const result of results) {
    result.url = omitRootFolders(result.url);
  }
}

function omitRootFolders(path: string): string {
  return removePart(path, "/", ["stubs", "apidocs", "apidoc"]);
}

export default flattenFolders;
