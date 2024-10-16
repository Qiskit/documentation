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

import { readdir, writeFile } from "fs/promises";
import { join } from "path";

import { Pkg } from "../../lib/api/Pkg.js";
import { readApiMinorVersion } from "../../lib/apiVersions.js";
import { zxMain } from "../../lib/zx.js";
import { removeSuffix } from "../../lib/stringUtils.js";

const OUTPUT_FILE = "./scripts/config/api-redirect-data.json";

type Version = string;

// Store which minor version == the latest release. This simplifies the web app's
// implementation.
type LatestVersions = { [pkg: string]: Version };

// This isn't the most compact representation possible, but it's good enough for now.
// See https://github.com/Qiskit/documentation/pull/2125 for more information.
type MissingPages = { [pkg: string]: { [page: string]: Version[] } };

// This mechanism links pages between historical/dev versions and the latest version when URLs change.
// For simplicity, we only support custom redirects between historical/dev to latest,
// which covers the most important cases. See https://github.com/Qiskit/documentation/pull/2125
// for more information.
type CustomRedirectsToLatest = {
  [pkg: string]: { [version: string]: { [page: string]: string } };
};

type RedirectData = {
  latestVersions: LatestVersions;
  missing: MissingPages;
  customRedirectsToLatest: CustomRedirectsToLatest;
};

export async function generateApiRedirectData(): Promise<void> {
  console.log(`Generating ${OUTPUT_FILE}`);
  const result: RedirectData = {
    latestVersions: {},
    customRedirectsToLatest: {},
    missing: {},
  };

  for (const pkgName of Pkg.VALID_NAMES) {
    const pkgPath = join("docs/api", pkgName);
    const latestVersion = await readApiMinorVersion(pkgPath);
    const versionPaths = await determineVersionPaths(pkgPath);

    result.latestVersions[pkgName] = latestVersion;
    result.missing[pkgName] = await findMissingPagesForPkg([
      pkgPath,
      ...versionPaths,
    ]);
    result.customRedirectsToLatest[pkgName] = await determineRedirectsToLatest(
      pkgPath,
      versionPaths,
    );
  }
  await writeFile(OUTPUT_FILE, JSON.stringify(result, null, 2) + "\n");
}

async function findMissingPagesForPkg(
  versionPaths: string[],
): Promise<{ [version: string]: string[] }> {
  const versionsToPages: { [version: string]: Set<string> } = {};
  for (const path of versionPaths) {
    const pages = await readPagesForVersion(path);
    const version = await readApiMinorVersion(path);
    versionsToPages[version] = pages;
  }

  // Aka Set.union(), which is not yet released in Node.js.
  const allPages = new Set(
    Object.values(versionsToPages).reduce(
      (acc: string[], version) => [...acc, ...version],
      [],
    ),
  );

  const result: { [page: string]: string[] } = {};
  for (const page of Array.from(allPages).sort()) {
    const missingVersions = Object.entries(versionsToPages)
      .filter(([, versionPages]) => !versionPages.has(page))
      .map(([version]) => version)
      .sort();
    if (missingVersions.length) {
      result[page] = missingVersions;
    }
  }
  return result;
}

async function determineVersionPaths(pkgPath: string): Promise<string[]> {
  const entries = await readdir(pkgPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && entry.name !== "release-notes")
    .map((entry) => join(entry.path, entry.name));
}

async function readPagesForVersion(path: string): Promise<Set<string>> {
  const entries = await readdir(path, { withFileTypes: true });
  return new Set(
    entries
      .filter(
        (entry) =>
          !entry.isDirectory() &&
          entry.name.endsWith(".mdx") &&
          !entry.name.startsWith("release-notes"),
      )
      .map((entry) => removeSuffix(entry.name, ".mdx")),
  );
}

async function determineRedirectsToLatest(
  pkgPath: string,
  historicalVersionPaths: string[],
): Promise<{ [version: string]: { [page: string]: string } }> {
  const latestPages = await readPagesForVersion(pkgPath);
  const redirectsByVersion: { [version: string]: { [page: string]: string } } =
    {};
  for (const versionPath of historicalVersionPaths) {
    const pages = await readPagesForVersion(versionPath);
    const version = await readApiMinorVersion(versionPath);
    const redirects: { [page: string]: string } = {};
    for (const page of pages) {
      if (latestPages.has(page)) continue;
      if (
        pkgPath.endsWith("qiskit-ibm-transpiler") &&
        page.includes("qiskit_transpiler_service")
      ) {
        redirects[page] =
          `/${page.replace("qiskit_transpiler_service", "qiskit_ibm_transpiler")}`;
        continue;
      }

      if (pkgPath.endsWith("qiskit") && page.endsWith(".rst")) {
        redirects[page] =
          `/${page.replace("_class.rst", "").replace("_fun.rst", "")}`;
        continue;
      }
    }

    if (Object.keys(redirects).length) {
      redirectsByVersion[version] = redirects;
    }
  }

  return redirectsByVersion;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  zxMain(async () => {
    await generateApiRedirectData();
  });
}
