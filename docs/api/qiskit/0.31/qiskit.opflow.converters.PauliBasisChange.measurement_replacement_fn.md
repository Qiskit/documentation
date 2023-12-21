# qiskit.opflow\.converters.PauliBasisChange.measurement\_replacement\_fn

`static PauliBasisChange.measurement_replacement_fn(cob_instr_op, dest_pauli_op)`

A built-in convenience replacement function which produces measurements isomorphic to an `OperatorStateFn` measurement holding the origin `PauliOp`.

**Parameters**

*   **cob\_instr\_op** (`PrimitiveOp`) – The basis-change `CircuitOp`.
*   **dest\_pauli\_op** (`Union`\[`PauliOp`, `PauliSumOp`, `ListOp`]) – The destination Pauli type operator.

**Return type**

`OperatorBase`

**Returns**

The `~StateFn @ CircuitOp` composition equivalent to a measurement by the original `PauliOp`.
