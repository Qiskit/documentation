// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { globby } from "globby";

import { TocEntry } from "./api/generateToc.js";
import { readJsonFile } from "./fs.js";
import { InternalLink, File } from "./links/InternalLink.js";

// While these files don't exist in this repository, the checkers should
// assume that they exist in production.
export const SYNTHETIC_FILES: string[] = [
  "learning/index.mdx",
  "docs/index.mdx",
  "docs/errors.mdx",
  "docs/api/qiskit-ibm-runtime/index.mdx",
  "docs/api/qiskit-runtime-rest/index.mdx",
  "docs/api/qiskit-runtime-rest/tags/jobs.mdx",
  "docs/api/qiskit-transpiler-service-rest/index.mdx",
  "docs/api/qiskit-runtime-rest/tags/usage.mdx",
  "docs/api/qiskit-runtime-rest/tags/sessions.mdx",
  "docs/api/qiskit-runtime-rest/tags/instances.mdx",
  "docs/api/qiskit-runtime-rest/tags/backends.mdx",
  "docs/api/qiskit-runtime-rest/index.mdx",
];

export async function findTocFiles(includeApis: boolean): Promise<string[]> {
  const globs = [
    ["{docs,learning}/**/_toc.json"],
    includeApis
      ? ["docs/api/**/_toc.json"]
      : ["!docs/api/**", "docs/api/functions/_toc.json"],
  ].flat();
  return globby(globs);
}

/**
 * Recursively collect every `url` defined in a TOC's entries, descending into
 * `children`. Entries without a `url` (e.g. section headers) are skipped.
 */
export function parseTocUrls(entries: TocEntry[]): string[] {
  const urls = [];
  for (const entry of entries) {
    if ("children" in entry) {
      const childUrls = parseTocUrls(entry.children || []);
      urls.push(...childUrls);
    } else if (entry.url !== undefined) {
      urls.push(entry.url);
    }
  }
  return urls;
}

/**
 * Build the universe of pages that a _toc.json entry may point to. We don't
 * need anchors (TOC URLs never have them), so files are loaded without parsing.
 */
export async function loadTocTargetFiles(): Promise<File[]> {
  const contentFiles = await globby("{docs,learning}/**/*.{mdx,ipynb}");
  return [
    ...contentFiles.map((fp) => new File(fp, new Set())),
    ...SYNTHETIC_FILES.map((fp) => new File(fp, new Set(), true)),
  ];
}

/**
 * Check that every non-external `url` in `tocFile` resolves to a page in
 * `existingFiles`. Returns an error message listing the broken URLs, or
 * `undefined` if they all resolve.
 *
 * Shared by `check:toc` (standalone) and `check:internal-links` so both report
 * identical results; see `loadTocTargetFiles` for building `existingFiles`.
 */
export async function checkTocFile(
  tocFile: string,
  existingFiles: File[],
): Promise<string | undefined> {
  const json = await readJsonFile(tocFile);
  const urls = parseTocUrls(json.children ?? []);

  const errors: string[] = [];
  for (const url of urls) {
    // External URLs are checked separately by `check:external-links`.
    if (url.startsWith("http")) continue;
    const error = new InternalLink(url, [tocFile]).check(existingFiles);
    if (error !== undefined) {
      errors.push(error);
    }
  }

  return errors.length === 0 ? undefined : errors.join("\n");
}
