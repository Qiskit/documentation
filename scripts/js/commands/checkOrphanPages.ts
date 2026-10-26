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

import path from "path";

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { flatten } from "lodash-es";

import { readJsonFile } from "../lib/fs.js";
import { findTocFiles, parseTocUrls } from "../lib/tocFiles.js";

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
}

// URLs must start by `/` and exclude the file extension
const ALLOWED_ORPHAN_URLS: Set<string> = new Set([
  "/docs/api/qiskit/0.46/transpiler_builtin_plugins",
]);

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
  const json = await readJsonFile(filePath);
  const rootEntries = json.children;
  const urls = parseTocUrls(rootEntries);
  urls.push(`${urls[0]}/index`);
  return new Set(urls);
}

async function findExistentUrls(directory: string): Promise<string[]> {
  const fileList = await globby([`${directory}/*.{mdx,ipynb}`]);
  return fileList.map(
    (fileName) => "/" + fileName.replace(".mdx", "").replace(".ipynb", ""),
  );
}

main().then(() => process.exit());
