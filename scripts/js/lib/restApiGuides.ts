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

const validMethods = ["get", "post", "delete", "patch"];

// Extracts named items from an OpenAPI extension on each endpoint, such as
// `x-ibm-events.events[].name` or `x-ibm-permissions.actions[].name`.
export function extractEndpoints(
  json: string,
  extensionKey: string,
  itemsKey: string,
): Array<[string, string]> {
  const result: Array<[string, string]> = [];
  const data = JSON.parse(json);
  const paths = data.paths || "";
  for (const url in paths) {
    const methods = paths[url];
    for (const method in methods) {
      if (!validMethods.includes(method.toLowerCase())) {
        continue;
      }
      const operationObject = methods[method];

      const summary = operationObject.summary;
      const summaryText = `${summary} (\`${method.toUpperCase()} ${url}\`)`;
      if (!summary) {
        throw new Error(`Missing summary for endpoint: ${summaryText}`);
      }

      const items = operationObject[extensionKey]?.[itemsKey] || [];
      for (const item of items) {
        const name = item.name;
        if (!name) {
          throw new Error(`Missing name for endpoint: ${summaryText}`);
        }

        result.push([name, summaryText]);
      }
    }
  }
  result.sort();

  return result;
}

export function generateTable(
  input: Array<[string, string]>,
  leftHeader: string,
  rightHeader: string,
): string {
  let markdown = `| ${leftHeader} | ${rightHeader} |\n| -- | -- |\n`;
  for (const [name, description] of input) {
    markdown += `| \`${name}\` | ${description} |\n`;
  }
  return markdown;
}
