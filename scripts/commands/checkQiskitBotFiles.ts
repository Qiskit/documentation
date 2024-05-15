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
  "docs/start/_toc",
  "docs/build/_toc",
  "docs/build/bit-ordering",
  "docs/build/operators-overview",
  "docs/build/save-circuits",
  "docs/transpile/_toc",
  "docs/transpile/create-a-transpiler-plugin",
  "docs/transpile/custom-backend",
  "docs/transpile/transpiler-plugins",
  "docs/verify/_toc",
  "docs/verify/local-testing-mode",
  "docs/verify/plot-quantum-states",
  "docs/verify/using-ibm-quantum-simulators",
  "docs/run/_toc",
  "docs/run/circuit-execution",
  "docs/run/configure-runtime-compilation",
  "docs/run/execution-modes-faq",
  "docs/run/execution-modes",
  "docs/run/native-gates",
  "docs/run/save-jobs",
  "docs/run/visualize-results",
]);

const ALLOWED_INEXISTENT_FILES = new Set([
  "docs/build/qubit-order",
  "docs/build/operators_overview",
  "docs/run/reserve-system-time",
  "docs/migration-guides/index",
  "docs/migration-guides/qiskit-runtime",
  "docs/migration-guides/qiskit-runtime-examples",
  "docs/migration-guides/qiskit-quantum-instance",
  "docs/migration-guides/qiskit-algorithms-module",
  "docs/migration-guides/qiskit-opflow-module",
]);

type qiskitBotConfig = {
  always_notify: boolean;
  notification_prelude: string;
  notifications: { [id: string]: string[] };
};

const GLOBS = [
  "docs/start/*",
  "docs/build/*",
  "docs/transpile/*",
  "docs/verify/*",
  "docs/run/*",
  "docs/migration-guides/*",
];

async function main() {
  const qiskitBotFiles = await getQiskitBotFiles();
  const filesToCheck = await getFilesToCheck();

  const missingFiles = [...filesToCheck].filter(
    (file) => !qiskitBotFiles.has(file) && !ALLOWED_OWNERLESS_FILES.has(file),
  );
  const leftoverFiles = [...qiskitBotFiles].filter(
    (file) => !filesToCheck.has(file) && !ALLOWED_INEXISTENT_FILES.has(file),
  );

  if (missingFiles.length > 0) showMissingFilesMessage(missingFiles);

  if (leftoverFiles.length > 0) showLeftoverFilesMessage(leftoverFiles);

  if (missingFiles.length == 0 && leftoverFiles.length == 0)
    console.log("All files have an owner in the Qiskit bot config ✅\n");
  else process.exit(1);
}

async function getQiskitBotFiles(): Promise<Set<string>> {
  const qiskitBotConfig = "qiskit_bot.yaml";
  const yaml = load(
    await fs.readFile(qiskitBotConfig, "utf8"),
  ) as qiskitBotConfig;
  return new Set(Object.keys(yaml.notifications));
}

async function getFilesToCheck(): Promise<Set<string>> {
  const files = (await globby(GLOBS)).map((file) => removeFileExtension(file));
  return new Set(files);
}

function removeFileExtension(file: string): string {
  const parsed = path.parse(file);
  return `${parsed.dir}/${parsed.name}`;
}

function showMissingFilesMessage(missingFiles: string[]): void {
  console.log(
    "The following files don't have an owner in `qiskit_bot.yaml`:\n",
  );
  missingFiles.forEach((file) => console.log(`❌ ${file}`));

  console.log(
    "\nAdd an owner to the files in qiskit_bot.yaml if they are new, or update the file names in qiskit_bot.yaml if the were renamed.",
    "If you don't want them to be tracked by the qiskit bot, you can append the files to the `ALLOWED_OWNERLESS_FILES` list at the beginning of `scripts/commands/checkQiskitBotFiles.ts`.\n",
  );
}

function showLeftoverFilesMessage(leftoverFiles: string[]): void {
  console.log(
    "The following files don't exist, but they have an entry in `qiskit_bot.yaml`:\n",
  );
  leftoverFiles.forEach((file) => console.log(`❔ ${file}`));
  console.log(
    "\nRemove the files from the qiskit_bot.yaml, or rename the file in qiskit_bot.yaml if the file was renamed.",
    "If the files will exist in the future, you can append the files to the `ALLOWED_INEXISTENT_FILES` list at the beginning of `scripts/commands/checkQiskitBotFiles.ts`.\n",
  );
}

main().then(() => process.exit());
