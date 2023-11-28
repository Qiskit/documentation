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

/**
 * Simple interface for scripts/command/updateApiDocs.ts
 */
export interface Link {
  url: string; // Where the link goes
  text?: string; // What the user sees
}

/**
 * Python package (e.g. qiskit, qiskit-ibm-runtime).
 * This information does not depend on the generation script
 */
export type PkgInfo = {
  name: string;
  githubSlug: string;
  baseUrl: string;
  initialUrls: string[];
  title: string;
  ignore?(id: string): boolean;
  hasSeparateReleaseNotes?: boolean;
  tocOptions?: {
    collapsed?: boolean;
    nestModule?(id: string): boolean;
  };
  transformLink?: (link: Link) => Link | undefined;
};

/**
 * Information about the specific package version we're dealing with.
 * This stuff _does_ depend on the parameters passed to the generation script,
 * and may be updated at the script runs.
 */
export type Pkg = PkgInfo & {
  // Data related to the processing of a package
  version: string;
  versionWithoutPatch: string;
  historical: boolean;
  releaseNoteEntries: { title: string; url: string }[];
};
