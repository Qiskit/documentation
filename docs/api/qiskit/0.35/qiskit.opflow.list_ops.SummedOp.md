---
title: SummedOp
description: API reference for qiskit.opflow.list_ops.SummedOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.list_ops.SummedOp
---

# SummedOp

<span id="qiskit.opflow.list_ops.SummedOp" />

`SummedOp(oplist, coeff=1.0, abelian=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/list_ops/summed_op.py "view source code")

Bases: `qiskit.opflow.list_ops.list_op.ListOp`

A class for lazily representing sums of Operators. Often Operators cannot be efficiently added to one another, but may be manipulated further so that they can be later. This class holds logic to indicate that the Operators in `oplist` are meant to be added together, and therefore if they reach a point in which they can be, such as after evaluation or conversion to matrices, they can be reduced by addition.

**Parameters**

*   **oplist** (`List`\[`OperatorBase`]) – The Operators being summed.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the operator
*   **abelian** (`bool`) – Indicates whether the Operators in `oplist` are known to mutually commute.

## Methods Defined Here

### add

<span id="qiskit.opflow.list_ops.SummedOp.add" />

`SummedOp.add(other)`

Return Operator addition of `self` and `other`, overloaded by `+`.

<Admonition title="Note" type="note">
  This appends `other` to `self.oplist` without checking `other` is already included or not. If you want to simplify them, please use `simplify()`.
</Admonition>

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`SummedOp`

**Returns**

A `SummedOp` equivalent to the sum of self and other.

### collapse\_summands

<span id="qiskit.opflow.list_ops.SummedOp.collapse_summands" />

`SummedOp.collapse_summands()`

Return Operator by simplifying duplicate operators.

E.g., `SummedOp([2 * X ^ Y, X ^ Y]).collapse_summands() -> SummedOp([3 * X ^ Y])`.

**Return type**

`SummedOp`

**Returns**

A simplified `SummedOp` equivalent to self.

### equals

<span id="qiskit.opflow.list_ops.SummedOp.equals" />

`SummedOp.equals(other)`

Check if other is equal to self.

<Admonition title="Note" type="note">
  This is not a mathematical check for equality. If `self` and `other` implement the same operation but differ in the representation (e.g. different type of summands) `equals` will evaluate to `False`.
</Admonition>

**Parameters**

**other** (`OperatorBase`) – The other operator to check for equality.

**Return type**

`bool`

**Returns**

True, if other and self are equal, otherwise False.

**Examples**

```python
>>> from qiskit.opflow import X, Z
>>> 2 * X == X + X
True
>>> X + Z == Z + X
True
```

### reduce

<span id="qiskit.opflow.list_ops.SummedOp.reduce" />

`SummedOp.reduce()`

Try collapsing list or trees of sums.

Tries to sum up duplicate operators and reduces the operators in the sum.

**Return type**

`OperatorBase`

**Returns**

A collapsed version of self, if possible.

### to\_circuit

<span id="qiskit.opflow.list_ops.SummedOp.to_circuit" />

`SummedOp.to_circuit()`

Returns the quantum circuit, representing the SummedOp. In the first step, the SummedOp is converted to MatrixOp. This is straightforward for most operators, but it is not supported for operators containing parameterized PrimitiveOps (in that case, OpflowError is raised). In the next step, the MatrixOp representation of SummedOp is converted to circuit. In most cases, if the summands themselves are unitary operators, the SummedOp itself is non-unitary and can not be converted to circuit. In that case, ExtensionError is raised in the underlying modules.

**Return type**

`QuantumCircuit`

**Returns**

The circuit representation of the summed operator.

**Raises**

*   [**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – if SummedOp can not be converted to MatrixOp (e.g. SummedOp is composed of
*   **parameterized PrimitiveOps**\*\*)\*\*\*\*\*\* –

### to\_matrix\_op

<span id="qiskit.opflow.list_ops.SummedOp.to_matrix_op" />

`SummedOp.to_matrix_op(massive=False)`

Returns an equivalent Operator composed of only NumPy-based primitives, such as `MatrixOp` and `VectorStateFn`.

**Return type**

`SummedOp`

### to\_pauli\_op

<span id="qiskit.opflow.list_ops.SummedOp.to_pauli_op" />

`SummedOp.to_pauli_op(massive=False)`

Returns an equivalent Operator composed of only Pauli-based primitives, such as `PauliOp`.

**Return type**

`SummedOp`

## Attributes

<span id="qiskit.opflow.list_ops.SummedOp.INDENTATION" />

### INDENTATION

`= ' '`

<span id="qiskit.opflow.list_ops.SummedOp.abelian" />

### abelian

Whether the Operators in `oplist` are known to commute with one another.

**Return type**

`bool`

**Returns**

A bool indicating whether the `oplist` is Abelian.

<span id="qiskit.opflow.list_ops.SummedOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="qiskit.opflow.list_ops.SummedOp.coeffs" />

### coeffs

Return a list of the coefficients of the operators listed. Raises exception for nested Listops.

**Return type**

`List`\[`Union`\[`complex`, `ParameterExpression`]]

<span id="qiskit.opflow.list_ops.SummedOp.combo_fn" />

### combo\_fn

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Return type**

`Callable`

**Returns**

The combination function.

<span id="qiskit.opflow.list_ops.SummedOp.distributive" />

### distributive

**Return type**

`bool`

<span id="qiskit.opflow.list_ops.SummedOp.grad_combo_fn" />

### grad\_combo\_fn

The gradient of `combo_fn`.

**Return type**

`Optional`\[`Callable`]

<span id="qiskit.opflow.list_ops.SummedOp.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.list_ops.SummedOp.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.list_ops.SummedOp.oplist" />

### oplist

The list of `OperatorBases` defining the underlying function of this Operator.

**Return type**

`List`\[`OperatorBase`]

**Returns**

The Operators defining the ListOp

<span id="qiskit.opflow.list_ops.SummedOp.parameters" />

### parameters

<span id="qiskit.opflow.list_ops.SummedOp.settings" />

### settings

Return settings.

**Return type**

`Dict`

