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

import { $ } from "zx";
import { zxMain } from "../lib/zx";
import { globby } from "globby";
import { pathExists, getRoot } from "../lib/fs";
import { readFile, writeFile } from "fs/promises";
import { mkdirp } from "mkdirp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import transformLinks from "transform-markdown-links";

interface Arguments {
  [x: string]: unknown;
  package: string;
}

const PACKAGES: string[] = [
  "qiskit-ibm-runtime",
  "qiskit-ibm-provider",
  "qiskit",
];

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: PACKAGES,
      demandOption: true,
      description: "Which package to convert",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();

  const pkgName = PACKAGES.find((pkgName) => pkgName === args.package);
  if (pkgName === undefined) {
    throw new Error(`Unrecognized package: ${args.package}`);
  }

  const packageFile = await readFile(
    `${getRoot()}/docs/api/${pkgName}/_package.json`,
    { encoding: "utf8" },
  );
  const packageInfo = JSON.parse(packageFile);
  const versionMatch = packageInfo.version.match(/^(\d+\.\d+)/);
  const versionWithoutPatch = versionMatch[0];

  const projectNewHistoricalFolder = `${getRoot()}/docs/api/${pkgName}/${versionWithoutPatch}`;
  if (await pathExists(projectNewHistoricalFolder)) {
    console.error(
      `${pkgName} has already a historical version ${versionWithoutPatch}.`,
      `Manually delete the existing folder if you intend to overwrite it.`,
    );
    process.exit(1);
  }

  await mkdirp(projectNewHistoricalFolder);

  copyApiDocsAndUpdateLinks(pkgName, versionWithoutPatch);
  generateJsonFiles(
    pkgName,
    packageInfo.version,
    versionWithoutPatch,
    projectNewHistoricalFolder,
  );
  copyImages(pkgName, versionWithoutPatch);

  if (pkgName == "qiskit") {
    await mkdirp(`${projectNewHistoricalFolder}/release-notes`);
    copyReleaseNotesFolder(pkgName, versionWithoutPatch);
  }
});

async function copyApiDocsAndUpdateLinks(
  pkgName: string,
  versionWithoutPatch: string,
) {
  console.log("Generating API docs");
  const filePaths = await globby(`docs/api/${pkgName}/*.md`);
  for (let filePath of filePaths) {
    updateLinksFile(
      pkgName,
      versionWithoutPatch,
      filePath,
      filePath.replace(
        `/api/${pkgName}/`,
        `/api/${pkgName}/${versionWithoutPatch}/`,
      ),
    );
  }
}

async function copyReleaseNotesFolder(
  pkgName: string,
  versionWithoutPatch: string,
) {
  console.log("Generating release notes");
  await $`find docs/api/${pkgName}/release-notes/* -maxdepth 0 -type f -not -path "*index.md" | xargs -I {} cp -a {}  docs/api/${pkgName}/${versionWithoutPatch}/release-notes/`;
  updateLinksFile(
    pkgName,
    versionWithoutPatch,
    `${getRoot()}/docs/api/${pkgName}/release-notes/index.md`,
    `${getRoot()}/docs/api/${pkgName}/${versionWithoutPatch}/release-notes/index.md`,
  );
}

async function generateJsonFiles(
  pkgName: string,
  version: string,
  versionWithoutPatch: string,
  projectNewHistoricalFolder: string,
) {
  console.log("Generating version file");
  const pkgName_json = { name: pkgName, version: version };
  await writeFile(
    `${projectNewHistoricalFolder}/_package.json`,
    JSON.stringify(pkgName_json, null, 2) + "\n",
  );

  console.log("Generating toc");
  let tocFile = await readFile(`${getRoot()}/docs/api/${pkgName}/_toc.json`, {
    encoding: "utf8",
  });
  tocFile = tocFile.replaceAll(
    `"url": "/api/${pkgName}/`,
    `"url": "/api/${pkgName}/${versionWithoutPatch}/`,
  );
  await writeFile(`${projectNewHistoricalFolder}/_toc.json`, tocFile + "\n");
}

async function copyImages(pkgName: string, versionWithoutPatch: string) {
  console.log("Copying images");
  const imageDirSource = `${getRoot()}/public/images/api/${pkgName}/`;
  const imageDirDest = `${getRoot()}/public/images/api/${pkgName}/${versionWithoutPatch}`;
  await mkdirp(imageDirDest);
  await $`find ${imageDirSource}/* -maxdepth 0 -type f | xargs -I {} cp -a {} ${imageDirDest}`;
}

async function updateLinksFile(
  pkgName: string,
  versionWithoutPatch: string,
  source: string,
  dest: string,
) {
  let markdown = await readFile(source, { encoding: "utf8" });

  // Regex to capture the links containing /api/projectName and not followed
  // by any subfolder starting with a number (historical version folders)
  const regexAbsolutePath = new RegExp("/api/" + pkgName + "/(?![0-9])");
  markdown = transformLinks(markdown, (link, _) =>
    link.replace(regexAbsolutePath, `/api/${pkgName}/${versionWithoutPatch}/`),
  );

  await writeFile(dest, markdown);
}
