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

import { readdir } from "fs/promises";

import { pathExists, readJsonFile } from "./fs.js";

export async function readApiFullVersion(
  versionFolder: string,
): Promise<string> {
  const json = await readJsonFile(`${versionFolder}/_package.json`);
  return json.version;
}

export async function readApiMinorVersion(
  versionFolder: string,
): Promise<string> {
  const version = await readApiFullVersion(versionFolder);
  const versionWithoutPatch = parseMinorVersion(version);
  if (!versionWithoutPatch) {
    throw new Error(`Could not read minor version from ${versionFolder}`);
  }
  return versionWithoutPatch;
}

export function parseMinorVersion(version: string): string | null {
  const versionMatch = version.match(/^(\d+\.\d+)/);
  return versionMatch ? versionMatch[0] : null;
}

export function isValidVersion(versionToCheck: string): boolean {
  // The version must include a major, a minor, and a patch. Dev versions must also
  // include the suffixes `rc` or `-dev` immediately following the patch version.
  // E.g. 1.0.0rc1 or 1.0.0-dev`
  const fullVersionFormat = new RegExp(/^(\d+\.\d+\.\d+)(-dev|rc\d+|)$/);
  return !!versionToCheck.match(fullVersionFormat);
}

export async function getReleasedVersions(
  pkgName: string,
  currentApisOnly: boolean,
): Promise<[string[], string]> {
  const pkgDocsPath = `docs/api/${pkgName}`;
  const historicalVersions: string[] = [];

  if (!currentApisOnly) {
    const historicalFolders = (
      await readdir(`${pkgDocsPath}`, { withFileTypes: true })
    ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

    for (const folder of historicalFolders) {
      const historicalVersion = await readApiFullVersion(
        `${pkgDocsPath}/${folder.name}`,
      );
      historicalVersions.push(historicalVersion);
    }
  }

  const currentVersion = await readApiFullVersion(pkgDocsPath);
  return [historicalVersions, currentVersion];
}

export async function getDevVersion(
  pkgName: string,
): Promise<string | undefined> {
  const devPath = `docs/api/${pkgName}/dev`;

  if (await pathExists(devPath)) {
    return await readApiFullVersion(devPath);
  }

  return undefined;
}
