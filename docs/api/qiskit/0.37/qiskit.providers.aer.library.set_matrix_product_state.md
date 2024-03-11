---
title: set_matrix_product_state
description: API reference for qiskit.providers.aer.library.set_matrix_product_state
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.aer.library.set_matrix_product_state
---

# qiskit.providers.aer.library.set\_matrix\_product\_state

<span id="qiskit.providers.aer.library.set_matrix_product_state" />

`set_matrix_product_state(self, state)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.10/qiskit/providers/aer/library/set_instructions/set_matrix_product_state.py "view source code")

Set the matrix product state of the simulator.

**Parameters**

**state** (*Tuple\[List\[Tuple\[np.array\[complex\_t]]]], List\[List\[float]]*) – A matrix\_product\_state.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the structure of the state is incorrect

