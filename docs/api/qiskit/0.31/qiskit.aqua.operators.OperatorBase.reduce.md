# qiskit.aqua.operators.OperatorBase.reduce

`abstract OperatorBase.reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Returns**

The reduced `OperatorBase`.
