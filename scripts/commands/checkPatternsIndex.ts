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
import { pathExists } from "../lib/fs";
import type { TocEntry } from "../lib/api/generateToc";

const IGNORED_URLS = ["/guides/qiskit-serverless"];

const INDEX_PAGES = [
  "docs/guides/map-problem-to-circuits.mdx",
  "docs/guides/optimize-for-hardware.mdx",
  "docs/guides/execute-on-hardware.mdx",
  "docs/guides/post-process-results.mdx",
];

const TOC_PATH = "docs/guides/_toc.json";

async function getIndexEntries(indexPath: string): Promise<string[]> {
  const rawIndex = await readFile(indexPath, "utf-8");
  const result: string[] = [];
  // The index page has several unordered lists starting with *, each with links to other pages.
  // We want to get every slug from those lists. Note that we don't care which list the slugs show
  // up in - we only care if the slug shows up at all anywhere.
  for (const line of rawIndex.split("\n")) {
    if (!line.trimStart().startsWith("* ")) {
      continue;
    }

    const slug = extractPageSlug(line);
    if (slug) {
      result.push(slug);
    }
  }

  return result;
}

function extractPageSlug(text: string): string | undefined {
  const re = /\((.*)\)/gm;
  // Ex: '* [Circuit library](./circuit-library)'.
  const match = re.exec(text);
  if (!match) {
    // Nested sections don't have any link
    return undefined;
  }
  const pageSlug = match[1];
  if (pageSlug.startsWith("http") || pageSlug.startsWith("/")) {
    return pageSlug;
  }
  const page = pageSlug.split("/").pop();
  return `/guides/${page}`;
}

function getTocSectionPageNames(sectionNode: TocEntry): string[] {
  let results = [];
  if (sectionNode.url) {
    results.push(sectionNode.url);
  }

  if (sectionNode.children) {
    for (const child of sectionNode.children) {
      results.push(...getTocSectionPageNames(child));
    }
  }

  return results;
}

async function getToolsTocEntriesToCheck(): Promise<string[]> {
  const toc = JSON.parse(await readFile(TOC_PATH, "utf-8"));
  const toolsNode = toc.children.find(
    (child: TocEntry) => child.title == "Tools",
  );
  const toolsPages = getTocSectionPageNames(toolsNode);
  return toolsPages.filter((page) => !IGNORED_URLS.includes(page));
}

async function deduplicateEntries(
  filePath: string,
  entries: string[],
): Promise<[Set<string>, string[]]> {
  const deduplicatedPages: Set<string> = new Set();
  const errors: string[] = [];

  for (const entry of entries) {
    if (deduplicatedPages.has(entry)) {
      errors.push(`❌ ${filePath}: The entry ${entry} is duplicated`);
    } else {
      deduplicatedPages.add(entry);
    }
  }

  return [deduplicatedPages, errors];
}

function getExtraIndexPagesErrors(
  indexPage: string,
  indexEntries: Set<string>,
  toolsEntries: Set<string>,
): string[] {
  return [...indexEntries]
    .filter((page) => !toolsEntries.has(page))
    .map(
      (page) =>
        `❌ ${indexPage}: The entry ${page} doesn't appear in the \`Tools\` menu.`,
    );
}

function getExtraToolsEntriesErrors(
  remainingToolsEntries: Set<string>,
): string[] {
  return [...remainingToolsEntries].map(
    (page) => `❌ The entry ${page} is not present on any index page`,
  );
}

function maybePrintErrorsAndFail(
  duplicatesErrors: string[],
  extraIndexEntriesErrors: string[],
  extraToolsEntriesErrors: string[],
): void {
  let allGood = true;

  if (duplicatesErrors.length > 0) {
    duplicatesErrors.forEach((error) => console.error(error));
    console.error(
      `\nRemove all duplicated entries on the indices and in the Tools menu, which is set in docs/guides/_toc.json.`,
    );
    console.error("--------\n");
    allGood = false;
  }

  if (extraIndexEntriesErrors.length > 0) {
    extraIndexEntriesErrors.forEach((error) => console.error(error));
    console.error(
      `\nMake sure all pages have an entry in the Tools menu, which is set in docs/guides/_toc.json.`,
    );
    console.error("--------\n");
    allGood = false;
  }

  if (extraToolsEntriesErrors.length > 0) {
    extraToolsEntriesErrors.forEach((error) => console.error(error));
    console.error(
      "\nAdd the entries in one of the following index pages, or add the URL to the `IGNORED_URLS` list at the beginning of `/scripts/commands/checkPatternsIndex.tsx` if it's not used in Workflow:",
    );
    INDEX_PAGES.forEach((index) => console.error(`\t➡️  ${index}`));
    allGood = false;
  }

  if (!allGood) {
    process.exit(1);
  }
}

async function main() {
  // Todo: Remove this conditional once the migration is done. This is used only to avoid
  // the script crashing if the file's structure doesn't exist.
  if (!(await pathExists(TOC_PATH))) {
    console.log(
      `🚧 Check skipped because the migration hasn't been completed.\n`,
    );
    process.exit(0);
  }

  const toolsAllEntries = await getToolsTocEntriesToCheck();
  let [toolsEntries, duplicatesErrors] = await deduplicateEntries(
    TOC_PATH,
    toolsAllEntries,
  );

  let extraIndexEntriesErrors: string[] = [];
  for (const indexPage of INDEX_PAGES) {
    const indexAllEntries = await getIndexEntries(indexPage);
    let [indexEntries, indexDuplicatedErrors] = await deduplicateEntries(
      indexPage,
      indexAllEntries,
    );
    duplicatesErrors.push(...indexDuplicatedErrors);

    extraIndexEntriesErrors.push(
      ...getExtraIndexPagesErrors(indexPage, indexEntries, toolsEntries),
    );

    toolsEntries.forEach((page) => {
      if (indexEntries.has(page)) {
        toolsEntries.delete(page);
      }
    });
  }

  const extraToolsEntriesErrors = getExtraToolsEntriesErrors(toolsEntries);

  maybePrintErrorsAndFail(
    duplicatesErrors,
    extraIndexEntriesErrors,
    extraToolsEntriesErrors,
  );
  console.log("\n✅ No missing or duplicated pages were found\n");
}

main().then(() => process.exit());
