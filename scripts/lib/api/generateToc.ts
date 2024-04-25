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

import { Dictionary, isEmpty, keyBy, keys, orderBy } from "lodash";

import { getLastPartFromFullIdentifier } from "../stringUtils";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";
import { Pkg } from "./Pkg";
import type { TocModuleGrouping } from "./TocModuleGrouping";

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

export function generateToc(pkg: Pkg, results: HtmlToMdResultWithUrl[]): Toc {
  const [modules, items] = getModulesAndItems(results);
  const tocModules = generateTocModules(modules);
  const tocModulesByTitle = keyBy(tocModules, (toc) => toc.title);
  const tocModuleTitles = keys(tocModulesByTitle);

  addItemsToModules(items, tocModulesByTitle, tocModuleTitles);

  const sortedTocModules = pkg.tocModuleGrouping
    ? groupAndSortModules(pkg.tocModuleGrouping, tocModules)
    : orderEntriesByTitle(tocModules);
  generateOverviewPage(tocModules);

  return {
    title: pkg.title,
    children: [...sortedTocModules, generateReleaseNotesEntries(pkg)],
    collapsed: true,
  };
}

function getModulesAndItems(
  results: HtmlToMdResultWithUrl[],
): [HtmlToMdResultWithUrl[], HtmlToMdResultWithUrl[]] {
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

  return [modules, items];
}

function generateTocModules(modules: HtmlToMdResultWithUrl[]): TocEntry[] {
  return modules.map(
    (module): TocEntry => ({
      title: module.meta.apiName!,
      // Remove the final /index from the url
      url: module.url.replace(/\/index$/, ""),
    }),
  );
}

function addItemsToModules(
  items: HtmlToMdResultWithUrl[],
  tocModulesByTitle: Dictionary<TocEntry>,
  tocModuleTitles: string[],
) {
  for (const item of items) {
    if (!item.meta.apiName) continue;
    const itemModuleTitle = findClosestParentModules(
      item.meta.apiName,
      tocModuleTitles,
    );

    if (itemModuleTitle) {
      const itemModule = tocModulesByTitle[itemModuleTitle];
      if (!itemModule.children) itemModule.children = [];
      const itemTocEntry: TocEntry = {
        title: getLastPartFromFullIdentifier(item.meta.apiName!),
        url: item.url,
      };
      itemModule.children.push(itemTocEntry);
    }
  }
}

function groupAndSortModules(
  moduleGrouping: TocModuleGrouping,
  tocModules: TocEntry[],
): TocEntry[] {
  // Note that Map will preserve the order of sections.
  const sectionsToModules = new Map<string, TocEntry[]>(
    moduleGrouping.sections.map((section) => [section, []]),
  );
  for (const tocModule of tocModules) {
    const section = moduleGrouping.moduleToSection(tocModule.title);
    const sectionModules = sectionsToModules.get(section);
    if (!sectionModules) {
      throw new Error(
        `Unexpected section '${section} for the module ${tocModule.title}`,
      );
    }
    sectionModules.push(tocModule);
  }

  const result = [];
  for (const [section, modules] of sectionsToModules.entries()) {
    if (!modules) continue;
    result.push({
      title: section,
      children: orderEntriesByTitle(modules),
    });
  }
  return result;
}

function generateOverviewPage(tocModules: TocEntry[]): void {
  for (const tocModule of tocModules) {
    if (tocModule.children && tocModule.children.length > 0) {
      tocModule.children = [
        { title: "Module overview", url: tocModule.url },
        ...orderEntriesByChildrenAndTitle(tocModule.children),
      ];
      delete tocModule.url;
    }
  }
}

function generateReleaseNotesEntries(pkg: Pkg) {
  const releaseNotesUrl = `/api/${pkg.name}/release-notes`;
  const releaseNotesEntry: TocEntry = {
    title: "Release notes",
  };
  if (pkg.releaseNoteEntries.length) {
    releaseNotesEntry.children = pkg.releaseNoteEntries;
  } else {
    releaseNotesEntry.url = releaseNotesUrl;
  }

  return releaseNotesEntry;
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
