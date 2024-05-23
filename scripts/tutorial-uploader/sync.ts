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

import { API } from "./lib/api";
import { readTutorialData } from './lib/local-tutorial-data';

const CONFIG_PATH = "tutorials/learning-api.conf.yaml";

/* To do:
 *
 *   [x] Read from YAML file
 *   [ ] Throw correctly
 *   [ ] More helpful console logging
 */

async function main() {
  // @ts-ignore // TODO: Throw if undefined
  const api = new API(
    process.env.LEARNING_API_URL!,
    process.env.LEARNING_API_TOKEN!,
  );

  for (const tutorial of await readTutorialData(CONFIG_PATH)) {
    await api.upsertTutorial(tutorial);
  }
}

main().then(() => process.exit());
