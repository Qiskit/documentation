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

export const IGNORED_FILES: Set<string> = new Set([
  // TODO(#4200):
  // The Qiskit C API objects.inv has a lot of broken links that we should fix.
  // When working on this, we should also try to fix the links in `_qiskitCRegexes()`
  // at the end of this file.
  "public/docs/api/qiskit-c/objects.inv",
]);

// -----------------------------------------------------------------------------------
// Always ignored URLs - prefer to use more precise ignores
// -----------------------------------------------------------------------------------

// These links 403/404 with our user agent but 200 in browser. We should respect
// the website's preference and avoid checking automatically. Might be a good
// idea to click on these every now and again to check they still work.
const FORBIDS_OUR_USER_AGENT = [
  "http://dx.doi.org/10.1103/PhysRevA.83.012308",
  "http://dx.doi.org/10.1145/1278349.1278355",
  "https://academic.oup.com/book/36426",
  "https://crates.io/crates/faer",
  "https://dl.acm.org/doi/10.1145/237814.237838",
  "https://dl.acm.org/doi/10.1145/237814.237866",
  "https://dl.acm.org/doi/10.1145/3445814.3446706",
  "https://dl.acm.org/doi/10.1145/359340.359342",
  "https://dl.acm.org/doi/10.1145/3656436",
  "https://doi.org/10.1063/5.0042147",
  "https://doi.org/10.1063/5.0082975",
  "https://doi.org/10.1080/07468342.1987.11973000",
  "https://doi.org/10.1103/PhysRevA.99.032331",
  "https://doi.org/10.1103/PhysRevApplied.20.014024",
  "https://doi.org/10.1103/PhysRevApplied.22.054037",
  "https://doi.org/10.1103/PhysRevApplied.22.064068",
  "https://doi.org/10.1103/PhysRevApplied.5.034007",
  "https://doi.org/10.1137/S0097539795293172",
  "https://doi.org/10.1145/167088.167239",
  "https://doi.org/10.1145/237814.237838",
  "https://doi.org/10.1145/237814.237866",
  "https://doi.org/10.1145/276698.276705",
  "https://doi.org/10.1145/3445814.3446706",
  "https://doi.org/10.1145/3490631",
  "https://doi.org/10.1145/3520304.3533963",
  "https://doi.org/10.1145/359340.359342",
  "https://dx.doi.org/10.1103/PhysRevA.83.012308",
  "https://dx.doi.org/10.1145/1278349.1278355",
  "https://epubs.siam.org/doi/10.1137/100787921",
  "https://epubs.siam.org/doi/10.1137/S0097539795293172",
  "https://epubs.siam.org/doi/abs/10.1137/S0036144598347011",
  "https://journals.aps.org/pr/pdf/10.1103/PhysRev.47.777",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.100.012305",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.102.032420",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.032430",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.105.032620",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.71.052330",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.92.042303",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.93.032318",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.94.052325",
  "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.99.032331",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.19.024047",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.20.024034",
  "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.20.064027",
  "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.109.114510",
  "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.140503",
  "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.210601",
  "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.85.441",
  "https://journals.aps.org/prper/pdf/10.1103/PhysRevSTPER.11.020117",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.033154",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.013254",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.023218",
  "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.033309",
  "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.011022",
  "https://journals.aps.org/prx/accepted/a9074K06A8e1590147da9c69f8c4b64c28247be5a",
  "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.040326",
  "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.020315",
  "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.030339",
  "https://journals.aps.org/prxquantum/pdf/10.1103/PRXQuantum.3.010313",
  "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.32.170",
  "https://link.aps.org/doi/10.1103/PRXQuantum.4.030319",
  "https://link.aps.org/doi/10.1103/PhysRevA.100.032328",
  "https://link.aps.org/doi/10.1103/PhysRevA.83.012308",
  "https://link.aps.org/doi/10.1103/PhysRevLett.103.110501",
  "https://onlinelibrary.wiley.com/doi/epdf/10.1002/ijch.202100111",
  "https://platform.openai.com/docs/api-reference/completions",
  "https://pubs.acs.org/doi/10.1021/acs.jpcb.5c01030",
  "https://pubs.acs.org/doi/full/10.1021/acs.jctc.8b00450",
  "https://pubs.aip.org/aip/jap/article/132/16/160902/2837574/The-future-of-quantum-computing-with",
  "https://pubs.aip.org/aip/rsi/article/88/10/104703/836456",
  "https://spj.science.org/doi/10.34133/icomputing.0037",
  "https://support.us.ovhcloud.com/hc/en-us/articles/360002245784-Creating-Your-First-Public-Cloud-Project",
  "https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.1519",
  "https://www.eetimes.com/battery-research-advances-quantum-computing-capabilities/",
  "https://www.eon.com/en/about-us/media/press-release/2021/2021-09-02-eon-allies-with-ibm-quantum.html",
  "https://www.iotworldtoday.com/smart-cities/ibm-panel-highlights-quantum-role-in-sustainability",
  "https://www.science.org/doi/10.1126/sciadv.adk4321",
  "https://www.science.org/doi/10.1126/science.273.5278.1073",
  "https://www.science.org/doi/full/10.1126/science.aad9480",
  "https://www.science.org/doi/full/10.1126/science.abq0225",
  "https://www.science.org/doi/full/10.1126/science.abq0225#supplementary-materials",
];

// These links work when last tested in a browser
const FETCH_RETURNS_405 = [
  "https://colab.research.google.com/",
  "https://colab.research.google.com/#create=true",
  "https://forms.cloud.microsoft/e/3Wi9cbjQPK",
  "https://forms.office.com/r/zN3hvMTqJ1",
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC4878865/",
];

// Fetching these links throws an error, but they work in-browser. Not sure why.
const FETCH_FAILS = [
  "https://www.cs.tau.ac.il/~nogaa/PDFS/r.pdf",
  "https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/quantum-computing-use-cases-are-getting-real-what-you-need-to-know",
  "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/quantum-computing-just-might-save-the-planet",
  "https://www.mckinsey.com/industries/chemicals/our-insights/the-next-big-thing-quantum-computings-potential-impact-on-chemicals?cid=eml-web",
  // The following link is only accessible through IBM VPN
  "https://w3.ibm.com/w3publisher/w3-privacy-notice",
];

// These external URLs were all working the last time we checked, i.e. the link checker was giving false positives.
const ALWAYS_IGNORED_URLS__EXPECTED = [
  ...FORBIDS_OUR_USER_AGENT,
  ...FETCH_RETURNS_405,
  ...FETCH_FAILS,

  // The following links fail inconsistently. That is, they don't always return
  // the same status code. Sometimes it's 404, sometimes 503, sometimes 200 etc.
  // They do work whenever I've tested them in a browser.
  "https://csrc.nist.gov/news/2023/three-draft-fips-for-post-quantum-cryptography",
  "https://csrc.nist.gov/pubs/fips/205/ipd",
  "https://doi.org/10.6028/jres.104.027",
  "https://eprint.iacr.org/2012/090",
  "https://finance.yahoo.com/quote/8801.T",
  "https://finance.yahoo.com/quote/CLF",
  "https://finance.yahoo.com/quote/GBPJPY",
  "https://finance.yahoo.com/quote/ITX.MC",
  "https://finance.yahoo.com/quote/META",
  "https://finance.yahoo.com/quote/TMBMKDE-10Y",
  "https://finance.yahoo.com/quote/XS2239553048",
  "https://ibm.ent.box.com/s/bipgoms7gr6b6vhkoc1uw6oi4wsanfoq",
  "https://ibm.ent.box.com/s/blnffu0pd7yzxarq3zc3w0jv90365ny2",
  "https://ibm.ent.box.com/s/fh3xele1e7k0nrgd1imivvq52hy3wz9c",
  "https://ibm.ent.box.com/s/kzzsmxhw38vph1ioohczaet53euwi310",
  "https://marketplace.visualstudio.com/items?itemName=qiskit.qiskit-vscode",
  "https://support.google.com/accounts/answer/27441?hl",
  "https://www.ibm.com/thought-leadership/institute-business-value/report/quantumfinancial",
];

// These external URLs cause actual 404s and should probably be fixed.
const ALWAYS_IGNORED_URLS__SHOULD_FIX: string[] = [
  // These schemas are not available any more. References to these in the new API docs have been fixed,
  // but they will never be fixed in the old API docs.  We decided to leave these links as-is for archival purposes.
  "https://github.com/Qiskit/ibm-quantum-schemas/blob/main/schemas/backend_status_schema.json",
  "https://github.com/Qiskit/ibm-quantum-schemas/blob/main/schemas/default_pulse_configuration_schema.json",

  // These links are from old IQP and do not work any more
  "https://auth.quantum-computing.ibm.com/api",
  "https://auth.quantum.ibm.com/api",
  "https://quantum-computing.cloud.ibm.com",

  // Other links that don't seem to exist any more
  "https://www.cs.bham.ac.uk/~xin/papers/published_tec_sep00_constraint.pdf",
  "https://www.globaldataquantum.com/en/quantum-portfolio-optimizer/#form",
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

export const ALWAYS_IGNORED_URL_REGEXES: string[] = [
  ..._addonsObjectsInvRegexes(),
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
    ["0.25/", "0.26/", "0.27/", "0.28/", "0.29/"].map((vers) => [
      `public/docs/api/qiskit-ibm-runtime/${vers}objects.inv`,
      [
        `/docs/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-version-api-docs-preview`,
      ],
    ]),
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
      "0.40/",
      "0.41/",
      "0.42/",
      "0.43/",
      "0.44/",
      "0.45/",
    ].map((vers) => [
      `public/docs/api/qiskit-ibm-runtime/${vers}objects.inv`,
      [
        `/docs/api/qiskit-ibm-runtime/${vers}index#qiskit-runtime-release-api-docs-preview`,
        // TODO: Remove these ignores when the executor guides are migrated to Qiskit/documentation
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#broadcast-semantics-of-the-executor`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#combining-multiple-inputs`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#common-patterns`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#creating-a-2d-grid-sweep`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#example-predicting-output-shapes`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#example-understanding-extrinsic-shapes`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#how-shape-and-input-shapes-interact`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#indexing-into-results`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#intrinsic-and-extrinsic-axes`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#multiple-randomization-axes`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#no-explicit-randomization-axes`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#output-array-shapes`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#quick-start-example`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#randomization-and-the-shape-parameter`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#single-randomization-axis`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#sweeping-a-single-parameter`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/broadcasting#what-is-broadcasting`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/executor-basic`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/executor-basic#running-an-executor-job`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/executor-basic#the-executor-a-quick-start-guide`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/executor-basic#the-inputs-to-the-executor-quantum-programs`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/executor-basic#the-outputs-of-the-executor`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/index`,
        `/docs/api/qiskit-ibm-runtime/${vers}guides/index#guides`,
      ],
    ]),
  );

  return { ...legacy, ...latest };
}

function _qiskitUtilsData(): FilesToIgnores {
  // Qiskit docs used .. py:data:: incorrectly. We didn't fix these versions of the docs
  // because it is too tedious.
  const objectsInv = Object.fromEntries(
    ["1.0/", "1.1/"].map((vers) => [
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
    ["1.0", "1.1"].map((vers) => [
      `docs/api/qiskit/${vers}/utils.mdx`,
      [
        "#qiskit.utils.optionals.HAS_TESTTOOLS",
        "#qiskit.utils.optionals.HAS_GRAPHVIZ",
        "#qiskit.utils.optionals.HAS_PYDOT",
      ],
    ]),
  );

  const releaseNotesFile = Object.fromEntries(
    ["1.0", "1.1"].map((vers) => [
      `docs/api/qiskit/release-notes/${vers}.mdx`,
      [`/docs/api/qiskit/${vers}/utils#qiskit.utils.optionals.HAS_SYMENGINE`],
    ]),
  );
  return {
    ...releaseNotesFile,
    ...objectsInv,
    ...utilsFile,
  };
}

function _patternsReorg(): FilesToIgnores {
  // We have redirects for all these files. It's best to update API docs to point directly to the new URL,
  // but we don't bother updating old docs.
  const qiskit = Object.fromEntries(
    ["", "0.46/", "1.0/", "1.1/", "1.2/"].flatMap((vers) => [
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
    [25, 26].flatMap((vers) => [
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
        ["/docs/api/guides/v2-primitives"],
      ],
      [
        `docs/api/qiskit-ibm-runtime/0.${vers}/sampler-v1.mdx`,
        ["/docs/api/guides/v2-primitives"],
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

function _runtimeLegacyReleaseNotes(): FilesToIgnores {
  return {
    "docs/api/qiskit-ibm-runtime/release-notes.mdx": [
      "/docs/api/qiskit-ibm-runtime/0.21/qiskit-runtime-service#runtime",
      "/docs/api/qiskit-ibm-runtime/0.20/sampler#run",
    ],
  };
}

function _runtimeHistoricalSchema(): FilesToIgnores {
  return Object.fromEntries(
    [
      "0.25/",
      "0.26/",
      "0.27/",
      "0.28/",
      "0.29/",
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
      "0.40/",
      "0.41/",
      "0.42/",
      "0.43/",
      "0.44/",
    ].flatMap((vers) => [
      [
        `docs/api/qiskit-ibm-runtime/${vers}ibm-backend.mdx`,
        [
          "https://github.com/Qiskit/ibm-quantum-schemas/blob/main/schemas/backend_properties_schema.json",
          "https://github.com/Qiskit/ibm-quantum-schemas/blob/main/schemas/backend_configuration_schema.json",
        ],
      ],
    ]),
  );
}

function _qiskitPulseLink(): FilesToIgnores {
  return Object.fromEntries(
    ["1.2/", "1.3/", "1.4/", "2.0/", "2.1/", "2.2/"].flatMap((vers) => [
      [`docs/api/qiskit/${vers}qpy.mdx`, ["/docs/guides/pulse"]],
      [
        `docs/api/qiskit/${vers}qiskit.transpiler.passes.ValidatePulseGates.mdx`,
        ["/docs/guides/pulse"],
      ],
    ]),
  );
}

const FILES_TO_IGNORES__EXPECTED: FilesToIgnores = mergeFilesToIgnores(
  _qiskitUtilsData(),
  _patternsReorg(),
  _runtimeObjectsInv(),
  _runtimeLegacyReleaseNotes(),
  _runtimeHistoricalSchema(),
  _qiskitPulseLink(),
);

function _qiskitCRegexes(): FilesToIgnores {
  return {
    "public/docs/api/qiskit-c/objects.inv": [
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_ms",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_ns",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_ps",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_s",
      "/docs/api/qiskit-c/qk-circuit#qkdelayunit_us",
      "/docs/api/qiskit-c/qk-complex-64#structqkcomplex64",
      "/docs/api/qiskit-c/qk-complex-64#structqkcomplex64_1a1d0477d0d30b088dfd322e85b4be5464",
      "/docs/api/qiskit-c/qk-complex-64#structqkcomplex64_1ae08ef5279f405357144d24ec1147b5f9",
      "/docs/api/qiskit-c/version#qiskit_get_version_hex",
      "/docs/api/qiskit-c/version#qiskit_release_level",
      "/docs/api/qiskit-c/version#qiskit_release_serial",
      "/docs/api/qiskit-c/version#qiskit_version",
      "/docs/api/qiskit-c/version#qiskit_version_hex",
      "/docs/api/qiskit-c/version#qiskit_version_major",
      "/docs/api/qiskit-c/version#qiskit_version_minor",
      "/docs/api/qiskit-c/version#qiskit_version_patch",
    ],
    "docs/api/qiskit-c/qk-transpiler.mdx": [
      "#structqktranspileoptions",
      "#c.qk_transpile",
    ],
    "docs/api/qiskit-c/qk-dag.mdx": ["#structqkdagneighbors"],
    "docs/api/qiskit-c/qk-transpiler-passes.mdx": [
      "#c.qk_transpiler_pass_standalone_vf2_layout_average",
    ],
  };
}

const FILES_TO_IGNORES__SHOULD_FIX: FilesToIgnores =
  mergeFilesToIgnores(_qiskitCRegexes());

export const FILES_TO_IGNORES: FilesToIgnores = mergeFilesToIgnores(
  FILES_TO_IGNORES__EXPECTED,
  FILES_TO_IGNORES__SHOULD_FIX,
);
