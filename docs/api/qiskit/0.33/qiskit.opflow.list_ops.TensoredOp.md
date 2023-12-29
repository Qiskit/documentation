# TensoredOp

`TensoredOp(oplist, coeff=1.0, abelian=False)`

Bases: `qiskit.opflow.list_ops.list_op.ListOp`

A class for lazily representing tensor products of Operators. Often Operators cannot be efficiently tensored to one another, but may be manipulated further so that they can be later. This class holds logic to indicate that the Operators in `oplist` are meant to be tensored together, and therefore if they reach a point in which they can be, such as after conversion to QuantumCircuits, they can be reduced by tensor product.

**Parameters**

*   **oplist** (`List`\[`OperatorBase`]) – The Operators being tensored.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the operator
*   **abelian** (`bool`) – Indicates whether the Operators in `oplist` are known to mutually commute.

## Methods Defined Here

|                                                                                                                                                          |                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`eval`](qiskit.opflow.list_ops.TensoredOp.eval#qiskit.opflow.list_ops.TensoredOp.eval "qiskit.opflow.list_ops.TensoredOp.eval")                         | Evaluate the Operator’s underlying function, either on a binary string or another Operator. |
| [`reduce`](qiskit.opflow.list_ops.TensoredOp.reduce#qiskit.opflow.list_ops.TensoredOp.reduce "qiskit.opflow.list_ops.TensoredOp.reduce")                 | Try collapsing the Operator structure, usually after some type of conversion, e.g.          |
| [`tensor`](qiskit.opflow.list_ops.TensoredOp.tensor#qiskit.opflow.list_ops.TensoredOp.tensor "qiskit.opflow.list_ops.TensoredOp.tensor")                 | Return tensor product between self and other, overloaded by `^`.                            |
| [`to_circuit`](qiskit.opflow.list_ops.TensoredOp.to_circuit#qiskit.opflow.list_ops.TensoredOp.to_circuit "qiskit.opflow.list_ops.TensoredOp.to_circuit") | Returns the quantum circuit, representing the tensored operator.                            |

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

### coeffs

Return a list of the coefficients of the operators listed. Raises exception for nested Listops.

**Return type**

`List`\[`Union`\[`complex`, `ParameterExpression`]]

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
