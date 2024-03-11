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

import { zxMain } from "../lib/zx";

const PORT = 3000;

interface Arguments {
  [x: string]: unknown;
  fromFile?: string;
  nonApi: boolean;
  currentApis: boolean;
  devApis: boolean;
  historicalApis: boolean;
  qiskitReleaseNotes: boolean;
  translations: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("from-file", {
      type: "string",
      normalize: true,
      description:
        "Read the file path for file paths and globs to check, like `docs/start/index.md`. Entries should be separated by a newline and should be valid file types (.md, .mdx, .ipynb).",
    })
    .option("non-api", {
      type: "boolean",
      default: false,
      description: "Check all the non-API docs, like start/.",
    })
    .option("current-apis", {
      type: "boolean",
      default: false,
      description: "Check the pages in the current API docs.",
    })
    .option("dev-apis", {
      type: "boolean",
      default: false,
      description: "Check the /dev API docs.",
    })
    .option("historical-apis", {
      type: "boolean",
      default: false,
      description:
        "Check the pages in the historical API docs, e.g. `api/qiskit/0.44`. " +
        "Warning: this is slow.",
    })
    .option("qiskit-release-notes", {
      type: "boolean",
      default: false,
      description: "Check the pages in the `api/qiskit/release-notes` folder.",
    })
    .option("translations", {
      type: "boolean",
      default: false,
      description: "Check the pages in the `translations/` subfolders.",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();
  await validateDockerRunning();
  const files = await determineFilePaths(args);

  let failures: string[] = [];
  let numFilesChecked = 1;
  for (const fp of files) {
    const rendered = await canRender(fp);
    if (!rendered) {
      console.error(`❌ Failed to render: ${fp}`);
      failures.push(fp);
    }

    // This script can be slow, so log progress every 10 files.
    if (numFilesChecked % 10 == 0) {
      console.log(`Checked ${numFilesChecked} / ${files.length} pages`);
    }
    numFilesChecked++;
  }

  if (failures.length === 0) {
    console.info("✅ All pages render without crashing");
  } else {
    console.error(
      "💔 Some pages crash when rendering. This is usually due to invalid syntax, such as forgetting " +
        "the closing component tag, like `</Admonition>`. You can sometimes get a helpful error message " +
        "by previewing the docs locally or in CI. See the README for instructions.\n\n" +
        failures.join("\n"),
    );
    process.exit(1);
  }
});

async function canRender(fp: string): Promise<boolean> {
  const url = pathToUrl(fp);
  try {
    const response = await fetch(url);
    if (response.status >= 300) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
}

function pathToUrl(path: string): string {
  const strippedPath = path
    .replace("docs/", "")
    .replace("translations/", "")
    .replace(/\.(?:md|mdx|ipynb)$/g, "");
  return `http://localhost:${PORT}/${strippedPath}`;
}

async function validateDockerRunning(): Promise<void> {
  try {
    const response = await fetch(`http://localhost:${PORT}`);
    if (response.status !== 404) {
      console.error(
        "Failed to access http://localhost:3000. Have you started the Docker server with `./start`? " +
          "Refer to the README for instructions.",
      );
      process.exit(1);
    }
  } catch (error) {
    console.error(
      "Error when accessing http://localhost:3000. Make sure that you've started the Docker server " +
        "with `./start`. Refer to the README for instructions.\n\n" +
        `${error}`,
    );
    process.exit(1);
  }
}

async function determineFilePaths(args: Arguments): Promise<string[]> {
  const globs = [];
  if (args.fromFile) {
    const content = await fs.readFile(args.fromFile, "utf-8");
    globs.push(...content.split("\n").filter((entry) => entry));
  }

  if (args.nonApi) {
    globs.push(
      "docs/support.mdx",
      "docs/{build,run,start,transpile,verify}/*.{ipynb,mdx}",
      "docs/api/migration-guides/**/*.{ipynb,mdx}",
    );
  }
  if (args.currentApis) {
    globs.push(
      "docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/*.{ipynb,mdx}",
    );
  }
  if (args.historicalApis) {
    globs.push(
      "docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/[0-9]*/*.{ipynb,mdx}",
    );
  }
  if (args.devApis) {
    globs.push(
      "docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/dev/*.{ipynb,mdx}",
    );
  }
  if (args.qiskitReleaseNotes) {
    globs.push("docs/api/qiskit/release-notes/*.{ipynb,mdx}");
  }
  if (args.translations) {
    globs.push("translations/**/*.{ipynb,mdx}");
  }
  return globby(globs);
}
