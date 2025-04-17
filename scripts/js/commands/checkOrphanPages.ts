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

import fs from "fs/promises";
import path from "path";

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { flatten } from "lodash-es";

import { TocEntry } from "../lib/api/generateToc.js";

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
}

const ALLOWED_ORPHAN_URLS: Set<string> = new Set([...qiskitLegacyIgnores()]);

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("apis", {
      type: "boolean",
      default: false,
      description: "Check the links in the current API docs.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();
  const tocFiles = await findTocFiles(args.apis);

  const orphanGroups = await Promise.all(tocFiles.map(findOrphans));
  const orphans = flatten(orphanGroups);

  if (orphans.length > 0) {
    console.error(
      "\n❌ There are some orphaned pages! These URLs need to be included in a _toc.json: \n",
      orphans.join("\n"),
    );
    process.exit(1);
  }
  console.log("\nNo orphan pages found ✅\n");
}

async function findOrphans(tocFile: string): Promise<string[]> {
  console.log("Checking toc in:", tocFile);
  const [tocUrls, existentUrls] = await Promise.all([
    readTocUrls(tocFile),
    findExistentUrls(path.dirname(tocFile)),
  ]);
  return existentUrls.filter(
    (file) => !tocUrls.has(file) && !ALLOWED_ORPHAN_URLS.has(file),
  );
}

async function readTocUrls(filePath: string): Promise<Set<string>> {
  const raw = await fs.readFile(filePath, "utf-8");
  const rootEntries = JSON.parse(raw).children;
  const urls = parseTocUrls(rootEntries);
  urls.push(`${urls[0]}/index`);
  return new Set(urls);
}

async function findExistentUrls(directory: string): Promise<string[]> {
  const fileList = await globby([`${directory}/*.{mdx,ipynb}`]);
  return fileList.map(
    (fileName) => `/${fileName.replace(".mdx", "").replace(".ipynb", "")}`,
  );
}

async function findTocFiles(includeApis: boolean): Promise<string[]> {
  const globs = [
    "docs/**/_toc.json",
    includeApis ? "docs/api/**/_toc.json" : "!docs/api/**",
  ];
  return globby(globs);
}

function parseTocUrls(entries: TocEntry[]): string[] {
  const urls = [];
  for (const entry of entries) {
    if ("children" in entry) {
      const childUrls = parseTocUrls(entry.children || []);
      urls.push(...childUrls);
    } else if (entry.url !== undefined) {
      // Temporary until all the pages include `/docs`
      urls.push(entry.url.replace("/docs", ""));
    }
  }
  return urls;
}

function qiskitLegacyIgnores(): string[] {
  const versions = [
    "0.19/",
    "0.24/",
    "0.25/",
    "0.26/",
    "0.27/",
    "0.28/",
    "0.29/",
    "0.30/",
    "0.31/",
    "0.32/",
    "0.33/",
    "0.35/",
    "0.36/",
    "0.37/",
    "0.38/",
    "0.39/",
    "0.40/",
    "0.41/",
    "0.42/",
    "0.43/",
    "0.44/",
    "0.45/",
    "0.46/",
  ];
  return [
    ...versions.flatMap((vers) => [
      `/docs/api/qiskit/${vers}aer`,
      `/docs/api/qiskit/${vers}aqua`,
      `/docs/api/qiskit/${vers}ibmq-provider`,
      `/docs/api/qiskit/${vers}ibmq_jupyter`,
      `/docs/api/qiskit/${vers}ibmq_visualization`,
      `/docs/api/qiskit/${vers}parallel`,
      `/docs/api/qiskit/${vers}transpiler_builtin_plugins`,
    ]),
  ];
}

main().then(() => process.exit());
