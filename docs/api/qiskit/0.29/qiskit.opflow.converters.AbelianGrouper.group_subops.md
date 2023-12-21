# qiskit.opflow\.converters.AbelianGrouper.group\_subops

`classmethod AbelianGrouper.group_subops(list_op)`

Given a ListOp, attempt to group into Abelian ListOps of the same type.

**Parameters**

**list\_op** (`Union`\[`ListOp`, `PauliSumOp`]) – The Operator to group into Abelian groups

**Return type**

`ListOp`

**Returns**

The grouped Operator.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – If any of list\_op’s sub-ops is not `PauliOp`.
