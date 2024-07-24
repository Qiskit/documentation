// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

const QISKIT_METAPACKAGE_TO_TERRA = new Map([
  ["0.44", "0.25"],
  ["0.43", "0.24"],
  ["0.42", "0.23"],
  ["0.41", "0.23"],
  ["0.40", "0.23"],
  ["0.39", "0.22"],
  ["0.38", "0.21"],
  ["0.37", "0.21"],
  ["0.36", "0.20"],
  ["0.35", "0.20"],
  ["0.34", "0.19"],
  ["0.33", "0.19"],
  ["0.32", "0.18"],
  ["0.31", "0.18"],
  ["0.30", "0.18"],
  ["0.29", "0.18"],
  ["0.28", "0.18"],
  ["0.27", "0.17"],
  ["0.26", "0.17"],
  ["0.25", "0.17"],
  ["0.24", "0.16"],
  ["0.19", "0.14"],
]);
const QISKIT_METAPACKAGE_TO_AER = new Map([
  ["0.43", "0.12"],
  ["0.42", "0.12"],
  ["0.41", "0.11"],
  ["0.40", "0.11"],
  ["0.39", "0.11"],
  ["0.38", "0.11"],
  ["0.37", "0.10"],
  ["0.36", "0.10"],
  ["0.35", "0.10"],
  ["0.34", "0.10"],
  ["0.33", "0.9"],
  ["0.32", "0.9"],
  ["0.31", "0.9"],
  ["0.30", "0.9"],
  ["0.29", "0.8"],
  ["0.28", "0.8"],
  ["0.27", "0.8"],
  ["0.26", "0.8"],
  ["0.25", "0.8"],
  ["0.24", "0.7"],
  ["0.19", "0.5"],
]);
const QISKIT_METAPACKAGE_TO_IGNIS = new Map([
  ["0.36", "0.7"],
  ["0.35", "0.7"],
  ["0.34", "0.7"],
  ["0.33", "0.7"],
  ["0.32", "0.6"],
  ["0.31", "0.6"],
  ["0.30", "0.6"],
  ["0.29", "0.6"],
  ["0.28", "0.6"],
  ["0.27", "0.6"],
  ["0.26", "0.6"],
  ["0.25", "0.6"],
  ["0.24", "0.5"],
  ["0.19", "0.3"],
]);
const QISKIT_METAPACKAGE_TO_AQUA = new Map([
  ["0.32", "0.9"],
  ["0.31", "0.9"],
  ["0.30", "0.9"],
  ["0.29", "0.9"],
  ["0.28", "0.9"],
  ["0.27", "0.9"],
  ["0.26", "0.9"],
  ["0.25", "0.9"],
  ["0.24", "0.8"],
  ["0.19", "0.7"],
]);
const QISKIT_METAPACKAGE_TO_IBMQ_PROVIDER = new Map([
  ["0.43", "0.20"],
  ["0.42", "0.20"],
  ["0.41", "0.20"],
  ["0.40", "0.19"],
  ["0.39", "0.19"],
  ["0.38", "0.19"],
  ["0.37", "0.19"],
  ["0.36", "0.19"],
  ["0.35", "0.18"],
  ["0.34", "0.18"],
  ["0.33", "0.18"],
  ["0.32", "0.18"],
  ["0.31", "0.17"],
  ["0.30", "0.16"],
  ["0.29", "0.16"],
  ["0.28", "0.15"],
  ["0.27", "0.14"],
  ["0.26", "0.13"],
  ["0.25", "0.12"],
  ["0.24", "0.12"],
  ["0.19", "0.7"],
]);

export function determineHistoricalQiskitGithubUrl(
  metapackageVersion: string,
  fileName: string,
): string {
  const getOrThrow = (mapping: Map<string, string>): string => {
    const result = mapping.get(metapackageVersion);
    if (result === undefined) {
      throw new Error(
        `No compatible version found for the file ${fileName} with qiskit-metapackage ${metapackageVersion}}`,
      );
    }
    return result;
  };

  /**
   * Special case:
   * The file `qiskit/optimization/converters/quadratic_program_to_negative_value_oracle` existed in qiskit-aqua
   * patch 0.7.3, but was removed in patch 0.7.4. Thus, the branch stable/0.7 doesn't contain the file, and
   * we can only access it through the tag 0.7.3
   */
  if (
    metapackageVersion == "0.19" &&
    fileName ==
      "qiskit/optimization/converters/quadratic_program_to_negative_value_oracle"
  ) {
    return `https://github.com/qiskit-community/qiskit-aqua/tree/0.7.3/${fileName}.py`;
  }

  let slug: string;
  let version: string;
  if (
    fileName.includes("qiskit_aer") ||
    fileName.includes("qiskit/aer") ||
    fileName.includes("qiskit/providers/aer")
  ) {
    slug = "qiskit/qiskit-aer";
    version = getOrThrow(QISKIT_METAPACKAGE_TO_AER);
  } else if (fileName.includes("qiskit/ignis")) {
    slug = "qiskit-community/qiskit-ignis";
    version = getOrThrow(QISKIT_METAPACKAGE_TO_IGNIS);
  } else if (
    fileName.includes("qiskit/aqua") ||
    fileName.includes("qiskit/chemistry") ||
    fileName.includes("qiskit/finance") ||
    fileName.includes("qiskit/ml") ||
    fileName.includes("qiskit/optimization")
  ) {
    slug = "qiskit-community/qiskit-aqua";
    version = getOrThrow(QISKIT_METAPACKAGE_TO_AQUA);
  } else if (fileName.includes("qiskit/providers/ibmq")) {
    slug = "qiskit/qiskit-ibmq-provider";
    version = getOrThrow(QISKIT_METAPACKAGE_TO_IBMQ_PROVIDER);
  } else {
    slug = "qiskit/qiskit";
    version = getOrThrow(QISKIT_METAPACKAGE_TO_TERRA);
  }

  return `https://github.com/${slug}/tree/stable/${version}/${fileName}.py`;
}
