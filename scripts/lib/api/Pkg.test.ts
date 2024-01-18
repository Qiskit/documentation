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

import { expect, test } from "@jest/globals";

import { Pkg } from "./Pkg";

test("Pkg.determineGithubUrlFn()", () => {
  const provider = Pkg.mock({
    name: "qiskit-ibm-provider",
    githubSlug: "qiskit/qiskit-ibm-provider",
    versionWithoutPatch: "0.7",
  }).determineGithubUrlFn();
  const runtime = Pkg.mock({
    name: "qiskit-ibm-runtime",
    githubSlug: "qiskit/qiskit-ibm-runtime",
    versionWithoutPatch: "0.15",
  }).determineGithubUrlFn();
  const qiskit = Pkg.mock({
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    versionWithoutPatch: "0.45",
  }).determineGithubUrlFn();

  expect(provider("qiskit_ibm_provider/job/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.7/qiskit_ibm_provider/job/exceptions.py",
  );
  expect(provider("qiskit_ibm_provider")).toEqual(
    "https://github.com/qiskit/qiskit-ibm-provider/tree/stable/0.7/qiskit_ibm_provider/__init__.py",
  );

  expect(runtime("qiskit_ibm_runtime/ibm_backend")).toEqual(
    "https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.15/qiskit_ibm_runtime/ibm_backend.py",
  );

  expect(qiskit("qiskit/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/exceptions.py",
  );
  expect(qiskit("qiskit/qasm2")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/qasm2/__init__.py",
  );
  expect(qiskit("qiskit/qasm3")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/qasm3/__init__.py",
  );
  expect(qiskit("qiskit/transpiler/preset_passmanagers")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/transpiler/preset_passmanagers/__init__.py",
  );
});
