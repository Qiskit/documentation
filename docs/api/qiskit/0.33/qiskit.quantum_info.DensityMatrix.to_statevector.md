# qiskit.quantum\_info.DensityMatrix.to\_statevector

`DensityMatrix.to_statevector(atol=None, rtol=None)`

Return a statevector from a pure density matrix.

**Parameters**

*   **atol** (*float*) – Absolute tolerance for checking operation validity.
*   **rtol** (*float*) – Relative tolerance for checking operation validity.

**Returns**

**The pure density matrix’s corresponding statevector.**

Corresponds to the eigenvector of the only non-zero eigenvalue.

**Return type**

[Statevector](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")

**Raises**

**QiskitError** – if the state is not pure.
