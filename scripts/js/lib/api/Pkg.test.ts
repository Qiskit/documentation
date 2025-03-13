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

test("Pkg.determineSignatureUrlFn()", () => {
  const runtime = Pkg.mock({
    name: "qiskit-ibm-runtime",
    type: "latest",
    versionWithoutPatch: "0.15",
    kebabCaseAndShortenUrls: true,
  }).determineSignatureUrlFn();

  const qiskit = Pkg.mock({
    name: "qiskit",
    type: "latest",
    versionWithoutPatch: "0.45",
    kebabCaseAndShortenUrls: false,
  }).determineSignatureUrlFn();

  const historicalQiskit = Pkg.mock({
    name: "qiskit",
    type: "historical",
    versionWithoutPatch: "0.32",
    kebabCaseAndShortenUrls: false,
  }).determineSignatureUrlFn();

  const devQiskit = Pkg.mock({
    name: "qiskit",
    type: "dev",
    version: "1.0.0-dev",
    kebabCaseAndShortenUrls: false,
  }).determineSignatureUrlFn();

  const qiskitC = Pkg.mock({
    name: "qiskit-c",
    type: "latest",
    versionWithoutPatch: "2.0.0",
    kebabCaseAndShortenUrls: true,
  }).determineSignatureUrlFn();

  expect(runtime("../stubs/ibm_backend")).toEqual(
    "/api/qiskit-ibm-runtime/ibm-backend",
  );
  expect(runtime("apidoc/qiskit-ibm-runtime.ibm_backend")).toEqual(
    "/api/qiskit-ibm-runtime/ibm-backend",
  );

  expect(qiskit("../stubs/exceptions")).toEqual("/api/qiskit/exceptions");
  expect(qiskit("apidocs/qasm2#anchor")).toEqual("/api/qiskit/qasm2#anchor");
  expect(qiskit("/apidoc/qasm3")).toEqual("/api/qiskit/qasm3");
  expect(qiskit("qiskit.transpiler.preset_passmanagers")).toEqual(
    "/api/qiskit/qiskit.transpiler.preset_passmanagers",
  );
  expect(qiskit("#test")).toEqual("#test");

  expect(devQiskit("../stubs/exceptions")).toEqual(
    "/api/qiskit/dev/exceptions",
  );

  expect(historicalQiskit("../apidocs/preset_passmanager")).toEqual(
    "/api/qiskit/0.32/preset_passmanager",
  );
  expect(
    historicalQiskit("stubs/qiskit.transpiler.preset_passmanagers"),
  ).toEqual("/api/qiskit/0.32/qiskit.transpiler.preset_passmanagers");

  expect(qiskitC("#test")).toEqual("#test");
  expect(qiskitC("cdoc/sparse_observable#test")).toEqual(
    "/api/qiskit-c/sparse-observable#test",
  );
});
