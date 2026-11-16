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

import { readFile } from "fs/promises";

import { globby } from "globby";

import { zxMain } from "../lib/zx.js";
import {
  PUBLIC_FOLDER_PREFIX,
  findUnusedImages,
  stripImagePaths,
} from "../lib/staleImages.js";

const IMAGES_GLOBS = [
  `${PUBLIC_FOLDER_PREFIX}*/images/**`,
  // We don't check API images because the API pipeline will already ensure there are no
  // stale images when regenerating API docs.
  `!${PUBLIC_FOLDER_PREFIX}docs/images/api/**`,
];

// The files that can reference images. API docs are excluded for the same
// reason as in IMAGES_GLOBS.
const CONTENT_GLOBS = ["docs/**", "learning/**", "!docs/api/**"];

// Files that are used in closed source, so should not be removed.
// Format: full file path, e.g. "public/docs/images/guides/paulibasis.png"
const ALLOW_LIST = new Set<string>([]);

zxMain(async () => {
  const imagePaths = stripImagePaths(await globby(IMAGES_GLOBS));
  if (imagePaths.size === 0) {
    throw new Error("Did not detect any images: Please check this script.");
  }

  const contentPaths = await globby(CONTENT_GLOBS, { gitignore: true });
  const contents = await Promise.all(
    contentPaths.map((fp) => readFile(fp, "utf-8")),
  );

  const unused = findUnusedImages(imagePaths, contents, ALLOW_LIST);
  if (unused.length === 0) {
    console.log(`✅ all ${imagePaths.size} images used`);
    return;
  }

  for (const fp of unused) {
    console.error(`❌ image is unused: ${PUBLIC_FOLDER_PREFIX}${fp}`);
  }
  console.error(
    "\n\n❌ Some images are unused. They should usually be deleted to reduce our repository size.",
  );
  process.exit(1);
});
