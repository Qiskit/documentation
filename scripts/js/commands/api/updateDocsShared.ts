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

import { $ } from "zx";

import { Pkg } from "../../lib/api/Pkg.js";
import { pathExists, rmFolderContentsExcept } from "../../lib/fs.js";
import { downloadSphinxArtifact } from "../../lib/api/sphinxArtifacts.js";

/**
 * Resolve the Sphinx artifact folder: either a user-provided path, a reused
 * prior download, or a fresh download from Box.
 */
export async function prepareSphinxFolder(
  pkg: Pkg,
  args: { skipDownload: boolean; sphinxArtifactFolder?: string },
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
   * If true, recursively wipe `markdownDir`; otherwise delete everything except
   * the subfolders matched by `isPreservedSubfolder`.
   */
  recursive: boolean;
}

/**
 * Subfolders of an output directory that a regeneration must keep: historical
 * versions (like `0.2`) and `dev` are written by other runs, and release notes
 * are built up one version at a time. Every other subfolder, such as Sphinx's
 * `generated/` or `auto/`, is output of this run, so it's deleted to avoid
 * leaving behind pages for APIs that were renamed or removed.
 */
export function isPreservedSubfolder(name: string): boolean {
  return (
    /^\d+\.\d+$/.test(name) ||
    ["dev", "release-notes", "legacy-release-notes"].includes(name)
  );
}

/** Wipe output directories in preparation for a fresh pipeline run. */
export async function deleteOutputDirs(
  pkg: Pkg,
  { markdownDir, imagesDir, recursive }: DeleteOptions,
): Promise<void> {
  if (await pathExists(markdownDir)) {
    if (recursive) {
      await $`rm -rf ${markdownDir}`;
    } else {
      await rmFolderContentsExcept(markdownDir, isPreservedSubfolder);
    }
  }
  if (await pathExists(imagesDir)) {
    if (recursive) {
      await $`rm -rf ${imagesDir}`;
    } else {
      await rmFolderContentsExcept(imagesDir, isPreservedSubfolder);
    }
  }
  console.log(
    `Deleted existing docs & images for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
}
