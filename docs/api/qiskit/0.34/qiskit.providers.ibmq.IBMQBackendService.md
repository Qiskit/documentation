# IBMQBackendService

<span id="undefined" />

`IBMQBackendService(provider)`

Bases: `object`

Backend namespace for an IBM Quantum Experience account provider.

Represent a namespace that provides backend related services for the IBM Quantum Experience backends available to this provider. An instance of this class is used as a callable attribute to the [`AccountProvider`](qiskit.providers.ibmq.AccountProvider#qiskit.providers.ibmq.AccountProvider "qiskit.providers.ibmq.AccountProvider") class. This allows a convenient way to query for all backends or to access a specific backend:

```python
backends = provider.backends()  # Invoke backends() to get the backends.
sim_backend = provider.backend.ibmq_qasm_simulator  # Get a specific backend instance.
```

Also, you are able to retrieve jobs from a provider without specifying the backend name. For example, to retrieve the ten most recent jobs you have submitted, regardless of the backend they were submitted to, you could do:

```python
most_recent_jobs = provider.backend.jobs(limit=10)
```

It is also possible to retrieve a single job without specifying the backend name:

```python
job = provider.backend.retrieve_job(<JOB_ID>)
```

IBMQBackendService constructor.

**Parameters**

**provider** (`AccountProvider`) – IBM Quantum Experience account provider.

## Methods

|                                                                                                                                                                                                   |                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`backends`](qiskit.providers.ibmq.IBMQBackendService.backends#qiskit.providers.ibmq.IBMQBackendService.backends "qiskit.providers.ibmq.IBMQBackendService.backends")                             | Return all backends accessible via this provider, subject to optional filtering. |
| [`jobs`](qiskit.providers.ibmq.IBMQBackendService.jobs#qiskit.providers.ibmq.IBMQBackendService.jobs "qiskit.providers.ibmq.IBMQBackendService.jobs")                                             | Return a list of jobs, subject to optional filtering.                            |
| [`my_reservations`](qiskit.providers.ibmq.IBMQBackendService.my_reservations#qiskit.providers.ibmq.IBMQBackendService.my_reservations "qiskit.providers.ibmq.IBMQBackendService.my_reservations") | Return your upcoming reservations.                                               |
| [`retrieve_job`](qiskit.providers.ibmq.IBMQBackendService.retrieve_job#qiskit.providers.ibmq.IBMQBackendService.retrieve_job "qiskit.providers.ibmq.IBMQBackendService.retrieve_job")             | Return a single job.                                                             |
