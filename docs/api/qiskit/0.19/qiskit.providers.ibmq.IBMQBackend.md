---
title: IBMQBackend
description: API reference for qiskit.providers.ibmq.IBMQBackend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.IBMQBackend
---

# IBMQBackend

<span id="qiskit.providers.ibmq.IBMQBackend" />

`IBMQBackend(configuration, provider, credentials, api)`

Backend class interfacing with an IBM Quantum Experience device.

You can run experiments on a backend using the [`run()`](qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run") method after assembling them into the [`Qobj`](qiskit.qobj.Qobj "qiskit.qobj.Qobj") format. The [`run()`](qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run") method returns an [`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.IBMQJob") instance that represents the submitted job. Each job has a unique job ID, which can later be used to retrieve the job. An example of this flow:

```python
from qiskit import IBMQ, assemble, transpile
from qiskit.circuit.random import random_circuit

provider = IBMQ.load_account()
backend = provider.backends.ibmq_vigo
qx = random_circuit(n_qubits=5, depth=4)
qobj = assemble(transpile(qx, backend=backend), backend=backend)
job = backend.run(qobj)
retrieved_job = backend.retrieve_job(job.job_id())
```

<Admonition title="Note" type="note">
  You should not instantiate the `IBMQBackend` class directly. Instead, use the methods provided by an [`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.AccountProvider") instance to retrieve and handle backends.
</Admonition>

Other methods return information about the backend. For example, the [`status()`](qiskit.providers.ibmq.IBMQBackend.status "qiskit.providers.ibmq.IBMQBackend.status") method returns a [`BackendStatus`](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus") instance. The instance contains the `operational` and `pending_jobs` attributes, which state whether the backend is operational and also the number of jobs in the server queue for the backend, respectively:

```python
status = backend.status()
is_operational = status.operational
jobs_in_queue = status.pending_jobs
```

It is also possible to see the number of remaining jobs you are able to submit to the backend with the [`job_limit()`](qiskit.providers.ibmq.IBMQBackend.job_limit "qiskit.providers.ibmq.IBMQBackend.job_limit") method, which returns a [`BackendJobLimit`](qiskit.providers.ibmq.BackendJobLimit "qiskit.providers.ibmq.BackendJobLimit") instance:

```python
job_limit = backend.job_limit()
```

IBMQBackend constructor.

**Parameters**

*   **configuration** (`Union`\[[`QasmBackendConfiguration`](qiskit.providers.models.QasmBackendConfiguration "qiskit.providers.models.backendconfiguration.QasmBackendConfiguration"), [`PulseBackendConfiguration`](qiskit.providers.models.PulseBackendConfiguration "qiskit.providers.models.backendconfiguration.PulseBackendConfiguration")]) – Backend configuration.
*   **provider** ([`AccountProvider`](qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.accountprovider.AccountProvider")) – IBM Quantum Experience account provider
*   **credentials** ([`Credentials`](qiskit.providers.ibmq.credentials.Credentials "qiskit.providers.ibmq.credentials.credentials.Credentials")) – IBM Quantum Experience credentials.
*   **api** (`AccountClient`) – IBM Quantum Experience client used to communicate with the server.

## Methods

|                                                                                                                                                         |                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`IBMQBackend.active_jobs`](qiskit.providers.ibmq.IBMQBackend.active_jobs "qiskit.providers.ibmq.IBMQBackend.active_jobs")(\[limit])                    | Return the unfinished jobs submitted to this backend.                       |
| [`IBMQBackend.configuration`](qiskit.providers.ibmq.IBMQBackend.configuration "qiskit.providers.ibmq.IBMQBackend.configuration")()                      | Return the backend configuration.                                           |
| [`IBMQBackend.defaults`](qiskit.providers.ibmq.IBMQBackend.defaults "qiskit.providers.ibmq.IBMQBackend.defaults")(\[refresh])                           | Return the pulse defaults for the backend.                                  |
| [`IBMQBackend.job_limit`](qiskit.providers.ibmq.IBMQBackend.job_limit "qiskit.providers.ibmq.IBMQBackend.job_limit")()                                  | Return the job limit for the backend.                                       |
| [`IBMQBackend.jobs`](qiskit.providers.ibmq.IBMQBackend.jobs "qiskit.providers.ibmq.IBMQBackend.jobs")(\[limit, skip, status, …])                        | Return the jobs submitted to this backend, subject to optional filtering.   |
| [`IBMQBackend.name`](qiskit.providers.ibmq.IBMQBackend.name "qiskit.providers.ibmq.IBMQBackend.name")()                                                 | Return the backend name.                                                    |
| [`IBMQBackend.properties`](qiskit.providers.ibmq.IBMQBackend.properties "qiskit.providers.ibmq.IBMQBackend.properties")(\[refresh, datetime])           | Return the backend properties, subject to optional filtering.               |
| [`IBMQBackend.provider`](qiskit.providers.ibmq.IBMQBackend.provider "qiskit.providers.ibmq.IBMQBackend.provider")()                                     | Return the backend Provider.                                                |
| [`IBMQBackend.remaining_jobs_count`](qiskit.providers.ibmq.IBMQBackend.remaining_jobs_count "qiskit.providers.ibmq.IBMQBackend.remaining_jobs_count")() | Return the number of remaining jobs that could be submitted to the backend. |
| [`IBMQBackend.retrieve_job`](qiskit.providers.ibmq.IBMQBackend.retrieve_job "qiskit.providers.ibmq.IBMQBackend.retrieve_job")(job\_id)                  | Return a single job submitted to this backend.                              |
| [`IBMQBackend.run`](qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run")(qobj\[, job\_name, …])                               | Run a Qobj asynchronously.                                                  |
| [`IBMQBackend.status`](qiskit.providers.ibmq.IBMQBackend.status "qiskit.providers.ibmq.IBMQBackend.status")()                                           | Return the backend status.                                                  |
| [`IBMQBackend.version`](qiskit.providers.ibmq.IBMQBackend.version "qiskit.providers.ibmq.IBMQBackend.version")()                                        | Return the backend version.                                                 |

