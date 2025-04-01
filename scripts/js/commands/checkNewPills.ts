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


// Grab the toc and grab each url with a newpill
async function main() {
  const tocPills = findNewPills('docs');
  const currentPills = findCurrentPills();

  for (const pill of currentPills) {

  }
  console.log("\nNo new pills need to be removed ✅\n");
}


async function findNewPills(directory: string): Promise<string[]> {
  const fileList = await globby([`${directory}/*.{mdx,ipynb}`]);
  return fileList.map((fileName) =>
    fileName.replace("docs", "").replace(".mdx", "").replace(".ipynb", ""),
  );
}

async function findCurrentPills(): {

}
