---
title: VectorStateFn
description: API reference for qiskit.opflow.state_fns.VectorStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.VectorStateFn
---

# VectorStateFn

<span id="qiskit.opflow.state_fns.VectorStateFn" />

`VectorStateFn(primitive=None, coeff=1.0, is_measurement=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/state_fns/vector_state_fn.py "view source code")

Bases: `qiskit.opflow.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined in vector representation, and stored using Terra’s `Statevector` class.

**Parameters**

*   **primitive** (`Union`\[`list`, `ndarray`, `Statevector`, `None`]) – The `Statevector`, NumPy array, or list, which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Methods Defined Here

### add

<span id="qiskit.opflow.state_fns.VectorStateFn.add" />

`VectorStateFn.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

### adjoint

<span id="qiskit.opflow.state_fns.VectorStateFn.adjoint" />

`VectorStateFn.adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

`VectorStateFn`

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

### eval

<span id="qiskit.opflow.state_fns.VectorStateFn.eval" />

`VectorStateFn.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `Dict`\[`str`, `complex`], `ndarray`, `OperatorBase`, `Statevector`, `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[`OperatorBase`, `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

### permute

<span id="qiskit.opflow.state_fns.VectorStateFn.permute" />

`VectorStateFn.permute(permutation)`

Permute the qubits of the state function.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

`VectorStateFn`

**Returns**

A new StateFn containing the permuted primitive.

### primitive\_strings

<span id="qiskit.opflow.state_fns.VectorStateFn.primitive_strings" />

`VectorStateFn.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

### sample

<span id="qiskit.opflow.state_fns.VectorStateFn.sample" />

`VectorStateFn.sample(shots=1024, massive=False, reverse_endianness=False)`

Sample the state function as a normalized probability distribution. Returns dict of bitstrings in order of probability, with values being probability.

**Parameters**

*   **shots** (`int`) – The number of samples to take to approximate the State function.
*   **massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.
*   **reverse\_endianness** (`bool`) – Whether to reverse the endianness of the bitstrings in the return dict to match Terra’s big-endianness.

**Return type**

`dict`

**Returns**

A dict containing pairs sampled strings from the State function and sampling frequency divided by shots.

### tensor

<span id="qiskit.opflow.state_fns.VectorStateFn.tensor" />

`VectorStateFn.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, Plus.tensor(Zero) produces a |+⟩ on qubit 0 and a |0⟩ on qubit 1, or |+⟩⨂|0⟩, but would produce a QuantumCircuit like

> |0⟩– |+⟩–

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to tensor product with self.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

### to\_circuit\_op

<span id="qiskit.opflow.state_fns.VectorStateFn.to_circuit_op" />

`VectorStateFn.to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn.

**Return type**

`OperatorBase`

### to\_density\_matrix

<span id="qiskit.opflow.state_fns.VectorStateFn.to_density_matrix" />

`VectorStateFn.to_density_matrix(massive=False)`

Return matrix representing product of StateFn evaluated on pairs of basis states. Overridden by child classes.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Return type**

`ndarray`

**Returns**

The NumPy array representing the density matrix of the State function.

**Raises**

**ValueError** – If massive is set to False, and exponentially large computation is needed.

### to\_dict\_fn

<span id="qiskit.opflow.state_fns.VectorStateFn.to_dict_fn" />

`VectorStateFn.to_dict_fn()`

Creates the equivalent state function of type DictStateFn.

**Return type**

`StateFn`

**Returns**

A new DictStateFn equivalent to `self`.

### to\_matrix

<span id="qiskit.opflow.state_fns.VectorStateFn.to_matrix" />

`VectorStateFn.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

### to\_matrix\_op

<span id="qiskit.opflow.state_fns.VectorStateFn.to_matrix_op" />

`VectorStateFn.to_matrix_op(massive=False)`

Return a `VectorStateFn` for this `StateFn`.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Return type**

`OperatorBase`

**Returns**

A VectorStateFn equivalent to self.

## Attributes

<span id="qiskit.opflow.state_fns.VectorStateFn.INDENTATION" />

### INDENTATION

`= ' '`

<span id="qiskit.opflow.state_fns.VectorStateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="qiskit.opflow.state_fns.VectorStateFn.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.state_fns.VectorStateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

<span id="qiskit.opflow.state_fns.VectorStateFn.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.state_fns.VectorStateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.VectorStateFn.primitive" />

### primitive

`qiskit.quantum_info.states.statevector.Statevector`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.VectorStateFn.settings" />

### settings

Return settings.

**Return type**

`Dict`

