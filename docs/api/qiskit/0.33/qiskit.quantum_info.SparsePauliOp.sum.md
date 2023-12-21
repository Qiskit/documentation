# qiskit.quantum\_info.SparsePauliOp.sum

`static SparsePauliOp.sum(ops)`

Sum of SparsePauliOps.

This is a specialized version of the builtin `sum` function for SparsePauliOp with smaller overhead.

**Parameters**

**ops** (*list\[*[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")*]*) – a list of SparsePauliOps.

**Returns**

the SparsePauliOp representing the sum of the input list.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

*   **QiskitError** – if the input list is empty.
*   **QiskitError** – if the input list includes an object that is not SparsePauliOp.
*   **QiskitError** – if the numbers of qubits of the objects in the input list do not match.
