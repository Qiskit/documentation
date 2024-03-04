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
import { HtmlToMdResult } from "./HtmlToMdResult";
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

  let results: Array<HtmlToMdResult & { url: string }> = [];
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

    if (
      pkg.isLatest() &&
      pkg.hasSeparateReleaseNotes &&
      file.endsWith("release_notes.html")
    ) {
      addNewReleaseNotes(pkg);
    }
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

    // Historical or dev versions with a single release notes file should not
    // modify the current API's file.
    if (
      !pkg.hasSeparateReleaseNotes &&
      !pkg.isLatest() &&
      path.endsWith("release-notes.md")
    ) {
      continue;
    }

    // Dev versions haven't been released yet and we don't want to modify the release notes
    // of prior versions
    if (pkg.isDev() && path.endsWith("release-notes.md")) {
      continue;
    }

    if (pkg.hasSeparateReleaseNotes && path.endsWith("release-notes.md")) {
      const baseUrl = pkg.isHistorical()
        ? `/api/${pkg.name}/${pkg.versionWithoutPatch}`
        : `/api/${pkg.name}`;

      // Convert the relative links to absolute links
      result.markdown = transformLinks(result.markdown, (link, _) =>
        link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
          ? link
          : `${baseUrl}/${link}`,
      );

      await writeReleaseNoteForVersion(pkg, result.markdown);
      continue;
    }

    await writeFile(path, result.markdown);
  }

  console.log("Generating toc");
  const toc = generateToc(pkg, results);
  await writeFile(
    `${markdownPath}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );

  // Add the new release entry to the _toc.json for all historical API versions.
  // We don't need to add any entries in projects with a single release notes file.
  if (pkg.isLatest() && pkg.hasSeparateReleaseNotes) {
    await updateHistoricalTocFiles(pkg);
  }

  if (pkg.isLatest() && pkg.hasSeparateReleaseNotes) {
    console.log("Generating release-notes/index");
    const markdown = generateReleaseNotesIndex(pkg);
    await writeFile(`${markdownPath}/release-notes/index.md`, markdown);
  }

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

function urlToPath(url: string) {
  return `${getRoot()}/docs${url}.md`;
}
