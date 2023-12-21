---
title: get_counts
description: API reference for qiskit.result.Result.get_counts
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.result.Result.get_counts
---

# get\_counts

<span id="qiskit.result.Result.get_counts" />

`Result.get_counts(experiment=None)`

Get the histogram data of an experiment.

**Parameters**

**experiment** (*str or* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or int or None*) – the index of the experiment, as specified by `get_data()`.

**Returns**

**int] or list\[dict\[str:int]]: a dictionary or a list of**

dictionaries. A dictionary has the counts for each qubit with the keys containing a string in binary format and separated according to the registers in circuit (e.g. `0100 1110`). The string is little-endian (cr\[0] on the right hand side).

**Return type**

dict\[str

**Raises**

**QiskitError** – if there are no counts for the experiment.

