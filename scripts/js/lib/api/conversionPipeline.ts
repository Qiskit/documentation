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

import { join, parse, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { mkdirp } from "mkdirp";
import { globby } from "globby";
import { uniqBy } from "lodash-es";

import { ObjectsInv } from "./objectsInv.js";
import { sphinxHtmlToMarkdown } from "./htmlToMd.js";
import { saveImages } from "./saveImages.js";
import { generateToc } from "./generateToc.js";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { mergeClassMembers } from "./mergeClassMembers.js";
import { normalizeResultUrls } from "./normalizeResultUrls.js";
import { updateLinks } from "./updateLinks.js";
import { specialCaseResults } from "./specialCaseResults.js";
import addFrontMatter from "./addFrontMatter.js";
import { dedupeHtmlIdsFromResults } from "./dedupeHtmlIds.js";
import removeMathBlocksIndentation from "./removeMathBlocksIndentation.js";
import { Pkg } from "./Pkg.js";
import {
  maybeUpdateReleaseNotesFolder,
  handleReleaseNotesFile,
} from "./releaseNotes.js";

// This is the folder that contains all C API docs in the Sphinx artifact.
export const C_API_BASE_PATH = "cdoc" as const;

export async function runConversionPipeline(
  htmlPath: string,
  docsBaseFolder: string,
  publicBaseFolder: string,
  pkg: Pkg,
) {
  const [files, markdownPath, maybeObjectsInv] = await determineFilePaths(
    htmlPath,
    docsBaseFolder,
    pkg,
  );
  let initialResults = await convertFilesToMarkdown(
    pkg,
    htmlPath,
    docsBaseFolder,
    markdownPath,
    files,
  );

  const results = await postProcessResults(
    pkg,
    maybeObjectsInv,
    initialResults,
  );

  // Warning: the sequence of operations often matters.
  await writeMarkdownResults(pkg, docsBaseFolder, results);
  await copyImages(pkg, htmlPath, publicBaseFolder, results);
  await maybeObjectsInv?.write(pkg.outputDir(publicBaseFolder));
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
    ? [`${C_API_BASE_PATH}/**.html`]
    : ["apidocs/**.html", "apidoc/**.html", "stubs/**.html"];
  const files = await globby(
    [...extraFiles, "release_notes.html", "release-notes.html"],
    {
      cwd: htmlPath,
    },
  );
  const markdownPath = pkg.outputDir(docsBaseFolder);
  await mkdirp(markdownPath);
  return [files, markdownPath, maybeObjectsInv];
}

async function convertFilesToMarkdown(
  pkg: Pkg,
  htmlPath: string,
  docsBaseFolder: string,
  markdownPath: string,
  filePaths: string[],
): Promise<HtmlToMdResultWithUrl[]> {
  const results = [];
  for (const file of filePaths) {
    const html = await readFile(join(htmlPath, file), "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      determineGithubUrl: pkg.determineGithubUrlFn(),
      imageDestination: pkg.outputDir("/images"),
      releaseNotesTitle: pkg.releaseNotesTitle(),
      hasSeparateReleaseNotes: pkg.hasSeparateReleaseNotes(),
      isCApi: pkg.isCApi(),
    });

    // Avoid creating an empty markdown file for HTML files without content
    // (e.g. HTML redirects)
    if (result.markdown == "") {
      continue;
    }

    const { dir, name } = parse(`${markdownPath}/${file}`);
    let url = `/${relative(docsBaseFolder, dir)}/${name}`;
    results.push({ ...result, url });
  }
  return results;
}

async function copyImages(
  pkg: Pkg,
  htmlPath: string,
  publicBaseFolder: string,
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  console.log("Saving images");
  const allImages = uniqBy(
    results.flatMap((result) => result.images),
    (image) => image.fileName,
  );
  await saveImages(allImages, `${htmlPath}/_images`, publicBaseFolder, pkg);
}

async function postProcessResults(
  pkg: Pkg,
  maybeObjectsInv: ObjectsInv | undefined,
  initialResults: HtmlToMdResultWithUrl[],
): Promise<HtmlToMdResultWithUrl[]> {
  const results = await mergeClassMembers(initialResults);
  normalizeResultUrls(results, {
    kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
    pkgName: pkg.name,
  });
  specialCaseResults(results);
  await updateLinks(
    results,
    { kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls, pkgName: pkg.name },
    maybeObjectsInv,
  );
  await dedupeHtmlIdsFromResults(results);
  addFrontMatter(results, pkg);
  removeMathBlocksIndentation(results);
  return results;
}

async function writeMarkdownResults(
  pkg: Pkg,
  docsBaseFolder: string,
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  for (const result of results) {
    let path = `${docsBaseFolder}${result.url}.mdx`;
    if (path.endsWith("release-notes.mdx")) {
      if (!pkg.releaseNotesConfig.enabled) continue;

      const shouldWriteResult = await handleReleaseNotesFile(result, pkg);
      if (!shouldWriteResult) continue;
    }

    await writeFile(path, result.markdown);
  }
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
