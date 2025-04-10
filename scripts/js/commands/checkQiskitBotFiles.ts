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

import fs from "fs/promises";
import path from "path";
import { load } from "js-yaml";
import { globby } from "globby";

const ALLOWED_OWNERLESS_FILES = new Set([
  "docs/guides/_toc",
  "docs/guides/bit-ordering",
  "docs/guides/operators-overview",
  "docs/guides/save-circuits",
  "docs/guides/create-a-transpiler-plugin",
  "docs/guides/custom-backend",
  "docs/guides/transpiler-plugins",
  "docs/guides/local-testing-mode",
  "docs/guides/plot-quantum-states",
  "docs/guides/using-ibm-quantum-simulators",
  "docs/guides/circuit-execution",
  "docs/guides/configure-runtime-compilation",
  "docs/guides/native-gates",
  "docs/guides/save-jobs",
  "docs/guides/visualize-results",
  "docs/guides/create-transpiler-plugin",
  "docs/guides/intro-to-patterns",
  "docs/guides/optimize-for-hardware",
  "docs/guides/post-process-results",
  "docs/guides/configure-error-suppression",
  "docs/guides/repetition-rate-execution",
  "docs/guides/n2_fci",
  "docs/migration-guides/_toc",
  "docs/migration-guides/qiskit-1.0",
  "docs/migration-guides/qiskit-1.0-features",
  "docs/migration-guides/qiskit-1.0-installation",
]);

const ALLOWED_NONEXISTENT_FILES: Set<string> = new Set([]);

const GLOBS = ["docs/{guides,tutorials}/*", "docs/migration-guides/*"];

async function main() {
  const qiskitBotFiles = await getQiskitBotFiles();
  const filesToCheck = await getFilesToCheck();

  const missingFiles = filesToCheck.filter(
    (file) =>
      !qiskitBotFiles.includes(file) && !ALLOWED_OWNERLESS_FILES.has(file),
  );
  const leftoverFiles = qiskitBotFiles.filter(
    (file) =>
      !filesToCheck.includes(file) && !ALLOWED_NONEXISTENT_FILES.has(file),
  );

  if (missingFiles.length > 0) showMissingFilesMessage(missingFiles);

  if (leftoverFiles.length > 0) showLeftoverFilesMessage(leftoverFiles);

  if (missingFiles.length == 0 && leftoverFiles.length == 0) {
    console.log("All files have an owner in the Qiskit bot config ✅\n");
  } else {
    process.exit(1);
  }
}

async function getQiskitBotFiles(): Promise<string[]> {
  const qiskitBotConfig = "qiskit_bot.yaml";
  const yaml = load(await fs.readFile(qiskitBotConfig, "utf8")) as {
    notifications: { [id: string]: string[] };
  };
  return Object.keys(yaml.notifications).sort();
}

async function getFilesToCheck(): Promise<string[]> {
  return (await globby(GLOBS)).map((file) => removeFileExtension(file)).sort();
}

function removeFileExtension(file: string): string {
  const parsed = path.parse(file);
  return `${parsed.dir}/${parsed.name}`;
}

function showMissingFilesMessage(missingFiles: string[]): void {
  console.error(
    "The following files don't have an owner in `qiskit_bot.yaml`:\n",
  );
  missingFiles.forEach((file) => console.error(`❌ ${file}`));

  console.error(
    "\nAdd an owner to the files in qiskit_bot.yaml if they are new, or update the file names in qiskit_bot.yaml if the were renamed.",
    "If you don't want them to be tracked by the qiskit bot, you can append the files to the `ALLOWED_OWNERLESS_FILES` list at the beginning of `scripts/js/commands/checkQiskitBotFiles.ts`.\n",
  );
}

function showLeftoverFilesMessage(leftoverFiles: string[]): void {
  console.error(
    "The following files don't exist, but they have an entry in `qiskit_bot.yaml`:\n",
  );
  leftoverFiles.forEach((file) => console.error(`❔ ${file}`));
  console.error(
    "\nRemove the files from the qiskit_bot.yaml, or rename the file in qiskit_bot.yaml if the file was renamed.",
    "If the files will exist in the future, you can append the files to the `ALLOWED_NONEXISTENT_FILES` list at the beginning of `scripts/js/commands/checkQiskitBotFiles.ts`.\n",
  );
}

main().then(() => process.exit());
