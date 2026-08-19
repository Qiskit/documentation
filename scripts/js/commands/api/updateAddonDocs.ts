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

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { Pkg } from "../../lib/api/Pkg.js";
import { runAddonDocsPipeline } from "../../lib/api/addonDocsPipeline.js";
import { zxMain } from "../../lib/zx.js";
import { parseMinorVersion } from "../../lib/apiVersions.js";
import { deleteOutputDirs, prepareSphinxFolder } from "./updateDocsShared.js";

type Args = {
  package?: string;
  all: boolean;
  skipDownload: boolean;
  sphinxArtifactFolder?: string;
};

const readArgs = (): Args => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: Pkg.ADDON_NAMES,
      description: "Which addon package to update",
    })
    .option("all", {
      type: "boolean",
      default: false,
      description: "Update all addon packages in parallel",
    })
    .option("skip-download", {
      alias: "s",
      type: "boolean",
      default: false,
      description: "Skip downloading the Sphinx artifact",
    })
    .option("sphinx-artifact-folder", {
      type: "string",
      description: "Use a local artifact folder instead of downloading",
    })
    .check((argv) => {
      if (!argv.all && !argv.package) {
        throw new Error("Either --package or --all is required");
      }
      return true;
    })
    .parseSync() as unknown as Args;
};

async function resolveVersion(pkgName: string): Promise<string> {
  const entries = await readdir(`.sphinx-artifacts/${pkgName}`);
  const versions = entries.filter((e) => /^\d/.test(e)).sort();
  if (versions.length === 0) {
    throw new Error(
      `No artifact versions found for ${pkgName}. Run without --skip-download first.`,
    );
  }
  return versions.at(-1)!;
}

async function generateVersion(pkg: Pkg, args: Args): Promise<void> {
  const sphinxArtifactFolder = await prepareSphinxFolder(pkg, args);
  await deleteOutputDirs(pkg, {
    markdownDir: pkg.outputDir("docs/addons"),
    imagesDir: pkg.outputDir("public/docs/images/addons"),
    recursive: true,
  });

  console.log(`Run pipeline for ${pkg.name}:${pkg.versionWithoutPatch}`);
  await runAddonDocsPipeline(
    sphinxArtifactFolder,
    "docs/addons",
    "public/docs",
    pkg,
  );
}

async function generatePackage(pkgName: string, args: Args): Promise<void> {
  const version = await resolveVersion(pkgName);
  const minorVersion = parseMinorVersion(version);
  if (minorVersion === null) {
    throw new Error(`Could not parse version ${version} for ${pkgName}`);
  }
  const pkg = await Pkg.fromArgs(pkgName, version, minorVersion, "latest");
  await generateVersion(pkg, args);
}

zxMain(async () => {
  const args = readArgs();
  const packages = args.all ? Pkg.ADDON_NAMES : [args.package!];
  await Promise.all(packages.map((pkgName) => generatePackage(pkgName, args)));
});
