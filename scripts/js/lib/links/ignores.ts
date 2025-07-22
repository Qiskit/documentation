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

export const IGNORED_FILES: Set<string> = new Set([]);

// -----------------------------------------------------------------------------------
// Always ignored URLs - prefer to use more precise ignores
// -----------------------------------------------------------------------------------

// These can be removed once we remove old versions of Qiskit SDK. These links legitimately 404.
const _QISKIT_AQUA_CPLEX = [
  "https://www.ibm.com/support/knowledgecenter/SSSA5P_12.10.0/COS_KC_home.html",
  "https://www.ibm.com/support/knowledgecenter/SSSA5P_12.10.0/ilog.odms.cplex.help/CPLEX/GettingStarted/topics/set_up/setup_synopsis.html",
  "https://www.ibm.com/support/knowledgecenter/SSSA5P_12.10.0/ilog.odms.cplex.help/CPLEX/GettingStarted/topics/set_up/Python_setup.html",
];

// These external URLs were all working the last time we checked, i.e. the link checker was giving false positives.
const ALWAYS_IGNORED_URLS__EXPECTED = [
  ..._QISKIT_AQUA_CPLEX,
  "https://auth.quantum-computing.ibm.com/api",
  "https://auth.quantum.ibm.com/api",
  "https://quantum-computing.cloud.ibm.com",
  "https://api.quantum-computing.ibm.com/runtime",
  "https://us-east.quantum-computing.cloud.ibm.com/",
  "https://www.cs.tau.ac.il/~nogaa/PDFS/r.pdf",
  "http://www.satcompetition.org/2009/format-benchmarks2009.html",
  "https://qiskit.slack.com/archives/C06KF8YHUAU",
  "https://support.us.ovhcloud.com/hc/en-us/articles/360002245784-Creating-Your-First-Public-Cloud-Project",
  "https://support.google.com/accounts/answer/27441?hl",
  "https://colab.research.google.com/",
  "https://colab.research.google.com/#create=true",
  "https://marketplace.visualstudio.com/items?itemName=qiskit.qiskit-vscode",
  "https://forms.office.com/r/zN3hvMTqJ1",
  "https://forms.office.com/e/kJzViZNVa4",
  "https://platform.openai.com/docs/api-reference/completions",
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
  "https://link.aps.org/doi/10.1103/PhysRevA.100.032328",
  "https://link.aps.org/doi/10.1103/PRXQuantum.4.030319",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.71.052330",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.93.032318",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.20.024034",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.105.032620",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.94.052325",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.20.064027",
  "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.210601",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.033154",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.92.042303",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.033309",
  "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.109.114510",
  "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.020315",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.19.024047",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.013254",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.102.032420",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.032430",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.023218",
  "https://journals.aps.org/pr/pdf/10.1103/PhysRev.47.777",
  "https://journals.aps.org/prper/pdf/10.1103/PhysRevSTPER.11.020117",
  "https://academic.oup.com/book/36426",
  "https://www.cs.bham.ac.uk/~xin/papers/published_tec_sep00_constraint.pdf",
  "https://https://arxiv.org/abs/quant-ph/0403071",
  "https://doi.org/10.1103/PhysRevApplied.5.034007",
  "http://dx.doi.org/10.1103/PhysRevA.83.012308",
  "https://doi.org/10.1103/PhysRevLett.103.150502",
  "https://doi.org/10.1103/PhysRevA.99.032331",
  "https://dl.acm.org/doi/10.1145/3445814.3446706",
  "https://doi.org/10.1145/3520304.3533963",
  "https://doi.org/10.1145/3445814.3446706",
  "https://doi.org/10.1145/3490631",
  "http://dx.doi.org/10.1145/1278349.1278355",
  "https://doi.org/10.1063/5.0042147",
  "https://doi.org/10.1103/PhysRevApplied.22.054037",
  "https://doi.org/10.1103/PhysRevApplied.20.014024",
  "https://doi.org/10.1103/PhysRevApplied.22.064068",
  "https://aip.scitation.org/doi/10.1063/1.5019371",
  "https://aip.scitation.org/doi/10.1063/1.5141835",
  "https://pubs.aip.org/aip/rsi/article/88/10/104703/836456",
  "https://epubs.siam.org/doi/10.1137/100787921",
  "https://epubs.siam.org/doi/10.1137/S0097539795293172",
  "https://ieeexplore.ieee.org/document/1323804",
  "https://ieeexplore.ieee.org/document/880982",
  "https://ieeexplore.ieee.org/document/657661",
  "https://spj.science.org/doi/10.34133/icomputing.0037",
  "https://finance.yahoo.com/quote/8801.T",
  "https://finance.yahoo.com/quote/CLF",
  "https://finance.yahoo.com/quote/GBPJPY",
  "https://finance.yahoo.com/quote/ITX.MC",
  "https://finance.yahoo.com/quote/META",
  "https://finance.yahoo.com/quote/TMBMKDE-10Y",
  "https://finance.yahoo.com/quote/XS2239553048",
  "https://www.ibm.com/downloads/documents/us-en/107a02e97d48fcd7",
  "https://www.ibm.com/downloads/documents/us-en/10a99803fcafdd0c",
  "https://www.eetimes.com/battery-research-advances-quantum-computing-capabilities/",
  "https://www.eon.com/en/about-us/media/press-release/2021/2021-09-02-eon-allies-with-ibm-quantum.html",
  "https://quantumcomputing.stackexchange.com/questions/tagged/qiskit",
  "https://quantumcomputing.stackexchange.com/questions/tagged/ibm-q-experience",
  "https://onlinelibrary.wiley.com/doi/epdf/10.1002/ijch.202100111",
  "https://pubs.acs.org/doi/10.1021/acs.jpcb.5c01030",
  "https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.1519",
  "https://github.com/Qiskit/qiskit-terra/issues/5775",
  "https://docs.python-requests.org/en/latest/api/",
  "https://github.com/Qiskit/qiskit-terra/issues/9552",
  "https://www.ibm.com/downloads/cas/8QDGKDZJ",
  "https://www.ibm.com/downloads/cas/BDGQRXOZ",
  "https://www.iotworldtoday.com/smart-cities/ibm-panel-highlights-quantum-role-in-sustainability",
  "https://journals.aps.org/prxquantum/pdf/10.1103/PRXQuantum.3.010313",
  "https://pubs.acs.org/doi/full/10.1021/acs.jctc.8b00450",
  "https://ibm.box.com/shared/static/59c2kjqefvjy5wy5lct099thr4y0ry8c.zip",
  "https://ibm.box.com/s/fh3xele1e7k0nrgd1imivvq52hy3wz9c",
  "https://dl.acm.org/doi/10.1145/359340.359342",
  "https://pubs.aip.org/aip/jap/article/132/16/160902/2837574/The-future-of-quantum-computing-with",
  "https://csrc.nist.gov/glossary/term/security_strength",
  "https://csrc.nist.gov/news/2023/three-draft-fips-for-post-quantum-cryptography",
  "https://csrc.nist.gov/pubs/fips/205/ipd",
  "https://dl.acm.org/doi/10.1145/237814.237838",
  "https://doi.org/10.1080/07468342.1987.11973000",
  "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4878865/",
  "https://dl.acm.org/doi/10.1145/237814.237866",
  "https://doi.org/10.1137/S0097539795293172",
  "https://doi.org/10.1063/5.0082975",
  "https://doi.org/10.1145/359340.359342",
  "https://doi.org/10.1137/S0097539795293172",
  "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.140503",
  "https://doi.org/10.1145/276698.276705",
  "https://doi.org/10.1145/237814.237838",
  "https://ibm.box.com/shared/static/vee9e1kkxxiih5g8yqdhoo6t0o3dw7xf.zip",
  "https://ibm.box.com/shared/static/vee9e1kkxxiih5g8yqdhoo6t0o3dw7xf.zip",
  "https://ibm.box.com/shared/static/a0zgies7bh91hm2lwev9o0bfeybxc6n6.zip",
  "https://ibm.box.com/shared/static/3s99zptw6c7nrfzmneogs4y7ezrx5nbh.zip",
  "https://ibm.box.com/shared/static/ruz8wf353hncenmaywjlfjilflaumnzt.zip",
  "https://ibm.box.com/shared/static/tg8vv00ern2bmxmm033xt9oe0fcvwamc.zip",
  "https://ibm.box.com/shared/static/pnb9vhw1ruz72r3wp4pwfilwc7rzmufw.zip",
  "https://ibm.box.com/shared/static/0hvvgr1gnwx64x2ukgk04sss6sxc4zko.zip",
  "https://ibm.box.com/shared/static/srgnll6u8ame7gk186pkthq7erc7l6rw.zip",
  "https://ibm.box.com/s/kzzsmxhw38vph1ioohczaet53euwi310",
  "https://ibm.box.com/shared/static/ws8x00xu0pksjzixyyspxzrilvt36iff.zip",
  "https://ibm.box.com/shared/static/k38xhk5yaqy9b3gjdmu0ynhnd9i4c3e1.zip",
  "https://ibm.box.com/s/bipgoms7gr6b6vhkoc1uw6oi4wsanfoq",
  "https://ibm.box.com/shared/static/fw1538dogvyv0qbfqg8tan1k2fs27mfv.zip",
  "https://ibm.box.com/s/blnffu0pd7yzxarq3zc3w0jv90365ny2",
  "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.85.441"
];

// These external URLs cause actual 404s and should probably be fixed.
const ALWAYS_IGNORED_URLS__SHOULD_FIX: string[] = [
  // We accidentally broke redirects for learn.qiskit.org. The IBM infra team is working on this.
  "https://learn.qiskit.org/course/ch-algorithms/quantum-phase-estimation",
];

export const ALWAYS_IGNORED_URLS = new Set([
  ...ALWAYS_IGNORED_URLS__EXPECTED,
  ...ALWAYS_IGNORED_URLS__SHOULD_FIX,
]);

// -----------------------------------------------------------------------------------
// Always ignored URL regexes - be careful using this
// -----------------------------------------------------------------------------------

function _addonsObjectsInvRegexes(): string[] {
  // Addons have non-API docs in their Sphinx build that translate into invalid links
  // we should ignore
  return ["how-tos", "how_tos", "install", "index", "explanations"].flatMap(
    (path) => [
      // Latest version
      `\/api\/qiskit-addon-[^\/]+\/${path}(\/.*|#.*|$)`,
      // Historical versions
      `\/api\/qiskit-addon-[^\/]+\/[0-9]+\.[0-9]{1,2}\/${path}(\/.*|#.*|$)`,
    ],
  );
}

function _runtimeObjectsInvRegexes(): string[] {
  // Runtime has non-API docs in their Sphinx build that translate into invalid links
  // we should ignore
  return [
    "errors",
    "migrate",
    "cloud",
    "faqs",
    "index",
    "sessions",
    "primitives",
    "compare",
    "retired",
  ].map(
    (path) =>
      `\/api\/qiskit-ibm-runtime\/(0.16|0.15|0.14)\/${path}(\/.*|#.*|$)`,
  );
}

export const ALWAYS_IGNORED_URL_REGEXES: string[] = [
  ..._addonsObjectsInvRegexes(),
  ..._runtimeObjectsInvRegexes(),
];

// -----------------------------------------------------------------------------------
// Always ignored URL prefixes - be careful using this
// -----------------------------------------------------------------------------------

export const ALWAYS_IGNORED_URL_PREFIXES: string[] = [];

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
        `public/docs/api/qiskit-ibm-runtime/${vers}objects.inv`,
        [
          `/docs/api/qiskit-ibm-runtime/${vers}index#next-steps`,
          `/docs/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-version-api-docs-preview`,
        ],
      ],
    ),
  );
  const legacy2 = Object.fromEntries(
    ["0.23/", "0.24/", "0.25/", "0.26/", "0.27/", "0.28/", "0.29/"].map(
      (vers) => [
        `public/docs/api/qiskit-ibm-runtime/${vers}objects.inv`,
        [
          `/docs/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-version-api-docs-preview`,
        ],
      ],
    ),
  );
  const latest = Object.fromEntries(
    [
      "",
      "dev/",
      "0.30/",
      "0.31/",
      "0.32/",
      "0.33/",
      "0.34/",
      "0.35/",
      "0.36/",
      "0.37/",
      "0.38/",
      "0.39/",
    ].map((vers) => [
      `public/docs/api/qiskit-ibm-runtime/${vers}objects.inv`,
      [
        `/docs/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-release-api-docs-preview`,
      ],
    ]),
  );
  return { ...legacy, ...legacy2, ...latest };
}

function _qiskitUtilsData(): FilesToIgnores {
  // Qiskit docs used .. py:data:: incorrectly. We didn't fix these versions of the docs
  // because it is too tedious.
  const objectsInv = Object.fromEntries(
    ["0.45/", "1.0/", "1.1/"].map((vers) => [
      `public/docs/api/qiskit/${vers}objects.inv`,
      [
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_AER`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_CONSTRAINT`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_CPLEX`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_CVXPY`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_DOCPLEX`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_FIXTURES`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_GRAPHVIZ`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IBMQ`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IGNIS`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IPYTHON`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_IPYWIDGETS`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_JAX`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_JUPYTER`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_MATPLOTLIB`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_NETWORKX`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_NLOPT`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PDFLATEX`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PDFTOCAIRO`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PIL`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PYDOT`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PYGMENTS`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_PYLATEX`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_QASM3_IMPORT`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SEABORN`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SKLEARN`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SKQUANT`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SKSNFIT`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SQSNOBFIT`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_SYMENGINE`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_TESTTOOLS`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_TOQM`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_TWEEDLEDUM`,
        `/docs/api/qiskit/${vers}utils#qiskit.utils.optionals.HAS_Z3`,
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
      "/docs/api/qiskit/1.0/utils#qiskit.utils.optionals.HAS_SYMENGINE",
    ],
    ...objectsInv,
    ...utilsFile,
  };
}

function _patternsReorg(): FilesToIgnores {
  // We have redirects for all these files. It's best to update API docs to point directly to the new URL,
  // but we don't bother updating old docs.
  const qiskit = Object.fromEntries(
    ["", "0.45/", "0.46/", "1.0/", "1.1/", "1.2/"].flatMap((vers) => [
      [
        `docs/api/qiskit/${vers}qiskit.circuit.QuantumCircuit.mdx`,
        ["/docs/build/circuit-construction"],
      ],
      [
        `docs/api/qiskit/${vers}qiskit.transpiler.passes.ValidatePulseGates.mdx`,
        ["/docs/build/pulse"],
      ],
      [`docs/api/qiskit/${vers}qpy.mdx`, ["/docs/build/pulse"]],
    ]),
  );
  const runtime = Object.fromEntries(
    [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].flatMap((vers) => [
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/batch.mdx`,
        ["/docs/run/run-jobs-batch", "/docs/run/max-execution-time"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/session.mdx`,
        ["/docs/run/max-execution-time"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/options-options.mdx`,
        [
          "/docs/run/max-execution-time",
          "/docs/run/configure-error-mitigation",
          "/docs/run/max-execution-time#maximum-execution-time",
        ],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/options-estimator-options.mdx`,
        [
          "/docs/run/configure-error-mitigation",
          "/docs/run/configure-runtime-compilation",
        ],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/estimator-v1.mdx`,
        ["/docs/api/migration-guides/v2-primitives"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/sampler-v1.mdx`,
        ["/docs/api/migration-guides/v2-primitives"],
      ],
      [`docs/api/qiskit-ibm-runtime/0.${vers}/estimator-v2.mdx`, ["/docs/run"]],
      [`docs/api/qiskit-ibm-runtime/0.${vers}/sampler-v2.mdx`, ["/docs/run"]],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/noise-learner-noise-learner.mdx`,
        ["/docs/run"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/transpiler.mdx`,
        ["/docs/transpile"],
      ],
    ]),
  );
  return {
    ...qiskit,
    ...runtime,
    "docs/api/qiskit/release-notes/1.0.mdx": [
      "/docs/start/install#qiskit-versioning",
      "/docs/start/configure-qiskit-local",
    ],
    "docs/api/qiskit/release-notes/0.46.mdx": [
      "/docs/start/install#qiskit-versioning",
    ],
    "docs/api/qiskit/1.1/qiskit.quantum_info.SparsePauliOp.mdx": [
      "/docs/start/configure-qiskit-local#environment-variables",
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

function _qiskitCObjectsInvRegexes(): FilesToIgnores {
  return {
    "public/docs/api/qiskit-c/objects.inv": [
      "/docs/api/qiskit-c/qk-complex-64#qk_complex64_from_native",
      "/docs/api/qiskit-c/qk-complex-64#qk_complex64_from_native.value",
      "/docs/api/qiskit-c/qk-complex-64#qk_complex64_to_native",
      "/docs/api/qiskit-c/qk-complex-64#qk_complex64_to_native.value",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_ms",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_ns",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_ps",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_s",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_us",
      "/docs/api/qiskit-c/index#c_api",
      "/docs/api/qiskit-c/qk-complex-64#structqkcomplex64",
      "/docs/api/qiskit-c/qk-complex-64#structqkcomplex64_1a1d0477d0d30b088dfd322e85b4be5464",
      "/docs/api/qiskit-c/qk-complex-64#structqkcomplex64_1ae08ef5279f405357144d24ec1147b5f9",
    ],
  };
}

const FILES_TO_IGNORES__SHOULD_FIX: FilesToIgnores = mergeFilesToIgnores(
  _qiskitCObjectsInvRegexes(),
);

export const FILES_TO_IGNORES: FilesToIgnores = mergeFilesToIgnores(
  FILES_TO_IGNORES__EXPECTED,
  FILES_TO_IGNORES__SHOULD_FIX,
);
