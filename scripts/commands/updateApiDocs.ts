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

import { join, parse, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { globby } from "globby";
import { uniq, uniqBy } from "lodash";
import { mkdirp } from "mkdirp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import transformLinks from "transform-markdown-links";

import { sphinxHtmlToMarkdown } from "../lib/api/htmlToMd";
import { saveImages } from "../lib/api/saveImages";
import { generateToc } from "../lib/api/generateToc";
import { HtmlToMdResult } from "../lib/api/HtmlToMdResult";
import { mergeClassMembers } from "../lib/api/mergeClassMembers";
import flattenFolders from "../lib/api/flattenFolders";
import { updateLinks } from "../lib/api/updateLinks";
import { specialCaseResults } from "../lib/api/specialCaseResults";
import addFrontMatter from "../lib/api/addFrontMatter";
import { dedupeHtmlIdsFromResults } from "../lib/api/dedupeHtmlIds";
import { removePrefix, removeSuffix } from "../lib/stringUtils";
import { Link, Pkg, PkgInfo, getPkgRoot } from "../lib/api/Pkg";
import { zxMain } from "../lib/zx";
import { pathExists, getRoot, rmFilesInFolder } from "../lib/fs";
import { downloadCIArtifact } from "../lib/api/downloadCIArtifacts";
import {
  findLegacyReleaseNotes,
  addNewReleaseNotes,
  generateReleaseNotesIndex,
  updateHistoricalTocFiles,
  writeSeparateReleaseNotes,
} from "../lib/api/releaseNotes";

interface Arguments {
  [x: string]: unknown;
  package: string;
  version: string;
  historical: boolean;
  artifact: string;
}

function transformLink(link: Link): Link | undefined {
  const updateText = link.url === link.text;
  const prefixes = [
    "https://qiskit.org/documentation/apidoc/",
    "https://qiskit.org/documentation/stubs/",
  ];
  const prefix = prefixes.find((prefix) => link.url.startsWith(prefix));
  if (!prefix) {
    return;
  }
  let [url, anchor] = link.url.split("#");
  url = removePrefix(url, prefix);
  url = removeSuffix(url, ".html");
  if (anchor && anchor !== url) {
    url = `${url}#${anchor}`;
  }
  const newText = updateText ? url : undefined;
  return { url: `/api/qiskit/${url}`, text: newText };
}

const PACKAGES: PkgInfo[] = [
  {
    title: "Qiskit Runtime IBM Client",
    name: "qiskit-ibm-runtime",
    githubSlug: "qiskit/qiskit-ibm-runtime",
    transformLink,
  },
  {
    title: "Qiskit IBM Provider",
    name: "qiskit-ibm-provider",
    githubSlug: "qiskit/qiskit-ibm-provider",
    transformLink,
  },
  {
    title: "Qiskit",
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    hasSeparateReleaseNotes: true,
  },
];

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("package", {
      alias: "p",
      type: "string",
      choices: PACKAGES.map((p) => p.name),
      demandOption: true,
      description: "Which package to update",
    })
    .option("version", {
      alias: "v",
      type: "string",
      demandOption: true,
      description: "The full version string of the --package, e.g. 0.44.0",
    })
    .option("historical", {
      type: "boolean",
      default: false,
      description: "Is this a prior release?",
    })
    .option("artifact", {
      alias: "a",
      type: "string",
      demandOption: true,
      description:
        "The URL for the CI artifact to download. Must be from GitHub Actions.",
    })
    .parseSync();
};

zxMain(async () => {
  const args = readArgs();

  // Determine the minor version, e.g. 0.44.0 -> 0.44
  const versionMatch = args.version.match(/^(\d+\.\d+)/);
  if (versionMatch === null) {
    throw new Error(
      `Invalid --version. Expected the format 0.44.0, but received ${args.version}`,
    );
  }

  const pkgInfo = PACKAGES.find((pkg) => pkg.name === args.package);
  if (pkgInfo === undefined) {
    throw new Error(`Unrecognized package: ${args.package}`);
  }

  const pkg: Pkg = {
    version: args.version,
    versionWithoutPatch: versionMatch[0],
    historical: args.historical,
    releaseNoteEntries: [],
    ...pkgInfo,
  };

  const artifactFolder = `${getRoot()}/.out/python/sources/${pkg.name}/${
    pkg.version
  }`;

  if (await pathExists(artifactFolder)) {
    console.log(`Skip downloading sources for ${pkg.name}:${pkg.version}`);
  } else {
    await downloadCIArtifact(pkg.name, args.artifact, artifactFolder);
  }

  const baseGitHubUrl = `https://github.com/${pkg.githubSlug}/tree/stable/${pkg.versionWithoutPatch}/`;
  const outputDir = getPkgRoot(pkg, `${getRoot()}/docs`);

  if (pkg.historical && !(await pathExists(outputDir))) {
    await mkdirp(outputDir);
  } else {
    console.log(
      `Deleting existing markdown for ${pkg.name}:${pkg.versionWithoutPatch}`,
    );
    await rmFilesInFolder(outputDir);
  }

  pkg.releaseNoteEntries = await findLegacyReleaseNotes(pkg);

  console.log(
    `Convert sphinx html to markdown for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
  await convertHtmlToMarkdown(
    `${artifactFolder}/artifact`,
    outputDir,
    baseGitHubUrl,
    pkg,
  );
});

async function convertHtmlToMarkdown(
  htmlPath: string,
  markdownPath: string,
  baseGitHubUrl: string,
  pkg: Pkg,
) {
  const files = await globby(
    [
      "apidocs/**.html",
      "apidoc/**.html",
      "stubs/**.html",
      "release_notes.html",
    ],
    {
      cwd: htmlPath,
    },
  );

  let results: Array<HtmlToMdResult & { url: string }> = [];
  for (const file of files) {
    const html = await readFile(join(htmlPath, file), "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      baseGitHubUrl,
      imageDestination: getPkgRoot(pkg, "/images"),
      releaseNotesTitle: `${pkg.title} ${pkg.versionWithoutPatch} release notes`,
    });

    // Avoid creating an empty markdown file for HTML files without content
    // (e.g. HTML redirects)
    if (result.markdown == "") {
      continue;
    }

    const { dir, name } = parse(`${markdownPath}/${file}`);
    let url = `/${relative(`${getRoot()}/docs`, dir)}/${name}`;
    results.push({ ...result, url });

    if (
      !pkg.historical &&
      pkg.hasSeparateReleaseNotes &&
      file.endsWith("release_notes.html")
    ) {
      addNewReleaseNotes(pkg);
    }
  }

  const allImages = uniqBy(
    results.flatMap((result) => result.images),
    (image) => image.fileName,
  );

  const dirsNeeded = uniq(
    results.map((result) => parse(urlToPath(result.url)).dir),
  );
  for (const dir of dirsNeeded) {
    await mkdirp(dir);
  }

  results = await mergeClassMembers(results);
  flattenFolders(results);
  specialCaseResults(results);
  await updateLinks(results, pkg.transformLink);
  await dedupeHtmlIdsFromResults(results);
  addFrontMatter(results, pkg);

  for (const result of results) {
    let path = urlToPath(result.url);

    // Historical versions with a single release notes file should not
    // modify the current API's file.
    if (
      !pkg.hasSeparateReleaseNotes &&
      pkg.historical &&
      path.endsWith("release-notes.md")
    ) {
      continue;
    }

    if (pkg.hasSeparateReleaseNotes && path.endsWith("release-notes.md")) {
      // Convert the relative links to absolute links
      result.markdown = transformLinks(result.markdown, (link, _) =>
        link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
          ? link
          : `/api/${pkg.name}/${link}`,
      );

      await writeSeparateReleaseNotes(pkg, result.markdown);
      continue;
    }

    await writeFile(path, result.markdown);
  }

  console.log("Generating toc");
  const toc = generateToc(pkg, results);
  await writeFile(
    `${markdownPath}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );

  // Add the new release entry to the _toc.json for all Qiskit historical API versions.
  // We don't need to add any entries in other projects, given that the release notes files
  // are stable.
  if (!pkg.historical && pkg.name == "qiskit") {
    await updateHistoricalTocFiles(pkg);
  }

  if (!pkg.historical && pkg.hasSeparateReleaseNotes) {
    console.log("Generating release-notes/index");
    const markdown = generateReleaseNotesIndex(pkg);
    await writeFile(`${markdownPath}/release-notes/index.md`, markdown);
  }

  console.log("Generating version file");
  const pkg_json = { name: pkg.name, version: pkg.version };
  await writeFile(
    `${markdownPath}/_package.json`,
    JSON.stringify(pkg_json, null, 2) + "\n",
  );

  console.log("Saving images");
  await saveImages(allImages, `${htmlPath}/_images`, pkg);
}

function urlToPath(url: string) {
  return `${getRoot()}/docs${url}.md`;
}
