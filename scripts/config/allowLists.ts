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

export const IMAGE_ALLOWLIST: Set<string> = new Set([]);

const IGNORE_TITLE_MISMATCHES: string[] = [
  "docs/guides/changelog-qiskit-addons.mdx", // ok
  "docs/guides/changelog-qiskit-skills.mdx", // ok
  "docs/guides/changelog-qiskit-functions.mdx", // ok
  "docs/guides/changelog-qiskit-transpiler.mdx", // ok
  "docs/guides/changelog-quantum-compute-service.mdx", // ok
  "docs/ibm-quantum-compute/directed-execution-model.mdx", // ok
  "docs/ibm-quantum-compute/estimator-examples.ipynb", // ok
  "docs/ibm-quantum-compute/estimator-input-output.ipynb", // ok
  "docs/ibm-quantum-compute/estimator-options.ipynb", // ok
  "docs/ibm-quantum-compute/estimator-rest-api.ipynb", // ok
  "docs/ibm-quantum-compute/executor-examples.ipynb", // ok
  "docs/ibm-quantum-compute/executor-options.ipynb", // ok
  "docs/ibm-quantum-compute/executor-input-output.mdx", // ok
  "docs/ibm-quantum-compute/executor-broadcasting.mdx", // ok
  "docs/guides/estimator-broadcasting.mdx", // ok
  "docs/guides/broadcasting.mdx", // ok
  "docs/guides/executor-rest-api.mdx", // ok
  "docs/ibm-quantum-compute/get-started-with-sampler.ipynb", // ok
  "docs/guides/pubs.ipynb", // ok
  "docs/ibm-quantum-compute/estimator-noise-management.ipynb", // ok
  "docs/ibm-quantum-compute/sampler-noise-management.ipynb", // ok
  "docs/ibm-quantum-compute/sampler-examples.ipynb", // ok
  "docs/ibm-quantum-compute/sampler-rest-api.mdx", // ok
  "docs/ibm-quantum-compute/sampler-input-output.ipynb", // ok
  "docs/ibm-quantum-compute/sampler-options.ipynb", // ok
  "docs/ibm-quantum-compute/get-started-with-estimator.ipynb", // ok
  "docs/ibm-quantum-compute/get-started-with-executor.ipynb", // ok
  "docs/guides/qiskit-backendv1-to-v2.mdx", // ok
  "docs/ibm-quantum-compute/execution-modes.mdx", // ok
  "docs/guides/faq.mdx", // ok
  "docs/guides/algorithmiq-tem.ipynb", // ok
  "docs/qiskit/classical-feedforward-and-control-flow.ipynb", // ok
  "docs/guides/colibritd-pde.ipynb", // ok
  "docs/qiskit/defaults-and-configuration-options.ipynb", // ok
  "docs/guides/function-template-chemistry-workflow.ipynb", // ok
  "docs/guides/function-template-hamiltonian-simulation.ipynb", // ok
  "docs/guides/global-data-quantum-optimizer.ipynb", // ok
  "docs/guides/multiverse-computing-singularity.ipynb", // ok
  "docs/guides/q-ctrl-optimization-solver.ipynb", // ok
  "docs/guides/q-ctrl-performance-management.ipynb", // ok
  "docs/guides/qedma-qesem.ipynb", // ok
  "docs/guides/changelog-qiskit.mdx",
  "docs/guides/changelog-quantum-compute.mdx",
];
