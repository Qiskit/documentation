# qiskit.quantum\_info.Pauli.update\_x

`Pauli.update_x(x, indices=None)`

DEPRECATED: Update partial or entire x.

This function is deprecated. Use the setter for `X` instead.

**Parameters**

*   **x** (*numpy.ndarray or list*) – to-be-updated x
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole x, the number of qubits must be the same.
