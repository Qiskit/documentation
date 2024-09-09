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

// -----------------------------------------------------------------------------------
// Ignored files
// -----------------------------------------------------------------------------------

export const IGNORED_FILES = new Set([
  "public/api/qiskit-ibm-runtime/0.14/objects.inv",
  "public/api/qiskit-ibm-runtime/0.15/objects.inv",
  "public/api/qiskit-ibm-runtime/0.16/objects.inv",
]);

// -----------------------------------------------------------------------------------
// Always ignored URLs
// -----------------------------------------------------------------------------------

const _QISKIT_UTILS = [
  "#qiskit.utils.optionals.HAS_TESTTOOLS",
  "#qiskit.utils.optionals.HAS_GRAPHVIZ",
  "#qiskit.utils.optionals.HAS_PYDOT",
  "https://github.com/python-constraint/python-constraint%3E__",
];

const _PATTERNS_REORG_IGNORES = [
  "/run/primitives-examples",
  "/run/sessions",
  "/build/circuit-construction",
  "/start/configure-qiskit-local#environment-variables",
  "/build/pulse",
  "/run",
  "/transpile",
  "/run/max-execution-time",
  "/run/configure-runtime-compilation",
  "/run/configure-error-mitigation",
  "/start/install#qiskit-versioning",
  "/start/configure-qiskit-local",
  "/run/primitives-get-started#3-initialize-the-qiskit-runtime-sampler",
  "/run/primitives-get-started#3-initialize-qiskit-runtime-estimator",
  "/run/run-jobs-batch",
  "/api/migration-guides/qiskit-runtime",
  "/api/migration-guides/v2-primitives",
];

const ALWAYS_IGNORED_URLS__EXPECTED = [
  "https://auth.quantum-computing.ibm.com/api",
  "https://www.cs.tau.ac.il/~nogaa/PDFS/r.pdf",
  "http://www.satcompetition.org/2009/format-benchmarks2009.html",
  "https://qiskit.slack.com/archives/C06KF8YHUAU",
  // StackOverflow rate limits us.
  "https://stackoverflow.com/",
  "https://stackoverflow.com/questions/1049722/what-is-2s-complement",
  "https://quantumcomputing.stackexchange.com/help/how-to-ask",
  "https://quantumcomputing.stackexchange.com/questions/",
  "https://quantumcomputing.stackexchange.com/questions/12721/how-to-calculate-destabilizer-group-of-toric-and-other-codes",
  "mailto:tellibm@us.ibm.com",
];

const ALWAYS_IGNORED_URLS__SHOULD_FIX = [
  // Bad anchor in qiskit_ibm_runtime.options.Options.md for 0.14 - 0.16.
  "/run/max-execution-time#maximum-execution-time",
  ..._QISKIT_UTILS,
  ..._PATTERNS_REORG_IGNORES,
];

export const ALWAYS_IGNORED_URLS = new Set([
  ...ALWAYS_IGNORED_URLS__EXPECTED,
  ...ALWAYS_IGNORED_URLS__SHOULD_FIX,
]);

// -----------------------------------------------------------------------------------
// Files to ignores
// -----------------------------------------------------------------------------------

// A mapping of files to lists of links that will not be searched.
type FilesToIgnores = { [id: string]: string[] };

const _QPY_IGNORES = Object.fromEntries(
  ["", "dev/"].map((vers) => [
    `docs/api/qiskit/${vers}qpy.mdx`,
    [
      "#f1",
      "#f2",
      "#f3",
      "#id2",
      "#id3",
      "#id4",
      "#id5",
      "#id6",
      "#id7",
      "#id8",
    ],
  ]),
);

const _RUNTIME_OBJECT_INV = Object.fromEntries(
  [
    "",
    "dev/",
    "0.16/",
    "0.17/",
    "0.18/",
    "0.19/",
    "0.20/",
    "0.21/",
    "0.22/",
    "0.23/",
    "0.24/",
    "0.25/",
    "0.26/",
    "0.27/",
    "0.28/",
    "0.29/",
    "0.29/",
    "0.30/",
    "0.31/",
    "0.32/",
  ].map((vers) => [
    `public/api/qiskit-ibm-runtime/${vers}objects.inv`,
    [
      `/api/qiskit-ibm-runtime/${vers}qiskit_ibm_runtime.RuntimeEncoder#key_separator`,
      `/api/qiskit-ibm-runtime/${vers}index#next-steps`,
      `/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-version-api-docs-preview`,
    ],
  ]),
);

const _QISKIT_OBJECT_INV = Object.fromEntries(
  ["", "dev/"].map((vers) => [
    `public/api/qiskit/${vers}objects.inv`,
    [
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_AER`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_CONSTRAINT`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_CPLEX`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_CVXPY`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_DOCPLEX`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_FIXTURES`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_GRAPHVIZ`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IBMQ`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IGNIS`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IPYTHON`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IPYWIDGETS`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_JAX`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_JUPYTER`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_MATPLOTLIB`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_NETWORKX`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_NLOPT`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PDFLATEX`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PDFTOCAIRO`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PIL`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PYDOT`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PYGMENTS`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PYLATEX`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_QASM3_IMPORT`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SEABORN`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SKLEARN`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SKQUANT`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SKSNFIT`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SQSNOBFIT`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SYMENGINE`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_TESTTOOLS`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_TOQM`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_TWEEDLEDUM`,
      `/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_Z3`,
      `/api/qiskit/${vers}qiskit.visualization.timeline_drawer#style-dict-doc`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-constraints`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-envelope`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-eval-condition`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-serialize`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-validation`,
    ],
  ]),
);

const FILES_TO_IGNORES__EXPECTED: FilesToIgnores = {};

const FILES_TO_IGNORES__SHOULD_FIX: FilesToIgnores = {
  // Qiskit
  "docs/api/qiskit/release-notes/1.0.mdx": [
    "/api/qiskit/1.0/utils#qiskit.utils.optionals.HAS_SYMENGINE",
  ],
  ..._QPY_IGNORES,
  // Runtime
  "docs/api/qiskit-ibm-runtime/release-notes.mdx": [
    "/api/qiskit-ibm-runtime/qiskit_ibm_runtime.QiskitRuntimeService#runtime",
    "/api/qiskit-ibm-runtime/qiskit_ibm_runtime.Sampler#run",
    "/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeOptions",
    "/api/qiskit-ibm-runtime/qiskit_ibm_runtime.options.ResilienceOptions",
  ],
  // objects.inv
  ..._RUNTIME_OBJECT_INV,
  ..._QISKIT_OBJECT_INV,
};

export const FILES_TO_IGNORES: FilesToIgnores = {
  ...FILES_TO_IGNORES__EXPECTED,
  ...FILES_TO_IGNORES__SHOULD_FIX,
};
