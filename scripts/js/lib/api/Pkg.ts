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

import { findSeparateReleaseNotesVersions } from "./releaseNotes.js";
import { determineHistoricalQiskitGithubUrl } from "../qiskitMetapackage.js";
import {
  TocGrouping,
  QISKIT_TOC_GROUPING,
  QISKIT_ADDON_MPF_GROUPING,
} from "./TocGrouping.js";

export class ReleaseNotesConfig {
  readonly enabled: boolean;
  readonly separatePagesVersions: string[];
  readonly linkToPackage?: string;

  constructor(kwargs: {
    enabled?: boolean;
    separatePagesVersions?: string[];
    linkToPackage?: string;
  }) {
    this.enabled = kwargs.enabled ?? true;
    this.separatePagesVersions = kwargs.separatePagesVersions ?? [];
    this.linkToPackage = kwargs.linkToPackage;
  }
}

type PackageType = "latest" | "historical" | "dev";
type PackageLanguage = "Python" | "C";

/**
 * Information about the specific package and version we're dealing with, e.g. qiskit 0.45.
 */
export class Pkg {
  readonly name: string;
  readonly title: string;
  readonly githubSlug?: string;
  readonly version: string;
  readonly versionWithoutPatch: string;
  readonly type: PackageType;
  readonly language: PackageLanguage;
  readonly releaseNotesConfig: ReleaseNotesConfig;
  readonly tocGrouping?: TocGrouping;
  /// Convert URLs like `my_pkg.SomeClass` to `some-class` for better SEO.
  readonly kebabCaseAndShortenUrls: boolean;

  static VALID_NAMES = [
    "qiskit",
    "qiskit-ibm-runtime",
    "qiskit-ibm-transpiler",
    "qiskit-addon-aqc-tensor",
    "qiskit-addon-obp",
    "qiskit-addon-mpf",
    "qiskit-addon-sqd",
    "qiskit-addon-cutting",
    "qiskit-addon-utils",
    "qiskit-c",
  ];

  constructor(kwargs: {
    name: string;
    title: string;
    githubSlug?: string;
    version: string;
    versionWithoutPatch: string;
    type: PackageType;
    language: PackageLanguage;
    releaseNotesConfig?: ReleaseNotesConfig;
    tocGrouping?: TocGrouping;
    kebabCaseAndShortenUrls: boolean;
  }) {
    this.name = kwargs.name;
    this.title = kwargs.title;
    this.githubSlug = kwargs.githubSlug;
    this.version = kwargs.version;
    this.versionWithoutPatch = kwargs.versionWithoutPatch;
    this.type = kwargs.type;
    this.language = kwargs.language;
    this.releaseNotesConfig =
      kwargs.releaseNotesConfig ?? new ReleaseNotesConfig({});
    this.tocGrouping = kwargs.tocGrouping;
    this.kebabCaseAndShortenUrls = kwargs.kebabCaseAndShortenUrls;
  }

  static async fromArgs(
    name: string,
    version: string,
    versionWithoutPatch: string,
    type: PackageType,
  ): Promise<Pkg> {
    const args = {
      name,
      version,
      versionWithoutPatch,
      type,
    };

    if (name === "qiskit") {
      const releaseNoteEntries = await findSeparateReleaseNotesVersions(name);
      return new Pkg({
        ...args,
        title: "Qiskit SDK",
        githubSlug: "qiskit/qiskit",
        releaseNotesConfig: new ReleaseNotesConfig({
          separatePagesVersions: releaseNoteEntries,
        }),
        tocGrouping: QISKIT_TOC_GROUPING,
        kebabCaseAndShortenUrls: false,
        language: "Python",
      });
    }

    if (name === "qiskit-ibm-runtime") {
      return new Pkg({
        ...args,
        title: "Qiskit Runtime client",
        githubSlug: "qiskit/qiskit-ibm-runtime",
        kebabCaseAndShortenUrls: true,
        language: "Python",
      });
    }

    if (name === "qiskit-ibm-transpiler") {
      return new Pkg({
        ...args,
        title: "Qiskit Transpiler Service client",
        githubSlug: "qiskit/qiskit-ibm-transpiler",
        kebabCaseAndShortenUrls: true,
        language: "Python",
      });
    }

    if (name === "qiskit-addon-aqc-tensor") {
      return new Pkg({
        ...args,
        title: "Approximate quantum compilation (AQC-Tensor)",
        githubSlug: "Qiskit/qiskit-addon-aqc-tensor",
        kebabCaseAndShortenUrls: true,
        language: "Python",
      });
    }
    if (name === "qiskit-addon-obp") {
      return new Pkg({
        ...args,
        title: "Operator backpropagation (OBP)",
        githubSlug: "Qiskit/qiskit-addon-obp",
        kebabCaseAndShortenUrls: true,
        language: "Python",
      });
    }
    if (name === "qiskit-addon-mpf") {
      return new Pkg({
        ...args,
        title: "Multi-product formulas (MPF)",
        githubSlug: "Qiskit/qiskit-addon-mpf",
        kebabCaseAndShortenUrls: true,
        tocGrouping: QISKIT_ADDON_MPF_GROUPING,
        language: "Python",
      });
    }
    if (name === "qiskit-addon-sqd") {
      return new Pkg({
        ...args,
        title: "Sample-based quantum diagonalization (SQD)",
        githubSlug: "Qiskit/qiskit-addon-sqd",
        kebabCaseAndShortenUrls: true,
        language: "Python",
      });
    }
    if (name === "qiskit-addon-cutting") {
      return new Pkg({
        ...args,
        title: "Circuit cutting",
        githubSlug: "Qiskit/qiskit-addon-cutting",
        kebabCaseAndShortenUrls: true,
        language: "Python",
      });
    }
    if (name === "qiskit-addon-utils") {
      return new Pkg({
        ...args,
        title: "Qiskit addon utilities",
        githubSlug: "Qiskit/qiskit-addon-utils",
        kebabCaseAndShortenUrls: true,
        language: "Python",
      });
    }

    if (name === "qiskit-c") {
      return new Pkg({
        ...args,
        title: "Qiskit SDK C API",
        kebabCaseAndShortenUrls: true,
        language: "C",
        releaseNotesConfig: new ReleaseNotesConfig({
          enabled: true,
          linkToPackage: "qiskit",
        }),
      });
    }

    throw new Error(`Unrecognized package: ${name}`);
  }

  static mock(kwargs: {
    name?: string;
    title?: string;
    githubSlug?: string;
    version?: string;
    versionWithoutPatch?: string;
    type?: PackageType;
    language?: PackageLanguage;
    releaseNotesConfig?: ReleaseNotesConfig;
    tocGrouping?: TocGrouping;
    kebabCaseAndShortenUrls?: boolean;
  }): Pkg {
    return new Pkg({
      name: kwargs.name ?? "my-quantum-project",
      title: kwargs.title ?? "My Quantum Project",
      githubSlug: kwargs.githubSlug,
      version: kwargs.version ?? "0.1.0",
      versionWithoutPatch: kwargs.versionWithoutPatch ?? "0.1",
      type: kwargs.type ?? "latest",
      language: kwargs.language ?? "Python",
      releaseNotesConfig: kwargs.releaseNotesConfig,
      tocGrouping: kwargs.tocGrouping,
      kebabCaseAndShortenUrls: kwargs.kebabCaseAndShortenUrls ?? false,
    });
  }

  outputDir(parentDir: string): string {
    let path = join(parentDir, "api", this.name);
    if (this.isHistorical()) {
      path = join(path, this.versionWithoutPatch);
    } else if (this.isDev()) {
      path = join(path, "dev");
    }
    return path;
  }

  sphinxArtifactFolder(): string {
    return `.sphinx-artifacts/${this.name}/${this.versionWithoutPatch}`;
  }

  isHistorical(): boolean {
    return this.type == "historical";
  }

  isDev(): boolean {
    return this.type == "dev";
  }

  isLatest(): boolean {
    return this.type == "latest";
  }

  isCApi(): boolean {
    return this.language === "C";
  }

  isProblematicLegacyQiskit(): boolean {
    return this.name === "qiskit" && +this.versionWithoutPatch < 0.45;
  }

  hasSeparateReleaseNotes(): boolean {
    return this.releaseNotesConfig.separatePagesVersions.length > 0;
  }

  releaseNotesTitle(): string {
    const versionStr = this.hasSeparateReleaseNotes()
      ? ` ${this.versionWithoutPatch}`
      : "";
    return `${this.title}${versionStr} release notes`;
  }

  releaseNotesPackageName(): string {
    return this.releaseNotesConfig.linkToPackage ?? this.name;
  }

  /**
   * Returns a function that takes in a fileName like `qiskit_ibm_runtime/job/exceptions` and returns the
   * stable GitHub URL to the file for this package's version.
   *
   * The input fileName will not have a file extension. It will use whatever file name was generated by
   * `sphinx.ext.viewcode`, which means we need to deal with its quirks like handling `__init__.py`.
   */
  determineGithubUrlFn(): (fileName: string) => string {
    // For files like `my_module/__init__.py`, `sphinx.ext.viewcode` will title the
    // file `my_module.py`. We need to add back the `/__init__.py` when linking to GitHub.
    const convertToInitPy = new Set([
      "qiskit/qasm",
      "qiskit/qasm2",
      "qiskit/qasm3",
      "qiskit/qobj",
      "qiskit/providers/ibmq",
      "qiskit/transpiler/preset_passmanagers",
    ]);
    const normalizeFile = (fp: string) =>
      convertToInitPy.has(fp) ? `${fp}/__init__` : fp;

    // Runtime and Qiskit 0.45+ are simple: there is a branch called `stable/<version>`
    // like `stable/0.45` in each GitHub project.
    if (
      this.name !== "qiskit" ||
      this.type === "dev" ||
      +this.versionWithoutPatch >= 0.45
    ) {
      const branchName =
        this.type === "dev" && this.version.endsWith("-dev")
          ? "main"
          : `stable/${this.versionWithoutPatch}`;
      const baseUrl = `https://github.com/${this.githubSlug}/tree/${branchName}`;
      return (fileName) => {
        if (!this.githubSlug) {
          throw new Error(
            `Encountered sphinx.ext.viewcode link, but Pkg.githubSlug is not set for ${this.name}`,
          );
        }

        return `${baseUrl}/${normalizeFile(fileName)}.py`;
      };
    }

    // Otherwise, we have to deal with Qiskit <0.45, when we had the qiskit-metapackage comprised of
    // multiple packages. Refer to the version table in api/qiskit/release-notes/0.44.mdx.
    return (fileName) =>
      determineHistoricalQiskitGithubUrl(
        this.versionWithoutPatch,
        normalizeFile(fileName),
      );
  }
}
