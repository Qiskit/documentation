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

import fs from "fs/promises";
import path from "path";

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { flatten, flattenDeep } from "lodash-es";

import { TocEntry } from "../lib/api/generateToc.js";

const TODAY = new Date();

interface NewPillEntry {
  url: string;
  date?: string | "null";
}

// Grab the toc and grab each url with a newpill
async function main() {
  const tocFiles = await globby([
    "docs/guides/_toc.json",
    "docs/migration-guides/_toc.json",
    "docs/open-source/_toc.json",
  ]);
  const allOutdatedPills = [];
  for (const tocFile of tocFiles) {
    const tocNewPills = await findNewPills(tocFile);
    const outdatedPills = await getOutdatedPills(tocNewPills);
    allOutdatedPills.push(...outdatedPills);
  }
  if (allOutdatedPills.length > 0) {
    allOutdatedPills.forEach((outdatedPill: NewPillEntry) =>
      console.error(
        `\n❌ This URL needs to have their new pill removed: ${outdatedPill.url}`,
      ),
    );
  } else {
    console.log("\nNo outdated new pills found ✅\n");
  }
}

async function getOutdatedPills(
  newPills: NewPillEntry[],
): Promise<NewPillEntry[]> {
  const outdatedPills = [];
  const msPerDay = 1000 * 60 * 60 * 24;
  for (const pill of newPills) {
    if (pill.date) {
      const oldDate = new Date(pill.date);
      const daysDiff = (TODAY.getTime() - oldDate.getTime()) / msPerDay;
      if (daysDiff > 14) {
        outdatedPills.push(pill);
      }
    } else {
      outdatedPills.push(pill);
    }
  }
  return outdatedPills;
}

// Parse _toc.json to extract urls and dicts containing 'isNew' entries
async function findNewPills(tocFilePath: string): Promise<NewPillEntry[]> {
  console.log("Checking new pills in toc:", tocFilePath);
  const raw = await fs.readFile(tocFilePath, "utf-8");
  const rootEntries = JSON.parse(raw).children;
  const isNewEntries = collectNewPills(rootEntries);
  return isNewEntries;
}

function collectNewPills(entries: TocEntry[]): NewPillEntry[] {
  const isNewDates = [];
  for (const entry of entries) {
    if ("children" in entry) {
      const childEntries = collectNewPills(entry.children || []);
      isNewDates.push(...childEntries);
    } else if (entry.isNew && entry.url) {
      if (entry.isNewDate) {
        isNewDates.push({ url: entry.url, date: entry.isNewDate });
      } else {
        isNewDates.push({ url: entry.url });
      }
    }
  }
  return isNewDates;
}

main().then(() => process.exit());
