# qiskit.opflow\.expectations.PauliExpectation.convert

`PauliExpectation.convert(operator)`

Accepts an Operator and returns a new Operator with the Pauli measurements replaced by diagonal Pauli post-rotation based measurements so they can be evaluated by sampling and averaging.

**Parameters**

**operator** (`OperatorBase`) – The operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted operator.
