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

import { pathExists } from "./fs";
import { mkdirp } from "mkdirp";
import { dirname } from "path";
import { createWriteStream } from "node:fs";
import { finished } from "stream/promises";
import { Readable } from "stream";
import pMap from "p-map";
import { startWebServer, closeWebServer } from "../lib/webServer";

export async function downloadImages(
  images: Array<{ src: string; dest: string }>,
  originalImagesFolderPath: string,
) {
  const missingImages = (
    await Promise.all(
      images.map(async (img) => {
        const exists = await pathExists(img.dest);
        return exists ? [] : img;
      }),
    )
  ).flat();

  if (missingImages.length == 0) {
    return;
  }

  await startWebServer(originalImagesFolderPath);
  try {
    await pMap(
      missingImages,
      async (img) => {
        downloadBlob(img.src, img.dest);
      },
      { concurrency: 4 },
    );
  } finally {
    await closeWebServer();
  }
}

export async function downloadBlob(src: string, dest: string) {
  const response = await fetch(src);
  if (response.ok) {
    await mkdirp(dirname(dest));
    const stream = createWriteStream(dest);
    await finished(Readable.fromWeb(response.body as any).pipe(stream));
  } else {
    console.log(`Error downloading ${src} to ${dest}`);
  }
}
