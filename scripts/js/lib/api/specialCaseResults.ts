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

export const RUNTIME_INDEX_META = `title: Qiskit Runtime IBM Client API Docs
description: API documentation for the qiskit-ibm-runtime client`;

export const PROVIDER_INDEX_META = `title: Qiskit IBM Provider API Docs
description: API documentation for qiskit-ibm-provider`;

export const TRANSPILER_SERVICE_INDEX_META = `title: Qiskit Transpiler Service Client Docs
description: API documentation for the qiskit-transpiler-service client`;

export function transformSpecialCaseUrl(url: string): string {
  return (
    url
      // We use `-` rather than `_` as our delimiter.
      .replace(/(?<=^|\/)release_notes(?=#|$)/g, "release-notes")
      .replace(/(?<=^|\/)terra(?=#|$)/g, "index")
      .replace(/(?<=^|\/)ibm-provider(?=#|$)/g, "index")
      .replace(/(?<=^|\/)ibm-runtime(?=#|$)/g, "index")
  );
}

export function specialCaseResults(results: HtmlToMdResultWithUrl[]): void {
  for (let result of results) {
    if (result.url.endsWith("/ibm-provider")) {
      result.meta = {
        hardcodedFrontmatter: PROVIDER_INDEX_META,
      };
    }

    if (
      result.url.endsWith("/ibm-runtime") ||
      (result.url.endsWith("/index") &&
        result.url.includes("qiskit-ibm-runtime/"))
    ) {
      result.meta = {
        hardcodedFrontmatter: RUNTIME_INDEX_META,
      };
    }

    if (
      result.url.endsWith("/index") &&
      result.url.includes("qiskit-transpiler-service/")
    ) {
      result.meta = {
        hardcodedFrontmatter: TRANSPILER_SERVICE_INDEX_META,
      };
    }

    result.url = transformSpecialCaseUrl(result.url);
  }
}
