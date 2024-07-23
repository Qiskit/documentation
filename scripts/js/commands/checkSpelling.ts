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

import { zxMain } from "../lib/zx";
import { $ } from "zx";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { Pkg } from "../lib/api/Pkg";

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
  const cspellCmd = ["npx", "cspell", "--no-progress", "--config", args.config];

  await $`${cspellCmd} docs/**/*.mdx !docs/api/**/*.mdx docs/api/migration-guides/*.mdx`;

  if (args.apis) {
    const apiFolders = Pkg.VALID_NAMES.map((api) => `docs/api/${api}/**/*.mdx`);
    await $`${cspellCmd} ${apiFolders}`;
  }
});
