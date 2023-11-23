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
      description: "Which package to update",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();

  const pkg = PACKAGES.find((pkg) => pkg === args.package);
  if (pkg === undefined) {
    throw new Error(`Unrecognized package: ${args.package}`);
  }

  const packageFile = await readFile(
    `${getRoot()}/docs/api/${pkg}/_package.json`,
    { encoding: "utf8" },
  );
  const packageInfo = JSON.parse(packageFile);

  const versionMatch = packageInfo.version.match(/^(\d+\.\d+)/);
  if (versionMatch === null) {
    throw new Error(
      `Invalid --version. Expected the format 0.44.0, but received ${args.version}`,
    );
  }
  const versionWithoutPatch = versionMatch[0];

  const projectNewHistoricalFolder = `${getRoot()}/docs/api/${pkg}/${versionWithoutPatch}`;
  if (await pathExists(projectNewHistoricalFolder)) {
    console.error(
      `The package ${pkg} has already an historical ${versionWithoutPatch} version`,
    );
    process.exit(1);
  }

  await mkdirp(projectNewHistoricalFolder);
  await mkdirp(`${projectNewHistoricalFolder}/release-notes`);
  await mkdirp(`${projectNewHistoricalFolder}/apidoc`);
  await mkdirp(`${projectNewHistoricalFolder}/stubs`);

  copyApiDocs(pkg, versionWithoutPatch)
  copyReleaseNotes(pkg, versionWithoutPatch);
  generateJsonFiles(pkg, packageInfo.version, versionWithoutPatch, projectNewHistoricalFolder);
  copyImages(pkg,versionWithoutPatch)
});

async function copyApiDocs(pkg: string, versionWithoutPatch: string) {
    console.log("Generating API docs");
    const filePaths = await globby(`docs/api/${pkg}/*.md`);
    for(let filePath of filePaths){
        updateLinksFile(
            pkg,
            versionWithoutPatch,
            filePath,
            filePath.replace(`/api/qiskit`,"/api/qiskit/"+versionWithoutPatch),
          );
    }
  }

async function copyReleaseNotes(pkg: string, versionWithoutPatch: string) {
    console.log("Generating release notes");
    await $`find docs/api/${pkg}/release-notes/* -maxdepth 0 -type f -not -path "*index.md" | xargs -I {} cp -a {}  docs/api/${pkg}/${versionWithoutPatch}/release-notes/`;
  updateLinksFile(
    pkg,
    versionWithoutPatch,
    `${getRoot()}/docs/api/${pkg}/release-notes/index.md`,
    `${getRoot()}/docs/api/${pkg}/${versionWithoutPatch}/release-notes/index.md`,
  );
}

async function generateJsonFiles(pkg: string, version: string, versionWithoutPatch: string, projectNewHistoricalFolder: string){
    console.log("Generating version file");
    const pkg_json = { name: pkg, version: version };
    await writeFile(
      `${projectNewHistoricalFolder}/_package.json`,
      JSON.stringify(pkg_json, null, 2) + "\n",
    );

    console.log("Generating toc");
    let tocFile = await readFile(
        `${getRoot()}/docs/api/${pkg}/_toc.json`,
        { encoding: "utf8" },
      );
    tocFile = tocFile.replaceAll(`"url": "/api/${pkg}/`, `"url": "/api/${pkg}/${versionWithoutPatch}/`);
    await writeFile(
      `${projectNewHistoricalFolder}/_toc.json`,
      tocFile + "\n",
    );
}

async function copyImages(pkg: string, versionWithoutPatch: string){
    console.log("Copying images");
    const imageDirSource = `${getRoot()}/public/images/api/${pkg}/`;
    const imageDirDest = `${getRoot()}/public/images/api/${pkg}/${versionWithoutPatch}`;
    await mkdirp(imageDirDest);
    await $`find ${imageDirSource}/* -maxdepth 0 -type f | xargs -I {} cp -a {} ${imageDirDest}`;
}

async function updateLinksFile(
  pkg: string,
  versionWithoutPatch: string,
  source: string,
  dest: string,
) {
  let markdown = await readFile(source, { encoding: "utf8" });

  // Regex to capture the links containing /api/projectName and not followed
  // by any subfolder starting with a number (historical version folders)
  const regexAbsolutePath = new RegExp("/api/" + pkg + "/(?![0-9])");
  markdown = transformLinks(markdown, (link, _) =>
    link.replace(regexAbsolutePath, `/api/${pkg}/${versionWithoutPatch}/`),
  );

  await writeFile(dest, markdown);
}