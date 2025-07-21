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

import type { TocEntry } from "../lib/api/generateToc.js";

// URLs that show up in the left ToC under the `Tools` section, but are not in
// any of the INDEX_PAGES.
const ALLOWLIST_MISSING_FROM_INDEX: Set<string> = new Set([
  "/docs/guides/qiskit-code-assistant",
  "/docs/guides/qiskit-code-assistant-jupyterlab",
  "/docs/guides/qiskit-code-assistant-vscode",
  "/docs/guides/qiskit-code-assistant-local",
  "/docs/guides/addons",
  "/docs/guides/function-template-hamiltonian-simulation",
  "/docs/guides/qiskit-addons-utils",
  "/docs/guides/qiskit-code-assistant-openai-api",
  "/docs/guides/manage-cost",
  "/docs/guides/execution-modes-faq",
]);

// URLs that show up in the INDEX_PAGES, but are not in the left ToC under
// the `Tools` section.
//
// Note that `checkOrphanPages.tsx` will validate these
// pages do show up somewhere in the ToC, they only might be in a different
// section than `Tools.`
const ALLOWLIST_MISSING_FROM_TOC: Set<string> = new Set([
  "/docs/guides/q-ctrl-optimization-solver",
  "/docs/guides/kipu-optimization",
  "/docs/guides/multiverse-computing-singularity",
  "/docs/guides/global-data-quantum-optimizer",
  "/docs/guides/colibritd-pde",
  "/docs/guides/qunova-chemistry",
  "/docs/guides/manage-cost",
  "/docs/guides/instances",
  "/docs/guides/cloud-setup",
  "/docs/guides/cloud-setup-untrusted",
  "/docs/guides/cloud-setup-invited",
  "/docs/guides/cloud-setup-rest-api",
  "/docs/support/execution-modes-faq",
]);

// URLs that show up in the INDEX_PAGES >1 time. This can happen when we
// have distinct <CloudContent> and <LegacyContent> lists with some shared entries.
const ALLOWLIST_DUPLICATE_ENTRIES: Set<string> = new Set([
  "/docs/guides/processor-types",
  "/docs/guides/qpu-information",
  "/docs/guides/get-qpu-information",
  "/docs/guides/native-gates",
  "/docs/guides/repetition-rate-execution",
  "/docs/guides/retired-qpus",
  "/docs/guides/dynamic-circuits-considerations",
  "/docs/guides/instances",
  "/docs/guides/fair-share-scheduler",
  "/docs/guides/manage-cost",
]);

const INDEX_PAGE_URLS: Set<string> = new Set([
  "/docs/guides/map-problem-to-circuits",
  "/docs/guides/optimize-for-hardware",
  "/docs/guides/execute-on-hardware",
  "/docs/guides/post-process-results",
  "/docs/guides/intro-to-patterns",
]);

const INDEX_PAGE_FILES = Array.from(INDEX_PAGE_URLS).map(
  // We remove the initial `/` to make the path relative
  (page) => `${page.substring(1)}.mdx`,
);
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
  return `/docs/guides/${page}`;
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
  return toolsPages.filter((page) => !ALLOWLIST_MISSING_FROM_INDEX.has(page));
}

async function deduplicateEntries(
  filePath: string,
  entries: string[],
): Promise<[Set<string>, string[]]> {
  const deduplicatedPages: Set<string> = new Set();
  const errors: string[] = [];

  for (const entry of entries) {
    if (
      deduplicatedPages.has(entry) &&
      !ALLOWLIST_DUPLICATE_ENTRIES.has(entry)
    ) {
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
    .filter(
      (page) =>
        !toolsEntries.has(page) &&
        !ALLOWLIST_MISSING_FROM_TOC.has(page) &&
        !INDEX_PAGE_URLS.has(page),
    )
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
      "\nAdd the entries in one of the following index pages, or add the URL to the `IGNORED_URLS` list at the beginning of `/scripts/js/commands/checkPatternsIndex.tsx` if it's not used in Workflow:",
    );
    INDEX_PAGE_FILES.forEach((index) => console.error(`\t➡️  ${index}`));
    allGood = false;
  }

  if (!allGood) {
    process.exit(1);
  }
}

async function main() {
  const toolsAllEntries = await getToolsTocEntriesToCheck();
  let [toolsEntries, duplicatesErrors] = await deduplicateEntries(
    TOC_PATH,
    toolsAllEntries,
  );

  let extraIndexEntriesErrors: string[] = [];
  for (const indexPage of INDEX_PAGE_FILES) {
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
