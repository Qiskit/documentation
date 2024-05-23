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

import { readFile } from "fs/promises";
import yaml from "js-yaml";
import { API } from "./api";
import { type LocalTutorialData, verifyLocalTutorialData } from './local-tutorial-data';

const CONFIG_PATH = "tutorials/learning-api.conf.yaml";

/* To do:
 *
 *   [x] Read from YAML file
 *   [ ] Throw correctly
 *   [ ] More helpful console logging
 */

async function readConfig(path: string): Promise<LocalTutorialData[]> {
  const raw = await readFile(path, "utf8");
  return yaml.load(raw) as LocalTutorialData[];
}

async function main() {
  // @ts-ignore // TODO: Throw if undefined
  const api = new API(
    process.env.LEARNING_API_URL!,
    process.env.LEARNING_API_TOKEN!,
  );

  const localTutorialData = (await readConfig(CONFIG_PATH)).map(x => verifyLocalTutorialData(x))

  for (const tutorial of localTutorialData) {
    await api.upsertTutorial(tutorial);
  }
}

main().then(() => process.exit());
