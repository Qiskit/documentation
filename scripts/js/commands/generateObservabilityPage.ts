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

import { writeFile } from "fs/promises";

import {
  generateObservabilityTable,
  extractEndpoints,
} from "../lib/observabilityPage";

export const RUNTIME_API_TITLE = "Qiskit Runtime";
export const QUANTUM_SYSTEM_API_TITLE = "the IBM Quantum System service";
type OpenapiPkgTitle =
  | typeof RUNTIME_API_TITLE
  | typeof QUANTUM_SYSTEM_API_TITLE;

const PACKAGE_TO_URL: Record<OpenapiPkgTitle, string> = {
  [RUNTIME_API_TITLE]: "https://quantum.cloud.ibm.com/api/openapi.json",
  [QUANTUM_SYSTEM_API_TITLE]:
    "https://quantum.cloud.ibm.com/endpoints-docs-learning/api/quantum-system-rest/openapi/latest",
};

async function main() {
  await writeObservabilityFile(
    RUNTIME_API_TITLE,
    "docs/guides/observability-runtime-rest.mdx",
  );
  await writeObservabilityFile(
    QUANTUM_SYSTEM_API_TITLE,
    "docs/guides/observability-quantum-system.mdx",
  );
}

function maybeAddPkgTitleRegisteredIcon(pkgTitle: string) {
  return pkgTitle.replace("IBM", "IBM&reg;");
}

async function writeObservabilityFile(
  pkgTitle: OpenapiPkgTitle,
  destPath: string,
) {
  const response = await fetch(PACKAGE_TO_URL[pkgTitle]);
  const jsonstr = await response.text();
  const endpoints = extractEndpoints(jsonstr);
  const table = generateObservabilityTable(endpoints);
  const mdx = `${getProse(pkgTitle)}\n${table}`;
  await writeFile(destPath, mdx, "utf8");
  console.log(`✅ Wrote ${destPath}`);
}

const RUNTIME_REGION_SECTION = `
## Locations where activity tracking events are generated

${RUNTIME_API_TITLE} sends activity tracking events in the following regions:

- Washington ("us-east")
- Frankfurt ("eu-de")
`;

function getProse(pkgTitle: OpenapiPkgTitle): string {
  return `---
title: Activity tracking events for ${pkgTitle}
description: Learn about activity tracking events for ${pkgTitle}.
---

# Activity tracking events for ${pkgTitle}

IBM Cloud&reg; services, such as ${maybeAddPkgTitleRegisteredIcon(pkgTitle)}, generate activity tracking events.

Activity tracking events report on activities that change the state of a service in IBM Cloud. You can use the events to investigate abnormal activity and critical actions and to comply with regulatory audit requirements.

You can use IBM Cloud Activity Tracker Event Routing, a platform service, to route auditing events in your account to destinations of your choice by configuring targets and routes that define where activity tracking events are sent. For more information, see [About IBM Cloud Activity Tracker Events Routing](https://cloud.ibm.com/docs/atracker?topic=atracker-about).

You can use IBM Cloud Logs to visualize and alert on events that are generated in your account and routed by IBM Cloud Activity Tracker Event Routing to an IBM Cloud Logs instance.
${pkgTitle == RUNTIME_API_TITLE ? RUNTIME_REGION_SECTION : ""}
## Viewing activity tracking events for ${pkgTitle}

You can use IBM Cloud Logs to visualize and alert on events that are generated in your account and routed by IBM Cloud Activity Tracker Event Routing to an IBM Cloud Logs instance.

### Launching IBM Cloud Logs from the Observability page

For information on launching the IBM Cloud Logs UI, see the [Launching the UI](https://cloud.ibm.com/docs/cloud-logs?topic=cloud-logs-instance-launch#instance-launch-cloud-ui) in the IBM Cloud Logs documentation.
`;
}

main().then(() => process.exit());
