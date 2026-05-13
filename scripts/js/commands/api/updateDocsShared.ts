// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

// Shared helpers for updateApiDocs.ts and updateAddonDocs.ts — they both
// take --package/--version, download (or reuse) a Sphinx artifact, and wipe
// an output directory before running a pipeline.

import { readFile, writeFile } from "fs/promises";

import { $ } from "zx";
import { mkdirp } from "mkdirp";
import type { Argv } from "yargs";

import { Pkg } from "../../lib/api/Pkg.js";
import { pathExists, rmFilesInFolder } from "../../lib/fs.js";
import { downloadSphinxArtifact } from "../../lib/api/sphinxArtifacts.js";
import { isValidVersion } from "../../lib/apiVersions.js";

/** Fields shared by both `updateApiDocs` and `updateAddonDocs` CLIs. */
export interface SharedArguments {
  package: string;
  version: string;
  skipDownload: boolean;
  sphinxArtifactFolder?: string;
}

/**
 * Register the yargs options shared by both commands. Call on the builder
 * before adding command-specific options.
 */
export function addSharedOptions(y: Argv): Argv {
  return y
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
    });
}

/**
 * Resolve the Sphinx artifact folder: either a user-provided path, a reused
 * prior download, or a fresh download from Box.
 */
export async function prepareSphinxFolder(
  pkg: Pkg,
  args: SharedArguments,
): Promise<string> {
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

export interface DeleteOptions {
  /** Markdown output directory (contents removed before pipeline runs). */
  markdownDir: string;
  /** Image output directory (removed entirely before pipeline runs). */
  imagesDir: string;
  /**
   * If true, recursively wipe `markdownDir`; otherwise only delete top-level
   * files (so sibling historical-version subfolders are preserved).
   */
  recursive: boolean;
  /**
   * Filenames under `markdownDir` to read into memory before deletion and
   * restore after. Used to keep a hand-authored `_toc.json`.
   */
  preserveFiles?: string[];
}

/** Wipe output directories in preparation for a fresh pipeline run. */
export async function deleteOutputDirs(
  pkg: Pkg,
  { markdownDir, imagesDir, recursive, preserveFiles = [] }: DeleteOptions,
): Promise<void> {
  if (await pathExists(markdownDir)) {
    const preserved: Array<[string, string]> = [];
    for (const name of preserveFiles) {
      const path = `${markdownDir}/${name}`;
      if (await pathExists(path)) {
        preserved.push([name, await readFile(path, "utf-8")]);
      }
    }
    if (recursive) {
      await $`rm -rf ${markdownDir}`;
    } else {
      await rmFilesInFolder(markdownDir);
    }
    if (preserved.length > 0) {
      await mkdirp(markdownDir);
      for (const [name, content] of preserved) {
        await writeFile(`${markdownDir}/${name}`, content);
      }
    }
  }
  if (await pathExists(imagesDir)) {
    if (recursive) {
      await $`rm -rf ${imagesDir}`;
    } else {
      await rmFilesInFolder(imagesDir);
    }
  }
  console.log(
    `Deleted existing docs & images for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
}
