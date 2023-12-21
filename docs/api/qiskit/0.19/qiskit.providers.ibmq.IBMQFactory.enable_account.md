---
title: enable_account
description: API reference for qiskit.providers.ibmq.IBMQFactory.enable_account
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQFactory.enable_account
---

# enable\_account

<span id="qiskit.providers.ibmq.IBMQFactory.enable_account" />

`IBMQFactory.enable_account(token, url='https://auth.quantum-computing.ibm.com/api', hub=None, group=None, project=None, **kwargs)`

Authenticate against IBM Quantum Experience for use during the session.

<Admonition title="Note" type="note">
  With version 0.4 of this `qiskit-ibmq-provider` package, use of the legacy Quantum Experience and Qconsole (also known as the IBM Quantum Experience v1) credentials is no longer supported.
</Admonition>

**Parameters**

*   **token** (`str`) – IBM Quantum Experience token.

*   **url** (`str`) – URL for the IBM Quantum Experience authentication server.

*   **hub** (`Optional`\[`str`]) – Name of the hub to use.

*   **group** (`Optional`\[`str`]) – Name of the group to use.

*   **project** (`Optional`\[`str`]) – Name of the project to use.

*   **\*\*kwargs** –

    Additional settings for the connection:

    *   proxies (dict): proxy configuration.
    *   verify (bool): verify the server’s TLS certificate.

**Return type**

`Optional`\[[`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")]

**Returns**

If hub, group, and project are specified, the corresponding provider is returned. Otherwise the provider for the open access project is returned.

**Raises**

*   [**IBMQAccountError**](qiskit.providers.ibmq.IBMQAccountError "qiskit.providers.ibmq.IBMQAccountError") – If an IBM Quantum Experience account is already in use for the session.
*   [**IBMQAccountCredentialsInvalidUrl**](qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl "qiskit.providers.ibmq.IBMQAccountCredentialsInvalidUrl") – If the URL specified is not a valid IBM Quantum Experience authentication URL.
*   [**IBMQProviderError**](qiskit.providers.ibmq.IBMQProviderError "qiskit.providers.ibmq.IBMQProviderError") – If no provider matches the specified criteria, or more than one provider matches the specified criteria.

