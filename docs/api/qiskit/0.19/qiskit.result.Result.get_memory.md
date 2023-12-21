---
title: get_memory
description: API reference for qiskit.result.Result.get_memory
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.result.Result.get_memory
---

# get\_memory

<span id="qiskit.result.Result.get_memory" />

`Result.get_memory(experiment=None)`

Get the sequence of memory states (readouts) for each shot The data from the experiment is a list of format \[‘00000’, ‘01000’, ‘10100’, ‘10100’, ‘11101’, ‘11100’, ‘00101’, …, ‘01010’]

**Parameters**

**experiment** (*str or* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or int or None*) – the index of the experiment, as specified by `data()`.

**Returns**

**Either the list of each outcome, formatted according to**

registers in circuit or a complex numpy np.darray with shape:

| meas\_level | meas\_return | shape                                                 |
| ----------- | ------------ | ----------------------------------------------------- |
| 0           | single       | np.ndarray\[shots, memory\_slots, memory\_slot\_size] |
| 0           | avg          | np.ndarray\[memory\_slots, memory\_slot\_size]        |
| 1           | single       | np.ndarray\[shots, memory\_slots]                     |
| 1           | avg          | np.ndarray\[memory\_slots]                            |
| 2           | memory=True  | list                                                  |

**Return type**

List\[str] or np.ndarray

**Raises**

**QiskitError** – if there is no memory data for the circuit.

