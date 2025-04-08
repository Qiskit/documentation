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

import { $ } from "zx";
import { globby } from "globby";

import { zxMain, isInstalled } from "../lib/zx.js";

// When users link to this folder, they leave off this prefix.
const PUBLIC_FOLDER_PREFIX = "public/docs/";

// Files that are used in closed source, so should not be removed.
// Format: full file path, e.g. "public/docs/images/guides/paulibasis.png"
const ALLOW_LIST = new Set<string>([]);

zxMain(async () => {
  const paths = await getStrippedImagePaths();
  let allGood = true;
  let numFilesChecked = 0;
  for (const fp of paths) {
    numFilesChecked++;
    const isUnused = await isImageUnused(fp);
    if (isUnused) {
      console.error(`❌ image is unused: ${PUBLIC_FOLDER_PREFIX}${fp}`);
      allGood = false;
    }

    // This script can be slow, so log progress every 20 files.
    if (numFilesChecked % 20 == 0) {
      console.log(`⏳ Checked ${numFilesChecked} / ${paths.size} images`);
    }
  }

  if (allGood) {
    console.log("✅ all images used");
  } else {
    console.error(
      "\n\n❌ Some images are unused. They should usually be deleted to reduce our repository size.",
    );
    process.exit(1);
  }
});

async function getStrippedImagePaths(): Promise<Set<string>> {
  const fullPaths = await globby([
    `${PUBLIC_FOLDER_PREFIX}images/**`,
    // We don't check API images because the API pipeline will already ensure there are no
    // stale images when regenerating API docs.
    `!${PUBLIC_FOLDER_PREFIX}images/api/**`,
  ]);
  return new Set(
    fullPaths.map((fp) =>
      fp
        .split(PUBLIC_FOLDER_PREFIX)[1]
        // Dark mode variants aren't explicitly loaded in images in Markdown.
        // As long as the path with `@dark` removed is found, it's a valid file.
        .replace(/@dark/g, ""),
    ),
  );
}

async function isImageUnused(strippedFp: string): Promise<boolean> {
  const args = (await isInstalled("rg"))
    ? ["rg", "-l", strippedFp, "docs", "-g", "!docs/api"]
    : ["git", "grep", "-l", strippedFp, "docs", ":!docs/api"];
  const proc = await $`${args}`.quiet().catch((result) => result);
  return (
    proc.stdout === "" &&
    !ALLOW_LIST.has(`${PUBLIC_FOLDER_PREFIX}${strippedFp}`)
  );
}
