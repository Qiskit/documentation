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

import path from "node:path";
import levenshtein from "fast-levenshtein";

const DOCS_ROOT = "./docs";
const CONTENT_FILE_EXTENSIONS = [".mdx", ".ipynb"];

export class File {
  readonly path: string;
  readonly anchors: Set<string>;
  readonly synthetic: boolean;

  /**
   * path: Path to the file
   * anchors: Anchors available in the file
   */
  constructor(path: string, anchors: Set<string>, synthetic: boolean = false) {
    this.path = path;
    this.anchors = anchors;
    this.synthetic = synthetic;
  }
}

export class InternalLink {
  readonly value: string;
  readonly anchor: string;
  readonly originFiles: Set<string>;

  /**
   *  linkString: Link as it appears in source file
   * originFiles: Paths to source file containing link
   */
  constructor(linkString: string, originFiles: string[]) {
    if (linkString.startsWith("http")) {
      throw new Error(
        `Invalid InternalLink, cannot start with 'http': ${linkString}`,
      );
    }
    const splitLink = linkString.split("#", 2);
    this.value = splitLink[0];
    this.anchor = splitLink.length > 1 ? `#${splitLink[1]}` : "";
    this.originFiles = new Set(originFiles);
  }

  /*
   * Return list of possible paths link could resolve to
   */
  possibleFilePaths(originFile: string): string[] {
    // link is just anchor
    if (this.value === "") {
      return [originFile];
    }
    if (
      this.value.startsWith("/images") ||
      this.value.startsWith("/videos") ||
      this.value.endsWith(".pdf")
    ) {
      return [path.join("public/docs/", this.value)];
    }

    const relativeToFolder = this.value.startsWith("/")
      ? DOCS_ROOT
      : path.dirname(originFile);
    // Also remove trailing '/' from path.join
    const baseFilePath = path
      .join(relativeToFolder, this.value)
      .replace(/\/$/gm, "");

    // File may have different extensions (.mdx or .ipynb), and/or be
    // directory with an index file (e.g. `docs/build` should resolve to
    // `docs/build/index.mdx`). We return a list of possible filenames.
    let possibleFilePaths = [];
    for (let index of ["", "/index"]) {
      for (let extension of CONTENT_FILE_EXTENSIONS) {
        possibleFilePaths.push(baseFilePath + index + extension);
      }
    }
    return possibleFilePaths;
  }

  /**
   * Returns true if link is in `existingFiles`, otherwise false.
   */
  isValid(existingFiles: File[], originFile: string): boolean {
    const possiblePaths = this.possibleFilePaths(originFile);
    return possiblePaths.some((filePath) =>
      existingFiles.some(
        (existingFile) =>
          existingFile.path == filePath &&
          (this.anchor == "" ||
            existingFile.synthetic == true ||
            existingFile.anchors.has(this.anchor)),
      ),
    );
  }

  /**
   * Returns a string with a suggested replacement for a broken link
   * if exists a link similar enough to the broken one
   */
  didYouMean(existingFiles: File[], originFile: string): string | null {
    // Minimum similarity between 0 and 1 that the suggested link should have
    const MIN_SIMILARITY = 0.5;

    // Find a new valid link
    let minScoreLink = Number.MAX_SAFE_INTEGER;
    let suggestionPath: String = "";
    let suggestionPathAnchors: string[] = [];

    existingFiles.forEach((file) => {
      const candidatePath = file.path.startsWith("public/docs/")
        ? file.path.replace(/^public\/docs/, "")
        : file.path.replace(/\.[^\/.]+$/, "").replace(/^docs/, "");
      let score = levenshtein.get(this.value, candidatePath);
      if (score < minScoreLink) {
        minScoreLink = score;
        suggestionPath = candidatePath;
        suggestionPathAnchors = Array.from(file.anchors);
      }
    });

    const lengthLongestPath =
      this.value.length > suggestionPath.length
        ? this.value.length
        : suggestionPath.length;
    const scoreLinkNormalized = 1 - minScoreLink / lengthLongestPath;

    if (scoreLinkNormalized < MIN_SIMILARITY) {
      return null;
    }

    if (this.anchor == "") {
      return `❓ Did you mean '${suggestionPath}'?`;
    }

    // Find a new valid anchor
    let minScoreAnchor = Number.MAX_SAFE_INTEGER;
    let suggestionAnchor: String = "";

    suggestionPathAnchors.forEach((anchor) => {
      let score = levenshtein.get(this.anchor, anchor);
      if (score < minScoreAnchor) {
        minScoreAnchor = score;
        suggestionAnchor = anchor;
      }
    });

    const lengthLongestAnchor =
      this.anchor.length > suggestionAnchor.length
        ? this.anchor.length
        : suggestionAnchor.length;
    const scoreAnchorNormalized = 1 - minScoreAnchor / lengthLongestAnchor;

    if (scoreAnchorNormalized < MIN_SIMILARITY) {
      return null;
    }

    return `❓ Did you mean '${suggestionPath}${suggestionAnchor}'?`;
  }

  /**
   * Returns an error message if link failed.
   */
  check(existingFiles: File[]): string | undefined {
    const failingFiles: string[] = [];
    this.originFiles.forEach((originFile) => {
      if (this.isValid(existingFiles, originFile)) {
        return;
      }
      const resultSuggestion = this.didYouMean(existingFiles, originFile);
      const suggestedPath = resultSuggestion ? `    ${resultSuggestion}` : "";
      failingFiles.push(`    ${originFile}${suggestedPath}`);
    });

    return failingFiles.length === 0
      ? undefined
      : `❌ Could not find link '${this.value}${
          this.anchor
        }'. Appears in:\n${failingFiles.sort().join("\n")}`;
  }
}
