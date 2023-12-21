---
title: two_qubit_reduction
description: API reference for qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction
---

# two\_qubit\_reduction

<span id="qiskit.aqua.operators.legacy.Z2Symmetries.two_qubit_reduction" />

`static Z2Symmetries.two_qubit_reduction(operator, num_particles)`

Eliminates the central and last qubit in a list of Pauli that has diagonal operators (Z,I) at those positions

Chemistry specific method: It can be used to taper two qubits in parity and binary-tree mapped fermionic Hamiltonians when the spin orbitals are ordered in two spin sectors, (block spin order) according to the number of particles in the system.

**Parameters**

*   **operator** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – the operator
*   **num\_particles** (*Union(list, int)*) – number of particles, if it is a list, the first number is alpha and the second number if beta.

**Returns**

a new operator whose qubit number is reduced by 2.

**Return type**

[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

