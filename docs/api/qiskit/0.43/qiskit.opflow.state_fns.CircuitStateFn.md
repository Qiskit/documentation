---
title: CircuitStateFn
description: API reference for qiskit.opflow.state_fns.CircuitStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.CircuitStateFn
---

# CircuitStateFn

<span id="qiskit.opflow.state_fns.CircuitStateFn" />

`CircuitStateFn(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/state_fns/circuit_state_fn.py "view source code")

Bases: [`StateFn`](qiskit.opflow.state_fns.StateFn "qiskit.opflow.state_fns.state_fn.StateFn")

Deprecated: A class for state functions and measurements which are defined by the action of a QuantumCircuit starting from |0⟩, and stored using Terra’s `QuantumCircuit` class.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The `QuantumCircuit` (or `Instruction`, which will be converted) which defines the behavior of the underlying function.
*   **coeff** – A coefficient multiplying the state function.
*   **is\_measurement** – Whether the StateFn is a measurement operator.
*   **from\_operator** – if True the StateFn is derived from OperatorStateFn. (Default: False)

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

## Methods Defined Here

<span id="qiskit-opflow-state-fns-circuitstatefn-add" />

### add

<span id="qiskit.opflow.state_fns.CircuitStateFn.add" />

`CircuitStateFn.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

<span id="qiskit-opflow-state-fns-circuitstatefn-adjoint" />

### adjoint

<span id="qiskit.opflow.state_fns.CircuitStateFn.adjoint" />

`CircuitStateFn.adjoint()`

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

**Return type**

[*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn")

<span id="qiskit-opflow-state-fns-circuitstatefn-assign-parameters" />

### assign\_parameters

<span id="qiskit.opflow.state_fns.CircuitStateFn.assign_parameters" />

`CircuitStateFn.assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (*dict*) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

**Return type**

[*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn") | [*ListOp*](qiskit.opflow.list_ops.ListOp "qiskit.opflow.list_ops.list_op.ListOp")

<span id="qiskit-opflow-state-fns-circuitstatefn-compose" />

### compose

<span id="qiskit.opflow.state_fns.CircuitStateFn.compose" />

`CircuitStateFn.compose(other, permutation=None, front=False)`

Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.

**Parameters**

*   **other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The Operator to compose with self.
*   **permutation** (*List\[int] | None*) – `List[int]` which defines permutation on other operator.
*   **front** (*bool*) – If front==True, return `other.compose(self)`.

**Returns**

An Operator equivalent to the function composition of self and other.

**Raises**

**ValueError** – If self is not a measurement, it cannot be composed from the right.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

<span id="qiskit-opflow-state-fns-circuitstatefn-eval" />

### eval

<span id="qiskit.opflow.state_fns.CircuitStateFn.eval" />

`CircuitStateFn.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (*str | Dict\[str, complex] |* [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")  *|*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")  *|*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector") *| None*) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase") | complex

<span id="qiskit-opflow-state-fns-circuitstatefn-from-dict" />

### from\_dict

<span id="qiskit.opflow.state_fns.CircuitStateFn.from_dict" />

`static CircuitStateFn.from_dict(density_dict)`

Construct the CircuitStateFn from a dict mapping strings to probability densities.

**Parameters**

**density\_dict** (*dict*) – The dict representing the desired state.

**Returns**

The CircuitStateFn created from the dict.

**Return type**

[*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn")

<span id="qiskit-opflow-state-fns-circuitstatefn-from-vector" />

### from\_vector

<span id="qiskit.opflow.state_fns.CircuitStateFn.from_vector" />

`static CircuitStateFn.from_vector(statevector)`

Construct the CircuitStateFn from a vector representing the statevector.

**Parameters**

**statevector** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – The statevector representing the desired state.

**Returns**

The CircuitStateFn created from the vector.

**Return type**

[*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn")

<span id="qiskit-opflow-state-fns-circuitstatefn-permute" />

### permute

<span id="qiskit.opflow.state_fns.CircuitStateFn.permute" />

`CircuitStateFn.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (*List\[int]*) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Returns**

A new CircuitStateFn containing the permuted circuit.

**Return type**

[*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn")

<span id="qiskit-opflow-state-fns-circuitstatefn-primitive-strings" />

### primitive\_strings

<span id="qiskit.opflow.state_fns.CircuitStateFn.primitive_strings" />

`CircuitStateFn.primitive_strings()`

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Returns**

A set of strings describing the primitives contained within the Operator.

**Return type**

*Set*\[str]

<span id="qiskit-opflow-state-fns-circuitstatefn-reduce" />

### reduce

<span id="qiskit.opflow.state_fns.CircuitStateFn.reduce" />

`CircuitStateFn.reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Returns**

The reduced `OperatorBase`.

**Return type**

[*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn")

<span id="qiskit-opflow-state-fns-circuitstatefn-sample" />

### sample

<span id="qiskit.opflow.state_fns.CircuitStateFn.sample" />

`CircuitStateFn.sample(shots=1024, massive=False, reverse_endianness=False)`

Sample the state function as a normalized probability distribution. Returns dict of bitstrings in order of probability, with values being probability.

**Return type**

dict

<span id="qiskit-opflow-state-fns-circuitstatefn-tensor" />

### tensor

<span id="qiskit.opflow.state_fns.CircuitStateFn.tensor" />

`CircuitStateFn.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, Plus.tensor(Zero) produces a |+⟩ on qubit 0 and a |0⟩ on qubit 1, or |+⟩⨂|0⟩, but would produce a QuantumCircuit like:

> |0⟩– |+⟩–

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` to tensor product with self.

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

**Return type**

[*CircuitStateFn*](qiskit.opflow.state_fns.CircuitStateFn "qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn") | [*TensoredOp*](qiskit.opflow.list_ops.TensoredOp "qiskit.opflow.list_ops.tensored_op.TensoredOp")

<span id="qiskit-opflow-state-fns-circuitstatefn-to-circuit" />

### to\_circuit

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_circuit" />

`CircuitStateFn.to_circuit(meas=False)`

Return QuantumCircuit representing StateFn

**Return type**

[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

<span id="qiskit-opflow-state-fns-circuitstatefn-to-circuit-op" />

### to\_circuit\_op

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_circuit_op" />

`CircuitStateFn.to_circuit_op()`

Return `StateFnCircuit` corresponding to this StateFn.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

<span id="qiskit-opflow-state-fns-circuitstatefn-to-density-matrix" />

### to\_density\_matrix

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_density_matrix" />

`CircuitStateFn.to_density_matrix(massive=False)`

Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix. Generally big methods like this should require the use of a converter, but in this case a convenience method for quick hacking and access to classical tools is appropriate.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")

<span id="qiskit-opflow-state-fns-circuitstatefn-to-instruction" />

### to\_instruction

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_instruction" />

`CircuitStateFn.to_instruction()`

Return Instruction corresponding to primitive.

<span id="qiskit-opflow-state-fns-circuitstatefn-to-matrix" />

### to\_matrix

<span id="qiskit.opflow.state_fns.CircuitStateFn.to_matrix" />

`CircuitStateFn.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Returns**

The NumPy `ndarray` equivalent to this Operator.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")

## Attributes

<span id="qiskit.opflow.state_fns.CircuitStateFn.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.state_fns.CircuitStateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

<span id="qiskit.opflow.state_fns.CircuitStateFn.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.state_fns.CircuitStateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

<span id="qiskit.opflow.state_fns.CircuitStateFn.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.state_fns.CircuitStateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.CircuitStateFn.primitive" />

### primitive

`QuantumCircuit`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.CircuitStateFn.settings" />

### settings

Return settings.

