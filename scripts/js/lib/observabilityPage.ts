// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

export function extractEndpoints(json: string): Array<[string, string]> {
  const result: Array<[string, string]> = [];
  const data = JSON.parse(json);
  const paths = data.paths || "";

  const validMethods = ["get", "post", "delete", "patch"];

  for (const url in paths) {
    const methods = paths[url];
    for (const method in methods) {
      if (!validMethods.includes(method.toLowerCase())) {
        continue;
      }

      const endpoint = methods[method];
      const summary = endpoint.summary;

      const summaryText = `${summary} (\`${method.toUpperCase()} ${url}\`)`;

      if (!summary) {
        throw new Error(`Missing summary for endpoint: ${summaryText}`);
      }

      const ibmXEvents = endpoint["x-ibm-events"]?.events || [];

      for (const event of ibmXEvents) {
        const eventName = event.name;

        if (!eventName) {
          throw new Error(`Missing event name for endpoint: ${summaryText}`);
        }

        result.push([eventName, summaryText]);
      }
    }
  }
  result.sort();

  return result;
}

export function generateObservabilityTable(
  input: Array<[string, string]>,
): string {
  let markdown = `| Action | Description |\n| -- | -- |\n`;
  for (const [action, description] of input) {
    markdown += `| \`${action}\` | ${description} |\n`;
  }
  return markdown;
}
