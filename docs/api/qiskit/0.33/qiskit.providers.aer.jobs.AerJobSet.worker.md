# qiskit.providers.aer.jobs.AerJobSet.worker

`AerJobSet.worker(experiment)`

Retrieve the index of job.

**Parameters**

**experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`]) –

Retrieve the job used to submit this experiment. Several types are accepted for convenience:

> *   str: The name of the experiment.
> *   QuantumCircuit: The name of the circuit instance will be used.
> *   Schedule: The name of the schedule instance will be used.

**Return type**

`Union`\[`int`, `List`\[`int`]]

**Returns**

list or integer value of the job id

**Raises**

[**JobError**](qiskit.providers.JobError#qiskit.providers.JobError "qiskit.providers.JobError") – If the job for the experiment could not be found.
