---
title: CircuitOp
description: API reference for qiskit.opflow.primitive_ops.CircuitOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.CircuitOp
---

# CircuitOp

<span id="qiskit.opflow.primitive_ops.CircuitOp" />

`CircuitOp(primitive, coeff=1.0)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/opflow/primitive_ops/circuit_op.py "view source code")

Bases: `qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`

Class for Operators backed by Terra’s `QuantumCircuit` module.

**Parameters**

*   **primitive** (`Union`\[`Instruction`, `QuantumCircuit`]) – The QuantumCircuit which defines the
*   **of the underlying function.** (*behavior*) –
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

## Methods Defined Here

### add

<span id="qiskit.opflow.primitive_ops.CircuitOp.add" />

`CircuitOp.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

### adjoint

<span id="qiskit.opflow.primitive_ops.CircuitOp.adjoint" />

`CircuitOp.adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

`CircuitOp`

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

### assign\_parameters

<span id="qiskit.opflow.primitive_ops.CircuitOp.assign_parameters" />

`CircuitOp.assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (`dict`) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Return type**

`OperatorBase`

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

### compose

<span id="qiskit.opflow.primitive_ops.CircuitOp.compose" />

`CircuitOp.compose(other, permutation=None, front=False)`

Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.

Note: You must be conscious of Quantum Circuit vs. Linear Algebra ordering conventions. Meaning, X.compose(Y) produces an X∘Y on qubit 0, but would produce a QuantumCircuit which looks like

> -\[Y]-\[X]-

Because Terra prints circuits with the initial state at the left side of the circuit.

**Parameters**

*   **other** (`OperatorBase`) – The `OperatorBase` with which to compose self.
*   **permutation** (`Optional`\[`List`\[`int`]]) – `List[int]` which defines permutation on other operator.
*   **front** (`bool`) – If front==True, return `other.compose(self)`.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the function composition of self and other.

### equals

<span id="qiskit.opflow.primitive_ops.CircuitOp.equals" />

`CircuitOp.equals(other)`

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to compare to self.

**Return type**

`bool`

**Returns**

A bool equal to the equality of self and other.

### eval

<span id="qiskit.opflow.primitive_ops.CircuitOp.eval" />

`CircuitOp.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `Dict`\[`str`, `complex`], `ndarray`, `OperatorBase`, `Statevector`, `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[`OperatorBase`, `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

### permute

<span id="qiskit.opflow.primitive_ops.CircuitOp.permute" />

`CircuitOp.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

`CircuitOp`

**Returns**

A new CircuitOp containing the permuted circuit.

### primitive\_strings

<span id="qiskit.opflow.primitive_ops.CircuitOp.primitive_strings" />

`CircuitOp.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

### reduce

<span id="qiskit.opflow.primitive_ops.CircuitOp.reduce" />

`CircuitOp.reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Return type**

`OperatorBase`

**Returns**

The reduced `OperatorBase`.

### tensor

<span id="qiskit.opflow.primitive_ops.CircuitOp.tensor" />

`CircuitOp.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to tensor product with self.

**Return type**

`Union`\[`CircuitOp`, `TensoredOp`]

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

### to\_circuit

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_circuit" />

`CircuitOp.to_circuit()`

Returns a `QuantumCircuit` equivalent to this Operator.

**Return type**

`QuantumCircuit`

### to\_circuit\_op

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_circuit_op" />

`CircuitOp.to_circuit_op()`

Returns a `CircuitOp` equivalent to this Operator.

**Return type**

`CircuitOp`

### to\_instruction

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_instruction" />

`CircuitOp.to_instruction()`

Returns an `Instruction` equivalent to this Operator.

**Return type**

`Instruction`

### to\_matrix

<span id="qiskit.opflow.primitive_ops.CircuitOp.to_matrix" />

`CircuitOp.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

## Attributes

<span id="qiskit.opflow.primitive_ops.CircuitOp.INDENTATION" />

### INDENTATION

`= ' '`

<span id="qiskit.opflow.primitive_ops.CircuitOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.CircuitOp.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.CircuitOp.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.CircuitOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.CircuitOp.primitive" />

### primitive

`qiskit.circuit.quantumcircuit.QuantumCircuit`

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[`QuantumCircuit`, `Operator`, `Pauli`, `SparsePauliOp`, `OperatorBase`]

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.CircuitOp.settings" />

### settings

Return operator settings.

**Return type**

`Dict`

