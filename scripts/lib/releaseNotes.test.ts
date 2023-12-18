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
  test("Sort smaller version and bigger version", () => {
    const markdownByVersionPatch = {
      "0.25.1": "test",
      "0.26.1": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.1", "test"],
      ["0.26.1", "test"],
    ]);
  });

  test("Sort bigger version and smaller version", () => {
    const markdownByVersionPatch = {
      "0.26.1": "test",
      "0.25.1": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.1", "test"],
      ["0.26.1", "test"],
    ]);
  });

  test("Sort smaller patch and bigger patch from the same version", () => {
    const markdownByVersionPatch = {
      "0.25.0": "test",
      "0.25.1": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.0", "test"],
      ["0.25.1", "test"],
    ]);
  });

  test("Sort bigger patch and smaller patch from the same version", () => {
    const markdownByVersionPatch = {
      "0.25.1": "test",
      "0.25.0": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.0", "test"],
      ["0.25.1", "test"],
    ]);
  });

  test("Sort the release candidate version and its current version", () => {
    const markdownByVersionPatch = {
      "0.25.0rc1": "test",
      "0.25.0": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.0rc1", "test"],
      ["0.25.0", "test"],
    ]);
  });

  test("Sort the current version and its release candidate", () => {
    const markdownByVersionPatch = {
      "0.25.0": "test",
      "0.25.0rc1": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.0rc1", "test"],
      ["0.25.0", "test"],
    ]);
  });

  test("Sort smaller release candidate and bigger release candidate", () => {
    const markdownByVersionPatch = {
      "0.25.0rc1": "test",
      "0.25.0rc2": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.0rc1", "test"],
      ["0.25.0rc2", "test"],
    ]);
  });

  test("Sort bigger release candidate and smaller release candidate", () => {
    const markdownByVersionPatch = {
      "0.25.0rc2": "test",
      "0.25.0rc1": "test",
    };

    expect(
      Object.entries(sortReleaseNotesVersions(markdownByVersionPatch)),
    ).toEqual([
      ["0.25.0rc1", "test"],
      ["0.25.0rc2", "test"],
    ]);
  });
});

describe("extractMarkdownReleaseNotesPatches", () => {
  test("Divide the markdown into versions", () => {
    const markdown = `
## 0.25.0
This is a test for version 0.25.0
## 0.25.1
This is a test for version 0.25.1
## 0.45.0rc1
This is a test for version 0.45.0rc1
## 0.45.0
This is a test for version 0.45.0`;

    const [versionsFoundExpect, markdownByPatchVersionExpect] =
      extractMarkdownReleaseNotesPatches(markdown);

    const versionsFound: Set<string> = new Set<string>(["0.25", "0.45"]);
    const markdownByPatchVersion: { [id: string]: string } = {};
    markdownByPatchVersion[
      "0.25.0"
    ] = `## 0.25.0\nThis is a test for version 0.25.0`;
    markdownByPatchVersion[
      "0.25.1"
    ] = `## 0.25.1\nThis is a test for version 0.25.1`;
    markdownByPatchVersion[
      "0.45.0rc1"
    ] = `## 0.45.0rc1\nThis is a test for version 0.45.0rc1`;
    markdownByPatchVersion[
      "0.45.0"
    ] = `## 0.45.0\nThis is a test for version 0.45.0`;

    expect([versionsFoundExpect, markdownByPatchVersionExpect]).toEqual([
      versionsFound,
      markdownByPatchVersion,
    ]);
  });
});
