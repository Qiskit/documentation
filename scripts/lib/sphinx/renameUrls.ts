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

import { SphinxToMdResultWithUrl } from "./SphinxToMdResult";

export function renameUrl(url: string): string {
  return (
    url
      .replace(/\/release_notes$/g, "/release-notes")
      // The original API docs don't call their API index pages `/index`.
      // We can't fix their setup until qiskit.org is removed, so
      // instead we fix it here.
      .replace(/\/ibm_provider$/g, "/index")
      .replace(/\/runtime_service$/g, "/index")
      .replace(/\/terra$/g, "/index")
  );
}

export function renameUrls(results: SphinxToMdResultWithUrl[]): void {
  for (let result of results) {
    result.url = renameUrl(result.url);
  }
}
