---
title: gate_length
description: API reference for qiskit.providers.models.BackendProperties.gate_length
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.models.BackendProperties.gate_length
---

# gate\_length

<span id="qiskit.providers.models.BackendProperties.gate_length" />

`BackendProperties.gate_length(gate, qubits)`

Return the duration of the gate in units of seconds.

**Parameters**

*   **gate** (`str`) – The gate for which to get the duration.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the gate.

**Return type**

`float`

**Returns**

Gate length of the given gate and qubit(s).

