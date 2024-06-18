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

import path from "path";
import { writeFile } from "fs/promises";

import { API } from "./api";
import { LocalTutorialData, readTutorialData } from "./local-tutorial-data";

interface Arguments {
  prNumber: number;
  changedFiles: string[];
  configPath: string;
  accessibleToInstance: string;
}

async function getChangedTutorials(
  args: Arguments,
): Promise<LocalTutorialData[]> {
  const changedDirectories = args.changedFiles.map((x) => path.dirname(x));
  const allTutorials = await readTutorialData(args.configPath);
  const changedTutorials = allTutorials.filter((t) =>
    changedDirectories.includes(t.local_path),
  );
  return changedTutorials;
}

function modifyTutorialForPreview(
  tutorial: LocalTutorialData,
  args: Arguments,
): LocalTutorialData {
  tutorial.title = `Preview (PR#${args.prNumber}): ${tutorial.title}`;
  tutorial.slug = `pr-${args.prNumber}-${tutorial.slug}`;
  tutorial.topics.push("PR preview");
  tutorial.required_instance_access = JSON.stringify([
    args.accessibleToInstance,
  ]);
  return tutorial;
}

function buildPrComment(tutorialPreviews: LocalTutorialData[]): string {
  const listItems = tutorialPreviews.map(
    (t) =>
      ` * [${t.title}](https://learning.quantum.ibm.com/tutorial/${t.slug})`,
  );
  return "Previews available:\n" + listItems.join("\n");
}

export async function createPreviews(args: Arguments, api: API) {
  const tutorialPreviews = (await getChangedTutorials(args)).map((t) =>
    modifyTutorialForPreview(t, args),
  );
  for (const tutorial of tutorialPreviews) {
    await api.upsertTutorial(tutorial);
  }
  await writeFile("pr_message.md", buildPrComment(tutorialPreviews));
}
