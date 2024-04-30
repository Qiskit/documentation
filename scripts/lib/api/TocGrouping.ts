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
