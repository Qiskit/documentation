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
import { flattenDeep } from "lodash-es";

import { TocEntry } from "../lib/api/generateToc.js";

const TODAY = new Date();

// Grab the toc and grab each url with a newpill
async function main() {
  const tocNewPills = await findNewPills("docs/guides/_toc.json");  
  const outdatedPills = await getOutdatedPills(tocNewPills);
  if (outdatedPills.length > 0) {
    console.error(
      "\n❌ There are some outdated new pills! These URLs need to have their new pill removed: \n\n",
      outdatedPills.join("\n"),
    );
    process.exit(1);
  }
  console.log("\nNo outdated new pills found ✅\n");
}

async function getOutdatedPills(newPills: string[]): Promise<string[]> {
  const outdatedPills = [];
  for (const pill of newPills) {
    const isOld = getDateDifference(pill[1]);
    if (isOld == true) {
      outdatedPills.push(pill[0]);
    }
  }
  return outdatedPills;
}

function getDateDifference(pubDate: string): boolean {
  const [year, month, day] = pubDate.split('-').map(Number);
  const oldDate = new Date(year, month-1, day);
  const dateDiff = Math.abs(TODAY.getTime() - oldDate.getTime() )
  const diffDays = Math.ceil(dateDiff / (1000 * 3600 * 24));
  if (diffDays > 14) {
    return true;
  }
  return false;
}

// Parse _toc.json to extract urls and dicts containing 'isNew' entries
async function findNewPills(tocFilePath: string): Promise<string[]> {
  console.log("Checking new pills in toc:", tocFilePath);
  const raw = await fs.readFile(tocFilePath, "utf-8");
  const rootEntries = JSON.parse(raw).children;
  const isNewEntries = collectNewPills(rootEntries);
  console.log("isNewPills are: ",isNewEntries);
  return isNewEntries;
}

function collectNewPills(entries: TocEntry[]): string[] {
  const isNewDates = [];
  for (const entry of entries) {
    if("children" in entry) {
      const childEntries = collectNewPills(entry.children || []);
      isNewDates.push(...childEntries);
    } else if (entry.isNew !== undefined) {
      isNewDates.push([entry.url, entry.isNewDate]);
    }
  }
  return isNewDates;
}




async function findTocFiles(includeApis: boolean): Promise<string[]> {
  const globs = [
    "docs/**/_toc.json",
    includeApis ? "docs/api/**/_toc.json" : "!docs/api/**",
  ];
  return globby(globs);
}

main().then(() => process.exit());