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

import { $ } from "zx";
import { zxMain } from "../lib/zx";
import { pathExists, getRoot } from "../lib/fs";
import { readFile, writeFile, readdir } from "fs/promises";
import { globby } from "globby";
import { join, parse, relative } from "path";
import { sphinxHtmlToMarkdown } from "../lib/sphinx/sphinxHtmlToMarkdown";
import { uniq, uniqBy } from "lodash";
import { mkdirp } from "mkdirp";
import { WebCrawler } from "../lib/WebCrawler";
import { downloadImages } from "../lib/downloadImages";
import { generateToc } from "../lib/sphinx/generateToc";
import { SphinxToMdResult } from "../lib/sphinx/SphinxToMdResult";
import { mergeClassMembers } from "../lib/sphinx/mergeClassMembers";
import { flatFolders } from "../lib/sphinx/flatFolders";
import { updateLinks } from "../lib/sphinx/updateLinks";
import { renameUrls } from "../lib/sphinx/renameUrls";
import { addFrontMatter } from "../lib/sphinx/addFrontMatter";
import { dedupeResultIds } from "../lib/sphinx/dedupeIds";
import { removePrefix, removeSuffix } from "../lib/stringUtils";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { Pkg, PkgInfo, Link } from "../lib/sharedTypes";
import transformLinks from "transform-markdown-links";
import { downloadCIArtifact } from "../lib/downloadArtifacts";
import { startWebServer, closeWebServer } from "../lib/webServer";
import {
  findLegacyReleaseNotes,
  addNewReleaseNotes,
  currentReleaseNotesPath,
  generateReleaseNotesIndex,
  updateHistoricalTocFiles,
} from "../lib/releaseNotes";

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
    initialUrl: `/apidocs/ibm-runtime.html`,
    transformLink,
  },
  {
    title: "Qiskit IBM Provider",
    name: "qiskit-ibm-provider",
    githubSlug: "qiskit/qiskit-ibm-provider",
    initialUrl: `/apidocs/ibm-provider.html`,
    transformLink,
  },
  {
    title: "Qiskit",
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    initialUrl: `/apidoc/index.html`,
    hasSeparateReleaseNotes: true,
    tocOptions: {
      collapsed: true,
      nestModule(id: string) {
        return id.split(".").length > 2;
      },
    },
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
      description: "Is this a prior release? Only works with `-p qiskit`.",
    })
    .option("artifact", {
      alias: "a",
      type: "string",
      demandOption: true,
      description: "Which artifact from CI to download",
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
    baseUrl: `http://localhost:8000`,
    ...pkgInfo,
  };

  pkg.initialUrl = pkg.baseUrl + pkg.initialUrl;

  if (pkg.historical && pkg.name == "qiskit") {
    const htmlFile =
      +pkg.versionWithoutPatch >= 0.44 ? "index.html" : "terra.html";
    pkg.initialUrl = `${pkg.baseUrl}/apidoc/${htmlFile}`;
  }

  const artifactUrl = args.artifact;
  const destination = `${getRoot()}/.out/python/sources/${pkg.name}/${
    pkg.version
  }`;
  const localWebServerDir = `${destination}/artifact`;
  const listenPort = 8000;
  startWebServer(localWebServerDir, listenPort);

  if (await pathExists(destination)) {
    console.log(`Skip downloading sources for ${pkg.name}:${pkg.version}`);
  } else {
    await downloadApiSources(pkg, artifactUrl, destination, listenPort);
  }

  const baseSourceUrl = `https://github.com/${pkg.githubSlug}/tree/${pkg.versionWithoutPatch}/`;
  const outputDir = pkg.historical
    ? `${getRoot()}/docs/api/${pkg.name}/${pkg.versionWithoutPatch}`
    : `${getRoot()}/docs/api/${pkg.name}`;

  if (pkg.historical && !(await pathExists(outputDir))) {
    mkdirp(outputDir);
  } else {
    await rmFilesInFolder(outputDir, `${pkg.name}:${pkg.versionWithoutPatch}`);
  }

  pkg.releaseNoteEntries = await findLegacyReleaseNotes(pkg);

  console.log(
    `Convert sphinx html to markdown for ${pkg.name}:${pkg.versionWithoutPatch}`,
  );
  await convertHtmlToMarkdown(destination, outputDir, baseSourceUrl, pkg);
  await closeWebServer(listenPort);
});

/**
 * Deletes all the files in the folder, but preserves subfolders. That's important
 * to avoid accidentally deleting other historical versions of the API.
 *
 * We delete files when regenerating API docs to capture when APIs have been deleted.
 */
async function rmFilesInFolder(
  dir: string,
  description: string,
): Promise<void> {
  console.log(`Deleting existing markdown for ${description}`);
  await $`find ${dir}/* -maxdepth 0 -type f | xargs rm -f {}`;
}

async function saveHtml(options: {
  baseUrl: string;
  initialUrl: string;
  destination: string;
}): Promise<void> {
  const { baseUrl, destination, initialUrl } = options;
  let successCount = 0;
  let errorCount = 0;
  const crawler = new WebCrawler({
    initialUrl: initialUrl,
    followUrl(url) {
      return (
        url.startsWith(`${baseUrl}/apidocs`) ||
        url.startsWith(`${baseUrl}/apidoc`) ||
        url.startsWith(`${baseUrl}/stubs`) ||
        url.startsWith(`${baseUrl}/release_notes`)
      );
    },
    async onSuccess(url: string, content: string) {
      successCount++;
      const relativePath = url.substring(`${baseUrl}/`.length);
      const destinationPath = `${destination}/${relativePath}`;
      const { dir } = parse(destinationPath);
      await mkdirp(dir); // TODO track the folders already created
      await writeFile(destinationPath, content);
    },
    async onError(url: string, error: unknown) {
      errorCount++;
      console.error(`Error ${url}`, error);
    },
  });
  await crawler.run();
  console.log(`Download summary from ${baseUrl}`, {
    success: successCount,
    error: errorCount,
  });
}

async function convertHtmlToMarkdown(
  htmlPath: string,
  markdownPath: string,
  baseSourceUrl: string,
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

  const ignore = pkg.ignore ?? (() => false);

  let results: Array<SphinxToMdResult & { url: string }> = [];
  for (const file of files) {
    const html = await readFile(join(htmlPath, file), "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      url: `${pkg.baseUrl}/${file}`,
      baseSourceUrl,
      imageDestination: pkg.historical
        ? `/images/api/${pkg.name}/${pkg.versionWithoutPatch}`
        : `/images/api/${pkg.name}`,
      releaseNotesTitle: `${pkg.title} ${pkg.versionWithoutPatch} release notes`,
    });

    const { dir, name } = parse(`${markdownPath}/${file}`);
    let url = `/${relative(`${getRoot()}/docs`, dir)}/${name}`;

    if (!result.meta.python_api_name || !ignore(result.meta.python_api_name)) {
      results.push({ ...result, url });
    }
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
    (image) => image.src,
  );

  const dirsNeeded = uniq(
    results.map((result) => parse(urlToPath(result.url)).dir),
  );
  for (const dir of dirsNeeded) {
    await mkdirp(dir);
  }

  results = await mergeClassMembers(results);
  flatFolders(results);
  renameUrls(results);
  await updateLinks(results, pkg.transformLink);
  await dedupeResultIds(results);
  addFrontMatter(results, pkg);

  for (const result of results) {
    let path = urlToPath(result.url);
    if (pkg.hasSeparateReleaseNotes && path.endsWith("release-notes.md")) {
      const projectFolder = pkg.historical
        ? `${pkg.name}/${pkg.versionWithoutPatch}`
        : `${pkg.name}`;

      // Convert the relative links to absolute links
      result.markdown = transformLinks(result.markdown, (link, _) =>
        link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
          ? link
          : `/api/${projectFolder}/${link}`,
      );

      path = currentReleaseNotesPath(pkg);
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

  console.log("Downloading images");
  await downloadImages(
    allImages.map((img) => ({
      src: img.src,
      dest: `${getRoot()}/public${img.dest}`,
    })),
  );
}

function urlToPath(url: string) {
  return `${getRoot()}/docs${url}.md`;
}

/**
 * Uses a local web server to download the HTML files from a specific CI artifact
 */
async function downloadApiSources(
  pkg: Pkg,
  artifactUrl: string,
  destination: string,
  listenPort: number,
) {
  try {
    await downloadCIArtifact(pkg.name, artifactUrl, destination);
    await saveHtml({
      baseUrl: pkg.baseUrl,
      initialUrl: pkg.initialUrl,
      destination,
    });
  } catch (e) {
    await closeWebServer(listenPort);
    throw e;
  }
}
