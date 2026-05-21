// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

// Checks that every tutorial slug referenced in Pkg.tutorials exists as a
// .ipynb file under docs/tutorials/. Run via `npm run check:addon-tutorials`.

import { readdir } from "fs/promises";

import { Pkg } from "../lib/api/Pkg.js";

async function main(): Promise<void> {
  const tutorialFiles = await readdir("docs/tutorials");
  const available = new Set(
    tutorialFiles
      .filter((f) => f.endsWith(".ipynb"))
      .map((f) => f.replace(/\.ipynb$/, "")),
  );

  const errors: string[] = [];

  for (const name of Pkg.ADDON_NAMES) {
    // Use a throwaway version — only the name matters for tutorial config.
    const pkg = await Pkg.fromArgs(name, "0.1.0", "0.1", "latest");
    for (const slug of pkg.tutorials) {
      if (!available.has(slug)) {
        errors.push(
          `  ${name}: '${slug}' not found in docs/tutorials/ (no docs/tutorials/${slug}.ipynb)`,
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error(
      "❌ Addon tutorial slugs reference notebooks that don't exist:\n",
    );
    errors.forEach((e) => console.error(e));
    console.error(
      "\nUpdate the tutorials list in Pkg.fromArgs() to match files in docs/tutorials/.",
    );
    process.exit(1);
  }

  console.log("✅ All addon tutorial slugs are valid.");
}

main().then(() => process.exit());
