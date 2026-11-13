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

  const [listedUrls, pages] = await Promise.all([
    readAllTocUrls(),
    globby(
      tocFiles.map((tocFile) => `${path.dirname(tocFile)}/**/*.{mdx,ipynb}`),
      { ignore: ["**/assets/**"] },
    ),
  ]);

  const orphans = pages
    .map((page) => "/" + page.replace(/\.(mdx|ipynb)$/, ""))
    .filter((url) => !listedUrls.has(url) && !ALLOWED_ORPHAN_URLS.has(url))
    .sort();

  if (orphans.length > 0) {
    console.error(
      "\n❌ There are some orphaned pages! These URLs need to be included in a _toc.json: \n",
      orphans.join("\n"),
    );
    process.exit(1);
  }
  console.log("\nNo orphan pages found ✅\n");
}

async function readAllTocUrls(): Promise<Set<string>> {
  const tocFiles = await globby("{docs,learning}/**/_toc.json");
  const urls = new Set<string>();
  for (const tocFile of tocFiles) {
    const json = await readJsonFile(tocFile);
    for (const url of parseTocUrls(json.children)) {
      // A URL like `/docs/foo` can be served by `foo.mdx` or `foo/index.mdx`.
      urls.add(url);
      urls.add(`${url}/index`);
    }
  }
  return urls;
}

main().then(() => process.exit());
