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

import { Pkg } from "../../lib/api/Pkg.js";
import { runAddonDocsPipeline } from "../../lib/api/addonDocsPipeline.js";
import { zxMain } from "../../lib/zx.js";
import { parseMinorVersion } from "../../lib/apiVersions.js";
import {
  addSharedOptions,
  deleteOutputDirs,
  prepareSphinxFolder,
  SharedArguments,
} from "./updateDocsShared.js";

const readArgs = (): SharedArguments => {
  return addSharedOptions(
    yargs(hideBin(process.argv)).version(false),
  ).parseSync() as unknown as SharedArguments;
};

async function generateVersion(pkg: Pkg, args: SharedArguments): Promise<void> {
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

zxMain(async () => {
  const args = readArgs();
  const minorVersion = parseMinorVersion(args.version);
  if (minorVersion === null) {
    throw new Error(
      `Invalid --version. Expected the format 0.44.0, but received ${args.version}`,
    );
  }

  const pkg = await Pkg.fromArgs(
    args.package,
    args.version,
    minorVersion,
    "latest",
  );
  await generateVersion(pkg, args);
});
