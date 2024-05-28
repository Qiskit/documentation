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

import { type LearningApiSchema, StringKeyOf, ElementType } from "./schema";
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

  /**
   * Get IDs of all items in `collection` that match a field value.
   * Roughly: "SELECT * FROM collection WHERE field=value".
   */
  async getIds<
    CollectionName extends StringKeyOf<LearningApiSchema>,
    FieldName extends StringKeyOf<
      ElementType<LearningApiSchema[CollectionName]>
    >,
    FieldValue extends ElementType<
      LearningApiSchema[CollectionName]
    >[FieldName],
  >(
    collection: CollectionName,
    field: FieldName,
    value: FieldValue,
  ): Promise<string[]> {
    const response = await this.client.request(
      // @ts-ignore
      readItems(collection, { fields: ["id", field] }),
    );
    const matchingIds = response
      .filter((item: any) => item[field] === value)
      .map((item: any) => item.id);
    return matchingIds;
  }

  /**
   * Like getIds (plural) but expects at most one match.
   * Throws if more than one match is found.
   */
  async getId<
    CollectionName extends StringKeyOf<LearningApiSchema>,
    FieldName extends StringKeyOf<
      ElementType<LearningApiSchema[CollectionName]>
    >,
    FieldValue extends ElementType<
      LearningApiSchema[CollectionName]
    >[FieldName],
  >(
    collection: CollectionName,
    field: FieldName,
    value: FieldValue,
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

  /**
   * Tutorials can have many translations, but we only use English at the moment.
   */
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

  /**
   * Remove all topics from a tutorial.
   * This works by deleting appropriate entries of
   * "tutorials_tutorials_topics": a collection of one-to-many mappings of
   * "tutorials" to "tutorials_topics".
   */
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
    localData: LocalTutorialData,
  ) {
    const newTutorial = {
      category: await this.getId(
        "tutorials_categories",
        "name",
        localData.category,
      ),
      reading_time: localData.reading_time,
      catalog_featured: localData.catalog_featured,
      status: localData.status,
      translations: [
        {
          title: localData.title,
          id: await this.getEnglishTranslationId(tutorialId),
          temporal_file: await this.uploadLocalFolder(localData.local_path),
          short_description: localData.short_description,
        },
      ],
    };

    await this.client.request(updateItem("tutorials", tutorialId, newTutorial));
    await this.updateTutorialTopics(tutorialId, localData.topics);
  }

  /*
   * Only sets minimum data required for API to accept the creation request
   * updateExistingTutorial should be called immediately after
   */
  async createTutorial(localData: LocalTutorialData): Promise<string> {
    const translationData = {
      title: localData.title,
      languages_code: "en-US",
    };
    const translation = await this.client.request(
      createItem("tutorials_translations", translationData),
    );
    const category = await this.getId(
      "tutorials_categories",
      "name",
      localData.category,
    );
    if (category === null)
      throw new Error(`No category with name '${localData.category}'`);

    const tutorial = {
      category,
      translations: [translation.id],
      slug: localData.slug,
    };
    const response = await this.client.request(
      createItem("tutorials", tutorial),
    );
    return response.id;
  }

  /**
   * Update tutorial if it exists, otherwise create new
   */
  async upsertTutorial(localData: LocalTutorialData) {
    let id = await this.getId("tutorials", "slug", localData.slug);
    if (id === null) {
      id = await this.createTutorial(localData);
    }
    await this.updateExistingTutorial(id, localData);
  }

  /**
   * For testing
   */
  async deleteTutorial(tutorialSlug: string) {
    const id = await this.getId("tutorials", "slug", tutorialSlug);
    if (id === null) return;
    await this.client.request(deleteItem("tutorials", id));
  }
}
