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

import { zxMain } from "../lib/zx";
import { $ } from "zx";
import { globby } from "globby";
import { zip } from "lodash";

zxMain(async () => {
  const paths = await getStrippedImagePaths();
  const results = await Promise.all(paths.map((fp) => isImageUnused(fp)));
  const unused = zip(paths, results)
    .filter(([_fp, result]) => result)
    .map(([fp]) => `public/${fp}`);
  if (unused.length === 0) {
    console.log("✅ all images used");
  } else {
    console.error(
      `🙅 ${
        unused.length
      } stale images found. These images should usually be deleted:\n\n${unused.join(
        "\n",
      )}`,
    );
    process.exit(1);
  }
});

async function getStrippedImagePaths(): Promise<string[]> {
  const fullPaths = await globby("public/images/**");
  return fullPaths.map((fp) =>
    fp
      .split("public/")[1]
      // Dark mode variants won't show up in search. But as long
      // as the path with `@dark` removed is found, it's a valid file.
      .replace(/@dark/g, ""),
  );
}

async function isImageUnused(fp: string): Promise<boolean> {
  const grep = await $`git grep ${fp}`.quiet().catch((result) => result);
  return grep.stdout === "";
}
