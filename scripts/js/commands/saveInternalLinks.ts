// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { writeFile } from "fs/promises";

import { FileBatch } from "../lib/links/FileBatch.js";

async function main() {
  const fileBatch = await FileBatch.fromGlobs(
    [
      "{docs,learning}/**/*.{ipynb,mdx}",
      "!docs/api/*/[0-9]*/*",
      "!docs/api/*/dev/*",
      "!docs/api/qiskit/release-notes/*",
    ],
    [],
    "docs and learning",
  );
  const [loadedFiles] = await fileBatch.load();
  const normalizedFiles = loadedFiles.map((file) => ({
    path: file.path,
    anchors: Array.from(file.anchors).sort(),
  }));

  const fp = "scripts/config/internal-links.json";
  await writeFile(fp, JSON.stringify(normalizedFiles, null, 2));
  console.log(`✅ Wrote internal links to ${fp}`);
}

main().then(() => process.exit());
