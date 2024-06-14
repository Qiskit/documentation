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

import path from 'path';
import { writeFile } from "fs/promises";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { API } from "./lib/api";
import { LocalTutorialData, readTutorialData } from "./lib/local-tutorial-data";

const CONFIG_PATH = "tutorials/learning-api.conf.yaml";
const ACCESSIBLE_TO_INSTANCE = "client-enablement/documentation/qiskit-documenta";

interface Arguments {
  prNumber: number;
  changedFiles: string[];
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("prNumber", {
      type: "number",
      demandOption: true,
      description: "Pull request number",
    })
    .option("changedFiles", {
      string: true,
      type: "array",
      demandOption: true,
      description: "List of changed tutorial files",
    })
    .parseSync();
};

async function getChangedTutorials(args: Arguments): Promise<LocalTutorialData[]> {
  const changedDirectories = args.changedFiles.map(x => path.dirname(x));
  const allTutorials = await readTutorialData(CONFIG_PATH);
  const changedTutorials = allTutorials.filter(t => changedDirectories.includes(t.local_path))
  return changedTutorials;
}

function modifyTutorialForPr(tutorial: LocalTutorialData, args: Arguments): LocalTutorialData {
  tutorial.title = `Preview (PR#${args.prNumber}): ${tutorial.title}`;
  tutorial.slug = `pr-${args.prNumber}-${tutorial.slug}`;
  tutorial.required_instance_access = JSON.stringify([ACCESSIBLE_TO_INSTANCE]);
  return tutorial;
}

function buildPrComment(tutorialPreviews: LocalTutorialData[]): string {
  const listItems = tutorialPreviews.map(
    t => ` * [${t.title}](https://learning.quantum.ibm.com/tutorial/${t.slug})`
  );
  return "Previews available:\n" + listItems.join("\n")
}

async function main() {
  const args = readArgs();
  const api = new API();
  const tutorialPreviews = (await getChangedTutorials(args)).map(t => modifyTutorialForPr(t, args));
  for (const tutorial of tutorialPreviews) {
    await api.upsertTutorial(tutorial)
  }
  await writeFile("pr_message.md", buildPrComment(tutorialPreviews));
}

main().then(() => process.exit());
