# qiskit.quantum\_info.SparsePauliOp.simplify

`SparsePauliOp.simplify(atol=None, rtol=None)`

Simplify PauliList by combining duplicates and removing zeros.

**Parameters**

*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optional. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

the simplified SparsePauliOp operator.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")
