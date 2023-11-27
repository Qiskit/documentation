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
import { readFile, writeFile } from "fs/promises";
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
import { Pkg, Link } from "../lib/sharedTypes";
import transformLinks from "transform-markdown-links";

interface Arguments {
  [x: string]: unknown;
  package: string;
  version: string;
  historical: boolean;
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

const PACKAGES: Pkg[] = [
  {
    title: "Qiskit Runtime IBM Client",
    name: "qiskit-ibm-runtime",
    githubSlug: "qiskit/qiskit-ibm-runtime",
    baseUrl: `https://qiskit.org/ecosystem/ibm-runtime`,
    initialUrls: [
      `https://qiskit.org/ecosystem/ibm-runtime/apidocs/ibm-runtime.html`,
    ],
    transformLink,
  },
  {
    title: "Qiskit IBM Provider",
    name: "qiskit-ibm-provider",
    githubSlug: "qiskit/qiskit-ibm-provider",
    baseUrl: `https://qiskit.org/ecosystem/ibm-provider`,
    initialUrls: [
      `https://qiskit.org/ecosystem/ibm-provider/apidocs/ibm-provider.html`,
    ],
    transformLink,
  },
  {
    title: "Qiskit",
    name: "qiskit",
    githubSlug: "qiskit/qiskit",
    baseUrl: `https://qiskit.org/documentation`,
    initialUrls: [`https://qiskit.org/documentation/apidoc/index.html`],
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
    .parseSync();
};

/**
 * Check for markdown files in `docs/api/package-name/release-notes/
 * then sort them and create entries for the TOC.
 */
const processLegacyReleaseNotes = async (
  pkg: Pkg,
  versionWithoutPatch: string,
  historical: boolean,
): Promise<{ title: string; url: string }[]> => {
  if (!pkg.hasSeparateReleaseNotes) {
    return [];
  }
  const legacyReleaseNoteVersions = (
    await $`ls ${getRoot()}/docs/api/${pkg.name}/release-notes`.quiet()
  ).stdout
    .trim()
    .split("\n")
    .map((x) => parse(x).name)
    .filter((x) => x.match(/^\d/)) // remove index
    .sort((a: string, b: string) => {
      const aParts = a.split(".").map((x) => Number(x));
      const bParts = b.split(".").map((x) => Number(x));
      for (let i = 0; i < 2; i++) {
        if (aParts[i] > bParts[i]) {
          return 1;
        }
        if (aParts[i] < bParts[i]) {
          return -1;
        }
      }
      return 0;
    })
    .reverse();

  const legacyReleaseNoteEntries = [];
  for (let version of legacyReleaseNoteVersions) {
    legacyReleaseNoteEntries.push({
      title: version,
      url: historical
        ? `/api/${pkg.name}/${versionWithoutPatch}/release-notes/${version}`
        : `/api/${pkg.name}/release-notes/${version}`,
    });
  }
  return legacyReleaseNoteEntries;
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
  const versionWithoutPatch = versionMatch[0];

  const pkg = PACKAGES.find((pkg) => pkg.name === args.package);
  if (pkg === undefined) {
    throw new Error(`Unrecognized package: ${args.package}`);
  }

  if (args.historical) {
    if (pkg.name !== "qiskit") {
      throw new Error("`--historical` can only be used with `-p qiskit`");
    }
    pkg.baseUrl = `https://qiskit.org/documentation/stable/${versionWithoutPatch}`;
    const htmlFile = +versionWithoutPatch >= 0.44 ? "index.html" : "terra.html";
    pkg.initialUrls = [`${pkg.baseUrl}/apidoc/${htmlFile}`];
  }

  const destination = `${getRoot()}/.out/python/sources/${pkg.name}/${
    args.version
  }`;
  if (await pathExists(destination)) {
    console.log(`Skip downloading sources for ${pkg.name}:${args.version}`);
  } else {
    await downloadHtml({
      baseUrl: pkg.baseUrl,
      initialUrls: pkg.initialUrls,
      destination,
    });
  }

  const baseSourceUrl = `https://github.com/${pkg.githubSlug}/tree/${versionWithoutPatch}/`;
  const outputDir = args.historical
    ? `${getRoot()}/docs/api/${pkg.name}/${versionWithoutPatch}`
    : `${getRoot()}/docs/api/${pkg.name}`;

  const legacyReleaseNoteEntries = await processLegacyReleaseNotes(
    pkg,
    versionWithoutPatch,
    args.historical,
  );

  await rmFilesInFolder(outputDir, `${pkg.name}:${versionWithoutPatch}`);

  console.log(
    `Convert sphinx html to markdown for ${pkg.name}:${versionWithoutPatch}`,
  );
  await convertHtmlToMarkdown(
    destination,
    outputDir,
    baseSourceUrl,
    pkg,
    args.version,
    legacyReleaseNoteEntries,
    versionWithoutPatch,
    args.historical,
  );
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

async function downloadHtml(options: {
  baseUrl: string;
  initialUrls: string[];
  destination: string;
}): Promise<void> {
  const { baseUrl, destination, initialUrls } = options;
  let successCount = 0;
  let errorCount = 0;
  const crawler = new WebCrawler({
    initialUrls: initialUrls,
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
  version: string,
  releaseNoteEntries: { title: string; url: string }[],
  versionWithoutPatch: string,
  historical: boolean,
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
      imageDestination: historical
        ? `/images/api/${pkg.name}/${versionWithoutPatch}`
        : `/images/api/${pkg.name}`,
      releaseNotesTitle: `${pkg.title} ${versionWithoutPatch} release notes`,
    });

    const { dir, name } = parse(`${markdownPath}/${file}`);
    let url = `/${relative(`${getRoot()}/docs`, dir)}/${name}`;

    if (!result.meta.python_api_name || !ignore(result.meta.python_api_name)) {
      results.push({ ...result, url });
    }
    if (pkg.hasSeparateReleaseNotes && file.endsWith("release_notes.html")) {
      if (releaseNoteEntries[0].title !== versionWithoutPatch) {
        releaseNoteEntries.unshift({
          title: versionWithoutPatch,
          url: historical
            ? `/api/${pkg.name}/${versionWithoutPatch}/release-notes/${versionWithoutPatch}`
            : `/api/${pkg.name}/release-notes/${versionWithoutPatch}`,
        });
      }
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
  addFrontMatter(results, pkg, versionWithoutPatch);

  for (const result of results) {
    let path = urlToPath(result.url);
    if (pkg.hasSeparateReleaseNotes && path.endsWith("release-notes.md")) {
      const projectFolder = historical
        ? `${pkg.name}/${versionWithoutPatch}`
        : `${pkg.name}`;

      // Convert the relative links to absolute links
      result.markdown = transformLinks(result.markdown, (link, _) =>
        link.startsWith("http") || link.startsWith("#") || link.startsWith("/")
          ? link
          : `/api/${projectFolder}/${link}`,
      );

      path = `${getRoot()}/docs/api/${projectFolder}/release-notes/${versionWithoutPatch}.md`;
    }
    await writeFile(path, result.markdown);
  }

  console.log("Generating toc");
  const toc = generateToc({
    pkg: {
      title: pkg.title,
      name: pkg.name,
      version,
      releaseNoteEntries,
      releaseNotesUrl: historical
        ? `/api/${pkg.name}/${versionWithoutPatch}/release-notes`
        : `/api/${pkg.name}/release-notes`,
      tocOptions: pkg.tocOptions,
    },
    results,
  });
  await writeFile(
    `${markdownPath}/_toc.json`,
    JSON.stringify(toc, null, 2) + "\n",
  );

  if (pkg.hasSeparateReleaseNotes) {
    console.log("Generating release-notes/index");
    let markdown = "---\n";
    markdown += `title: ${pkg.title} release notes\n`;
    markdown += `description: New features, bug fixes, and other changes in previous versions of ${pkg.title}.\n`;
    markdown += "---\n\n";
    markdown += `# ${pkg.title} release notes\n\n`;
    markdown += `New features, bug fixes, and other changes in previous versions of ${pkg.title}.\n\n`;
    markdown += `## Release notes by version\n\n`;
    for (const entry of releaseNoteEntries) {
      markdown += `* [${entry.title}](${entry.url})\n`;
    }
    await writeFile(`${markdownPath}/release-notes/index.md`, markdown);
  }

  if (historical) {
    copyReleaseNotes(pkg.name, markdownPath);
  }

  console.log("Generating version file");
  const pkg_json = { name: pkg.name, version: versionWithoutPatch };
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

async function copyReleaseNotes(
  projectName: string,
  pathHistoricalFolder: string,
) {
  await $`find ${pathHistoricalFolder}/release-notes/* -not -path "*index.md" | xargs rm -rf {}`;
  await $`find docs/api/${projectName}/release-notes/* -not -path "*index.md" | xargs -I {} cp -a {} ${pathHistoricalFolder}/release-notes/`;
}
