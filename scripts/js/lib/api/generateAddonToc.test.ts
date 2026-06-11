// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import os from "os";
import path from "path";
import { mkdtemp, mkdir, writeFile } from "fs/promises";

import { expect, test } from "@playwright/test";

import { generateAddonToc } from "./generateAddonToc.js";
import { Pkg, ReleaseNotesConfig } from "./Pkg.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function makePkg(name = "my-addon", githubSlug?: string): Promise<Pkg> {
  return new Pkg({
    name,
    title: "My Addon",
    githubSlug,
    version: "1.2.0",
    versionWithoutPatch: "1.2",
    type: "latest",
    language: "Python",
    releaseNotesConfig: new ReleaseNotesConfig({ enabled: false }),
    kebabCaseAndShortenUrls: true,
  });
}

/**
 * Builds a minimal Sphinx-style index.html with a sidebar tree.
 *
 * mainItems: top-level items in the primary <ul class="current"> toctree.
 *   Each item can be:
 *   - a string href (top-level page link)
 *   - { href, title } (top-level page with custom title)
 *   - { href, title, external: true } (external link)
 *   - { href, title, children: [{ href, title }] } (section with sub-pages)
 *
 * captionedSections: optional captioned toctree groups appended after the main list.
 *   Each is { caption: string; items: NavItem[] }.
 */
type NavChild = { href: string; title: string };
type NavItem =
  | string
  | { href: string; title?: string; external?: boolean; children?: NavChild[] };
type CaptionedSection = { caption: string; items: NavItem[] };

function makeNavLi(item: NavItem): string {
  if (typeof item === "string") {
    const title = item.replace(/\.html$/, "").replace(/[-_]/g, " ");
    return `<li class="toctree-l1"><a class="reference internal" href="${item}">${title}</a></li>`;
  }
  const { href, title = href.replace(/\.html$/, ""), external, children } = item;
  const cls = external ? "reference external" : "reference internal";
  if (children && children.length > 0) {
    const l2s = children
      .map(
        (c) =>
          `<li class="toctree-l2"><a class="reference internal" href="${c.href}">${c.title}</a></li>`,
      )
      .join("\n          ");
    return `<li class="toctree-l1 has-children"><a class="${cls}" href="${href}">${title}</a>
        <ul>${l2s}</ul>
      </li>`;
  }
  return `<li class="toctree-l1"><a class="${cls}" href="${href}">${title}</a></li>`;
}

function makeIndexHtml(
  mainItems: NavItem[],
  captionedSections: CaptionedSection[] = [],
): string {
  const mainLis = mainItems.map(makeNavLi).join("\n    ");
  const captionBlocks = captionedSections
    .map(({ caption, items }) => {
      const lis = items.map(makeNavLi).join("\n    ");
      return `<p class="caption" role="heading"><span class="caption-text">${caption}</span></p>
<ul>
    ${lis}
</ul>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html>
<body>
<div class="sidebar-tree">
  <ul class="current">
    ${mainLis}
  </ul>
  ${captionBlocks}
</div>
</body>
</html>`;
}

/** Creates a temp artifact directory with an index.html. */
async function makeTestDirs(
  mainItems: NavItem[],
  captionedSections: CaptionedSection[] = [],
): Promise<{ artifactDir: string }> {
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "addon-toc-test-"));
  const artifactDir = path.join(tmpDir, "artifact");
  await mkdir(artifactDir, { recursive: true });
  await writeFile(
    path.join(artifactDir, "index.html"),
    makeIndexHtml(mainItems, captionedSections),
    "utf-8",
  );
  return { artifactDir };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

test("minimal addon: only index and install, no captioned sections", async () => {
  const { artifactDir } = await makeTestDirs([
    { href: "#", title: "My Addon" },
    { href: "install.html", title: "Installation" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);

  expect(toc).toEqual({
    parentUrl: "/docs/guides/addons",
    parentLabel: "Documentation",
    title: "My Addon 1.2.0",
    collapsed: true,
    children: [
      {
        title: "",
        collapsible: false,
        children: [
          { title: "My Addon", url: "/docs/addons/my-addon" },
          { title: "Installation", url: "/docs/addons/my-addon/install" },
        ],
      },
    ],
  });
});

test("full shape with Tutorials and API reference captions", async () => {
  const { artifactDir } = await makeTestDirs(
    [
      { href: "#", title: "My Addon" },
      { href: "install.html", title: "Installation" },
      { href: "https://github.com/Qiskit/my-addon", title: "GitHub", external: true },
    ],
    [
      {
        caption: "Tutorials",
        items: [
          { href: "https://quantum.cloud.ibm.com/docs/en/tutorials/my-tutorial", title: "My tutorial", external: true },
        ],
      },
      {
        caption: "API reference",
        items: [
          { href: "https://quantum.cloud.ibm.com/docs/en/api/my-addon", title: "Python API reference", external: true },
          { href: "release-notes.html", title: "Release notes" },
        ],
      },
    ],
  );

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);

  expect(toc).toEqual({
    parentUrl: "/docs/guides/addons",
    parentLabel: "Documentation",
    title: "My Addon 1.2.0",
    collapsed: true,
    children: [
      {
        title: "",
        collapsible: false,
        children: [
          { title: "My Addon", url: "/docs/addons/my-addon" },
          { title: "Installation", url: "/docs/addons/my-addon/install" },
          { title: "GitHub", url: "https://github.com/Qiskit/my-addon" },
        ],
      },
      {
        title: "Tutorials",
        collapsible: false,
        children: [
          { title: "My tutorial", url: "https://quantum.cloud.ibm.com/docs/en/tutorials/my-tutorial" },
        ],
      },
      {
        title: "API reference",
        collapsible: false,
        children: [
          { title: "Python API reference", url: "https://quantum.cloud.ibm.com/docs/en/api/my-addon" },
        ],
      },
    ],
  });
});

test("API reference caption: external links pass through unchanged", async () => {
  const { artifactDir } = await makeTestDirs(
    [{ href: "#", title: "Home" }],
    [
      {
        caption: "API reference",
        items: [
          { href: "https://example.com/api/my-addon", title: "Python API reference", external: true },
        ],
      },
    ],
  );

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const apiSection = toc.children.find((c) => c.title === "API reference");

  expect(apiSection?.children?.[0]).toEqual({
    title: "Python API reference",
    url: "https://example.com/api/my-addon",
  });
});

test("release notes entry is always omitted", async () => {
  const { artifactDir } = await makeTestDirs(
    [{ href: "#", title: "Home" }],
    [
      {
        caption: "API reference",
        items: [
          { href: "https://example.com/api/my-addon", title: "Python API reference", external: true },
          { href: "release-notes.html", title: "Release notes" },
        ],
      },
    ],
  );

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const apiSection = toc.children.find((c) => c.title === "API reference");

  expect(apiSection?.children).toHaveLength(1);
  expect(apiSection?.children?.[0].url).toBe("https://example.com/api/my-addon");
});

test("sidebar order is preserved exactly", async () => {
  const { artifactDir } = await makeTestDirs([
    { href: "#", title: "Home" },
    { href: "install.html", title: "Install" },
    { href: "changelog.html", title: "Changelog" },
    { href: "faq.html", title: "FAQ" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const main = toc.children[0];

  expect(main.children?.map((c) => c.title)).toEqual([
    "Home",
    "Install",
    "Changelog",
    "FAQ",
  ]);
});

test("subdirectory section preserves l2 children order from sidebar", async () => {
  const { artifactDir } = await makeTestDirs([
    { href: "#", title: "Home" },
    {
      href: "how_tos/index.html",
      title: "Guides",
      children: [
        { href: "how_tos/beta.html", title: "Beta guide" },
        { href: "how_tos/alpha.html", title: "Alpha guide" },
        { href: "how_tos/gamma.html", title: "Gamma guide" },
      ],
    },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.map((c) => c.title)).toEqual([
    "Beta guide",
    "Alpha guide",
    "Gamma guide",
  ]);
});

test("subdirectory section has correct child URLs", async () => {
  const { artifactDir } = await makeTestDirs([
    { href: "#", title: "Home" },
    {
      href: "how_tos/index.html",
      title: "Guides",
      children: [{ href: "how_tos/my_guide.html", title: "My Guide" }],
    },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.[0].url).toBe(
    "/docs/addons/my-addon/how_tos/my-guide",
  );
});

test("external link in main section is passed through unchanged", async () => {
  const { artifactDir } = await makeTestDirs([
    { href: "#", title: "Home" },
    { href: "https://github.com/Qiskit/my-addon", title: "GitHub", external: true },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const main = toc.children[0];

  expect(main.children?.at(-1)).toEqual({
    title: "GitHub",
    url: "https://github.com/Qiskit/my-addon",
  });
});

test("href='#' maps to package root URL", async () => {
  const { artifactDir } = await makeTestDirs([
    { href: "#", title: "Home" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const main = toc.children[0];

  expect(main.children?.[0].url).toBe("/docs/addons/my-addon");
});

test("captioned sections appear after the main section in order", async () => {
  const { artifactDir } = await makeTestDirs(
    [{ href: "#", title: "Home" }],
    [
      {
        caption: "Tutorials",
        items: [{ href: "https://example.com/tut", title: "A tutorial", external: true }],
      },
      {
        caption: "API reference",
        items: [{ href: "https://example.com/api", title: "Python API reference", external: true }],
      },
    ],
  );

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);

  expect(toc.children.map((c) => c.title)).toEqual(["", "Tutorials", "API reference"]);
});

test("missing index.html throws", async () => {
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "addon-toc-test-"));
  const artifactDir = path.join(tmpDir, "artifact");
  await mkdir(artifactDir, { recursive: true });

  const pkg = await makePkg();
  await expect(generateAddonToc(pkg, artifactDir)).rejects.toThrow();
});

test("subdirectory section has no url property on the section entry", async () => {
  const { artifactDir } = await makeTestDirs([
    { href: "#", title: "Home" },
    {
      href: "how_tos/index.html",
      title: "Guides",
      children: [{ href: "how_tos/guide.html", title: "A guide" }],
    },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, artifactDir);
  const main = toc.children[0];

  const guidesEntry = main.children?.find((c) => c.title === "Guides");
  expect(guidesEntry?.url).toBeUndefined();
  expect(guidesEntry?.children).toHaveLength(1);
});
