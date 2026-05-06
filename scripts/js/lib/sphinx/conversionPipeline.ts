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

import { dirname, join, parse, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { globby } from "globby";
import { mkdirp } from "mkdirp";
import { uniqBy } from "lodash-es";

import { sphinxHtmlToMarkdown } from "../api/htmlToMd.js";
import { ObjectsInv } from "../api/objectsInv.js";
import { HtmlToMdResultWithUrl } from "../api/HtmlToMdResult.js";
import { Pkg } from "../api/Pkg.js";
import { saveImages } from "../api/saveImages.js";
import {
  normalizeResultUrls,
  kebabCaseAndShortenPage,
} from "../api/normalizeResultUrls.js";
import { updateLinks, relativizeLink } from "../api/updateLinks.js";
import { mergeClassMembers } from "../api/mergeClassMembers.js";
import { specialCaseResults, transformSpecialCaseUrl } from "../api/specialCaseResults.js";
import addFrontMatter from "../api/addFrontMatter.js";
import { dedupeHtmlIdsFromResults } from "../api/dedupeHtmlIds.js";
import removeMathBlocksIndentation from "../api/removeMathBlocksIndentation.js";
import { generateSphinxToc } from "./generateToc.js";
import {
  handleReleaseNotesFile,
  maybeUpdateReleaseNotesFolder,
} from "../api/releaseNotes.js";

export const DOCS_BASE_PATH = "/docs";

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

export async function runSphinxPipeline(
  artifactPath: string,
  docsBaseFolder: string,
  publicBaseFolder: string,
  pkg: Pkg,
): Promise<void> {
  const [files, outputPath, objectsInv] = await determineFilePaths(
    artifactPath,
    docsBaseFolder,
    pkg,
  );

  const allObjectInvs = await ObjectsInv.loadPublishedApis(publicBaseFolder);

  const htmlFiles = files.filter((f) => f.endsWith(".html"));
  const notebookFiles = files.filter((f) => f.endsWith(".ipynb"));

  const initialResults = await convertFilesToMarkdown(
    pkg,
    artifactPath,
    docsBaseFolder,
    outputPath,
    htmlFiles,
  );

  const results = await postProcessResults(
    pkg,
    objectsInv,
    allObjectInvs,
    initialResults,
  );

  await writeMarkdownResults(pkg, docsBaseFolder, results);
  await copyImages(pkg, artifactPath, "public", results);
  await objectsInv.write(pkg.apiOutputDir(publicBaseFolder));

  await copyNotebooks(artifactPath, outputPath, notebookFiles, pkg);
  // await writeTocFile(artifactPath, output, pkg, docsBaseFolder, config);
}

async function determineFilePaths(
  htmlPath: string,
  docsBaseFolder: string,
  pkg: Pkg,
): Promise<[string[], string, ObjectsInv]> {
  const objectsInv = await ObjectsInv.fromFile(htmlPath, pkg.language);

  const allFiles = await globby(["**"], {
    cwd: htmlPath,
    ignore: ["apidocs/**", "apidoc/**", "stubs/**", ...SPHINX_INTERNALS],
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

async function convertFilesToMarkdown(
  pkg: Pkg,
  artifactPath: string,
  docsBaseFolder: string,
  outputPath: string,
  filePaths: string[],
): Promise<HtmlToMdResultWithUrl[]> {
  const results = [];
  for (const file of filePaths) {
    const html = await readFile(join(artifactPath, file), "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      determineGithubUrl: pkg.determineGithubUrlFn(),
      imageDestination: pkg.apiOutputDir(`${DOCS_BASE_PATH}/images`),
      releaseNotesTitle: pkg.releaseNotesTitle(),
      hasSeparateReleaseNotes: pkg.hasSeparateReleaseNotes(),
      isCApi: pkg.isCApi(),
      hasRootNamespaceFile: pkg.hasRootNamespaceFile,
    });

    // Avoid creating an empty markdown file for HTML files without content
    // (e.g. HTML redirects)
    if (result.markdown == "") {
      continue;
    }

    const { dir, name } = parse(`${outputPath}/${file}`);
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
  objectsInv: ObjectsInv,
  allInvs: Map<string, ObjectsInv>,
  initialResults: HtmlToMdResultWithUrl[],
): Promise<HtmlToMdResultWithUrl[]> {
  const results = await mergeClassMembers(initialResults);
  normalizeResultUrls(results, {
    kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
    pkgName: pkg.name,
  });
  specialCaseResults(results);
  // Rewrite relative apidocs/ links to absolute /docs/api/<pkg>/ paths before
  // updateLinks runs, so they are correctly resolved as internal API links.
  const apiBase = pkg.apiOutputDir(DOCS_BASE_PATH);
  for (const result of results) {
    result.markdown = result.markdown.replace(
      /\]\((?:\.\.\/)*?(apidocs|apidoc|stubs)\/([^)]+)\)/g,
      `](${apiBase}/$2)`,
    );
  }
  await updateLinks(
    results,
    {
      kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
      pkgName: pkg.name,
      pkgOutputDir: pkg.apiOutputDir(DOCS_BASE_PATH),
    },
    objectsInv,
    allInvs,
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

    await mkdirp(dirname(path));
    await writeFile(path, result.markdown);
  }
}

async function copyNotebooks(
  artifactPath: string,
  outputPath: string,
  notebookFiles: string[],
  pkg: Pkg,
): Promise<void> {
  for (const file of notebookFiles) {
    // Apply the same kebab-case transformation as normalizeResultUrls so
    // notebook filenames match the links generated from HTML conversion.
    const destFile = pkg.kebabCaseAndShortenUrls
      ? transformSpecialCaseUrl(
          file.replace(/([^/]+)\.ipynb$/, (_, base) =>
            `${kebabCaseAndShortenPage(base, pkg.name)}.ipynb`,
          ),
        )
      : file;
    const dest = `${outputPath}/${destFile}`;
    await mkdirp(dirname(dest));
    const raw = await readFile(`${artifactPath}/${file}`, "utf-8");
    const notebook = JSON.parse(raw);

    for (const cell of notebook.cells ?? []) {
      const lines: string[] = Array.isArray(cell.source)
        ? cell.source
        : [cell.source];
      cell.source = lines.map((line) =>
        line.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (match, text, url) => {
          const rewritten = relativizeLink({ url, text });
          return rewritten
            ? `[${rewritten.text ?? text}](${rewritten.url})`
            : match;
        }),
      );
    }

    await writeFile(dest, JSON.stringify(notebook, null, 1));
  }
}

// async function writeTocFile(
//   artifactPath: string,
//   outputDir: string,
//   pkg: Pkg,
//   docsBaseFolder: string,
//   config: SphinxPipelineConfig,
// ): Promise<void> {
//   console.log(`Generating TOC for ${outputDir}`);
//   const toc = await generateSphinxToc(
//     artifactPath,
//     outputDir,
//     pkg.title,
//     docsBaseFolder,
//     config.include,
//     config.exclude,
//   );
//   await writeFile(
//     `${outputDir}/_toc.json`,
//     JSON.stringify(toc, null, 2) + "\n",
//   );
// }
