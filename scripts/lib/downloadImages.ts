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

import { pathExists } from './fs';
import { mkdirp } from 'mkdirp';
import { dirname } from 'path';
import { createWriteStream } from 'node:fs';
import { finished } from 'stream/promises';
import { Readable } from 'stream';
import pMap from 'p-map';

export async function downloadImages(images: Array<{ src: string; dest: string }>) {
  await pMap(
    images,
    async (img) => {
      if (await pathExists(img.dest)) return;
      const response = await fetch(img.src);
      if (response.ok) {
        await mkdirp(dirname(img.dest));
        const stream = createWriteStream(img.dest);
        await finished(Readable.fromWeb(response.body as any).pipe(stream));
      } else {
        console.log(`Error downloading ${img.src} to ${img.dest}`);
      }
    },
    { concurrency: 4 }
  );
}
