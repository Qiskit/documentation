# qiskit.quantum\_info.Pauli.sgn\_prod

`static Pauli.sgn_prod(*args, **kwargs)`

DEPRECATED: Multiply two Paulis and track the phase.

This function is deprecated. The Pauli class now handles full Pauli group multiplication using [`compose()`](qiskit.quantum_info.Pauli.compose#qiskit.quantum_info.Pauli.compose "qiskit.quantum_info.Pauli.compose") or [`dot()`](qiskit.quantum_info.Pauli.dot#qiskit.quantum_info.Pauli.dot "qiskit.quantum_info.Pauli.dot").

\$P\_3 = P\_1 otimes P\_2\$: X\*Y

**Parameters**

*   **p1** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 1
*   **p2** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 2

**Returns**

the multiplied pauli (without phase) complex: the sign of the multiplication, 1, -1, 1j or -1j

**Return type**

[Pauli](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")
