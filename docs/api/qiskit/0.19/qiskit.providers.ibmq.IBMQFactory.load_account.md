---
title: load_account
description: API reference for qiskit.providers.ibmq.IBMQFactory.load_account
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQFactory.load_account
---

# load\_account

<span id="qiskit.providers.ibmq.IBMQFactory.load_account" />

`IBMQFactory.load_account()`

Authenticate against IBM Quantum Experience from stored credentials.

**Return type**

`Optional`\[[`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")]

**Returns**

If the configuration file specifies a default provider, it is returned. Otherwise the provider for the open access project is returned.

**Raises**

*   [**IBMQAccountCredentialsInvalidFormat**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidFormat") – If the default provider stored on disk could not be parsed.
*   [**IBMQAccountCredentialsNotFound**](qiskit.providers.ibmq.IBMQAccountCredentialsNotFound "qiskit.providers.ibmq.IBMQAccountCredentialsNotFound") – If no IBM Quantum Experience credentials can be found.
*   [**IBMQAccountMultipleCredentialsFound**](qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound "qiskit.providers.ibmq.IBMQAccountMultipleCredentialsFound") – If multiple IBM Quantum Experience credentials are found.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If invalid IBM Quantum Experience credentials are found.
*   [**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If the default provider stored on disk could not be found.

