---
title: retrieve_job_set
description: API reference for qiskit.providers.ibmq.managed.IBMQJobManager.retrieve_job_set
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.IBMQJobManager.retrieve_job_set
---

# retrieve\_job\_set

<span id="qiskit.providers.ibmq.managed.IBMQJobManager.retrieve_job_set" />

`IBMQJobManager.retrieve_job_set(job_set_id, provider, refresh=False)`

Retrieve a previously submitted job set.

**Parameters**

*   **job\_set\_id** (`str`) – Job set ID.
*   **provider** ([`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")) – Provider used for this job set.
*   **refresh** (`bool`) – If `True`, re-query the server for the job set information. Otherwise return the cached value.

**Return type**

[`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.managedjobset.ManagedJobSet")

**Returns**

Retrieved job set.

**Raises**

*   [**IBMQJobManagerUnknownJobSet**](qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet "qiskit.providers.ibmq.managed.IBMQJobManagerUnknownJobSet") – If the job set cannot be found.
*   [**IBMQJobManagerInvalidStateError**](qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError "qiskit.providers.ibmq.managed.IBMQJobManagerInvalidStateError") – If jobs for this job set are found but have unexpected attributes.

