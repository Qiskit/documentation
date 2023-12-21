---
title: control
description: API reference for qiskit.extensions.UnitaryGate.control
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.extensions.UnitaryGate.control
---

# control

<span id="qiskit.extensions.UnitaryGate.control" />

`UnitaryGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of controls to add to gate (default=1)
*   **label** (*str*) – optional gate label
*   **ctrl\_state** (*int or str or None*) – The control state in decimal or as a bit string (e.g. ‘1011’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

controlled version of gate.

**Return type**

[UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**QiskitError** – invalid ctrl\_state

