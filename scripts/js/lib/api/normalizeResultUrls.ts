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

import { kebabCase, initial, last } from "lodash-es";

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { C_API_BASE_PATH } from "./conversionPipeline.js";
import { removePart } from "../stringUtils.js";

export function kebabCaseAndShortenPage(page: string, pkgName: string): string {
  // Transform the URLs to kebab-case. We also replace values like -v-2 with -v2
  const kebab = kebabCase(page).replace(/-v-([0-9]+)/g, `-v$1`);
  return kebab === pkgName ? kebab : kebab.replace(`${pkgName}-`, "");
}

export function normalizeResultUrls(
  results: HtmlToMdResultWithUrl[],
  kwargs: { kebabCaseAndShorten: boolean; pkgName: string },
): void {
  for (const result of results) {
    const flattened = omitRootFolders(result.url);
    if (!kwargs.kebabCaseAndShorten) {
      result.url = flattened;
      continue;
    }

    const parts = flattened.split("/");
    const page = kebabCaseAndShortenPage(last(parts)!, kwargs.pkgName);
    result.url = [...initial(parts), page].join("/");
  }
}

function omitRootFolders(path: string): string {
  return removePart(path, "/", ["stubs", "apidocs", "apidoc", "cdoc"]);
}
