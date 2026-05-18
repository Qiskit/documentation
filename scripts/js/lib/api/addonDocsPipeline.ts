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

import { globby } from "globby";
import { mkdirp } from "mkdirp";

import { ObjectsInv } from "./objectsInv.js";
import { Pkg } from "./Pkg.js";
import {
  convertHtmlToMarkdown,
  copyImages,
  postProcess,
  writeMarkdownResults,
} from "./pipelineStages.js";
import {
  collectNotebookImages,
  processNotebooks,
  readNotebooks,
  writeNotebooks,
} from "./notebookStages.js";
import { DOCS_BASE_PATH } from "./paths.js";
import { generateAddonToc } from "./generateAddonToc.js";

// Sphinx build artifacts that are never content.
const SPHINX_INTERNALS = [
  "_static/**",
  "_sources/**",
  "_downloads/**",
  "_modules/**",
  "genindex.html",
  "py-modindex.html",
  "search.html",
  "objects.inv",
];

export async function runAddonDocsPipeline(
  artifactPath: string,
  docsBaseFolder: string,
  publicBaseFolder: string,
  pkg: Pkg,
): Promise<void> {
  const allObjectInvs = await ObjectsInv.loadPublishedApis(publicBaseFolder);
  const [files, outputPath, objectsInv] = await determineFilePaths(
    artifactPath,
    docsBaseFolder,
    pkg,
  );

  // handle HTML files
  const htmlFiles = files.filter((f) => f.endsWith(".html"));
  const initialResults = await convertHtmlToMarkdown(
    pkg,
    artifactPath,
    docsBaseFolder,
    outputPath,
    htmlFiles,
    pkg.outputDir(`${DOCS_BASE_PATH}/images/addons`),
    true,
  );

  const results = await postProcess(
    pkg,
    initialResults,
    objectsInv,
    allObjectInvs,
  );
  await writeMarkdownResults(
    pkg,
    docsBaseFolder,
    results.map(remapExplanationsUrl),
  );

  // handle Jupyter notebook files
  const notebookFiles = files.filter((f) => f.endsWith(".ipynb"));
  const initialNotebooks = await readNotebooks(
    artifactPath,
    docsBaseFolder,
    outputPath,
    notebookFiles,
  );
  const imageDestination = pkg.outputDir(`${DOCS_BASE_PATH}/images/addons`);
  const notebookImages = collectNotebookImages(initialNotebooks, imageDestination);
  const notebooks = processNotebooks(
    initialNotebooks.map(remapExplanationsUrl),
    objectsInv,
    allObjectInvs,
    pkg,
    imageDestination,
  );
  await writeNotebooks(pkg, docsBaseFolder, notebooks);

  // write assets
  await copyImages(
    pkg,
    artifactPath,
    pkg.outputDir(`${publicBaseFolder}/images/addons`),
    results,
    notebookImages,
  );

  await writeTocFile(pkg, docsBaseFolder, outputPath);
}

/**
 * Rewrites URLs of the form `.../explanation(s)/foo` to `.../how-tos/explanations-foo`
 * so that explanations land under the how-tos directory 
 */
function remapExplanationsUrl<T extends { url: string }>(item: T): T {
  return {
    ...item,
    url: item.url.replace(/\/explanations?\/(.+)$/, "/how-tos/explanations-$1"),
  };
}

async function writeTocFile(
  pkg: Pkg,
  docsBaseFolder: string,
  outputPath: string,
): Promise<void> {
  console.log("Generating addon toc");
  const toc = await generateAddonToc(pkg, docsBaseFolder);
  await writeFile(
    `${outputPath}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );
}

async function determineFilePaths(
  htmlPath: string,
  docsBaseFolder: string,
  pkg: Pkg,
): Promise<[string[], string, ObjectsInv]> {
  const objectsInv = await ObjectsInv.fromFile(htmlPath, pkg.language);

  const allFiles = await globby(["**"], {
    cwd: htmlPath,
    ignore: [
      "apidocs/**",
      "apidoc/**",
      "stubs/**",
      "release-notes.html",
      "release_notes.html",
      ...SPHINX_INTERNALS,
    ],
  });

  // Prefer .ipynb over .html when both exist for the same base path.
  const notebookBases = new Set(
    allFiles
      .filter((f) => f.endsWith(".ipynb"))
      .map((f) => f.slice(0, -".ipynb".length)),
  );
  const files = allFiles.filter(
    (f) =>
      !f.endsWith(".html") || !notebookBases.has(f.slice(0, -".html".length)),
  );
  const outputPath = pkg.outputDir(docsBaseFolder);
  await mkdirp(outputPath);
  return [files, outputPath, objectsInv];
}
