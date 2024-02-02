---
title: EvolvedOp
description: API reference for qiskit.opflow.evolutions.EvolvedOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.EvolvedOp
---

# EvolvedOp

<span id="qiskit.opflow.evolutions.EvolvedOp" />

`EvolvedOp(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/evolutions/evolved_op.py "view source code")

Bases: [`PrimitiveOp`](qiskit.opflow.primitive_ops.PrimitiveOp "qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp")

Deprecated: Class for wrapping Operator Evolutions for compilation (`convert`) by an EvolutionBase method later, essentially acting as a placeholder. Note that EvolvedOp is a weird case of PrimitiveOp. It happens to be that it fits into the PrimitiveOp interface nearly perfectly, and it essentially represents a placeholder for a PrimitiveOp later, even though it doesn’t actually hold a primitive object. We could have chosen for it to be an OperatorBase, but would have ended up copying and pasting a lot of code from PrimitiveOp.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.evolutions.evolved_op.EvolvedOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The operator being wrapped to signify evolution later.
*   **coeff** – A coefficient multiplying the operator

**Methods Defined Here**

|                                                                                                                                    |                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.evolutions.EvolvedOp#add "qiskit.opflow.evolutions.EvolvedOp.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                               |
| [`adjoint`](qiskit.opflow.evolutions.EvolvedOp#adjoint "qiskit.opflow.evolutions.EvolvedOp.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                              |
| [`assign_parameters`](qiskit.opflow.evolutions.EvolvedOp#assign_parameters "qiskit.opflow.evolutions.EvolvedOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. |
| [`compose`](qiskit.opflow.evolutions.EvolvedOp#compose "qiskit.opflow.evolutions.EvolvedOp.compose")                               | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                             |
| [`equals`](qiskit.opflow.evolutions.EvolvedOp#equals "qiskit.opflow.evolutions.EvolvedOp.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                                                     |
| [`eval`](qiskit.opflow.evolutions.EvolvedOp#eval "qiskit.opflow.evolutions.EvolvedOp.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                  |
| [`log_i`](qiskit.opflow.evolutions.EvolvedOp#log_i "qiskit.opflow.evolutions.EvolvedOp.log_i")                                     | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                             |
| [`permute`](qiskit.opflow.evolutions.EvolvedOp#permute "qiskit.opflow.evolutions.EvolvedOp.permute")                               | Permutes the qubits of the operator.                                                                                                         |
| [`primitive_strings`](qiskit.opflow.evolutions.EvolvedOp#primitive_strings "qiskit.opflow.evolutions.EvolvedOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                 |
| [`reduce`](qiskit.opflow.evolutions.EvolvedOp#reduce "qiskit.opflow.evolutions.EvolvedOp.reduce")                                  | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                           |
| [`tensor`](qiskit.opflow.evolutions.EvolvedOp#tensor "qiskit.opflow.evolutions.EvolvedOp.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                             |
| [`to_instruction`](qiskit.opflow.evolutions.EvolvedOp#to_instruction "qiskit.opflow.evolutions.EvolvedOp.to_instruction")          | Returns an `Instruction` equivalent to this Operator.                                                                                        |
| [`to_matrix`](qiskit.opflow.evolutions.EvolvedOp#to_matrix "qiskit.opflow.evolutions.EvolvedOp.to_matrix")                         | Return NumPy representation of the Operator.                                                                                                 |
| [`to_matrix_op`](qiskit.opflow.evolutions.EvolvedOp#to_matrix_op "qiskit.opflow.evolutions.EvolvedOp.to_matrix_op")                | Returns a `MatrixOp` equivalent to this Operator.                                                                                            |

## Attributes

<span id="qiskit.opflow.evolutions.EvolvedOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.evolutions.EvolvedOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.evolutions.EvolvedOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.evolutions.EvolvedOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.evolutions.EvolvedOp.parameters" />

### parameters

<span id="qiskit.opflow.evolutions.EvolvedOp.primitive" />

### primitive

`PrimitiveOp`

The primitive defining the underlying function of the Operator.

**Returns**

The primitive object.

<span id="qiskit.opflow.evolutions.EvolvedOp.settings" />

### settings

Return operator settings.

