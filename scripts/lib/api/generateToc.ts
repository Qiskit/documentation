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

import { isEmpty, orderBy } from "lodash";

import { getLastPartFromFullIdentifier } from "../stringUtils";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";
import { Pkg } from "./Pkg";
import type { TocGrouping } from "./TocGrouping";

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

export function generateToc(pkg: Pkg, results: HtmlToMdResultWithUrl[]): Toc {
  const [modules, items] = getModulesAndItems(results);
  const tocModules = generateTocModules(modules);
  const tocModulesByTitle = new Map(
    tocModules.map((entry) => [entry.title, entry]),
  );
  const tocModuleTitles = Array.from(tocModulesByTitle.keys());

  addItemsToModules(items, tocModulesByTitle, tocModuleTitles);

  let orderedModules;
  if (pkg.tocGrouping) {
    orderedModules = groupAndSortModules(pkg.tocGrouping, tocModulesByTitle);
  } else if (pkg.nestModulesInToc) {
    orderedModules = getNestedTocModulesSorted(
      tocModulesByTitle,
      tocModuleTitles,
    );
  } else {
    orderedModules = sortAndTruncateModules(tocModules);
  }

  generateOverviewPage(tocModules);
  const maybeIndexPage = ensureIndexPage(pkg, orderedModules);
  if (maybeIndexPage) {
    orderedModules.unshift(maybeIndexPage);
  }

  const maybeReleaseNotes = generateReleaseNotesEntry(pkg);
  if (maybeReleaseNotes) {
    orderedModules.push(maybeReleaseNotes);
  }

  return {
    title: pkg.title,
    children: orderedModules,
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
  tocModulesByTitle: Map<string, TocEntry>,
  tocModuleTitles: string[],
) {
  for (const item of items) {
    if (!item.meta.apiName) continue;
    const itemModuleTitle = findClosestParentModules(
      item.meta.apiName,
      tocModuleTitles,
    );

    if (itemModuleTitle) {
      const itemModule = tocModulesByTitle.get(itemModuleTitle) as TocEntry;
      if (!itemModule.children) itemModule.children = [];
      const itemTocEntry: TocEntry = {
        title: getLastPartFromFullIdentifier(item.meta.apiName!),
        url: item.url,
      };
      itemModule.children.push(itemTocEntry);
    }
  }
}

/** Group the modules into the user-defined tocGrouping, which defines the order
 * of the top-level entries in the ToC.
 *
 * Within each TocGrouping.Section, this function will also sort the modules alphabetically.
 */
function groupAndSortModules(
  tocGrouping: TocGrouping,
  tocModulesByTitle: Map<string, TocEntry>,
): TocEntry[] {
  // First, record every valid section and top-level module.
  const topLevelModuleIds = new Set<string>();
  const sectionsToModules = new Map<string, TocEntry[]>();
  tocGrouping.entries.forEach((entry) => {
    if (entry.kind === "module") {
      topLevelModuleIds.add(entry.moduleId);
    } else {
      sectionsToModules.set(entry.name, []);
    }
  });

  // Go through each module in use and ensure it is either a top-level module
  // or assign it to its section.
  for (const tocModule of tocModulesByTitle.values()) {
    if (topLevelModuleIds.has(tocModule.title)) continue;
    const section = tocGrouping.moduleToSection(tocModule.title);
    if (!section) {
      throw new Error(
        `Unrecognized module '${tocModule.title}'. It must either be listed as a module in TocGrouping.entries or be matched in TocGrouping.moduleToSection().`,
      );
    }
    const sectionModules = sectionsToModules.get(section);
    if (!sectionModules) {
      throw new Error(
        `Unknown section '${section}' set for the module '${tocModule.title}'. This means TocGrouping.moduleToSection() is not aligned with TocGrouping.entries`,
      );
    }
    sectionModules.push(tocModule);
  }

  // Finally, create the ToC by using the ordering from moduleGrouping.entries.
  // Note that moduleGrouping.entries might be a superset of the modules/sections
  // actually in use for the API version, so we sometimes skip adding individual
  // entries to the final result.
  const result: TocEntry[] = [];
  tocGrouping.entries.forEach((entry) => {
    if (entry.kind === "module") {
      const module = tocModulesByTitle.get(entry.moduleId);
      if (!module) return;
      module.title = entry.title;
      result.push(module);
    } else {
      const modules = sectionsToModules.get(entry.name);
      if (!modules || modules.length === 0) return;
      result.push({
        title: entry.name,
        // Within a section, sort alphabetically.
        children: orderEntriesByTitle(modules),
      });
    }
  });
  return result;
}

/** Nest modules so that only top-level modules like qiskit.circuit are at the top
 * and submodules like qiskit.circuit.library are nested.
 *
 * This function sorts alphabetically at every level.
 */
function getNestedTocModulesSorted(
  tocModulesByTitle: Map<string, TocEntry>,
  tocModuleTitles: string[],
): TocEntry[] {
  const nestedTocModules: TocEntry[] = [];
  for (const tocModule of tocModulesByTitle.values()) {
    if (!nestModule(tocModule.title)) {
      nestedTocModules.push(tocModule);
      continue;
    }

    const parentModuleTitle = findClosestParentModules(
      tocModule.title,
      tocModuleTitles,
    );

    if (parentModuleTitle) {
      const parentModule = tocModulesByTitle.get(parentModuleTitle) as TocEntry;
      if (!parentModule.children) parentModule.children = [];
      parentModule.children.push(tocModule);
    } else {
      nestedTocModules.push(tocModule);
    }
  }

  return orderEntriesByTitle(nestedTocModules);
}

/** Sorts all modules and truncates the package name, e.g. `qiskit_ibm_runtime.options` -> `...options`.
 *
 * Returns a flat list of modules without any nesting.
 */
function sortAndTruncateModules(entries: TocEntry[]): TocEntry[] {
  const sorted = orderEntriesByTitle(entries);
  sorted.forEach((entry) => {
    // E.g. qiskit_ibm_runtime.options -> ...options, but ignore
    // qiskit_ibm_runtime without a `.`.
    entry.title = entry.title.replace(/^[^.]+\./, "...");
  });
  return sorted;
}

/**
 * Create a new TocEntry pointing to the index page if is not already there.
 *
 * Certain APIs like Runtime and Provider do not have the index page included,
 * whereas Qiskit SDK already does.
 */
function ensureIndexPage(
  pkg: Pkg,
  tocModules: TocEntry[],
): TocEntry | undefined {
  const docsFolder = pkg.outputDir("/");
  return tocModules.some((entry) => entry.url === docsFolder)
    ? undefined
    : {
        title: "API index",
        url: docsFolder,
      };
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

function generateReleaseNotesEntry(pkg: Pkg): TocEntry | undefined {
  if (!pkg.releaseNotesConfig.enabled) return;
  const releaseNotesUrl = `/api/${pkg.name}/release-notes`;
  const releaseNotesEntry: TocEntry = {
    title: "Release notes",
  };
  if (pkg.hasSeparateReleaseNotes()) {
    releaseNotesEntry.children =
      pkg.releaseNotesConfig.separatePagesVersions.map((vers) => ({
        title: vers,
        url: `${releaseNotesUrl}/${vers}`,
      }));
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
