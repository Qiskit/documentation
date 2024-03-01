
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



interface Arguments {
  [x: string]: unknown;
  currentApis: boolean;
  devApis: boolean;
  historicalApis: boolean;
  skipBrokenHistorical: boolean;
}

// The steps to this script are:
//  ✅ 1. Enter each folder within docs
//  ✅ 2. Create a list of files in the _toc
//  ✅ 3. Collect the list of files in directory
//  ✅ 4. Check if each file in directory is in _toc

// Needed features:
//  ✅ - Check api docs if desired
//   - Include command in .github/workflows/main.yml
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
        "Check the links in the historical API docs, e.g. `api/qiskit/0.44`. " +
        "Warning: this is slow.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();

  // DETERMINE THE TOC FILES TO CHECK AGAINST
  const tocFiles = await determineTocFiles(args);

  // SET PASS/FAIL STATUS
  let allGood = true;
  const orphanPages = [];

  for (tocFile of tocFiles) {
    // LOAD JSON CONTENTS OF TOC FILE
    console.log("Checking toc in:", tocFile);
    const jsonFileContents = await fs.readFile(tocFile, "utf-8");
    const children = JSON.parse(jsonFileContents).children; 
    const files:[string] = [];
  
    // COLLECT ALL URLS REFERENCED IN TOC FILE
    const fileContents = await collectTocFileContents(children);
    const flatFileContents = flattenArray(fileContents);
    flatFileContents[0] = flatFileContents[0] + "/index";

    // NOW COLLECT ALL FILES IN THE DIRECTORY
    const dir = tocFile.replace('_toc.json', '');
    const dirFiles = await collectDirFiles(dir);
    for (file of dirFiles) {
      if (!flatFileContents.includes(file)) {
        allGood = false;
        orphanPages.push(file);
      }
    }
  }
  if (!allGood) {
    console.error("\n There's some orphaned pages!  These files need a home: \n", orphanPages);
    process.exit(1);
  }
  console.log("\nNo orphan pages found ✅\n");
}


// Collect all files in a given directory
async function collectDirFiles(directory: string): Promise<string[]> {
  const fileGlob = [directory +"/*.md",
                    directory +"/*.mdx",
                    directory + "/*.ipynb"];
  const fileList = await globby(fileGlob);
  const processedFileList = fileList.map( (fileName) => 
    fileName.replace('docs', '').replace('.mdx', '').replace('.ipynb', '')
  );
  return processedFileList;
}

// Collect directories to look through
async function determineTocFiles(args: Arguments): Promise<string[]> {
  const globs = ["docs/**/_toc.json", "!./docs/api/**"];
  if (args.currentApis) {
    globs.push("docs/api/*/_toc.json");
  }
  if (args.devApis) {
    globs.push("docs/api/{qiskit,qiskit-ibm-runtime,qiskit-ibm-provider}/dev/_toc.json");
  }
  if (args.historicalApis) {
    globs.push("docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/[0-9]*/_toc.json")
  }
  return await globby(globs);

};

// Collect files referenced in _toc file
function collectTocFileContents(children: string[]): string[] {
  const urls = [];

  for (const child of children) {
    // If there's any children, enter recursion to get urls
    if ('children' in child) {
      const childUrls = collectTocFileContents(child.children);
      urls.push(childUrls);
    }
    // Just add url if there's no children
    else {
      urls.push(child.url);
    }
  };
  return urls;
};

function flattenArray(urlArray: [string[]]): [string[]] {
  return urlArray.reduce(
    (flattenedArray, childElement) => {
      if (Array.isArray(childElement)) {
        flattenedArray.push(...flattenArray(childElement));
      }
      else {
        flattenedArray.push(childElement);
      }
      return flattenedArray;
    },
    [],
  );
}

function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
};

main().then(() => process.exit());
