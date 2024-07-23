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

import { readFile, readdir } from "fs/promises";

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { Pkg } from "../lib/api/Pkg.js";
import { File } from "../lib/links/InternalLink.js";
import { FileBatch } from "../lib/links/FileBatch.js";

// While these files don't exist in this repository, the link
// checker should assume that they exist in production.
const SYNTHETIC_FILES: string[] = [
  "docs/errors.mdx",
  "docs/api/runtime/index.mdx",
  "docs/api/runtime/tags/jobs.mdx",
  "docs/announcements/product-updates/2024-04-15-backend-run-deprecation.mdx",
  "docs/api/qiskit-transpiler-service-rest/index.mdx",
];

interface Arguments {
  [x: string]: unknown;
  currentApis: boolean;
  devApis: boolean;
  historicalApis: boolean;
  qiskitReleaseNotes: boolean;
  skipBrokenHistorical: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
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
    ...(await globby("public/{images,videos}/**/*")).map(
      (fp) => new File(fp, new Set()),
    ),
    ...SYNTHETIC_FILES.map((fp) => new File(fp, new Set(), true)),
  ];

  let allGood = true;
  for (const fileBatch of fileBatches) {
    const allValidLinks = await fileBatch.checkInternalLinks(otherFiles);
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

const PROVIDER_GLOBS_TO_LOAD = [
  "docs/api/qiskit/*.mdx",
  "docs/run/max-execution-time.mdx",
];
const RUNTIME_GLOBS_TO_LOAD = [
  "docs/api/qiskit/providers_models.mdx",
  "docs/api/qiskit-ibm-runtime/options.mdx",
  "docs/run/index.mdx",
  "docs/run/max-execution-time.mdx",
  "docs/run/configure-error-mitigation.mdx",
  "docs/run/configure-runtime-compilation.mdx",
  "docs/transpile/index.mdx",
];
const QISKIT_GLOBS_TO_LOAD = [
  "docs/build/circuit-construction.ipynb",
  "docs/build/pulse.ipynb",
  "docs/start/install.mdx",
  "docs/start/configure-qiskit-local.mdx",
  "docs/api/qiskit/release-notes/0.44.mdx",
  "docs/api/qiskit/release-notes/0.45.mdx",
  "docs/api/qiskit/release-notes/0.46.mdx",
  "docs/api/qiskit/release-notes/index.mdx",
  "docs/api/qiskit-ibm-provider/index.mdx",
  "docs/api/qiskit-ibm-provider/ibm_jupyter.mdx",
  "docs/api/migration-guides/qiskit-1.0-features.mdx",
];

async function determineFileBatches(args: Arguments): Promise<FileBatch[]> {
  const currentBatch = await determineCurrentDocsFileBatch(args);
  const result = [currentBatch];

  if (args.devApis) {
    const devBatches = await determineDevFileBatches();
    result.push(...devBatches);
  }

  const provider = await determineHistoricalFileBatches(
    "qiskit-ibm-provider",
    PROVIDER_GLOBS_TO_LOAD,
    args.historicalApis,
  );
  const runtime = await determineHistoricalFileBatches(
    "qiskit-ibm-runtime",
    RUNTIME_GLOBS_TO_LOAD,
    args.historicalApis,
  );

  const qiskit = await determineHistoricalFileBatches(
    "qiskit",
    QISKIT_GLOBS_TO_LOAD,
    args.historicalApis && !args.skipBrokenHistorical,
    args.qiskitReleaseNotes,
  );

  result.push(...provider, ...runtime, ...qiskit);

  if (args.qiskitReleaseNotes) {
    result.push(await determineQiskitLegacyReleaseNotes());
  }

  return result;
}

async function determineCurrentDocsFileBatch(
  args: Arguments,
): Promise<FileBatch> {
  const toCheck = [
    "docs/**/*.{ipynb,mdx}",
    "public/api/*/objects.inv",
    // Ignore historical versions
    "!docs/api/*/[0-9]*/*",
    "!public/api/*/[0-9]*/*",
    // Ignore dev version
    "!docs/api/*/dev/*",
    "!public/api/*/dev/*",
    // Ignore Qiskit release notes
    "!docs/api/qiskit/release-notes/*",
  ];
  const toLoad = [
    // These docs are used by the migration guides.
    "docs/api/qiskit/0.46/{algorithms,opflow,execute}.mdx",
    "docs/api/qiskit/0.46/qiskit.{algorithms,extensions,opflow}.*",
    "docs/api/qiskit/0.46/qiskit.utils.QuantumInstance.mdx",
    "docs/api/qiskit/0.46/qiskit.primitives.Base{Estimator,Sampler}.mdx",
    "docs/api/qiskit/0.44/qiskit.extensions.{Hamiltonian,Unitary}Gate.mdx",
    // Release notes referenced in files.
    "docs/api/qiskit/release-notes/index.mdx",
    "docs/api/qiskit/release-notes/0.45.mdx",
    "docs/api/qiskit/release-notes/1.1.mdx",
  ];

  if (!args.currentApis) {
    const projects = Pkg.VALID_NAMES.join(",");
    toCheck.push(`!{public,docs}/api/{${projects}}/*`);
    toLoad.push(`docs/api/{${projects}}/*`);
  }

  if (args.qiskitReleaseNotes) {
    const currentVersion = JSON.parse(
      await readFile(`docs/api/qiskit/_package.json`, "utf-8"),
    )
      .version.split(".")
      .slice(0, -1)
      .join(".");

    toCheck.push(`docs/api/qiskit/release-notes/${currentVersion}.mdx`);
    // Necessary files for docs/api/qiskit/release-notes/1.0.mdx
    toLoad.push("docs/api/qiskit/release-notes/0.{44,45,46}.mdx");
  }

  let description: string;
  if (args.currentApis && args.qiskitReleaseNotes) {
    description =
      "non-API docs, current API docs, and latest Qiskit release note";
  } else if (args.currentApis) {
    description = "non-API docs and current API docs";
  } else if (args.qiskitReleaseNotes) {
    description = "non-API docs and latest Qiskit release note";
  } else {
    description = "non-API docs";
  }

  return FileBatch.fromGlobs(toCheck, toLoad, description);
}

async function determineDevFileBatches(): Promise<FileBatch[]> {
  const projects: [string, string[]][] = [
    ["qiskit", QISKIT_GLOBS_TO_LOAD],
    ["qiskit-ibm-runtime", RUNTIME_GLOBS_TO_LOAD],
  ];

  const result = [];
  for (const [project, toLoad] of projects) {
    const fileBatch = await FileBatch.fromGlobs(
      [`docs/api/${project}/dev/*`, `public/api/${project}/dev/objects.inv`],
      toLoad,
      `${project} dev docs`,
    );
    result.push(fileBatch);
  }
  return result;
}

async function determineHistoricalFileBatches(
  projectName: string,
  extraGlobsToLoad: string[],
  checkHistoricalApiDocs: boolean,
  checkSeparateReleaseNotes: boolean = false,
): Promise<FileBatch[]> {
  if (!checkHistoricalApiDocs && !checkSeparateReleaseNotes) {
    return [];
  }

  const historicalFolders = (
    await readdir(`docs/api/${projectName}`, { withFileTypes: true })
  ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

  const result = [];
  for (const folder of historicalFolders) {
    const toCheck: string[] = [];
    const toLoad = [...extraGlobsToLoad];

    // Qiskit legacy release notes (< 0.45) have their own FileBatch, and we don't
    // need to check them here.
    const isBeforeQiskit0_45 = projectName === "qiskit" && +folder.name < 0.45;
    if (!checkHistoricalApiDocs && isBeforeQiskit0_45) {
      continue;
    }

    if (checkHistoricalApiDocs) {
      toCheck.push(
        `docs/api/${projectName}/${folder.name}/*`,
        `public/api/${projectName}/${folder.name}/objects.inv`,
      );
    }

    if (checkSeparateReleaseNotes && !isBeforeQiskit0_45) {
      toCheck.push(`docs/api/${projectName}/release-notes/${folder.name}.mdx`);
      if (!checkHistoricalApiDocs) {
        toLoad.push(`docs/api/${projectName}/${folder.name}/*`);
      }
    }

    const fileBatch = await FileBatch.fromGlobs(
      toCheck,
      toLoad,
      `${projectName} v${folder.name}`,
    );
    result.push(fileBatch);
  }
  return result;
}

async function determineQiskitLegacyReleaseNotes(): Promise<FileBatch> {
  const result: FileBatch[] = [];

  const legacyVersions = (
    await globby("docs/api/qiskit/release-notes/[!index]*")
  )
    .map((releaseNotesPath) =>
      releaseNotesPath.split("/").pop()!.split(".").slice(0, -1).join("."),
    )
    .filter(
      (version) => +version < 1 && version != "0.45" && version != "0.46",
    );

  const toCheck = legacyVersions.map(
    (legacyVersion) => `docs/api/qiskit/release-notes/${legacyVersion}.mdx`,
  );

  return await FileBatch.fromGlobs(
    toCheck,
    [`docs/api/qiskit/0.45/*`, "docs/api/qiskit-ibm-provider/index.mdx"],
    `qiskit legacy release notes`,
  );
}

main().then(() => process.exit());
