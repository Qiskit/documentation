# qiskit.opflow\.converters.PauliBasisChange.operator\_replacement\_fn

`static PauliBasisChange.operator_replacement_fn(cob_instr_op, dest_pauli_op)`

A built-in convenience replacement function which produces Operators isomorphic to the origin `PauliOp`.

**Parameters**

*   **cob\_instr\_op** (`PrimitiveOp`) – The basis-change `CircuitOp`.
*   **dest\_pauli\_op** (`Union`\[`PauliOp`, `PauliSumOp`, `ListOp`]) – The destination `PauliOp`.

**Return type**

`OperatorBase`

**Returns**

The `~CircuitOp @ PauliOp @ CircuitOp` composition isomorphic to the original `PauliOp`.
