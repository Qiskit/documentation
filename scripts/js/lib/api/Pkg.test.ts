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
    type: "latest",
    versionWithoutPatch: "0.7",
  }).determineGithubUrlFn();
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
    versionWithoutPatch: "0.45",
  }).determineGithubUrlFn();

  const historicalQiskit = Pkg.mock({
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    type: "historical",
    versionWithoutPatch: "0.32",
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

  expect(dev("qiskit/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit/tree/main/qiskit/exceptions.py",
  );
  expect(rc("qiskit/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/exceptions.py",
  );

  expect(historicalQiskit("qiskit/exceptions")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/exceptions.py",
  );
  expect(historicalQiskit("qiskit/qasm")).toEqual(
    "https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/qasm/__init__.py",
  );
  expect(historicalQiskit("qiskit/aer/foo")).toEqual(
    "https://github.com/qiskit/qiskit-aer/tree/stable/0.9/qiskit/aer/foo.py",
  );
  expect(historicalQiskit("qiskit/providers/aer/foo")).toEqual(
    "https://github.com/qiskit/qiskit-aer/tree/stable/0.9/qiskit/providers/aer/foo.py",
  );
  expect(historicalQiskit("qiskit_aer/foo")).toEqual(
    "https://github.com/qiskit/qiskit-aer/tree/stable/0.9/qiskit_aer/foo.py",
  );
  expect(historicalQiskit("qiskit/ignis/foo")).toEqual(
    "https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.6/qiskit/ignis/foo.py",
  );
  expect(historicalQiskit("qiskit/aqua/foo")).toEqual(
    "https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/foo.py",
  );
  expect(historicalQiskit("qiskit/chemistry/foo")).toEqual(
    "https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/foo.py",
  );
  expect(historicalQiskit("qiskit/finance/foo")).toEqual(
    "https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/finance/foo.py",
  );
  expect(historicalQiskit("qiskit/ml/foo")).toEqual(
    "https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/ml/foo.py",
  );
  expect(historicalQiskit("qiskit/optimization/foo")).toEqual(
    "https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/foo.py",
  );
  expect(historicalQiskit("qiskit/aer/foo")).toEqual(
    "https://github.com/qiskit/qiskit-aer/tree/stable/0.9/qiskit/aer/foo.py",
  );
  expect(historicalQiskit("qiskit/providers/ibmq/foo")).toEqual(
    "https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.18/qiskit/providers/ibmq/foo.py",
  );
});
