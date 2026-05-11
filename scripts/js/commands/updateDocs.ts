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
import { pathExists, rmFilesInFolder } from "../lib/fs.js";
import { downloadSphinxArtifact } from "../lib/api/sphinxArtifacts.js";
import { runConversionPipeline } from "../lib/api/conversionPipeline.js";
import { runSphinxPipeline } from "../lib/sphinx/conversionPipeline.js";

import { zxMain } from "../lib/zx.js";
import { isValidVersion, parseMinorVersion } from "../lib/apiVersions.js";

interface Arguments {
  package: string;
  version: string;
  skipDownload?: boolean;
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

async function generateVersion(pkg: Pkg, args: Arguments): Promise<void> {
  const sphinxArtifactFolder = await prepareSphinxFolder(pkg, args);

  await deleteExistingApiFiles(pkg);

  console.log(`Run pipeline for ${pkg.name}:${pkg.versionWithoutPatch}`);
  await runConversionPipeline(sphinxArtifactFolder, "docs", "public/docs", pkg);

  if (pkg.isAddon()) {
    await deleteExistingAddonFiles(pkg);
    await runSphinxPipeline(
      sphinxArtifactFolder,
      "docs/addons",
      "public/docs",
      pkg,
    );
  }
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

async function deleteExistingApiFiles(pkg: Pkg): Promise<void> {
  const markdownDir = pkg.apiOutputDir("docs");
  if (await pathExists(markdownDir)) {
    await rmFilesInFolder(markdownDir);
  }
  const imagesDir = pkg.apiOutputDir("public/docs/images");
  if (await pathExists(imagesDir)) {
    await rmFilesInFolder(imagesDir);
  }
  console.log(
    `Deleted existing docs & images for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
}

async function deleteExistingAddonFiles(pkg: Pkg): Promise<void> {
  const markdownDir = pkg.outputDir("docs/addons");
  if (await pathExists(markdownDir)) {
    // Preserve the hand-authored _toc.json.
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
    `Deleted existing docs & images for ${pkg.name}:${pkg.versionWithoutPatch}`,
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
