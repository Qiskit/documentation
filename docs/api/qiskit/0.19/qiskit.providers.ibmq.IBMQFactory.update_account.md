---
title: update_account
description: API reference for qiskit.providers.ibmq.IBMQFactory.update_account
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQFactory.update_account
---

# update\_account

<span id="qiskit.providers.ibmq.IBMQFactory.update_account" />

`static IBMQFactory.update_account(force=False)`

Interactive helper for migrating stored credentials to IBM Quantum Experience v2.

**Parameters**

**force** (`bool`) – If `True`, disable interactive prompts and perform the changes.

**Return type**

`Optional`\[[`Credentials`](qiskit.providers.ibmq.credentials.Credentials "qiskit.providers.ibmq.credentials.credentials.Credentials")]

**Returns**

The credentials for IBM Quantum Experience v2 if updating is successful or `None` otherwise.

