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

import fs from "fs/promises";

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { mean } from "lodash-es";

import { zxMain } from "../lib/zx.js";

// These are expected to 404 in the cloud app due to being legacy only.
const LEGACY_ONLY_PAGES: Set<string> = new Set([
  "docs/guides/setup-channel.mdx",
]);

// These are expected to 404 in the legacy app due to being cloud only.
const CLOUD_ONLY_PAGES: Set<string> = new Set([
  "docs/guides/calibration-jobs.mdx",
  "docs/guides/cloud-setup.mdx",
  "docs/guides/upgrade-from-open.mdx",
  "docs/guides/view-cost.mdx",
  "docs/guides/access-groups.mdx",
  "docs/guides/cloud-account-structure.mdx",
  "docs/guides/considerations-set-up-runtime.mdx",
  "docs/guides/custom-roles.mdx",
  "docs/guides/invite-and-manage-users.mdx",
  "docs/guides/manage-appid.mdx",
  "docs/guides/manage-cloud-users.mdx",
  "docs/guides/plans-overview.mdx",
  "docs/guides/quickstart-steps-org.mdx",
  "docs/guides/allocation-limits.mdx",
]);

const PORT = 3000;

interface Arguments {
  [x: string]: unknown;
  fromFile?: string;
  nonApi?: boolean;
  currentApis?: boolean;
  devApis?: boolean;
  historicalApis?: boolean;
  qiskitReleaseNotes?: boolean;
  legacy?: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("from-file", {
      type: "string",
      normalize: true,
      conflicts: [
        "non-api",
        "current-apis",
        "dev-apis",
        "historical-apis",
        "qiskit-release-notes",
      ],
      description:
        "Read the file path for file paths and globs to check, like `docs/start/index.md`. " +
        "Entries should be separated by a newline and should be valid file types (.md, .mdx, .ipynb). " +
        "Mutually exclusive with the other args.",
    })
    .option("non-api", {
      type: "boolean",
      description: "Check all the non-API docs, like start/.",
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
        "Check the pages in the historical API docs, e.g. `api/qiskit/0.44`. " +
        "Warning: this is slow.",
    })
    .option("qiskit-release-notes", {
      type: "boolean",
      description: "Check the pages in the `api/qiskit/release-notes` folder.",
    })
    .option("legacy", {
      type: "boolean",
      description: "Check that the non-API pages render in the legacy app.",
      conflicts: [
        "current-apis",
        "dev-apis",
        "historical-apis",
        "qiskit-release-notes",
      ],
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();
  await validateDockerRunning();
  const files = await determineFilePaths(args);

  let failures: string[] = [];
  let numFilesChecked = 0;
  let renderTimes = [];
  for (const fp of files) {
    numFilesChecked++;
    const response = await canRender(fp);

    if (response.ok) {
      renderTimes.push(response.timeTaken);
    } else {
      console.error(`❌ Failed to render: ${fp}`);
      failures.push(fp);
    }

    // This script can be slow, so log progress every 10 files.
    if (numFilesChecked % 10 == 0) {
      console.log(
        `⏳ Checked ${numFilesChecked} / ${files.length} pages ` +
          `(~${mean(renderTimes).toFixed(0)}ms per page)`,
      );
      renderTimes = [];
    }
  }

  if (failures.length === 0) {
    console.info(`✅ All ${files.length} pages render without crashing`);
  } else {
    console.error(
      `💔 ${failures.length} pages crash when rendering. This is usually due to invalid syntax, such as forgetting ` +
        "the closing component tag, like `</Admonition>`. You can sometimes get a helpful error message " +
        "by previewing the docs locally or in CI. See the README for instructions.\n\n" +
        failures.join("\n") +
        "\n\nIf your files are platform specific, you should add them to the `LEGACY_ONLY_PAGES` or `CLOUD_ONLY_PAGES` list " +
        "at the beginning of `scripts/js/commands/checkPagesRender.ts`",
    );
    process.exit(1);
  }
});

type RenderSuccess = { ok: true; timeTaken: number };
type RenderFailure = { ok: false };

async function canRender(fp: string): Promise<RenderSuccess | RenderFailure> {
  const url = pathToUrl(fp);
  let timeTaken;
  try {
    const startTime = performance.now();
    const response = await fetch(url);
    timeTaken = performance.now() - startTime;
    if (response.status >= 300) {
      return { ok: false };
    }
  } catch (error) {
    return { ok: false };
  }

  return { ok: true, timeTaken: timeTaken };
}

function pathToUrl(path: string): string {
  const strippedPath = path
    .replace("docs/", "")
    .replace(/\.(?:md|mdx|ipynb)$/g, "");
  return `http://localhost:${PORT}/${strippedPath}`;
}

async function validateDockerRunning(): Promise<void> {
  try {
    const response = await fetch(`http://localhost:${PORT}`);
    if (response.status !== 200) {
      console.error(
        "Failed to access http://localhost:3000. Have you started the Docker server with `./start` in another shell? ",
      );
      process.exit(1);
    }
  } catch (error) {
    console.error(
      "Error when accessing http://localhost:3000. Make sure that you've started the Docker server " +
        "with `./start` in another shell.\n\n" +
        `${error}`,
    );
    process.exit(1);
  }
}

async function determineFilePaths(args: Arguments): Promise<string[]> {
  if (args.fromFile) {
    const content = await fs.readFile(args.fromFile, "utf-8");
    const result = await globby(content.split("\n").filter((entry) => entry));
    return result.filter((fp) => filterPlatformSpecificPage(fp, args.legacy));
  }

  const globs = [];
  if (args.nonApi || args.legacy) {
    globs.push("docs/**/*.{ipynb,mdx}");
  }

  for (const [isIncluded, glob] of [
    [args.currentApis, `docs/api/*/*.mdx`],
    [args.historicalApis, "docs/api/*/[0-9]*/*.mdx"],
    [args.devApis, "docs/api/*/dev/*.mdx"],
    [args.qiskitReleaseNotes, "docs/api/qiskit/release-notes/*.mdx"],
  ]) {
    const prefix = isIncluded ? "" : "!";
    globs.push(`${prefix}${glob}`);
  }
  const result = await globby(globs);
  return result.filter((fp) => filterPlatformSpecificPage(fp, args.legacy));
}

function filterPlatformSpecificPage(page: string, legacy?: boolean) {
  if (legacy) {
    // API docs should never be checked with the legacy app because they render
    // identically in the cloud app.
    return (
      !CLOUD_ONLY_PAGES.has(page) &&
      !page.startsWith("docs/api") &&
      !page.startsWith("docs/tutorials")
    );
  }

  return !LEGACY_ONLY_PAGES.has(page);
}
