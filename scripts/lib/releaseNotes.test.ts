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

import { describe, expect, test } from "@jest/globals";
import {
  sortReleaseNotesVersions,
  extractMarkdownReleaseNotesPatches,
} from "./releaseNotes";

describe("sortReleaseNotesVersions", () => {
  test("Test versions have the correct order", () => {
    const markdownByVersionPatch = {
      "0.45.0": "",
      "0.45.1": "",
      "0.45.1rc1": "",
      "0.46.1": "",
      "0.46.1rc1": "",
      "0.46.1rc2": "",
      "0.47.0": "",
      "0.47.1": "",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.47.1", ""],
      ["0.47.0", ""],
      ["0.46.1", ""],
      ["0.46.1rc2", ""],
      ["0.46.1rc1", ""],
      ["0.45.1", ""],
      ["0.45.1rc1", ""],
      ["0.45.0", ""],
    ]);
  });
});

describe("extractMarkdownReleaseNotesPatches", () => {
  test("Divide the markdown into versions", () => {
    const markdown = `
# Title
This is a header

## Subtitle header
Extra information before all the versions

### Extra section before the notes
Extra section

## 0.25.0
This is a test for version 0.25.0

## 0.25.1
This is a test for version 0.25.1

### New features
Example

## 0.45.0rc1
This is a test for version 0.45.0rc1

### New features
Example

## 0.45.0
This is a test for version 0.45.0`;

    const [versionsFound, markdownByPatchVersionExpect] =
      extractMarkdownReleaseNotesPatches(markdown);

    const versionsFoundExpected = new Set(["0.45"]);
    const markdownByPatchVersion: { [id: string]: string } = {};
    markdownByPatchVersion[
      "0.45.0rc1"
    ] = `## 0.45.0rc1\nThis is a test for version 0.45.0rc1\n\n### New features\nExample\n`;
    markdownByPatchVersion[
      "0.45.0"
    ] = `## 0.45.0\nThis is a test for version 0.45.0`;

    expect([versionsFound, markdownByPatchVersionExpect]).toEqual([
      versionsFoundExpected,
      markdownByPatchVersion,
    ]);
  });
});
