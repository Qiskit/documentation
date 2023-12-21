# qiskit.aqua.operators.converters.PauliBasisChange.statefn\_replacement\_fn

`static PauliBasisChange.statefn_replacement_fn(cob_instr_op, dest_pauli_op)`

A built-in convenience replacement function which produces state functions isomorphic to an `OperatorStateFn` state function holding the origin `PauliOp`.

**Parameters**

*   **cob\_instr\_op** (`CircuitOp`) – The basis-change `CircuitOp`.
*   **dest\_pauli\_op** (`PauliOp`) – The destination `PauliOp`.

**Return type**

`OperatorBase`

**Returns**

The `~CircuitOp @ StateFn` composition equivalent to a state function defined by the original `PauliOp`.
