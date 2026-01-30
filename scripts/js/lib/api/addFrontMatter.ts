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

import { getLastPartFromFullIdentifier, removeSuffix } from "../stringUtils.js";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { Pkg } from "./Pkg.js";

function addFrontMatter(results: HtmlToMdResultWithUrl[], pkg: Pkg): void {
  let titleVersion;
  let descriptionVersion;
  if (pkg.isLatest()) {
    titleVersion = "latest version";
    descriptionVersion = `in the latest version of ${pkg.name}`;
  } else if (pkg.isDev()) {
    titleVersion = "dev version";
    descriptionVersion = `in the dev version of ${pkg.name}`;
  } else {
    titleVersion = `v${pkg.versionWithoutPatch}`;
    descriptionVersion = `in ${pkg.name} v${pkg.versionWithoutPatch}`;
  }

  for (let result of results) {
    let markdown = result.markdown;
    if (result.meta.hardcodedFrontmatter) {
      result.markdown = `---
${result.meta.hardcodedFrontmatter}
---

${markdown}
`;
    } else if (result.url.endsWith("index")) {
      result.markdown = `---
title: ${removeSuffix(pkg.title, " API")} API documentation (${titleVersion})
description: Index of all the modules ${descriptionVersion}.
---

${markdown}
`;
    } else if (result.url.endsWith("/root") && pkg.hasRootNamespaceFile) {
      result.markdown = `---
title: ${removeSuffix(pkg.title, " API")} API documentation (${titleVersion})
description: Re-exports in the root namespace ${descriptionVersion}.
---

${markdown}
`;
    } else if (result.meta.apiName) {
      // For class, exception, and function pages, it's useful to have
      // the code object's own h1 show up in the page table of contents
      // so that people can quickly scroll up to the code object, since
      // it is non-trivial, like having the class constructor. But for
      // module pages, showing the h1 in the page ToC is noisy.
      const toc_min_level =
        pkg.isCApi() || result.meta.apiType === "module" ? 2 : 1;
      result.markdown = `---
title: ${getLastPartFromFullIdentifier(result.meta.apiName)} (${titleVersion})
description: API reference for ${result.meta.apiName} ${descriptionVersion}
in_page_toc_min_heading_level: ${toc_min_level}
python_api_type: ${result.meta.apiType}
python_api_name: ${result.meta.apiName}
---

${markdown}
`;
    } else if (result.isReleaseNotes) {
      let versionStr = "";
      let descriptionSuffix = `to ${pkg.title}`;
      let maxHeadingLevel = 2;
      if (pkg.hasSeparateReleaseNotes()) {
        versionStr = ` ${pkg.versionWithoutPatch}`;
        descriptionSuffix = `in ${pkg.title}${versionStr}`;
        maxHeadingLevel = 3;
      }
      result.markdown = `---
title: ${pkg.title}${versionStr} release notes
description: Changes made ${descriptionSuffix}
in_page_toc_max_heading_level: ${maxHeadingLevel}
---

${markdown}
`;
    }
  }
}

export default addFrontMatter;
