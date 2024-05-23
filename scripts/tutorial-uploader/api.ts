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
import {
  createDirectus,
  rest,
  staticToken,
  readItems,
  readItem,
  updateItem,
  createItem,
  uploadFiles,
} from "@directus/sdk";

/* To do:
 *
 *   [x] Get URL from environment
 *   [x] Get auth from environment
 *   [ ] Handle "topics" field
 *   [ ] Zip file automatically
 *   [ ] Use temp folder for zipping
 *   [ ] Fix types
 *   [ ] Throw correctly on request failures
 *   [ ] More helpful console logging
 */

/* Information specified in the YAML file */
export interface LocalTutorialData {
  title: string;
  short_description: string;
  slug: string;
  status: string;
  local_path: string;
  category: string;
  reading_time?: number;
  catalog_featured?: boolean;
}

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

  /* Returns the file's ID */
  async uploadZipFromDisk(zippedFilePath: string): Promise<string> {
    const file = new Blob([await readFile(zippedFilePath)], {
      type: "application/zip",
    });
    const formData = new FormData();
    formData.append("title", zippedFilePath);
    formData.append("file", file, zippedFilePath);
    const response = await this.client.request(uploadFiles(formData));
    return response.id;
  }

  async updateExistingTutorial(
    tutorialId: string,
    tutorial: LocalTutorialData,
  ) {
    const temporalFileId = await this.uploadZipFromDisk(
      tutorial.local_path!,
    );
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
