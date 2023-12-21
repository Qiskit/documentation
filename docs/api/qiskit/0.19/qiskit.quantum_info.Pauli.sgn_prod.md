---
title: sgn_prod
description: API reference for qiskit.quantum_info.Pauli.sgn_prod
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Pauli.sgn_prod
---

# sgn\_prod

<span id="qiskit.quantum_info.Pauli.sgn_prod" />

`static Pauli.sgn_prod(p1, p2)`

Multiply two Paulis and track the phase.

\$P\_3 = P\_1 otimes P\_2\$: X\*Y

**Parameters**

*   **p1** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 1
*   **p2** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 2

**Returns**

the multiplied pauli complex: the sign of the multiplication, 1, -1, 1j or -1j

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

