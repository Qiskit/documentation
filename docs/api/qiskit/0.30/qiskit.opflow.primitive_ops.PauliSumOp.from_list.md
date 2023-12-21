# qiskit.opflow\.primitive\_ops.PauliSumOp.from\_list

`classmethod PauliSumOp.from_list(pauli_list, coeff=1.0)`

Construct from a pauli\_list with the form \[(pauli\_str, coeffs)]

**Parameters**

*   **pauli\_list** (`List`\[`Tuple`\[`str`, `complex`]]) – A list of Tuple of pauli\_str and coefficient.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive.

**Return type**

`PauliSumOp`

**Returns**

The PauliSumOp constructed from the pauli\_list.
