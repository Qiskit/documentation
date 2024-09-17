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
// Always ignored URLs - prefer to use more precise ignores
// -----------------------------------------------------------------------------------

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
];

const ALWAYS_IGNORED_URLS__SHOULD_FIX: string[] = [];

export const ALWAYS_IGNORED_URLS = new Set([
  ...ALWAYS_IGNORED_URLS__EXPECTED,
  ...ALWAYS_IGNORED_URLS__SHOULD_FIX,
]);

// -----------------------------------------------------------------------------------
// Files to ignores
// -----------------------------------------------------------------------------------

// A mapping of files to lists of links that will not be searched.
type FilesToIgnores = { [id: string]: string[] };

function mergeFilesToIgnores(...mappings: FilesToIgnores[]): FilesToIgnores {
  const result: FilesToIgnores = {};
  mappings.forEach((mapping) => {
    Object.entries(mapping).forEach(([file, ignores]) => {
      if (result[file]) {
        result[file].push(...ignores);
      } else {
        result[file] = ignores;
      }
    });
  });
  return result;
}

const _QISKIT_QPY_IGNORES = Object.fromEntries(
  ["", "dev/", "0.46/", "1.0/", "1.1/", "1.2/"].map((vers) => [
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

function _qiskitUtilsData(): FilesToIgnores {
  // Qiskit docs used .. py:data:: incorrectly. We didn't fix these versions of the docs
  // because it is too tedious.
  const objectsInv = Object.fromEntries(
    ["1.0/", "1.1/"].map((vers) => [
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
      ],
    ]),
  );
  const utilsFile = Object.fromEntries(
    ["1.0/", "1.1/"].map((vers) => [
      `docs/api/qiskit/${vers}utils.mdx`,
      [
        "#qiskit.utils.optionals.HAS_TESTTOOLS",
        "#qiskit.utils.optionals.HAS_GRAPHVIZ",
        "#qiskit.utils.optionals.HAS_PYDOT",
      ],
    ]),
  );
  return {
    "docs/api/qiskit/release-notes/1.0.mdx": [
      "/api/qiskit/1.0/utils#qiskit.utils.optionals.HAS_SYMENGINE",
    ],
    ...objectsInv,
    ...utilsFile,
  };
}

function _patternsReorg(): FilesToIgnores {
  // We have redirects for all these files. It's best to update API docs to point directly to the new URL,
  // but we don't bother updating old docs.
  const qiskit = Object.fromEntries(
    ["", "0.46/", "1.0/", "1.1/"].flatMap((vers) => [
      [
        `docs/api/qiskit/${vers}qiskit.circuit.QuantumCircuit.mdx`,
        ["/build/circuit-construction"],
      ],
      [
        `docs/api/qiskit/${vers}qiskit.transpiler.passes.ValidatePulseGates.mdx`,
        ["/build/pulse"],
      ],
      [`docs/api/qiskit/${vers}qpy.mdx`, ["/build/pulse"]],
    ]),
  );
  const runtime = Object.fromEntries(
    [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].flatMap((vers) => [
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.Batch.mdx`,
        ["/run/run-jobs-batch", "/run/max-execution-time"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.Session.mdx`,
        ["/run/max-execution-time"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.options.Options.mdx`,
        [
          "/run/max-execution-time",
          "/run/configure-error-mitigation",
          "/run/max-execution-time#maximum-execution-time",
        ],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.options.EstimatorOptions.mdx`,
        [
          "/run/configure-error-mitigation",
          "/run/configure-runtime-compilation",
        ],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.EstimatorV1.mdx`,
        ["/api/migration-guides/v2-primitives"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.SamplerV1.mdx`,
        ["/api/migration-guides/v2-primitives"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.EstimatorV2.mdx`,
        ["/run"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.SamplerV2.mdx`,
        ["/run"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/qiskit_ibm_runtime.noise_learner.NoiseLearner.mdx`,
        ["/run"],
      ],
      [`docs/api/qiskit-ibm-runtime/0.${vers}/transpiler.mdx`, ["/transpile"]],
    ]),
  );
  return {
    ...qiskit,
    ...runtime,
    "docs/api/qiskit/release-notes/1.0.mdx": [
      "/start/install#qiskit-versioning",
      "/start/configure-qiskit-local",
    ],
    "docs/api/qiskit/release-notes/0.46.mdx": [
      "/start/install#qiskit-versioning",
    ],
    "docs/api/qiskit/1.1/qiskit.quantum_info.SparsePauliOp.mdx": [
      "/start/configure-qiskit-local#environment-variables",
    ],
  };
}

const _QISKIT_OBJECT_INV = Object.fromEntries(
  ["", "dev/", "0.46/", "1.0/", "1.1/"].map((vers) => [
    `public/api/qiskit/${vers}objects.inv`,
    [
      `/api/qiskit/${vers}qiskit.visualization.timeline_drawer#style-dict-doc`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-constraints`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-envelope`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-eval-condition`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-serialize`,
      `/api/qiskit/${vers}qiskit.pulse.library.SymbolicPulse#symbolic-pulse-validation`,
    ],
  ]),
);

const FILES_TO_IGNORES__EXPECTED: FilesToIgnores = mergeFilesToIgnores(
  _qiskitUtilsData(),
  _patternsReorg(),
  {
    "docs/api/qiskit/0.46/qiskit.algorithms.optimizers.NFT.mdx": [
      "#id1",
      "#id2",
    ],
    "docs/api/qiskit/release-notes/0.46.mdx": [
      "/api/qiskit-ibm-provider/ibm_jupyter",
    ],
  },
);

const FILES_TO_IGNORES__SHOULD_FIX: FilesToIgnores = mergeFilesToIgnores(
  _QISKIT_QPY_IGNORES,
  _RUNTIME_OBJECT_INV,
  _QISKIT_OBJECT_INV,
);

export const FILES_TO_IGNORES: FilesToIgnores = mergeFilesToIgnores(
  FILES_TO_IGNORES__EXPECTED,
  FILES_TO_IGNORES__SHOULD_FIX,
);
