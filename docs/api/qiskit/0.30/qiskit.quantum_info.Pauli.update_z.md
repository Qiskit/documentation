# qiskit.quantum\_info.Pauli.update\_z

`Pauli.update_z(z, indices=None)`

DEPRECATED: Update partial or entire z.

This function is deprecated. Use the setter for `Z` instead.

**Parameters**

*   **z** (*numpy.ndarray or list*) – to-be-updated z
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole z, the number of qubits must be the same.
