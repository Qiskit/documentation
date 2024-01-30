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
import { pathExists, getRoot } from "../fs";
import { mkdirp } from "mkdirp";
import { Pkg } from "./Pkg";

export function getArtifactID(url: string) {
  return url.replace(/.*\//, "");
}

export async function downloadAndStoreCIArtifact(
  pkgName: string,
  artifactUrl: string,
  artifactStorage: string,
  destination: string,
) {
  const artifactId = getArtifactID(artifactUrl);

  await $`gh api \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    /repos/Qiskit/${pkgName}/actions/artifacts/${artifactId}/zip > ${destination}/artifact.zip`;

  await $`cp -a ${destination}/artifact.zip ${artifactStorage}/artifact.zip`;
}

export async function getStoredCIArtifact(
  pkgName: string,
  pkgVersionWithoutPatch: string,
  artifactStorage: string,
  destination: string,
) {
  if (!(await pathExists(artifactStorage))) {
    throw new Error(
      `Package ${pkgName} version ${pkgVersionWithoutPatch} doesn't have an artifact stored. You can download one using the '-a <artifact-url>' argument.`,
    );
  }

  await $`cp -a ${artifactStorage}/artifact.zip ${destination}/artifact.zip`;
}

export async function loadCIArtifact(
  pkg: Pkg,
  artifactUrl: string | undefined,
  destination: string,
) {
  if (await pathExists(destination)) {
    await $`rm -rf ${destination}/*`;
  } else {
    await mkdirp(destination);
  }

  const artifactStorage = `${getRoot()}/scripts/api-artifacts/${pkg.name}/${
    pkg.versionWithoutPatch
  }`;

  if (artifactUrl) {
    await downloadAndStoreCIArtifact(
      pkg.name,
      artifactUrl,
      artifactStorage,
      destination,
    );
  } else {
    await getStoredCIArtifact(
      pkg.name,
      pkg.versionWithoutPatch,
      artifactStorage,
      destination,
    );
  }

  await $`unzip -qqo ${destination}/artifact.zip -d ${destination}/artifact`;
}
