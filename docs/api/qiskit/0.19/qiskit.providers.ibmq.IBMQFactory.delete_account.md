---
title: delete_account
description: API reference for qiskit.providers.ibmq.IBMQFactory.delete_account
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQFactory.delete_account
---

# delete\_account

<span id="qiskit.providers.ibmq.IBMQFactory.delete_account" />

`static IBMQFactory.delete_account()`

Delete the saved account from disk.

**Raises**

*   [**IBMQAccountCredentialsNotFound**](qiskit.providers.ibmq.IBMQAccountCredentialsNotFound "qiskit.providers.ibmq.IBMQAccountCredentialsNotFound") – If no valid IBM Quantum Experience credentials can be found on disk.
*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found on disk.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found on disk.

**Return type**

`None`

