# qiskit.opflow\.evolutions.PauliTrotterEvolution.convert

`PauliTrotterEvolution.convert(operator)`

Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing Trotterized evolutions equalling the exponentiation of -i \* operator.

**Parameters**

**operator** (`OperatorBase`) – The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted operator.
