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
const _OPFLOW = "Opflow";
const _QASM = "OpenQASM support";
const _PULSE = "Pulse-level programming";
const _OTHER = "Other";
const _ALGORITHMS = "Algorithms";
const _AQUA = "Qiskit Aqua";
const _IGNIS = "Qiskit Ignis";
const _FINANCE = "Finance";
const _CHEMISTRY = "Chemistry";
const _ML = "Machine learning";
const _OPTIMIZATION = "Optimization";

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
  { name: _OPFLOW, kind: "section" },
  { name: _QASM, kind: "section" },
  { name: _PULSE, kind: "section" },
  { name: _OTHER, kind: "section" },
  { name: _ALGORITHMS, kind: "section" },
  { name: _AQUA, kind: "section" },
  { name: _IGNIS, kind: "section" },
  { name: _FINANCE, kind: "section" },
  { name: _CHEMISTRY, kind: "section" },
  { name: _ML, kind: "section" },
  { name: _OPTIMIZATION, kind: "section" },
] as const;

export const QISKIT_TOC_GROUPING: TocGrouping = {
  entries: QISKIT_ENTRIES,
  moduleToSection: (module: string) => {
    if (hasPrefix(module, ["qiskit.circuit"])) {
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
      hasPrefix(module, [
        "qiskit.qpy",
        "qiskit.result",
        "qiskit.validation",
        "qiskit.visualization",
      ])
    ) {
      return _RESULTS;
    }
    if (hasPrefix(module, ["qiskit.opflow"])) {
      return _OPFLOW;
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
        "qiskit.tools",
        "qiskit.utils",
      ])
    ) {
      return _OTHER;
    }
    if (hasPrefix(module, ["qiskit.algorithms"])) {
      return _ALGORITHMS;
    }
    if (hasPrefix(module, ["qiskit.aqua"])) {
      return _AQUA;
    }
    if (hasPrefix(module, ["qiskit.ignis"])) {
      return _IGNIS;
    }
    if (hasPrefix(module, ["qiskit.finance"])) {
      return _FINANCE;
    }
    if (hasPrefix(module, ["qiskit.chemistry"])) {
      return _CHEMISTRY;
    }
    if (hasPrefix(module, ["qiskit.ml"])) {
      return _ML;
    }
    if (hasPrefix(module, ["qiskit.optimization"])) {
      return _OPTIMIZATION;
    }
    return undefined;
  },
};
