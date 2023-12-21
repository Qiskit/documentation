# qiskit.providers.ibmq.managed.ManagedResults.get\_statevector

`ManagedResults.get_statevector(experiment, decimals=None)`

Get the final statevector of an experiment.

**Parameters**

*   **experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults.data#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").
*   **decimals** (`Optional`\[`int`]) – The number of decimals in the statevector. If `None`, skip rounding.

**Return type**

`List`\[`complex`]

**Returns**

Refer to the [`Result.get_statevector()`](qiskit.result.Result.get_statevector#qiskit.result.Result.get_statevector "qiskit.result.Result.get_statevector") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.
