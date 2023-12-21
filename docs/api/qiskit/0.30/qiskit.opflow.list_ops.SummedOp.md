# SummedOp

`SummedOp(oplist, coeff=1.0, abelian=False)`

Bases: `qiskit.opflow.list_ops.list_op.ListOp`

A class for lazily representing sums of Operators. Often Operators cannot be efficiently added to one another, but may be manipulated further so that they can be later. This class holds logic to indicate that the Operators in `oplist` are meant to be added together, and therefore if they reach a point in which they can be, such as after evaluation or conversion to matrices, they can be reduced by addition.

**Parameters**

*   **oplist** (`List`\[`OperatorBase`]) – The Operators being summed.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the operator
*   **abelian** (`bool`) – Indicates whether the Operators in `oplist` are known to mutually commute.

## Methods Defined Here

|                                                                                                                                                                                |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.list_ops.SummedOp.add#qiskit.opflow.list_ops.SummedOp.add "qiskit.opflow.list_ops.SummedOp.add")                                                         | Return Operator addition of `self` and `other`, overloaded by `+`.                                              |
| [`collapse_summands`](qiskit.opflow.list_ops.SummedOp.collapse_summands#qiskit.opflow.list_ops.SummedOp.collapse_summands "qiskit.opflow.list_ops.SummedOp.collapse_summands") | Return Operator by simplifying duplicate operators.                                                             |
| [`equals`](qiskit.opflow.list_ops.SummedOp.equals#qiskit.opflow.list_ops.SummedOp.equals "qiskit.opflow.list_ops.SummedOp.equals")                                             | Check if other is equal to self.                                                                                |
| [`reduce`](qiskit.opflow.list_ops.SummedOp.reduce#qiskit.opflow.list_ops.SummedOp.reduce "qiskit.opflow.list_ops.SummedOp.reduce")                                             | Try collapsing list or trees of sums.                                                                           |
| [`to_circuit`](qiskit.opflow.list_ops.SummedOp.to_circuit#qiskit.opflow.list_ops.SummedOp.to_circuit "qiskit.opflow.list_ops.SummedOp.to_circuit")                             | Returns the quantum circuit, representing the SummedOp.                                                         |
| [`to_matrix_op`](qiskit.opflow.list_ops.SummedOp.to_matrix_op#qiskit.opflow.list_ops.SummedOp.to_matrix_op "qiskit.opflow.list_ops.SummedOp.to_matrix_op")                     | Returns an equivalent Operator composed of only NumPy-based primitives, such as `MatrixOp` and `VectorStateFn`. |
| [`to_pauli_op`](qiskit.opflow.list_ops.SummedOp.to_pauli_op#qiskit.opflow.list_ops.SummedOp.to_pauli_op "qiskit.opflow.list_ops.SummedOp.to_pauli_op")                         | Returns an equivalent Operator composed of only Pauli-based primitives, such as `PauliOp`.                      |

## Attributes

### INDENTATION

`= ' '`

### abelian

Whether the Operators in `oplist` are known to commute with one another.

**Return type**

`bool`

**Returns**

A bool indicating whether the `oplist` is Abelian.

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

**Returns**

The coefficient.

### combo\_fn

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Return type**

`Callable`

**Returns**

The combination function.

### distributive

**Return type**

`bool`

### grad\_combo\_fn

The gradient of `combo_fn`.

**Return type**

`Optional`\[`Callable`]

### instance\_id

Return the unique instance id.

**Return type**

`int`

### num\_qubits

**Return type**

`int`

### oplist

The list of `OperatorBases` defining the underlying function of this Operator.

**Return type**

`List`\[`OperatorBase`]

**Returns**

The Operators defining the ListOp

### parameters

### settings

Return settings.

**Return type**

`Dict`
