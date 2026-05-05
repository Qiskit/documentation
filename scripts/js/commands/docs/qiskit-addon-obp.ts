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

import { Pkg } from "../../lib/api/Pkg.js";
import { parseMinorVersion } from "../../lib/apiVersions.js";
import {
  downloadArtifact,
  runPipeline,
  API_INCLUDE,
  PROSE_EXCLUDE,
} from "./utils.js";

const NAME = "qiskit-addon-obp";
const VERSION = "0.3.0";

export async function run(skipDownload: boolean): Promise<void> {
  const minorVersion = parseMinorVersion(VERSION)!;
  const pkg = await Pkg.fromArgs(NAME, VERSION, minorVersion, "latest");
  const artifactPath = await downloadArtifact(pkg, skipDownload);

  await runPipeline(artifactPath, {
    include: API_INCLUDE,
    output: `docs/api/${NAME}`,
    pkg,
  });

  await runPipeline(artifactPath, {
    exclude: PROSE_EXCLUDE,
    output: `docs/addons/${NAME}`,
    pkg,
  });
}
