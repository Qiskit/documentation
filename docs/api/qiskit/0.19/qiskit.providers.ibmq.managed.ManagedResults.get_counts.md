---
title: get_counts
description: API reference for qiskit.providers.ibmq.managed.ManagedResults.get_counts
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedResults.get_counts
---

# get\_counts

<span id="qiskit.providers.ibmq.managed.ManagedResults.get_counts" />

`ManagedResults.get_counts(experiment)`

Get the histogram data of an experiment.

**Parameters**

**experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data").

**Return type**

`Dict`\[`str`, `int`]

**Returns**

Refer to the [`Result.get_counts()`](qiskit.result.Result.get_counts "qiskit.result.Result.get_counts") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

