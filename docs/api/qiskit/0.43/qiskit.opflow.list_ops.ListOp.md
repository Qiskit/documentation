---
title: ListOp
description: API reference for qiskit.opflow.list_ops.ListOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.list_ops.ListOp
---

# ListOp

<span id="qiskit.opflow.list_ops.ListOp" />

`ListOp(oplist, combo_fn=None, coeff=1.0, abelian=False, grad_combo_fn=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/list_ops/list_op.py "view source code")

Bases: [`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

Deprecated: A Class for manipulating List Operators, and parent class to `SummedOp`, `ComposedOp` and `TensoredOp`.

List Operators are classes for storing and manipulating lists of Operators, State functions, or Measurements, and include some rule or `combo_fn` defining how the Operator functions of the list constituents should be combined to form to cumulative Operator function of the `ListOp`. For example, a `SummedOp` has an addition-based `combo_fn`, so once the Operators in its list are evaluated against some bitstring to produce a list of results, we know to add up those results to produce the final result of the `SummedOp`’s evaluation. In theory, this `combo_fn` can be any function over classical complex values, but for convenience we’ve chosen for them to be defined over NumPy arrays and values. This way, large numbers of evaluations, such as after calling `to_matrix` on the list constituents, can be efficiently combined. While the combination function is defined over classical values, it should be understood as the operation by which each Operators’ underlying function is combined to form the underlying Operator function of the `ListOp`. In this way, the `ListOps` are the basis for constructing large and sophisticated Operators, State Functions, and Measurements.

The base `ListOp` class is particularly interesting, as its `combo_fn` is “the identity list Operation”. Meaning, if we understand the `combo_fn` as a function from a list of complex values to some output, one such function is returning the list as-is. This is powerful for constructing compact hierarchical Operators which return many measurements in multiple dimensional lists.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.list_ops.list_op.ListOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **oplist** (*Sequence\[*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")*]*) – The list of `OperatorBases` defining this Operator’s underlying function.
*   **combo\_fn** (*Callable | None*) – The recombination function to combine classical results of the `oplist` Operators’ eval functions (e.g. sum). Default is lambda x: x.
*   **coeff** (*complex |* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – A coefficient multiplying the operator
*   **abelian** (*bool*) – Indicates whether the Operators in `oplist` are known to mutually commute.
*   **grad\_combo\_fn** (*Callable | None*) – The gradient of recombination function. If None, the gradient will be computed automatically.
*   **the** (*Note that the default "recombination function" lambda above is essentially*) –
*   **values** (*identity - it accepts the list of*) –
*   **list.** (*and returns them in a*) –

**Methods Defined Here**

|                                                                                                                          |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.list_ops.ListOp#add "qiskit.opflow.list_ops.ListOp.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.opflow.list_ops.ListOp#adjoint "qiskit.opflow.list_ops.ListOp.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.opflow.list_ops.ListOp#assign_parameters "qiskit.opflow.list_ops.ListOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`compose`](qiskit.opflow.list_ops.ListOp#compose "qiskit.opflow.list_ops.ListOp.compose")                               | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`default_combo_fn`](qiskit.opflow.list_ops.ListOp#default_combo_fn "qiskit.opflow.list_ops.ListOp.default_combo_fn")    | ListOp default combo function i.e. lambda x: x.                                                                                                                               |
| [`equals`](qiskit.opflow.list_ops.ListOp#equals "qiskit.opflow.list_ops.ListOp.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.opflow.list_ops.ListOp#eval "qiskit.opflow.list_ops.ListOp.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.opflow.list_ops.ListOp#exp_i "qiskit.opflow.list_ops.ListOp.exp_i")                                     | Return an `OperatorBase` equivalent to an exponentiation of self \* -i, e^(-i\*op).                                                                                           |
| [`log_i`](qiskit.opflow.list_ops.ListOp#log_i "qiskit.opflow.list_ops.ListOp.log_i")                                     | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`mul`](qiskit.opflow.list_ops.ListOp#mul "qiskit.opflow.list_ops.ListOp.mul")                                           | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra's `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`permute`](qiskit.opflow.list_ops.ListOp#permute "qiskit.opflow.list_ops.ListOp.permute")                               | Permute the qubits of the operator.                                                                                                                                           |
| [`power`](qiskit.opflow.list_ops.ListOp#power "qiskit.opflow.list_ops.ListOp.power")                                     | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](qiskit.opflow.list_ops.ListOp#primitive_strings "qiskit.opflow.list_ops.ListOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.opflow.list_ops.ListOp#reduce "qiskit.opflow.list_ops.ListOp.reduce")                                  | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.opflow.list_ops.ListOp#tensor "qiskit.opflow.list_ops.ListOp.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.opflow.list_ops.ListOp#tensorpower "qiskit.opflow.list_ops.ListOp.tensorpower")                   | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit_op`](qiskit.opflow.list_ops.ListOp#to_circuit_op "qiskit.opflow.list_ops.ListOp.to_circuit_op")             | Returns an equivalent Operator composed of only QuantumCircuit-based primitives, such as `CircuitOp` and `CircuitStateFn`.                                                    |
| [`to_matrix`](qiskit.opflow.list_ops.ListOp#to_matrix "qiskit.opflow.list_ops.ListOp.to_matrix")                         | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.opflow.list_ops.ListOp#to_matrix_op "qiskit.opflow.list_ops.ListOp.to_matrix_op")                | Returns an equivalent Operator composed of only NumPy-based primitives, such as `MatrixOp` and `VectorStateFn`.                                                               |
| [`to_pauli_op`](qiskit.opflow.list_ops.ListOp#to_pauli_op "qiskit.opflow.list_ops.ListOp.to_pauli_op")                   | Returns an equivalent Operator composed of only Pauli-based primitives, such as `PauliOp`.                                                                                    |
| [`to_spmatrix`](qiskit.opflow.list_ops.ListOp#to_spmatrix "qiskit.opflow.list_ops.ListOp.to_spmatrix")                   | Returns SciPy sparse matrix representation of the Operator.                                                                                                                   |
| [`traverse`](qiskit.opflow.list_ops.ListOp#traverse "qiskit.opflow.list_ops.ListOp.traverse")                            | Apply the convert\_fn to each node in the oplist.                                                                                                                             |

## Attributes

<span id="qiskit.opflow.list_ops.ListOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.list_ops.ListOp.abelian" />

### abelian

Whether the Operators in `oplist` are known to commute with one another.

**Returns**

A bool indicating whether the `oplist` is Abelian.

<span id="qiskit.opflow.list_ops.ListOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.list_ops.ListOp.coeffs" />

### coeffs

Return a list of the coefficients of the operators listed. Raises exception for nested Listops.

<span id="qiskit.opflow.list_ops.ListOp.combo_fn" />

### combo\_fn

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Returns**

The combination function.

<span id="qiskit.opflow.list_ops.ListOp.distributive" />

### distributive

Indicates whether the ListOp or subclass is distributive under composition. ListOp and SummedOp are, meaning that (opv @ op) = (opv\[0] @ op + opv\[1] @ op) (using plus for SummedOp, list for ListOp, etc.), while ComposedOp and TensoredOp do not behave this way.

**Returns**

A bool indicating whether the ListOp is distributive under composition.

<span id="qiskit.opflow.list_ops.ListOp.grad_combo_fn" />

### grad\_combo\_fn

The gradient of `combo_fn`.

<span id="qiskit.opflow.list_ops.ListOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.list_ops.ListOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.list_ops.ListOp.oplist" />

### oplist

The list of `OperatorBases` defining the underlying function of this Operator.

**Returns**

The Operators defining the ListOp

<span id="qiskit.opflow.list_ops.ListOp.parameters" />

### parameters

<span id="qiskit.opflow.list_ops.ListOp.settings" />

### settings

Return settings.

