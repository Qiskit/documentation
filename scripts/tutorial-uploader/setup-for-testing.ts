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

import { API } from "./lib/api";
import { createItem } from "@directus/sdk";

if (/learning-api\.quantum\.ibm\.com/.test(process.env.LEARNING_API_URL!)) {
  throw new Error(
    "Tried to run setup against production! Set the env var LEARNING_API_URL to either staging or local (see tutorial-uploader/README.md)",
  );
}

/* If these change, make sure to update tutorials/learning-api.conf.yaml */
const TOPICS = [
  "Chemistry",
  "Dynamic circuits",
  "Error mitigation",
  "Optimization",
  "Qiskit Patterns",
  "Scheduling",
  "Transpilation",
];

const CATEGORIES = ["Workflow example", "How-to"];

async function main() {
  const api = new API();

  for (const topicName of TOPICS) {
    if (!(await api.getId("tutorials_topics", "name", topicName))) {
      console.log(`Creating tutorial topic '${topicName}'...`);
      await api.client.request(
        createItem("tutorials_topics", { name: topicName }),
      );
    }
  }

  for (const categoryName of CATEGORIES) {
    if (!(await api.getId("tutorials_categories", "name", categoryName))) {
      console.log(`Creating tutorial category '${categoryName}'...`);
      await api.client.request(
        createItem("tutorials_categories", { name: categoryName }),
      );
    }
  }
}

main().then(() => process.exit());
