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

export async function readApiVersion(versionFolder: string): Promise<string> {
  return JSON.parse(await readFile(`${versionFolder}/_package.json`, "utf-8"))
    .version;
}

export function parseMinorVersion(version: string): string | null {
  const versionMatch = version.match(/^(\d+\.\d+)/);
  return versionMatch ? versionMatch[0] : null;
}
