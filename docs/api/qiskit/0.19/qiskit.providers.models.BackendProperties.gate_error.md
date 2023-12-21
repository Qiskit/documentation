---
title: gate_error
description: API reference for qiskit.providers.models.BackendProperties.gate_error
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.models.BackendProperties.gate_error
---

# gate\_error

<span id="qiskit.providers.models.BackendProperties.gate_error" />

`BackendProperties.gate_error(gate, qubits)`

Return gate error estimates from backend properties.

**Parameters**

*   **gate** (`str`) – The gate for which to get the error.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the gate.

**Return type**

`float`

**Returns**

Gate error of the given gate and qubit(s).

