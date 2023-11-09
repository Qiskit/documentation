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

const DOCS_ROOT = "./docs";
const CONTENT_FILE_EXTENSIONS = [".md", ".mdx", ".ipynb"];

export class File {
  readonly path: string;
  readonly anchors: string[];

  /**
   *    path: Path to the file
   * anchors: Anchors available in the file
   */
  constructor(path: string, anchors: string[]) {
    this.path = path;
    this.anchors = anchors;
  }
}

export class Link {
  readonly value: string;
  readonly anchor: string;
  readonly originFiles: string[];
  readonly isExternal: boolean;

  /**
   *  linkString: Link as it appears in source file
   * originFiles: Paths to source file containing link
   */
  constructor(linkString: string, originFiles: string[]) {
    const splitLink = linkString.split("#", 2);
    this.value = splitLink[0];
    this.anchor = splitLink.length > 1 ? `#${splitLink[1]}` : "";
    this.originFiles = originFiles;
    this.isExternal = linkString.startsWith("http");
  }

  /*
   * Return list of possible paths link could resolve to
   */
  resolve(originFile: string): string[] {
    if (this.isExternal) {
      return [this.value];
    }
    if (this.value === "") {
      return [originFile];
    } // link is just anchor
    if (this.value.startsWith("/images")) {
      return [path.join("public/", this.value)];
    }

    let baseFilePath;
    if (this.value.startsWith("/")) {
      // Path is relative to DOCS_ROOT
      baseFilePath = path.join(DOCS_ROOT, this.value);
    } else {
      // Path is relative to originFile file
      baseFilePath = path.join(path.dirname(originFile), this.value);
    }
    // Remove trailing '/' from path.join
    baseFilePath = baseFilePath.replace(/\/$/gm, "");

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

  candidateCheckExternalLink() {
    // External link checking not supported yet
  }

  /**
   * True if link is in `existingFiles`, otherwise false
   */
  checkInternalLink(existingFiles: File[], originFile: string) {
    const possiblePaths = this.resolve(originFile);
    return possiblePaths.some((filePath) =>
      existingFiles.some((existingFile) => existingFile.path == filePath),
    );
  }

  /**
   * Returns an error message for each origin of
   * the link, true if the link is in `existingFiles`
   * or is a valid external link, otherwise false
   */
  checkLink(existingFiles: File[]): string[] {
    const errorMessages: string[] = [];

    if (this.isExternal) {
      // External link checking not supported yet
    } else {
      // Internal link
      this.originFiles.forEach((originFile) => {
        if (!this.checkInternalLink(existingFiles, originFile)) {
          errorMessages.push(
            `❌ ${originFile}: Could not find link '${this.value}'`,
          );
        }
      });
    }

    return errorMessages;
  }
}
