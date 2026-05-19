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

/** Creates a temp directory, writes the given files into it, returns the path. */
async function makeTmpAddonDir(
  files: Record<string, string>,
): Promise<{ tmpDir: string; addonDir: string }> {
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "addon-toc-test-"));
  const addonDir = path.join(tmpDir, "addons", "my-addon");
  await mkdir(addonDir, { recursive: true });

  for (const [relPath, content] of Object.entries(files)) {
    const abs = path.join(addonDir, relPath);
    await mkdir(path.dirname(abs), { recursive: true });
    await writeFile(abs, content, "utf-8");
  }

  return { tmpDir, addonDir };
}

function mdx(title: string, h1 = title): string {
  return `---\ntitle: "${title}"\n---\n\n# ${h1}\n\nSome content.\n`;
}

function notebook(h1: string): string {
  return JSON.stringify({
    cells: [
      {
        id: "frontmatter",
        cell_type: "markdown",
        source: [`---\ntitle: "Frontmatter title"\n---`],
        metadata: {},
        outputs: [],
      },
      {
        id: "content",
        cell_type: "markdown",
        source: [`# ${h1}\n\nSome content.`],
        metadata: {},
        outputs: [],
      },
    ],
    metadata: {},
    nbformat: 4,
    nbformat_minor: 5,
  });
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

test("minimal addon: only index.mdx and install.mdx", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("My Addon home page", "My Addon"),
    "install.mdx": mdx("Installation Instructions"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));

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
          { title: "Home", url: "/docs/addons/my-addon" },
          {
            title: "Installation Instructions",
            url: "/docs/addons/my-addon/install",
          },
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

test("github link is appended after top-level files when githubSlug is set", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home", "My Addon"),
  });

  const pkg = await makePkg("my-addon", "Qiskit/my-addon");
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  expect(main.children?.at(-1)).toEqual({
    title: "GitHub",
    url: "https://github.com/Qiskit/my-addon",
  });
});

test("how-tos directory becomes Guides subsection in main section", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "how-tos/index.mdx": mdx("Guides Index", "How-To Guides"),
    "how-tos/alpha.ipynb": notebook("How to do alpha"),
    "how-tos/beta.mdx": mdx("How to do beta"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const guidesEntry = main.children?.find((c) => c.title === "Guides");
  expect(guidesEntry).toEqual({
    title: "Guides",
    children: [
      {
        title: "How to do alpha",
        url: "/docs/addons/my-addon/how-tos/alpha",
      },
      {
        title: "How to do beta",
        url: "/docs/addons/my-addon/how-tos/beta",
      },
    ],
  });
});

test("api reference section is always last", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const last = toc.children.at(-1);

  expect(last?.title).toBe("API reference");
  expect(last?.children?.[0].url).toBe("/docs/api/my-addon");
});

test("unknown subdirectory uses capitalized directory name as section title", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "references/item.mdx": mdx("Some reference"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const refSection = main.children?.find((c) => c.title === "References");
  expect(refSection).toBeDefined();
  expect(refSection?.children?.[0].title).toBe("Some reference");
});

test("subdir with only index.mdx renders as dropdown with index as child", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "references/index.mdx": mdx("References Index", "Reference material"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const references = main.children?.find((c) => c.title === "References");
  expect(references).toEqual({
    title: "References",
    children: [
      {
        title: "Reference material",
        url: "/docs/addons/my-addon/references/index",
      },
    ],
  });
  // No url on the section itself — the index is the child, not a parent link.
  expect(references?.url).toBeUndefined();
});

test("explanations directory is merged into the Guides section", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "how-tos/guide.mdx": mdx("A guide"),
    "explanations/background.mdx": mdx("Background"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const guideSections = main.children?.filter((c) => c.title === "Guides");
  // Only one Guides section — both dirs merged into it.
  expect(guideSections).toHaveLength(1);
  const guides = guideSections![0];
  expect(guides.children?.map((c) => c.title)).toEqual(["Background", "A guide"]);
});

test("subdir without index.mdx has no url on the section entry", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "how-tos/guide.mdx": mdx("A guide"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const guidesEntry = main.children?.find((c) => c.title === "Guides");
  expect(guidesEntry?.url).toBeUndefined();
  expect(guidesEntry?.children).toHaveLength(1);
});

test("empty subdirectory is omitted from the TOC", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    // create directory with no content files
  });
  await mkdir(path.join(tmpDir, "addons", "my-addon", "empty-dir"), {
    recursive: true,
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  expect(main.children?.some((c) => c.title === "Empty-dir")).toBe(false);
});

test("notebook title is read from first non-frontmatter markdown cell h1", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "how-tos/demo.ipynb": notebook("The real title from h1"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.[0].title).toBe("The real title from h1");
});

test("notebook with h2 as first heading falls back to h2", async () => {
  const nb = JSON.stringify({
    cells: [
      {
        id: "frontmatter",
        cell_type: "markdown",
        source: [`---\ntitle: "FM"\n---`],
        metadata: {},
        outputs: [],
      },
      {
        id: "content",
        cell_type: "markdown",
        source: [`## Section heading\n\nContent.`],
        metadata: {},
        outputs: [],
      },
    ],
    metadata: {},
    nbformat: 4,
    nbformat_minor: 5,
  });

  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "how-tos/demo.ipynb": nb,
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.[0].title).toBe("Section heading");
});

test("mdx h2 fallback when no h1 present", async () => {
  const content = `---\ntitle: "FM"\n---\n\n## Only an h2 here\n\nContent.\n`;

  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "how-tos/guide.mdx": content,
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.[0].title).toBe("Only an h2 here");
});

test("content files in subdir are sorted alphabetically by filename", async () => {
  const { tmpDir } = await makeTmpAddonDir({
    "index.mdx": mdx("Home"),
    "how-tos/index.mdx": mdx("Guides"),
    "how-tos/03-third.mdx": mdx("Third guide"),
    "how-tos/01-first.mdx": mdx("First guide"),
    "how-tos/02-second.mdx": mdx("Second guide"),
  });

  const pkg = await makePkg();
  const toc = await generateAddonToc(pkg, path.join(tmpDir, "addons"));
  const main = toc.children[0];

  const guides = main.children?.find((c) => c.title === "Guides");
  expect(guides?.children?.map((c) => c.title)).toEqual([
    "First guide",
    "Second guide",
    "Third guide",
  ]);
});
