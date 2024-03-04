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

import { globby } from "globby";
import { uniq, uniqBy } from "lodash";
import { mkdirp } from "mkdirp";
import transformLinks from "transform-markdown-links";

import { ObjectsInv } from "./objectsInv";
import { sphinxHtmlToMarkdown } from "./htmlToMd";
import { saveImages } from "./saveImages";
import { generateToc } from "./generateToc";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";
import { mergeClassMembers } from "./mergeClassMembers";
import flattenFolders from "./flattenFolders";
import { updateLinks } from "./updateLinks";
import { specialCaseResults } from "./specialCaseResults";
import addFrontMatter from "./addFrontMatter";
import { dedupeHtmlIdsFromResults } from "./dedupeHtmlIds";
import { Pkg } from "./Pkg";
import { pathExists, getRoot } from "../fs";
import {
  addNewReleaseNotes,
  generateReleaseNotesIndex,
  updateHistoricalTocFiles,
  writeReleaseNoteForVersion,
} from "./releaseNotes";

export async function runConversionPipeline(
  htmlPath: string,
  markdownPath: string,
  pkg: Pkg,
) {
  const maybeObjectsInv = await (pkg.hasObjectsInv()
    ? ObjectsInv.fromFile(htmlPath)
    : undefined);
  const files = await globby(
    [
      "apidocs/**.html",
      "apidoc/**.html",
      "stubs/**.html",
      "release_notes.html",
    ],
    {
      cwd: htmlPath,
    },
  );

  let results: Array<HtmlToMdResultWithUrl> = [];
  for (const file of files) {
    const html = await readFile(join(htmlPath, file), "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      determineGithubUrl: pkg.determineGithubUrlFn(),
      imageDestination: pkg.outputDir("/images"),
      releaseNotesTitle: `${pkg.title} ${pkg.versionWithoutPatch} release notes`,
    });

    // Avoid creating an empty markdown file for HTML files without content
    // (e.g. HTML redirects)
    if (result.markdown == "") {
      continue;
    }

    const { dir, name } = parse(`${markdownPath}/${file}`);
    let url = `/${relative(`${getRoot()}/docs`, dir)}/${name}`;
    results.push({ ...result, url });
  }

  const allImages = uniqBy(
    results.flatMap((result) => result.images),
    (image) => image.fileName,
  );

  const dirsNeeded = uniq(
    results.map((result) => parse(urlToPath(result.url)).dir),
  );
  for (const dir of dirsNeeded) {
    await mkdirp(dir);
  }

  results = await mergeClassMembers(results);
  flattenFolders(results);
  specialCaseResults(results);
  await updateLinks(results, maybeObjectsInv);
  await dedupeHtmlIdsFromResults(results);
  addFrontMatter(results, pkg);

  await maybeObjectsInv?.write(pkg.outputDir("public"));
  for (const result of results) {
    let path = urlToPath(result.url);

    if (path.endsWith("release-notes.md")) {
      const shouldWriteResult = await handleReleaseNotesFile(result, pkg);
      if (!shouldWriteResult) continue;
    }

    await writeFile(path, result.markdown);
  }

  console.log("Generating toc");
  const toc = generateToc(pkg, results);
  await writeFile(
    `${markdownPath}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );

  await maybeUpdateReleaseNotesFolder(pkg, markdownPath);

  console.log("Generating version file");
  const pkg_json = { name: pkg.name, version: pkg.version };
  await writeFile(
    `${markdownPath}/_package.json`,
    JSON.stringify(pkg_json, null, 2) + "\n",
  );

  if (!pkg.isHistorical() || (await pathExists(`${htmlPath}/_images`))) {
    // Some historical versions don't have the `_images` folder in the artifact store in Box (https://ibm.ent.box.com/folder/246867452622)
    console.log("Saving images");
    await saveImages(allImages, `${htmlPath}/_images`, pkg);
  }
}

/**
 * Determine what to do with release-notes.md, such as simply ignoring it.
 *
 * @returns true if the release notes file should be written.
 */
async function handleReleaseNotesFile(
  result: HtmlToMdResultWithUrl,
  pkg: Pkg,
): Promise<boolean> {
  // Dev versions haven't been released yet and we don't want to modify the release notes
  // of prior versions.
  if (pkg.isDev()) {
    return false;
  }

  // When the release notes are a single file, only use them if this is the latest version rather
  // than a historical release.
  if (!pkg.hasSeparateReleaseNotes) {
    return pkg.isLatest();
  }

  // Else, there is a distinct release note per version. So, we use the release note but
  // have custom logic to handle it.

  const baseUrl = pkg.isHistorical()
    ? `/api/${pkg.name}/${pkg.versionWithoutPatch}`
    : `/api/${pkg.name}`;
  result.markdown = transformLinks(result.markdown, (link, _) =>
    link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
      ? link
      : `${baseUrl}/${link}`,
  );

  await writeReleaseNoteForVersion(pkg, result.markdown);
  return false;
}

/**
 * If there was a new release notes file, update the release notes index page and _toc.json for
 * every docs version.
 */
async function maybeUpdateReleaseNotesFolder(
  pkg: Pkg,
  markdownPath: string,
): Promise<void> {
  if (!pkg.hasSeparateReleaseNotes || !pkg.isLatest()) {
    return;
  }
  addNewReleaseNotes(pkg);
  await updateHistoricalTocFiles(pkg);
  console.log("Generating release-notes/index");
  const indexMarkdown = generateReleaseNotesIndex(pkg);
  await writeFile(`${markdownPath}/release-notes/index.md`, indexMarkdown);
}

function urlToPath(url: string) {
  return `${getRoot()}/docs${url}.md`;
}
