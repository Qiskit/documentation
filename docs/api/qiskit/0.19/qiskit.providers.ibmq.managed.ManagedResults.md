---
title: ManagedResults
description: API reference for qiskit.providers.ibmq.managed.ManagedResults
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.managed.ManagedResults
---

# ManagedResults

<span id="qiskit.providers.ibmq.managed.ManagedResults" />

`ManagedResults(job_set, backend_name, success)` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.7/qiskit/providers/ibmq/managed/managedresults.py "view source code")

Results managed by the Job Manager.

This class is a wrapper around the [`Result`](qiskit.result.Result "qiskit.result.Result") class and provides the same methods. Please refer to the [`Result`](qiskit.result.Result "qiskit.result.Result") class for more information on the methods.

ManagedResults constructor.

**Parameters**

*   **job\_set** ([`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.managedjobset.ManagedJobSet")) – Managed job set for these results.
*   **backend\_name** (`str`) – Name of the backend used to run the experiments.
*   **success** (`bool`) – `True` if all experiments were successful and results available. `False` otherwise.

<span id="qiskit.providers.ibmq.managed.ManagedResults.backend_name" />

### backend\_name

Name of the backend used to run the experiments.

<span id="qiskit.providers.ibmq.managed.ManagedResults.success" />

### success

Whether all experiments were successful.

## Methods

### data

<span id="qiskit.providers.ibmq.managed.ManagedResults.data" />

`ManagedResults.data(experiment)`

Get the raw data for an experiment.

**Parameters**

**experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) –

Retrieve result for this experiment. Several types are accepted for convenience:

> *   str: The name of the experiment.
> *   QuantumCircuit: The name of the circuit instance will be used.
> *   Schedule: The name of the schedule instance will be used.
> *   int: The position of the experiment.

**Return type**

`Dict`

**Returns**

Refer to the [`Result.data()`](qiskit.result.Result#data "qiskit.result.Result.data") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

### get\_counts

<span id="qiskit.providers.ibmq.managed.ManagedResults.get_counts" />

`ManagedResults.get_counts(experiment)`

Get the histogram data of an experiment.

**Parameters**

**experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults#data "qiskit.providers.ibmq.managed.ManagedResults.data").

**Return type**

`Dict`\[`str`, `int`]

**Returns**

Refer to the [`Result.get_counts()`](qiskit.result.Result#get_counts "qiskit.result.Result.get_counts") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

### get\_memory

<span id="qiskit.providers.ibmq.managed.ManagedResults.get_memory" />

`ManagedResults.get_memory(experiment)`

Get the sequence of memory states (readouts) for each shot. The data from the experiment is a list of format \[‘00000’, ‘01000’, ‘10100’, ‘10100’, ‘11101’, ‘11100’, ‘00101’, …, ‘01010’]

**Parameters**

**experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults#data "qiskit.providers.ibmq.managed.ManagedResults.data").

**Return type**

`Union`\[`list`, `ndarray`]

**Returns**

Refer to the [`Result.get_memory()`](qiskit.result.Result#get_memory "qiskit.result.Result.get_memory") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

### get\_statevector

<span id="qiskit.providers.ibmq.managed.ManagedResults.get_statevector" />

`ManagedResults.get_statevector(experiment, decimals=None)`

Get the final statevector of an experiment.

**Parameters**

*   **experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults#data "qiskit.providers.ibmq.managed.ManagedResults.data").
*   **decimals** (`Optional`\[`int`]) – The number of decimals in the statevector. If `None`, skip rounding.

**Return type**

`List`\[`complex`]

**Returns**

Refer to the [`Result.get_statevector()`](qiskit.result.Result#get_statevector "qiskit.result.Result.get_statevector") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

### get\_unitary

<span id="qiskit.providers.ibmq.managed.ManagedResults.get_unitary" />

`ManagedResults.get_unitary(experiment, decimals=None)`

Get the final unitary of an experiment.

**Parameters**

*   **experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `int`]) – Retrieve result for this experiment, as specified by [`data()`](qiskit.providers.ibmq.managed.ManagedResults#data "qiskit.providers.ibmq.managed.ManagedResults.data").
*   **decimals** (`Optional`\[`int`]) – The number of decimals in the unitary. If `None`, skip rounding.

**Return type**

`List`\[`List`\[`complex`]]

**Returns**

Refer to the [`Result.get_unitary()`](qiskit.result.Result#get_unitary "qiskit.result.Result.get_unitary") for information on return data.

**Raises**

*   [**IBMQManagedResultDataNotAvailable**](qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable "qiskit.providers.ibmq.managed.IBMQManagedResultDataNotAvailable") – If data for the experiment could not be retrieved.
*   [**IBMQJobManagerJobNotFound**](qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound "qiskit.providers.ibmq.managed.IBMQJobManagerJobNotFound") – If the job for the experiment could not be found.

