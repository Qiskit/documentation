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
import { groupBy } from "lodash-es";
import { $ } from "zx";
import transformLinks from "transform-markdown-links";

import { pathExists } from "../fs.js";
import type { Pkg } from "./Pkg.js";
import type { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { C_API_BASE_PATH, DOCS_BASE_PATH } from "./conversionPipeline.js";
import { kebabCaseAndShortenPage } from "./normalizeResultUrls.js";
import { removePrefix } from "../stringUtils.js";
import { generateReleaseNotesEntry, TocEntry } from "./generateToc.js";

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
  await updateHistoricalTocFiles(pkg);
  console.log("Generating release-notes/index");
  const indexMarkdown = generateReleaseNotesIndex(pkg);
  await writeFile(`${markdownPath}/release-notes/index.mdx`, indexMarkdown);
}

/**
 * For packages with separate release note pages, determine all the versions.
 *
 * This works by reading from the file-system and also considering the current
 * version being generated. The file-system is how we determine the versions that
 * are not being actively generated.
 *
 * Returns versions in descending order.
 */
export async function determineReleaseNotesSeparetePagesVersions(
  pkgName: string,
  versionWithoutPatch: string,
  isDev: boolean,
): Promise<string[]> {
  const versions = new Set(
    (await $`ls docs/api/${pkgName}/release-notes`.quiet()).stdout
      .trim()
      .split("\n")
      .map((x) => parse(x).name)
      .filter((x) => x.match(/^\d/)), // remove index
  );

  // Dev versions don't include release notes
  if (!isDev) versions.add(versionWithoutPatch);

  return Array.from(versions)
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

  const grouped = groupByMajorVersion(
    pkg.releaseNotesConfig.separatePagesVersions,
  );
  [...grouped.entries()].forEach(([majorVersion, versionList], idx) => {
    markdown +=
      renderVersionGroup(majorVersion, versionList, {
        isLatestVersion: idx === 0,
      }) + "\n\n";
  });
  return markdown.trim();
}

/**
 * Adds a new entry for the release notes of the current API version to the _toc.json
 * of all historical API versions.
 */
async function updateHistoricalTocFiles(pkg: Pkg): Promise<void> {
  console.log("Updating _toc.json files for the historical versions");

  const maybeReleaseNotesEntry = generateReleaseNotesEntry(pkg);
  if (!maybeReleaseNotesEntry) {
    throw new Error(
      `Assertion error: could not generate release notes TOC entry for '${pkg.name}'.`,
    );
  }

  const historicalFolders = (
    await readdir(`docs/api/${pkg.name}`, { withFileTypes: true })
  ).filter(
    (file) =>
      file.isDirectory() && (file.name.match(/[0-9].*/) || file.name === "dev"),
  );

  for (let folder of historicalFolders) {
    const tocPath = `docs/api/${pkg.name}/${folder.name}/_toc.json`;
    const rawToc = await readFile(tocPath, {
      encoding: "utf8",
    });
    const tocJson = JSON.parse(rawToc);
    tocJson.children = tocJson.children.map((child: TocEntry) =>
      child.title === "Release notes" ? maybeReleaseNotesEntry : child,
    );
    await writeFile(tocPath, JSON.stringify(tocJson, null, 2) + "\n");
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

export function groupByMajorVersion(versions: string[]): Map<string, string[]> {
  // Group versions by major version
  const grouped = groupBy(versions, (v) => v.split(".")[0]);

  // Sort major version keys in descending numeric order
  const sortedKeys = Object.keys(grouped).sort((a, b) =>
    b.localeCompare(a, undefined, { numeric: true }),
  );

  // Create a Map to preserve insertion order
  const sortedRecord = new Map<string, string[]>();

  for (const key of sortedKeys) {
    const items = grouped[key];
    // Sort each version group in descending order using numeric-aware comparison
    const sortedItems = items.sort((a, b) =>
      b.localeCompare(a, undefined, { numeric: true }),
    );
    sortedRecord.set(key, sortedItems);
  }

  return sortedRecord;
}

function renderVersionGroup(
  majorVersion: string,
  versions: string[],
  kwargs: { isLatestVersion?: boolean } = {},
): string {
  const items = versions
    .map((version) => `- [v${version}](./${version})`)
    .join("\n");
  const openAttr = kwargs.isLatestVersion ? " open" : "";
  return `
<details${openAttr}>
<summary>v${majorVersion}</summary>
${items}
</details>
  `.trim();
}
