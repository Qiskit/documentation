# qiskit.aqua.operators.converters.PauliBasisChange.convert

`PauliBasisChange.convert(operator)`

Given a `PauliOp`, or an Operator containing `PauliOps` if `_traverse` is True, converts each Pauli into the basis specified by self.\_destination and a basis-change-circuit, calls `replacement_fn` with these two Operators, and replaces the `PauliOps` with the output of `replacement_fn`. For example, for the built-in `operator_replacement_fn` below, each PauliOp p will be replaced by the composition of the basis-change Clifford `CircuitOp` c with the destination PauliOp d and c†, such that p = c·d·c†, up to global phase.

**Parameters**

**operator** (`OperatorBase`) – The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted Operator.
