# qiskit.aqua.operators.legacy.covariance

<span id="undefined" />

`covariance(data, pauli_1, pauli_2, avg_1, avg_2)`

Compute the covariance matrix element between two Paulis, given the measurement outcome. Appropriate post-rotations on the state are assumed.

**Parameters**

*   **data** (*dict*) – a dictionary of the form data = \{‘00000’: 10} (\{str:int})
*   **pauli\_1** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli class member
*   **pauli\_2** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli class member
*   **avg\_1** (*float*) – expectation value of pauli\_1 on data
*   **avg\_2** (*float*) – expectation value of pauli\_2 on data

**Returns**

the element of the covariance matrix between two Paulis

**Return type**

float
