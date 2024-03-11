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
import { flattenDeep } from "lodash";

import { TocEntry } from "../lib/api/generateToc";

interface Arguments {
  [x: string]: unknown;
  currentApis: boolean;
  devApis: boolean;
  historicalApis: boolean;
}

const ALLOWED_ORPHAN_URLS = new Set([
  "/api/qiskit/qiskit.primitives.BaseEstimator",
  "/api/qiskit/qiskit.primitives.BaseSampler",
  "/run/circuit-execution",
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

  for (const tocFile of tocFiles) {
    console.log("Checking toc in:", tocFile);
    const tocUrls = await getTocUrls(tocFile);
    const dir = path.dirname(tocFile);
    const existingUrls = await collectExistingUrls(dir);
    orphanPages.push(
      ...existingUrls.filter(
        (file) => !tocUrls.has(file) && !ALLOWED_ORPHAN_URLS.has(file),
      ),
    );
  }
  if (orphanPages.length > 0) {
    console.error(
      "\n There are some orphaned pages!  These files need a home: \n",
      orphanPages.join("\n"),
    );
    process.exit(1);
  }
  console.log("\nNo orphan pages found ✅\n");
}

async function getTocUrls(filePath: string): Promise<Set<string>> {
  const jsonFileContents = await fs.readFile(filePath, "utf-8");
  const children = JSON.parse(jsonFileContents).children;

  const fileContents = await collectTocFileContents(children);
  const flatFileContents = flattenDeep(fileContents);

  flatFileContents.push(`${flatFileContents[0]}/index`);

  return new Set(flatFileContents);
}

async function collectExistingUrls(directory: string): Promise<string[]> {
  const fileList = await globby([`${directory}/*.{md,mdx,ipynb}`]);
  return fileList.map((fileName) =>
    fileName.replace("docs", "").replace(".mdx", "").replace(".ipynb", ""),
  );
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

function collectTocFileContents(children: TocEntry[]): string[] {
  const urls = [];

  for (const child of children) {
    if ("children" in child) {
      const childUrls = collectTocFileContents(child.children || []);
      urls.push(...childUrls);
    } else if (child.url !== undefined) {
      urls.push(child.url);
    }
  }
  return urls;
}

main().then(() => process.exit());
