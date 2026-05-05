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

import { $ } from "zx";
import { mkdirp } from "mkdirp";

import { Pkg } from "../../lib/api/Pkg.js";
import { parseMinorVersion } from "../../lib/apiVersions.js";
import { pathExists, rmFilesInFolder } from "../../lib/fs.js";
import { downloadSphinxArtifact } from "../../lib/api/sphinxArtifacts.js";
import {
  runSphinxPipeline,
  SphinxPipelineConfig,
} from "../../lib/sphinx/conversionPipeline.js";

export const DOCS_FOLDER = "docs";
export const PUBLIC_FOLDER = "public";

// Glob patterns that identify API reference content in Sphinx artifacts.
export const API_INCLUDE = [
  "apidocs/**",
  "apidoc/**",
  "stubs/**",
  "release_notes.html",
  "release-notes.html",
];

// Glob patterns to exclude from prose runs (API content + release notes which
// contain links to API pages, + Sphinx internals already excluded by the pipeline).
export const PROSE_EXCLUDE = [
  "apidocs/**",
  "apidoc/**",
  "stubs/**",
  "release_notes.html",
  "release-notes.html",
];

export async function downloadArtifact(
  pkg: Pkg,
  skipDownload: boolean,
): Promise<string> {
  const artifactFolder = pkg.sphinxArtifactFolder();
  const artifactPath = `${artifactFolder}/artifact`;

  if (skipDownload && (await pathExists(artifactPath))) {
    console.log(`Reusing cached artifact for ${pkg.name}`);
    return artifactPath;
  }

  await downloadSphinxArtifact(pkg, artifactFolder);
  return artifactPath;
}

export async function clearOutputDir(dir: string): Promise<void> {
  if (await pathExists(dir)) {
    await rmFilesInFolder(dir);
  }
}

export async function runPipeline(
  artifactPath: string,
  config: SphinxPipelineConfig,
): Promise<void> {
  await clearOutputDir(config.output);
  await runSphinxPipeline(artifactPath, DOCS_FOLDER, PUBLIC_FOLDER, config);
}
