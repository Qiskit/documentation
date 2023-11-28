# IBMQBackend

<span id="undefined" />

`IBMQBackend(configuration, provider, credentials, api_client)`

Bases: `qiskit.providers.backend.BackendV1`

Backend class interfacing with an IBM Quantum Experience device.

You can run experiments on a backend using the [`run()`](qiskit.providers.ibmq.IBMQBackend.run#qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run") method. The [`run()`](qiskit.providers.ibmq.IBMQBackend.run#qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run") method takes one or more [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") and returns an [`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob#qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.IBMQJob") instance that represents the submitted job. Each job has a unique job ID, which can later be used to retrieve the job. An example of this flow:

```python
from qiskit import IBMQ, assemble, transpile
from qiskit.circuit.random import random_circuit

provider = IBMQ.load_account()
backend = provider.backend.ibmq_vigo
qx = random_circuit(n_qubits=5, depth=4)
transpiled = transpile(qx, backend=backend)
job = backend.run(transpiled)
retrieved_job = backend.retrieve_job(job.job_id())
```

<Admonition title="Note" type="note">
  *   Unlike `qiskit.execute()`, the [`run()`](qiskit.providers.ibmq.IBMQBackend.run#qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run") method does not transpile the circuits/schedules for you, so be sure to do so before submitting them.
  *   You should not instantiate the `IBMQBackend` class directly. Instead, use the methods provided by an [`AccountProvider`](qiskit.providers.ibmq.AccountProvider#qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.AccountProvider") instance to retrieve and handle backends.
</Admonition>

Other methods return information about the backend. For example, the [`status()`](qiskit.providers.ibmq.IBMQBackend.status#qiskit.providers.ibmq.IBMQBackend.status "qiskit.providers.ibmq.IBMQBackend.status") method returns a [`BackendStatus`](qiskit.providers.models.BackendStatus#qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus") instance. The instance contains the `operational` and `pending_jobs` attributes, which state whether the backend is operational and also the number of jobs in the server queue for the backend, respectively:

```python
status = backend.status()
is_operational = status.operational
jobs_in_queue = status.pending_jobs
```

It is also possible to see the number of remaining jobs you are able to submit to the backend with the [`job_limit()`](qiskit.providers.ibmq.IBMQBackend.job_limit#qiskit.providers.ibmq.IBMQBackend.job_limit "qiskit.providers.ibmq.IBMQBackend.job_limit") method, which returns a [`BackendJobLimit`](qiskit.providers.ibmq.BackendJobLimit#qiskit.providers.ibmq.BackendJobLimit "qiskit.providers.ibmq.BackendJobLimit") instance:

```python
job_limit = backend.job_limit()
```

IBMQBackend constructor.

**Parameters**

*   **configuration** (`Union`\[`QasmBackendConfiguration`, `PulseBackendConfiguration`]) – Backend configuration.
*   **provider** (`AccountProvider`) – IBM Quantum Experience account provider
*   **credentials** (`Credentials`) – IBM Quantum Experience credentials.
*   **api\_client** (`AccountClient`) – IBM Quantum Experience client used to communicate with the server.

## Methods

|                                                                                                                                                                                                  |                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [`active_jobs`](qiskit.providers.ibmq.IBMQBackend.active_jobs#qiskit.providers.ibmq.IBMQBackend.active_jobs "qiskit.providers.ibmq.IBMQBackend.active_jobs")                                     | Return the unfinished jobs submitted to this backend.                       |
| [`configuration`](qiskit.providers.ibmq.IBMQBackend.configuration#qiskit.providers.ibmq.IBMQBackend.configuration "qiskit.providers.ibmq.IBMQBackend.configuration")                             | Return the backend configuration.                                           |
| [`defaults`](qiskit.providers.ibmq.IBMQBackend.defaults#qiskit.providers.ibmq.IBMQBackend.defaults "qiskit.providers.ibmq.IBMQBackend.defaults")                                                 | Return the pulse defaults for the backend.                                  |
| [`job_limit`](qiskit.providers.ibmq.IBMQBackend.job_limit#qiskit.providers.ibmq.IBMQBackend.job_limit "qiskit.providers.ibmq.IBMQBackend.job_limit")                                             | Return the job limit for the backend.                                       |
| [`jobs`](qiskit.providers.ibmq.IBMQBackend.jobs#qiskit.providers.ibmq.IBMQBackend.jobs "qiskit.providers.ibmq.IBMQBackend.jobs")                                                                 | Return the jobs submitted to this backend, subject to optional filtering.   |
| [`name`](qiskit.providers.ibmq.IBMQBackend.name#qiskit.providers.ibmq.IBMQBackend.name "qiskit.providers.ibmq.IBMQBackend.name")                                                                 | Return the backend name.                                                    |
| [`properties`](qiskit.providers.ibmq.IBMQBackend.properties#qiskit.providers.ibmq.IBMQBackend.properties "qiskit.providers.ibmq.IBMQBackend.properties")                                         | Return the backend properties, subject to optional filtering.               |
| [`provider`](qiskit.providers.ibmq.IBMQBackend.provider#qiskit.providers.ibmq.IBMQBackend.provider "qiskit.providers.ibmq.IBMQBackend.provider")                                                 | Return the backend Provider.                                                |
| [`remaining_jobs_count`](qiskit.providers.ibmq.IBMQBackend.remaining_jobs_count#qiskit.providers.ibmq.IBMQBackend.remaining_jobs_count "qiskit.providers.ibmq.IBMQBackend.remaining_jobs_count") | Return the number of remaining jobs that could be submitted to the backend. |
| [`reservations`](qiskit.providers.ibmq.IBMQBackend.reservations#qiskit.providers.ibmq.IBMQBackend.reservations "qiskit.providers.ibmq.IBMQBackend.reservations")                                 | Return backend reservations.                                                |
| [`retrieve_job`](qiskit.providers.ibmq.IBMQBackend.retrieve_job#qiskit.providers.ibmq.IBMQBackend.retrieve_job "qiskit.providers.ibmq.IBMQBackend.retrieve_job")                                 | Return a single job submitted to this backend.                              |
| [`run`](qiskit.providers.ibmq.IBMQBackend.run#qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run")                                                                     | Run on the backend.                                                         |
| [`set_options`](qiskit.providers.ibmq.IBMQBackend.set_options#qiskit.providers.ibmq.IBMQBackend.set_options "qiskit.providers.ibmq.IBMQBackend.set_options")                                     | Set the options fields for the backend                                      |
| [`status`](qiskit.providers.ibmq.IBMQBackend.status#qiskit.providers.ibmq.IBMQBackend.status "qiskit.providers.ibmq.IBMQBackend.status")                                                         | Return the backend status.                                                  |

## Attributes

<span id="undefined" />

### id\_warning\_issued

`= False`

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.ibmq.IBMQBackend.run#qiskit.providers.ibmq.IBMQBackend.run "qiskit.providers.ibmq.IBMQBackend.run") method.

<span id="undefined" />

### qobj\_warning\_issued

`= False`

<span id="undefined" />

### version

`= 1`
