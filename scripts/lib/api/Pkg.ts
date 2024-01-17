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

import { join } from "path/posix";

import { findLegacyReleaseNotes } from "./releaseNotes";
import { removePrefix, removeSuffix } from "../stringUtils";
import { getRoot } from "../fs";

export const VALID_PACKAGE_NAMES = [
  "qiskit",
  "qiskit-ibm-runtime",
  "qiskit-ibm-provider",
];

/**
 * Simple interface for scripts/command/updateApiDocs.ts
 */
export interface Link {
  url: string; // Where the link goes
  text?: string; // What the user sees
}

export interface ReleaseNoteEntry {
  title: string;
  url: string;
}

/**
 * Information about the specific package and version we're dealing with, e.g. qiskit 0.45.
 */
export class Pkg {
  readonly name: string;
  readonly title: string;
  readonly githubSlug: string;
  readonly hasSeparateReleaseNotes: boolean;
  readonly transformLink?: (link: Link) => Link | undefined;
  readonly version: string;
  readonly versionWithoutPatch: string;
  readonly historical: boolean;
  readonly releaseNoteEntries: ReleaseNoteEntry[];

  constructor(kwargs: {
    name: string;
    title: string;
    githubSlug: string;
    hasSeparateReleaseNotes: boolean;
    transformLink?: (link: Link) => Link | undefined;
    version: string;
    versionWithoutPatch: string;
    historical: boolean;
    releaseNoteEntries: ReleaseNoteEntry[];
  }) {
    this.name = kwargs.name;
    this.title = kwargs.title;
    this.githubSlug = kwargs.githubSlug;
    this.hasSeparateReleaseNotes = kwargs.hasSeparateReleaseNotes;
    this.transformLink = kwargs.transformLink;
    this.version = kwargs.version;
    this.versionWithoutPatch = kwargs.versionWithoutPatch;
    this.historical = kwargs.historical;
    this.releaseNoteEntries = kwargs.releaseNoteEntries;
  }

  static async fromArgs(
    name: string,
    version: string,
    versionWithoutPatch: string,
    historical: boolean,
  ): Promise<Pkg> {
    const args = {
      name,
      version,
      versionWithoutPatch,
      historical,
    };

    if (name === "qiskit") {
      const releaseNoteEntries = await findLegacyReleaseNotes(name);
      return new Pkg({
        ...args,
        title: "Qiskit",
        name: "qiskit",
        githubSlug: "qiskit/qiskit",
        hasSeparateReleaseNotes: true,
        releaseNoteEntries,
      });
    }

    if (name === "qiskit-ibm-runtime") {
      return new Pkg({
        ...args,
        title: "Qiskit Runtime IBM Client",
        name: "qiskit-ibm-runtime",
        githubSlug: "qiskit/qiskit-ibm-runtime",
        transformLink,
        hasSeparateReleaseNotes: false,
        releaseNoteEntries: [],
      });
    }

    if (name === "qiskit-ibm-provider") {
      return new Pkg({
        ...args,
        title: "Qiskit IBM Provider",
        name: "qiskit-ibm-provider",
        githubSlug: "qiskit/qiskit-ibm-provider",
        transformLink,
        hasSeparateReleaseNotes: false,
        releaseNoteEntries: [],
      });
    }

    throw new Error(`Unrecognized package: ${name}`);
  }

  static mock(kwargs: {
    name?: string;
    title?: string;
    githubSlug?: string;
    hasSeparateReleaseNotes?: boolean;
    transformLink?: (link: Link) => Link | undefined;
    version?: string;
    versionWithoutPatch?: string;
    historical?: boolean;
    releaseNoteEntries?: ReleaseNoteEntry[];
  }): Pkg {
    return new Pkg({
      name: kwargs.name ?? "my-quantum-project",
      title: kwargs.title ?? "My Quantum Project",
      githubSlug: kwargs.githubSlug ?? "qiskit/my-quantum-project",
      hasSeparateReleaseNotes: kwargs.hasSeparateReleaseNotes ?? false,
      transformLink: kwargs.transformLink,
      version: kwargs.version ?? "0.1.0",
      versionWithoutPatch: kwargs.versionWithoutPatch ?? "0.1",
      historical: kwargs.historical ?? false,
      releaseNoteEntries: kwargs.releaseNoteEntries ?? [],
    });
  }

  outputDir(parentDir: string): string {
    let path = join(parentDir, "api", this.name);
    if (this.historical) {
      path = join(path, this.versionWithoutPatch);
    }
    return path;
  }

  ciArtifactFolder(): string {
    return `${getRoot()}/.out/python/sources/${this.name}/${this.version}`;
  }

  baseGitHubUrl(): string {
    return `https://github.com/${this.githubSlug}/tree/stable/${this.versionWithoutPatch}/`;
  }
}

function transformLink(link: Link): Link | undefined {
  const updateText = link.url === link.text;
  const prefixes = [
    "https://qiskit.org/documentation/apidoc/",
    "https://qiskit.org/documentation/stubs/",
  ];
  const prefix = prefixes.find((prefix) => link.url.startsWith(prefix));
  if (!prefix) {
    return;
  }
  let [url, anchor] = link.url.split("#");
  url = removePrefix(url, prefix);
  url = removeSuffix(url, ".html");
  if (anchor && anchor !== url) {
    url = `${url}#${anchor}`;
  }
  const newText = updateText ? url : undefined;
  return { url: `/api/qiskit/${url}`, text: newText };
}
