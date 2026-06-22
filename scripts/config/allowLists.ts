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
  "docs/guides/directed-execution-model.mdx", // ok
  "docs/guides/estimator-examples.ipynb", // ok
  "docs/guides/estimator-input-output.ipynb", // ok
  "docs/guides/estimator-options.ipynb", // ok
  "docs/guides/estimator-rest-api.ipynb", // ok
  "docs/guides/executor-examples.ipynb", // ok
  "docs/guides/executor-options.ipynb", // ok
  "docs/guides/executor-input-output.mdx", // ok
  "docs/guides/executor-broadcasting.mdx", // ok
  "docs/guides/estimator-broadcasting.mdx", // ok
  "docs/guides/broadcasting.mdx", // ok
  "docs/guides/executor-rest-api.mdx", // ok
  "docs/guides/get-started-with-sampler.ipynb", // ok
  "docs/guides/pubs.ipynb", // ok
  "docs/guides/estimator-noise-management.ipynb", // ok
  "docs/guides/sampler-noise-management.ipynb", // ok
  "docs/guides/sampler-examples.ipynb", // ok
  "docs/guides/sampler-rest-api.mdx", // ok
  "docs/guides/sampler-input-output.ipynb", // ok
  "docs/guides/sampler-options.ipynb", // ok
  "docs/guides/get-started-with-estimator.ipynb", // ok
  "docs/guides/get-started-with-executor.ipynb", // ok
  "docs/guides/qiskit-backendv1-to-v2.mdx", // ok
  "docs/guides/execution-modes.mdx", // ok
  "docs/guides/faq.mdx", // ok
  "docs/guides/algorithmiq-tem.ipynb", // ok
  "docs/guides/classical-feedforward-and-control-flow.ipynb", // ok
  "docs/guides/colibritd-pde.ipynb", // ok
  "docs/guides/defaults-and-configuration-options.ipynb", // ok
  "docs/guides/function-template-chemistry-workflow.ipynb", // ok
  "docs/guides/function-template-hamiltonian-simulation.ipynb", // ok
  "docs/guides/global-data-quantum-optimizer.ipynb", // ok
  "docs/guides/multiverse-computing-singularity.ipynb", // ok
  "docs/guides/q-ctrl-optimization-solver.ipynb", // ok
  "docs/guides/q-ctrl-performance-management.ipynb", // ok
  "docs/guides/qedma-qesem.ipynb", // ok
  "docs/guides/qiskit-addons-sqd-get-started.ipynb", // ok
];
