// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

export interface Link {
  // Simple interface for scripts/command/updateApiDocs.ts
  url: string; // Where the link goes
  text?: string; // What the user sees
}

export type Pkg = {
  // Python package (e.g. qiskit, qiskit-ibm-runtime)
  name: string;
  githubSlug: string;
  baseUrl: string;
  initialUrls: string[];
  title: string;
  ignore?(id: string): boolean;
  tocOptions?: {
    collapsed?: boolean;
    nestModule?(id: string): boolean;
  };
  transformLink?: (link: Link) => Link | undefined;
};
