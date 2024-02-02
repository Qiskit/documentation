---
title: PauliSumOp
description: API reference for qiskit.opflow.primitive_ops.PauliSumOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.PauliSumOp
---

# PauliSumOp

<span id="qiskit.opflow.primitive_ops.PauliSumOp" />

`PauliSumOp(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/primitive_ops/pauli_sum_op.py "view source code")

Bases: [`PrimitiveOp`](qiskit.opflow.primitive_ops.PrimitiveOp "qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp")

Deprecated: Class for Operators backed by Terra’s `SparsePauliOp` class.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.primitive_ops.pauli_sum_op.PauliSumOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The SparsePauliOp which defines the behavior of the underlying function.
*   **coeff** – A coefficient multiplying the primitive.
*   **grouping\_type** – The type of grouping. If None, the operator is not grouped.

**Raises**

**TypeError** – invalid parameters.

**Methods Defined Here**

|                                                                                                                                            |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.PauliSumOp#add "qiskit.opflow.primitive_ops.PauliSumOp.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.opflow.primitive_ops.PauliSumOp#adjoint "qiskit.opflow.primitive_ops.PauliSumOp.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`compose`](qiskit.opflow.primitive_ops.PauliSumOp#compose "qiskit.opflow.primitive_ops.PauliSumOp.compose")                               | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.opflow.primitive_ops.PauliSumOp#equals "qiskit.opflow.primitive_ops.PauliSumOp.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.opflow.primitive_ops.PauliSumOp#eval "qiskit.opflow.primitive_ops.PauliSumOp.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.opflow.primitive_ops.PauliSumOp#exp_i "qiskit.opflow.primitive_ops.PauliSumOp.exp_i")                                     | Return a `CircuitOp` equivalent to e^-iH for this operator H.                                                                                                                 |
| [`from_list`](qiskit.opflow.primitive_ops.PauliSumOp#from_list "qiskit.opflow.primitive_ops.PauliSumOp.from_list")                         | Construct from a pauli\_list with the form \[(pauli\_str, coeffs)]                                                                                                            |
| [`is_hermitian`](qiskit.opflow.primitive_ops.PauliSumOp#is_hermitian "qiskit.opflow.primitive_ops.PauliSumOp.is_hermitian")                | Return True if the operator is hermitian.                                                                                                                                     |
| [`is_zero`](qiskit.opflow.primitive_ops.PauliSumOp#is_zero "qiskit.opflow.primitive_ops.PauliSumOp.is_zero")                               | Return this operator is zero operator or not.                                                                                                                                 |
| [`matrix_iter`](qiskit.opflow.primitive_ops.PauliSumOp#matrix_iter "qiskit.opflow.primitive_ops.PauliSumOp.matrix_iter")                   | Return a matrix representation iterator.                                                                                                                                      |
| [`mul`](qiskit.opflow.primitive_ops.PauliSumOp#mul "qiskit.opflow.primitive_ops.PauliSumOp.mul")                                           | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra's `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`permute`](qiskit.opflow.primitive_ops.PauliSumOp#permute "qiskit.opflow.primitive_ops.PauliSumOp.permute")                               | Permutes the sequence of `PauliSumOp`.                                                                                                                                        |
| [`primitive_strings`](qiskit.opflow.primitive_ops.PauliSumOp#primitive_strings "qiskit.opflow.primitive_ops.PauliSumOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.opflow.primitive_ops.PauliSumOp#reduce "qiskit.opflow.primitive_ops.PauliSumOp.reduce")                                  | Simplify the primitive `SparsePauliOp`.                                                                                                                                       |
| [`tensor`](qiskit.opflow.primitive_ops.PauliSumOp#tensor "qiskit.opflow.primitive_ops.PauliSumOp.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`to_instruction`](qiskit.opflow.primitive_ops.PauliSumOp#to_instruction "qiskit.opflow.primitive_ops.PauliSumOp.to_instruction")          | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`to_matrix`](qiskit.opflow.primitive_ops.PauliSumOp#to_matrix "qiskit.opflow.primitive_ops.PauliSumOp.to_matrix")                         | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_pauli_op`](qiskit.opflow.primitive_ops.PauliSumOp#to_pauli_op "qiskit.opflow.primitive_ops.PauliSumOp.to_pauli_op")                   | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |
| [`to_spmatrix`](qiskit.opflow.primitive_ops.PauliSumOp#to_spmatrix "qiskit.opflow.primitive_ops.PauliSumOp.to_spmatrix")                   | Returns SciPy sparse matrix representation of the `PauliSumOp`.                                                                                                               |

## Attributes

<span id="qiskit.opflow.primitive_ops.PauliSumOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.PauliSumOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.PauliSumOp.coeffs" />

### coeffs

Return the Pauli coefficients.

<span id="qiskit.opflow.primitive_ops.PauliSumOp.grouping_type" />

### grouping\_type

Type of Grouping

**Type**

Returns

<span id="qiskit.opflow.primitive_ops.PauliSumOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.primitive_ops.PauliSumOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.primitive_ops.PauliSumOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.PauliSumOp.primitive" />

### primitive

`SparsePauliOp`

The primitive defining the underlying function of the Operator.

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.PauliSumOp.settings" />

### settings

Return operator settings.

