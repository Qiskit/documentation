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

import { createPreviews } from "./lib/previews";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { API } from "./lib/api";

const CONFIG_PATH = "tutorials/learning-api.conf.yaml";
const ACCESSIBLE_TO_INSTANCE =
  "client-enablement/documentation/qiskit-documenta";

interface Arguments {
  prNumber: number;
  changedFiles: string[];
  configPath: string;
  accessibleToInstance: string;
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
    .option("configPath", {
      string: true,
      demandOption: false,
      description: "Path to `learning-api.conf.yaml`",
      default: CONFIG_PATH,
    })
    .option("accessibleToInstance", {
      string: true,
      demandOption: false,
      description: "IBM Quantum instance that can access the preview pages.",
      default: ACCESSIBLE_TO_INSTANCE,
    })
    .parseSync();
};

async function main() {
  const args = readArgs();
  const api = new API();
  await createPreviews(args, api);
}

main().then(() => process.exit());
