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
import { parseMinorVersion } from "../../lib/apiVersions.js";
import { runApiDocsPipeline } from "../../lib/api/apiDocsPipeline.js";
import { generateHistoricalRedirects } from "./generateHistoricalRedirects.js";
import {
  addSharedOptions,
  deleteOutputDirs,
  prepareSphinxFolder,
  SharedArguments,
} from "./updateDocsShared.js";

export type Arguments = SharedArguments & {
  [x: string]: unknown;
  historical: boolean;
  dev: boolean;
}

const readArgs = (): Arguments => {
  return addSharedOptions(yargs(hideBin(process.argv)).version(false))
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
    .parseSync() as unknown as Arguments;
};

export async function generateVersion(
  pkg: Pkg,
  args: Arguments,
): Promise<void> {
  const sphinxArtifactFolder = await prepareSphinxFolder(pkg, args);
  await deleteOutputDirs(pkg, {
    markdownDir: pkg.apiOutputDir("docs"),
    imagesDir: pkg.apiOutputDir("public/docs/images"),
    recursive: false,
  });

  console.log(`Run pipeline for ${pkg.name}:${pkg.versionWithoutPatch}`);
  await runApiDocsPipeline(sphinxArtifactFolder, "docs", "public/docs", pkg);
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
