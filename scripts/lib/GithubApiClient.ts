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

import { merge } from 'lodash';

export class GithubApiClient {
  token: string;
  baseUrl: string;

  constructor(options: { token: string; domain: 'public' | 'ibm' }) {
    this.token = options.token;
    this.baseUrl = options.domain === 'public' ? 'api.github.com' : 'github.ibm.com/api/v3';
  }

  getReleases(options: { slug: string }) {
    const { slug } = options;
    return this.fetch<GithubRelease[]>(`repos/${slug}/releases`);
  }


  private getUrl(url: string) {
    if (url.startsWith('https:')) return url;
    return `https://${this.baseUrl}/${url}`;
  }

  private async fetch<Response>(url: string, options?: RequestInit) {
    const response = await fetch(
      this.getUrl(url),
      merge(
        {
          headers: {
            Authorization: `token ${this.token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        },
        options
      )
    );
    if (!response.ok) {
      console.error(response);
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return (await response.json()) as Promise<Response>;
  }
}

type GithubRelease = {
  url: string;
  html_url: string;
  assets_url: string;
  upload_url: string;
  tarball_url: string;
  zipball_url: string;
  id: number;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  author: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  assets: Array<{
    url: string;
    browser_download_url: string;
    id: number;
    node_id: string;
    name: string;
    label: string;
    state: string;
    content_type: string;
    size: number;
    download_count: number;
    created_at: string;
    updated_at: string;
    uploader: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
  }>;
};
