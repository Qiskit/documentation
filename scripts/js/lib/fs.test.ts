// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
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
import { mkdir, mkdtemp, readdir, writeFile } from "fs/promises";

import { expect, test } from "@playwright/test";

import { pathExists, rmFolderContentsExcept } from "./fs.js";

test("pathExists()", async () => {
  const readme = await pathExists(`README.md`);
  expect(readme).toBe(true);

  const dir = await pathExists(`docs/`);
  expect(dir).toBe(true);

  const fake = await pathExists(`fake-file`);
  expect(fake).toBe(false);
});

test("rmFolderContentsExcept()", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "rm-folder-test-"));
  await writeFile(path.join(dir, "page.mdx"), "");
  await mkdir(path.join(dir, "generated"));
  await writeFile(path.join(dir, "generated", "stale.mdx"), "");
  await mkdir(path.join(dir, "0.2"));
  await writeFile(path.join(dir, "0.2", "kept.mdx"), "");

  await rmFolderContentsExcept(dir, (name) => name === "0.2");

  expect(await readdir(dir)).toEqual(["0.2"]);
  expect(await readdir(path.join(dir, "0.2"))).toEqual(["kept.mdx"]);
});
