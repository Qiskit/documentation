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

import { $ } from "zx";
import { getRoot, pathExists } from "./fs";
import { parse } from "path";
import { Pkg } from "./sharedTypes";
import { readFile, writeFile, readdir } from "fs/promises";

interface releaseNoteEntry {
  title: string;
  url: string;
}

/**
 * Check for markdown files in `docs/api/package-name/release-notes/
 * then sort them and create entries for the TOC.
 */
export const findLegacyReleaseNotes = async (
  pkg: Pkg,
): Promise<releaseNoteEntry[]> => {
  if (!pkg.hasSeparateReleaseNotes) {
    return [];
  }
  const legacyReleaseNoteVersions = (
    await $`ls ${getRoot()}/docs/api/${pkg.name}/release-notes`.quiet()
  ).stdout
    .trim()
    .split("\n")
    .map((x) => parse(x).name)
    .filter((x) => x.match(/^\d/)) // remove index
    .sort((a: string, b: string) => {
      const aParts = a.split(".").map((x) => Number(x));
      const bParts = b.split(".").map((x) => Number(x));
      for (let i = 0; i < 2; i++) {
        if (aParts[i] > bParts[i]) {
          return 1;
        }
        if (aParts[i] < bParts[i]) {
          return -1;
        }
      }
      return 0;
    })
    .reverse();

  const legacyReleaseNoteEntries = [];
  for (let version of legacyReleaseNoteVersions) {
    legacyReleaseNoteEntries.push({
      title: version,
      url: `/api/${pkg.name}/release-notes/${version}`,
    });
  }
  return legacyReleaseNoteEntries;
};

export function addNewReleaseNotes(pkg: Pkg): void {
  if (pkg.releaseNoteEntries[0].title === pkg.versionWithoutPatch) {
    // Entries already includes most recent release notes
    return;
  }
  pkg.releaseNoteEntries.unshift({
    title: pkg.versionWithoutPatch,
    url: `/api/${pkg.name}/release-notes/${pkg.versionWithoutPatch}`,
  });
}

export function generateReleaseNotesIndex(pkg: Pkg): string {
  let markdown = `---
title: ${pkg.title} release notes
description: New features, bug fixes, and other changes in previous versions of ${pkg.title}.
---

# ${pkg.title} release notes

New features, bug fixes, and other changes in previous versions of ${pkg.title}.

## Release notes by version

`;
  for (const entry of pkg.releaseNoteEntries) {
    markdown += `* [${entry.title}](${entry.url})\n`;
  }
  return markdown;
}

/**
 * Path to release notes file for the version we're adding
 */
export function currentReleaseNotesPath(pkg: Pkg): string {
  return `${getRoot()}/docs/api/${pkg.name}/release-notes/${
    pkg.versionWithoutPatch
  }.md`;
}

/**
 * Adds a new entry for the release notes of the current API version to the _toc.json
 * of all historical API versions.
 */
export async function updateHistoricalTocFiles(pkg: Pkg): Promise<void> {
  console.log("Updating _toc.json files for the historical versions");

  const historicalFolders = (
    await readdir(`${getRoot()}/docs/api/${pkg.name}`, { withFileTypes: true })
  ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

  for (let folder of historicalFolders) {
    let tocFile = await readFile(
      `${getRoot()}/docs/api/${pkg.name}/${folder.name}/_toc.json`,
      {
        encoding: "utf8",
      },
    );

    let jsonData = JSON.parse(tocFile);

    // Add the new version if necessary
    for (let child of jsonData.children) {
      if (child.title == "Release notes") {
        addNewReleaseNoteToc(child, pkg.versionWithoutPatch);
      }
    }

    await writeFile(
      `${getRoot()}/docs/api/${pkg.name}/${folder.name}/_toc.json`,
      JSON.stringify(jsonData, null, 2) + "\n",
    );
  }
}

/**
 * Adds a new entry for the current API version to the JSON list of release notes
 */
function addNewReleaseNoteToc(releaseNotesNode: any, newVersion: string) {
  // Add the current API version in the second position of the list
  if (releaseNotesNode.children[0].title != newVersion) {
    releaseNotesNode.children.unshift({
      title: newVersion,
      url: `/api/qiskit/release-notes/${newVersion}`,
    });
  }
}

/**
 * Sorts the release notes dictionary by the patch version
 * in descending order, e.g. 0.25.2 then 0.25.1.
 *
 * Returns a dictionary with the corresponding markdown for
 * each patch with the entries sorted by release.
 */
export function sortReleaseNotesVersions(markdownByPatchVersion: {
  [id: string]: string;
}): { [id: string]: string } {
  // Sorts the entries of markdownByPathVersion by patch in descending order,
  // returning an array with elements corresponding to the dictionary entries
  // as arrays of two elements (key and value).
  // e.g.
  // makrdownByPathVersion = {"0.45.0": "test 1", "0.46.0": "test 2"}
  // =>
  // markdownByPatchSorted = [["0.46.0", "test 2"],["0.45.0", "test 1"]]
  const markdownByPatchSorted = Object.entries(markdownByPatchVersion).sort(
    ([version1], [version2]) => {
      const versionPatch1 = version1.split("rc").slice(0, 1)[0];
      const versionPatch2 = version2.split("rc").slice(0, 1)[0];

      if (versionPatch1 == versionPatch2) {
        // The release candidates within the same patch should appear last.
        // e.g. version 0.45.1rc1 should appear after version 0.45.1.
        if (version1.length < version2.length) {
          return -1;
        } else if (version1.length > version2.length) {
          return 1;
        }
      }

      return version2.localeCompare(version1);
    },
  );

  return Object.fromEntries(markdownByPatchSorted);
}

/**
 * Process the markdown dividing it into small sections for each patch version
 *
 * Returns a tuple:
 *   1. A Set of strings representing all the minor versions we found in the
 *      markdown.
 *   2. A dictionary with the corresponding markdown for each patch version
 *      found.
 */
export function extractMarkdownReleaseNotesPatches(
  markdown: string,
): [Set<string>, { [id: string]: string }] {
  const sectionsSplit = markdown.split(/\n## (?=[0-9])/);
  const sections: string[] = sectionsSplit.slice(1, sectionsSplit.length);

  const minorVersionsFound = new Set<string>();
  const markdownByPatchVersion: { [id: string]: string } = {};

  for (let section of sections) {
    const versionPatch = section.split("\n").slice(0, 1)[0];
    const versionMinor = versionPatch.split(".").slice(0, 2).join(".");

    minorVersionsFound.add(versionMinor);

    const content = section.split("\n");
    content.shift();
    markdownByPatchVersion[versionPatch] = `## ${versionPatch}\n${content.join(
      "\n",
    )}`;
  }

  return [minorVersionsFound, markdownByPatchVersion];
}

/**
 * Updates the release notes folder by adding the notes to their corresponding version
 * file.
 */
export async function writeSeparateReleaseNotes(
  pkg: Pkg,
  releaseNoteMarkdown: string,
): Promise<void> {
  if (!pkg.hasSeparateReleaseNotes) {
    throw new Error(
      `The package ${pkg.name} doesn't have separate release notes`,
    );
  }

  // Dictionary to store the file header in case we need to reconstruct a file from a
  // previous version
  const filesToInitialHeaders: { [id: string]: string } = {};
  const basePath = `${getRoot()}/docs/api/${pkg.name}/release-notes`;

  const [minorVersionsFound, markdownByPatchVersion] =
    extractMarkdownReleaseNotesPatches(releaseNoteMarkdown);

  // Read the current release notes for each version found
  for (let version of minorVersionsFound) {
    const versionPath = `${basePath}/${version}.md`;

    if (!(await pathExists(versionPath))) {
      // We don't have any release note file for that version
      continue;
    }

    const currentMarkdown = await readFile(versionPath, "utf-8");
    filesToInitialHeaders[version] = currentMarkdown
      .split(/\n## (?=[0-9])/)
      .slice(0, 1)[0];
  }

  const markdownByPatchVersionSorted = sortReleaseNotesVersions(
    markdownByPatchVersion,
  );

  // Generate the modified release notes files
  const markdownByMinorVersion: { [id: string]: string } = {};
  Object.entries(markdownByPatchVersionSorted).forEach(
    ([versionPatch, markdown]) => {
      const versionMinor = versionPatch.split(".").slice(0, 2).join(".");

      if (!markdownByMinorVersion.hasOwnProperty(versionMinor)) {
        markdownByMinorVersion[versionMinor] = markdown;
      } else {
        markdownByMinorVersion[versionMinor] += `\n${markdown}`;
      }
    },
  );

  // Write all the modified files
  for (let [versionMinor, markdown] of Object.entries(markdownByMinorVersion)) {
    let fileInitialHeader = filesToInitialHeaders[versionMinor];
    if (fileInitialHeader == undefined) {
      fileInitialHeader = `---
title: Qiskit ${versionMinor} release notes
description: New features and bug fixes
---
# Qiskit ${versionMinor} release notes
  `;
    }

    const versionPath = `${basePath}/${versionMinor}.md`;
    await writeFile(versionPath, `${fileInitialHeader}\n${markdown}`);
  }
}
