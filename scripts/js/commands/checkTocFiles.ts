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

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import {
  findTocFiles,
  loadTocTargetFiles,
  checkTocFile,
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
    loadTocTargetFiles(),
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

main().then(() => process.exit());
