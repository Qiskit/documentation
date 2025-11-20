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

export class ExternalLink {
  readonly value: string;
  readonly originFiles: Set<string>;

  /**
   * linkString: Link as it appears in source file
   * originFiles: Paths to source file containing link
   */
  constructor(linkString: string, originFiles: string[]) {
    if (!linkString.startsWith("http")) {
      throw new Error(
        `Invalid ExternalLink, should start with 'http': ${linkString}`,
      );
    }

    // We strip anchors.
    this.value = linkString.split("#", 2)[0];
    this.originFiles = new Set(originFiles);
  }

  /**
   * Returns an error message if link failed.
   */
  async check(): Promise<string | undefined> {
    const result = await safeFetch(this.value);
    const error =
      "response" in result
        ? responseToErrorMessage(this.value, result.response)
        : `Failed to fetch '${this.value}': ${result.error.message}`;

    if (!error) {
      return;
    }

    const fileList = Array.from(this.originFiles)
      .sort()
      .map((originFile) => `    ${originFile}`);
    return `❌ ${error}. Appears in:\n${fileList.join("\n")}`;
  }
}

async function safeFetch(
  link: string,
): Promise<{ response: Response } | { error: Error }> {
  try {
    const response = await fetch(link, {
      headers: getHeaders(link),
      method: "HEAD",
    });
    return { response };
  } catch (err) {
    return { error: err as Error };
  }
}

function responseToErrorMessage(
  link: string,
  response: Response,
): string | undefined {
  const httpCode = response.status;
  const isOk = httpCode >= 100 && httpCode < 300;
  if (isOk) return undefined;

  const isRedirectLike = httpCode >= 300 && httpCode < 399;
  if (isRedirectLike) return undefined;

  if (httpCode === 404) return `Could not find link '${link}' (${httpCode})`;
  if (httpCode === 410) return `Link '${link}' has been removed (${httpCode})`;
  if (httpCode === 418) return `Link '${link}' is a teapot (${httpCode})`;

  return `Link '${link}' returned unexpected code: ${httpCode}`;
}

export function getHeaders(link: string): HeadersInit {
  const headers: HeadersInit = {
    "User-Agent": "qiskit-documentation-scripts",
  };

  if (
    link.startsWith("https://github.com") ||
    link.startsWith("https://api.github.com")
  ) {
    const ghToken = process.env.GITHUB_TOKEN;
    if (!ghToken) {
      throw new Error(
        "The env variable GITHUB_TOKEN is not set. You can get your token by running `gh auth token`.",
      );
    }
    headers["Authorization"] = `token ${ghToken}`;
  }

  return headers;
}
