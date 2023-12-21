---
title: get_unitary
description: API reference for qiskit.result.Result.get_unitary
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.result.Result.get_unitary
---

# get\_unitary

<span id="qiskit.result.Result.get_unitary" />

`Result.get_unitary(experiment=None, decimals=None)`

Get the final unitary of an experiment.

**Parameters**

*   **experiment** (*str or* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or int or None*) – the index of the experiment, as specified by `data()`.
*   **decimals** (*int*) – the number of decimals in the unitary. If None, does not round.

**Returns**

**list of 2^num\_qubits x 2^num\_qubits complex**

amplitudes.

**Return type**

list\[list\[complex]]

**Raises**

**QiskitError** – if there is no unitary for the experiment.

