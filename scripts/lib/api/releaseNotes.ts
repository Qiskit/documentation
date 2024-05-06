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

import { parse } from "path";
import { readFile, writeFile, readdir } from "fs/promises";

import { $ } from "zx";
import transformLinks from "transform-markdown-links";

import { getRoot, pathExists } from "../fs";
import type { Pkg } from "./Pkg";
import type { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

// ---------------------------------------------------------------------------
// Generic release notes handling
// ---------------------------------------------------------------------------

/**
 * Determine what to do with release-notes.mdx, such as simply ignoring it.
 *
 * @returns true if the release notes file should be written.
 */
export async function handleReleaseNotesFile(
  result: HtmlToMdResultWithUrl,
  pkg: Pkg,
): Promise<boolean> {
  // Dev versions haven't been released yet and we don't want to modify the release notes
  // of prior versions.
  if (pkg.isDev()) {
    return false;
  }

  // When the release notes are a single file, only use them if this is the latest version rather
  // than a historical release.
  if (!pkg.hasSeparateReleaseNotes()) {
    return pkg.isLatest();
  }

  // Else, there is a distinct release note per version. So, we use the release note but
  // have custom logic to handle it.
  const baseUrl = pkg.isHistorical()
    ? `/api/${pkg.name}/${pkg.versionWithoutPatch}`
    : `/api/${pkg.name}`;
  result.markdown = transformLinks(result.markdown, (link, _) =>
    link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
      ? link
      : `${baseUrl}/${link}`,
  );
  await writeReleaseNoteForVersion(pkg, result.markdown);
  return false;
}

// ---------------------------------------------------------------------------
// Utils for release-note per version
// ---------------------------------------------------------------------------

/**
 * If there was a new release notes file, update the release notes index page and _toc.json for
 * every docs version.
 */
export async function maybeUpdateReleaseNotesFolder(
  pkg: Pkg,
  markdownPath: string,
): Promise<void> {
  if (!pkg.hasSeparateReleaseNotes() || !pkg.isLatest()) {
    return;
  }
  addNewReleaseNotes(pkg);
  await updateHistoricalTocFiles(pkg);
  console.log("Generating release-notes/index");
  const indexMarkdown = generateReleaseNotesIndex(pkg);
  await writeFile(`${markdownPath}/release-notes/index.mdx`, indexMarkdown);
}

/**
 * Check for markdown files in `docs/api/<pkg-name>/release-notes/,
 * then sort them and return the list of versions.
 */
export const findSeparateReleaseNotesVersions = async (
  pkgName: string,
): Promise<string[]> => {
  return (
    await $`ls ${getRoot()}/docs/api/${pkgName}/release-notes`.quiet()
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
};

function addNewReleaseNotes(pkg: Pkg): void {
  if (
    pkg.releaseNotesConfig.separatePagesVersions[0] === pkg.versionWithoutPatch
  ) {
    // Entries already includes most recent release notes
    return;
  }
  pkg.releaseNotesConfig.separatePagesVersions.unshift(pkg.versionWithoutPatch);
}

function generateReleaseNotesIndex(pkg: Pkg): string {
  let markdown = `---
title: ${pkg.title} release notes
description: New features, bug fixes, and other changes in previous versions of ${pkg.title}.
---

# ${pkg.title} release notes

New features, bug fixes, and other changes in previous versions of ${pkg.title}.

## Release notes by version

`;
  for (const version of pkg.releaseNotesConfig.separatePagesVersions) {
    markdown += `* [${version}](./${version})\n`;
  }
  return markdown;
}

/**
 * Adds a new entry for the release notes of the current API version to the _toc.json
 * of all historical API versions.
 */
async function updateHistoricalTocFiles(pkg: Pkg): Promise<void> {
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
 * Creates the release note file for the minor version found in `pkg`.If the file
 * already exists, it will keep the initial header and overwrite the rest of the content.
 */
async function writeReleaseNoteForVersion(
  pkg: Pkg,
  releaseNoteMarkdown: string,
): Promise<void> {
  if (!pkg.hasSeparateReleaseNotes()) {
    throw new Error(
      `The package ${pkg.name} doesn't have separate release notes`,
    );
  }

  const basePath = `${getRoot()}/docs/api/${pkg.name}/release-notes`;
  const versionPath = `${basePath}/${pkg.versionWithoutPatch}.mdx`;

  const versionsMarkdown = releaseNoteMarkdown
    .split(/\n## (?=[0-9])/)
    .slice(1)
    .join("\n## ");

  if (!(await pathExists(versionPath))) {
    await writeFile(versionPath, releaseNoteMarkdown);
  } else if (versionsMarkdown) {
    // The if statement prevents us from modifying versions of Qiskit < 0.45.
    // Those versions have a different structure, such as a different section
    // title (`## Qiskit 0.44.0` instead of `## 0.44.0`), and they contain
    // more than one version in the same file.
    const currentMarkdown = await readFile(versionPath, "utf-8");
    const initialHeader = currentMarkdown
      .split(/\n## (?=[0-9])/)
      .slice(0, 1)[0];

    await writeFile(versionPath, `${initialHeader}\n## ${versionsMarkdown}`);
  }
}
