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
  "docs/api/qiskit-ibm-provider/ibm-provider.md": ["ibm_provider"],
  "docs/api/qiskit-ibm-runtime/ibm-runtime.md": ["runtime_service"],
  "docs/api/qiskit/qiskit.algorithms.optimizers.NFT.md": ["#id2", "#id1"],
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
  "docs/api/qiskit/utils.md": [
    "https://github.com/python-constraint/python-constraint%3E__",
    "#qiskit.utils.optionals.HAS_TESTTOOLS",
    "#qiskit.utils.optionals.HAS_GRAPHVIZ",
    "#qiskit.utils.optionals.HAS_PYDOT",
  ],
  "docs/api/qiskit-ibm-provider/qiskit_ibm_provider.IBMProvider.md": [
    "https://auth.quantum-computing.ibm.com/api",
    "https://docs.python-requests.org/en/latest/api/",
  ],
  "docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.QiskitRuntimeService.md": [
    "https://auth.quantum-computing.ibm.com/api",
    "https://docs.python-requests.org/en/latest/api/",
  ],
  "docs/api/qiskit/algorithms.md": ["https://www.qiskit.org/terra"],
  "docs/api/qiskit/qiskit.algorithms.Grover.md": [
    "https://qiskit.org/textbook/ch-algorithms/grover.html",
  ],
  "docs/api/qiskit-ibm-provider/release-notes.md": [
    "https://github.com/Qiskit/qiskit-ibm-provider/blob/main/docs/tutorials/Migration_Guide_from_qiskit-ibmq-provider.ipynb",
  ],
};

// Issues that are okay, such as because the link checker times out
// when trying to access the links.
const EXPECTED: FilesToIgnores = {
  "docs/api/qiskit/qiskit.algorithms.optimizers.ISRES.md": [
    "https://notendur.hi.is/tpr/software/sres/Tec311r.pdf",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.SPSA.md": [
    "https://ieeexplore.ieee.org/document/657661",
  ],
  "docs/api/qiskit/synthesis.md": [
    "https://www.cs.tau.ac.il/~nogaa/PDFS/r.pdf",
  ],
};

export default { ...SHOULD_BE_FIXED, ...EXPECTED };
