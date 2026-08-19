//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.
// Jupyter notebook stages used by the addon docs pipeline. The API pipeline
// does not process notebooks today, but these stages live alongside the other
// shared stages so that any future pipeline needing notebook handling can
// reuse them without duplication.

export type NotebookCell = {
  id?: string;
  cell_type: "code" | "markdown" | "raw";
  source: string | string[];
  metadata: Record<string, unknown>;
  outputs?: unknown[];
  execution_count?: number | null;
};

export type Notebook = {
  nbformat: number;
  nbformat_minor: number;
  metadata: Record<string, unknown>;
  cells: NotebookCell[];
};

export type NotebookWithUrl = Notebook & { url: string };
