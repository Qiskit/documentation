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

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { Pkg } from "../lib/api/Pkg.js";
import { zxMain } from "../lib/zx.js";
import { parseMinorVersion } from "../lib/apiVersions.js";
import { pathExists, rmFilesInFolder } from "../lib/fs.js";
import { downloadSphinxArtifact } from "../lib/api/sphinxArtifacts.js";
import { runAddonContentPipeline } from "../lib/addons/addonContentPipeline.js";
import { ADDON_DOCS_CONFIG } from "../../config/addon-docs.js";

const readArgs = () => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: Object.keys(ADDON_DOCS_CONFIG),
      description: "Which addon to update. Defaults to all configured addons.",
    })
    .option("skip-download", {
      type: "boolean",
      default: false,
      description:
        "Reuse the already-downloaded artifact instead of downloading again.",
    })
    .parseSync();
};

async function runForAddon(
  pkgName: string,
  skipDownload: boolean,
): Promise<void> {
  const addonConfig = ADDON_DOCS_CONFIG[pkgName];
  const { version } = addonConfig;
  const minorVersion = parseMinorVersion(version);
  if (minorVersion === null) {
    throw new Error(
      `Invalid version "${version}" in addon-docs.ts for ${pkgName}`,
    );
  }

  const pkg = await Pkg.fromArgs(pkgName, version, minorVersion, "latest");
  const sphinxArtifactFolder = pkg.sphinxArtifactFolder();

  if (
    skipDownload &&
    (await pathExists(`${sphinxArtifactFolder}/artifact`))
  ) {
    console.log(`Skip downloading sources for ${pkg.name}:${minorVersion}`);
  } else {
    await downloadSphinxArtifact(pkg, sphinxArtifactFolder);
  }

  const addonDir = `docs/addons/${pkg.name}`;
  if (await pathExists(addonDir)) {
    await rmFilesInFolder(addonDir);
  }
  const addonImagesDir = `public/docs/images/addons/${pkg.name}`;
  if (await pathExists(addonImagesDir)) {
    await rmFilesInFolder(addonImagesDir);
  }

  console.log(`Run addon prose pipeline for ${pkg.name}:${minorVersion}`);
  await runAddonContentPipeline(
    `${sphinxArtifactFolder}/artifact`,
    "docs",
    "public/docs",
    pkg,
    addonConfig.include,
  );
}

zxMain(async () => {
  const args = readArgs();
  const packages = args.package
    ? [args.package]
    : Object.keys(ADDON_DOCS_CONFIG);

  for (const pkgName of packages) {
    await runForAddon(pkgName, args.skipDownload);
  }
});
