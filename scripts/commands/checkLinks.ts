// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { readdir } from "fs/promises";

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { pathExists } from "../lib/fs";
import { File } from "../lib/links/LinkChecker";
import { FileBatch } from "../lib/links/FileBatch";
import { QISKIT_MISSING_VERSION_MAPPING } from "../lib/qiskitMetapackage";

// While these files don't exist in this repository, the link
// checker should assume that they exist in production.
const SYNTHETIC_FILES: string[] = [
  "docs/errors.mdx",
  "docs/api/runtime/index.mdx",
];

interface Arguments {
  [x: string]: unknown;
  external: boolean;
  currentApis: boolean;
  devApis: boolean;
  historicalApis: boolean;
  qiskitReleaseNotes: boolean;
  skipBrokenHistorical: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("external", {
      type: "boolean",
      default: false,
      description:
        "Should external links be checked? This slows down the script, but is useful to check.",
    })
    .option("current-apis", {
      type: "boolean",
      default: false,
      description: "Check the links in the current API docs.",
    })
    .option("dev-apis", {
      type: "boolean",
      default: false,
      description: "Check the links in the /dev API docs.",
    })
    .option("historical-apis", {
      type: "boolean",
      default: false,
      description:
        "Check the links in the historical API docs, e.g. `api/qiskit/0.44`. " +
        "Warning: this is slow.",
    })
    .option("skip-broken-historical", {
      type: "boolean",
      default: false,
      description:
        "Don't check historical releases that are known to still fail (currently all of Qiskit). " +
        "Intended to be used alongside `--historical-apis`.",
    })
    .option("qiskit-release-notes", {
      type: "boolean",
      default: false,
      description: "Check the links in the `api/qiskit/release-notes` folder.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();

  const fileBatches = await determineFileBatches(args);
  const otherFiles = [
    ...(await globby("public/**/*")).map((fp) => new File(fp, [])),
    ...SYNTHETIC_FILES.map((fp) => new File(fp, [], true)),
  ];

  let allGood = true;
  for (const fileBatch of fileBatches) {
    const allValidLinks = await fileBatch.check(args.external, otherFiles);
    if (!allValidLinks) {
      allGood = false;
    }
  }

  if (!allGood) {
    console.error("\nSome links appear broken 💔\n");
    process.exit(1);
  }
  console.log("\nNo links appear broken ✅\n");
}

async function determineFileBatches(args: Arguments): Promise<FileBatch[]> {
  const currentBatch = await determineCurrentDocsFileBatch(args);
  const result = [currentBatch];

  if (args.devApis) {
    const devBatches = await determineDevFileBatches();
    result.push(...devBatches);
  }

  if (args.historicalApis) {
    const provider = await determineHistoricalFileBatches(
      "qiskit-ibm-provider",
      ["docs/api/qiskit/*.md"],
    );
    const runtime = await determineHistoricalFileBatches("qiskit-ibm-runtime", [
      "docs/api/qiskit/providers_models.md",
    ]);
    let qiskit: FileBatch[] = [];
    if (!args.skipBrokenHistorical) {
      qiskit = await determineHistoricalFileBatches("qiskit");
    }
    result.push(...provider, ...runtime, ...qiskit);
  }

  if (args.qiskitReleaseNotes) {
    result.push(...(await determineQiskitReleaseNotes()));
  }

  return result;
}

async function determineQiskitReleaseNotes(): Promise<FileBatch[]> {
  const result: FileBatch[] = [];

  const allVersions = (
    await globby("docs/api/qiskit/release-notes/[!index]*")
  ).map((releaseNotesPath) =>
    releaseNotesPath.split("/").pop()!.split(".").slice(0, -1).join("."),
  );

  const versionsSorted = allVersions.sort((a, b) =>
    b.localeCompare(a, undefined, { numeric: true, sensitivity: "base" }),
  );

  for (const releaseNotesVersion of versionsSorted) {
    const docsVersionToLoad =
      QISKIT_MISSING_VERSION_MAPPING.get(releaseNotesVersion);

    const fileBatch = await FileBatch.fromGlobs(
      [`docs/api/qiskit/release-notes/${releaseNotesVersion}.md`],
      [`docs/api/qiskit/${docsVersionToLoad ?? releaseNotesVersion}/*`],
      `Qiskit ${releaseNotesVersion} release notes`,
    );
    result.push(fileBatch);
  }

  return result;
}

async function determineCurrentDocsFileBatch(
  args: Arguments,
): Promise<FileBatch> {
  const toCheck = [
    "docs/**/*.{ipynb,md,mdx}",
    "public/api/*/objects.inv",
    // Ignore historical versions
    "!docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/[0-9]*/*",
    "!public/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/[0-9]*/*",
    // Ignore dev version
    "!docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/dev/*",
    "!public/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/dev/*",
    // Ignore Qiskit release notes
    "!docs/api/qiskit/release-notes/*",
  ];
  const toLoad = [
    // The 0.46 docs are used by release notes for APIs that were removed in 1.0.
    "docs/api/qiskit/0.46/*.md",
    "docs/api/qiskit/0.44/qiskit.extensions.{Hamiltonian,Unitary}Gate.md",
    "docs/api/qiskit/0.45/qiskit.quantum_info.{OneQubitEuler,TwoQubitBasis,XX}Decomposer.md",
    "docs/api/qiskit/0.45/qiskit.transpiler.synthesis.aqc.AQC.md",
    "docs/api/qiskit/0.45/{tools,quantum_info,synthesis_aqc}.md",
    "docs/api/qiskit/release-notes/index.md",
  ];

  if (!args.currentApis) {
    toCheck.push(
      "!{public,docs}/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/*",
    );
    toLoad.push("docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/*");
  }

  const description = args.currentApis
    ? "non-API docs and current API docs"
    : "non-API docs";

  return FileBatch.fromGlobs(toCheck, toLoad, description);
}

async function determineDevFileBatches(): Promise<FileBatch[]> {
  const devProjects = [];
  for (const project of [
    "qiskit",
    "qiskit-ibm-provider",
    "qiskit-ibm-runtime",
  ]) {
    if (await pathExists(`docs/api/${project}/dev`)) {
      devProjects.push(project);
    }
  }

  const result = [];
  for (const project of devProjects) {
    const fileBatch = await FileBatch.fromGlobs(
      [`docs/api/${project}/dev/*`, `public/api/${project}/dev/objects.inv`],
      [],
      `${project} dev docs`,
    );
    result.push(fileBatch);
  }
  return result;
}

async function determineHistoricalFileBatches(
  projectName: string,
  toLoad: string[] = [],
): Promise<FileBatch[]> {
  const historicalFolders = (
    await readdir(`docs/api/${projectName}`, { withFileTypes: true })
  ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

  const result = [];
  for (const folder of historicalFolders) {
    const fileBatch = await FileBatch.fromGlobs(
      [
        `docs/api/${projectName}/${folder.name}/*`,
        `public/api/${projectName}/${folder.name}/objects.inv`,
      ],
      toLoad,
      `${projectName} v${folder.name}`,
    );
    result.push(fileBatch);
  }
  return result;
}

main().then(() => process.exit());
