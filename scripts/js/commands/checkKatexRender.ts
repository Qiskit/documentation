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
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { firefox, Page } from "playwright";
import fs from "fs/promises";

import { removeSuffix } from "../lib/stringUtils";
import { readMarkdown } from "../lib/markdownReader";

// This list contains files with inline math expressions that should be
// fixed to avoid any possible overflow.
const IGNORED_FILES_SHOULD_FIX: string[] = [
  ...[
    "0.19",
    "0.24",
    "0.25",
    "0.26",
    "0.27",
    "0.28",
    "0.29",
    "0.30",
    "0.31",
    "0.32",
    "0.33",
    "0.35",
    "0.36",
    "0.37",
    "0.38",
    "0.39",
    "0.40",
    "0.41",
  ].map(
    (version) =>
      `docs/api/qiskit/${version}/qiskit.providers.aer.utils.NoiseTransformer.mdx`,
  ),
];

// Minimum width supported by our app
const MIN_WIDTH = 380;

interface Arguments {
  [x: string]: unknown;
  fromFile?: string;
  learning?: boolean;
  nonApiDocs?: boolean;
  currentApis?: boolean;
  devApis?: boolean;
  historicalApis?: boolean;
  qiskitReleaseNotes?: boolean;
  ignoredFiles?: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("from-file", {
      type: "string",
      normalize: true,
      conflicts: [
        "learning",
        "non-api-docs",
        "current-apis",
        "dev-apis",
        "historical-apis",
        "qiskit-release-notes",
        "ignored-files",
      ],
      description:
        "Read the file path for file paths and globs to check, like `docs/guides/index.mdx`. " +
        "Entries should be separated by a newline and should be valid file types (.mdx or .ipynb). " +
        "Mutually exclusive with the other args.",
    })
    .option("learning", {
      type: "boolean",
      description: "Check all the Learning courses and modules files.",
    })
    .option("non-api-docs", {
      type: "boolean",
      description: "Check all the non-API docs, like guides/.",
    })
    .option("current-apis", {
      type: "boolean",
      description: "Check the pages in the current API docs.",
    })
    .option("dev-apis", {
      type: "boolean",
      description: "Check the /dev API docs.",
    })
    .option("historical-apis", {
      type: "boolean",
      description:
        "Check the pages in the historical API docs, e.g. `docs/api/qiskit/0.44`. " +
        "Warning: this is slow.",
    })
    .option("qiskit-release-notes", {
      type: "boolean",
      description:
        "Check the pages in the `docs/api/qiskit/release-notes` folder.",
    })
    .option("ignored-files", {
      type: "boolean",
      description:
        "Check the pages the IGNORED_FILES list. Useful to fix the pages",
    })
    .parseSync();
};

const main = async (): Promise<void> => {
  const browser = await firefox.launch();
  const page = await browser.newPage({
    // The height is not important in this check
    viewport: { width: MIN_WIDTH, height: 800 },
  });

  const args = readArgs();
  const paths = await determineFilePaths(args);

  let allGood = true;
  let numFilesChecked = 0;
  for (const path of paths) {
    // This script can be slow, so log progress every 5 files.
    if (numFilesChecked % 5 == 0) {
      console.log(`⏳ Checked ${numFilesChecked} / ${paths.length} pages `);
    }

    const errors = await checkPage(page, path);

    if (errors.length) {
      allGood = false;
      console.error(
        `❌ The file '${path}' contains bad inline katex expressions:`,
      );
      errors.forEach((error) => console.error(error));
      console.error("\n");
    }

    numFilesChecked++;
  }

  await browser.close();

  if (!allGood) {
    console.log(
      "\nThe previous inline math expressions are too long. Please run `./fix` or manually convert the expressions into a 'Katex Display' by using `$$` instead of `$` in a new line.\n",
      "Example of the convertion:\n",
      "--------------------------\n",
      "$[sample_{0}observable_{0}, \ldots, sample_{0}observable_{N-1}, sample_{1}observable_{0}, \ldots, sample_{M-1}observable_{N-1}]$\n",
      "->\n",
      "$$\n",
      "[sample_{0}observable_{0}, \ldots, sample_{0}observable_{N-1}, sample_{1}observable_{0}, \ldots, sample_{M-1}observable_{N-1}]\n",
      "$$",
    );
    process.exit(1);
  }

  console.log("\nNo errors found ✅\n");
};

async function checkPage(page: Page, pathname: string): Promise<string[]> {
  const errors: string[] = [];
  try {
    await page.goto(`http://localhost:3000/${pathname}`);

    const allKatex = page.locator("span.katex");
    const count = await allKatex.count();

    for (let i = 0; i < count; i++) {
      const mathExpr = allKatex.nth(i);

      // Expressions that are not inline have a parent span with the `katex-display` class.
      const isKatexDisplay = await mathExpr.evaluate((expr: any) =>
        expr.parentElement?.classList.contains("katex-display"),
      );

      // We skip math expressions that are not inline
      if (isKatexDisplay) {
        continue;
      }

      const box = await mathExpr.boundingBox();
      if (box && box.width >= MIN_WIDTH) {
        const content = await mathExpr.textContent();
        errors.push(`  -  Error found: $${content}}$`);
      }
    }
  } catch (_) {
    errors.push("The page didn't load correctly");
  }
  return errors;
}

async function getRawGlobs(args: Arguments): Promise<string[]> {
  if (args.fromFile) {
    const content = await fs.readFile(args.fromFile, "utf-8");
    return globby(content.split("\n").filter((entry) => entry));
  }

  const globs = [];
  if (args.learning) {
    globs.push("learning/**/*.{ipynb,mdx}");
  }

  if (args.nonApiDocs) {
    globs.push("docs/**/*.{ipynb,mdx}");
  }

  for (const [isIncluded, glob] of [
    [args.currentApis, `docs/api/*/*.mdx`],
    [args.historicalApis, "docs/api/*/[0-9]*/*.mdx"],
    [args.devApis, "docs/api/*/dev/*.mdx"],
    [args.qiskitReleaseNotes, "docs/api/qiskit/release-notes/*.mdx"],
    ...IGNORED_FILES_SHOULD_FIX.map((file) => [args.ignoredFiles, file]),
  ]) {
    const prefix = isIncluded ? "" : "!";
    globs.push(`${prefix}${glob}`);
  }

  return globby(globs);
}

export function hasInlineMath(markdown: string): boolean {
  return !!markdown.match(/(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)/);
}

export function removeFileExtension(pathname: string): string {
  const extensions = [".mdx", ".ipynb"];

  for (const extension of extensions) {
    if (pathname.endsWith(extension)) {
      return removeSuffix(pathname, extension);
    }
  }

  return pathname;
}

async function determineFilePaths(args: Arguments): Promise<string[]> {
  const globs = await getRawGlobs(args);

  const filesWithMath = [];
  for (const glob of globs) {
    const markdown = await readMarkdown(glob);
    // Only get the files that contain inline math expressions
    if (hasInlineMath(markdown)) {
      filesWithMath.push(glob);
    }
  }

  return filesWithMath.map((f) =>
    // The pages must be accesses without the file extensions
    removeFileExtension(f),
  );
}

main().then(() => process.exit());
