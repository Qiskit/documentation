import { QISKIT_REMOVED_PAGES } from "../js/lib/links/QiskitRemovedPages";

export const externalRedirects = {
  "https://github.com/Qiskit-Extensions/circuit-knitting-toolbox/issues/445":
    "https://github.com/Qiskit/qiskit-addon-cutting/issues/445",
  "https://github.com/Qiskit-Extensions/circuit-knitting-toolbox/issues/406":
    "https://github.com/Qiskit/qiskit-addon-cutting/issues/406",
  "https://github.com/Qiskit-Extensions/circuit-knitting-toolbox/issues/108":
    "https://github.com/Qiskit/qiskit-addon-cutting/issues/108",
  "https://github.com/Qiskit/qiskit-terra/issues/14645":
    "https://github.com/Qiskit/qiskit/issues/14645",
  "https://github.com/Qiskit/qiskit-terra/issues/14338":
    "https://github.com/Qiskit/qiskit/issues/14338",
  "https://github.com/Qiskit/qiskit-terra/issues/14407":
    "https://github.com/Qiskit/qiskit/issues/14407",
  "https://github.com/Qiskit/qiskit-terra/issues/14635":
    "https://github.com/Qiskit/qiskit/issues/14635",
  "https://github.com/Qiskit/qiskit-terra/issues/5775":
    "https://github.com/Qiskit/qiskit/issues/5775",
  "https://github.com/Qiskit/qiskit-terra/issues/9552":
    "https://github.com/Qiskit/qiskit/issues/9552",
  "https://quimb.readthedocs.io/en/latest/tensor-circuit-mps.html":
    "https://quimb.readthedocs.io/en/latest/tensor/tensor-circuit-mps.html",
  "https://quimb.readthedocs.io/en/latest/tensor-circuit.html":
    "https://quimb.readthedocs.io/en/latest/tensor/tensor-circuit.html",
  "http://www.satcompetition.org/2009/format-benchmarks2009.html":
    "https://satisfiability.org/competition/2009/format-benchmarks2009.html",
  "https://stackoverflow.com/questions/1049722/what-is-2s-complement":
    "https://stackoverflow.com/questions/1049722/what-is-twos-complement",
  "https://docs.quantum.ibm.com/api/qiskit-ibm-runtime/qiskit_ibm_runtime.IBMBackend#open_session":
    "https://docs.quantum.ibm.com/api/qiskit-ibm-runtime/0.34/qiskit_ibm_runtime.IBMBackend#open_session",
  "https://docs.quantum.ibm.com/api/qiskit/transpiler_preset#qiskit.transpiler.preset_passmanagers.generate_preset_pass_manager":
    "https://docs.quantum.ibm.com/api/qiskit/qiskit.transpiler.generate_preset_pass_manager#qiskit.transpiler.generate_preset_pass_manager",
  "https://docs.quantum.ibm.com/api/qiskit/providers#migrating-from-backendv1-to-backendv2":
    "https://docs.quantum.ibm.com/guides/qiskit-backendv1-to-v2",
  "https://aip.scitation.org/doi/10.1063/1.5019371":
    "https://pubs.aip.org/aip/jcp/article/148/16/164104/196134/Bravyi-Kitaev-Superfast-simulation-of-electronic",
  "https://aip.scitation.org/doi/10.1063/1.5141835":
    "https://pubs.aip.org/aip/jcp/article/152/12/124107/953761/Quantum-orbital-optimized-unitary-coupled-cluster",
  ...Object.fromEntries(
    QISKIT_REMOVED_PAGES.map((link) => [
      `https://docs.quantum.ibm.com/api/qiskit/${link}`,
      `https://docs.quantum.ibm.com/api/qiskit/1.4/${link}`,
    ]),
  ),
  // Just redirecting http -> https
  "http://dx.doi.org/10.1103/PhysRevA.83.012308":
    "https://dx.doi.org/10.1103/PhysRevA.83.012308",
  "http://dx.doi.org/10.1145/1278349.1278355":
    "https://dx.doi.org/10.1145/1278349.1278355",
  // Not really a "redirect", but the mechanism is the same
  "https://https://arxiv.org/abs/quant-ph/0403071":
    "https://arxiv.org/abs/quant-ph/0403071",
};
