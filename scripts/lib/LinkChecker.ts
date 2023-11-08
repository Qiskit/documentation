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
  anchors: string[];

  constructor(path: string) {
    this.path = path;
    this.anchors = [];
  }

  setAnchors(anchors: string[]) {
    this.anchors = anchors;
  }
}

export class Link {
  readonly value: string;
  readonly anchor: string;
  readonly origin: string[];
  readonly status: boolean[];
  readonly isExternal: boolean;

  constructor(linkString: string, origin: string) {
    /*
     * linkString: Link as it appears in source file
     *     origin: Path to source file containing link
     */

    const splitLink = linkString.split("#", 2);
    this.value = splitLink[0];
    this.anchor = splitLink.length > 1 ? `#${splitLink[1]}` : "";
    this.origin = [origin];
    this.status = [];
    this.isExternal = linkString.startsWith("http");
  }

  addOrigin(origin: string) {
    this.origin.push(origin);
  }

  resolve(origin: string): string[] {
    /*
     * Return list of possible paths link could resolve to
     */
    if (this.isExternal) {
      return [this.value];
    }
    if (this.value === "") {
      return [origin];
    } // link is just anchor
    if (this.value.startsWith("/images")) {
      return [path.join("public/", this.value)];
    }

    let baseFilePath;
    if (this.value.startsWith("/")) {
      // Path is relative to DOCS_ROOT
      baseFilePath = path.join(DOCS_ROOT, this.value);
    } else {
      // Path is relative to origin file
      baseFilePath = path.join(path.dirname(origin), this.value);
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

  checkExternalLink() {
    // External link checking not supported yet
    return true;
  }

  checkInternalLink(existingFiles: File[], origin: string) {
    /*
     * True if link is in `existingFiles`, otherwise false
     */
    const possiblePaths = this.resolve(origin);
    for (let filePath of possiblePaths) {
      if (existingFiles.some((file) => file.path == filePath)) {
        return true;
      }
    }
    return false;
  }

  checkLink(existingFiles: File[]) {
    /*
     * Adds a boolean in the `status` attribute for every
     * origin of the link, true if the link is in `existingFiles`
     * or is a valid external link, otherwise false
     */
    if (this.isExternal) {
      // External link
      const result = this.checkExternalLink();
      for (let i = 0; i < this.origin.length; i++) {
        this.status.push(result);
      }
    } else {
      if (this.value.startsWith("/")) {
        // Internal link (Absolute Path)
        const result = this.checkInternalLink(existingFiles, "");
        for (let i = 0; i < this.origin.length; i++) {
          this.status.push(result);
        }
      } else {
        // Internal link (Relative Path)
        for (let origin of this.origin) {
          const result = this.checkInternalLink(existingFiles, origin);
          this.status.push(result);
        }
      }
    }
  }
}
