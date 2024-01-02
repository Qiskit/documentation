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
import { Pkg } from "./sharedTypes";
import { pathExists } from "./fs";
import { mkdirp } from "mkdirp";

export async function saveImages(
  images: Array<{ src: string; dest: string }>,
  originalImagesFolderPath: string,
  pkg: Pkg,
) {
  const imagesDestinationFolder = pkg.historical
    ? `public/images/api/${pkg.name}/${pkg.versionWithoutPatch}`
    : `public/images/api/${pkg.name}`;
  if (!(await pathExists(imagesDestinationFolder))) {
    await mkdirp(imagesDestinationFolder);
  }

  for (const img of images) {
    const imgName = img.src.split("/").pop() || "";

    // The release notes images are only saved in the current version to
    // avoid having duplicate files.
    if (imgName.includes("release_notes") && pkg.historical) {
      continue;
    }

    await $`cp ${originalImagesFolderPath}/${imgName} public/${img.dest}`;
  }
}
