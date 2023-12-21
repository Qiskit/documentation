---
title: retrieve_jobs
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs
---

# retrieve\_jobs

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs" />

`ManagedJobSet.retrieve_jobs(provider, refresh=False)`

Retrieve previously submitted jobs in this set.

**Parameters**

*   **provider** ([`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")) – Provider used for this job set.
*   **refresh** (`bool`) – If `True`, re-query the server for the job set. Otherwise return the cached value.

**Raises**

*   [**IBMQJobManagerUnknownJobSet**](qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet "qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet") – If the job set cannot be found.
*   [**IBMQJobManagerInvalidStateError**](qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError "qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError") – If jobs for this job set are found but have unexpected attributes.

**Return type**

`None`

