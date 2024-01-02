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
const CONTENT_FILE_EXTENSIONS = [".md", ".mdx", ".ipynb", ".inv"];

export class File {
  readonly path: string;
  readonly anchors: string[];
  readonly synthetic: boolean;

  /**
   *    path: Path to the file
   * anchors: Anchors available in the file
   */
  constructor(path: string, anchors: string[], synthetic: boolean = false) {
    this.path = path;
    this.anchors = anchors;
    this.synthetic = synthetic;
  }
}

export class Link {
  readonly value: string;
  readonly anchor: string;
  readonly originFiles: Set<string>;
  readonly isExternal: boolean;

  /**
   *  linkString: Link as it appears in source file
   * originFiles: Paths to source file containing link
   */
  constructor(linkString: string, originFiles: string[]) {
    const splitLink = linkString.split("#", 2);
    this.value = splitLink[0];
    this.anchor = splitLink.length > 1 ? `#${splitLink[1]}` : "";
    this.originFiles = new Set(originFiles);
    this.isExternal = linkString.startsWith("http");
  }

  /*
   * Return list of possible paths link could resolve to
   */
  possibleFilePaths(originFile: string): string[] {
    // link is just anchor
    if (this.value === "") {
      return [originFile];
    }
    if (this.value.startsWith("/images")) {
      return [path.join("public/", this.value)];
    }

    const relativeToFolder = this.value.startsWith("/")
      ? DOCS_ROOT
      : path.dirname(originFile);
    // Also remove trailing '/' from path.join
    const baseFilePath = path
      .join(relativeToFolder, this.value)
      .replace(/\/$/gm, "");

    // File may have one of many extensions (.md, .ipynb etc.), and/or be
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
   * Returns a string with the error found, or null
   * if there are no errors.
   */
  async checkExternalLink(): Promise<string | null> {
    try {
      const response = await fetch(this.value, {
        headers: { "User-Agent": "prn-broken-links-finder" },
      });

      if (response.status >= 300) {
        return `Could not find link '${this.value}'`;
      }
    } catch (error) {
      return `Failed to fetch '${this.value}': ${(error as Error).message}`;
    }

    return null;
  }

  /**
   * True if link is in `existingFiles`, otherwise false
   */
  checkInternalLink(existingFiles: File[], originFile: string): boolean {
    const possiblePaths = this.possibleFilePaths(originFile);
    return possiblePaths.some((filePath) =>
      existingFiles.some(
        (existingFile) =>
          existingFile.path == filePath &&
          (this.anchor == "" ||
            existingFile.synthetic == true ||
            existingFile.anchors.includes(this.anchor)),
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

    const possiblePaths = this.possibleFilePaths(originFile);
    const pathNoExtension = possiblePaths[0].replace(/\.[^\/.]+$/, "");

    existingFiles.forEach((file) => {
      let score = levenshtein.get(pathNoExtension, file.path);
      if (score < minScoreLink) {
        minScoreLink = score;
        suggestionPath = file.path;
        suggestionPathAnchors = file.anchors;
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
      return `❓ Did you mean '${suggestionPath
        .replace(/\.[^\/.]+$/, "")
        .replace(/^docs/, "")}'?`;
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

    return `❓ Did you mean '${suggestionPath
      .replace(/\.[^\/.]+$/, "")
      .replace(/^docs/, "")}${suggestionAnchor}'?`;
  }

  /**
   * Returns an error message for each origin of
   * the link, true if the link is in `existingFiles`
   * or is a valid external link, otherwise false
   */
  async checkLink(existingFiles: File[]): Promise<string[]> {
    const errorMessages: string[] = [];

    if (!this.isExternal) {
      // Internal link
      this.originFiles.forEach((originFile) => {
        if (!this.checkInternalLink(existingFiles, originFile)) {
          const resultSuggestion = this.didYouMean(existingFiles, originFile);
          const suggestedPath = resultSuggestion ? ` ${resultSuggestion}` : "";
          errorMessages.push(
            `❌ ${originFile}: Could not find link '${this.value}${this.anchor}'${suggestedPath}`,
          );
        }
      });

      return errorMessages;
    }

    // External link
    const errorMessage = await this.checkExternalLink();
    if (errorMessage) {
      this.originFiles.forEach((originFile: string) => {
        errorMessages.push(`❌ ${originFile}: ${errorMessage}`);
      });
    }
    return errorMessages;
  }
}
