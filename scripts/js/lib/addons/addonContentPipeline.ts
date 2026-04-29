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

import { readFile, writeFile } from "fs/promises";
import { dirname, parse, relative } from "path";

import { load } from "cheerio";
import { globby } from "globby";
import { mkdirp } from "mkdirp";
import { isEmpty, uniqBy } from "lodash-es";

import { sphinxHtmlToMarkdown } from "../api/htmlToMd.js";
import { generateAddonToc } from "./generateAddonToc.js";
import { HtmlToMdResultWithUrl } from "../api/HtmlToMdResult.js";
import { Pkg } from "../api/Pkg.js";
import { pathExists } from "../fs.js";
import { updateLinks, relativizeLink } from "../api/updateLinks.js";
import { DOCS_BASE_PATH } from "../api/conversionPipeline.js";
import { kebabCaseAndShortenPage } from "../api/normalizeResultUrls.js";
import addFrontMatter from "../api/addFrontMatter.js";
import { dedupeHtmlIdsFromResults } from "../api/dedupeHtmlIds.js";
import removeMathBlocksIndentation from "../api/removeMathBlocksIndentation.js";
import { saveImages } from "../api/saveImages.js";

export async function runAddonContentPipeline(
  htmlPath: string,
  docsBaseFolder: string,
  publicBaseFolder: string,
  pkg: Pkg,
  include: string[],
): Promise<void> {
  const outputDir = `${docsBaseFolder}/addons/${pkg.name}`;
  await mkdirp(outputDir);

  const stubsMap = await buildStubsMap(htmlPath, pkg.name);
  const allFiles = await globby(include, { cwd: htmlPath });
  const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));
  const notebookFiles = allFiles.filter((f) => f.endsWith(".ipynb"));

  if (isEmpty(htmlFiles) && isEmpty(notebookFiles)) {
    console.log(`No addon content files found for ${pkg.name}`);
    return;
  }

  const results = await convertProseFiles(
    pkg,
    htmlPath,
    docsBaseFolder,
    publicBaseFolder,
    htmlFiles,
  );

  for (const result of results) {
    result.markdown = resolveGithubIoLinks(result.markdown, stubsMap, pkg.name);
  }
  await updateLinks(results, {
    kebabCaseAndShorten: false,
    pkgName: pkg.name,
    pkgOutputDir: `${DOCS_BASE_PATH}/addons/${pkg.name}`,
  });
  await dedupeHtmlIdsFromResults(results);
  addFrontMatter(results, pkg);
  removeMathBlocksIndentation(results);

  await writeMdxFiles(docsBaseFolder, results);
  await saveImages(
    uniqBy(results.flatMap((r) => r.images), (img) => img.fileName),
    `${htmlPath}/_images`,
    publicBaseFolder,
    pkg,
  );
  await copyNotebooks(htmlPath, outputDir, notebookFiles, stubsMap, pkg.name);
  await writeTocFile(htmlPath, outputDir, pkg, docsBaseFolder);
}

async function convertProseFiles(
  pkg: Pkg,
  htmlPath: string,
  docsBaseFolder: string,
  publicBaseFolder: string,
  filePaths: string[],
): Promise<HtmlToMdResultWithUrl[]> {
  const results: HtmlToMdResultWithUrl[] = [];
  const outputDir = `${docsBaseFolder}/addons/${pkg.name}`;
  const imageDestination = `${publicBaseFolder}/images/addons/${pkg.name}`;

  for (const file of filePaths) {
    const html = await readFile(`${htmlPath}/${file}`, "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      determineGithubUrl: pkg.determineGithubUrlFn(),
      imageDestination,
      releaseNotesTitle: "",
      hasSeparateReleaseNotes: false,
      isCApi: false,
      hasRootNamespaceFile: false,
    });

    if (result.markdown === "") continue;

    const title = extractTitle(html);
    const description = extractDescription(html);
    const quotedTitle = `"${title.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    const frontmatterLines = [`title: ${quotedTitle}`];
    if (description) {
      const quotedDesc = `"${description.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
      frontmatterLines.push(`description: ${quotedDesc}`);
    }
    // Content-only (no --- delimiters) — addFrontMatter wraps it.
    result.meta.hardcodedFrontmatter = frontmatterLines.join("\n");

    const { dir, name } = parse(`${outputDir}/${file}`);
    const url = `/${relative(docsBaseFolder, dir)}/${name}`;
    results.push({ ...result, url });
  }
  return results;
}

function extractTitle(html: string): string {
  const $ = load(html);
  const h1 = $("h1").first();
  // Remove Sphinx permalink anchors before extracting text.
  h1.find("a.headerlink").remove();
  return h1.text().trim() || "Untitled";
}

function extractDescription(html: string): string | null {
  const $ = load(html);
  const desc = $('meta[name="description"]').attr("content");
  return desc?.trim() || null;
}

async function writeMdxFiles(
  docsBaseFolder: string,
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  for (const result of results) {
    const filePath = `${docsBaseFolder}${result.url}.mdx`;
    await mkdirp(dirname(filePath));
    await writeFile(filePath, result.markdown);
  }
}

async function copyNotebooks(
  htmlPath: string,
  outputDir: string,
  notebookFiles: string[],
  stubsMap: Map<string, string>,
  pkgName: string,
): Promise<void> {
  if (notebookFiles.length === 0) return;

  for (const file of notebookFiles) {
    const dest = `${outputDir}/${file}`;
    await mkdirp(dirname(dest));
    const raw = await readFile(`${htmlPath}/${file}`, "utf-8");
    const notebook = JSON.parse(raw);
    for (const cell of notebook.cells ?? []) {
      const lines: string[] = Array.isArray(cell.source)
        ? cell.source
        : [cell.source];
      cell.source = lines.map((line) => {
        const resolved = resolveGithubIoLinks(line, stubsMap, pkgName);
        return resolved.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (match, text, url) => {
          const rewritten = relativizeLink({ url, text });
          return rewritten ? `[${rewritten.text ?? text}](${rewritten.url})` : match;
        });
      });
    }
    await writeFile(dest, JSON.stringify(notebook, null, 1));
  }
}

async function buildStubsMap(
  htmlPath: string,
  pkgName: string,
): Promise<Map<string, string>> {
  const stubsDir = `${htmlPath}/stubs`;
  const map = new Map<string, string>();
  if (!(await pathExists(stubsDir))) return map;

  const files = await globby("*.html", { cwd: stubsDir });
  for (const file of files) {
    const html = await readFile(`${stubsDir}/${file}`, "utf-8");
    const match = html.match(/var target = "([^"]+)"/);
    if (!match) continue;
    const apidocsMatch = match[1].match(/\.\.\/apidocs\/([^#"]+\.html)(#.*)?/);
    if (!apidocsMatch) continue;
    const modulePage = apidocsMatch[1].replace(/\.html$/, "");
    const anchor = apidocsMatch[2] ?? "";
    const kebabPage = kebabCaseAndShortenPage(modulePage, pkgName);
    const symbolName = file.replace(/\.html$/, "");
    map.set(symbolName, `/docs/api/${pkgName}/${kebabPage}${anchor}`);
  }
  return map;
}

function resolveGithubIoLinks(
  text: string,
  stubsMap: Map<string, string>,
  pkgName: string,
): string {
  return text.replace(
    /https:\/\/qiskit\.github\.io\/([^/"#)\s]+)\/?([^"#)\s]*)/g,
    (match, pkg, rest) => {
      // Stubs links for this package — resolve via artifact redirect map
      if (pkg === pkgName) {
        const stubsPrefix = "stubs/";
        if (rest.startsWith(stubsPrefix)) {
          const symbol = rest
            .slice(stubsPrefix.length)
            .replace(/\.html$/, "");
          const resolved = stubsMap.get(symbol);
          if (resolved) return resolved;
        }
      }
      // All other github.io links → /docs/addons/<pkg>/<page>
      const page = rest.replace(/\.html$/, "").replace(/\/$/, "");
      return page ? `/docs/addons/${pkg}/${page}` : `/docs/addons/${pkg}`;
    },
  );
}

async function writeTocFile(
  htmlPath: string,
  outputDir: string,
  pkg: Pkg,
  docsBaseFolder: string,
): Promise<void> {
  console.log("Generating addon toc");
  const toc = await generateAddonToc(
    htmlPath,
    outputDir,
    pkg.title,
    docsBaseFolder,
  );
  await writeFile(
    `${outputDir}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );
}
