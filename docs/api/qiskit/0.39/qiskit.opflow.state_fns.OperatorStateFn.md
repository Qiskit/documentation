---
title: OperatorStateFn
description: API reference for qiskit.opflow.state_fns.OperatorStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.OperatorStateFn
---

# OperatorStateFn

<span id="qiskit.opflow.state_fns.OperatorStateFn" />

`OperatorStateFn(primitive, coeff=1.0, is_measurement=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/opflow/state_fns/operator_state_fn.py "view source code")

Bases: [`qiskit.opflow.state_fns.state_fn.StateFn`](qiskit.opflow.state_fns.StateFn "qiskit.opflow.state_fns.state_fn.StateFn")

A class for state functions and measurements which are defined by a density Operator, stored using an `OperatorBase`.

**Parameters**

*   **primitive** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` which defines the behavior of the underlying State function.
*   **coeff** (`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient by which to multiply the state function
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Methods Defined Here

### add

<span id="qiskit.opflow.state_fns.OperatorStateFn.add" />

`OperatorStateFn.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`Union`\[[`OperatorStateFn`](qiskit.opflow.state_fns.OperatorStateFn "qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn"), [`SummedOp`](qiskit.opflow.list_ops.SummedOp "qiskit.opflow.list_ops.summed_op.SummedOp")]

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

### adjoint

<span id="qiskit.opflow.state_fns.OperatorStateFn.adjoint" />

`OperatorStateFn.adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

[`OperatorStateFn`](qiskit.opflow.state_fns.OperatorStateFn "qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn")

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

### eval

<span id="qiskit.opflow.state_fns.OperatorStateFn.eval" />

`OperatorStateFn.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `dict`, `ndarray`, [`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase"), [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector"), `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase"), `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

### permute

<span id="qiskit.opflow.state_fns.OperatorStateFn.permute" />

`OperatorStateFn.permute(permutation)`

Permute the qubits of the state function.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

[`OperatorStateFn`](qiskit.opflow.state_fns.OperatorStateFn "qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn")

**Returns**

A new StateFn containing the permuted primitive.

### primitive\_strings

<span id="qiskit.opflow.state_fns.OperatorStateFn.primitive_strings" />

`OperatorStateFn.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

### sample

<span id="qiskit.opflow.state_fns.OperatorStateFn.sample" />

`OperatorStateFn.sample(shots=1024, massive=False, reverse_endianness=False)`

Sample the state function as a normalized probability distribution. Returns dict of bitstrings in order of probability, with values being probability.

**Parameters**

*   **shots** (`int`) – The number of samples to take to approximate the State function.
*   **massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.
*   **reverse\_endianness** (`bool`) – Whether to reverse the endianness of the bitstrings in the return dict to match Terra’s big-endianness.

**Returns**

A dict containing pairs sampled strings from the State function and sampling frequency divided by shots.

### tensor

<span id="qiskit.opflow.state_fns.OperatorStateFn.tensor" />

`OperatorStateFn.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, Plus.tensor(Zero) produces a |+⟩ on qubit 0 and a |0⟩ on qubit 1, or |+⟩⨂|0⟩, but would produce a QuantumCircuit like

> |0⟩– |+⟩–

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` to tensor product with self.

**Return type**

`Union`\[[`OperatorStateFn`](qiskit.opflow.state_fns.OperatorStateFn "qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn"), [`TensoredOp`](qiskit.opflow.list_ops.TensoredOp "qiskit.opflow.list_ops.tensored_op.TensoredOp")]

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

### to\_circuit\_op

<span id="qiskit.opflow.state_fns.OperatorStateFn.to_circuit_op" />

`OperatorStateFn.to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn. Ignore for now because this is undefined. TODO maybe call to\_pauli\_op and diagonalize here, but that could be very inefficient, e.g. splitting one Stabilizer measurement into hundreds of 1 qubit Paulis.

### to\_density\_matrix

<span id="qiskit.opflow.state_fns.OperatorStateFn.to_density_matrix" />

`OperatorStateFn.to_density_matrix(massive=False)`

Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix. Generally big methods like this should require the use of a converter, but in this case a convenience method for quick hacking and access to classical tools is appropriate.

**Return type**

`ndarray`

### to\_matrix

<span id="qiskit.opflow.state_fns.OperatorStateFn.to_matrix" />

`OperatorStateFn.to_matrix(massive=False)`

Note: this does not return a density matrix, it returns a classical matrix containing the quantum or classical vector representing the evaluation of the state function on each binary basis state. Do not assume this is is a normalized quantum or classical probability vector. If we allowed this to return a density matrix, then we would need to change the definition of composition to be \~Op @ StateFn @ Op for those cases, whereas by this methodology we can ensure that composition always means Op @ StateFn.

Return numpy vector of state vector, warn if more than 16 qubits to force the user to set massive=True if they want such a large vector.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Returns**

Vector of state vector

**Return type**

np.ndarray

**Raises**

**ValueError** – Invalid parameters.

### to\_matrix\_op

<span id="qiskit.opflow.state_fns.OperatorStateFn.to_matrix_op" />

`OperatorStateFn.to_matrix_op(massive=False)`

Return a MatrixOp for this operator.

**Return type**

[`OperatorStateFn`](qiskit.opflow.state_fns.OperatorStateFn "qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn")

## Attributes

<span id="qiskit.opflow.state_fns.OperatorStateFn.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.state_fns.OperatorStateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

<span id="qiskit.opflow.state_fns.OperatorStateFn.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.state_fns.OperatorStateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

<span id="qiskit.opflow.state_fns.OperatorStateFn.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.state_fns.OperatorStateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.OperatorStateFn.primitive" />

### primitive

`qiskit.opflow.operator_base.OperatorBase`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.OperatorStateFn.settings" />

### settings

Return settings.

**Return type**

`Dict`

