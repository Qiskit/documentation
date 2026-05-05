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
import { downloadArtifact, runPipeline, API_INCLUDE } from "./utils.js";

const VERSION = "0.46.1";

export async function run(skipDownload: boolean): Promise<void> {
  const minorVersion = parseMinorVersion(VERSION)!;
  const pkg = await Pkg.fromArgs("qiskit-ibm-runtime", VERSION, minorVersion, "latest");
  const artifactPath = await downloadArtifact(pkg, skipDownload);

  await runPipeline(artifactPath, {
    include: API_INCLUDE,
    output: `docs/api/qiskit-ibm-runtime`,
    pkg,
  });
}
