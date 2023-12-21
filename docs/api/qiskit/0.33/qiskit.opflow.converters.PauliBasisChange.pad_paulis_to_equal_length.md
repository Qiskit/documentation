# qiskit.opflow\.converters.PauliBasisChange.pad\_paulis\_to\_equal\_length

`PauliBasisChange.pad_paulis_to_equal_length(pauli_op1, pauli_op2)`

If `pauli_op1` and `pauli_op2` do not act over the same number of qubits, pad identities to the end of the shorter of the two so they are of equal length. Padding is applied to the end of the Paulis. Note that the Terra represents Paulis in big-endian order, so this will appear as padding to the beginning of the Pauli x and z bit arrays.

**Parameters**

*   **pauli\_op1** (`PauliOp`) – A pauli\_op to possibly pad.
*   **pauli\_op2** (`PauliOp`) – A pauli\_op to possibly pad.

**Return type**

`Tuple`\[`PauliOp`, `PauliOp`]

**Returns**

A tuple containing the padded PauliOps.
