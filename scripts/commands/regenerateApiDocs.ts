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

import { readdir } from "fs/promises";

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { $ } from "zx";
import fs from "fs";

import { Pkg } from "../lib/api/Pkg";
import { zxMain } from "../lib/zx";

interface Arguments {
  [x: string]: unknown;
  package?: string;
  historical: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: Pkg.VALID_NAMES,
      demandOption: false,
      description: "Which package to update",
    })
    .option("historical", {
      type: "boolean",
      default: false,
      description: "Regenerate prior releases?",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();

  const initialStatus = await gitStatus();
  if (initialStatus !== "") {
    console.error(`
        Repository must have clean Git state when calling
        \`npm run regenerate-apis\`. 'git status' returned:\n\n${initialStatus}`);
    process.exit(1);
  }

  const currentBranch = await gitBranch();
  if (currentBranch == "main\n") {
    console.error(`
        Please create a dedicated branch to regenerate the API docs correctly.
        Use 'git checkout -b <name-branch>' to continue)`);
    process.exit(1);
  }

  const results = new Map<string, string[]>();
  for (const pkgName of Pkg.VALID_NAMES) {
    if (args.package && pkgName != args.package) {
      continue;
    }

    const pkgVersions = await getPackageVersions(`${pkgName}`, args.historical);
    const result = await regenerateVersions(pkgName, pkgVersions);
    results.set(`${pkgName}`, result);
  }

  results.forEach((result: string[], pkgName: string) => {
    console.log(`Regeneration of ${pkgName}:`);
    result.forEach((msg) => console.error(msg));
    console.log("");
  });
});

async function regenerateVersions(
  pkgName: string,
  versions: string[],
): Promise<string[]> {
  const results = [];

  for (const version of versions) {
    try {
      await $`npm run gen-api -- -p ${pkgName} -v ${version}`;
      if ((await gitStatus()) !== "") {
        await gitCommit(`Regenerate ${pkgName} ${version}`);
        results.push(`✅ ${pkgName} ${version} regenerated correctly`);
      } else {
        results.push(`☑️ ${pkgName} ${version} is up-to-date`);
      }
    } catch (_) {
      await gitRestore(".");
      results.push(`❌ ${pkgName} ${version} failed to regenerate`);
    }
  }

  return results;
}

async function getPackageVersions(
  pkgName: string,
  historical: boolean,
): Promise<string[]> {
  const pkgDocsPath = `docs/api/${pkgName}`;
  const allVersions: string[] = [];

  if (historical) {
    const historicalFolders = (
      await readdir(`${pkgDocsPath}`, { withFileTypes: true })
    ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

    for (const folder of historicalFolders) {
      const historicalVersion = JSON.parse(
        fs.readFileSync(`${pkgDocsPath}/${folder.name}/_package.json`, "utf-8"),
      );
      allVersions.push(historicalVersion.version);
    }
  }

  const currentVersion = JSON.parse(
    fs.readFileSync(`${pkgDocsPath}/_package.json`, "utf-8"),
  );
  return [...allVersions, currentVersion.version];
}

async function gitStatus(): Promise<string> {
  const status = await $`git status --porcelain`.quiet();
  return status.stdout;
}

async function gitBranch(): Promise<string> {
  const status = await $`git branch --show-current`.quiet();
  return status.stdout;
}

async function gitCommit(message: string): Promise<void> {
  await $`git add .`;
  await $`git commit -m ${message}`;
}

async function gitRestore(path: string): Promise<void> {
  await $`git restore ${path}`;
}
