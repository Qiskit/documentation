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
import { globby } from "globby";

import { TocEntry } from "../lib/api/generateToc.js";

const TODAY = new Date();

interface NewPillEntry {
  toc: string;
  url: string;
  date: string | null;
}

// Grab the toc and grab each url with a newpill
async function main() {
  const tocFiles = await globby([
    "docs/guides/_toc.json",
    "docs/migration-guides/_toc.json",
    "docs/open-source/_toc.json",
  ]);
  const allOutdatedPills = [];
  const allMissingDates = [];
  for (const tocFile of tocFiles) {
    const tocNewPills = await findNewPills(tocFile);
    const { outdated, missingDate } = detectOutdatedNewPills(tocNewPills);
    allOutdatedPills.push(...outdated);
    allMissingDates.push(...missingDate);
  }
  if (allOutdatedPills.length > 0 || allMissingDates.length > 0) {
    allOutdatedPills.forEach((outdatedPill: NewPillEntry) =>
      console.error(
        `\n❌ The new pill should be removed for the url: '${outdatedPill.url}' in '${outdatedPill.toc}'`,
      ),
    );
    allMissingDates.forEach((missingDatePill: NewPillEntry) =>
      console.error(
        `\n❌ There is a missing 'isNewDate' entry for the url: '${missingDatePill.url}' in '${missingDatePill.toc}'`,
      ),
    );
    process.exit(1);
  } else {
    console.log("\nNo outdated new pills found ✅\n");
  }
}

function detectOutdatedNewPills(newPills: NewPillEntry[]): {
  outdated: NewPillEntry[];
  missingDate: NewPillEntry[];
} {
  const outdatedPills = [];
  const missingDates = [];
  const msPerDay = 1000 * 60 * 60 * 24;
  for (const pill of newPills) {
    if (!pill.date) {
      missingDates.push(pill);
      continue;
    }
    const oldDate = new Date(pill.date);
    const daysDiff = (TODAY.getTime() - oldDate.getTime()) / msPerDay;
    if (daysDiff > 14) {
      outdatedPills.push(pill);
    }
  }
  return { outdated: outdatedPills, missingDate: missingDates };
}

/** Parse _toc.json to extract urls and dicts containing 'isNew' entries */
async function findNewPills(tocFilePath: string): Promise<NewPillEntry[]> {
  console.log("Checking new pills in toc:", tocFilePath);
  const raw = await fs.readFile(tocFilePath, "utf-8");
  const rootEntries = JSON.parse(raw).children;
  return collectNewPills(rootEntries, tocFilePath);
}

function collectNewPills(entries: TocEntry[], tocPath: string): NewPillEntry[] {
  const newPillEntries = [];
  for (const entry of entries) {
    if ("children" in entry) {
      const childEntries = collectNewPills(entry.children || [], tocPath);
      newPillEntries.push(...childEntries);
    } else if (entry.isNew && entry.url) {
      if (entry.isNewDate) {
        newPillEntries.push({
          toc: tocPath,
          url: entry.url,
          date: entry.isNewDate,
        });
      } else {
        newPillEntries.push({ toc: tocPath, url: entry.url, date: null });
      }
    }
  }
  return newPillEntries;
}

main().then(() => process.exit());
