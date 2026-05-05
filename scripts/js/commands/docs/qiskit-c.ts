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
import { downloadArtifact, runPipeline } from "./utils.js";

const VERSION = "2.4.1";

// The C API uses a different content directory (cdoc/) instead of apidocs/.
const C_API_INCLUDE = ["cdoc/**", "release_notes.html", "release-notes.html"];

export async function run(skipDownload: boolean): Promise<void> {
  const minorVersion = parseMinorVersion(VERSION)!;
  const pkg = await Pkg.fromArgs("qiskit-c", VERSION, minorVersion, "latest");
  const artifactPath = await downloadArtifact(pkg, skipDownload);

  await runPipeline(artifactPath, {
    include: C_API_INCLUDE,
    output: `docs/api/qiskit-c`,
    pkg,
  });
}
