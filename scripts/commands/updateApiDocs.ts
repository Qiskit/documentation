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

// To run the script, first generate an access token in GitHub. Click on your profile, then "Settings",
// then "Developer settings" at the bottom. Go to "Personal access tokens" and generate a new "classic"
// token. These classic tokens can be dangerous because they are so permissive, so set a short expiration
// timeline and be careful to not share the token.
//
// Once you have a token generated, run:
//
//   PUBLIC_GITHUB_TOKEN=ghp_... node -r esbuild-register scripts/commands/updateApiDocs.ts

import { $ } from 'zx';
import { zxMain } from '../lib/zx';
import { getRequiredEnv } from '../lib/env';
import { GithubApiClient } from '../lib/GithubApiClient';
import { pathExists, getRoot } from '../lib/fs';
import { readFile, writeFile } from 'fs/promises';
import { globby } from 'globby';
import { join, parse, relative } from 'path';
import { sphinxHtmlToMarkdown } from '../lib/sphinx/sphinxHtmlToMarkdown';
import { first, last, uniq, uniqBy } from 'lodash';
import { mkdirp } from 'mkdirp';
import { WebCrawler } from '../lib/WebCrawler';
import { downloadImages } from '../lib/downloadImages';
import { generateToc } from '../lib/sphinx/generateToc';
import { SphinxToMdResult } from '../lib/sphinx/SphinxToMdResult';
import { mergeClassMembers } from '../lib/sphinx/mergeClassMembers';
import { flatFolders } from '../lib/sphinx/flatFolders';
import { updateLinks } from '../lib/sphinx/updateLinks';
import { addFrontMatter } from '../lib/sphinx/addFrontMatter';
import { dedupeResultIds } from '../lib/sphinx/dedupeIds';
import { removePrefix, removeSuffix } from '../lib/stringUtils';

type Pkg = {
  name: string;
  githubSlug: string;
  baseUrl: string;
  initialUrls: string[];
  title: string;
  ignore?(id: string): boolean;
  tocOptions?: {
    collapsed?: boolean;
    nestModule?(id: string): boolean;
  };
  transformLink?: (url: string, text?: string) => { url: string; text?: string } | undefined;
};

type PkgHtml = { pkg: Pkg; version: string; path: string };

const packages: Pkg[] = [
  {
    title: 'Qiskit Runtime IBM Client',
    name: 'qiskit-ibm-runtime',
    githubSlug: 'qiskit/qiskit-ibm-runtime',
    baseUrl: `https://qiskit.org/ecosystem/ibm-runtime`,
    initialUrls: [
      `https://qiskit.org/ecosystem/ibm-runtime/apidocs/ibm-runtime.html`,
    ],
    transformLink(url, text) {
      const prefixes = [
        'https://qiskit.org/documentation/apidoc/',
        'https://qiskit.org/documentation/stubs/',
      ];
      let updateText = url === text;
      const prefix = prefixes.find((prefix) => url.startsWith(prefix));
      if (prefix) {
        url = removePrefix(url, prefix);
        url = removeSuffix(url, '.html');
        const newText = updateText ? url : undefined;
        return { url: `/api/qiskit/${url}`, text: newText };
      }
    },
  },
  {
    title: 'Qiskit IBM Provider',
    name: 'qiskit-ibm-provider',
    githubSlug: 'qiskit/qiskit-ibm-provider',
    baseUrl: `https://qiskit.org/ecosystem/ibm-provider`,
    initialUrls: [`https://qiskit.org/ecosystem/ibm-provider/apidocs/ibm-provider.html`],
    transformLink(url, text) {
      const prefixes = [
        'https://qiskit.org/documentation/apidoc/',
        'https://qiskit.org/documentation/stubs/',
      ];
      let updateText = url === text;
      const prefix = prefixes.find((prefix) => url.startsWith(prefix));
      if (prefix) {
        url = removePrefix(url, prefix);
        url = removeSuffix(url, '.html');
        const newText = updateText ? url : undefined;
        return { url: `/api/qiskit/${url}`, text: newText };
      }
    },
  },
  {
    title: 'Qiskit',
    name: 'qiskit',
    githubSlug: 'qiskit/qiskit',
    baseUrl: `https://qiskit.org/documentation`,
    initialUrls: [`https://qiskit.org/documentation/apidoc/index.html`],
    ignore(id: string): boolean {
      return id.startsWith('qiskit.opflow') || id.startsWith('qiskit.algorithms');
    },
    tocOptions: {
      collapsed: true,
      nestModule(id: string) {
        return id.split('.').length > 2;
      },
    },
    transformLink(url) {
      // Transform links from ignored modules
      let path = last(url.split('/'))!;
      if (path.includes('#')) {
        path = path.split('#').join('.html#');
      } else {
        path += '.html';
      }

      if (path?.startsWith('algorithms') || path?.startsWith('opflow')) {
        return { url: `http://qiskit.org/documentation/apidoc/${path}` };
      }
      if (path?.startsWith('qiskit.algorithms.') || path?.startsWith('qiskit.opflow.')) {
        return { url: `http://qiskit.org/documentation/stubs/${path}` };
      }
    },
  },
];

zxMain(async () => {
  const sourcesPath = `${getRoot()}/.out/python/sources`;

  const pkgHtmls: PkgHtml[] = [];

  for (const pkg of packages) {
    const version = await getLatestVersion(pkg.githubSlug);
    const destination = `${sourcesPath}/${pkg.name}/${version}`;
    pkgHtmls.push({ pkg, version, path: destination });

    if (await pathExists(destination)) {
      console.log(`Skip downloading sources for ${pkg.name}:${version}`);
      continue;
    }

    await downloadHtml({ baseUrl: pkg.baseUrl, initialUrls: pkg.initialUrls, destination });
  }

  // Sphinx html to markdown
  console.log('Deleting existing markdowns');
  await $`rm -rf ${getRoot()}/docs/api/`;

  for (const src of pkgHtmls) {
    console.log(`Convert sphinx html to markdown for ${src.pkg.name}:${src.version}`);

    const htmlBase = src.path;
    const output = `${getRoot()}/docs/api/${src.pkg.name}`;
    const baseSourceUrl = `https://github.com/${src.pkg.githubSlug}/tree/${src.version}/`;

    // Convert html to markdown
    await convertHtmlToMarkdown(htmlBase, output, baseSourceUrl, src);
  }
});

async function getLatestVersion(githubSlug: string): Promise<string> {
  const githubToken = getRequiredEnv(`PUBLIC_GITHUB_TOKEN`);
  const github = new GithubApiClient({ token: githubToken });

  const releases = await github.getReleases({ slug: githubSlug });

  const latestVersion = first(releases)?.tag_name;
  if (!latestVersion) throw new Error('Cannot fetch latest version');

  return latestVersion;
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
        url.startsWith(`${baseUrl}/stubs`)
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
  console.log(`Download summary from ${baseUrl}`, { success: successCount, error: errorCount });
}

async function convertHtmlToMarkdown(
  htmlPath: string,
  markdownPath: string,
  baseSourceUrl: string,
  pkg: PkgHtml
) {
  const files = await globby(['apidocs/**.html', 'apidoc/**.html', 'stubs/**.html'], {
    cwd: htmlPath,
  });

  const ignore = pkg.pkg.ignore ?? (() => false);

  let results: Array<SphinxToMdResult & { url: string }> = [];
  for (const file of files) {
    const html = await readFile(join(htmlPath, file), 'utf-8');
    const result = await sphinxHtmlToMarkdown({
      html,
      url: `${pkg.pkg.baseUrl}/${file}`,
      baseSourceUrl,
      imageDestination: `/images/api/${pkg.pkg.name}`,
    });
    const { dir, name } = parse(`${markdownPath}/${file}`);
    let url = `/${relative(`${getRoot()}/docs`, dir)}/${name}`;

    if (!result.meta.python_api_name || !ignore(result.meta.python_api_name)) {
      results.push({ ...result, url });
    }
  }

  const allImages = uniqBy(
    results.flatMap((result) => result.images),
    (image) => image.src
  );

  const dirsNeeded = uniq(results.map((result) => parse(urlToPath(result.url)).dir));
  for (const dir of dirsNeeded) {
    await mkdirp(dir);
  }

  results = await mergeClassMembers(results);
  results = flatFolders(results);
  results = await updateLinks(results, pkg.pkg.transformLink);
  results = await dedupeResultIds(results);
  results = addFrontMatter(results);

  for (const result of results) {
    await writeFile(urlToPath(result.url), result.markdown);
  }

  console.log('Generating toc');
  const toc = generateToc({
    pkg: {
      title: pkg.pkg.title,
      name: pkg.pkg.name,
      version: pkg.version,
      changelogUrl: `https://github.com/${pkg.pkg.githubSlug}/releases`,
      tocOptions: pkg.pkg.tocOptions,
    },
    results,
  });
  await writeFile(`${markdownPath}/_toc.json`, JSON.stringify(toc, null, 2) + '\n');

  console.log('Downloading images');
  await downloadImages(
    allImages.map((img) => ({ src: img.src, dest: `${getRoot()}/public${img.dest}` }))
  );
}

function urlToPath(url: string) {
  return `${getRoot()}/docs${url}.md`;
}
