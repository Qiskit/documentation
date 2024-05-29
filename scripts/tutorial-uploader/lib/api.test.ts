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

import { randomBytes } from "crypto";

import { describe, expect, test } from "@jest/globals";
import { readItem } from "@directus/sdk";

import { API } from "./api";
import { type LocalTutorialData } from "./local-tutorial-data";

/* Create test data */
const createdSlugs: string[] = []; // To teardown afterwards
function generateTutorialData(): LocalTutorialData {
  const testId = "test-" + randomBytes(4).toString("hex");
  const slug = `${testId}-my-tutorial-slug`;
  createdSlugs.push(slug);
  return {
    title: `My tutorial (${testId})`,
    short_description: `My short tutorial description (${testId})`,
    slug,
    status: "published",
    local_path: "scripts/tutorial-uploader/lib/test-data/simple-tutorial",
    category: "Workflow example",
    topics: [],
    reading_time: 50,
    catalog_featured: false,
  };
}

/* Just to be sure */
if (/learning-api\.quantum\.ibm\.com/.test(process.env.LEARNING_API_URL!)) {
  throw new Error("Tried to run tests against production! Set the env var LEARNING_API_URL to either staging or local (see tutorial-uploader/README.md)");
}

describe("Tutorial uploader API", () => {
  const api = new API(
    process.env.LEARNING_API_URL!,
    process.env.LEARNING_API_TOKEN!,
  );

  test("upload new tutorial", async () => {
    const simpleTutorial = generateTutorialData();

    expect(
      await api.getId("tutorials", "slug", simpleTutorial.slug),
    ).toBeNull();

    await api.upsertTutorial(simpleTutorial);
    const tutorialId = await api.getId(
      "tutorials",
      "slug",
      simpleTutorial.slug,
    );
    expect(tutorialId).toBeTruthy();

    const retrievedTutorial = await api.client.request(
      // @ts-ignore
      readItem("tutorials", tutorialId, { fields: ["*", "translations.*"] }),
    );
    expect(retrievedTutorial).toMatchObject({
      slug: simpleTutorial.slug,
      status: simpleTutorial.status,
      reading_time: simpleTutorial.reading_time,
      catalog_featured: simpleTutorial.catalog_featured,
      category: await api.getId(
        "tutorials_categories",
        "name",
        simpleTutorial.category,
      ),
      topics: [],
      editors: [],
      allowed_email_domains: null,
      required_instance_access: null,
      sort: null,
      translations: [
        {
          title: simpleTutorial.title,
          short_description: simpleTutorial.short_description,
          content: "Here's some basic content.\n",
          languages_code: "en-US",
        },
      ],
    });
  });

  test("update existing tutorial", async () => {
    const simpleTutorial = generateTutorialData();

    // Upload tutorial
    await api.upsertTutorial(simpleTutorial);
    const tutorialId = await api.getId(
      "tutorials",
      "slug",
      simpleTutorial.slug,
    );

    // Mutate tutorial data and re-upload
    simpleTutorial.title = "A new tutorial title";
    simpleTutorial.short_description = "A modified short description";
    simpleTutorial.status = "draft";
    simpleTutorial.category = "How-to";
    simpleTutorial.reading_time = 33;
    simpleTutorial.topics = ["Scheduling", "Transpilation"];
    simpleTutorial.catalog_featured = false;
    await api.upsertTutorial(simpleTutorial);

    // Retrieve and check
    const retrievedTutorial = await api.client.request(
      // @ts-ignore
      readItem("tutorials", tutorialId, { fields: ["*", "topics.*"] }),
    );
    const topicIds = (await Promise.all(
      simpleTutorial.topics.map((name) =>
        api.getId("tutorials_topics", "name", name),
      ),
    )) as string[];
    expect(retrievedTutorial).toMatchObject({
      slug: simpleTutorial.slug,
      status: simpleTutorial.status,
      reading_time: simpleTutorial.reading_time,
      catalog_featured: simpleTutorial.catalog_featured,
      category: await api.getId(
        "tutorials_categories",
        "name",
        simpleTutorial.category,
      ),
      topics: topicIds.map((name) => {
        return { tutorials_topics_id: name };
      }),
      editors: [],
      allowed_email_domains: null,
      required_instance_access: null,
      sort: null,
    });

    const retrievedTranslation = (
      await api.client.request(
        // @ts-ignore
        readItem("tutorials", tutorialId, { fields: ["translations.*"] }),
      )
    ).translations;
    expect(retrievedTranslation).toMatchObject([
      {
        title: simpleTutorial.title,
        short_description: simpleTutorial.short_description,
        content: "Here's some basic content.\n",
        languages_code: "en-US",
      },
    ]);
  });

  afterAll(async () => {
    for (const slug of createdSlugs) {
      await api.deleteTutorial(slug);
    }
  });
});
