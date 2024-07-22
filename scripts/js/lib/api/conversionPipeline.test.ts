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

import os from "os";
import path from "path";
import { mkdtemp, readFile } from "fs/promises";

import { globby } from "globby";
import { expect, test } from "@jest/globals";

import { runConversionPipeline } from "./conversionPipeline";
import { Pkg, ReleaseNotesConfig } from "./Pkg";

// This test uses snapshot testing (https://jestjs.io/docs/snapshot-testing#updating-snapshots). If the tests fail and the changes
// are valid, run `npm test -- --updateSnapshot`.
//
// To regenerate the input, run `tox -e docs` in https://github.com/Qiskit/qiskit_sphinx_theme,
// then copy over `stubs/`, `apidoc/`, and `objects.inv`
// to the `testdata/qiskit-sphinx-theme` folder.

// Set this to false to write the results to `docs/` in this repo.
// That is useful to let you preview how the docs render with
// `./start` and navigating to localhost:3000/api/qiskit-sphinx-theme/{fileName}
// rather than looking at raw markdown.
//
// However, don't check the output in to version control! Use
// `git clean -fd` and set this value back to `true`.
const USE_TMPDIR = true;

test("qiskit-sphinx-theme", async () => {
  // The integration test currently does not test these mechanisms:
  //   - images
  //   - release notes

  let docsBaseFolder = "docs";
  let publicBaseFolder = "public";
  if (USE_TMPDIR) {
    const tmpDir = await mkdtemp(
      path.join(os.tmpdir(), "qiskit-sphinx-theme-test-"),
    );
    docsBaseFolder = path.join(tmpDir, docsBaseFolder);
    publicBaseFolder = path.join(tmpDir, publicBaseFolder);
  }

  const pkg = new Pkg({
    name: "qiskit-sphinx-theme",
    title: "Qiskit Sphinx Theme",
    githubSlug: "Qiskit/qiskit_sphinx_theme",
    version: "0.1.1",
    versionWithoutPatch: "0.1",
    type: "latest",
    releaseNotesConfig: new ReleaseNotesConfig({ enabled: false }),
  });
  const markdownFolder = pkg.outputDir(docsBaseFolder);

  await runConversionPipeline(
    "scripts/js/lib/api/testdata/qiskit-sphinx-theme",
    docsBaseFolder,
    publicBaseFolder,
    pkg,
  );

  const resultFiles = await globby([`${markdownFolder}/**`]);
  for (const file of resultFiles) {
    const contents = await readFile(file, "utf-8");
    const fileName = path.parse(file).name;
    expect(contents).toMatchSnapshot(fileName);
  }
  console.log(`Check out your project at ${markdownFolder}`);
});
