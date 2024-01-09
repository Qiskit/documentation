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

import addFrontMatter from "./addFrontMatter";
import { Pkg } from "../sharedTypes";
import { HtmlToMdResult } from "./SphinxToMdResult";

test("addFrontMatter()", () => {
  const results: HtmlToMdResult[] = [
    {
      markdown: "# Hardcoded!",
      meta: {
        hardcoded_frontmatter: "title: hardcoded\ndescription: Hello world!",
      },
      images: [],
      isReleaseNotes: false,
    },
    {
      markdown: "# Hardcoded with python_api_name!",
      meta: {
        hardcoded_frontmatter:
          "title: hardcoded with python_api_name\ndescription: Hello world!",
        python_api_name: "quantum_software.MyClass",
        python_api_type: "class",
      },
      images: [],
      isReleaseNotes: true,
    },
    {
      markdown: "# Python API",
      meta: {
        python_api_name: "quantum_software.MyClass",
        python_api_type: "class",
      },
      images: [],
      isReleaseNotes: false,
    },
    {
      markdown: "# Some release notes!",
      meta: {},
      images: [],
      isReleaseNotes: true,
    },
  ];
  const pkg = {
    versionWithoutPatch: "0.0",
    hasSeparateReleaseNotes: true,
    title: "My Quantum Software Project",
  } as Pkg;

  addFrontMatter(results, pkg);
  expect(results.map((result) => result.markdown)).toEqual([
    `---
title: hardcoded
description: Hello world!
---

# Hardcoded!
`,
    `---
title: hardcoded with python_api_name
description: Hello world!
---

# Hardcoded with python_api_name!
`,
    `---
title: MyClass
description: API reference for quantum_software.MyClass
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: quantum_software.MyClass
---

# Python API
`,
    `---
title: My Quantum Software Project 0.0 release notes
description: Changes made in My Quantum Software Project 0.0
in_page_toc_max_heading_level: 2
---

# Some release notes!
`,
  ]);
});
