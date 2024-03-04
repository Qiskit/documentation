---
title: CircuitStateFn
description: API reference for qiskit.opflow.state_fns.CircuitStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.CircuitStateFn
---

# CircuitStateFn

<span id="qiskit.opflow.state_fns.CircuitStateFn" />

`CircuitStateFn(primitive=None, coeff=1.0, is_measurement=False, from_operator=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/state_fns/circuit_state_fn.py "view source code")

Bases: `qiskit.opflow.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined by the action of a QuantumCircuit starting from |0⟩, and stored using Terra’s `QuantumCircuit` class.

**Parameters**

*   **primitive** (`Union`\[`QuantumCircuit`, `Instruction`, `None`]) – The `QuantumCircuit` (or `Instruction`, which will be converted) which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator.
*   **from\_operator** (`bool`) – if True the StateFn is derived from OperatorStateFn. (Default: False)

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

## Methods Defined Here

### add

<span id="qiskit.opflow.state_fns.CircuitStateFn.add" />

`CircuitStateFn.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

### adjoint

<span id="qiskit.opflow.state_fns.CircuitStateFn.adjoint" />

`CircuitStateFn.adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

`CircuitStateFn`

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

### assign\_parameters

<span id="qiskit.opflow.state_fns.CircuitStateFn.assign_parameters" />

`CircuitStateFn.assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (`dict`) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Return type**

`Union`\[`CircuitStateFn`, `ListOp`]

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

### compose

<span id="qiskit.opflow.state_fns.CircuitStateFn.compose" />

`CircuitStateFn.compose(other, permutation=None, front=False)`

Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.

**Parameters**

*   **other** (`OperatorBase`) – The Operator to compose with self.
*   **permutation** (`Optional`\[`List`\[`int`]]) – `List[int]` which defines permutation on other operator.
*   **front** (`bool`) – If front==True, return `other.compose(self)`.

**Return type**

`OperatorBase`

**Returns**

An Operator equivalent to the function composition of self and other.

**Raises**

**ValueError** – If self is not a measurement, it cannot be composed from the right.

### eval

<span id="qiskit.opflow.state_fns.CircuitStateFn.eval" />

`CircuitStateFn.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `Dict`\[`str`, `complex`], `ndarray`, `OperatorBase`, `Statevector`, `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[`OperatorBase`, `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

### from\_dict

<span id="qiskit.opflow.state_fns.CircuitStateFn.from_dict" />

`static CircuitStateFn.from_dict(density_dict)`

Construct the CircuitStateFn from a dict mapping strings to probability densities.

**Parameters**

**density\_dict** (`dict`) – The dict representing the desired state.

**Return type**

`CircuitStateFn`

**Returns**

The CircuitStateFn created from the dict.

### from\_vector

<span id="qiskit.opflow.state_fns.CircuitStateFn.from_vector" />

`static CircuitStateFn.from_vector(statevector)`

Construct the CircuitStateFn from a vector representing the statevector.

**Parameters**

**statevector** (`ndarray`) – The statevector representing the desired state.

**Return type**

`CircuitStateFn`

**Returns**

The CircuitStateFn created from the vector.

### permute

<span id="qiskit.opflow.state_fns.CircuitStateFn.permute" />

`CircuitStateFn.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

`CircuitStateFn`

**Returns**

A new CircuitStateFn containing the permuted circuit.

### primitive\_strings

<span id="qiskit.opflow.state_fns.CircuitStateFn.primitive_strings" />

`CircuitStateFn.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

### reduce

<span id="qiskit.opflow.state_fns.CircuitStateFn.reduce" />

`CircuitStateFn.reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Return type**

`CircuitStateFn`

**Returns**

The reduced `OperatorBase`.

### sample

<span id="qiskit.opflow.state_fns.CircuitStateFn.sample" />

`CircuitStateFn.sample(shots=1024, massive=False, reverse_endianness=False)`

Sample the state function as a normalized probability distribution. Returns dict of bitstrings in order of probability, with values being probability.

**Return type**

`dict`

### tensor

<span id="qiskit.opflow.state_fns.CircuitStateFn.tensor" />

`CircuitStateFn.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, Plus.tensor(Zero) produces a |+⟩ on qubit 0 and a |0⟩ on qubit 1, or |+⟩⨂|0⟩, but would produce a QuantumCircuit like:

> |0⟩– |+⟩–

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to tensor product with self.

**Return type**

`Union`\[`CircuitStateFn`, `TensoredOp`]

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

### to\_circuit

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_circuit" />

`CircuitStateFn.to_circuit(meas=False)`

Return QuantumCircuit representing StateFn

**Return type**

`QuantumCircuit`

### to\_circuit\_op

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_circuit_op" />

`CircuitStateFn.to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn.

**Return type**

`OperatorBase`

### to\_density\_matrix

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_density_matrix" />

`CircuitStateFn.to_density_matrix(massive=False)`

Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix. Generally big methods like this should require the use of a converter, but in this case a convenience method for quick hacking and access to classical tools is appropriate.

**Return type**

`ndarray`

### to\_instruction

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_instruction" />

`CircuitStateFn.to_instruction()`

Return Instruction corresponding to primitive.

### to\_matrix

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_matrix" />

`CircuitStateFn.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

## Attributes

<span id="qiskit.opflow.state_fns.CircuitStateFn.INDENTATION" />

### INDENTATION

`= ' '`

<span id="qiskit.opflow.state_fns.CircuitStateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="qiskit.opflow.state_fns.CircuitStateFn.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.state_fns.CircuitStateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

<span id="qiskit.opflow.state_fns.CircuitStateFn.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.state_fns.CircuitStateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.CircuitStateFn.primitive" />

### primitive

`qiskit.circuit.quantumcircuit.QuantumCircuit`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.CircuitStateFn.settings" />

### settings

Return settings.

**Return type**

`Dict`

