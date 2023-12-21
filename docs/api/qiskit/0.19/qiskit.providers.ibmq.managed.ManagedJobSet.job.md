---
title: job
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.job
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.job
---

# job

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.job" />

`ManagedJobSet.job(experiment)`

Retrieve the job used to submit the specified experiment and its index.

For example, if [`IBMQJobManager`](qiskit.providers.ibmq.managed.IBMQJobManager "qiskit.providers.ibmq.managed.IBMQJobManager") is used to submit 1000 experiments, and [`IBMQJobManager`](qiskit.providers.ibmq.managed.IBMQJobManager "qiskit.providers.ibmq.managed.IBMQJobManager") divides them into 2 jobs: job 1 has experiments 0-499, and job 2 has experiments 500-999. In this case `job_set.job(501)` will return `(job2, 1)`.

**Parameters**

**experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) –

Retrieve the job used to submit this experiment. Several types are accepted for convenience:

> *   str: The name of the experiment.
> *   QuantumCircuit: The name of the circuit instance will be used.
> *   Schedule: The name of the schedule instance will be used.
> *   int: The position of the experiment.

**Return type**

`Tuple`\[`Optional`\[[`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")], `int`]

**Returns**

A tuple of the job used to submit the experiment, or `None` if the job submit failed, and the experiment index.

**Raises**

[**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

