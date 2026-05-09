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

import { load } from "cheerio";
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
import { parseMarkdown, extractHeadingText } from "../markdownUtils.js";
import { visit, EXIT } from "unist-util-visit";
import { mergeClassMembers } from "../api/mergeClassMembers.js";
import {
  specialCaseResults,
  transformSpecialCaseUrl,
} from "../api/specialCaseResults.js";
import { dedupeHtmlIdsFromResults } from "../api/dedupeHtmlIds.js";
import removeMathBlocksIndentation from "../api/removeMathBlocksIndentation.js";
import { handleReleaseNotesFile } from "../api/releaseNotes.js";
import { NotebookCell, NotebookWithUrl } from "../Notebooks.js";

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
  const allObjectInvs = await ObjectsInv.loadPublishedApis(publicBaseFolder);
  const [files, outputPath, objectsInv] = await determineFilePaths(
    artifactPath,
    docsBaseFolder,
    pkg,
  );

  // handle HTML files
  const htmlFiles = files.filter((f) => f.endsWith(".html"));
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

  // handle Jupyter notebook files
  const notebookFiles = files.filter((f) => f.endsWith(".ipynb"));
  const initialNotebooks = await readNotebooks(
    artifactPath,
    docsBaseFolder,
    outputPath,
    notebookFiles,
  );
  const notebooks = await processNotebooks(
    initialNotebooks,
    pkg,
    objectsInv,
    allObjectInvs,
  );
  await writeNotebooks(pkg, docsBaseFolder, notebooks);

  // write assets
  await copyImages(pkg, artifactPath, "public", results);
  await objectsInv.write(pkg.apiOutputDir(publicBaseFolder));
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

    result.meta.hardcodedFrontmatter = extractHtmlFrontmatter(html);

    const { dir, name } = parse(`${outputPath}/${file}`);
    const url = `/${relative(docsBaseFolder, dir)}/${name}`;
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
  addFrontMatter(results);
  removeMathBlocksIndentation(results);
  return results;
}

async function writeMarkdownResults(
  pkg: Pkg,
  docsBaseFolder: string,
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  for (const result of results) {
    const path = `${docsBaseFolder}${result.url}.mdx`;
    if (path.endsWith("release-notes.mdx")) {
      if (!pkg.releaseNotesConfig.enabled) continue;

      const shouldWriteResult = await handleReleaseNotesFile(result, pkg);
      if (!shouldWriteResult) continue;
    }

    await mkdirp(dirname(path));
    await writeFile(path, result.markdown);
  }
}

export async function readNotebooks(
  artifactPath: string,
  docsBaseFolder: string,
  outputPath: string,
  filePaths: string[],
): Promise<NotebookWithUrl[]> {
  const results = [];
  for (const file of filePaths) {
    const raw = await readFile(`${artifactPath}/${file}`, "utf-8");
    const notebook = JSON.parse(raw);
    const { dir, name } = parse(`${outputPath}/${file}`);
    const url = `/${relative(docsBaseFolder, dir)}/${name}`;
    results.push({ ...notebook, url });
  }
  return results;
}

function normalizeNotebookUrl(url: string, pkg: Pkg): string {
  const parts = url.split("/");
  const filename = parts[parts.length - 1];
  const normalized = pkg.kebabCaseAndShortenUrls
    ? kebabCaseAndShortenPage(filename, pkg.name)
    : filename;
  return transformSpecialCaseUrl([...parts.slice(0, -1), normalized].join("/"));
}

function rewriteNotebookLinks(
  source: string | string[],
  objectsInv: ObjectsInv,
  allInvs: Map<string, ObjectsInv>,
): string | string[] {
  const rewrite = (line: string) => {
    return line.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (_match, text, url) => {
      const relativized = relativizeLink({ url, text });
      if (relativized) url = relativized.url;
      const stub = objectsInv.resolveStubUrl(url, allInvs);
      if (stub) url = stub;
      return `[${text}](${url})`;
    });
  };

  return Array.isArray(source) ? source.map(rewrite) : rewrite(source);
}

async function processNotebooks(
  notebooks: NotebookWithUrl[],
  pkg: Pkg,
  objectsInv: ObjectsInv,
  allInvs: Map<string, ObjectsInv>,
): Promise<NotebookWithUrl[]> {
  return notebooks.map((notebook) => {
    const processedCells = notebook.cells.map((cell) => {
      if (cell.cell_type !== "markdown") return cell;
      return {
        ...cell,
        source: rewriteNotebookLinks(cell.source, objectsInv, allInvs),
      };
    });

    // Prepend a frontmatter cell matching the guides notebook convention.
    // Extract the title from the first markdown h1, same as extractFrontmatter
    // does for HTML pages.
    const frontmatterCell = buildFrontmatterCell(processedCells);
    return {
      ...notebook,
      cells: frontmatterCell
        ? [frontmatterCell, ...processedCells]
        : processedCells,
    };
  });
}

async function writeNotebooks(
  pkg: Pkg,
  docsBaseFolder: string,
  notebooks: NotebookWithUrl[],
) {
  for (const { url, ...notebook } of notebooks) {
    const normalizedUrl = normalizeNotebookUrl(url, pkg);
    const path = `${docsBaseFolder}${normalizedUrl}.ipynb`;
    await mkdirp(dirname(path));
    await writeFile(path, JSON.stringify(notebook, null, 1));
  }
}

function buildFrontmatterCell(cells: NotebookCell[]): NotebookCell | undefined {
  for (const cell of cells) {
    if (cell.cell_type !== "markdown") continue;
    const text = Array.isArray(cell.source)
      ? cell.source.join("")
      : cell.source;
    const tree = parseMarkdown(text);
    let title: string | undefined;
    visit(tree, "heading", (node: any) => {
      if (node.depth === 1 && !title) {
        title = extractHeadingText(node).trim();
        return EXIT;
      }
    });
    if (title) {
      return {
        cell_type: "markdown",
        source: `---\ntitle: "${title}"\n---`,
        metadata: {},
      };
    }
  }
  return undefined;
}

function extractHtmlFrontmatter(html: string): string {
  const $ = load(html);
  const title = $("title").first().text().trim();
  const description = $('meta[name="description"]').attr("content")?.trim();
  const lines = [`title: "${title}"`];
  if (description) lines.push(`description: "${description}"`);
  return lines.join("\n");
}

function addFrontMatter(results: HtmlToMdResultWithUrl[]) {
  for (const result of results) {
    const markdown = result.markdown;
    result.markdown = `---
${result.meta.hardcodedFrontmatter}
---

${markdown}
`;
  }
}
