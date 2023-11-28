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
import { getRoot } from "./fs";
import { parse } from "path";
import { Pkg } from "./sharedTypes";
import { readFile, writeFile, readdir } from "fs/promises";
import transformLinks from "transform-markdown-links";

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
      url: pkg.historical
        ? `/api/${pkg.name}/${pkg.versionWithoutPatch}/release-notes/${version}`
        : `/api/${pkg.name}/release-notes/${version}`,
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
    url: pkg.historical
      ? `/api/${pkg.name}/${pkg.versionWithoutPatch}/release-notes/${pkg.versionWithoutPatch}`
      : `/api/${pkg.name}/release-notes/${pkg.versionWithoutPatch}`,
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

export async function copyReleaseNotesToHistoricalVersions(
  projectName: string,
  pathHistoricalFolder: string,
) {
  await $`find ${pathHistoricalFolder}/release-notes/* -not -path "*index.md" | xargs rm -rf {}`;
  await $`find docs/api/${projectName}/release-notes/* -not -path "*index.md" | xargs -I {} cp -a {} ${pathHistoricalFolder}/release-notes/`;
}

/**
 * Path to release notes file for the version we're adding
 */
export function currentReleaseNotesPath(pkg: Pkg): string {
  const projectFolder = pkg.historical
    ? `${pkg.name}/${pkg.versionWithoutPatch}`
    : `${pkg.name}`;
  const path = `${getRoot()}/docs/api/${projectFolder}/release-notes/${
    pkg.versionWithoutPatch
  }.md`;
  return path;
}

export async function syncReleaseNotes(
  projectName: string,
  pathAPIFolder: string,
) {
  console.log("Synchronizing the release notes with the historical versions");
  const historicalFolders = (
    await readdir(`${pathAPIFolder}`, { withFileTypes: true })
  ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

  for (let folder of historicalFolders) {
    // All projects except Qiskit have a single release notes file.
    // Therefore, we only need to copy the `release-notes.md` file
    // to the historical version folders. We don't need to update
    // any links because we use relative paths.
    if (projectName != "qiskit") {
      await $`rm -f ${pathAPIFolder}/${folder.name}/release-notes.md`;
      await $`cp -a ${pathAPIFolder}/release-notes.md ${pathAPIFolder}/${folder.name}/`;
      continue;
    }

    copyReleaseNotesToHistoricalVersions(
      projectName,
      `${pathAPIFolder}/${folder.name}`,
    );

    let markdownIndex = await readFile(
      `${pathAPIFolder}/release-notes/index.md`,
      { encoding: "utf8" },
    );

    // Regex to capture the links containing /api/projectName and not followed
    // by any subfolder starting with a number (historical version folders)
    const regexAbsolutePath = new RegExp("/api/" + projectName + "/(?![0-9])");
    markdownIndex = transformLinks(markdownIndex, (link, _) =>
      link.replace(regexAbsolutePath, `/api/${projectName}/${folder.name}/`),
    );

    // Add the specific release note version as the first entry of the index.md
    markdownIndex = markdownIndex.replace(
      "*",
      `* [${folder.name}](/api/${projectName}/${folder.name}/release-notes/${folder.name})\n*`,
    );

    await writeFile(
      `${pathAPIFolder}/${folder.name}/release-notes/index.md`,
      markdownIndex,
    );
  }
}
