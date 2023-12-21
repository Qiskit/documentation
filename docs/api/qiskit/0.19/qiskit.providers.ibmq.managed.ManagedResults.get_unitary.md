---
title: get_unitary
description: API reference for qiskit.providers.ibmq.managed.ManagedResults.get_unitary
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedResults.get_unitary
---

# get\_unitary

<span id="qiskit.providers.ibmq.managed.ManagedResults.get_unitary" />

`ManagedResults.get_unitary(experiment, decimals=None)`

Get the final unitary of an experiment.

**Parameters**

*   **experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").
*   **decimals** (`Optional`\[`int`]) – The number of decimals in the unitary. If `None`, skip rounding.

**Return type**

`List`\[`List`\[`complex`]]

**Returns**

Refer to the [`Result.get_unitary()`](qiskit.result.Result.get_unitary "qiskit.result.Result.get_unitary") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

