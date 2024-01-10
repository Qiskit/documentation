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

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

export const RUNTIME_INDEX_META = `title: Qiskit Runtime IBM Client API Docs
description: API documentation for qiskit-ibm-runtime`;

export const PROVIDER_INDEX_META = `title: Qiskit IBM Provider API Docs
description: API documentation for qiskit-ibm-provider`;

export function specialCaseResults(results: HtmlToMdResultWithUrl[]): void {
  for (let result of results) {
    // We use `-` rather than `_` as our delimiter.
    if (result.url.endsWith("/release_notes")) {
      result.url = result.url.replace(/\/release_notes$/g, "/release-notes");
    }

    // Before Qiskit 0.44, the API index page was called terra.html.
    if (result.url.endsWith("/terra")) {
      result.url = result.url.replace(/\/terra$/g, "/index");
    }

    if (result.url.endsWith("/ibm-provider")) {
      result.url = result.url.replace(/\/ibm-provider$/g, "/index");
      result.meta = {
        hardcodedFrontmatter: PROVIDER_INDEX_META,
      };
    }

    if (result.url.endsWith("/ibm-runtime")) {
      result.url = result.url.replace(/\/ibm-runtime$/g, "/index");
      result.meta = {
        hardcodedFrontmatter: RUNTIME_INDEX_META,
      };
    }
  }
}
