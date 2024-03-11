---
title: set_density_matrix
description: API reference for qiskit.providers.aer.library.set_density_matrix
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.aer.library.set_density_matrix
---

# qiskit.providers.aer.library.set\_density\_matrix

<span id="qiskit.providers.aer.library.set_density_matrix" />

`set_density_matrix(self, state)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.9/qiskit/providers/aer/library/set_instructions/set_density_matrix.py "view source code")

Set the density matrix state of the simulator.

**Parameters**

**state** ([*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a density matrix.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the density matrix is the incorrect size for the current circuit.

