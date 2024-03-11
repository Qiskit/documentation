---
title: CircuitOp
description: API reference for qiskit.opflow.primitive_ops.CircuitOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.CircuitOp
---

# CircuitOp

<span id="qiskit.opflow.primitive_ops.CircuitOp" />

`qiskit.opflow.primitive_ops.CircuitOp(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/opflow/primitive_ops/circuit_op.py "view source code")

Bases: [`PrimitiveOp`](qiskit.opflow.primitive_ops.PrimitiveOp "qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp")

Deprecated: Class for Operators backed by Terra’s `QuantumCircuit` module.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.primitive_ops.circuit_op.CircuitOp` is deprecated as of qiskit-terra 0.24.0. It will be removed in the Qiskit 1.0 release. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The QuantumCircuit which defines the
*   **function.** (*behavior of the underlying*) –
*   **coeff** – A coefficient multiplying the primitive

**Raises**

[**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – Unsupported primitive, or primitive has ClassicalRegisters.

## Attributes

<span id="qiskit.opflow.primitive_ops.CircuitOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.CircuitOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.CircuitOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.primitive_ops.CircuitOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.primitive_ops.CircuitOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.CircuitOp.primitive" />

### primitive

`QuantumCircuit`

The primitive defining the underlying function of the Operator.

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.CircuitOp.settings" />

### settings

Return operator settings.

## Methods

### add

<span id="qiskit.opflow.primitive_ops.CircuitOp.add" />

`add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

### adjoint

<span id="qiskit.opflow.primitive_ops.CircuitOp.adjoint" />

`adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

**Return type**

[*CircuitOp*](#qiskit.opflow.primitive_ops.CircuitOp "qiskit.opflow.primitive_ops.circuit_op.CircuitOp")

### assign\_parameters

<span id="qiskit.opflow.primitive_ops.CircuitOp.assign_parameters" />

`assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

### compose

<span id="qiskit.opflow.primitive_ops.CircuitOp.compose" />

`compose(other, permutation=None, front=False)`

Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.

Note: You must be conscious of Quantum Circuit vs. Linear Algebra ordering conventions. Meaning, X.compose(Y) produces an X∘Y on qubit 0, but would produce a QuantumCircuit which looks like

> -\[Y]-\[X]-

Because Terra prints circuits with the initial state at the left side of the circuit.

**Parameters**

*   **other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` with which to compose self.
*   **permutation** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*] | None*) – `List[int]` which defines permutation on other operator.
*   **front** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If front==True, return `other.compose(self)`.

**Returns**

An `OperatorBase` equivalent to the function composition of self and other.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

### equals

<span id="qiskit.opflow.primitive_ops.CircuitOp.equals" />

`equals(other)`

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` to compare to self.

**Returns**

A bool equal to the equality of self and other.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### eval

<span id="qiskit.opflow.primitive_ops.CircuitOp.eval" />

`eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")  *|*[*Dict*](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.12)")*\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*,* [*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")*] |* [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")  *|*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")  *|*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector") *| None*) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase") | [complex](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")

### permute

<span id="qiskit.opflow.primitive_ops.CircuitOp.permute" />

`permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Returns**

A new CircuitOp containing the permuted circuit.

**Return type**

[*CircuitOp*](#qiskit.opflow.primitive_ops.CircuitOp "qiskit.opflow.primitive_ops.circuit_op.CircuitOp")

### primitive\_strings

<span id="qiskit.opflow.primitive_ops.CircuitOp.primitive_strings" />

`primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Returns**

A set of strings describing the primitives contained within the Operator.

**Return type**

[*Set*](https://docs.python.org/3/library/typing.html#typing.Set "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")]

### reduce

<span id="qiskit.opflow.primitive_ops.CircuitOp.reduce" />

`reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Returns**

The reduced `OperatorBase`.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

### tensor

<span id="qiskit.opflow.primitive_ops.CircuitOp.tensor" />

`tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` to tensor product with self.

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

**Return type**

[*CircuitOp*](#qiskit.opflow.primitive_ops.CircuitOp "qiskit.opflow.primitive_ops.circuit_op.CircuitOp") | [*TensoredOp*](qiskit.opflow.list_ops.TensoredOp "qiskit.opflow.list_ops.tensored_op.TensoredOp")

### to\_circuit

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_circuit" />

`to_circuit()`

Returns a `QuantumCircuit` equivalent to this Operator.

**Return type**

[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

### to\_circuit\_op

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_circuit_op" />

`to_circuit_op()`

Returns a `CircuitOp` equivalent to this Operator.

**Return type**

[*CircuitOp*](#qiskit.opflow.primitive_ops.CircuitOp "qiskit.opflow.primitive_ops.circuit_op.CircuitOp")

### to\_instruction

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_instruction" />

`to_instruction()`

Returns an `Instruction` equivalent to this Operator.

**Return type**

[*Instruction*](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

### to\_matrix

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_matrix" />

`to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Returns**

The NumPy `ndarray` equivalent to this Operator.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")

