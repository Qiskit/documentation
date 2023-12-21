---
title: control
description: API reference for qiskit.circuit.library.HGate.control
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.HGate.control
---

# control

<span id="qiskit.circuit.library.HGate.control" />

`HGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-H gate.

One control qubit returns a CH gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

