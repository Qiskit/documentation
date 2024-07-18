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
import { globby } from "globby";
import { readFile, writeFile } from "fs/promises";
import { mkdirp } from "mkdirp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import transformLinks from "transform-markdown-links";

import { pathExists, getRoot } from "../../lib/fs";
import { zxMain } from "../../lib/zx";
import { Pkg } from "../../lib/api/Pkg";

interface Arguments {
  [x: string]: unknown;
  package: string;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: Pkg.VALID_NAMES,
      demandOption: true,
      description: "Which package to convert",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();

  const pkgName = Pkg.VALID_NAMES.find((pkgName) => pkgName === args.package);
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

  await copyApiDocsAndUpdateLinks(pkgName, versionWithoutPatch);
  await generateJsonFiles(
    pkgName,
    packageInfo.version,
    versionWithoutPatch,
    projectNewHistoricalFolder,
  );
  await copyImages(pkgName, versionWithoutPatch);
  await copyObjectsInv(pkgName, versionWithoutPatch);
});

async function copyApiDocsAndUpdateLinks(
  pkgName: string,
  versionWithoutPatch: string,
) {
  console.log("Generating API docs");
  const filePaths = await globby(`docs/api/${pkgName}/*.mdx`);
  for (let filePath of filePaths) {
    if (filePath.endsWith("release-notes.mdx")) {
      continue;
    }
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

  const releaseNotePath = `${getRoot()}/docs/api/${pkgName}/release-notes/${versionWithoutPatch}.mdx`;
  if (await pathExists(releaseNotePath)) {
    updateLinksFile(
      pkgName,
      versionWithoutPatch,
      releaseNotePath,
      releaseNotePath,
    );
  }
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

  // Regex to capture the links starting by /api/projectName and not followed
  // by any subfolder starting with a number (historical version folders)
  // or a release note file
  const linksToUptade = new RegExp(
    '"url": "/api/' + pkgName + "(?!/release-notes)(?!/[0-9])",
    "g",
  );
  tocFile = tocFile.replace(
    linksToUptade,
    `"url": "/api/${pkgName}/${versionWithoutPatch}`,
  );
  await writeFile(`${projectNewHistoricalFolder}/_toc.json`, tocFile + "\n");
}

async function copyImages(pkgName: string, versionWithoutPatch: string) {
  console.log("Copying images");
  const imageDirSource = `${getRoot()}/public/images/api/${pkgName}/`;
  const imageDirDest = `${getRoot()}/public/images/api/${pkgName}/${versionWithoutPatch}`;
  await mkdirp(imageDirDest);
  await $`find ${imageDirSource}/* -maxdepth 0 -type f | grep -v "release_notes" | xargs -I {} cp -a {} ${imageDirDest}`;
}

async function copyObjectsInv(pkgName: string, versionWithoutPatch: string) {
  console.log("Copying objects.inv");
  const sourceDir = `${getRoot()}/public/api/${pkgName}`;
  const destDir = `${getRoot()}/public/api/${pkgName}/${versionWithoutPatch}`;
  await mkdirp(destDir);
  await $`cp -a ${sourceDir}/objects.inv ${destDir}`;
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
  // or a release note file
  const regexAbsolutePath = new RegExp(
    "/api/" + pkgName + "/(?!release-notes)(?![0-9])",
  );
  markdown = transformLinks(markdown, (link, _) =>
    link.replace(regexAbsolutePath, `/api/${pkgName}/${versionWithoutPatch}/`),
  );

  await writeFile(dest, markdown);
}
