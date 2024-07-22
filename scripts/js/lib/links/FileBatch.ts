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

import { globby } from "globby";

import { InternalLink, File } from "./InternalLink";
import {
  ALWAYS_IGNORED_URLS,
  FILES_TO_IGNORES,
  IGNORED_FILES,
} from "./ignores";
import { parseFile } from "./extractLinks";

export class FileBatch {
  /**
   * Files whose links should be validated. These files will also be loaded
   * into memory so that links from other files to these files are recognized.
   */
  readonly toCheck: string[];
  /**
   * Files that may be linked to from other files, but who should not have their
   * own links checked for validity. These files need to be loaded into memory
   * so that links from other files to these files are recognized.
   */
  readonly toLoad: string[];
  /**
   * A short description of the batch to make logging more useful.
   */
  readonly description: string;

  constructor(toCheck: string[], toLoad: string[], description: string) {
    this.toCheck = toCheck;
    this.toLoad = toLoad;
    this.description = description;
  }

  static async fromGlobs(
    toCheckGlobs: string[],
    toLoadGlobs: string[],
    description: string,
  ): Promise<FileBatch> {
    const [toCheck, toLoad] = await Promise.all([
      globby(toCheckGlobs),
      globby(toLoadGlobs),
    ]);
    return new FileBatch(toCheck, toLoad, description);
  }

  /**
   * Load and process the file batch.
   *
   * Returns a pair:
   *   1. A list of `File` objects with their anchors. These represent
   *      the universe of valid internal links for this batch, other
   *      than any additional we may add at check-time, e.g. images.
   *   2. A list of InternalLink objects to validate.
   */
  async load(): Promise<[File[], InternalLink[]]> {
    const files: File[] = [];
    for (let filePath of this.toLoad) {
      const parsed = await parseFile(filePath);
      files.push(new File(filePath, parsed.anchors));
    }

    const linksToOriginFiles = new Map<string, string[]>();
    for (const filePath of this.toCheck) {
      const parsed = await parseFile(filePath);
      files.push(new File(filePath, parsed.anchors));
      addLinksToMap(filePath, parsed.internalLinks, linksToOriginFiles);
    }

    const links = Array.from(linksToOriginFiles.entries()).map(
      ([link, originFiles]) => new InternalLink(link, originFiles),
    );
    return [files, links];
  }

  /**
   * Check that all internal links in this file batch are valid.
   *
   * Logs the results to the console and returns `true` if there were no issues.
   */
  async checkInternalLinks(otherFiles: File[]): Promise<boolean> {
    console.log(`\n\nChecking internal links for ${this.description}`);

    const [docsFiles, links] = await this.load();
    const existingFiles = docsFiles.concat(otherFiles);

    let allGood = true;
    links.forEach((link) => {
      const result = link.check(existingFiles);
      if (result === undefined) return;
      console.error(result);
      allGood = false;
    });
    return allGood;
  }
}

export function addLinksToMap(
  filePath: string,
  links: Set<string>,
  linksToOriginFiles: Map<string, string[]>,
): void {
  if (IGNORED_FILES.has(filePath)) return;
  links.forEach((link) => {
    if (
      ALWAYS_IGNORED_URLS.has(link) ||
      FILES_TO_IGNORES[filePath]?.includes(link)
    ) {
      return;
    }

    const entry = linksToOriginFiles.get(link);
    if (entry === undefined) {
      linksToOriginFiles.set(link, [filePath]);
    } else {
      entry.push(filePath);
    }
  });
}
