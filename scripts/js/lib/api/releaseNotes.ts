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

import { pathExists } from "../fs.js";
import type { Pkg } from "./Pkg.js";
import type { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { C_API_BASE_PATH, DOCS_BASE_PATH } from "./conversionPipeline.js";
import { kebabCaseAndShortenPage } from "./normalizeResultUrls.js";
import { removePrefix } from "../stringUtils.js";

import { groupBy } from "lodash-es";

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

  // If we're linking to a different to a different package's release notes, we
  // shouldn't create a new release notes file.
  if (pkg.releaseNotesConfig.linkToPackage) {
    return false;
  }

  // When the release notes are a single file, only use them if this is the latest version rather
  // than a historical release.
  if (!pkg.hasSeparateReleaseNotes()) {
    return pkg.isLatest();
  }

  // Else, there is a distinct release note per version. So, we use the release note but
  // have custom logic to handle it.
  const apiBaseUrl = pkg.isHistorical()
    ? `/api/${pkg.name}/${pkg.versionWithoutPatch}`
    : `/api/${pkg.name}`;
  result.markdown = transformLinks(result.markdown, (link, _) => {
    // The Qiskit release notes refer to the C API by using a relative path
    // to `cdoc`.
    // TODO (#3375): Investigate if we can make this case more generic.
    if (pkg.name == "qiskit" && link.startsWith(C_API_BASE_PATH)) {
      const qiskitCBasePath = apiBaseUrl.replace(pkg.name, `${pkg.name}-c`);
      const linkWithoutPrefix = removePrefix(link, C_API_BASE_PATH + "/");
      // The anchors do not exist on the final page, so we remove them from the link.
      const [path, _anchor] = linkWithoutPrefix.split("#");
      return `${DOCS_BASE_PATH}${qiskitCBasePath}/${kebabCaseAndShortenPage(path, `${pkg.name}-c`)}`;
    }

    const fullPathLink =
      link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
        ? link
        : `${apiBaseUrl}/${link}`;

    // We check that the links does not start with the base path and does not end with the base path to include the docs home page.
    if (
      fullPathLink.startsWith("/") &&
      !fullPathLink.startsWith(`${DOCS_BASE_PATH}/`) &&
      !fullPathLink.endsWith(DOCS_BASE_PATH)
    )
      return `${DOCS_BASE_PATH}${fullPathLink}`;
    return fullPathLink;
  });
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
  if (
    !pkg.hasSeparateReleaseNotes() ||
    !pkg.isLatest() ||
    !pkg.releaseNotesConfig.enabled
  ) {
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
  return (await $`ls docs/api/${pkgName}/release-notes`.quiet()).stdout
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

function generateReleaseNotesIndexformarkdown(pkg: Pkg): string {
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

export function generateReleaseNotesIndex(pkg: Pkg): string {
  const grouped = groupByMajorVersion(
    pkg.releaseNotesConfig.separatePagesVersions,
  );
  const htmlSections = Object.entries(grouped)
    .map(([majorVersion, versionList]) =>
      renderVersionGroup(majorVersion, versionList),
    )
    .join("\n\n");

  return htmlSections;
}

/**
 * Adds a new entry for the release notes of the current API version to the _toc.json
 * of all historical API versions.
 */
async function updateHistoricalTocFiles(pkg: Pkg): Promise<void> {
  console.log("Updating _toc.json files for the historical versions");

  const historicalFolders = (
    await readdir(`docs/api/${pkg.name}`, { withFileTypes: true })
  ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

  for (let folder of historicalFolders) {
    let tocFile = await readFile(
      `docs/api/${pkg.name}/${folder.name}/_toc.json`,
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
      `docs/api/${pkg.name}/${folder.name}/_toc.json`,
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

  const basePath = `docs/api/${pkg.name}/release-notes`;
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

export function groupByMajorVersion(
  versions: string[],
): Record<string, string[]> {
  const grouped = groupBy(versions, (v) => {
    const match = v.match(/\[(\d+\.\d+)\]/);
    if (!match || !match[1]) return "unknown";

    const versionNumber = parseFloat(match[1]);
    if (isNaN(versionNumber)) return "unknown";

    return Math.floor(versionNumber).toString();
  });

  const sortedKeys = Object.keys(grouped)
    .filter((key) => key !== "unknown")
    .map(Number)
    .sort((a, b) => b - a)
    .map(String);

  const sortedRecord: Record<string, string[]> = {};
  for (const key of sortedKeys) {
    const items = grouped[key];
    if (Array.isArray(items)) {
      sortedRecord[key] = items.sort((a, b) => {
        const aMatch = a.match(/\[(\d+\.\d+)\]/);
        const bMatch = b.match(/\[(\d+\.\d+)\]/);
        const aVersion = aMatch ? parseFloat(aMatch[1]) : 0;
        const bVersion = bMatch ? parseFloat(bMatch[1]) : 0;
        return bVersion - aVersion;
      });
    } else {
      sortedRecord[key] = [];
    }
  }

  return sortedRecord;
}

function renderVersionGroup(majorVersion: string, versions: string[]): string {
  const items = versions.map((v) => `- ${v}`).join("\n");
  return `
<details>
  <summary> v${majorVersion}</summary>

${items}

</details>
  `.trim();
}
