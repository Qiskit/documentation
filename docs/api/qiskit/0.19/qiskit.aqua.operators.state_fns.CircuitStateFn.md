---
title: CircuitStateFn
description: API reference for qiskit.aqua.operators.state_fns.CircuitStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.state_fns.CircuitStateFn
---

# CircuitStateFn

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn" />

`CircuitStateFn(primitive=None, coeff=1.0, is_measurement=False)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/state_fns/circuit_state_fn.py "view source code")

A class for state functions and measurements which are defined by the action of a QuantumCircuit starting from |0⟩, and stored using Terra’s `QuantumCircuit` class.

**Parameters**

*   **primitive** (`Union`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `None`]) – The `QuantumCircuit` (or `Instruction`, which will be converted) which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator.

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

## Attributes

### coeff

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.coeff" />

`Union[int, float, complex, qiskit.circuit.parameterexpression.ParameterExpression]`

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

### is\_measurement

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.is_measurement" />

`bool`

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

### num\_qubits

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.num_qubits" />

`int`

The number of qubits over which the Operator is defined. If `op.num_qubits == 5`, then `op.eval('1' * 5)` will be valid, but `op.eval('11')` will not.

**Return type**

`int`

**Returns**

The number of qubits accepted by the Operator’s underlying function.

### primitive

The primitive which defines the behavior of the underlying State function.

## Methods

### \_\_mul\_\_

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.__mul__" />

`CircuitStateFn.__mul__(other)`

Overload `*` for Operator scalar multiplication.

**Parameters**

**other** (`Number`) – The real or complex scalar by which to multiply the Operator, or the `ParameterExpression` to serve as a placeholder for a scalar factor.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to product of self and scalar.

### add

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.add" />

`CircuitStateFn.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

### adjoint

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.adjoint" />

`CircuitStateFn.adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

### assign\_parameters

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.assign_parameters" />

`CircuitStateFn.assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (`dict`) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

### bind\_parameters

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.bind_parameters" />

`CircuitStateFn.bind_parameters(param_dict)`

Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

### compose

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.compose" />

`CircuitStateFn.compose(other)`

Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to compose with self.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An Operator equivalent to the function composition of self and other.

**Raises**

**ValueError** – If self is not a measurement, it cannot be composed from the right.

### equals

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.equals" />

`CircuitStateFn.equals(other)`

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `OperatorBase` to compare to self.

**Return type**

`bool`

**Returns**

A bool equal to the equality of self and other.

### eval

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.eval" />

`CircuitStateFn.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

**Parameters**

**front** (`Union`\[`str`, `dict`, `ndarray`, [`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function.

**Return type**

`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), `float`, `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

### from\_dict

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.from_dict" />

`static CircuitStateFn.from_dict(density_dict)`

Construct the CircuitStateFn from a dict mapping strings to probability densities.

**Parameters**

**density\_dict** (`dict`) – The dict representing the desired state.

**Return type**

[`CircuitStateFn`](qiskit.aqua.operators.state_fns.CircuitStateFn "qiskit.aqua.operators.state_fns.circuit_state_fn.CircuitStateFn")

**Returns**

The CircuitStateFn created from the dict.

### from\_vector

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.from_vector" />

`static CircuitStateFn.from_vector(statevector)`

Construct the CircuitStateFn from a vector representing the statevector.

**Parameters**

**statevector** (`ndarray`) – The statevector representing the desired state.

**Return type**

[`CircuitStateFn`](qiskit.aqua.operators.state_fns.CircuitStateFn "qiskit.aqua.operators.state_fns.circuit_state_fn.CircuitStateFn")

**Returns**

The CircuitStateFn created from the vector.

**Raises**

*   **ValueError** – If a vector with complex values is passed, which the Initializer cannot
*   **handle.** –

### mul

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.mul" />

`CircuitStateFn.mul(scalar)`

Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).

**Parameters**

**scalar** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – The real or complex scalar by which to multiply the Operator, or the `ParameterExpression` to serve as a placeholder for a scalar factor.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to product of self and scalar.

### neg

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.neg" />

`CircuitStateFn.neg()`

Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the negation of self.

### permute

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.permute" />

`CircuitStateFn.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

[`CircuitStateFn`](qiskit.aqua.operators.state_fns.CircuitStateFn "qiskit.aqua.operators.state_fns.circuit_state_fn.CircuitStateFn")

**Returns**

A new CircuitStateFn containing the permuted circuit.

### power

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.power" />

`CircuitStateFn.power(exponent)`

Compose with Self Multiple Times, undefined for StateFns.

**Parameters**

**exponent** (`int`) – The number of times to compose self with self.

**Raises**

**ValueError** – This function is not defined for StateFns.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

### primitive\_strings

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.primitive_strings" />

`CircuitStateFn.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

### reduce

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.reduce" />

`CircuitStateFn.reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The reduced `OperatorBase`.

### sample

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.sample" />

`CircuitStateFn.sample(shots=1024, massive=False, reverse_endianness=False)`

Sample the state function as a normalized probability distribution. Returns dict of bitstrings in order of probability, with values being probability.

**Return type**

`dict`

### tensor

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.tensor" />

`CircuitStateFn.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, Plus.tensor(Zero) produces a |+⟩ on qubit 0 and a |0⟩ on qubit 1, or |+⟩⨂|0⟩, but would produce a QuantumCircuit like:

> |0⟩– |+⟩–

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `OperatorBase` to tensor product with self.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

### tensorpower

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.tensorpower" />

`CircuitStateFn.tensorpower(other)`

Return tensor product with self multiple times, overloaded by `^`.

**Parameters**

**other** (`int`) – The int number of times to tensor product self with itself via `tensorpower`.

**Return type**

`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), `int`]

**Returns**

An `OperatorBase` equivalent to the tensorpower of self by other.

### to\_circuit

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit" />

`CircuitStateFn.to_circuit(meas=False)`

Return QuantumCircuit representing StateFn

**Return type**

[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

### to\_circuit\_op

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit_op" />

`CircuitStateFn.to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

### to\_density\_matrix

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_density_matrix" />

`CircuitStateFn.to_density_matrix(massive=False)`

Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix. Generally big methods like this should require the use of a converter, but in this case a convenience method for quick hacking and access to classical tools is appropriate.

**Return type**

`ndarray`

### to\_instruction

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_instruction" />

`CircuitStateFn.to_instruction()`

Return Instruction corresponding to primitive.

### to\_legacy\_op

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_legacy_op" />

`CircuitStateFn.to_legacy_op(massive=False)`

Attempt to return the Legacy Operator representation of the Operator. If self is a `SummedOp` of `PauliOps`, will attempt to convert to `WeightedPauliOperator`, and otherwise will simply convert to `MatrixOp` and then to `MatrixOperator`. The Legacy Operators cannot represent `StateFns` or proper `ListOps` (meaning not one of the `ListOp` subclasses), so an error will be thrown if this method is called on such an Operator. Also, Legacy Operators cannot represent unbound Parameter coeffs, so an error will be thrown if any are present in self.

Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

[`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator")

**Returns**

The `LegacyBaseOperator` representing this Operator.

**Raises**

**TypeError** – self is an Operator which cannot be represented by a `LegacyBaseOperator`, such as `StateFn`, proper (non-subclass) `ListOp`, or an Operator with an unbound coeff Parameter.

### to\_matrix

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix" />

`CircuitStateFn.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

### to\_matrix\_op

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix_op" />

`CircuitStateFn.to_matrix_op(massive=False)`

Return a `VectorStateFn` for this `StateFn`.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

A VectorStateFn equivalent to self.

### traverse

<span id="qiskit.aqua.operators.state_fns.CircuitStateFn.traverse" />

`CircuitStateFn.traverse(convert_fn, coeff=None)`

Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`). Otherwise do nothing. Used by converters.

**Parameters**

*   **convert\_fn** (`Callable`) – The function to apply to the internal OperatorBase.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `None`]) – A coefficient to multiply by after applying convert\_fn.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted StateFn.

