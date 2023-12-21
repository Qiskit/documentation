---
title: QasmQobjConfig
description: API reference for qiskit.qobj.QasmQobjConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmQobjConfig
---

# QasmQobjConfig

<span id="qiskit.qobj.QasmQobjConfig" />

`QasmQobjConfig(shots=None, max_credits=None, seed_simulator=None, memory=None, parameter_binds=None, memory_slots=None, n_qubits=None, **kwargs)`

A configuration for a QASM Qobj.

Model for RunConfig.

**Parameters**

*   **shots** (*int*) – the number of shots.
*   **max\_credits** (*int*) – the max\_credits to use on the IBMQ public devices.
*   **seed\_simulator** (*int*) – the seed to use in the simulator
*   **memory** (*bool*) – whether to request memory from backend (per-shot readouts)
*   **parameter\_binds** (*list\[dict]*) – List of parameter bindings
*   **memory\_slots** (*int*) – The number of memory slots on the device
*   **n\_qubits** (*int*) – The number of qubits on the device
*   **kwargs** – Additional free form key value fields to add to the configuration.

## Methods

|                                                                                                                 |                                                                    |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`QasmQobjConfig.from_dict`](qiskit.qobj.QasmQobjConfig.from_dict "qiskit.qobj.QasmQobjConfig.from_dict")(data) | Create a new QasmQobjConfig object from a dictionary.              |
| [`QasmQobjConfig.to_dict`](qiskit.qobj.QasmQobjConfig.to_dict "qiskit.qobj.QasmQobjConfig.to_dict")()           | Return a dictionary format representation of the QASM Qobj config. |

