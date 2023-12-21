---
title: IBMQBackendService
description: API reference for qiskit.providers.ibmq.IBMQBackendService
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.IBMQBackendService
---

# IBMQBackendService

<span id="qiskit.providers.ibmq.IBMQBackendService" />

`IBMQBackendService(provider)`

Backend namespace for an IBM Quantum Experience account provider.

Represent a namespace that provides backend related services for the IBM Quantum Experience backends available to this provider. An instance of this class is used as a callable attribute to the [`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.AccountProvider") class. This allows a convenient way to query for all backends or to access a specific backend:

```python
backends = provider.backends()  # Invoke backends() to get the backends.
sim_backend = provider.backends.ibmq_qasm_simulator  # Get a specific backend instance.
```

Also, you are able to retrieve jobs from a provider without specifying the backend name. For example, to retrieve the ten most recent jobs you have submitted, regardless of the backend they were submitted to, you could do:

```python
most_recent_jobs = provider.backends.jobs(limit=10)
```

It is also possible to retrieve a single job without specifying the backend name:

```python
job = provider.backends.retrieve_job(<JOB_ID>)
```

IBMQBackendService constructor.

**Parameters**

**provider** ([`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")) – IBM Quantum Experience account provider.

## Methods

|                                                                                                                                                             |                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`IBMQBackendService.__call__`](qiskit.providers.ibmq.IBMQBackendService.__call__ "qiskit.providers.ibmq.IBMQBackendService.__call__")(\[name, filters, …]) | Return all backends accessible via this provider, subject to optional filtering. |
| [`IBMQBackendService.jobs`](qiskit.providers.ibmq.IBMQBackendService.jobs "qiskit.providers.ibmq.IBMQBackendService.jobs")(\[limit, skip, …])               | Return a list of jobs, subject to optional filtering.                            |
| [`IBMQBackendService.retrieve_job`](qiskit.providers.ibmq.IBMQBackendService.retrieve_job "qiskit.providers.ibmq.IBMQBackendService.retrieve_job")(job\_id) | Return a single job.                                                             |

