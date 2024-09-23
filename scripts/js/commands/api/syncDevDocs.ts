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

import { $ } from "zx";
import fs from "fs/promises";

import { Pkg } from "../../lib/api/Pkg.js";
import { zxMain } from "../../lib/zx.js";
import {
  generateVersion,
  determineMinorVersion,
  Arguments,
} from "./updateApiDocs.js";

// Found with `gh api repos/qiskit/${repo}/actions/workflows`
const QISKIT_WORKFLOW_ID = "66225883";
const RUNTIME_WORKFLOW_ID = "18319714";

zxMain(async () => {
  const qiskitVersion = await getDevVersion("qiskit");
  const runtimeVersion = await getDevVersion("qiskit-ibm-runtime");
  const qiskitIsRc = !qiskitVersion.endsWith("-dev");
  const runtimeIsRc = !runtimeVersion.endsWith("-dev");

  let qiskitUrl = undefined;
  let runtimeUrl = undefined;
  if (!qiskitIsRc) {
    qiskitUrl = await getArtifactUrl("qiskit", QISKIT_WORKFLOW_ID);
    console.log(`Using Qiskit URL: ${qiskitUrl}`);
  }
  if (!runtimeIsRc) {
    runtimeUrl = await getArtifactUrl(
      "qiskit-ibm-runtime",
      RUNTIME_WORKFLOW_ID,
    );
    console.log(`Using Runtime URL: ${runtimeUrl}`);
  }

  await updateHtmlArtifacts({ qiskitUrl, runtimeUrl });

  if (!qiskitIsRc) {
    await regenDocs("qiskit", qiskitVersion);
  }
  if (!runtimeIsRc) {
    await regenDocs("qiskit-ibm-runtime", runtimeVersion);
  }
});

async function getDevVersion(pkg: string): Promise<string> {
  const rawContent = await fs.readFile(
    `docs/api/${pkg}/dev/_package.json`,
    "utf-8",
  );
  return JSON.parse(rawContent)["version"];
}

async function getArtifactUrl(
  repoName: string,
  workflowId: string,
): Promise<string> {
  const runProc =
    await $`gh api repos/qiskit/${repoName}/actions/workflows/${workflowId}/runs --jq '.workflow_runs[] | select(.head_branch=="main" and .conclusion=="success") | .id'`;
  const runId = runProc.stdout.split("\n")[0];
  const url =
    await $`gh api repos/qiskit/${repoName}/actions/runs/${runId}/artifacts --jq '.artifacts[0].archive_download_url'`;
  return url.stdout.trim();
}

async function updateHtmlArtifacts(args: {
  qiskitUrl?: string;
  runtimeUrl?: string;
}): Promise<void> {
  const path = "scripts/config/api-html-artifacts.json";
  const { qiskitUrl, runtimeUrl } = args;
  const rawContent = await fs.readFile(path, "utf-8");
  const prior = JSON.parse(rawContent);
  if (qiskitUrl) {
    prior["qiskit"]["dev"] = qiskitUrl;
  }
  if (runtimeUrl) {
    prior["qiskit-ibm-runtime"]["dev"] = runtimeUrl;
  }
  await fs.writeFile(path, JSON.stringify(prior, null, 2) + "\n");
}

async function regenDocs(pkg: string, version: string): Promise<void> {
  const args: Arguments = {
    package: pkg,
    version: version,
    dev: true,
    historical: false,
    skipDownload: false,
  };
  const minorVersion = determineMinorVersion(args);
  const pkgObj = await Pkg.fromArgs(pkg, version, minorVersion, "dev");
  await generateVersion(pkgObj, args);
}
