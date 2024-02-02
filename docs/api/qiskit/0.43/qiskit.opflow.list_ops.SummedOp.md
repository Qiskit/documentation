---
title: SummedOp
description: API reference for qiskit.opflow.list_ops.SummedOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.list_ops.SummedOp
---

# SummedOp

<span id="qiskit.opflow.list_ops.SummedOp" />

`SummedOp(oplist, coeff=1.0, abelian=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/list_ops/summed_op.py "view source code")

Bases: [`ListOp`](qiskit.opflow.list_ops.ListOp "qiskit.opflow.list_ops.list_op.ListOp")

Deprecated: A class for lazily representing sums of Operators. Often Operators cannot be efficiently added to one another, but may be manipulated further so that they can be later. This class holds logic to indicate that the Operators in `oplist` are meant to be added together, and therefore if they reach a point in which they can be, such as after evaluation or conversion to matrices, they can be reduced by addition.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.list_ops.summed_op.SummedOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **oplist** (*List\[*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")*]*) – The Operators being summed.
*   **coeff** (*complex |* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – A coefficient multiplying the operator
*   **abelian** (*bool*) – Indicates whether the Operators in `oplist` are known to mutually commute.

**Methods Defined Here**

|                                                                                                                              |                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.list_ops.SummedOp#add "qiskit.opflow.list_ops.SummedOp.add")                                           | Return Operator addition of `self` and `other`, overloaded by `+`.                                              |
| [`collapse_summands`](qiskit.opflow.list_ops.SummedOp#collapse_summands "qiskit.opflow.list_ops.SummedOp.collapse_summands") | Return Operator by simplifying duplicate operators.                                                             |
| [`equals`](qiskit.opflow.list_ops.SummedOp#equals "qiskit.opflow.list_ops.SummedOp.equals")                                  | Check if other is equal to self.                                                                                |
| [`reduce`](qiskit.opflow.list_ops.SummedOp#reduce "qiskit.opflow.list_ops.SummedOp.reduce")                                  | Try collapsing list or trees of sums.                                                                           |
| [`to_circuit`](qiskit.opflow.list_ops.SummedOp#to_circuit "qiskit.opflow.list_ops.SummedOp.to_circuit")                      | Returns the quantum circuit, representing the SummedOp.                                                         |
| [`to_matrix_op`](qiskit.opflow.list_ops.SummedOp#to_matrix_op "qiskit.opflow.list_ops.SummedOp.to_matrix_op")                | Returns an equivalent Operator composed of only NumPy-based primitives, such as `MatrixOp` and `VectorStateFn`. |
| [`to_pauli_op`](qiskit.opflow.list_ops.SummedOp#to_pauli_op "qiskit.opflow.list_ops.SummedOp.to_pauli_op")                   | Returns an equivalent Operator composed of only Pauli-based primitives, such as `PauliOp`.                      |

## Attributes

<span id="qiskit.opflow.list_ops.SummedOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.list_ops.SummedOp.abelian" />

### abelian

Whether the Operators in `oplist` are known to commute with one another.

**Returns**

A bool indicating whether the `oplist` is Abelian.

<span id="qiskit.opflow.list_ops.SummedOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.list_ops.SummedOp.coeffs" />

### coeffs

Return a list of the coefficients of the operators listed. Raises exception for nested Listops.

<span id="qiskit.opflow.list_ops.SummedOp.combo_fn" />

### combo\_fn

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Returns**

The combination function.

<span id="qiskit.opflow.list_ops.SummedOp.distributive" />

### distributive

<span id="qiskit.opflow.list_ops.SummedOp.grad_combo_fn" />

### grad\_combo\_fn

The gradient of `combo_fn`.

<span id="qiskit.opflow.list_ops.SummedOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.list_ops.SummedOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.list_ops.SummedOp.oplist" />

### oplist

The list of `OperatorBases` defining the underlying function of this Operator.

**Returns**

The Operators defining the ListOp

<span id="qiskit.opflow.list_ops.SummedOp.parameters" />

### parameters

<span id="qiskit.opflow.list_ops.SummedOp.settings" />

### settings

Return settings.

