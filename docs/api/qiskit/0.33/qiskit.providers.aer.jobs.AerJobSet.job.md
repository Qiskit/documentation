# qiskit.providers.aer.jobs.AerJobSet.job

`AerJobSet.job(experiment)`

Retrieve the job used to submit the specified experiment and its index.

**Parameters**

**experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`]) –

Retrieve the job used to submit this experiment. Several types are accepted for convenience:

> *   str: The name of the experiment.
> *   QuantumCircuit: The name of the circuit instance will be used.
> *   Schedule: The name of the schedule instance will be used.

**Return type**

`Tuple`\[`AerJob`, `int`]

**Returns**

A tuple of the job used to submit the experiment and the experiment index.

**Raises**

[**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – If the job for the experiment could not be found.
