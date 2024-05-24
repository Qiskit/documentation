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

import { readFile } from "fs/promises";
import { tmpdir } from "os";
import { dirname, basename } from "path";
import { randomBytes } from "crypto";

import { $ } from "zx";
import {
  type RestClient,
  createDirectus,
  rest,
  staticToken,
  readItems,
  readItem,
  updateItem,
  createItem,
  deleteItem,
  uploadFiles,
} from "@directus/sdk";

import { type LearningApiSchema } from "./schema";
import { type LocalTutorialData } from "./local-tutorial-data";

/* To do:
 *   [x] Fix types
 *   [ ] Throw correctly on request failures
 *   [ ] More helpful console logging
 */

export class API {
  client: RestClient<LearningApiSchema>;

  constructor(url: string, token: string) {
    this.client = createDirectus<LearningApiSchema>(url)
      .with(rest())
      .with(staticToken(token));
  }

  async getIds(
    collection: keyof LearningApiSchema,
    field: any,
    value: any,
  ): Promise<string[]> {
    // TODO: Work out how to filter requests on server side
    const response = await this.client.request(
      readItems(collection, { fields: ["id", field] }),
    );
    const matchingIds = response
      .filter((item: any) => item[field] === value)
      .map((item: any) => item.id);
    return matchingIds;
  }

  async getId(
    collection: keyof LearningApiSchema,
    field: string,
    value: any,
  ): Promise<string | null> {
    const ids = await this.getIds(collection, field, value);
    if (ids.length === 0) {
      return null;
    }
    if (ids.length === 1) {
      return ids[0];
    }
    throw new Error(
      `Found ${ids.length} items for getId('${collection}', '${field}', '${value}'. ` +
        `Expected one or none.`,
    );
  }

  async getEnglishTranslationId(tutorialId: string): Promise<number> {
    // TODO: This assumes the only translation is english (currently true)
    const response = await this.client.request(
      readItem("tutorials", tutorialId, { fields: ["translations"] }),
    );
    if (!response.translations) {
      throw new Error(`No translations for tutorial ${tutorialId}`);
    }
    return response.translations[0] as number;
  }

  async clearTopics(tutorialId: string) {
    // "tutorials_tutorials_topics" is mapping of tutorial to topics
    const ids = await this.getIds(
      "tutorials_tutorials_topics",
      "tutorials_id",
      tutorialId,
    );
    for (const id of ids) {
      await this.client
        .request(deleteItem("tutorials_tutorials_topics", id))
        .catch((err: any) => console.log(err));
    }
  }

  async updateTutorialTopics(tutorialId: string, topicNames: string[]) {
    await this.clearTopics(tutorialId);
    for (const name of topicNames) {
      const id = await this.getId("tutorials_topics", "name", name);
      if (id === null) throw new Error(`No topic with name '${name}'`);
      await this.client.request(
        createItem("tutorials_tutorials_topics", {
          tutorials_id: tutorialId,
          tutorials_topics_id: id,
        }),
      );
    }
  }

  /* Returns the file's ID */
  async uploadLocalFolder(path: string): Promise<string> {
    // Zip folder
    const zippedFilePath = `${tmpdir()}/${randomBytes(8).toString(
      "hex",
    )}/tutorial.zip`;
    await $`mkdir -p ${dirname(zippedFilePath)}`;
    await $`(cd ${dirname(path)} && zip -qr ${zippedFilePath} ${basename(
      path,
    )})`;

    // Build form
    const file = new Blob([await readFile(zippedFilePath)], {
      type: "application/zip",
    });
    const formData = new FormData();
    formData.append("title", zippedFilePath);
    formData.append("file", file, zippedFilePath);

    // Upload form
    const response = await this.client.request(uploadFiles(formData));

    // Clean up
    await $`rm -r ${dirname(zippedFilePath)}`;

    return response.id;
  }

  async updateExistingTutorial(
    tutorialId: string,
    tutorial: LocalTutorialData,
  ) {
    const temporalFileId = await this.uploadLocalFolder(tutorial.local_path);
    const translationId = await this.getEnglishTranslationId(tutorialId);
    const newData = {
      category: await this.getId(
        "tutorials_categories",
        "name",
        tutorial.category,
      ),
      reading_time: tutorial.reading_time,
      catalog_featured: tutorial.catalog_featured,
      status: tutorial.status,
      translations: [
        {
          title: tutorial.title,
          id: translationId,
          temporal_file: temporalFileId,
          short_description: tutorial.short_description,
        },
      ],
    };

    await this.client.request(updateItem("tutorials", tutorialId, newData));
    await this.updateTutorialTopics(tutorialId, tutorial.topics);
  }

  /*
   * Only sets minimum data required for API to accept the creation request
   * updateExistingTutorial is called immediately after
   */
  async createTutorial(tutorial: LocalTutorialData): Promise<string> {
    const translationData = {
      title: tutorial.title,
      languages_code: "en-US",
    };
    const translation = await this.client.request(
      createItem("tutorials_translations", translationData),
    );
    const category = await this.getId(
      "tutorials_categories",
      "name",
      tutorial.category,
    );
    if (category === null)
      throw new Error(`No category with name '${tutorial.category}'`);

    const tutorialData = {
      category,
      translations: [translation.id],
      slug: tutorial.slug,
    };
    const newTutorial = await this.client.request(
      createItem("tutorials", tutorialData),
    );
    return newTutorial.id;
  }

  async upsertTutorial(tutorial: LocalTutorialData) {
    let id = await this.getId("tutorials", "slug", tutorial.slug);
    if (id === null) {
      id = await this.createTutorial(tutorial);
    }
    await this.updateExistingTutorial(id, tutorial);
  }

  async deleteTutorial(tutorialSlug: string) {
    const id = await this.getId("tutorials", "slug", tutorialSlug);
    if (id === null) return;
    await this.client.request(deleteItem("tutorials", id));
  }
}
