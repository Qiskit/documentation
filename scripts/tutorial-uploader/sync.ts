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
import { readTutorialData } from "./lib/local-tutorial-data";

const CONFIG_PATH = "tutorials/learning-api.conf.yaml";

async function main() {
  const api = new API();

  for (const tutorial of await readTutorialData(CONFIG_PATH)) {
    await api.upsertTutorial(tutorial);
  }
}

main().then(() => process.exit());
