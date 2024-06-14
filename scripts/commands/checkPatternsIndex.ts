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

import { readFile } from "fs/promises";

const IGNORE_URL = ["/guides/qiskit-serverless"];

const INDEX_PAGES = [
  "docs/guides/map-problem-to-circuits.mdx",
  "docs/guides/optimize-for-hardware.mdx",
  "docs/guides/execute-on-hardware.mdx",
  "docs/guides/postprocess-results.mdx",
];

const TOC_PATH = `docs/guides/_toc.json`;

async function getIndexEntries(indexPage: string): Promise<string[]> {
  const rawIndex = await readFile(indexPage, "utf-8");
  const result: string[] = [];
  for (const line of rawIndex.split("\n")) {
    // The index represents an unordered list of entries starting with `*`.
    if (!line.trimStart().startsWith("* ")) {
      continue;
    }

    const module = extractPageSlug(line);
    if (module) {
      result.push(module);
    }
  }

  return result;
}

function extractPageSlug(text: string): string | undefined {
  const re = /\((.*)\)/gm;
  // Ex: '* [Circuit library](./circuit-library)'.
  const match = re.exec(text);
  if (!match) {
    return;
  }
  const pageSlug = match[1];
  if (pageSlug.startsWith("http") || pageSlug.startsWith("/")) {
    return pageSlug;
  }
  return `/guides/${pageSlug.split("/").pop()}`;
}

function getTocSectionPageNames(sectionNode: any): string[] {
  let results = [];
  if (sectionNode.url) {
    results.push(sectionNode.url);
  }

  if (sectionNode.children) {
    for (const child of sectionNode.children) {
      results = [...results, ...getTocSectionPageNames(child)];
    }
  }

  return results;
}

async function getToolsTocEntriesToCheck(): Promise<string[]> {
  const toc = JSON.parse(await readFile(TOC_PATH, "utf-8"));
  const toolsNode = toc.children.find((child: any) => child.title == "Tools");
  const toolsPages = getTocSectionPageNames(toolsNode);
  return toolsPages.filter((page) => !IGNORE_URL.includes(page));
}

async function deduplicateEntriesAndGetErrors(
  src: string,
  entries: string[],
): Promise<[string[], string[]]> {
  const toolsPages: string[] = [];
  const errors = [];
  for (const entry of entries) {
    if (toolsPages.includes(entry)) {
      errors.push(`❌ ${src}: The entry ${entry} is duplicated`);
    } else {
      toolsPages.push(entry);
    }
  }

  return [toolsPages, errors];
}

function printErrors(
  duplicatesErrors: string[],
  extraIndexEntriesErrors: string[],
  extraToolsEntriesErrors: string[],
): void {
  if (duplicatesErrors.length > 0) {
    duplicatesErrors.forEach((error) => console.error(error));
    console.error(`\nRemove all duplicated entries on the indices.`);
    console.error("--------\n");
  }

  if (extraIndexEntriesErrors.length > 0) {
    extraIndexEntriesErrors.forEach((error) => console.error(error));
    console.error(`\nMake sure all pages have an entry in the Tools menu.`);
    console.error("--------\n");
  }

  if (extraToolsEntriesErrors.length > 0) {
    extraToolsEntriesErrors.forEach((error) => console.error(error));
    console.error(
      "\nAdd the entries in one of the following index pages, or add the URL to the `IGNORE_URL` list at the beginning of `/scripts/commands/checkPatternsIndex.tsx` if it's not used in Workflow:",
    );
    INDEX_PAGES.forEach((index) => console.error(`\t➡️  ${index}`));
  }

  if (
    duplicatesErrors.length > 0 ||
    extraIndexEntriesErrors.length > 0 ||
    extraToolsEntriesErrors.length > 0
  ) {
    process.exit(1);
  }
}

async function main() {
  const duplicatesErrors: string[] = [];
  const extraIndexEntriesErrors: string[] = [];
  const extraToolsEntriesErrors: string[] = [];

  const allToolsEntries = await getToolsTocEntriesToCheck();
  let [toolsEntries, toolsErrors] = await deduplicateEntriesAndGetErrors(
    TOC_PATH,
    allToolsEntries,
  );
  duplicatesErrors.push(...toolsErrors);

  for (const indexPage of INDEX_PAGES) {
    const allIndexEntries = await getIndexEntries(indexPage);
    let [indexEntries, indexErrors] = await deduplicateEntriesAndGetErrors(
      indexPage,
      allIndexEntries,
    );
    duplicatesErrors.push(...indexErrors);

    const ExtraIndexPages = indexEntries.filter(
      (page) => !toolsEntries.includes(page),
    );
    if (ExtraIndexPages.length > 0) {
      ExtraIndexPages.forEach((page) =>
        extraIndexEntriesErrors.push(
          `❌ ${indexPage}: The entry ${page} doesn't appear in the \`Tools\` menu.`,
        ),
      );
    }

    // Remove index entries from the tools entries list
    toolsEntries = toolsEntries.filter((page) => !indexEntries.includes(page));
  }

  if (toolsEntries.length > 0) {
    toolsEntries.forEach((page) =>
      extraToolsEntriesErrors.push(
        `❌ The entry ${page} is not present on any index page`,
      ),
    );
  }

  printErrors(
    duplicatesErrors,
    extraIndexEntriesErrors,
    extraToolsEntriesErrors,
  );
  console.log("\n✅ No missing or duplicated pages were found\n");
}

main().then(() => process.exit());

// TODO: Allow that the guides/ folder don't exist
