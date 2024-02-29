---
title: set_stabilizer
description: API reference for qiskit_aer.library.set_stabilizer
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.library.set_stabilizer
---

# qiskit\_aer.library.set\_stabilizer

<span id="qiskit_aer.library.set_stabilizer" />

`set_stabilizer(self, state)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.11/qiskit_aer/library/set_instructions/set_stabilizer.py "view source code")

Set the Clifford stabilizer state of the simulator.

**Parameters**

**state** ([*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – A clifford operator.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the state is the incorrect size for the current circuit.

