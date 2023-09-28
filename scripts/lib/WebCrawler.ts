// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { load } from 'cheerio';
import PQueue from 'p-queue';

export class WebCrawler {
  private initialUrls: string[];
  private followUrl: (url: string, baseUrl: string) => boolean;
  private retryUrl?: (url: string) => boolean;
  private onSuccess: (url: string, content: string) => void;
  private onError?: (url: string, error: unknown) => void;
  private onSkip?: (url: string, reason: string) => void;

  private queue: PQueue;
  private parsedUrls = new Set<string>();
  private pendingUrls = new Set<string>();
  private linkSelector: string;

  constructor(options: {
    initialUrls: string[];
    linkSelector?: string;
    retryUrl?: (url: string) => boolean;
    followUrl: (linkUrl: string, baseUrl: string) => boolean;
    onSuccess: (url: string, content: string) => Promise<void>;
    onSkip?: (url: string, reason: string) => void;
    onError?: (url: string, error: unknown) => void;
    concurrency?: number;
  }) {
    this.initialUrls = options.initialUrls;
    this.followUrl = options.followUrl;
    this.retryUrl = options.retryUrl;
    this.onSuccess = options.onSuccess;
    this.onError = options.onError;
    this.onSkip = options.onSkip;
    this.queue = new PQueue({ concurrency: 4 });
    this.linkSelector = options.linkSelector ?? 'a';
  }

  async run() {
    return new Promise((resolve) => {
      this.queue.once('idle', resolve);
      this.queueUrls(this.initialUrls);
    });
  }

  private async queueUrl(url: string) {
    if (this.pendingUrls.has(url) || this.parsedUrls.has(url)) return;

    this.pendingUrls.add(url);
    this.queue.add(() => this.processUrl(url));
  }

  private async queueUrls(urls: string[]) {
    for (const url of urls) {
      this.queueUrl(url);
    }
  }

  private async processUrl(url: string) {
    this.parsedUrls.add(url);
    this.pendingUrls.delete(url);

    try {
      let response = await fetch(url);

      if (!response.ok && this.retryUrl?.(url)) {
        response = await fetch(url);
      }

      if (response.ok) {
        if (!response.headers.get('content-type')?.includes('text/html')) {
          this.onSkip?.(url, 'Not html');
          return;
        }

        // download file
        const html = await response.text();
        await this.onSuccess(url, html);

        // extract link and queue links that needs to be followed
        const links = this.extractLinks(url, html);
        const linksToParse = links.filter((link) => this.followUrl(link, url));
        this.queueUrls(linksToParse);
      } else {
        this.onError?.(url, response);
      }
    } catch (e) {
      this.onError?.(url, e);
    }
  }

  private extractLinks(url: string, html: string): string[] {
    const $ = load(html);
    const links = $(this.linkSelector)
      .toArray()
      .flatMap((el) => {
        const $el = $(el);
        const href = $el.attr('href');
        if (!href) return [];

        const parsedUrl = new URL(href, url);
        parsedUrl.hash = '';
        return [parsedUrl.toString()];
      });
    return links;
  }
}
