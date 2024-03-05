// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { stat } from "fs/promises";
import { normalize } from "path";

import { $ } from "zx/core";

export function getRoot() {
  return normalize(`${__dirname}/../../`);
}

export async function pathExists(path: string) {
  try {
    await stat(path);
    return true;
  } catch (err: any) {
    if (err && err.code === "ENOENT") return false;
    throw err;
  }
}

/**
 * Deletes all the files in the folder, but preserves subfolders.
 */
export async function rmFilesInFolder(dir: string): Promise<void> {
  await $`find ${dir}/* -maxdepth 0 -type f | xargs rm -f {}`.quiet();
}
