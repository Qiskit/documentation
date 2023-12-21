# qiskit.providers.ibmq.managed.ManagedResults.get\_memory

`ManagedResults.get_memory(experiment)`

Get the sequence of memory states (readouts) for each shot. The data from the experiment is a list of format \[‘00000’, ‘01000’, ‘10100’, ‘10100’, ‘11101’, ‘11100’, ‘00101’, …, ‘01010’]

**Parameters**

**experiment** (`Union`\[`str`, `QuantumCircuit`, `Schedule`, `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults.data#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").

**Return type**

`Union`\[`list`, `ndarray`]

**Returns**

Refer to the [`Result.get_memory()`](qiskit.result.Result.get_memory#qiskit.result.Result.get_memory "qiskit.result.Result.get_memory") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable#qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound#qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.
