---
title: MatrixOp
description: API reference for qiskit.opflow.primitive_ops.MatrixOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.MatrixOp
---

# MatrixOp

<span id="qiskit.opflow.primitive_ops.MatrixOp" />

`MatrixOp(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Bases: [`PrimitiveOp`](qiskit.opflow.primitive_ops.PrimitiveOp "qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp")

Deprecated: Class for Operators represented by matrices, backed by Terra’s `Operator` module.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.primitive_ops.matrix_op.MatrixOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The matrix-like object which defines the behavior of the underlying function.
*   **coeff** – A coefficient multiplying the primitive

**Raises**

*   **TypeError** – invalid parameters.
*   **ValueError** – invalid parameters.

**Methods Defined Here**

|                                                                                                                                        |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.MatrixOp#add "qiskit.opflow.primitive_ops.MatrixOp.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                   |
| [`adjoint`](qiskit.opflow.primitive_ops.MatrixOp#adjoint "qiskit.opflow.primitive_ops.MatrixOp.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                  |
| [`compose`](qiskit.opflow.primitive_ops.MatrixOp#compose "qiskit.opflow.primitive_ops.MatrixOp.compose")                               | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`. |
| [`equals`](qiskit.opflow.primitive_ops.MatrixOp#equals "qiskit.opflow.primitive_ops.MatrixOp.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                         |
| [`eval`](qiskit.opflow.primitive_ops.MatrixOp#eval "qiskit.opflow.primitive_ops.MatrixOp.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                      |
| [`exp_i`](qiskit.opflow.primitive_ops.MatrixOp#exp_i "qiskit.opflow.primitive_ops.MatrixOp.exp_i")                                     | Return a `CircuitOp` equivalent to e^-iH for this operator H                                                     |
| [`permute`](qiskit.opflow.primitive_ops.MatrixOp#permute "qiskit.opflow.primitive_ops.MatrixOp.permute")                               | Creates a new MatrixOp that acts on the permuted qubits.                                                         |
| [`primitive_strings`](qiskit.opflow.primitive_ops.MatrixOp#primitive_strings "qiskit.opflow.primitive_ops.MatrixOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                     |
| [`tensor`](qiskit.opflow.primitive_ops.MatrixOp#tensor "qiskit.opflow.primitive_ops.MatrixOp.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                 |
| [`to_instruction`](qiskit.opflow.primitive_ops.MatrixOp#to_instruction "qiskit.opflow.primitive_ops.MatrixOp.to_instruction")          | Returns an `Instruction` equivalent to this Operator.                                                            |
| [`to_matrix`](qiskit.opflow.primitive_ops.MatrixOp#to_matrix "qiskit.opflow.primitive_ops.MatrixOp.to_matrix")                         | Return NumPy representation of the Operator.                                                                     |
| [`to_matrix_op`](qiskit.opflow.primitive_ops.MatrixOp#to_matrix_op "qiskit.opflow.primitive_ops.MatrixOp.to_matrix_op")                | Returns a `MatrixOp` equivalent to this Operator.                                                                |

## Attributes

<span id="qiskit.opflow.primitive_ops.MatrixOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.MatrixOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.MatrixOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.primitive_ops.MatrixOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.primitive_ops.MatrixOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.MatrixOp.primitive" />

### primitive

`Operator`

The primitive defining the underlying function of the Operator.

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.MatrixOp.settings" />

### settings

Return operator settings.

