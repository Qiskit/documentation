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
import { parseMinorVersion } from "../lib/apiVersions.js";
import { pathExists } from "../lib/fs.js";
import { downloadSphinxArtifact } from "../lib/api/sphinxArtifacts.js";
import { runSphinxPipeline } from "../lib/sphinx/conversionPipeline.js";
import { zxMain } from "../lib/zx.js";
import { $ } from "zx";

const DOCS_FOLDER = "docs";
const PUBLIC_FOLDER = "public";

// Glob patterns excluded from prose runs. Release notes link heavily to API
// pages and don't belong in the prose output.
const PROSE_EXCLUDE = [
  "apidocs/**",
  "apidoc/**",
  "stubs/**",
  "release_notes.html",
  "release-notes.html",
];

type AddonConfig = {
  name: string;
  version: string;
};

const ADDONS: AddonConfig[] = [
  { name: "qiskit-addon-aqc-tensor", version: "0.2.0" },
  { name: "qiskit-addon-cutting", version: "0.10.0" },
  { name: "qiskit-addon-mpf", version: "0.3.0" },
  { name: "qiskit-addon-obp", version: "0.3.0" },
  { name: "qiskit-addon-sqd", version: "0.12.0" },
  { name: "qiskit-addon-utils", version: "0.3.1" },
];

const VALID_NAMES = ADDONS.map((a) => a.name);

const readArgs = () => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: VALID_NAMES,
      description:
        "Which addon to update. Defaults to all configured addons.",
    })
    .option("skip-download", {
      type: "boolean",
      default: false,
      description:
        "Reuse already-downloaded artifacts instead of downloading again.",
    })
    .parseSync();
};

async function runForAddon(
  config: AddonConfig,
  skipDownload: boolean,
): Promise<void> {
  const minorVersion = parseMinorVersion(config.version)!;
  const pkg = await Pkg.fromArgs(
    config.name,
    config.version,
    minorVersion,
    "latest",
  );

  const artifactFolder = pkg.sphinxArtifactFolder();
  const artifactPath = `${artifactFolder}/artifact`;

  if (skipDownload && (await pathExists(artifactPath))) {
    console.log(`Reusing cached artifact for ${config.name}`);
  } else {
    await downloadSphinxArtifact(pkg, artifactFolder);
  }

  const proseOutput = `docs/addons/${config.name}`;
  if (await pathExists(proseOutput)) await $`rm -rf ${proseOutput}`;
  await runSphinxPipeline(artifactPath, DOCS_FOLDER, PUBLIC_FOLDER, {
    exclude: PROSE_EXCLUDE,
    output: proseOutput,
    pkg,
  });
}

zxMain(async () => {
  const args = readArgs();
  const addons = args.package
    ? ADDONS.filter((a) => a.name === args.package)
    : ADDONS;

  for (const addon of addons) {
    await runForAddon(addon, args.skipDownload);
  }
});
