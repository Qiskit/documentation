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

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { API } from "./lib/api";
import { readItems } from "@directus/sdk";

interface Arguments {
  prNumber: number;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("prNumber", {
      type: "number",
      demandOption: true,
      description: "Pull request number",
    })
    .parseSync();
};

async function getPreviewTutorialSlugs(
  api: API,
  prNumber: number,
): Promise<string[]> {
  const allTutorials = await api.client.request(
    readItems("tutorials", { fields: ["slug"] }),
  );
  const previewSlugs = allTutorials
    .map((t) => t.slug)
    .filter((slug) => slug.startsWith(`pr-${prNumber}-`));
  return previewSlugs;
}

async function main() {
  const prNumber = readArgs().prNumber;
  const api = new API();
  for (const slug of await getPreviewTutorialSlugs(api, prNumber)) {
    await api.deleteTutorial(slug);
  }
}

main().then(() => process.exit());
