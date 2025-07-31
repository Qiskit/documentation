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

/**
 * This file is like checkInternalLinks.ts, but meant to work in other repositories reusing
 * our script infrastructure.
 *
 * Whereas normally checkInternalLinks.ts has real-time access to what files are present in docs/
 * and public/, the other repositories use a snapshot.
 */

import { readFile } from "fs/promises";
import { readJsonFile } from "../lib/fs";

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { globby } from "globby";

import { File } from "../lib/links/InternalLink.js";
import { FileBatch } from "../lib/links/FileBatch.js";

interface Arguments {
  [x: string]: unknown;
  savedLinks: string;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("saved-links", {
      type: "string",
      default:
        "node_modules/qiskit-documentation/scripts/config/internal-links.json",
      description:
        "Path to JSON file with links from qiskit/documentation repo.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();

  const fileBatch = await FileBatch.fromGlobs(
    ["docs/**/*.{ipynb,mdx}"],
    [],
    "docs",
  );
  const publicFiles = (await globby("public/{images,videos}/**/*")).map(
    (fp) => new File(fp, new Set()),
  );

  const savedFiles = (await readJsonFile(args.savedLinks)).map(
    (entry: any) => new File(entry.path, new Set(entry.anchors)),
  );

  const allValidLinks = await fileBatch.checkInternalLinks([
    ...publicFiles,
    ...savedFiles,
  ]);
  if (!allValidLinks) {
    console.error("\nSome internal links appear broken 💔\n");
    process.exit(1);
  }
  console.log("\nNo internal links appear broken ✅\n");
}

main().then(() => process.exit());
