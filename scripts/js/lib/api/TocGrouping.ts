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

/** A human-written section used to group several modules, e.g. 'Circuit Construction'. */
type Section = {
  name: string;
  kind: "section";
};

/** A single module that should be shown as top-level in the left ToC. */
type TopLevelModule = {
  /** E.g. 'qiskit.quantum_info'. */
  moduleId: string;
  /** The title the left ToC should use. This can be the module name itself, but it's often helpful
   * to give a custom name like 'Quantum information (qiskit.quantum_info)'. */
  title: string;
  kind: "module";
};

export type TocGroupingEntry = Section | TopLevelModule;

/** A custom grouping for the top-level of the left ToC. */
export type TocGrouping = {
  /** The top-level entries in the left ToC, made up of Sections like 'Circuit construction' and
   * top-level modules. Ordering is respected. */
  entries: readonly TocGroupingEntry[];
  /** A function to associate an arbitrary module like 'qiskit.circuit' to the corresponding Section from
   * `TocGrouping.entries`. The returned string must match a `Section.name` from `TocGrouping.entries`.
   * Return `undefined` if the module does not belong in any specific Section.*/
  moduleToSection: (module: string) => string | undefined;
};

// Qiskit section names
const _CIRCUITS = "Circuit construction";
const _TRANSPILATION = "Transpilation";
const _PRIMITVES = "Primitives and providers";
const _RESULTS = "Results and visualizations";
const _OPFLOW = "Opflow";
const _SERIALIZATION = "Serialization (OpenQASM and QPY)";
const _PULSE = "Pulse-level programming";
const _OTHER = "Other";
const _AER = "Qiskit Aer";
const _IBMQ = "IBM Q Provider";
const _ALGORITHMS = "Algorithms";
const _AQUA = "Qiskit Aqua";
const _IGNIS = "Qiskit Ignis";
const _FINANCE = "Finance";
const _CHEMISTRY = "Chemistry";
const _ML = "Machine learning";
const _OPTIMIZATION = "Optimization";

// The ordering of Qiskit ToC
const QISKIT_ENTRIES = [
  { moduleId: "qiskit", title: "API index", kind: "module" },
  { name: _CIRCUITS, kind: "section" },
  {
    moduleId: "qiskit.quantum_info",
    title: "Quantum information (qiskit.quantum_info)",
    kind: "module",
  },
  { name: _TRANSPILATION, kind: "section" },
  { name: _PRIMITVES, kind: "section" },
  { name: _RESULTS, kind: "section" },
  { name: _OPFLOW, kind: "section" },
  { name: _SERIALIZATION, kind: "section" },
  { name: _PULSE, kind: "section" },
  { moduleId: "qiskit.execute", title: "qiskit.execute", kind: "module" },
  {
    moduleId: "qiskit.execute_function",
    title: "qiskit.execute_function",
    kind: "module",
  },
  { name: _OTHER, kind: "section" },
  { name: _AER, kind: "section" },
  { name: _IBMQ, kind: "section" },
  { name: _ALGORITHMS, kind: "section" },
  { name: _AQUA, kind: "section" },
  { name: _IGNIS, kind: "section" },
  { name: _FINANCE, kind: "section" },
  { name: _CHEMISTRY, kind: "section" },
  { name: _ML, kind: "section" },
  { name: _OPTIMIZATION, kind: "section" },
] as const;

function qiskitModuleToSection(module: string): string | undefined {
  if (
    hasPrefix(module, ["qiskit.circuit", "qiskit.extensions"]) &&
    module !== "qiskit.circuit.qpy_serialization"
  ) {
    return _CIRCUITS;
  }

  if (
    hasPrefix(module, [
      "qiskit.converters",
      "qiskit.dagcircuit",
      "qiskit.passmanager",
      "qiskit.synthesis",
      "qiskit.synthesis",
      "qiskit.transpiler",
    ])
  ) {
    return _TRANSPILATION;
  }

  if (
    hasPrefix(module, ["qiskit.primitives", "qiskit.providers"]) &&
    !hasPrefix(module, ["qiskit.providers.aer", "qiskit.providers.ibmq"])
  ) {
    return _PRIMITVES;
  }

  if (
    hasPrefix(module, [
      "qiskit.result",
      "qiskit.validation",
      "qiskit.visualization",
    ])
  ) {
    return _RESULTS;
  }

  if (hasPrefix(module, ["qiskit.opflow"])) return _OPFLOW;

  if (
    hasPrefix(module, [
      "qiskit.circuit.qpy_serialization",
      "qiskit.qpy",
      "qiskit.qasm",
    ])
  ) {
    return _SERIALIZATION;
  }

  if (hasPrefix(module, ["qiskit.scheduler", "qiskit.pulse"])) return _PULSE;

  if (
    hasPrefix(module, [
      "qiskit.assembler",
      "qiskit.compiler",
      "qiskit.exceptions",
      "qiskit.qobj",
      "qiskit.tools",
      "qiskit.utils",
    ])
  ) {
    return _OTHER;
  }

  if (hasPrefix(module, ["qiskit.providers.aer", "qiskit_aer"])) return _AER;
  if (hasPrefix(module, ["qiskit.providers.ibmq"])) return _IBMQ;
  if (hasPrefix(module, ["qiskit.algorithms"])) return _ALGORITHMS;
  if (hasPrefix(module, ["qiskit.aqua"])) return _AQUA;
  if (hasPrefix(module, ["qiskit.ignis"])) return _IGNIS;
  if (hasPrefix(module, ["qiskit.finance"])) return _FINANCE;
  if (hasPrefix(module, ["qiskit.chemistry"])) return _CHEMISTRY;
  if (hasPrefix(module, ["qiskit.ml"])) return _ML;
  if (hasPrefix(module, ["qiskit.optimization"])) return _OPTIMIZATION;

  return undefined;
}

export const QISKIT_TOC_GROUPING: TocGrouping = {
  entries: QISKIT_ENTRIES,
  moduleToSection: qiskitModuleToSection,
};
