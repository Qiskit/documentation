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

// A mapping of files to lists of links that will not be searched.
//
// If all links in the file should be ignored, then modify GLOBS_TO_CHECK in checkLinks.ts, such
// as adding '!docs/my_file.md` to the list. If other files link to the file,
// then you may need to add it to GLOBS_TO_LOAD in checkLinks.ts.
type FilesToIgnores = { [id: string]: string[] };

// These are legit problems that we had to punt on, usually because fixing the
// problem requires fixing the original source documentation for API docs.
const SHOULD_BE_FIXED: FilesToIgnores = {
  "docs/api/qiskit/algorithms.md": ["https://www.qiskit.org/terra"],
  "docs/api/qiskit/qiskit.algorithms.Grover.md": [
    "https://qiskit.org/textbook/ch-algorithms/grover.html",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.NFT.md": ["#id2", "#id1"],
  "docs/api/qiskit/qiskit.algorithms.optimizers.ISRES.md": [
    "https://notendur.hi.is/tpr/software/sres/Tec311r.pdf",
  ],
  "docs/api/qiskit/qpy.md": [
    "circuit#qiskit.circuit.CASE_DEFAULT",
    "#id8",
    "#id2",
    "#f8",
    "#id6",
    "#id4",
    "#f3",
    "#f2",
    "#f1",
    "/api/qiskit/circuit#qiskit.circuit.CircuitError",
    "id2",
    "/api/qiskit/qpy#id1",
    "/api/qiskit/circuit#qiskit.circuit.CircuitError'",
  ],
  "docs/api/qiskit/qiskit.circuit.QuantumCircuit.md": [
    "qiskit.org/documentation/tutorials/circuits/3_summary_of_quantum_operations",
    "circuit#qiskit.circuit.CASE_DEFAULT",
  ],
  "docs/api/qiskit/qiskit.circuit.SwitchCaseOp.md": [
    "circuit#qiskit.circuit.CASE_DEFAULT",
  ],
  "docs/api/qiskit/qiskit.circuit.library.PhaseEstimation.md": [
    "https://learn.qiskit.org/course/ch-algorithms/quantum-phase-estimation",
  ],
  "docs/api/qiskit/utils.md": [
    "https://github.com/python-constraint/python-constraint%3E__",
    "#qiskit.utils.optionals.HAS_TESTTOOLS",
    "#qiskit.utils.optionals.HAS_GRAPHVIZ",
    "#qiskit.utils.optionals.HAS_PYDOT",
  ],
  "docs/api/qiskit/release-notes/0.45.md": [
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_PYGMENTS",
  ],
  "docs/api/qiskit-ibm-provider/qiskit_ibm_provider.IBMProvider.md": [
    "https://auth.quantum-computing.ibm.com/api",
  ],
  "docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.QiskitRuntimeService.md": [
    "https://auth.quantum-computing.ibm.com/api",
  ],
  "docs/api/qiskit-ibm-runtime/0.14/qiskit_ibm_runtime.QiskitRuntimeService.md":
    ["https://auth.quantum-computing.ibm.com/api"],
  "docs/api/qiskit-ibm-runtime/0.15/qiskit_ibm_runtime.QiskitRuntimeService.md":
    ["https://auth.quantum-computing.ibm.com/api"],
  "docs/api/qiskit-ibm-runtime/0.16/qiskit_ibm_runtime.QiskitRuntimeService.md":
    ["https://auth.quantum-computing.ibm.com/api"],
  "docs/api/qiskit-ibm-runtime/fake_provider.md": [
    "#id1",
    "#id2",
    "#id3",
    "_downloads/a640acbc08577560dc62a3c02c6ca2ac/fake_provider-1_00.png",
    "_downloads/98e08086a49350bea51e64248343d7ac/fake_provider-1_00.hires.png",
    "_downloads/684bf35d507376624fcead10d9aedaed/fake_provider-1_00.pdf",
    "_downloads/0844f2fac7677af0994f8d82d680b6b4/fake_provider-1_01.png",
    "_downloads/68a68ba43192e04547a9e6d7e6d53481/fake_provider-1_01.hires.png",
    "_downloads/afd203635ac2d35ca0d4a52a3380788d/fake_provider-1_01.pdf",
    "_downloads/14c310b17e4b148108e1e5e2c63c7030/fake_provider-1_02.png",
    "_downloads/20b45a9c9dd80c4687a3546bdcb4db06/fake_provider-1_02.hires.png",
    "_downloads/fe03f365d979eee2c9543dbb39696011/fake_provider-1_02.pdf",
  ],
  "docs/api/qiskit-ibm-provider/release-notes.md": [
    "https://github.com/Qiskit/qiskit-ibm-provider/blob/main/docs/tutorials/Migration_Guide_from_qiskit-ibmq-provider.ipynb",
  ],
  "public/api/qiskit/objects.inv": [
    "/api/qiskit/circuit#qiskit.circuit.CASE_DEFAULT",
    "/api/qiskit/qiskit.passmanager.FlowController#registered_controllers",
    "/api/qiskit/qiskit.providers.basicaer.QasmSimulatorPy#default_configuration",
    "/api/qiskit/qiskit.providers.basicaer.QasmSimulatorPy#default_options",
    "/api/qiskit/qiskit.providers.basicaer.StatevectorSimulatorPy#default_configuration",
    "/api/qiskit/qiskit.providers.basicaer.StatevectorSimulatorPy#default_options",
    "/api/qiskit/qiskit.providers.basicaer.UnitarySimulatorPy#default_configuration",
    "/api/qiskit/qiskit.providers.basicaer.UnitarySimulatorPy#default_options",
    "/api/qiskit/qiskit.pulse.instructions.Reference#scope_delimiter",
    "/api/qiskit/qasm2#qiskit.qasm2.LEGACY_CUSTOM_CLASSICAL",
    "/api/qiskit/qasm2#qiskit.qasm2.LEGACY_CUSTOM_INSTRUCTIONS",
    "/api/qiskit/qasm2#qiskit.qasm2.LEGACY_INCLUDE_PATH",
    "/api/qiskit/qiskit.transpiler.StagedPassManager#invalid_stage_regex",
    "/api/qiskit/utils#qiskit.utils.algorithm_globals",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_AER",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_CONSTRAINT",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_CPLEX",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_CVXPY",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_DOCPLEX",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_FIXTURES",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_GRAPHVIZ",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_IBMQ",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_IGNIS",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_IPYTHON",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_IPYWIDGETS",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_JAX",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_JUPYTER",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_MATPLOTLIB",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_NETWORKX",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_NLOPT",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_PDFLATEX",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_PDFTOCAIRO",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_PIL",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_PYDOT",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_PYGMENTS",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_PYLATEX",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_QASM3_IMPORT",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_SEABORN",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_SKLEARN",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_SKQUANT",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_SQSNOBFIT",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_SYMENGINE",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_TESTTOOLS",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_TOQM",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_TWEEDLEDUM",
    "/api/qiskit/utils#qiskit.utils.optionals.HAS_Z3",
    "/api/qiskit/index#main-qiskit-related-projects",
    "/api/qiskit/index#qiskit-version-documentation",
    "/api/qiskit/qiskit.visualization.timeline_drawer#style-dict-doc",
    "/api/qiskit/qiskit.pulse.library.SymbolicPulse#symbolic-pulse-constraints",
    "/api/qiskit/qiskit.pulse.library.SymbolicPulse#symbolic-pulse-envelope",
    "/api/qiskit/qiskit.pulse.library.SymbolicPulse#symbolic-pulse-eval-condition",
    "/api/qiskit/qiskit.pulse.library.SymbolicPulse#symbolic-pulse-serialize",
    "/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeEncoder#key_separator",
    "/api/qiskit-ibm-runtime/index#next-steps",
    "/api/qiskit-ibm-runtime/index#qiskit-runtime-version-api-docs-preview",
  ],
  "public/api/qiskit-ibm-runtime/objects.inv": [
    "/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeEncoder#key_separator",
    "/api/qiskit-ibm-runtime/index#next-steps",
    "/api/qiskit-ibm-runtime/index#qiskit-runtime-version-api-docs-preview",
  ],
};

// Issues that are okay, such as because the link checker times out
// when trying to access the links.
const EXPECTED: FilesToIgnores = {
  "docs/api/qiskit/qiskit.algorithms.optimizers.SPSA.md": [
    "https://ieeexplore.ieee.org/document/657661",
  ],
  "docs/api/qiskit/synthesis.md": [
    "https://www.cs.tau.ac.il/~nogaa/PDFS/r.pdf",
  ],
};

export default { ...SHOULD_BE_FIXED, ...EXPECTED };
