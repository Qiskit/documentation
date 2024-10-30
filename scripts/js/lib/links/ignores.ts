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
  "public/api/qiskit-addon-cutting/objects.inv",
  "public/api/qiskit-addon-mpf/objects.inv",
  "public/api/qiskit-addon-obp/objects.inv",
  "public/api/qiskit-addon-sqd/objects.inv",
  "public/api/qiskit-addon-utils/objects.inv",
]);

// -----------------------------------------------------------------------------------
// Always ignored URLs - prefer to use more precise ignores
// -----------------------------------------------------------------------------------

// These external URLs were all working the last time we checked, i.e. the link checker was giving false positives.
const ALWAYS_IGNORED_URLS__EXPECTED = [
  "https://auth.quantum-computing.ibm.com/api",
  "https://www.cs.tau.ac.il/~nogaa/PDFS/r.pdf",
  "http://www.satcompetition.org/2009/format-benchmarks2009.html",
  "https://qiskit.slack.com/archives/C06KF8YHUAU",
  "https://support.us.ovhcloud.com/hc/en-us/articles/360002245784-Creating-Your-First-Public-Cloud-Project",
  "https://support.google.com/accounts/answer/27441?hl",
  "https://colab.research.google.com/",
  "https://colab.research.google.com/#create=true",
  "https://marketplace.visualstudio.com/items?itemName=qiskit.qiskit-vscode",
  "https://code.visualstudio.com/",
  "https://doi.org/10.1002/qute.201800012",
  "https://stackoverflow.com/",
  "https://stackoverflow.com/questions/1049722/what-is-2s-complement",
  "https://quantumcomputing.stackexchange.com/help/how-to-ask",
  "https://quantumcomputing.stackexchange.com/questions/",
  "https://quantumcomputing.stackexchange.com/questions/12721/how-to-calculate-destabilizer-group-of-toric-and-other-codes",
  "https://www.science.org/doi/10.1126/science.273.5278.1073",
  "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.011022",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.99.032331",
  "https://link.aps.org/doi/10.1103/PhysRevLett.103.110501",
  "https://link.aps.org/doi/10.1103/PhysRevA.83.012308",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.71.052330",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.93.032318",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.20.024034",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.105.032620",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.94.052325",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.20.064027",
  "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.210601",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.033154",
  "https://www.cs.bham.ac.uk/~xin/papers/published_tec_sep00_constraint.pdf",
  "https://https://arxiv.org/abs/quant-ph/0403071",
  "https://doi.org/10.1103/PhysRevApplied.5.034007",
  "http://dx.doi.org/10.1103/PhysRevA.83.012308",
  "https://doi.org/10.1103/PhysRevLett.103.150502",
  "https://doi.org/10.1103/PhysRevA.99.032331",
];

// These external URLs cause actual 404s and should probably be fixed.
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

function _runtimeObjectsInv(): FilesToIgnores {
  const legacy = Object.fromEntries(
    ["0.16/", "0.17/", "0.18/", "0.19/", "0.20/", "0.21/", "0.22/"].map(
      (vers) => [
        `public/api/qiskit-ibm-runtime/${vers}objects.inv`,
        [
          `/api/qiskit-ibm-runtime/${vers}index#next-steps`,
          `/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-version-api-docs-preview`,
        ],
      ],
    ),
  );
  const legacy2 = Object.fromEntries(
    ["0.23/", "0.24/", "0.25/", "0.26/", "0.27/", "0.28/", "0.29/"].map(
      (vers) => [
        `public/api/qiskit-ibm-runtime/${vers}objects.inv`,
        [
          `/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-version-api-docs-preview`,
        ],
      ],
    ),
  );
  const latest = Object.fromEntries(
    ["", "dev/", "0.30/", "0.31/", "0.32/", "0.33/", "0.34/", "0.35/"].map(
      (vers) => [
        `public/api/qiskit-ibm-runtime/${vers}objects.inv`,
        [
          `/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-release-api-docs-preview`,
        ],
      ],
    ),
  );
  return { ...legacy, ...legacy2, ...latest };
}

function _qiskitUtilsData(): FilesToIgnores {
  // Qiskit docs used .. py:data:: incorrectly. We didn't fix these versions of the docs
  // because it is too tedious.
  const objectsInv = Object.fromEntries(
    ["0.45/", "1.0/", "1.1/"].map((vers) => [
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
    [
      "0.35",
      "0.36",
      "0.37",
      "0.38",
      "0.39",
      "0.40",
      "0.41",
      "0.42",
      "0.43",
      "0.44",
      "0.45",
      "1.0",
      "1.1",
    ].map((vers) => [
      `docs/api/qiskit/${vers}/utils.mdx`,
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
    ["", "0.45/", "0.46/", "1.0/", "1.1/"].flatMap((vers) => [
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

function _legacyQiskitSDKIssues(): FilesToIgnores {
  // These are all issues due to quirks in our old docs. They
  // are all safe to ignore and not worth the effort to fix.

  // The module page is missing the expected anchor, even in the original Sphinx. However,
  // the page is small enough that the link to the transpile function is easy to access.
  const transpileAnchor = Object.fromEntries(
    ["37", "38", "39", "40", "41", "42", "43"].map((vers) => [
      `docs/api/qiskit/0.${vers}/qiskit.transpiler.preset_passmanagers.generate_preset_pass_manager.mdx`,
      ["compiler#qiskit.compiler.transpile"],
    ]),
  );
  // The capitalization of the anchor link changes between the class page and the referring
  // page, and it's inconsistent in the original Sphinx. However, it doesn't matter
  // because the anchor is at the top of the page anyways.
  const pulseLibraryAnchorCapitalization = Object.fromEntries(
    ["37", "38", "39", "40", "41", "42"].flatMap((vers) => [
      [
        `docs/api/qiskit/0.${vers}/qiskit.pulse.library.gaussian_square.mdx`,
        ["qiskit.pulse.library.gaussian#qiskit.pulse.library.gaussian"],
      ],
      [
        `docs/api/qiskit/0.${vers}/pulse.mdx`,
        [
          "qiskit.pulse.library.constant#qiskit.pulse.library.constant",
          "qiskit.pulse.library.gaussian#qiskit.pulse.library.gaussian",
          "qiskit.pulse.library.drag#qiskit.pulse.library.drag",
        ],
      ],
    ]),
  );
  return {
    ...transpileAnchor,
    ...pulseLibraryAnchorCapitalization,
  };
}

const FILES_TO_IGNORES__EXPECTED: FilesToIgnores = mergeFilesToIgnores(
  _qiskitUtilsData(),
  _patternsReorg(),
  _runtimeObjectsInv(),
  _legacyQiskitSDKIssues(),
);

const FILES_TO_IGNORES__SHOULD_FIX: FilesToIgnores = {
  "docs/api/qiskit-addon-obp/utils-metadata-obp-metadata.mdx": [
    "utils-truncating#TruncationErrorBudget.p_norm",
  ],
  "docs/api/qiskit-addon-obp/utils-metadata-slice-metadata.mdx": [
    "utils-truncating#TruncationErrorBudget.p_norm",
  ],
};

export const FILES_TO_IGNORES: FilesToIgnores = mergeFilesToIgnores(
  FILES_TO_IGNORES__EXPECTED,
  FILES_TO_IGNORES__SHOULD_FIX,
);
