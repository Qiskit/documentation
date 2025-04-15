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

import { copyFile } from "fs/promises";
import { extname } from "node:path";

import pMap from "p-map";
import { $ } from "zx";
import { mkdirp } from "mkdirp";

import { Image } from "./HtmlToMdResult.js";
import { Pkg } from "./Pkg.js";
import { pathExists } from "../fs.js";

function skipReleaseNote(imgFileName: string, pkg: Pkg): boolean {
  const isReleaseNote =
    imgFileName.includes("release_notes") ||
    imgFileName.includes("release-notes");
  if (!isReleaseNote) return false;

  // Release note images before Qiskit 0.45 were not actually used and we don't have
  // the image files stored.
  if (pkg.isProblematicLegacyQiskit()) return true;

  // If we're linking to another package's release notes, we skip generating the
  // release notes.
  if (pkg.releaseNotesConfig.linkToPackage) return true;

  if (pkg.hasSeparateReleaseNotes()) {
    // If the pkg has dedicated release notes per release, we should copy its images
    // unless it's the dev version. We don't (yet) support release notes for dev versions:
    // https://github.com/Qiskit/documentation/issues/1296
    return pkg.isDev();
  } else {
    // Else, if the pkg has only a single release note file, only 'latest' should copy images.
    return !pkg.isLatest();
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
  }

  await pMap(images, async (img) => {
    if (skipReleaseNote(img.fileName, pkg)) {
      return;
    }
    const source = `${originalImagesFolderPath}/${img.fileName}`;
    const dest = `${publicBaseFolder}/${img.dest}`;

    if (extname(source) === extname(dest)) {
      await copyFile(source, dest);
    } else {
      try {
        await $`magick ${source} ${dest}`;
      } catch (err) {
        console.error(
          "Image conversion failed, make sure you have ImageMagick installed (https://imagemagick.org/index.php)",
        );
        throw err;
      }
    }
  });
}
