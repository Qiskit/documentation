# qiskit.opflow\.evolutions.MatrixEvolution.convert

`MatrixEvolution.convert(operator)`

Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. This is done by converting the `EvolvedOp.primitive` to a `MatrixOp` and simply calling `.exp_i()` on that.

**Parameters**

**operator** (`OperatorBase`) – The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted operator.
