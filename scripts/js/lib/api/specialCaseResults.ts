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

export const RUNTIME_INDEX_META = `title: Qiskit Runtime Client API Docs
description: API documentation for the qiskit-ibm-runtime client`;

export const TRANSPILER_SERVICE_INDEX_META = `title: Qiskit Transpiler Service Client Docs
description: API documentation for the qiskit-ibm-transpiler client`;

export function transformSpecialCaseUrl(url: string): string {
  return (
    url
      // We use `-` rather than `_` as our delimiter.
      .replace(/(?<=^|\/)release_notes(?=#|$)/g, "release-notes")
      .replace(/(?<=^|\/)terra(?=#|$)/g, "index")
      .replace(/(?<=^|\/)ibm-runtime(?=#|$)/g, "index")
  );
}

export function specialCaseResults(results: HtmlToMdResultWithUrl[]): void {
  for (let result of results) {
    result.url = transformSpecialCaseUrl(result.url);
  }
}
