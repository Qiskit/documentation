---
title: stored_account
description: API reference for qiskit.providers.ibmq.IBMQFactory.stored_account
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQFactory.stored_account
---

# stored\_account

<span id="qiskit.providers.ibmq.IBMQFactory.stored_account" />

`static IBMQFactory.stored_account()`

List the account stored on disk.

**Return type**

`Dict`\[`str`, `str`]

**Returns**

A dictionary with information about the account stored on disk.

**Raises**

*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found on disk.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found on disk.

