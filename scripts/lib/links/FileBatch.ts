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
import { ExternalLink } from "./ExternalLink";
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
   * Returns a triplet:
   *   1. A list of `File` objects with their anchors. These represent
   *      the universe of valid internal links for this batch, other
   *      than any additional we may add at check-time, e.g. images.
   *   2. A list of InternalLink objects to validate.
   *   3. A list of ExternalLink objects to validate.
   */
  async load(
    loadExternalLinks: boolean,
  ): Promise<[File[], InternalLink[], ExternalLink[]]> {
    const files: File[] = [];
    for (let filePath of this.toLoad) {
      const parsed = await parseFile(filePath);
      files.push(new File(filePath, parsed.anchors));
    }

    const internalLinksToOriginFiles = new Map<string, string[]>();
    const externalLinksToOriginFiles = new Map<string, string[]>();
    for (const filePath of this.toCheck) {
      const parsed = await parseFile(filePath);
      files.push(new File(filePath, parsed.anchors));
      addLinksToMap(filePath, parsed.internalLinks, internalLinksToOriginFiles);
      if (loadExternalLinks) {
        addLinksToMap(
          filePath,
          parsed.externalLinks,
          externalLinksToOriginFiles,
        );
      }
    }

    const internalLinks = Array.from(internalLinksToOriginFiles.entries()).map(
      ([link, originFiles]) => new InternalLink(link, originFiles),
    );
    const externalLinks = Array.from(externalLinksToOriginFiles.entries()).map(
      ([link, originFiles]) => new ExternalLink(link, originFiles),
    );
    return [files, internalLinks, externalLinks];
  }

  /**
   * Check that all links in this file batch are valid.
   *
   * Logs the results to the console and returns `true` if there were no issues.
   */
  async check(
    checkExternalLinks: boolean,
    otherFiles: File[],
  ): Promise<boolean> {
    console.log(`\n\nChecking links for ${this.description}`);

    const [docsFiles, internalLinkList, externalLinkList] =
      await this.load(checkExternalLinks);
    const existingFiles = docsFiles.concat(otherFiles);

    const results = internalLinkList.map((link) => link.check(existingFiles));

    // For loop reduces the risk of rate-limiting.
    for (let link of externalLinkList) {
      results.push(await link.check());
    }

    let allGood = true;
    results
      .filter((res) => res !== undefined)
      .forEach((linkError) => {
        console.error(linkError);
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
