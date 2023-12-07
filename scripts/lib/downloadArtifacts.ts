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
import { pathExists, getRoot } from "../lib/fs";
import { mkdirp } from "mkdirp";

export function getArtifactID(url: string) {
  return url.replace(/.*\//, "");
}

export async function downloadCIArtifact(
  pkgName: string,
  artifactUrl: string,
  destination: string,
) {
  const artifactId = getArtifactID(artifactUrl);

  if (!(await pathExists(destination))) {
    await mkdirp(destination);
  }

  await $`gh api \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    /repos/Qiskit/${pkgName}/actions/artifacts/${artifactId}/zip > ${destination}/artifact.zip`;

  await $`unzip -qqo ${destination}/artifact.zip -d ${destination}/artifact`;
}
