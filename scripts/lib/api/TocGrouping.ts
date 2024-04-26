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

type Section = {
  name: string;
  kind: "section";
};
type TopLevelModule = {
  moduleId: string;
  description: string;
  kind: "module";
};
export type TocGroupingEntry = Section | TopLevelModule;

export type TocGrouping = {
  // Ordering is respected.
  entries: readonly TocGroupingEntry[];
  moduleToSection: (module: string) => string | undefined;
};

// Qiskit section names
const _CIRCUITS = "Circuit construction";
const _TRANSPILATION = "Transpilation";
const _PRIMITVES = "Primitives and providers";
const _RESULTS = "Results and visualizations";
const _QASM = "OpenQASM support";
const _PULSE = "Pulse-level programming";
const _OTHER = "Other";

// The ordering of Qiskit ToC
const QISKIT_ENTRIES = [
  { moduleId: "qiskit", description: "Module list", kind: "module" },
  { name: _CIRCUITS, kind: "section" },
  {
    moduleId: "qiskit.quantum_info",
    description: "Quantum information (qiskit.quantum_info)",
    kind: "module",
  },
  { name: _TRANSPILATION, kind: "section" },
  { name: _PRIMITVES, kind: "section" },
  { name: _RESULTS, kind: "section" },
  { name: _QASM, kind: "section" },
  { name: _PULSE, kind: "section" },
  { name: _OTHER, kind: "section" },
] as const;

export const QISKIT_TOC_GROUPING: TocGrouping = {
  entries: QISKIT_ENTRIES,
  moduleToSection: (module: string) => {
    if (hasPrefix(module, ["qiskit.circuit", "qiskit.quantum_info"])) {
      return _CIRCUITS;
    }
    if (
      hasPrefix(module, [
        "qiskit.dagcircuit",
        "qiskit.passmanager",
        "qiskit.synthesis",
        "qiskit.transpiler",
      ])
    ) {
      return _TRANSPILATION;
    }
    if (hasPrefix(module, ["qiskit.primitive", "qiskit.providers"])) {
      return _PRIMITVES;
    }
    if (
      hasPrefix(module, ["qiskit.qpy", "qiskit.result", "qiskit.visualization"])
    ) {
      return _RESULTS;
    }
    if (hasPrefix(module, ["qiskit.qasm"])) {
      return _QASM;
    }
    if (hasPrefix(module, ["qiskit.scheduler", "qiskit.pulse"])) {
      return _PULSE;
    }
    if (
      hasPrefix(module, [
        "qiskit.assembler",
        "qiskit.compiler",
        "qiskit.converters",
        "qiskit.exceptions",
        "qiskit.qobj",
        "qiskit.utils",
      ])
    ) {
      return _OTHER;
    }
    return undefined;
  },
};
