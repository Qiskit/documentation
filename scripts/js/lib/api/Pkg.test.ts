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

import { expect, test } from "@playwright/test";

import { Pkg } from "./Pkg.js";

test("Pkg.determineGithubUrlFn()", () => {
  const runtime = Pkg.mock({
    name: "qiskit-ibm-runtime",
    githubSlug: "qiskit/qiskit-ibm-runtime",
    type: "latest",
    versionWithoutPatch: "0.15",
  }).determineGithubUrlFn();
  const qiskit = Pkg.mock({
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    type: "latest",
    versionWithoutPatch: "1.1",
  }).determineGithubUrlFn();

  const dev = Pkg.mock({
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    type: "dev",
    version: "1.0.0-dev",
  }).determineGithubUrlFn();
  const rc = Pkg.mock({
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    type: "dev",
    version: "1.0.0rc1",
    versionWithoutPatch: "1.0",
  }).determineGithubUrlFn();

  expect(runtime("qiskit_ibm_runtime/ibm_backend")).toEqual(
    "https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.15/qiskit_ibm_runtime/ibm_backend.py",
  );

  expect(qiskit("qiskit/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/1.1/qiskit/exceptions.py",
  );
  expect(qiskit("qiskit/qasm2")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/1.1/qiskit/qasm2/__init__.py",
  );
  expect(qiskit("qiskit/qasm3")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/1.1/qiskit/qasm3/__init__.py",
  );
  expect(qiskit("qiskit/transpiler/preset_passmanagers")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/1.1/qiskit/transpiler/preset_passmanagers/__init__.py",
  );

  expect(dev("qiskit/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit/tree/main/qiskit/exceptions.py",
  );
  expect(rc("qiskit/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/exceptions.py",
  );
});
