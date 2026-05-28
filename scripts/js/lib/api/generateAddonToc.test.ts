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
 * Each item in `navItems` can be:
 *   - a string href (top-level page link)
 *   - { href, title } (top-level page with custom title)
 *   - { href, title, children: [{ href, title }] } (section with sub-pages)
 */
type NavChild = { href: string; title: string };
type NavItem =
  | string
  | { href: string; title?: string; children?: NavChild[] };

function makeIndexHtml(navItems: NavItem[]): string {
  const items = navItems.map((item) => {
    if (typeof item === "string") {
      const title = item.replace(/\.html$/, "").replace(/[-_]/g, " ");
      return `<li class="toctree-l1"><a class="reference internal" href="${item}">${title}</a></li>`;
    }
    const { href, title = href.replace(/\.html$/, ""), children } = item;
    if (children && children.length > 0) {
      const l2s = children
        .map(
          (c) =>
            `<li class="toctree-l2"><a class="reference internal" href="${c.href}">${c.title}</a></li>`,
        )
        .join("\n          ");
      return `<li class="toctree-l1 has-children"><a class="reference internal" href="${href}">${title}</a>
        <ul>${l2s}</ul>
      </li>`;
    }
    return `<li class="toctree-l1"><a class="reference internal" href="${href}">${title}</a></li>`;
  });

  return `<!DOCTYPE html>
<html>
<body>
<div class="sidebar-tree">
  <ul>
    ${items.join("\n    ")}
  </ul>
</div>
</body>
</html>`;
}

/** Creates a temp directory with an artifact (index.html) and optional docs files. */
async function makeTestDirs(
  navItems: NavItem[],
): Promise<{ artifactDir: string; docsDir: string }> {
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "addon-toc-test-"));
  const artifactDir = path.join(tmpDir, "artifact");
  const docsDir = path.join(tmpDir, "addons");
  await mkdir(artifactDir, { recursive: true });
  await mkdir(path.join(docsDir, "my-addon"), { recursive: true });
  await writeFile(
    path.join(artifactDir, "index.html"),
    makeIndexHtml(navItems),
    "utf-8",
  );
  return { artifactDir, docsDir };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

test("minimal addon: only index and install in sidebar", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "My Addon" },
    { href: "install.html", title: "Installation" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);

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
      {
        title: "API reference",
        collapsible: false,
        children: [
          {
            title: "My Addon API reference",
            url: "/docs/api/my-addon",
          },
        ],
      },
    ],
  });
});

test("sidebar order is preserved exactly", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
    { href: "install.html", title: "Install" },
    { href: "changelog.html", title: "Changelog" },
    { href: "faq.html", title: "FAQ" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const main = toc.children[0];

  expect(main.children?.map((c) => c.title)).toEqual([
    "Home",
    "Install",
    "Changelog",
    "FAQ",
  ]);
});

test("subdirectory section preserves l2 children order from sidebar", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
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
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.map((c) => c.title)).toEqual([
    "Beta guide",
    "Alpha guide",
    "Gamma guide",
  ]);
});

test("subdirectory section has correct child URLs", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
    {
      href: "how_tos/index.html",
      title: "Guides",
      children: [
        { href: "how_tos/my_guide.html", title: "My Guide" },
      ],
    },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.[0].url).toBe(
    "/docs/addons/my-addon/how-tos/my-guide",
  );
});

test("items with titles matching SKIP_ITEMS are omitted", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
    {
      href: "tutorials/index.html",
      title: "Tutorials",
      children: [{ href: "tutorials/demo.html", title: "Demo" }],
    },
    { href: "install.html", title: "Install" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const main = toc.children[0];

  expect(main.children?.map((c) => c.title)).toEqual(["Home", "Install"]);
});

test("external link (class=external) is passed through unchanged", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
  ]);
  // Append an external link directly to the index.html sidebar
  const indexPath = path.join(artifactDir, "index.html");
  const html = await import("fs/promises").then((fs) =>
    fs.readFile(indexPath, "utf-8"),
  );
  await import("fs/promises").then((fs) =>
    fs.writeFile(
      indexPath,
      html.replace(
        "</ul>",
        `<li class="toctree-l1"><a class="reference external" href="https://github.com/Qiskit/my-addon">GitHub</a></li></ul>`,
      ),
    ),
  );

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const main = toc.children[0];

  expect(main.children?.at(-1)).toEqual({
    title: "GitHub",
    url: "https://github.com/Qiskit/my-addon",
  });
});

test("index.html href maps to package root URL", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const main = toc.children[0];

  expect(main.children?.[0].url).toBe("/docs/addons/my-addon");
});

test("api reference section is always last", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const last = toc.children.at(-1);

  expect(last?.title).toBe("API reference");
  expect(last?.children?.[0].url).toBe("/docs/api/my-addon");
});

test("missing index.html throws", async () => {
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "addon-toc-test-"));
  const artifactDir = path.join(tmpDir, "artifact");
  const docsDir = path.join(tmpDir, "addons");
  await mkdir(artifactDir, { recursive: true });
  await mkdir(path.join(docsDir, "my-addon"), { recursive: true });

  const pkg = await makePkg();
  await expect(generateAddonToc(pkg, docsDir, artifactDir)).rejects.toThrow();
});

test("subdirectory section has no url property on the section entry", async () => {
  const { artifactDir, docsDir } = await makeTestDirs([
    { href: "index.html", title: "Home" },
    {
      href: "how_tos/index.html",
      title: "Guides",
      children: [{ href: "how_tos/guide.html", title: "A guide" }],
    },
  ]);

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, docsDir, artifactDir);
  const main = toc.children[0];

  const guidesEntry = main.children?.find((c) => c.title === "Guides");
  expect(guidesEntry?.url).toBeUndefined();
  expect(guidesEntry?.children).toHaveLength(1);
});
