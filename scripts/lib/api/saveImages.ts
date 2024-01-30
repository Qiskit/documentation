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

import { Pkg } from "./Pkg";
import { Image } from "./HtmlToMdResult";
import { pathExists } from "../fs";

export async function saveImages(
  images: Image[],
  originalImagesFolderPath: string,
  pkg: Pkg,
) {
  const destFolder = pkg.outputDir("public/images");
  if (!(await pathExists(destFolder))) {
    await mkdirp(destFolder);
  }

  await pMap(images, async (img) => {
    // The release notes images are only saved in the current version to
    // avoid having duplicate files.
    if (img.fileName.includes("release_notes") && pkg.historical) {
      return;
    }

    await copyFile(
      `${originalImagesFolderPath}/${img.fileName}`,
      `public/${img.dest}`,
    );
  });
}
