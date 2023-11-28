# CircuitStateFn

<span id="undefined" />

`CircuitStateFn(primitive=None, coeff=1.0, is_measurement=False)`

Bases: `qiskit.aqua.operators.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined by the action of a QuantumCircuit starting from |0⟩, and stored using Terra’s `QuantumCircuit` class.

**Parameters**

*   **primitive** (`Union`\[`QuantumCircuit`, `Instruction`, `None`]) – The `QuantumCircuit` (or `Instruction`, which will be converted) which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator.

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

## Methods

|                                                                                                                                                                                                                             |                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.state_fns.CircuitStateFn.add#qiskit.aqua.operators.state_fns.CircuitStateFn.add "qiskit.aqua.operators.state_fns.CircuitStateFn.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.aqua.operators.state_fns.CircuitStateFn.adjoint#qiskit.aqua.operators.state_fns.CircuitStateFn.adjoint "qiskit.aqua.operators.state_fns.CircuitStateFn.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.state_fns.CircuitStateFn.assign_parameters#qiskit.aqua.operators.state_fns.CircuitStateFn.assign_parameters "qiskit.aqua.operators.state_fns.CircuitStateFn.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.state_fns.CircuitStateFn.bind_parameters#qiskit.aqua.operators.state_fns.CircuitStateFn.bind_parameters "qiskit.aqua.operators.state_fns.CircuitStateFn.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](qiskit.aqua.operators.state_fns.CircuitStateFn.compose#qiskit.aqua.operators.state_fns.CircuitStateFn.compose "qiskit.aqua.operators.state_fns.CircuitStateFn.compose")                                         | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                      |
| [`equals`](qiskit.aqua.operators.state_fns.CircuitStateFn.equals#qiskit.aqua.operators.state_fns.CircuitStateFn.equals "qiskit.aqua.operators.state_fns.CircuitStateFn.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.aqua.operators.state_fns.CircuitStateFn.eval#qiskit.aqua.operators.state_fns.CircuitStateFn.eval "qiskit.aqua.operators.state_fns.CircuitStateFn.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`from_dict`](qiskit.aqua.operators.state_fns.CircuitStateFn.from_dict#qiskit.aqua.operators.state_fns.CircuitStateFn.from_dict "qiskit.aqua.operators.state_fns.CircuitStateFn.from_dict")                                 | Construct the CircuitStateFn from a dict mapping strings to probability densities.                                                                                            |
| [`from_vector`](qiskit.aqua.operators.state_fns.CircuitStateFn.from_vector#qiskit.aqua.operators.state_fns.CircuitStateFn.from_vector "qiskit.aqua.operators.state_fns.CircuitStateFn.from_vector")                         | Construct the CircuitStateFn from a vector representing the statevector.                                                                                                      |
| [`mul`](qiskit.aqua.operators.state_fns.CircuitStateFn.mul#qiskit.aqua.operators.state_fns.CircuitStateFn.mul "qiskit.aqua.operators.state_fns.CircuitStateFn.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.state_fns.CircuitStateFn.neg#qiskit.aqua.operators.state_fns.CircuitStateFn.neg "qiskit.aqua.operators.state_fns.CircuitStateFn.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.aqua.operators.state_fns.CircuitStateFn.permute#qiskit.aqua.operators.state_fns.CircuitStateFn.permute "qiskit.aqua.operators.state_fns.CircuitStateFn.permute")                                         | Permute the qubits of the circuit.                                                                                                                                            |
| [`power`](qiskit.aqua.operators.state_fns.CircuitStateFn.power#qiskit.aqua.operators.state_fns.CircuitStateFn.power "qiskit.aqua.operators.state_fns.CircuitStateFn.power")                                                 | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                     |
| [`primitive_strings`](qiskit.aqua.operators.state_fns.CircuitStateFn.primitive_strings#qiskit.aqua.operators.state_fns.CircuitStateFn.primitive_strings "qiskit.aqua.operators.state_fns.CircuitStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.aqua.operators.state_fns.CircuitStateFn.reduce#qiskit.aqua.operators.state_fns.CircuitStateFn.reduce "qiskit.aqua.operators.state_fns.CircuitStateFn.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`sample`](qiskit.aqua.operators.state_fns.CircuitStateFn.sample#qiskit.aqua.operators.state_fns.CircuitStateFn.sample "qiskit.aqua.operators.state_fns.CircuitStateFn.sample")                                             | Sample the state function as a normalized probability distribution.                                                                                                           |
| [`tensor`](qiskit.aqua.operators.state_fns.CircuitStateFn.tensor#qiskit.aqua.operators.state_fns.CircuitStateFn.tensor "qiskit.aqua.operators.state_fns.CircuitStateFn.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.state_fns.CircuitStateFn.tensorpower#qiskit.aqua.operators.state_fns.CircuitStateFn.tensorpower "qiskit.aqua.operators.state_fns.CircuitStateFn.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit`](qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit#qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit "qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit")                             | Return QuantumCircuit representing StateFn                                                                                                                                    |
| [`to_circuit_op`](qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit_op#qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit_op "qiskit.aqua.operators.state_fns.CircuitStateFn.to_circuit_op")                 | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                        |
| [`to_density_matrix`](qiskit.aqua.operators.state_fns.CircuitStateFn.to_density_matrix#qiskit.aqua.operators.state_fns.CircuitStateFn.to_density_matrix "qiskit.aqua.operators.state_fns.CircuitStateFn.to_density_matrix") | Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix.                                  |
| [`to_instruction`](qiskit.aqua.operators.state_fns.CircuitStateFn.to_instruction#qiskit.aqua.operators.state_fns.CircuitStateFn.to_instruction "qiskit.aqua.operators.state_fns.CircuitStateFn.to_instruction")             | Return Instruction corresponding to primitive.                                                                                                                                |
| [`to_legacy_op`](qiskit.aqua.operators.state_fns.CircuitStateFn.to_legacy_op#qiskit.aqua.operators.state_fns.CircuitStateFn.to_legacy_op "qiskit.aqua.operators.state_fns.CircuitStateFn.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix#qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix "qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix_op#qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix_op "qiskit.aqua.operators.state_fns.CircuitStateFn.to_matrix_op")                     | Return a `VectorStateFn` for this `StateFn`.                                                                                                                                  |
| [`traverse`](qiskit.aqua.operators.state_fns.CircuitStateFn.traverse#qiskit.aqua.operators.state_fns.CircuitStateFn.traverse "qiskit.aqua.operators.state_fns.CircuitStateFn.traverse")                                     | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                        |

## Attributes

<span id="undefined" />

### ENABLE\_DEPRECATION

`= True`

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`int`, `float`, `complex`, `ParameterExpression`]

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

The primitive which defines the behavior of the underlying State function.
