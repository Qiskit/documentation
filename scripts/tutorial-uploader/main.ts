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

import { readFile } from 'fs/promises';
import { createDirectus, rest, authentication, readItems, readItem, updateItem, createItem, uploadFiles } from '@directus/sdk';


/* To do:
 * 
 *   [ ] Get URL from environment
 *   [ ] Get auth from environment
 *   [ ] Zip file automatically
 *   [ ] Use temp folder for zipping
 *   [ ] Read from YAML file
 *   [ ] Fix types
 *   [ ] Throw correctly on request failures
 *   [ ] More helpful console logging
 */

/* Information specified in the YAML file */
interface LocalTutorialData {
  title: string;
  short_description: string;
  slug: string;
  status: string;
  notebook_path: string;
  category: string;
  reading_time?: number;
  catalog_featured?: boolean;
}

const testTutorial: LocalTutorialData = {
  title: "Frank's tutorial",
  slug: "frank-tutorial",
  status: "published",
  short_description: "Short description of Frank's tutorial",
  notebook_path: "tutorials/chsh-inequality.zip",
  category: "test category",
}

class API {
  client: any; // TODO: Work out how to set this correctly

  constructor(url: string) {
    this.client = createDirectus(url)
      .with(rest())
      .with(authentication());
  }

  async login() {
    await this.client.login("admin@example.com", "password")
  }

  async getTutorialId(slug: string): Promise<string|null> {
    // TODO: Work out how to filter requests on server side
    const response = await this.client.request(
      // @ts-ignore
      readItems("tutorials", { fields: ['id', 'slug'] })
    )
    const match = response.find((item: { slug: string }) => item.slug === slug)
    return match ? match.id : null
  }

  async getEnglishTranslationId(tutorialId: string): Promise<string> {
    // @ts-ignore
    const response = await this.client.request(readItem("tutorials", tutorialId, { fields: ['translations'] }))
    return response.translations[0]
  }

  async getCategoryId(categoryName: string): Promise<string> {
    const response = await this.client.request(
    // @ts-ignore
      readItems("tutorials_categories", { fields: ['id', 'name'] })
    )
    const match = response.find((item: { name: string }) => item.name === categoryName)
    if (!match) {
      console.log(`No category with name "${categoryName}"`)
    }
    return match.id
  }

  async uploadZipFromDisk(zippedFilePath: string): Promise<string> {
    const file = new Blob(
      [await readFile(zippedFilePath)],
      { type: "application/zip" }
    )
    const formData = new FormData()
    formData.append("title", zippedFilePath)
    formData.append("file", file, zippedFilePath)
    const response = await this.client.request(uploadFiles(formData))
    return response.id;
  }

  async updateExistingTutorial(tutorialId: string, tutorial: LocalTutorialData) {
    const temporalFileId = await this.uploadZipFromDisk(tutorial.notebook_path!)
    const translationId = await this.getEnglishTranslationId(tutorialId)
    const newData = {
      reading_time: tutorial.reading_time,
      catalog_featured: tutorial.catalog_featured,
      status: tutorial.status,
      translations: [{
        title: tutorial.title,
        id: translationId,
        temporal_file: temporalFileId,
        short_description: tutorial.short_description,
      }]
    }

    // @ts-ignore
    await this.client.request(updateItem("tutorials", tutorialId, newData))
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
      }
    // @ts-ignore
    const translation = await this.client.request(createItem("tutorials_translations", translationData))
    const tutorialData = {
      category: await this.getCategoryId(tutorial.category),
      translations: [ translation.id ],
      slug: tutorial.slug
    }
    // @ts-ignore
    const newTutorial = await this.client.request(createItem("tutorials", tutorialData))
    return newTutorial.id
  }

  async upsertTutorial(tutorial: LocalTutorialData) {
    let id = await this.getTutorialId(tutorial.slug)
    if (id === null) {
      id = await this.createTutorial(tutorial)
    }
    await this.updateExistingTutorial(id, tutorial)
  }
}


async function main() {
  const api = new API("http://0.0.0.0:8055")
  await api.login()

  await api.upsertTutorial(testTutorial)
}

main().then(() => process.exit());
