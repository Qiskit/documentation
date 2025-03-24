import { QISKIT_REMOVED_PAGES } from "../js/lib/links/QiskitRemovedPages";

export const externalRedirects = {
  "https://github.com/Qiskit-Extensions/circuit-knitting-toolbox/issues/445":
    "https://github.com/Qiskit/qiskit-addon-cutting/issues/445",
  "https://github.com/Qiskit-Extensions/circuit-knitting-toolbox/issues/406":
    "https://github.com/Qiskit/qiskit-addon-cutting/issues/406",
  "https://github.com/Qiskit-Extensions/circuit-knitting-toolbox/issues/108":
    "https://github.com/Qiskit/qiskit-addon-cutting/issues/108",
  "https://docs.quantum.ibm.com/api/qiskit-ibm-runtime/qiskit_ibm_runtime.IBMBackend#open_session":
    "https://docs.quantum.ibm.com/api/qiskit-ibm-runtime/0.34/qiskit_ibm_runtime.IBMBackend#open_session",
  "https://docs.quantum.ibm.com/api/qiskit/transpiler_preset#qiskit.transpiler.preset_passmanagers.generate_preset_pass_manager":
    "https://docs.quantum.ibm.com/api/qiskit/qiskit.transpiler.generate_preset_pass_manager#qiskit.transpiler.generate_preset_pass_manager",
  "https://docs.quantum.ibm.com/api/qiskit/providers#migrating-from-backendv1-to-backendv2":
    "https://docs.quantum.ibm.com/migration-guides/qiskit-backendv1-to-v2",
  ...Object.fromEntries(
    QISKIT_REMOVED_PAGES.map((link) => [
      `https://docs.quantum.ibm.com/api/qiskit/${link}`,
      `https://docs.quantum.ibm.com/api/qiskit/1.4/${link}`,
    ]),
  ),
};
