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

import { basename } from "path";
import { fileURLToPath, pathToFileURL } from "url";

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { globby } from "globby";

import { zxMain } from "../lib/zx.js";

const COMMANDS_DIR = new URL("./docs/", import.meta.url);

const VALID_PACKAGES = await discoverPackages();

const readArgs = () => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: VALID_PACKAGES,
      description: "Which package to update. Defaults to all packages.",
    })
    .option("skip-download", {
      type: "boolean",
      default: false,
      description: "Reuse already-downloaded artifacts instead of downloading again.",
    })
    .parseSync();
};

async function discoverPackages(): Promise<string[]> {
  const dir = fileURLToPath(COMMANDS_DIR);
  const files = await globby("*.ts", { cwd: dir });
  return files
    .map((f) => basename(f, ".ts"))
    .filter((name) => name !== "utils")
    .sort();
}

async function loadAndRun(pkgName: string, skipDownload: boolean): Promise<void> {
  const moduleUrl = new URL(`${pkgName}.ts`, COMMANDS_DIR);
  const mod = await import(moduleUrl.toString().replace(/\.ts$/, ".js"));
  if (typeof mod.run !== "function") {
    throw new Error(`Package command ${pkgName}.ts does not export a run() function`);
  }
  console.log(`\n=== ${pkgName} ===`);
  await mod.run(skipDownload);
}

zxMain(async () => {
  const args = readArgs();
  const packages = args.package ? [args.package] : VALID_PACKAGES;

  for (const pkgName of packages) {
    await loadAndRun(pkgName, args.skipDownload);
  }
});
