# qiskit.providers.ibmq.managed.ManagedResults.get\_counts

`ManagedResults.get_counts(experiment)`

Get the histogram data of an experiment.

**Parameters**

**experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults.data#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").

**Return type**

`Dict`\[`str`, `int`]

**Returns**

Refer to the [`Result.get_counts()`](qiskit.result.Result.get_counts#qiskit.result.Result.get_counts "qiskit.result.Result.get_counts") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.
