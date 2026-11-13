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
 * Deletes all the files and subfolders in the folder, except the subfolders
 * for which `keepSubfolder` returns true.
 *
 * Assumes the folder exists, but it's fine if it's empty.
 */
export async function rmFolderContentsExcept(
  dir: string,
  keepSubfolder: (name: string) => boolean,
): Promise<void> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => !(entry.isDirectory() && keepSubfolder(entry.name)))
      .map((entry) =>
        fs.rm(`${dir}/${entry.name}`, { recursive: true, force: true }),
      ),
  );
}

export async function readJsonFile(path: string): Promise<any> {
  try {
    const content = await fs.readFile(path, "utf-8");
    return JSON.parse(content);
  } catch (error: any) {
    throw new Error(
      `Failed to parse JSON from file: ${path}\n\nOriginal error: ${error.message}`,
    );
  }
}
