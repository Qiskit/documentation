# IBMQJobManager

<span id="undefined" />

`IBMQJobManager`

Bases: `object`

Job Manager for IBM Quantum Experience.

The Job Manager is a higher level mechanism for handling [`jobs`](qiskit.providers.ibmq.job.IBMQJob#qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.IBMQJob") composed of multiple circuits or pulse schedules. It splits the experiments into multiple jobs based on backend restrictions. When the jobs are finished, it collects and presents the results in a unified view.

You can use the [`run()`](qiskit.providers.ibmq.managed.IBMQJobManager.run#qiskit.providers.ibmq.managed.IBMQJobManager.run "qiskit.providers.ibmq.managed.IBMQJobManager.run") method to submit multiple experiments with the Job Manager:

```python
from qiskit import IBMQ, transpile
from qiskit.providers.ibmq.managed import IBMQJobManager
from qiskit.circuit.random import random_circuit

provider = IBMQ.load_account()
backend = provider.get_backend('ibmq_qasm_simulator')

# Build a thousand circuits.
circs = []
for _ in range(1000):
    circs.append(random_circuit(num_qubits=5, depth=4, measure=True))

# Need to transpile the circuits first.
circs = transpile(circs, backend=backend)

# Use Job Manager to break the circuits into multiple jobs.
job_manager = IBMQJobManager()
job_set_foo = job_manager.run(circs, backend=backend, name='foo')
```

The [`run()`](qiskit.providers.ibmq.managed.IBMQJobManager.run#qiskit.providers.ibmq.managed.IBMQJobManager.run "qiskit.providers.ibmq.managed.IBMQJobManager.run") method returns a [`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet#qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.ManagedJobSet") instance, which represents the set of jobs for the experiments. You can use the [`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet#qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.ManagedJobSet") methods, such as [`statuses()`](qiskit.providers.ibmq.managed.ManagedJobSet.statuses#qiskit.providers.ibmq.managed.ManagedJobSet.statuses "qiskit.providers.ibmq.managed.ManagedJobSet.statuses"), [`results()`](qiskit.providers.ibmq.managed.ManagedJobSet.results#qiskit.providers.ibmq.managed.ManagedJobSet.results "qiskit.providers.ibmq.managed.ManagedJobSet.results"), and [`error_messages()`](qiskit.providers.ibmq.managed.ManagedJobSet.error_messages#qiskit.providers.ibmq.managed.ManagedJobSet.error_messages "qiskit.providers.ibmq.managed.ManagedJobSet.error_messages") to get a combined view of the jobs in the set. For example:

```python
results = job_set_foo.results()
results.get_counts(5)  # Counts for experiment 5.
```

The [`job_set_id()`](qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id#qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id "qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id") method of [`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet#qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.ManagedJobSet") returns the job set ID, which can be used to retrieve the job set later:

```python
job_set_id = job_set_foo.job_set_id()
retrieved_foo = job_manager.retrieve_job_set(job_set_id=job_set_id, provider=provider)
```

IBMQJobManager constructor.

## Methods

|                                                                                                                                                                                                                   |                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`job_sets`](qiskit.providers.ibmq.managed.IBMQJobManager.job_sets#qiskit.providers.ibmq.managed.IBMQJobManager.job_sets "qiskit.providers.ibmq.managed.IBMQJobManager.job_sets")                                 | Return job sets being managed in this session, subject to optional filtering. |
| [`report`](qiskit.providers.ibmq.managed.IBMQJobManager.report#qiskit.providers.ibmq.managed.IBMQJobManager.report "qiskit.providers.ibmq.managed.IBMQJobManager.report")                                         | Return a report on the statuses of all jobs managed by this Job Manager.      |
| [`retrieve_job_set`](qiskit.providers.ibmq.managed.IBMQJobManager.retrieve_job_set#qiskit.providers.ibmq.managed.IBMQJobManager.retrieve_job_set "qiskit.providers.ibmq.managed.IBMQJobManager.retrieve_job_set") | Retrieve a previously submitted job set.                                      |
| [`run`](qiskit.providers.ibmq.managed.IBMQJobManager.run#qiskit.providers.ibmq.managed.IBMQJobManager.run "qiskit.providers.ibmq.managed.IBMQJobManager.run")                                                     | Execute a set of circuits or pulse schedules on a backend.                    |
