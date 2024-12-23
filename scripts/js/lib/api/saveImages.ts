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

import { mkdirp } from "mkdirp";
import pMap from "p-map";
import { copyFile } from "fs/promises";

import { Pkg } from "./Pkg.js";
import { Image } from "./HtmlToMdResult.js";
import { pathExists, rmFilesInFolder } from "../fs.js";

function skipReleaseNote(imgFileName: string, pkg: Pkg): boolean {
  const isReleaseNote =
    imgFileName.includes("release_notes") ||
    imgFileName.includes("release-notes");
  if (!isReleaseNote) return false;

  if (pkg.hasSeparateReleaseNotes()) {
    // If the pkg has dedicated release notes per release, we should copy its images
    // unless it's the dev version. We don't (yet) support release notes for dev versions:
    // https://github.com/Qiskit/documentation/issues/1296
    return pkg.isDev();
  } else {
    // Else, if the pkg has only a single release note file, only 'latest' should copy images.
    return pkg.isLatest();
  }
}

export async function saveImages(
  images: Image[],
  originalImagesFolderPath: string,
  publicBaseFolder: string,
  pkg: Pkg,
) {
  const destFolder = pkg.outputDir(`${publicBaseFolder}/images`);
  if (!(await pathExists(destFolder))) {
    await mkdirp(destFolder);
  } else if (pkg.isDev()) {
    // We don't want to store images from other versions when we generate a
    // different dev version
    await rmFilesInFolder(destFolder);
  }

  await pMap(images, async (img) => {
    if (skipReleaseNote(img.fileName, pkg)) {
      return;
    }

    await copyFile(
      `${originalImagesFolderPath}/${img.fileName}`,
      `${publicBaseFolder}/${img.dest}`,
    );
  });
}
