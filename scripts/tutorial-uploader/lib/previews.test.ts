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

import { describe, expect, test } from "@jest/globals";
import { readItem } from "@directus/sdk";
import { readFile, writeFile, unlink } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import { $ } from "zx";

import { API } from "./api";
import { createPreviews } from "./previews";

const PR_NUMBER = 3456;
const SLUG = `my-tutorial`;
const PR_MESSAGE_FILE = "pr_message.md";

const CONFIG_FILE = `
- title: My tutorial
  short_description: Simple tutorial to test the PR preview script
  slug: ${SLUG}  # Do not change this
  local_path: ${SLUG}
  status: published
  topics: ["Scheduling"]
  category: Workflow example
  reading_time: 20
  catalog_featured: false
`;

const TEST_NOTEBOOK = `{
 "cells": [
  {
   "cell_type": "markdown",
   "id": "99587b6d-a949-4731-bee2-be3618a3c51f",
   "metadata": {},
   "source": [ "# My tutorial\\n", "\\n", "Some simple content." ]
  }
 ],
 "metadata": {
  "kernelspec": { "display_name": "Python 3", "language": "python", "name": "python3" },
  "language_info": {
   "codemirror_mode": { "name": "ipython", "version": 3 },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}`;

/* Just to be sure */
if (/learning-api\.quantum\.ibm\.com/.test(process.env.LEARNING_API_URL!)) {
  throw new Error(
    "Tried to run tests against production! Set the env var LEARNING_API_URL to either staging or local (see tutorial-uploader/README.md)",
  );
}

describe("Tutorial uploader API", () => {
  const api = new API();

  test("create PR preview", async () => {
    // Create temp directory with config file and test notebook
    const TMP_DIR = tmpdir();
    await $`mkdir -p ${join(TMP_DIR, SLUG)}`;
    await writeFile(join(TMP_DIR, "learning-api.conf.yaml"), CONFIG_FILE);
    await writeFile(join(TMP_DIR, SLUG, `${SLUG}.ipynb`), TEST_NOTEBOOK);

    // Begin actual test
    const api = new API();
    const previewSlug = `pr-${PR_NUMBER}-${SLUG}`;
    expect(await api.getTutorialIdBySlug(previewSlug)).toBeNull();

    await createPreviews(
      {
        prNumber: PR_NUMBER,
        changedFiles: [join(TMP_DIR, SLUG, `${SLUG}.ipynb`)],
        configPath: join(TMP_DIR, "learning-api.conf.yaml"),
        accessibleToInstance:
          "client-enablement/documentation/qiskit-documenta",
      },
      api,
    );

    const tutorialId = await api.getTutorialIdBySlug(previewSlug);
    expect(tutorialId).toBeTruthy();

    const retrievedTutorial = await api.client.request(
      readItem("tutorials", tutorialId as string, {
        fields: ["*", { translations: ["*"], topics: ["tutorials_topics_id"] }],
      }),
    );
    expect(retrievedTutorial).toMatchObject({
      slug: previewSlug,
      status: "published",
      reading_time: 20,
      catalog_featured: false,
      category: await api.getId(
        "tutorials_categories",
        "name",
        "Workflow example",
      ),
      topics: [
        {
          tutorials_topics_id: await api.getId(
            "tutorials_topics",
            "name",
            "Scheduling",
          ),
        },
        {
          tutorials_topics_id: await api.getId(
            "tutorials_topics",
            "name",
            "PR preview",
          ),
        },
      ],
      allowed_email_domains: null,
      required_instance_access: [
        "client-enablement/documentation/qiskit-documenta",
      ],
      sort: null,
      translations: [
        {
          title: `Preview (PR#${PR_NUMBER}): My tutorial`,
          short_description: "Simple tutorial to test the PR preview script",
          content: "Some simple content.\n",
          languages_code: "en-US",
        },
      ],
    });
    const prMessage = await readFile(PR_MESSAGE_FILE);
    expect(prMessage.toString()).toMatch(
      "Previews available:\n" +
        " * [Preview (PR#3456): My tutorial](https://learning.quantum.ibm.com/tutorial/pr-3456-my-tutorial)",
    );
  });

  beforeAll(async () => {
    if (await api.getTutorialIdBySlug(`pr-${PR_NUMBER}-${SLUG}`)) {
      await api.deleteTutorial(`pr-${PR_NUMBER}-${SLUG}`);
    }
    try {
      await unlink(PR_MESSAGE_FILE);
    } catch (err: any) {
      if (err.code === "ENOENT") {
        // File doesn't exist but that's ok
      } else {
        throw err;
      }
    }
  });

  afterEach(async () => {
    await api.deleteTutorial(`pr-${PR_NUMBER}-${SLUG}`);
    await unlink(PR_MESSAGE_FILE);
  });
});
