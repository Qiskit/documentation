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
import { flatten, flattenDeep } from "lodash-es";

import { TocEntry } from "../lib/api/generateToc.js";



const TODAY = new Date();

// Grab the toc and grab each url with a newpill
async function main() {
  const tocFiles = await globby([
    "docs/guides/_toc.json",
    "docs/migration-guides/_toc.json",
    "docs/open-source/_toc.json"
  ]);
  const allOutdatedPills = [];
  for (const tocFile of tocFiles) {
    const tocNewPills = await findNewPills(tocFile);
    const outdatedPills = await getOutdatedPills(tocNewPills);
    if (outdatedPills.length > 0) {
      allOutdatedPills.push(...outdatedPills);
    }
  }
  if (allOutdatedPills.length > 0) {
    console.error(
      "\n❌ There are some outdated new pills! These URLs need to have their new pill removed: \n\n",
      allOutdatedPills.map(item => item.join(' : ')).join("\n"),
      "\n\n",
    );
  }
  else {
    console.log("\nNo outdated new pills found ✅\n");
  }
}

async function getOutdatedPills(newPills: string[]): Promise<string[][]> {
  const outdatedPills = [];
  for (const pill of newPills) {
    var isOld;
    if (pill[1] == 'null') {
      outdatedPills.push([pill[0], 'null']);
    }
    else{
      const isOld = getDateDifference(pill[1]);
      outdatedPills.push([pill[0], pill[1]]);
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
  return isNewEntries;
}

function collectNewPills(entries: TocEntry[]): string[] {
  const isNewDates = [];
  for (const entry of entries) {
    if("children" in entry) {
      const childEntries = collectNewPills(entry.children || []);
      isNewDates.push(...childEntries);
    } else if (entry.isNew !== undefined) {
      if (entry.isNewDate !== undefined) {
        isNewDates.push([entry.url, entry.isNewDate]);
      } else {
        isNewDates.push([entry.url, 'no-date']);
      }
    }
  }
  return isNewDates;
}


main().then(() => process.exit());