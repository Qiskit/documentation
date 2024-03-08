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

import { isEmpty, keyBy, keys, orderBy } from "lodash";

import { getLastPartFromFullIdentifier } from "../stringUtils";
import { Metadata } from "./Metadata";
import { Pkg } from "./Pkg";

export type TocEntry = {
  title: string;
  url?: string;
  children?: TocEntry[];
};

type Toc = {
  title: string;
  subtitle?: string;
  children: TocEntry[];
  collapsed: boolean;
};

function nestModule(id: string): boolean {
  // For example, nest `qiskit.algorithms.submodule`, but
  // not `qiskit.algorithms` which should be top-level.
  return id.split(".").length > 2;
}

export function generateToc(
  pkg: Pkg,
  results: Array<{ meta: Metadata; url: string }>,
): Toc {
  const releaseNotesUrl = `/api/${pkg.name}/release-notes`;
  const resultsWithName = results.filter(
    (result) => !isEmpty(result.meta.apiName),
  );

  const modules = resultsWithName.filter(
    (result) => result.meta.apiType === "module",
  );
  const items = resultsWithName.filter(
    (result) =>
      result.meta.apiType === "class" ||
      result.meta.apiType === "function" ||
      result.meta.apiType === "exception",
  );

  const tocChildren: Toc["children"] = [];

  if (modules.length > 0) {
    const tocModules = modules.map(
      (module): TocEntry => ({
        title: module.meta.apiName!,
        // Remove the final /index from the url
        url: module.url.replace(/\/index$/, ""),
      }),
    );
    const tocModulesByTitle = keyBy(tocModules, (toc) => toc.title);
    const tocModuleTitles = keys(tocModulesByTitle);

    // Add items to modules
    for (const item of items) {
      if (!item.meta.apiName) continue;
      const itemModuleTitle = findClosestParentModules(
        item.meta.apiName,
        tocModuleTitles,
      );
      const itemModule = itemModuleTitle
        ? tocModulesByTitle[itemModuleTitle]
        : undefined;
      if (itemModule) {
        if (!itemModule.children) itemModule.children = [];
        const itemTocEntry: TocEntry = {
          title: getLastPartFromFullIdentifier(item.meta.apiName!),
          url: item.url,
        };
        itemModule.children.push(itemTocEntry);
      }
    }

    // Nest modules
    const nestedTocModules: TocEntry[] = [];
    for (const tocModule of tocModules) {
      if (!nestModule(tocModule.title)) {
        nestedTocModules.push(tocModule);
        continue;
      }

      const parentModuleTitle = findClosestParentModules(
        tocModule.title,
        tocModuleTitles,
      );
      const parentModule = parentModuleTitle
        ? tocModulesByTitle[parentModuleTitle]
        : undefined;
      if (parentModule) {
        if (!parentModule.children) parentModule.children = [];
        parentModule.children.push(tocModule);
      } else {
        nestedTocModules.push(tocModule);
      }
    }

    // Sort children and create overview page
    for (const tocModule of tocModules) {
      if (tocModule.children && tocModule.children.length > 0) {
        tocModule.children = [
          { title: "Overview", url: tocModule.url },
          ...orderEntriesByChildrenAndTitle(tocModule.children),
        ];
        delete tocModule.url;
      }
    }

    tocChildren.push(...orderEntriesByTitle(nestedTocModules));
  }

  const releaseNotesEntry: TocEntry = {
    title: "Release notes",
  };
  if (pkg.releaseNoteEntries.length) {
    releaseNotesEntry.children = pkg.releaseNoteEntries;
  } else {
    releaseNotesEntry.url = releaseNotesUrl;
  }
  tocChildren.push(releaseNotesEntry);

  return {
    title: pkg.title,
    children: tocChildren,
    collapsed: true,
  };
}

function findClosestParentModules(
  id: string,
  possibleParents: string[],
): string | undefined {
  const idParts = id.split(".");
  for (let i = idParts.length - 1; i > 0; i--) {
    const testId = idParts.slice(0, i).join(".");
    if (possibleParents.includes(testId)) {
      return testId;
    }
  }
}

function orderEntriesByTitle(items: TocEntry[]): TocEntry[] {
  return orderBy(items, [(item) => item.title.toLowerCase()]);
}

function orderEntriesByChildrenAndTitle(items: TocEntry[]): TocEntry[] {
  return orderBy(items, [
    (item) => (isEmpty(item.children) ? 0 : 1),
    (item) => item.title.toLowerCase(),
  ]);
}
