---
title: IBMQFactory
description: API reference for qiskit.providers.ibmq.IBMQFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.IBMQFactory
---

# IBMQFactory

<span id="qiskit.providers.ibmq.IBMQFactory" />

`IBMQFactory`

Factory and account manager for IBM Quantum Experience.

IBMQFactory constructor.

## Methods

|                                                                                                                                                       |                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`IBMQFactory.active_account`](qiskit.providers.ibmq.IBMQFactory.active_account "qiskit.providers.ibmq.IBMQFactory.active_account")()                 | Return the IBM Quantum Experience account currently in use for the session.       |
| [`IBMQFactory.delete_account`](qiskit.providers.ibmq.IBMQFactory.delete_account "qiskit.providers.ibmq.IBMQFactory.delete_account")()                 | Delete the saved account from disk.                                               |
| [`IBMQFactory.disable_account`](qiskit.providers.ibmq.IBMQFactory.disable_account "qiskit.providers.ibmq.IBMQFactory.disable_account")()              | Disable the account currently in use for the session.                             |
| [`IBMQFactory.enable_account`](qiskit.providers.ibmq.IBMQFactory.enable_account "qiskit.providers.ibmq.IBMQFactory.enable_account")(token\[, url, …]) | Authenticate against IBM Quantum Experience for use during the session.           |
| [`IBMQFactory.get_provider`](qiskit.providers.ibmq.IBMQFactory.get_provider "qiskit.providers.ibmq.IBMQFactory.get_provider")(\[hub, group, project]) | Return a provider for a single hub/group/project combination.                     |
| [`IBMQFactory.load_account`](qiskit.providers.ibmq.IBMQFactory.load_account "qiskit.providers.ibmq.IBMQFactory.load_account")()                       | Authenticate against IBM Quantum Experience from stored credentials.              |
| [`IBMQFactory.providers`](qiskit.providers.ibmq.IBMQFactory.providers "qiskit.providers.ibmq.IBMQFactory.providers")(\[hub, group, project])          | Return a list of providers, subject to optional filtering.                        |
| [`IBMQFactory.save_account`](qiskit.providers.ibmq.IBMQFactory.save_account "qiskit.providers.ibmq.IBMQFactory.save_account")(token\[, url, hub, …])  | Save the account to disk for future use.                                          |
| [`IBMQFactory.stored_account`](qiskit.providers.ibmq.IBMQFactory.stored_account "qiskit.providers.ibmq.IBMQFactory.stored_account")()                 | List the account stored on disk.                                                  |
| [`IBMQFactory.update_account`](qiskit.providers.ibmq.IBMQFactory.update_account "qiskit.providers.ibmq.IBMQFactory.update_account")(\[force])         | Interactive helper for migrating stored credentials to IBM Quantum Experience v2. |

