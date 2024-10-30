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

import { createWriteStream } from "node:fs";
import { finished } from "stream/promises";
import { Readable } from "stream";
import fs from "fs";

import { $ } from "zx";
import { mkdirp } from "mkdirp";

import { pathExists } from "../fs.js";
import { Pkg } from "./Pkg.js";
import { getHeaders } from "../links/ExternalLink.js";

async function downloadFromBox(
  pkgName: string,
  artifactUrl: string,
  destination: string,
) {
  const response = await fetch(artifactUrl, {
    headers: getHeaders(artifactUrl),
  });
  if (response.ok) {
    const stream = createWriteStream(destination);
    await finished(Readable.fromWeb(response.body as any).pipe(stream));
  } else {
    throw new Error(
      `Error downloading the ${pkgName} artifact: ${response.status}, ${response.statusText}`,
    );
  }
}

export async function downloadSphinxArtifact(pkg: Pkg, artifactFolder: string) {
  if (await pathExists(artifactFolder)) {
    await $`rm -rf ${artifactFolder}/*`;
  } else {
    await mkdirp(artifactFolder);
  }

  const artifactJson = JSON.parse(
    fs.readFileSync(`scripts/config/api-html-artifacts.json`, "utf-8"),
  );

  const artifactName = pkg.isDev() ? "dev" : `${pkg.versionWithoutPatch}`;
  if (!(`${artifactName}` in artifactJson[`${pkg.name}`])) {
    throw new Error(
      `Package ${pkg.name} version ${pkg.versionWithoutPatch} doesn't have an artifact stored. You can add one to https://ibm.ent.box.com/folder/246867452622
      following the steps detailed in the \`Generate the API docs\` section on the repo's README. If you are not an IBMer with access to the Box folder,
      you can ask in your pull request for a maintainer to help you. In the meantime, you can use another URL in api-html-artifacts.json, such as GitHub or
      even localhost for a server you start up; the URL needs to result in downloading the zip file.`,
    );
  }
  const artifactUrl = artifactJson[`${pkg.name}`][`${artifactName}`];

  await downloadFromBox(
    pkg.name,
    artifactUrl,
    `${artifactFolder}/artifact.zip`,
  );

  await $`unzip -qqo ${artifactFolder}/artifact.zip -d ${artifactFolder}/artifact`;
}
