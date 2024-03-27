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

import { CheerioAPI, Cheerio, load as cheerioLoad } from "cheerio";

export class CheerioDoc {
  readonly $: CheerioAPI;
  readonly $main: Cheerio<any>;

  constructor($: CheerioAPI, $main: Cheerio<any>) {
    this.$ = $;
    this.$main = $main;
  }

  static load(html: string): CheerioDoc {
    const $ = cheerioLoad(`<div role="main">${html}</div>`);
    return new CheerioDoc($, $("[role='main']"));
  }

  html(): string {
    return this.$main.html()!.trim();
  }

  expectHtml(expected: string): void {
    expect(this.html()).toEqual(expected.trim());
  }
}
