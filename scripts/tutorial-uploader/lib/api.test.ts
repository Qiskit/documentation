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

import { API } from "./api";
import { type LocalTutorialData } from "./local-tutorial-data";

/* Create test data */
const MOCK_TUTORIAL: LocalTutorialData = {
  title: "Mock tutorial for testing",
  short_description: "A mock tutorial for testing with Jest",
  slug: "mock-tutorial",
  status: "published",
  local_path: "scripts/tutorial-uploader/lib/test-data/simple-tutorial",
  category: "Workflow example",
  topics: [],
  reading_time: 50,
  catalog_featured: false,
  required_instance_access: ["ibm-quantum/group/project"],
  allowed_email_domains: ["ibm.com", "hotmail.co.uk"],
};

/* Just to be sure */
if (/learning-api\.quantum\.ibm\.com/.test(process.env.LEARNING_API_URL!)) {
  throw new Error(
    "Tried to run tests against production! Set the env var LEARNING_API_URL to either staging or local (see tutorial-uploader/README.md)",
  );
}

describe("Tutorial uploader API", () => {
  const api = new API();

  beforeAll(async () => {
    if (await api.getTutorialIdBySlug(MOCK_TUTORIAL.slug)) {
      await api.deleteTutorial(MOCK_TUTORIAL.slug);
    }
  });

  afterEach(async () => {
    await api.deleteTutorial(MOCK_TUTORIAL.slug);
  });

  test("upload new tutorial", async () => {
    expect(await api.getTutorialIdBySlug(MOCK_TUTORIAL.slug)).toBeNull();

    await api.upsertTutorial(MOCK_TUTORIAL);
    const tutorialId = await api.getTutorialIdBySlug(MOCK_TUTORIAL.slug);
    expect(tutorialId).toBeTruthy();

    const retrievedTutorial = await api.client.request(
      readItem("tutorials", tutorialId as string, {
        fields: ["*", { translations: ["*"] }],
      }),
    );
    expect(retrievedTutorial).toMatchObject({
      slug: MOCK_TUTORIAL.slug,
      status: MOCK_TUTORIAL.status,
      reading_time: MOCK_TUTORIAL.reading_time,
      catalog_featured: MOCK_TUTORIAL.catalog_featured,
      category: await api.getId(
        "tutorials_categories",
        "name",
        MOCK_TUTORIAL.category,
      ),
      topics: [],
      allowed_email_domains: ["ibm.com", "hotmail.co.uk"],
      required_instance_access: ["ibm-quantum/group/project"],
      sort: null,
      translations: [
        {
          title: MOCK_TUTORIAL.title,
          short_description: MOCK_TUTORIAL.short_description,
          content: "Here's some basic content.\n",
          languages_code: "en-US",
        },
      ],
    });
  });

  test("update existing tutorial", async () => {
    // Upload tutorial
    await api.upsertTutorial(MOCK_TUTORIAL);
    const tutorialId = await api.getTutorialIdBySlug(MOCK_TUTORIAL.slug);

    // Mutate tutorial data and re-upload
    const modifiedTutorial = {
      ...MOCK_TUTORIAL,
      title: "A new tutorial title",
      short_description: "A modified short description",
      status: "draft",
      category: "How-to",
      reading_time: 33,
      topics: ["Scheduling", "Transpilation"],
      catalog_featured: false,
    };
    await api.upsertTutorial(modifiedTutorial);

    // Retrieve and check
    const retrievedTutorial = await api.client.request(
      readItem("tutorials", tutorialId as string, {
        fields: ["*", { topics: ["*"] }],
      }),
    );
    const topicIds = (await Promise.all(
      modifiedTutorial.topics.map((name) =>
        api.getId("tutorials_topics", "name", name),
      ),
    )) as string[];
    expect(retrievedTutorial).toMatchObject({
      slug: modifiedTutorial.slug,
      status: modifiedTutorial.status,
      reading_time: modifiedTutorial.reading_time,
      catalog_featured: modifiedTutorial.catalog_featured,
      category: await api.getId(
        "tutorials_categories",
        "name",
        modifiedTutorial.category,
      ),
      topics: topicIds.map((id) => {
        return { tutorials_topics_id: id };
      }),
      allowed_email_domains: ["ibm.com", "hotmail.co.uk"],
      required_instance_access: ["ibm-quantum/group/project"],
      sort: null,
    });

    const retrievedTranslation = (
      await api.client.request(
        readItem("tutorials", tutorialId as string, {
          fields: [{ translations: ["*"] }],
        }),
      )
    ).translations;
    expect(retrievedTranslation).toMatchObject([
      {
        title: modifiedTutorial.title,
        short_description: modifiedTutorial.short_description,
        content: "Here's some basic content.\n",
        languages_code: "en-US",
      },
    ]);
  });
});
