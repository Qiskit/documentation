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

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { flattenDeep } from "lodash";

interface Arguments {
  [x: string]: unknown;
  currentApis: boolean;
  devApis: boolean;
  historicalApis: boolean;
}

const ALLOWED_ORPHANS = new Set([
  "/api/qiskit/qiskit.primitives.BaseEstimator",
  "/api/qiskit/qiskit.primitives.BaseSampler",
]);

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("current-apis", {
      type: "boolean",
      default: false,
      description: "Check the links in the current API docs.",
    })
    .option("dev-apis", {
      type: "boolean",
      default: false,
      description: "Check the links in the /dev API docs.",
    })
    .option("historical-apis", {
      type: "boolean",
      default: false,
      description:
        "Check the links in the historical API docs, e.g. `api/qiskit/0.44`. ",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();

  const tocFiles = await determineTocFiles(args);

  let allGood = true;
  const orphanPages = [];

  for (tocFile of tocFiles) {
    tocUrls = await getTocUrls(tocFile);
    const dir = tocFile.replace("_toc.json", "");
    const dirFiles = await collectDirFiles(dir);
    for (file of dirFiles) {
      if (!tocUrls.has(file) && !ALLOWED_ORPHANS.has(file)) {
        allGood = false;
        orphanPages.push(file);
      }
    }
  }
  if (!allGood) {
    console.error(
      "\n There's some orphaned pages!  These files need a home: \n",
      orphanPages,
    );
    process.exit(1);
  }
  console.log("\nNo orphan pages found ✅\n");
}

async function getTocUrls(filePath: string): Set<string> {
  console.log("Checking toc in:", tocFile);
  const jsonFileContents = await fs.readFile(tocFile, "utf-8");
  const children = JSON.parse(jsonFileContents).children;
  const files: [string] = [];

  const fileContents = await collectTocFileContents(children);
  const flatFileContents = flattenDeep(fileContents);
  const indexPageUrl = flatFileContents[0] + "/index";
  flatFileContents.push(indexPageUrl);
  const tocUrlSet = new Set(flatFileContents);

  return tocUrlSet;
}

async function collectDirFiles(directory: string): Promise<string[]> {
  const fileGlob = [
    directory + "/*.md",
    directory + "/*.mdx",
    directory + "/*.ipynb",
  ];
  const fileList = await globby(fileGlob);
  const processedFileList = fileList.map((fileName) =>
    fileName
      .replace("docs", "")
      .replace(".mdx", "")
      .replace(".ipynb", "")
      .replace(".md", ""),
  );
  return processedFileList;
}

async function determineTocFiles(args: Arguments): Promise<string[]> {
  const globs = ["docs/**/_toc.json", "!docs/api/**"];
  if (args.currentApis) {
    globs.push("docs/api/*/_toc.json");
  }
  if (args.devApis) {
    globs.push(
      "docs/api/{qiskit,qiskit-ibm-runtime,qiskit-ibm-provider}/dev/_toc.json",
    );
  }
  if (args.historicalApis) {
    globs.push(
      "docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/[0-9]*/_toc.json",
    );
  }
  return await globby(globs);
}

function collectTocFileContents(children: string[]): string[] {
  const urls = [];

  for (const child of children) {
    if ("children" in child) {
      const childUrls = collectTocFileContents(child.children);
      urls.push(childUrls);
    } else {
      urls.push(child.url);
    }
  }
  return urls;
}

main().then(() => process.exit());
