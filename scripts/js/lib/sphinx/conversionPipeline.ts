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

import { dirname, parse, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { globby } from "globby";
import { mkdirp } from "mkdirp";
import { uniqBy } from "lodash-es";

import { sphinxHtmlToMarkdown } from "../api/htmlToMd.js";
import { ObjectsInv } from "../api/objectsInv.js";
import { HtmlToMdResultWithUrl } from "../api/HtmlToMdResult.js";
import { Pkg } from "../api/Pkg.js";
import { saveImages } from "../api/saveImages.js";
import { normalizeResultUrls } from "../api/normalizeResultUrls.js";
import { updateLinks, relativizeLink } from "../api/updateLinks.js";
import { mergeClassMembers } from "../api/mergeClassMembers.js";
import { specialCaseResults } from "../api/specialCaseResults.js";
import addFrontMatter from "../api/addFrontMatter.js";
import { dedupeHtmlIdsFromResults } from "../api/dedupeHtmlIds.js";
import removeMathBlocksIndentation from "../api/removeMathBlocksIndentation.js";
import { generateSphinxToc } from "./generateToc.js";
import { DOCS_BASE_PATH } from "../api/conversionPipeline.js";
import { kebabCaseAndShortenPage } from "../api/normalizeResultUrls.js";

// Sphinx build artifacts that are never content.
const SPHINX_INTERNALS = [
  "_static/**",
  "_sources/**",
  "_downloads/**",
  "genindex.html",
  "py-modindex.html",
  "search.html",
  "objects.inv",
];

export type SphinxPipelineConfig = {
  /** Glob patterns to include relative to artifact root. Defaults to everything. */
  include?: string[];
  /** Glob patterns to exclude relative to artifact root. */
  exclude?: string[];
  /** Output directory, e.g. "docs/api/qiskit-addon-aqc-tensor" */
  output: string;
  pkg: Pkg;
};

export async function runSphinxPipeline(
  artifactPath: string,
  docsBaseFolder: string,
  publicBaseFolder: string,
  config: SphinxPipelineConfig,
): Promise<void> {
  const { output, pkg } = config;
  await mkdirp(output);

  const objectsInv = await loadObjectsInv(artifactPath, pkg);
  const allFiles = await selectFiles(artifactPath, config);
  const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));
  const notebookFiles = allFiles.filter((f) => f.endsWith(".ipynb"));

  if (htmlFiles.length === 0 && notebookFiles.length === 0) {
    console.log(`No content files found for ${pkg.name} at ${output}`);
    return;
  }

  console.log(
    `Processing ${htmlFiles.length} HTML + ${notebookFiles.length} notebooks for ${pkg.name} → ${output}`,
  );

  // Convert HTML files.
  let results = await convertHtmlFiles(
    pkg,
    artifactPath,
    docsBaseFolder,
    output,
    htmlFiles,
  );

  results = await mergeClassMembers(results);

  normalizeResultUrls(results, {
    kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
    pkgName: pkg.name,
  });

  specialCaseResults(results);

  // Rewrite github.io links to internal paths before updateLinks runs.
  for (const result of results) {
    result.markdown = resolveGithubIoLinks(
      result.markdown,
      objectsInv,
      pkg.name,
      output,
    );
  }

  await updateLinks(
    results,
    {
      kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
      pkgName: pkg.name,
      pkgOutputDir: `${DOCS_BASE_PATH}/${output.replace(/^docs\//, "")}`,
    },
    objectsInv,
  );

  await dedupeHtmlIdsFromResults(results);
  addFrontMatter(results, pkg);
  removeMathBlocksIndentation(results);

  await writeMdxFiles(results);
  await saveImages(
    uniqBy(results.flatMap((r) => r.images), (img) => img.fileName),
    `${artifactPath}/_images`,
    publicBaseFolder,
    pkg,
  );

  await copyNotebooks(artifactPath, output, notebookFiles, objectsInv, pkg.name);
  await writeTocFile(artifactPath, output, pkg, docsBaseFolder, config);
  await writePackageFile(output, pkg);
}

async function loadObjectsInv(
  artifactPath: string,
  pkg: Pkg,
): Promise<ObjectsInv | undefined> {
  try {
    return await ObjectsInv.fromFile(artifactPath, pkg.language);
  } catch {
    return undefined;
  }
}

async function selectFiles(
  artifactPath: string,
  config: SphinxPipelineConfig,
): Promise<string[]> {
  const include = config.include ?? ["**"];
  const exclude = [...SPHINX_INTERNALS, ...(config.exclude ?? [])];
  return globby(include, {
    cwd: artifactPath,
    ignore: exclude,
  });
}

async function convertHtmlFiles(
  pkg: Pkg,
  artifactPath: string,
  docsBaseFolder: string,
  outputDir: string,
  filePaths: string[],
): Promise<HtmlToMdResultWithUrl[]> {
  const results: HtmlToMdResultWithUrl[] = [];

  for (const file of filePaths) {
    const html = await readFile(`${artifactPath}/${file}`, "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      determineGithubUrl: pkg.determineGithubUrlFn(),
      imageDestination: pkg.outputDir(`${DOCS_BASE_PATH}/images`),
      releaseNotesTitle: pkg.releaseNotesTitle(),
      hasSeparateReleaseNotes: pkg.hasSeparateReleaseNotes(),
      isCApi: pkg.isCApi(),
      hasRootNamespaceFile: pkg.hasRootNamespaceFile,
    });

    if (result.markdown === "") continue;

    const { dir, name } = parse(`${outputDir}/${file}`);
    const url = `/${relative(docsBaseFolder, dir)}/${name}`;
    results.push({ ...result, url });
  }

  return results;
}

async function writeMdxFiles(
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  for (const result of results) {
    const filePath = `docs${result.url}.mdx`;
    await mkdirp(dirname(filePath));
    await writeFile(filePath, result.markdown);
  }
}

async function copyNotebooks(
  artifactPath: string,
  outputDir: string,
  notebookFiles: string[],
  objectsInv: ObjectsInv | undefined,
  pkgName: string,
): Promise<void> {
  for (const file of notebookFiles) {
    const dest = `${outputDir}/${file}`;
    await mkdirp(dirname(dest));
    const raw = await readFile(`${artifactPath}/${file}`, "utf-8");
    const notebook = JSON.parse(raw);

    for (const cell of notebook.cells ?? []) {
      const lines: string[] = Array.isArray(cell.source)
        ? cell.source
        : [cell.source];
      cell.source = lines.map((line) => {
        const resolved = resolveGithubIoLinks(line, objectsInv, pkgName, outputDir);
        return resolved.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (match, text, url) => {
          const rewritten = relativizeLink({ url, text });
          return rewritten ? `[${rewritten.text ?? text}](${rewritten.url})` : match;
        });
      });
    }

    await writeFile(dest, JSON.stringify(notebook, null, 1));
  }
}

async function writeTocFile(
  artifactPath: string,
  outputDir: string,
  pkg: Pkg,
  docsBaseFolder: string,
  config: SphinxPipelineConfig,
): Promise<void> {
  console.log(`Generating TOC for ${outputDir}`);
  const toc = await generateSphinxToc(
    artifactPath,
    outputDir,
    pkg.title,
    docsBaseFolder,
    config.include,
    config.exclude,
  );
  await writeFile(
    `${outputDir}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );
}

async function writePackageFile(outputDir: string, pkg: Pkg): Promise<void> {
  const pkgJson = { name: pkg.name, version: pkg.version };
  await writeFile(
    `${outputDir}/_package.json`,
    JSON.stringify(pkgJson, null, 2) + "\n",
  );
}

/**
 * Resolve qiskit.github.io links to internal paths.
 *
 * For stubs links (symbol references), use objects.inv for resolution —
 * it has complete symbol→URL mappings. For other github.io links (prose
 * page links), rewrite to the configured output path.
 */
function resolveGithubIoLinks(
  text: string,
  objectsInv: ObjectsInv | undefined,
  pkgName: string,
  outputDir: string,
): string {
  return text.replace(
    /https:\/\/qiskit\.github\.io\/([^/"#)\s]+)\/?([^"#)\s]*)/g,
    (match, pkg, rest) => {
      const stubsPrefix = "stubs/";
      if (rest.startsWith(stubsPrefix)) {
        const symbol = rest.slice(stubsPrefix.length).replace(/\.html$/, "");
        // Look up in objects.inv entries for this package.
        if (objectsInv) {
          const resolved = resolveSymbolFromObjectsInv(objectsInv, symbol, pkg);
          if (resolved) return resolved;
        }
        // Fallback: derive URL from symbol name using kebab-case convention.
        const kebabPage = kebabCaseAndShortenPage(symbol, pkg);
        return `/docs/api/${pkg}/${kebabPage}`;
      }
      // Non-stubs github.io link — only rewrite for the package currently
      // being processed. Links to other packages' github.io pages are left
      // as external URLs since we may not have their prose content.
      if (pkg !== pkgName) return match;
      const page = rest.replace(/\.html$/, "").replace(/\/$/, "");
      return page ? `/docs/addons/${pkg}/${page}` : `/docs/addons/${pkg}`;
    },
  );
}

function resolveSymbolFromObjectsInv(
  objectsInv: ObjectsInv,
  symbol: string,
  pkgName: string,
): string | undefined {
  const entry = objectsInv.entries.find((e) => e.name === symbol);
  if (!entry) return undefined;
  // URI format: "apidocs/qiskit_addon_obp.utils.truncating.html#symbol"
  // Strip .html (which appears before the # fragment, not at the end).
  const uri = entry.uri.replace(/\.html(?=#|$)/, "");
  const [rawPage, anchor] = uri.split("#");
  // Strip Sphinx artifact root folders (apidocs/, stubs/, etc.) before kebab-casing,
  // matching the same normalization applied to converted API pages.
  const strippedPage = rawPage.replace(/^(apidocs|apidoc|stubs|cdoc)\//, "");
  const kebabPage = kebabCaseAndShortenPage(strippedPage, pkgName);
  return `/docs/api/${pkgName}/${kebabPage}${anchor ? `#${anchor}` : ""}`;
}
