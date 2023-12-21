---
title: providers
description: API reference for qiskit.providers.ibmq.IBMQFactory.providers
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQFactory.providers
---

# providers

<span id="qiskit.providers.ibmq.IBMQFactory.providers" />

`IBMQFactory.providers(hub=None, group=None, project=None)`

Return a list of providers, subject to optional filtering.

**Parameters**

*   **hub** (`Optional`\[`str`]) – Name of the hub.
*   **group** (`Optional`\[`str`]) – Name of the group.
*   **project** (`Optional`\[`str`]) – Name of the project.

**Return type**

`List`\[[`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")]

**Returns**

A list of providers that match the specified criteria.

