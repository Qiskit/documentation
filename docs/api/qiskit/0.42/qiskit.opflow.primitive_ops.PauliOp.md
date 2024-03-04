---
title: PauliOp
description: API reference for qiskit.opflow.primitive_ops.PauliOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.PauliOp
---

# PauliOp

<span id="qiskit.opflow.primitive_ops.PauliOp" />

`PauliOp(primitive, coeff=1.0)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/primitive_ops/pauli_op.py "view source code")

Bases: [`qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`](qiskit.opflow.primitive_ops.PrimitiveOp "qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp")

Class for Operators backed by Terra’s `Pauli` module.

**Parameters**

*   **primitive** ([`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.symplectic.pauli.Pauli")) – The Pauli which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

## Methods Defined Here

### add

<span id="qiskit.opflow.primitive_ops.PauliOp.add" />

`PauliOp.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

### adjoint

<span id="qiskit.opflow.primitive_ops.PauliOp.adjoint" />

`PauliOp.adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

[`PauliOp`](qiskit.opflow.primitive_ops.PauliOp "qiskit.opflow.primitive_ops.pauli_op.PauliOp")

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

### compose

<span id="qiskit.opflow.primitive_ops.PauliOp.compose" />

`PauliOp.compose(other, permutation=None, front=False)`

Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.

Note: You must be conscious of Quantum Circuit vs. Linear Algebra ordering conventions. Meaning, X.compose(Y) produces an X∘Y on qubit 0, but would produce a QuantumCircuit which looks like

> -\[Y]-\[X]-

Because Terra prints circuits with the initial state at the left side of the circuit.

**Parameters**

*   **other** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` with which to compose self.
*   **permutation** (`Optional`\[`List`\[`int`]]) – `List[int]` which defines permutation on other operator.
*   **front** (`bool`) – If front==True, return `other.compose(self)`.

**Return type**

[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the function composition of self and other.

### equals

<span id="qiskit.opflow.primitive_ops.PauliOp.equals" />

`PauliOp.equals(other)`

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` to compare to self.

**Return type**

`bool`

**Returns**

A bool equal to the equality of self and other.

### eval

<span id="qiskit.opflow.primitive_ops.PauliOp.eval" />

`PauliOp.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `Dict`\[`str`, `complex`], `ndarray`, [`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase"), [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector"), `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase"), `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

### exp\_i

<span id="qiskit.opflow.primitive_ops.PauliOp.exp_i" />

`PauliOp.exp_i()`

Return a `CircuitOp` equivalent to e^-iH for this operator H.

**Return type**

[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

### permute

<span id="qiskit.opflow.primitive_ops.PauliOp.permute" />

`PauliOp.permute(permutation)`

Permutes the sequence of Pauli matrices.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each Pauli should be permuted. The Pauli at index j of the primitive should be permuted to position permutation\[j].

**Return type**

[`PauliOp`](qiskit.opflow.primitive_ops.PauliOp "qiskit.opflow.primitive_ops.pauli_op.PauliOp")

**Returns**

A new PauliOp representing the permuted operator. For operator (X ^ Y ^ Z) and indices=\[1,2,4], it returns (X ^ I ^ Y ^ Z ^ I).

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – if indices do not define a new index for each qubit.

### primitive\_strings

<span id="qiskit.opflow.primitive_ops.PauliOp.primitive_strings" />

`PauliOp.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

### tensor

<span id="qiskit.opflow.primitive_ops.PauliOp.tensor" />

`PauliOp.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` to tensor product with self.

**Return type**

[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

### to\_circuit

<span id="qiskit.opflow.primitive_ops.PauliOp.to_circuit" />

`PauliOp.to_circuit()`

Returns a `QuantumCircuit` equivalent to this Operator.

**Return type**

[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

### to\_instruction

<span id="qiskit.opflow.primitive_ops.PauliOp.to_instruction" />

`PauliOp.to_instruction()`

Returns an `Instruction` equivalent to this Operator.

**Return type**

[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

### to\_matrix

<span id="qiskit.opflow.primitive_ops.PauliOp.to_matrix" />

`PauliOp.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

### to\_pauli\_op

<span id="qiskit.opflow.primitive_ops.PauliOp.to_pauli_op" />

`PauliOp.to_pauli_op(massive=False)`

Returns a sum of `PauliOp` s equivalent to this Operator.

**Return type**

[`PauliOp`](qiskit.opflow.primitive_ops.PauliOp "qiskit.opflow.primitive_ops.pauli_op.PauliOp")

### to\_spmatrix

<span id="qiskit.opflow.primitive_ops.PauliOp.to_spmatrix" />

`PauliOp.to_spmatrix()`

Returns SciPy sparse matrix representation of the Operator.

**Return type**

`spmatrix`

**Returns**

CSR sparse matrix representation of the Operator.

**Raises**

**ValueError** – invalid parameters.

## Attributes

<span id="qiskit.opflow.primitive_ops.PauliOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.PauliOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.PauliOp.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.PauliOp.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.PauliOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.PauliOp.primitive" />

### primitive

`qiskit.quantum_info.operators.symplectic.pauli.Pauli`

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.operators.operator.Operator"), [`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.symplectic.pauli.Pauli"), [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp"), [`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")]

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.PauliOp.settings" />

### settings

Return operator settings.

**Return type**

`Dict`

