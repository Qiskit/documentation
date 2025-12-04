// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

export const METADATA_ALLOWLIST: Set<string> = new Set([
  "docs/api/qiskit/0.46/transpiler_builtin_plugins.mdx",
]);

export function ignoreTitleMismatch(filepath: string): boolean {
  const isLearningPage = filepath.startsWith("learning/");
  const isApiPage = filepath.startsWith("docs/api");
  if (isLearningPage || isApiPage) return true;
  return IGNORE_TITLE_MISMATCHES.includes(filepath);
}

const IGNORE_TITLE_MISMATCHES: string[] = [
  "docs/guides/intro-to-patterns.mdx",
  "docs/guides/overview-qiskit-ecosystem.mdx",
  "docs/guides/overview-qiskit-runtime.mdx",
  "docs/guides/overview-qiskit-ecosystem.mdx",
  "docs/guides/external-providers-primitives-v2.mdx",
  "docs/guides/create-a-provider.mdx",
  "docs/guides/local-simulators.mdx",
  "docs/guides/metapackage-migration.mdx",
  "docs/guides/qiskit-1.0-features.mdx",
  "docs/guides/qiskit-1.0-installation.mdx",
  "docs/guides/qiskit-algorithms-module.mdx",
  "docs/guides/qiskit-backend-primitives.mdx",
  "docs/guides/qiskit-backendv1-to-v2.mdx",
  "docs/guides/qiskit-opflow-module.mdx",
  "docs/guides/qiskit-runtime-from-ibm-provider.mdx",
  "docs/guides/qiskit-runtime-from-ibmq-provider.mdx",
  "docs/guides/qiskit-runtime-options.mdx",
  "docs/guides/access-groups.mdx",
  "docs/guides/v2-primitives.mdx",
  "docs/guides/execution-modes.mdx",
  "docs/guides/install-qiskit-source.mdx",
  "docs/guides/manage-cost.mdx",
  "docs/guides/plans-overview.mdx",
  "docs/guides/qiskit-addons-aqc.mdx",
  "docs/guides/qiskit-addons-sqd.mdx",
  "docs/guides/qiskit-code-assistant-vscode.mdx",
  "docs/guides/qiskit-function-templates.mdx",
  "docs/guides/serverless.mdx",
  "docs/guides/code-of-conduct.mdx",
  "docs/guides/create-a-provider.mdx",
  "docs/guides/execution-modes-faq.mdx",
  "docs/guides/faq.mdx",
  "docs/guides/ai-transpiler-passes.ipynb",
  "docs/guides/algorithmiq-tem.ipynb",
  "docs/guides/build-noise-models.ipynb",
  "docs/guides/classical-feedforward-and-control-flow.ipynb",
  "docs/guides/colibritd-pde.ipynb",
  "docs/guides/custom-transpiler-pass.ipynb",
  "docs/guides/defaults-and-configuration-options.ipynb",
  "docs/guides/function-template-chemistry-workflow.ipynb",
  "docs/guides/function-template-hamiltonian-simulation.ipynb",
  "docs/guides/global-data-quantum-optimizer.ipynb",
  "docs/guides/multiverse-computing-singularity.ipynb",
  "docs/guides/operators-overview.ipynb",
  "docs/guides/plot-quantum-states.ipynb",
  "docs/guides/q-ctrl-optimization-solver.ipynb",
  "docs/guides/q-ctrl-performance-management.ipynb",
  "docs/guides/qedma-qesem.ipynb",
  "docs/guides/qiskit-addons-aqc-get-started.ipynb",
  "docs/guides/qiskit-addons-cutting-gates.ipynb",
  "docs/guides/qiskit-addons-cutting-wires.ipynb",
  "docs/guides/qiskit-addons-sqd-get-started.ipynb",
  "docs/guides/represent-quantum-computers.ipynb",
  "docs/guides/retired-qpus.ipynb",
  "docs/guides/save-circuits.ipynb",
  "docs/guides/save-jobs.ipynb",
  "docs/tutorials/error-mitigation-with-qiskit-functions.ipynb",
  "docs/tutorials/fractional-gates.ipynb",
  "docs/tutorials/global-data-quantum-optimizer.ipynb",
  "docs/tutorials/krylov-quantum-diagonalization.ipynb",
  "docs/tutorials/periodic-boundary-conditions-with-circuit-cutting.ipynb",
  "docs/tutorials/transverse-field-ising-model.ipynb",
  "docs/tutorials/real-time-benchmarking-for-qubit-selection.ipynb",
  "docs/tutorials/sample-based-quantum-diagonalization.ipynb",
  "docs/tutorials/shors-algorithm.ipynb",
  "docs/tutorials/spin-chain-vqe.ipynb",
  "docs/tutorials/transpilation-optimizations-with-sabre.ipynb",
];
