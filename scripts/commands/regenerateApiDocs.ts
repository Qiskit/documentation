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
  currentApisOnly: boolean;
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
    .option("current-apis-only", {
      type: "boolean",
      default: false,
      description: "Regenerate only the current API docs?",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();
  await validateGitStatus();

  const results = new Map<string, string[]>();
  for (const pkgName of Pkg.VALID_NAMES) {
    if (args.package && pkgName != args.package) {
      continue;
    }

    const [historicalVersions, currentVersion] = await getPackageVersions(
      pkgName,
      args.currentApisOnly,
    );
    const result = await processVersions(
      pkgName,
      historicalVersions,
      currentVersion,
    );
    results.set(pkgName, result);
  }

  console.log("");
  results.forEach((result: string[], pkgName: string) => {
    console.log(`Regeneration of ${pkgName}:`);
    result.forEach((msg) => console.error(msg));
    console.log("");
  });

  console.log(`Each regenerated version has been saved as a distinct commit. If the changes are
too large for one single PR, consider splitting it up into multiple PRs by using
git cherry-pick or git rebase -i so each PR only has the commits it wants to target.`);
});

async function processVersions(
  pkgName: string,
  historicalVersions: string[],
  currentVersion: string,
): Promise<string[]> {
  const results: string[] = [];

  for (const historicalVersion of historicalVersions) {
    results.push(await regenerateVersion(pkgName, historicalVersion));
  }
  results.push(await regenerateVersion(pkgName, currentVersion, false));
  return results;
}

async function regenerateVersion(
  pkgName: string,
  version: string,
  historical: boolean = true,
): Promise<string> {
  try {
    if (historical) {
      await $`npm run gen-api -- -p ${pkgName} -v ${version} --historical`;
    } else {
      await $`npm run gen-api -- -p ${pkgName} -v ${version}`;
    }

    if ((await gitStatus()) !== "") {
      await gitCommit(`Regenerate ${pkgName} ${version}`);
      return `✅ ${pkgName} ${version} regenerated correctly`;
    } else {
      return `☑️ ${pkgName} ${version} is up-to-date`;
    }
  } catch (_) {
    await gitRestore(".");
    return `❌ ${pkgName} ${version} failed to regenerate`;
  }
}

async function getPackageVersions(
  pkgName: string,
  currentApisOnly: boolean,
): Promise<[string[], string]> {
  const pkgDocsPath = `docs/api/${pkgName}`;
  const historicalVersions: string[] = [];

  if (!currentApisOnly) {
    const historicalFolders = (
      await readdir(`${pkgDocsPath}`, { withFileTypes: true })
    ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

    for (const folder of historicalFolders) {
      const historicalVersion = await JSON.parse(
        fs.readFileSync(`${pkgDocsPath}/${folder.name}/_package.json`, "utf-8"),
      );
      historicalVersions.push(historicalVersion.version);
    }
  }

  const currentVersion = await JSON.parse(
    fs.readFileSync(`${pkgDocsPath}/_package.json`, "utf-8"),
  );

  return [historicalVersions, currentVersion.version];
}

async function validateGitStatus(): Promise<void> {
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
        Use 'git checkout -b <name-branch>' to continue`);
    process.exit(1);
  }
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
