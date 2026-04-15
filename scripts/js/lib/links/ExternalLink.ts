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

    // Normalize URL to handle escape characters, then strip anchors
    try {
      const normalized = new URL(linkString).href;
      this.value = normalized.split("#", 2)[0];
    } catch {
      // If URL parsing fails, fall back to original behavior
      this.value = linkString.split("#", 2)[0];
    }
    this.originFiles = new Set(originFiles);
  }

  /**
   * Returns an error message if link failed.
   */
  async check(): Promise<string | undefined> {
    // Try HEAD request first (faster, less bandwidth)
    let result = await safeFetch(this.value, "HEAD");

    // If HEAD returns 405 (Method Not Allowed) or 501 (Not Implemented),
    // retry with GET as many servers don't support HEAD for PDFs and binary files
    if ("response" in result && shouldRetryWithGet(result.response.status)) {
      result = await safeFetch(this.value, "GET");
    }

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
  method: "HEAD" | "GET" = "HEAD",
): Promise<{ response: Response } | { error: Error }> {
  try {
    // Normalize URL to handle encoding issues
    const normalizedUrl = new URL(link).href;
    
    const response = await fetch(normalizedUrl, {
      headers: getHeaders(link),
      method: method,
      // For GET requests, we only need headers to check if link is valid
      // Using signal to abort after receiving headers saves bandwidth
      signal: method === "GET" ? AbortSignal.timeout(10000) : undefined,
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
  
  // Accept 1xx-3xx as valid (including redirects)
  // Accept 403 as potentially valid (resource exists but access is forbidden)
  // Accept 429 as valid (resource exists but we're being rate limited)
  const isOk = (httpCode >= 100 && httpCode < 400) || httpCode === 403 || httpCode === 429;
  if (isOk) return undefined;

  if (httpCode === 404) return `Could not find link '${link}' (${httpCode})`;
  if (httpCode === 410) return `Link '${link}' has been removed (${httpCode})`;

  return `Link '${link}' returned unexpected code: ${httpCode}`;
}

function shouldRetryWithGet(status: number): boolean {
  // Retry with GET when HEAD is not supported
  return status === 405 || status === 501;
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
