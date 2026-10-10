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

import { expect, test } from "@playwright/test";

import { resolveRelativeNotebookLink } from "./notebookStages.js";
import { Pkg, ReleaseNotesConfig } from "./Pkg.js";

function makePkg(name = "my-addon", kebabCaseAndShortenUrls = true): Pkg {
  return new Pkg({
    name,
    title: "My Addon",
    version: "1.2.0",
    versionWithoutPatch: "1.2",
    type: "latest",
    language: "Python",
    releaseNotesConfig: new ReleaseNotesConfig({ enabled: false }),
    kebabCaseAndShortenUrls,
  });
}

// Artifact-relative paths (without extension) of the pages the pipeline publishes.
const INGESTED_PAGES = new Set([
  "index",
  "install",
  "guides/index",
  "guides/quickstart",
  "guides/speed_limit_tightening",
  "how_tos/foo",
]);

const NOTEBOOK = "guides/configuration_options.ipynb";

function resolve(url: string, pkg = makePkg()): string | undefined {
  return resolveRelativeNotebookLink(url, NOTEBOOK, pkg, INGESTED_PAGES);
}

test.describe("resolveRelativeNotebookLink", () => {
  test("sibling notebook", () => {
    expect(resolve("quickstart.ipynb")).toBe(
      "/docs/addons/my-addon/guides/quickstart",
    );
  });

  test("sibling page linked by its .html, .rst, or .md name", () => {
    for (const ext of [".html", ".rst", ".md"]) {
      expect(resolve(`quickstart${ext}`)).toBe(
        "/docs/addons/my-addon/guides/quickstart",
      );
    }
  });

  test("../-relative link into another folder", () => {
    expect(resolve("../how_tos/foo.html")).toBe(
      "/docs/addons/my-addon/how_tos/foo",
    );
    expect(resolve("../install.rst")).toBe("/docs/addons/my-addon/install");
  });

  test("index pages map to their directory", () => {
    expect(resolve("../index.rst")).toBe("/docs/addons/my-addon");
    expect(resolve("index.html")).toBe("/docs/addons/my-addon/guides");
  });

  test("target name is kebab-cased", () => {
    expect(resolve("speed_limit_tightening.ipynb")).toBe(
      "/docs/addons/my-addon/guides/speed-limit-tightening",
    );
  });

  test("target name is kept when the package doesn't kebab-case URLs", () => {
    const pkg = makePkg("my-addon", false);
    expect(resolve("speed_limit_tightening.ipynb", pkg)).toBe(
      "/docs/addons/my-addon/guides/speed_limit_tightening",
    );
  });

  test("nbsphinx anchors are converted to IQP heading anchors", () => {
    expect(resolve("quickstart.ipynb#1.-Prepare-the-inputs-for-SLC")).toBe(
      "/docs/addons/my-addon/guides/quickstart#1-prepare-the-inputs-for-slc",
    );
    expect(resolve("../how_tos/foo.html#getting-started")).toBe(
      "/docs/addons/my-addon/how_tos/foo#getting-started",
    );
  });

  test("links into the Python API reference map to /docs/api/{pkg}", () => {
    expect(resolve("../apidocs/index.html")).toBe("/docs/api/my-addon/index");
    expect(resolve("../stubs/my_addon.do_thing.html")).toBe(
      "/docs/api/my-addon/do-thing",
    );
  });

  test("links into the C API reference map to /docs/api/{pkg}-c", () => {
    expect(
      resolve("../cdoc/qf-foo.html#c.qf_foo_new", makePkg("qiskit-fermions")),
    ).toBe("/docs/api/qiskit-fermions-c/qf-foo#qf_foo_new");
  });

  test("links to the release notes map to /docs/api/{pkg}/release-notes", () => {
    expect(resolve("../release-notes.html")).toBe(
      "/docs/api/my-addon/release-notes",
    );
    expect(resolve("../release_notes.rst")).toBe(
      "/docs/api/my-addon/release-notes",
    );
  });

  test("links that escape the artifact root are left alone", () => {
    expect(resolve("../../elsewhere.ipynb")).toBeUndefined();
  });

  test("links to unpublished pages are left alone", () => {
    expect(resolve("../tutorials/intro.ipynb")).toBeUndefined();
    expect(resolve("missing.ipynb")).toBeUndefined();
  });

  test("absolute URLs and site-absolute paths are left alone", () => {
    expect(
      resolve("https://quantum.cloud.ibm.com/docs/guides/foo.html"),
    ).toBeUndefined();
    expect(resolve("/docs/addons/my-addon/guides/quickstart")).toBeUndefined();
  });

  test("pure fragments are converted to IQP heading anchors", () => {
    expect(resolve("#Configuration-options")).toBe("#configuration-options");
    expect(resolve("#1.-Prepare-the-inputs-for-SLC")).toBe(
      "#1-prepare-the-inputs-for-slc",
    );
  });

  test("links to files that aren't pages are left alone", () => {
    expect(resolve("data.csv")).toBeUndefined();
    expect(resolve("quickstart")).toBeUndefined();
  });
});
