# ComposedOp

<span id="undefined" />

`ComposedOp(oplist, coeff=1.0, abelian=False)`

Bases: `qiskit.opflow.list_ops.list_op.ListOp`

A class for lazily representing compositions of Operators. Often Operators cannot be efficiently composed with one another, but may be manipulated further so that they can be composed later. This class holds logic to indicate that the Operators in `oplist` are meant to be composed, and therefore if they reach a point in which they can be, such as after conversion to QuantumCircuits or matrices, they can be reduced by composition.

**Parameters**

*   **oplist** (`List`\[`OperatorBase`]) – The Operators being composed.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the operator
*   **abelian** (`bool`) – Indicates whether the Operators in `oplist` are known to mutually commute.

## Methods Defined Here

|                                                                                                                                                                                                              |                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [`adjoint`](qiskit.opflow.list_ops.ComposedOp.adjoint#qiskit.opflow.list_ops.ComposedOp.adjoint "qiskit.opflow.list_ops.ComposedOp.adjoint")                                                                 | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                  |
| [`compose`](qiskit.opflow.list_ops.ComposedOp.compose#qiskit.opflow.list_ops.ComposedOp.compose "qiskit.opflow.list_ops.ComposedOp.compose")                                                                 | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`. |
| [`eval`](qiskit.opflow.list_ops.ComposedOp.eval#qiskit.opflow.list_ops.ComposedOp.eval "qiskit.opflow.list_ops.ComposedOp.eval")                                                                             | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                      |
| [`non_distributive_reduce`](qiskit.opflow.list_ops.ComposedOp.non_distributive_reduce#qiskit.opflow.list_ops.ComposedOp.non_distributive_reduce "qiskit.opflow.list_ops.ComposedOp.non_distributive_reduce") | Reduce without attempting to expand all distributive compositions.                                               |
| [`reduce`](qiskit.opflow.list_ops.ComposedOp.reduce#qiskit.opflow.list_ops.ComposedOp.reduce "qiskit.opflow.list_ops.ComposedOp.reduce")                                                                     | Try collapsing the Operator structure, usually after some type of conversion, e.g.                               |
| [`to_circuit`](qiskit.opflow.list_ops.ComposedOp.to_circuit#qiskit.opflow.list_ops.ComposedOp.to_circuit "qiskit.opflow.list_ops.ComposedOp.to_circuit")                                                     | Returns the quantum circuit, representing the composed operator.                                                 |

## Attributes

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### abelian

Whether the Operators in `oplist` are known to commute with one another.

**Return type**

`bool`

**Returns**

A bool indicating whether the `oplist` is Abelian.

<span id="undefined" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="undefined" />

### coeffs

Return a list of the coefficients of the operators listed. Raises exception for nested Listops.

**Return type**

`List`\[`Union`\[`complex`, `ParameterExpression`]]

<span id="undefined" />

### combo\_fn

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Return type**

`Callable`

**Returns**

The combination function.

<span id="undefined" />

### distributive

**Return type**

`bool`

<span id="undefined" />

### grad\_combo\_fn

The gradient of `combo_fn`.

**Return type**

`Optional`\[`Callable`]

<span id="undefined" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### oplist

The list of `OperatorBases` defining the underlying function of this Operator.

**Return type**

`List`\[`OperatorBase`]

**Returns**

The Operators defining the ListOp

<span id="undefined" />

### parameters

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`
