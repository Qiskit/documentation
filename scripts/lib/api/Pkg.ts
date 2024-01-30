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

  static VALID_NAMES = ["qiskit", "qiskit-ibm-runtime", "qiskit-ibm-provider"];

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

  hasObjectsInv(): boolean {
    // We don't currently worry about objects.inv for historical API docs because we don't
    // expect users to care about it, so we can keep things simple. For example, our copy
    // of the historical Qiskit API docs <0.32 did not include `objects.inv`, so we could
    // never get the mechanism working for those.
    //
    // Feel free to enable this mechanism for historical API docs if users find it useful!
    // When adding, be sure that we correctly point to the correct subfolder, e.g.
    // api/qiskit/0.44 rather than api/qiskit.
    return !this.historical;
  }

  /**
   * Returns a function that takes in a fileName like `qiskit_ibm_provider/job/exceptions` and returns the
   * stable GitHub URL to the file for this package's version.
   *
   * The input fileName will not have a file extension. It will use whatever file name was generated by
   * `sphinx.ext.viewcode`, which means we need to deal with its quirks like handling `__init__.py`.
   */
  determineGithubUrlFn(): (fileName: string) => string {
    // For files like `my_module/__init__.py`, `sphinx.ext.viewcode` will title the
    // file `my_module.py`. We need to add back the `/__init__.py` when linking to GitHub.
    const convertToInitPy = new Set([
      "qiskit_ibm_provider",
      "qiskit/qasm",
      "qiskit/qasm2",
      "qiskit/qasm3",
      "qiskit/qobj",
      "qiskit/providers/ibmq",
      "qiskit/transpiler/preset_passmanagers",
    ]);
    const normalizeFile = (fp: string) =>
      convertToInitPy.has(fp) ? `${fp}/__init__` : fp;

    // Provider, Runtime, and Qiskit 0.45+ are simple: there is a branch called `stable/<version>`
    // like `stable/0.45` in each GitHub project.
    if (this.name !== "qiskit" || +this.versionWithoutPatch >= 0.45) {
      const baseUrl = `https://github.com/${this.githubSlug}/tree/stable/${this.versionWithoutPatch}`;
      return (fileName) => {
        return `${baseUrl}/${normalizeFile(fileName)}.py`;
      };
    }

    // Otherwise, we have to deal with Qiskit <0.45, when we had the qiskit-metapackage comprised of
    // multiple packages. Refer to the version table in api/qiskit/release-notes/0.44.md.
    return (fileName) =>
      determineHistoricalQiskitGithubUrl(
        this.versionWithoutPatch,
        normalizeFile(fileName),
      );
  }
}

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

function determineHistoricalQiskitGithubUrl(
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
