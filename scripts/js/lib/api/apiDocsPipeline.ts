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

import { writeFile } from "fs/promises";

import { mkdirp } from "mkdirp";
import { globby } from "globby";

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { ObjectsInv } from "./objectsInv.js";
import { Pkg } from "./Pkg.js";
import { generateToc } from "./generateToc.js";
import { maybeUpdateReleaseNotesFolder } from "./releaseNotes.js";
import {
  convertHtmlToMarkdown,
  copyImages,
  postProcess,
  writeMarkdownResults,
} from "./pipelineStages.js";
import { C_API_BASE_PATH, DOCS_BASE_PATH } from "./paths.js";

export async function runApiDocsPipeline(
  artifactPath: string,
  docsBaseFolder: string,
  publicBaseFolder: string,
  pkg: Pkg,
) {
  const allObjectInvs = await ObjectsInv.loadPublishedApis(publicBaseFolder);
  const [files, markdownPath, maybeObjectsInv] = await determineFilePaths(
    artifactPath,
    docsBaseFolder,
    pkg,
  );

  const initialResults = await convertHtmlToMarkdown(
    pkg,
    artifactPath,
    docsBaseFolder,
    markdownPath,
    files,
    pkg.apiOutputDir(`${DOCS_BASE_PATH}/images`),
  );

  const results = await postProcess(
    pkg,
    initialResults,
    maybeObjectsInv,
    allObjectInvs,
  );

  // Warning: the sequence of operations often matters.
  await writeMarkdownResults(pkg, docsBaseFolder, results);
  // `publicBaseFolder` is passed as "public/docs"; images go under
  // "public/docs/images/api/{pkg}". See also maybeObjectsInv.write below which
  // uses pkg.apiOutputDir(publicBaseFolder) — the two outputs share the same
  // `api/{pkg}` subtree inside publicBaseFolder.
  await copyImages(
    pkg,
    artifactPath,
    pkg.apiOutputDir(`${publicBaseFolder}/images`),
    results,
  );
  await maybeObjectsInv?.write(pkg.apiOutputDir(publicBaseFolder));
  await maybeUpdateReleaseNotesFolder(pkg, markdownPath);
  await writeTocFile(pkg, markdownPath, results);
  await writeVersionFile(pkg, markdownPath);
}

async function determineFilePaths(
  htmlPath: string,
  docsBaseFolder: string,
  pkg: Pkg,
): Promise<[string[], string, ObjectsInv | undefined]> {
  const maybeObjectsInv = await (pkg.isProblematicLegacyQiskit()
    ? undefined
    : ObjectsInv.fromFile(htmlPath, pkg.language));

  const extraFiles = pkg.isCApi()
    ? [`${C_API_BASE_PATH}/**.html`, "apidocs/**.html"]
    : ["apidocs/**.html", "apidoc/**.html", "stubs/**.html"];
  const files = await globby(
    [...extraFiles, "release_notes.html", "release-notes.html"],
    {
      cwd: htmlPath,
    },
  );
  const markdownPath = pkg.apiOutputDir(docsBaseFolder);
  await mkdirp(markdownPath);
  return [files, markdownPath, maybeObjectsInv];
}

async function writeTocFile(
  pkg: Pkg,
  markdownPath: string,
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  console.log("Generating toc");
  const toc = generateToc(pkg, results);
  await writeFile(
    `${markdownPath}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );
}

async function writeVersionFile(pkg: Pkg, markdownPath: string): Promise<void> {
  console.log("Generating version file");
  const pkg_json = { name: pkg.name, version: pkg.version };
  await writeFile(
    `${markdownPath}/_package.json`,
    JSON.stringify(pkg_json, null, 2) + "\n",
  );
}
