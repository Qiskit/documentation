---
title: mcmt
description: API reference for qiskit.circuit.library.GMS.mcmt
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.GMS.mcmt
---

# mcmt

<span id="qiskit.circuit.library.GMS.mcmt" />

`GMS.mcmt(gate, control_qubits, target_qubits, ancilla_qubits=None, mode='no-ancilla', *, single_control_gate_fun=None, q_controls=None, q_ancillae=None, q_targets=None)`

Apply a multi-control, multi-target using a generic gate.

This can also be used to implement a generic multi-control gate, as the target could also be of length 1.

