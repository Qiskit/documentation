// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import fs from "fs/promises";

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import grayMatter from "gray-matter";
import { globby } from "globby";

import { Pkg } from "../lib/api/Pkg.js";

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
  translations: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("apis", {
      type: "boolean",
      default: false,
      description:
        "Check the API docs? Currently fails (https://github.com/Qiskit/documentation/issues/66)",
    })
    .option("translations", {
      type: "boolean",
      default: false,
      description: "Check the translations?",
    })
    .parseSync();
};

const readMetadata = async (filePath: string): Promise<Record<string, any>> => {
  const ext = filePath.split(".").pop();
  if (ext === "md" || ext === "mdx") {
    const content = await fs.readFile(filePath, "utf-8");
    return grayMatter(content).data;
  } else if (ext === "ipynb") {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content).metadata;
  } else {
    throw new Error(`Unknown extension for ${filePath}: ${ext}`);
  }
};

const isValidMetadata = (
  metadata: Record<string, any>,
  filePath: string,
): boolean =>
  metadata.title &&
  metadata.description &&
  (isApi(filePath) ||
    (metadata.title != metadata.description &&
      metadata.description.length <= 160 &&
      metadata.description.length >= 50));

const main = async (): Promise<void> => {
  const args = readArgs();
  const [mdFiles, notebookFiles] = await determineFiles(args);

  const mdErrors = [];
  for (const file of mdFiles) {
    const metadata = await readMetadata(file);
    if (!isValidMetadata(metadata, file)) {
      mdErrors.push(file);
    }
  }

  const notebookErrors = [];
  for (const file of notebookFiles) {
    const metadata = await readMetadata(file);
    if (!isValidMetadata(metadata, file)) {
      notebookErrors.push(file);
    }
  }

  handleErrors(mdErrors, notebookErrors);
};

async function determineFiles(args: Arguments): Promise<[string[], string[]]> {
  const mdGlobs = ["docs/**/*.mdx"];
  const notebookGlobs = ["docs/**/*.ipynb"];
  if (!args.apis) {
    const projects = Pkg.VALID_NAMES.join(",");
    const apiIgnore = `!docs/api/{${projects}}/**/*`;
    mdGlobs.push(apiIgnore);
    notebookGlobs.push(apiIgnore);
  }
  if (args.translations) {
    mdGlobs.push("translations/**/*.{md,mdx}");
    notebookGlobs.push("translations/**/*.ipynb");
  }
  return [await globby(mdGlobs), await globby(notebookGlobs)];
}

function isApi(filePath: string): boolean {
  const apiFolders = Pkg.VALID_NAMES.map((pkg) => `/api/${pkg}/`);
  return apiFolders.some((urlPath) => filePath.startsWith(urlPath));
}

function handleErrors(mdErrors: string[], notebookErrors: string[]): void {
  if (mdErrors.length > 0) {
    console.error(`
      Invalid markdown file metadata. Every .mdx file should start with a metadata block like this:

      ---
      title: Representing quantum computers
      description: Learn about coupling maps, basis gates, and backend errors for transpiling
      ---

      The title should be the page title: it's used for browser tabs and the top line of search results. The description should describe the page
      in at least 50 but no more than 160 characters, ideally using some keywords. The description is what
      shows up as the text in search results. See https://github.com/Qiskit/documentation/issues/131 for some tips.

      Please fix these files:\n\n${mdErrors.join("\n")}
    `);
  }
  if (notebookErrors.length > 0) {
    console.error(`
      Invalid Jupyter notebook metadata. Every .ipynb file needs to 
      set 'title' and 'description' in the file metadata. You need to
      manually add this metadata. Furthermore, the length of the description
      must be at least 50 but no more than 160 characters.
      
      For example, if using VSCode, open up the file with
      the "Open With..." option and then "Text Editor".
      
      Once the file is open in text-mode, scroll down to the bottom of
      the file for the top-level key "metadata". Be careful that this
      is the metadata for the entire file and not a single code block.
      You should see in the "metadata" section other entries like
      "language_info" and "nbconvert_exporter".

      Finally, add new keys in the "metadata" section for "title" and "description".
      The title should be the page title: it's used for browser tabs
      and the top line of search results. The description should describe the page
      in at least 50 but no more than 160 characters, ideally using some keywords. The description is what
      shows up as the text in search results. See 
      https://github.com/Qiskit/documentation/issues/131 for some tips.

      For example:

      "metadata": {
        "description": "Get started using Qiskit with IBM Quantum hardware in this Hello World example",
        "title": "Hello world",
        "celltoolbar": "Raw Cell Format",
        "kernelspec": { ...
      }

      Please fix these files:\n\n${notebookErrors.join("\n")}
    `);
  }
  if (mdErrors.length > 0 || notebookErrors.length > 0) {
    process.exit(1);
  }
}

main();
