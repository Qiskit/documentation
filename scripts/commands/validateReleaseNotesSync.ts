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

import { zxMain } from "../lib/zx";
import { globby } from "globby";
import { getRoot } from "../lib/fs";
import { readFile, readdir } from "fs/promises";

const PACKAGES: string[] = [
  "qiskit-ibm-runtime",
  "qiskit-ibm-provider",
  "qiskit",
];

zxMain(async () => {
  let allGood = true;

  for (let pkgName of PACKAGES) {
    console.log(`${pkgName} release-notes:`);
    const errorMessages = await compareReleaseNotes(pkgName);

    errorMessages.length > 0
      ? errorMessages.forEach((error) => console.error(error))
      : console.log("✅ The release notes are synchronized");
    console.log("\n");

    allGood = allGood && errorMessages.length == 0;
  }

  if (!allGood) {
    console.error(
      "To synchronize the release notes, replace the indicated files with a copy from the current API.",
      "You can find the release notes in the following files/folders:\n",
      " - qiskit-ibm-runtime: docs/api/qiskit-ibm-runtime/release-notes.md\n",
      " - qiskit-ibm-provider: docs/api/qiskit-ibm-provider/release-notes.md\n",
      " - qiskit: docs/api/qiskit/release-notes/*.md\n",
      "All files except index.md on qiskit should be identical for every API version.",
    );
    process.exit(1);
  }
});

/**
 * Returns an array of strings with all the release notes that are not
 * synchronized in a given project
 */
async function compareReleaseNotes(projectName: string): Promise<string[]> {
  const pathAPIFolder = `${getRoot()}/docs/api/${projectName}/`;
  const errorMessages: string[] = [];

  // Dictionary to store the markdown read from each release notes file
  // to avoid reading the same files multiple times
  const originalReleaseNotes: { [id: string]: string } = {};

  // All projects except Qiskit have a single release notes file.
  // Therefore, we only need to validate the `release-notes.md` file.
  if (projectName != "qiskit") {
    originalReleaseNotes["release-notes.md"] = await readFile(
      `${pathAPIFolder}/release-notes.md`,
      { encoding: "utf8" },
    );
  } else {
    const releaseNotesFiles = await globby(
      `${pathAPIFolder}/release-notes/[!index.md]*.md`,
    );

    for (let filePath of releaseNotesFiles) {
      const fileName = filePath.replace(/^.*[\\/]/, "");
      originalReleaseNotes[fileName] = await readFile(filePath, {
        encoding: "utf8",
      });
    }
  }

  const historicalFolders = (
    await readdir(`${pathAPIFolder}`, { withFileTypes: true })
  ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

  for (let folder of historicalFolders) {
    for (let [fileName, originalMarkdown] of Object.entries(
      originalReleaseNotes,
    )) {
      const historialReleaseNotes =
        projectName == "qiskit"
          ? `${pathAPIFolder}/${folder.name}/release-notes/${fileName}`
          : `${pathAPIFolder}/${folder.name}/${fileName}`;

      const markdownReleaseNotes = await readFile(historialReleaseNotes, {
        encoding: "utf8",
      });

      if (originalMarkdown != markdownReleaseNotes) {
        errorMessages.push(
          `❌ Version ${folder.name}: ${fileName} is not synchronized`,
        );
      }
    }
  }

  return errorMessages;
}
