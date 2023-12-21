# qiskit.aqua.operators.legacy.MatrixOperator.chop

`MatrixOperator.chop(threshold=None, copy=False)`

Eliminate the real and imagine part of coeff in each pauli by threshold. If pauli’s coeff is less then threshold in both real and imagine parts, the pauli is removed. To align the internal representations, all available representations are chopped. The chopped result is stored back to original property. Note: if coeff is real-only, the imag part is skipped.

**Parameters**

*   **threshold** (*float*) – threshold chops the paulis
*   **copy** (*bool*) – copy or self

**Returns**

self or copy

**Return type**

[MatrixOperator](qiskit.aqua.operators.legacy.MatrixOperator#qiskit.aqua.operators.legacy.MatrixOperator "qiskit.aqua.operators.legacy.MatrixOperator")
