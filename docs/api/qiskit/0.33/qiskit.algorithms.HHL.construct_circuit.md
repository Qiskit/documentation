# qiskit.algorithms.HHL.construct\_circuit

`HHL.construct_circuit(matrix, vector, neg_vals=True)`

Construct the HHL circuit.

**Parameters**

*   **matrix** (`Union`\[`List`, `ndarray`, `QuantumCircuit`]) – The matrix specifying the system, i.e. A in Ax=b.
*   **vector** (`Union`\[`List`, `ndarray`, `QuantumCircuit`]) – The vector specifying the right hand side of the equation in Ax=b.
*   **neg\_vals** (`Optional`\[`bool`]) – States whether the matrix has negative eigenvalues. If False the
*   **becomes cheaper.** (*computation*) –

**Return type**

`QuantumCircuit`

**Returns**

The HHL circuit.

**Raises**

*   **ValueError** – If the input is not in the correct format.
*   **ValueError** – If the type of the input matrix is not supported.
