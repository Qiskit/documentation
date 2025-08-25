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

const OPENAPI_URL = "https://quantum.cloud.ibm.com/api/openapi.json";

const PROSE = `---
title: Activity tracking events for Qiskit Runtime
description: Learn about activity tracking events for Qiskit Runtime. 
---

# Activity tracking events for Qiskit Runtime

IBM Cloud&reg; services, such as Qiskit Runtime, generate activity tracking events.

Activity tracking events report on activities that change the state of a service in IBM Cloud. You can use the events to investigate abnormal activity and critical actions and to comply with regulatory audit requirements.

You can use IBM Cloud Activity Tracker Event Routing, a platform service, to route auditing events in your account to destinations of your choice by configuring targets and routes that define where activity tracking events are sent. For more information, see [About IBM Cloud Activity Tracker Events Routing.](https://cloud.ibm.com/docs/atracker?topic=atracker-about)

You can use IBM Cloud Logs to visualize and alert on events that are generated in your account and routed by IBM Cloud Activity Tracker Event Routing to an IBM Cloud Logs instance.

## Locations where activity tracking events are generated

Qiskit Runtime sends activity tracking events in the following regions:

- Washington ("us-east")
- Frankfurt ("eu-de")

## Viewing activity tracking events for Qiskit Runtime

You can use IBM Cloud Logs to visualize and alert on events that are generated in your account and routed by IBM Cloud Activity Tracker Event Routing to an IBM Cloud Logs instance.

### Launching IBM Cloud Logs from the Observability page

For information on launching the IBM Cloud Logs UI, see the [Launching the UI](https://cloud.ibm.com/docs/cloud-logs?topic=cloud-logs-instance-launch#instance-launch-cloud-ui) in the IBM Cloud Logs documentation.
`;

async function main() {
  const response = await fetch(OPENAPI_URL);
  const jsonstr = await response.text();
  const endpoints = extractEndpoints(jsonstr);
  const table = generateObservabilityTable(endpoints);
  const mdx = `${PROSE}\n${table}`;
  await writeFile("docs/security/observability.mdx", mdx, "utf8");
  console.log("✅ Wrote docs/security/observability.mdx");
}

main().then(() => process.exit());
