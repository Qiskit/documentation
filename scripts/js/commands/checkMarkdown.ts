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

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { collectInvalidImageErrors } from "../lib/markdownImages.js";
import { readMarkdownAndMetadata } from "../lib/markdownReader.js";
import { collectHeadingTitleMismatch } from "../lib/markdownTitles.js";
import { parseMarkdown } from "../lib/markdownUtils";

const IGNORE_TITLE_MISMATCHES: string[] = [
  "docs/migration-guides/external-providers-primitives-v2.mdx",
  "docs/migration-guides/local-simulators.mdx",
  "docs/migration-guides/metapackage-migration.mdx",
  "docs/migration-guides/qiskit-1.0-features.mdx",
  "docs/migration-guides/qiskit-1.0-installation.mdx",
  "docs/migration-guides/qiskit-algorithms-module.mdx",
  "docs/migration-guides/qiskit-backend-primitives.mdx",
  "docs/migration-guides/qiskit-backendv1-to-v2.mdx",
  "docs/migration-guides/qiskit-opflow-module.mdx",
  "docs/migration-guides/qiskit-runtime-from-ibm-provider.mdx",
  "docs/migration-guides/qiskit-runtime-from-ibmq-provider.mdx",
  "docs/migration-guides/qiskit-runtime-options.mdx",
  "docs/guides/access-groups.mdx",
  "docs/migration-guides/v2-primitives.mdx",
  "docs/guides/execution-modes.mdx",
  "docs/guides/install-qiskit-source.mdx",
  "docs/guides/manage-cost.mdx",
  "docs/guides/plans-overview.mdx",
  "docs/guides/qiskit-addons-aqc.mdx",
  "docs/guides/qiskit-addons-sqd.mdx",
  "docs/guides/qiskit-code-assistant-vscode.mdx",
  "docs/guides/qiskit-function-templates.mdx",
  "docs/guides/serverless.mdx",
  "docs/open-source/code-of-conduct.mdx",
  "docs/open-source/create-a-provider.mdx",
  "docs/support/execution-modes-faq.mdx",
  "docs/support/faq.mdx",
  "learning/index.mdx",
  "learning/courses/basics-of-quantum-information/exam.mdx",
  "learning/courses/basics-of-quantum-information/index.mdx",
  "learning/courses/foundations-of-quantum-error-correction/index.mdx",
  "learning/courses/fundamentals-of-quantum-algorithms/exam.mdx",
  "learning/courses/fundamentals-of-quantum-algorithms/index.mdx",
  "learning/courses/quantum-business-foundations/business-impacts.mdx",
  "learning/courses/quantum-business-foundations/exam.mdx",
  "learning/courses/quantum-business-foundations/quantum-computing-fundamentals.mdx",
  "learning/courses/quantum-business-foundations/quantum-technology.mdx",
  "learning/courses/quantum-business-foundations/start-your-quantum-journey.mdx",
  "learning/courses/quantum-chem-with-vqe/exam.mdx",
  "learning/courses/quantum-diagonalization-algorithms/exam.mdx",
  "learning/courses/quantum-machine-learning/exam.mdx",
  "learning/courses/quantum-safe-cryptography/exam.mdx",
  "learning/courses/utility-scale-quantum-computing/classical-simulation.mdx",
  "learning/courses/variational-algorithm-design/exam.mdx",
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
  "docs/tutorials/real-time-benchmarking-for-qubit-selection.ipynb",
  "docs/tutorials/sample-based-quantum-diagonalization.ipynb",
  "docs/tutorials/shors-algorithm.ipynb",
  "docs/tutorials/spin-chain-vqe.ipynb",
  "docs/tutorials/transpilation-optimizations-with-sabre.ipynb",
  "learning/courses/quantum-chem-with-vqe/ansatz.ipynb",
  "learning/courses/quantum-chem-with-vqe/classical-optimizers.ipynb",
  "learning/courses/quantum-chem-with-vqe/geometry.ipynb",
  "learning/courses/quantum-chem-with-vqe/ground-state.ipynb",
  "learning/courses/quantum-chem-with-vqe/hamiltonian-construction.ipynb",
  "learning/courses/quantum-computing-in-practice/introduction.ipynb",
  "learning/courses/quantum-computing-in-practice/mapping.ipynb",
  "learning/courses/quantum-diagonalization-algorithms/introduction.ipynb",
  "learning/courses/quantum-diagonalization-algorithms/krylov.ipynb",
  "learning/courses/quantum-diagonalization-algorithms/skqd.ipynb",
  "learning/courses/quantum-diagonalization-algorithms/sqd-implementation.ipynb",
  "learning/courses/quantum-diagonalization-algorithms/sqd-overview.ipynb",
  "learning/courses/quantum-diagonalization-algorithms/vqe.ipynb",
  "learning/courses/quantum-machine-learning/classical-ml-review.ipynb",
  "learning/courses/quantum-machine-learning/introduction.ipynb",
  "learning/courses/quantum-machine-learning/quantum-kernel-methods.ipynb",
  "learning/courses/quantum-machine-learning/qvc-qnn.ipynb",
  "learning/courses/utility-scale-quantum-computing/bits-gates-and-circuits.ipynb",
  "learning/courses/utility-scale-quantum-computing/error-mitigation.ipynb",
  "learning/courses/utility-scale-quantum-computing/grovers-algorithm.ipynb",
  "learning/courses/utility-scale-quantum-computing/quantum-phase-estimation.ipynb",
  "learning/courses/utility-scale-quantum-computing/teleportation.ipynb",
  "learning/courses/utility-scale-quantum-computing/utility-i.ipynb",
  "learning/courses/utility-scale-quantum-computing/utility-ii.ipynb",
  "learning/courses/utility-scale-quantum-computing/utility-iii.ipynb",
  "learning/courses/utility-scale-quantum-computing/variational-quantum-algorithms.ipynb",
  "learning/courses/variational-algorithm-design/ansaetze-and-variational-forms.ipynb",
  "learning/modules/computer-science/deutsch-jozsa.ipynb",
  "learning/modules/computer-science/quantum-key-distribution.ipynb",
  "learning/modules/computer-science/quantum-teleportation.ipynb",
  "learning/modules/quantum-mechanics/bells-inequality-with-qiskit.ipynb",
  "learning/modules/quantum-mechanics/exploring-uncertainty-with-qiskit.ipynb",
  "learning/modules/quantum-mechanics/stern-gerlach-measurements-with-qiskit.ipynb",
  "learning/modules/quantum-mechanics/superposition-with-qiskit.ipynb",
  "learning/courses/foundations-of-quantum-error-correction/correcting-quantum-errors/repetition-codes.ipynb",
  "learning/courses/foundations-of-quantum-error-correction/fault-tolerant-quantum-computing/approach-to-fault-tolerance.ipynb",
  "learning/courses/foundations-of-quantum-error-correction/quantum-code-constructions/css-codes.ipynb",
  "learning/courses/fundamentals-of-quantum-algorithms/grover-algorithm/grover-algorithm-description.ipynb",
  "learning/courses/fundamentals-of-quantum-algorithms/grover-algorithm/number-of-iterations.ipynb",
  "learning/courses/fundamentals-of-quantum-algorithms/phase-estimation-and-factoring/phase-estimation-problem.ipynb",
  "learning/courses/fundamentals-of-quantum-algorithms/phase-estimation-and-factoring/phase-estimation-procedure.ipynb",
  "learning/courses/fundamentals-of-quantum-algorithms/quantum-algorithmic-foundations/factoring-and-gcd.ipynb",
  "learning/courses/general-formulation-of-quantum-information/general-measurements/discrimination-and-tomography.ipynb",
];

const allErrors: string[] = [];

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("apis", {
      type: "boolean",
      default: false,
      description:
        "Check files in the current and dev versions of the API docs.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();
  const files = await determineContentFiles(args);

  for (const file of files) {
    const { content, metadata } = await readMarkdownAndMetadata(file);
    const tree = parseMarkdown(content);
    const imageErrors = collectInvalidImageErrors(tree);
    const mismatchedTitleHeadingErrors =
      IGNORE_TITLE_MISMATCHES.includes(file) || file.startsWith("docs/api")
        ? new Set<string>()
        : collectHeadingTitleMismatch(tree, metadata);

    // Collect all errors for this file
    const errorsInFile: string[] = [
      ...imageErrors,
      ...mismatchedTitleHeadingErrors,
    ];

    if (errorsInFile.length) {
      allErrors.push(
        `Error in file '${file}':\n\t- ${errorsInFile.join("\n\t- ")}\n`,
      );
    }
  }

  // Final error report
  if (allErrors.length) {
    allErrors.forEach((error) => console.log(error));
    console.error(
      "💔 Some issues were found in your Markdown files. Please fix them before proceeding.\n" +
        "Image help: https://github.com/Qiskit/documentation#images\n" +
        "Title/Heading help: https://github.com/Qiskit/documentation#titles-and-headings\n",
    );
    process.exit(1);
  }

  console.log("✅ All files passed validation.\n");
}

async function determineContentFiles(args: Arguments): Promise<string[]> {
  // We always skip historical versions to simplify the code and to have a faster script.
  // Even though it is possible for someone to add a new image without alt text to a
  // historical version that wasn't in the original release, that's very unlikely.
  // If it happens, it would probably be a backport from latest or dev, and the linter in
  // the API repo should catch it.
  //
  // If an image is missed by the API repo's linter, it will still have an alt text defined,
  // although it won't be very useful. That's because Sphinx auto-generates alt text.
  const globs = [
    "{docs,learning}/**/*.{ipynb,mdx}",
    args.apis ? "!docs/api/*/([0-9]*)/*.mdx" : "!docs/api/**/*.mdx",
    // Remove when https://github.com/Qiskit/documentation/issues/2564 is fixed
    `!docs/api/qiskit/release-notes/*.mdx`,
  ];

  return await globby(globs);
}

main().then(() => process.exit());
