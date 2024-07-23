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

import fs from "fs/promises";
import path from "path";
import os from "os";
import { randomBytes } from "crypto";

import { $ } from "zx/core";

export async function pathExists(path: string) {
  try {
    await fs.stat(path);
    return true;
  } catch (err: any) {
    if (err && err.code === "ENOENT") return false;
    throw err;
  }
}

/**
 * Deletes all the files in the folder, but preserves subfolders.
 *
 * Assumes the folder exists, but it's fine if it's empty.
 */
export async function rmFilesInFolder(dir: string): Promise<void> {
  await $`find ${dir} -maxdepth 1 -type f -path "${dir}/*" | xargs rm -f {}`.quiet();
}

/**
 * Copies every file to the destDir.
 *
 * Will preserve the dirname of each file. For example, `dir/f.txt` will be copied
 * over to `{dest}/dir/f.txt`.
 */
export async function copyFiles(
  files: string[],
  destDir: string,
): Promise<void> {
  await Promise.all(
    files.map(async (fp) => {
      const dest = path.join(destDir, fp);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.copyFile(fp, dest);
    }),
  );
}

export async function createTmpdir(): Promise<string> {
  const randomSuffix = randomBytes(3).toString("hex");
  const temp = path.join(os.tmpdir(), `qiskit-docs-${randomSuffix}`);
  await fs.mkdir(temp);
  return temp;
}
