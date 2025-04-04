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

import { $ } from "zx";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { spellCheckDocument } from "cspell-lib";
import { globby } from "globby";
import pMap from "p-map";

import { zxMain } from "../lib/zx.js";
import { readMarkdown } from "../lib/markdownReader.js";

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
  config: string;
}

function readArgs(): Arguments {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("apis", {
      type: "boolean",
      default: false,
      description: "Check the API docs (currently failing)",
    })
    .option("config", {
      type: "string",
      default: "scripts/config/cspell/cSpell.json",
      description: "Path to cSpell.json",
    })
    .parseSync();
}

zxMain(async () => {
  const args = readArgs();
  await checkMdx(args.config, args.apis);
  await checkNotebooks(args.config);
});

function explainHowToFix(format: "mdx" | "jupyter"): void {
  const dictionary =
    "Add the word to a dictionary. This means it will be valid in all other files, too. " +
    "Add names to the `scripts/config/cspell/dictionaries/people.txt` file. " +
    "Add scientific or quantum specific-words to the `scripts/config/cspell/dictionaries/qiskit.txt` file. " +
    "If it doesn't fit in either category, add it to the `words` section in `scripts/config/cspell/cSpell.json`. " +
    "The word is not case-sensitive.";

  let hasMultipleFixes: boolean;
  let fix: string;
  if (format === "mdx") {
    hasMultipleFixes = true;
    fix =
      "1. Add a comment on a dedicated line near the top of the MDX file, between the page metadata " +
      "and the H1 heading, such as: {/* cspell:ignore hellllooooo, ayyyyy */}\n\n" +
      `2. ${dictionary}`;
  } else if (format === "jupyter") {
    hasMultipleFixes = true;
    fix =
      "1. Add a comment on a dedicated line to the first markdown cell in the Jupyter notebook.  " +
      "(This cell should have the page title.) For example, add the " +
      "following above the H1 heading: {/* cspell:ignore helloooooo */}\n\n" +
      `2. ${dictionary}`;
  } else {
    throw new Error(`Unrecognized format: ${format}`);
  }

  const allowlistInstruction = hasMultipleFixes
    ? "there are two ways to allowlist it"
    : "you can allowlist it";
  console.error(
    "\n\n---------------\n\n🙅 There are unrecognized words (see above). If " +
      `the word is a not a typo, ${allowlistInstruction}:\n\n${fix}`,
  );
}

async function checkMdx(configPath: string, checkApis: boolean): Promise<void> {
  const cspellCmd = ["npx", "cspell", "--no-progress", "--config", configPath];
  try {
    await $`${cspellCmd} docs/**/*.mdx !docs/api/**/*.mdx`.pipe(process.stdout);
    if (checkApis) {
      await $`${cspellCmd} docs/api/**/*.mdx`.pipe(process.stdout);
    }
  } catch (p) {
    explainHowToFix("mdx");
    process.exit(1);
  }
}

async function checkNotebooks(configPath: string): Promise<void> {
  const paths = await globby("docs/**/*.ipynb");
  let allGood = true;
  await pMap(paths, async (path) => {
    const text = await readMarkdown(path, { includeCodeCellSourceCode: true });
    const errors = await runCSpell(text, { configPath, fp: path });
    if (errors.size) {
      allGood = false;
      errors.forEach((mistake) =>
        console.error(`❌ Unrecognized word in ${path}: ${mistake}`),
      );
    }
  });

  if (!allGood) {
    explainHowToFix("jupyter");
    process.exit(1);
  }
}

async function runCSpell(
  text: string,
  options: { configPath: string; fp: string },
): Promise<Set<string>> {
  const checkOptions = {
    configFile: options.configPath,
  };
  const doc = {
    uri: options.fp,
    text,
  };
  const result = await spellCheckDocument(doc, checkOptions, {});

  // The line numbers often get mangled. So, we only return the spelling mistake
  // without its context.
  return new Set(result.issues.map((issue) => issue.text));
}
