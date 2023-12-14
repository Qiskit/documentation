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

import { getLastPartFromFullIdentifier } from "../stringUtils";
import { SphinxToMdResult } from "./SphinxToMdResult";
import { Pkg } from "../sharedTypes";

export function addFrontMatter<T extends SphinxToMdResult>(
  results: T[],
  pkg: Pkg,
): void {
  for (let result of results) {
    let markdown = result.markdown;
    if (result.meta.python_api_name) {
      result.markdown = `---
title: ${getLastPartFromFullIdentifier(result.meta.python_api_name)}
description: API reference for ${result.meta.python_api_name}
in_page_toc_min_heading_level: 1
python_api_type: ${result.meta.python_api_type}
python_api_name: ${result.meta.python_api_name}
---

${markdown}
`;
    } else if (result.isReleaseNotes) {
      result.markdown = `---
title: ${pkg.title}${
        pkg.hasSeparateReleaseNotes ? " " + pkg.versionWithoutPatch : ""
      } release notes
description: Changes made to ${pkg.title}
in_page_toc_max_heading_level: 2
---

${markdown}
`;
    }
  }
}
