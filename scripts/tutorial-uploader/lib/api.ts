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
import { $ } from 'zx';
import { tmpdir } from 'os'
import {
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

import { type LocalTutorialData } from './local-tutorial-data';

/* To do:
 *
 *   [x] Get URL from environment
 *   [x] Get auth from environment
 *   [x] Handle "topics" field
 *   [x] Zip file automatically
 *   [x] Use temp folder for zipping
 *   [ ] Fix types
 *   [ ] Throw correctly on request failures
 *   [ ] More helpful console logging
 */

export class API {
  client: any; // TODO: Work out how to set this correctly

  constructor(url: string, token: string) {
    this.client = createDirectus(url).with(rest()).with(staticToken(token));
  }

  async getTutorialId(slug: string): Promise<string | null> {
    // TODO: Work out how to filter requests on server side
    const response = await this.client.request(
      // @ts-ignore
      readItems("tutorials", { fields: ["id", "slug"] }),
    );
    const match = response.find((item: { slug: string }) => item.slug === slug);
    return match ? match.id : null;
  }

  async getEnglishTranslationId(tutorialId: string): Promise<string> {
    const response = await this.client.request(
    // @ts-ignore
      readItem("tutorials", tutorialId, { fields: ["translations"] }),
    );
    return response.translations[0];
  }

  async getCategoryId(categoryName: string): Promise<string> {
    const response = await this.client.request(
      // @ts-ignore
      readItems("tutorials_categories", { fields: ["id", "name"] }),
    );
    const match = response.find(
      (item: { name: string }) => item.name === categoryName,
    );
    if (!match) {
      // TODO: Throw correctly
      console.log(`No category with name "${categoryName}"`);
    }
    return match.id;
  }

  async getTopicId(topicName: string): Promise<string> {
    // TODO: Maybe DRY with getCategoryId
    const response = await this.client.request(
      // @ts-ignore
      readItems("tutorials_topics", { fields: ["id", "name"] }),
    );
    const match = response.find(
      (item: { name: string }) => item.name === topicName,
    );
    if (!match) {
      // TODO: Throw correctly
      console.log(`No topic with name "${topicName}"`);
    }
    return match.id;
  }
  
  async getTopicRelationId(tutorialId: string, topicId: string | null): Promise<string> {
    const response = await this.client.request(
      // @ts-ignore
      readItems("tutorials_tutorials_topics"),
    );
    const match = response.find(
      (item: { tutorials_id: string, tutorials_topics_id: string }) => {
        (item.tutorials_id === tutorialId) && (item.tutorials_topics_id === topicId)
      }
    );
    if (!match) {
      // TODO: Throw correctly
      console.log(`No tutorial/tutorial_topic relation with name "${topicId}"`);
    }
    return match.id;
  }


  async clearTopics(tutorialId: string) {
    // "tutorials_tutorials_topics" is mapping of tutorial to topics
    const response = await this.client.request(
      // @ts-ignore
      readItems("tutorials_tutorials_topics"),
    );
    const matches = response.filter(
      (item: { tutorials_id: string }) => item.tutorials_id === tutorialId
    );
    for (const m of matches) {
      // @ts-ignore
      await this.client.request(deleteItem("tutorials_tutorials_topics", m.id)).catch((err) => console.log(err))
    }
  }

  async updateTutorialTopics(tutorialId: string, topicNames: string[]) {
    await this.clearTopics(tutorialId)
    for (const name of topicNames) {
      const id = await this.getTopicId(name);
      await this.client.request(
        // @ts-ignore
        createItem("tutorials_tutorials_topics", { tutorials_id: tutorialId, tutorials_topics_id: id })
      )
    }
  }

  /* Returns the file's ID */
  async uploadLocalFolder(path: string): Promise<string> {
    // Zip folder
    const zippedFilePath = `${tmpdir()}/${path}.zip`
    await $`(cd tutorials && zip -qr ${zippedFilePath} ${path})`

    // Build form
    const file = new Blob([await readFile(zippedFilePath)], {
      type: "application/zip",
    });
    const formData = new FormData();
    formData.append("title", zippedFilePath);
    formData.append("file", file, zippedFilePath);

    // Upload form
    const response = await this.client.request(uploadFiles(formData));
    return response.id;
  }

  async updateExistingTutorial(
    tutorialId: string,
    tutorial: LocalTutorialData,
  ) {
    const temporalFileId = await this.uploadLocalFolder(tutorial.local_path,);
    const translationId = await this.getEnglishTranslationId(tutorialId);
    const newData = {
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

    // @ts-ignore
    await this.client.request(updateItem("tutorials", tutorialId, newData));
    await this.updateTutorialTopics(tutorialId, tutorial.topics)
  }

  /*
   * Only sets minimum data required for API to accept the creation request
   * updateExistingTutorial is called immediately after
   */
  async createTutorial(tutorial: LocalTutorialData): Promise<string> {
    const translationData = {
      title: tutorial.title,
      languages_code: "en-US",
      short_description: tutorial.short_description,
    };
    const translation = await this.client.request(
    // @ts-ignore
      createItem("tutorials_translations", translationData),
    );
    const tutorialData = {
      category: await this.getCategoryId(tutorial.category),
      translations: [translation.id],
      slug: tutorial.slug,
    };
    const newTutorial = await this.client.request(
    // @ts-ignore
      createItem("tutorials", tutorialData),
    );
    return newTutorial.id;
  }

  async upsertTutorial(tutorial: LocalTutorialData) {
    let id = await this.getTutorialId(tutorial.slug);
    if (!id) {
      id = await this.createTutorial(tutorial);
    }
    await this.updateExistingTutorial(id, tutorial);
  }
}
