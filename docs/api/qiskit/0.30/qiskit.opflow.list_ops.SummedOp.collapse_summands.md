# qiskit.opflow\.list\_ops.SummedOp.collapse\_summands

`SummedOp.collapse_summands()`

Return Operator by simplifying duplicate operators.

E.g., `SummedOp([2 * X ^ Y, X ^ Y]).collapse_summands() -> SummedOp([3 * X ^ Y])`.

**Return type**

`SummedOp`

**Returns**

A simplified `SummedOp` equivalent to self.
