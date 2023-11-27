# VectorStateFn[¶](#vectorstatefn "Permalink to this headline")

<span id="undefined" />

`VectorStateFn(primitive=None, coeff=1.0, is_measurement=False)`

Bases: `qiskit.opflow.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined in vector representation, and stored using Terra’s `Statevector` class.

**Parameters**

*   **primitive** (`Union`\[`list`, `ndarray`, `Statevector`, `None`]) – The `Statevector`, NumPy array, or list, which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Methods Defined Here

|                                                                                                                                                                                                  |                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.VectorStateFn.add#qiskit.opflow.state_fns.VectorStateFn.add "qiskit.opflow.state_fns.VectorStateFn.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                  |
| [`adjoint`](qiskit.opflow.state_fns.VectorStateFn.adjoint#qiskit.opflow.state_fns.VectorStateFn.adjoint "qiskit.opflow.state_fns.VectorStateFn.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. |
| [`eval`](qiskit.opflow.state_fns.VectorStateFn.eval#qiskit.opflow.state_fns.VectorStateFn.eval "qiskit.opflow.state_fns.VectorStateFn.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.     |
| [`permute`](qiskit.opflow.state_fns.VectorStateFn.permute#qiskit.opflow.state_fns.VectorStateFn.permute "qiskit.opflow.state_fns.VectorStateFn.permute")                                         | Permute the qubits of the state function.                                                       |
| [`primitive_strings`](qiskit.opflow.state_fns.VectorStateFn.primitive_strings#qiskit.opflow.state_fns.VectorStateFn.primitive_strings "qiskit.opflow.state_fns.VectorStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                    |
| [`sample`](qiskit.opflow.state_fns.VectorStateFn.sample#qiskit.opflow.state_fns.VectorStateFn.sample "qiskit.opflow.state_fns.VectorStateFn.sample")                                             | Sample the state function as a normalized probability distribution.                             |
| [`tensor`](qiskit.opflow.state_fns.VectorStateFn.tensor#qiskit.opflow.state_fns.VectorStateFn.tensor "qiskit.opflow.state_fns.VectorStateFn.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                |
| [`to_circuit_op`](qiskit.opflow.state_fns.VectorStateFn.to_circuit_op#qiskit.opflow.state_fns.VectorStateFn.to_circuit_op "qiskit.opflow.state_fns.VectorStateFn.to_circuit_op")                 | Return `StateFnCircuit` corresponding to this StateFn.                                          |
| [`to_density_matrix`](qiskit.opflow.state_fns.VectorStateFn.to_density_matrix#qiskit.opflow.state_fns.VectorStateFn.to_density_matrix "qiskit.opflow.state_fns.VectorStateFn.to_density_matrix") | Return matrix representing product of StateFn evaluated on pairs of basis states.               |
| [`to_dict_fn`](qiskit.opflow.state_fns.VectorStateFn.to_dict_fn#qiskit.opflow.state_fns.VectorStateFn.to_dict_fn "qiskit.opflow.state_fns.VectorStateFn.to_dict_fn")                             | Creates the equivalent state function of type DictStateFn.                                      |
| [`to_matrix`](qiskit.opflow.state_fns.VectorStateFn.to_matrix#qiskit.opflow.state_fns.VectorStateFn.to_matrix "qiskit.opflow.state_fns.VectorStateFn.to_matrix")                                 | Return NumPy representation of the Operator.                                                    |
| [`to_matrix_op`](qiskit.opflow.state_fns.VectorStateFn.to_matrix_op#qiskit.opflow.state_fns.VectorStateFn.to_matrix_op "qiskit.opflow.state_fns.VectorStateFn.to_matrix_op")                     | Return a `VectorStateFn` for this `StateFn`.                                                    |

## Attributes

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="undefined" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### parameters

<span id="undefined" />

### primitive

`qiskit.quantum_info.states.statevector.Statevector`

The primitive which defines the behavior of the underlying State function.

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`
