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

import { hasPrefix } from "../stringUtils";

export type TocModuleGrouping = {
  sections: readonly string[];
  moduleToSection: (module: string) => string;
};

const QISKIT_SECTIONS = [
  "Circuit and Operator Construction",
  "Transpilation",
  "Primitives and Providers",
  "Results and Visualizations",
  "OpenQASM Support",
  "Pulse-level Programming",
  "Other",
] as const;
type QiskitSection = (typeof QISKIT_SECTIONS)[number];

export const QISKIT_TOC_MODULE_GROUPING: TocModuleGrouping = {
  sections: QISKIT_SECTIONS as readonly string[],
  moduleToSection: (module: string): QiskitSection => {
    if (hasPrefix(module, ["qiskit.circuit", "qiskit.quantum_info"])) {
      return "Circuit and Operator Construction";
    }
    if (
      hasPrefix(module, [
        "qiskit.dagcircuit",
        "qiskit.passmanager",
        "qiskit.synthesis",
        "qiskit.transpiler",
      ])
    ) {
      return "Transpilation";
    }
    if (hasPrefix(module, ["qiskit.primitive", "qiskit.providers"])) {
      return "Primitives and Providers";
    }
    if (
      hasPrefix(module, ["qiskit.qpy", "qiskit.result", "qiskit.visualization"])
    ) {
      return "Results and Visualizations";
    }
    if (hasPrefix(module, ["qiskit.qasm"])) {
      return "OpenQASM Support";
    }
    if (hasPrefix(module, ["qiskit.scheduler", "qiskit.pulse"])) {
      return "Pulse-level Programming";
    }
    return "Other";
  },
};
