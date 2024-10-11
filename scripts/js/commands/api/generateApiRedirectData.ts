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

// Store which minor version == the latest release. This simplifies the web app's
// implementation.
type LatestVersions = { [pkg: string]: string };

// Note: if this file's memory becomes a problem over time, we can use a more optimal
// representation of missing pages. Rather than enumerating every version a page is
// missing from, we can store contiguous ranges. For example, ("0.1", "0.5") would mean the
// page is missing in 0.1-0.5. However, this representation is not as simple:
//
//   - We need to handle multiple contiguous ranges. For example, imagine an
//     API added in 0.3 but removed in 0.6. This would be
//     [("0.1", "0.2"), ("0.6", "<dev-version>")]
//   - Qiskit SDK has breaks in its versions; 0.20-0.23 and 0.34 don't exist, but
//     those versions not existing don't necessarily mean the range is not contiguous.
//   - The web app code would have more complex code to check if the current
//     page is in the contiguous ranges.
type MissingPages = { [pkg: string]: { [page: string]: string[] } };

// This mechanism allows us to set up custom redirects from historical/dev versions to
// the latest version.
//
// This mechanism is useful because of the API version warning banner that we show on all versions
// other than latest. That banner differentiates between pages that exist on the latest
// version versus do not because the API was deleted or it's new to the dev version. Sometimes,
// the API was not actually changed and only its URL was modified; so, this mechanism let's us
// more accurately reflect the situation.
//
// We don't attempt to support custom redirect rules for arbitrary version relationships like
// 0.1 <-> 0.2 because it is too complex. When changing between historical API versions via the
// version selector, it's not the end of the world if we don't preserve the current API you're on
// and instead go to the API index page. That behavior would only happen when an API's
// URL changed between versions, which is not common. We only go so out of our way to
// set up custom redirect rules for the latest version because we don't want to say
// misleading information in the API version warning banner.
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
