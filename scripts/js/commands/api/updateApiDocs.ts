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

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { Pkg } from "../../lib/api/Pkg.js";
import { zxMain } from "../../lib/zx.js";
import { parseMinorVersion, isValidVersion } from "../../lib/apiVersions.js";
import { pathExists, rmFilesInFolder } from "../../lib/fs.js";
import { downloadSphinxArtifact } from "../../lib/api/sphinxArtifacts.js";
import { runConversionPipeline } from "../../lib/api/conversionPipeline.js";
import { generateHistoricalRedirects } from "./generateHistoricalRedirects.js";

export interface Arguments {
  [x: string]: unknown;
  package: string;
  version: string;
  historical: boolean;
  dev: boolean;
  skipDownload: boolean;
  sphinxArtifactFolder?: string;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: Pkg.VALID_NAMES,
      demandOption: true,
      description: "Which package to update",
    })
    .option("version", {
      alias: "v",
      type: "string",
      demandOption: true,
      description: "The full version string of the --package, e.g. 0.44.0",
      coerce: (version) => {
        if (!isValidVersion(version)) {
          throw new Error(
            "The version must include a major, a minor, and a patch. E.g. `-v 0.46.3`",
          );
        }
        return version;
      },
    })
    .option("historical", {
      type: "boolean",
      default: false,
      description: "Is this a prior release?",
    })
    .option("dev", {
      type: "boolean",
      default: false,
      description: "Is this a dev release?",
    })
    .option("skip-download", {
      type: "boolean",
      default: false,
      description:
        "Rather than downloading the artifact from Box, reuse what is already downloaded. This can save time, but it risks using an outdated version of the docs.",
    })
    .option("sphinx-artifact-folder", {
      alias: "a",
      type: "string",
      implies: "skip-download",
      normalize: true,
      description:
        "Skip downloading the artifact from Box and instead use the given directory as the root of the Sphinx HTML output.",
    })
    .parseSync();
};

export async function generateVersion(
  pkg: Pkg,
  args: Arguments,
): Promise<void> {
  const sphinxArtifactFolder = await prepareSphinxFolder(pkg, args);
  await deleteExistingFiles(pkg);

  console.log(`Run pipeline for ${pkg.name}:${pkg.versionWithoutPatch}`);
  await runConversionPipeline(sphinxArtifactFolder, "docs", "public/docs", pkg);
  await generateHistoricalRedirects();
}

export function determineMinorVersion(args: Arguments): string {
  const minorVersion = parseMinorVersion(args.version);
  if (minorVersion === null) {
    throw new Error(
      `Invalid --version. Expected the format 0.44.0, but received ${args.version}`,
    );
  }

  const devRegex = /[0-9](rc|-dev)/;
  if (args.dev && !args.version.match(devRegex)) {
    throw new Error(
      `${args.package} ${args.version} is not a correct dev version. Please make sure the version has one of the following suffixes immediately following the patch version: rc, -dev. e.g. 1.0.0rc1 or 1.0.0-dev`,
    );
  }

  return minorVersion;
}

async function prepareSphinxFolder(pkg: Pkg, args: Arguments): Promise<string> {
  if (args.sphinxArtifactFolder) {
    if (!(await pathExists(args.sphinxArtifactFolder))) {
      throw new Error(
        `Explicit artifact path '${args.sphinxArtifactFolder}' does not exist.`,
      );
    }
    return args.sphinxArtifactFolder;
  }
  const sphinxArtifactFolder = pkg.sphinxArtifactFolder();
  if (
    args.skipDownload &&
    (await pathExists(`${sphinxArtifactFolder}/artifact`))
  ) {
    console.log(
      `Skip downloading sources for ${pkg.name}:${pkg.versionWithoutPatch}`,
    );
  } else {
    await downloadSphinxArtifact(pkg, sphinxArtifactFolder);
  }
  return `${sphinxArtifactFolder}/artifact`;
}

async function deleteExistingFiles(pkg: Pkg): Promise<void> {
  const markdownDir = pkg.outputDir("docs");
  if (await pathExists(markdownDir)) {
    await rmFilesInFolder(markdownDir);
  }
  const imagesDir = pkg.outputDir("public/docs/images");
  if (await pathExists(imagesDir)) {
    await rmFilesInFolder(imagesDir);
  }
  console.log(
    `Deleted existing markdown & images for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  zxMain(async () => {
    const args = readArgs();

    if (args.historical && args.dev) {
      throw new Error(
        `${args.package} ${args.version} cannot be historical and dev at the same time. Please remove at least only one of these two arguments: --historical, --dev.`,
      );
    }

    const minorVersion = determineMinorVersion(args);
    const type = args.historical ? "historical" : args.dev ? "dev" : "latest";
    const pkg = await Pkg.fromArgs(
      args.package,
      args.version,
      minorVersion,
      type,
    );
    await generateVersion(pkg, args);
  });
}
