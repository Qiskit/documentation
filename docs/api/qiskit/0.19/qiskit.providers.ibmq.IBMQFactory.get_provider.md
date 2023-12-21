---
title: get_provider
description: API reference for qiskit.providers.ibmq.IBMQFactory.get_provider
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQFactory.get_provider
---

# get\_provider

<span id="qiskit.providers.ibmq.IBMQFactory.get_provider" />

`IBMQFactory.get_provider(hub=None, group=None, project=None)`

Return a provider for a single hub/group/project combination.

**Parameters**

*   **hub** (`Optional`\[`str`]) – Name of the hub.
*   **group** (`Optional`\[`str`]) – Name of the group.
*   **project** (`Optional`\[`str`]) – Name of the project.

**Return type**

[`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")

**Returns**

A provider that matches the specified criteria.

**Raises**

[**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If no provider matches the specified criteria, or more than one provider matches the specified criteria.

