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
import { readFile, writeFile } from "fs/promises";

import { $ } from "zx";
import { mkdirp } from "mkdirp";

import { Pkg } from "../lib/api/Pkg.js";
import { pathExists } from "../lib/fs.js";
import { downloadSphinxArtifact } from "../lib/api/sphinxArtifacts.js";
import { runSphinxPipeline } from "../lib/sphinx/conversionPipeline.js";
import { zxMain } from "../lib/zx.js";
import { parseMinorVersion } from "../lib/apiVersions.js";

export interface Arguments {
  [x: string]: unknown;
  package?: string;
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
      description: "Which package to update",
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

async function runForAddon(pkg: Pkg, args: Arguments): Promise<void> {
  const sphinxArtifactFolder = await prepareSphinxFolder(pkg, args);
  await deleteExistingFiles(pkg);

  console.log(`Run pipeline for ${pkg.name}:${pkg.versionWithoutPatch}`);
  await runSphinxPipeline(
    sphinxArtifactFolder,
    "docs/addons",
    "public/docs",
    pkg,
  );
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
  const markdownDir = pkg.outputDir("docs/addons");
  if (await pathExists(markdownDir)) {
    // Preserve the hand-authored _toc.json — it is maintained separately
    // from the generated content and should not be overwritten by the pipeline.
    const tocPath = `${markdownDir}/_toc.json`;
    const tocContent = (await pathExists(tocPath))
      ? await readFile(tocPath, "utf-8")
      : null;
    await $`rm -rf ${markdownDir}`;
    if (tocContent !== null) {
      await mkdirp(markdownDir);
      await writeFile(tocPath, tocContent);
    }
  }
  const imagesDir = pkg.outputDir("public/docs/images/addons");
  if (await pathExists(imagesDir)) {
    await $`rm -rf ${imagesDir}`;
  }
  console.log(
    `Deleted existing markdown & images for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
}

const ADDONS = [
  { name: "qiskit-addon-aqc-tensor", version: "0.2.0" },
  { name: "qiskit-addon-cutting", version: "0.10.0" },
  { name: "qiskit-addon-mpf", version: "0.3.0" },
  { name: "qiskit-addon-obp", version: "0.3.0" },
  { name: "qiskit-addon-sqd", version: "0.12.0" },
  { name: "qiskit-addon-utils", version: "0.3.1" },
];

if (import.meta.url === `file://${process.argv[1]}`) {
  zxMain(async () => {
    const args = readArgs();
    const addons = args.package
      ? ADDONS.filter((a) => a.name === args.package)
      : ADDONS;

    for (const addon of addons) {
      const minorVersion = parseMinorVersion(addon.version)!;
      const pkg = await Pkg.fromArgs(
        addon.name,
        addon.version,
        minorVersion,
        "latest",
      );

      await runForAddon(pkg, args);
    }
  });
}
