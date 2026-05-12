// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import os from "os";
import path from "path";
import { mkdtemp, readFile, mkdir, copyFile } from "fs/promises";

import { globby } from "globby";
import { expect, test } from "@playwright/test";

import { runAddonDocsPipeline } from "./addonDocsPipeline.js";
import { Pkg, ReleaseNotesConfig } from "./Pkg.js";

// Snapshot test for the addon non-API docs pipeline. If output changes
// intentionally, run `npm test -- --updateSnapshot`.
//
// The fixture under `testdata/qiskit-addon-smoke/` covers the pipeline's key
// concerns: article extraction, relative-apidocs link rewriting, cross-package
// stub resolution via `ObjectsInv.loadPublishedApis`, notebook processing, and
// image routing to `public/docs/images/addons/{pkg}/`.

const FIXTURE_DIR = "scripts/js/lib/api/testdata/qiskit-addon-smoke";
const PUBLISHED_APIS_SEED =
  "scripts/js/lib/api/testdata/qiskit-addon-smoke-publishedapis";

test("qiskit-addon-smoke addon docs pipeline", async ({}, testInfo) => {
  testInfo.snapshotSuffix = "";

  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "addon-smoke-"));
  const docsBaseFolder = path.join(tmpDir, "docs", "addons");
  const publicBaseFolder = path.join(tmpDir, "public", "docs");

  // Seed public/docs/api/<pkg>/objects.inv so that loadPublishedApis()
  // finds a sibling package's inventory for cross-package stub resolution.
  const seededInvDir = path.join(
    publicBaseFolder,
    "api",
    "qiskit-addon-other",
  );
  await mkdir(seededInvDir, { recursive: true });
  await copyFile(
    path.join(PUBLISHED_APIS_SEED, "api", "qiskit-addon-other", "objects.inv"),
    path.join(seededInvDir, "objects.inv"),
  );

  const pkg = new Pkg({
    name: "qiskit-addon-smoke",
    title: "Qiskit Addon Smoke",
    githubSlug: "Qiskit/qiskit-addon-smoke",
    version: "0.0.1",
    versionWithoutPatch: "0.0",
    type: "latest",
    language: "Python",
    releaseNotesConfig: new ReleaseNotesConfig({ enabled: false }),
    kebabCaseAndShortenUrls: true,
  });

  await runAddonDocsPipeline(FIXTURE_DIR, docsBaseFolder, publicBaseFolder, pkg);

  const markdownFolder = pkg.outputDir(docsBaseFolder);

  // Invariant: the addon pipeline must never write API-shaped output under its
  // own docs root. Guards against the class of bug that produced the stray
  // `docs/addons/api/qiskit-addon-obp/` directory in the repo.
  const strayUnderAddonsApi = await globby([`${docsBaseFolder}/api/**`]);
  expect(
    strayUnderAddonsApi,
    "addon pipeline must not write to docs/addons/api/**",
  ).toEqual([]);

  // Invariant: addon images must land under `public/docs/images/addons/{pkg}/`,
  // not under `public/docs/images/api/{pkg}/`. The inverse was the bug before
  // `saveImages` was parameterized.
  const imagesUnderApi = await globby([`${publicBaseFolder}/images/api/**`]);
  expect(
    imagesUnderApi,
    "addon-run images must not land under public/docs/images/api/**",
  ).toEqual([]);

  const imagesUnderAddons = await globby([
    `${publicBaseFolder}/images/addons/**`,
  ]);
  expect(
    imagesUnderAddons.length,
    "addon-run images must land under public/docs/images/addons/**",
  ).toBeGreaterThan(0);

  // --- Snapshot of every generated file under the addon output folder ---

  const resultFiles = await globby([`${markdownFolder}/**`]);
  expect(resultFiles.length, "pipeline should generate at least one file")
    .toBeGreaterThan(0);
  for (const file of resultFiles) {
    const contents = await readFile(file, "utf-8");
    const fileName = path.parse(file).name;
    expect(contents).toMatchSnapshot(fileName);
  }
});
