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

import { Pkg } from "../../lib/api/Pkg.js";
import { zxMain } from "../../lib/zx.js";
import { pathExists } from "../../lib/fs.js";
import { readApiFullVersion } from "../../lib/apiVersions.js";
import { generateHistoricalRedirects } from "./generateHistoricalRedirects.js";
import { generateApiRedirectData } from "./generateApiRedirectData.js";

interface Arguments {
  [x: string]: unknown;
  package?: string;
  currentApisOnly: boolean;
  skipDownload: boolean;
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
    .option("skip-download", {
      type: "boolean",
      default: false,
      description: "Don't redownload docs from Box",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();
  await validateGitStatus();

  for (const pkgName of Pkg.VALID_NAMES) {
    if (args.package && pkgName != args.package) {
      continue;
    }

    const [historicalVersions, currentVersion] = await getReleasedVersions(
      pkgName,
      args.currentApisOnly,
    );
    const maybeDevVersion = await getDevVersion(pkgName);

    await processVersions(
      pkgName,
      args.skipDownload,
      historicalVersions,
      currentVersion,
      maybeDevVersion,
    );
  }

  await generateHistoricalRedirects();
  await generateApiRedirectData();

  console.log(`Each regenerated version has been saved as a distinct commit. If the changes are
too large for one single PR, consider splitting it up into multiple PRs by using
git cherry-pick or git rebase -i so each PR only has the commits it wants to target.`);
});

async function processVersions(
  pkgName: string,
  skipDownload: boolean,
  historicalVersions: string[],
  currentVersion: string,
  maybeDevVersion: string | undefined,
): Promise<void> {
  for (const historicalVersion of historicalVersions) {
    await regenerateVersion(
      pkgName,
      historicalVersion,
      skipDownload,
      "historical",
    );
  }
  await regenerateVersion(pkgName, currentVersion, skipDownload);
  if (maybeDevVersion) {
    await regenerateVersion(pkgName, maybeDevVersion, skipDownload, "dev");
  }
}

async function regenerateVersion(
  pkgName: string,
  version: string,
  skipDownload: boolean,
  typeArgument?: "historical" | "dev",
): Promise<void> {
  const command = ["npm", "run", "gen-api", "--", "-p", pkgName, "-v", version];
  if (typeArgument) {
    command.push(`--${typeArgument}`);
  }
  if (skipDownload) {
    command.push("--skip-download");
  }

  try {
    await $`${command}`;
    if ((await gitStatus()) !== "") {
      await gitCommit(`Regenerate ${pkgName} ${version}`);
      console.log(`🚀 ${pkgName} ${version} regenerated correctly`);
    } else {
      console.log(`✅ ${pkgName} ${version} is already up-to-date`);
    }
  } catch (_) {
    await gitRestore(".");
    console.error(`❌ ${pkgName} ${version} failed to regenerate`);
  }
}

async function getDevVersion(pkgName: string): Promise<string | undefined> {
  const devPath = `docs/api/${pkgName}/dev`;

  if (await pathExists(devPath)) {
    return await readApiFullVersion(devPath);
  }

  return undefined;
}

async function getReleasedVersions(
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
      const historicalVersion = await readApiFullVersion(
        `${pkgDocsPath}/${folder.name}`,
      );
      historicalVersions.push(historicalVersion);
    }
  }

  const currentVersion = await readApiFullVersion(pkgDocsPath);
  return [historicalVersions, currentVersion];
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
