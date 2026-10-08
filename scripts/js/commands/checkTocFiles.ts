// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { readJsonFile } from "../lib/fs.js";
import { InternalLink, File } from "../lib/links/InternalLink.js";
import {
  findTocFiles,
  parseTocUrls,
  SYNTHETIC_FILES,
} from "../lib/tocFiles.js";

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("apis", {
      type: "boolean",
      default: false,
      description: "Also check the _toc.json files in the API docs.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();

  const [tocFiles, existingFiles] = await Promise.all([
    findTocFiles(args.apis),
    loadExistingFiles(),
  ]);

  let allGood = true;
  for (const tocFile of tocFiles) {
    console.log("Checking toc in:", tocFile);
    const error = await checkTocFile(tocFile, existingFiles);
    if (error !== undefined) {
      console.error(error);
      allGood = false;
    }
  }

  if (!allGood) {
    console.error(
      "\n❌ Some _toc.json entries point to pages that don't exist 💔\n",
    );
    process.exit(1);
  }
  console.log("\nNo broken _toc.json entries found ✅\n");
}

/**
 * Build the universe of pages that a _toc.json entry may point to. We don't
 * need anchors (TOC URLs never have them), so files are loaded without parsing.
 */
async function loadExistingFiles(): Promise<File[]> {
  const contentFiles = await globby("{docs,learning}/**/*.{mdx,ipynb}");
  return [
    ...contentFiles.map((fp) => new File(fp, new Set())),
    ...SYNTHETIC_FILES.map((fp) => new File(fp, new Set(), true)),
  ];
}

/**
 * Returns an error message if any non-external URL in the TOC fails to resolve
 * to an existing file, otherwise `undefined`.
 */
async function checkTocFile(
  tocFile: string,
  existingFiles: File[],
): Promise<string | undefined> {
  const json = await readJsonFile(tocFile);
  const urls = parseTocUrls(json.children ?? []);

  const errors: string[] = [];
  for (const url of urls) {
    // External URLs are checked separately by `check:external-links`.
    if (url.startsWith("http")) continue;
    const link = new InternalLink(url, [tocFile]);
    const error = link.check(existingFiles);
    if (error !== undefined) {
      errors.push(error);
    }
  }

  return errors.length === 0 ? undefined : errors.join("\n");
}

main().then(() => process.exit());
