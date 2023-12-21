# qiskit.aqua.operators.converters.AbelianGrouper.group\_subops

`classmethod AbelianGrouper.group_subops(list_op, fast=None, use_nx=None)`

Given a ListOp, attempt to group into Abelian ListOps of the same type.

**Parameters**

*   **list\_op** (`ListOp`) – The Operator to group into Abelian groups
*   **fast** (`Optional`\[`bool`]) – Ignored - parameter will be removed in future release
*   **use\_nx** (`Optional`\[`bool`]) – Ignored - parameter will be removed in future release

**Return type**

`ListOp`

**Returns**

The grouped Operator.

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If any of list\_op’s sub-ops is not `PauliOp`.
