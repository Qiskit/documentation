// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { groupByMajorVersion } from "./releaseNotes";
import { generateReleaseNotesIndex } from "./releaseNotes";

import { expect, test } from "@playwright/test";

import { Pkg } from "./Pkg.js";

test("groupByMajorVersion()", () => {
  const input = ["2.1", "2.0", "1.5", "1.2", "3.0", "3.2", "3.1", "4.0", "4.3"];
  const expectedOutput = {
    "4": ["4.3", "4.0"],
    "3": ["3.2", "3.1", "3.0"],
    "2": ["2.1", "2.0"],
    "1": ["1.5", "1.2"],
  };
  const actualOutputmap = groupByMajorVersion(input);
  const actualOutput = Object.fromEntries(actualOutputmap);
  expect(actualOutput).toEqual(expectedOutput);
});

test.describe("generateReleaseNotesIndex", () => {
  test("renders grouped versions as Markdown accordion with list items", () => {
    const pkg = Pkg.mock({
      releaseNotesConfig: {
        enabled: true,
        separatePagesVersions: ["1.2", "1.3", "2.0"],
      },
    });
    const result = generateReleaseNotesIndex(pkg);
    expect(result).toEqual(
      `---
title: My Quantum Project release notes
description: New features, bug fixes, and other changes in previous versions of My Quantum Project.
---

# My Quantum Project release notes

New features, bug fixes, and other changes in previous versions of My Quantum Project.

## Release notes by version

<Accordion>
<AccordionItem open title="v2">
- [v2.0](./2.0)
</AccordionItem>

<AccordionItem title="v1">
- [v1.3](./1.3)
- [v1.2](./1.2)
</AccordionItem>
</Accordion>`,
    );
  });
});
