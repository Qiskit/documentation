# Statevector

<span id="undefined" />

`Statevector(data, dims=None)`

Bases: `qiskit.quantum_info.states.quantum_state.QuantumState`, `qiskit.quantum_info.operators.mixins.tolerances.TolerancesMixin`

Statevector class

Initialize a statevector object.

**Parameters**

*   \*\*(****np.array**** or ****list**** or ****Statevector**** or ****Operator**** or \*\***QuantumCircuit or** (*data*) – qiskit.circuit.Instruction): Data from which the statevector can be constructed. This can be either a complex vector, another statevector, a ```Operator` with only one column or a ``QuantumCircuit``` or `Instruction`. If the data is a circuit or instruction, the statevector is constructed by assuming that all qubits are initialized to the zero state.
*   **dims** (*int or tuple or list*) – Optional. The subsystem dimension of the state (See additional information).

**Raises**

**QiskitError** – if input data is not valid.

**Additional Information:**

The `dims` kwarg can be None, an integer, or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` or `None` – the length of the input vector specifies the total dimension of the density matrix. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

## Methods

|                                                                                                                                                                                    |                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`conjugate`](qiskit.quantum_info.Statevector.conjugate#qiskit.quantum_info.Statevector.conjugate "qiskit.quantum_info.Statevector.conjugate")                                     | Return the conjugate of the operator.                                   |
| [`copy`](qiskit.quantum_info.Statevector.copy#qiskit.quantum_info.Statevector.copy "qiskit.quantum_info.Statevector.copy")                                                         | Make a copy of current operator.                                        |
| [`dims`](qiskit.quantum_info.Statevector.dims#qiskit.quantum_info.Statevector.dims "qiskit.quantum_info.Statevector.dims")                                                         | Return tuple of input dimension for specified subsystems.               |
| [`draw`](qiskit.quantum_info.Statevector.draw#qiskit.quantum_info.Statevector.draw "qiskit.quantum_info.Statevector.draw")                                                         | Return a visualization of the Statevector.                              |
| [`equiv`](qiskit.quantum_info.Statevector.equiv#qiskit.quantum_info.Statevector.equiv "qiskit.quantum_info.Statevector.equiv")                                                     | Return True if other is equivalent as a statevector up to global phase. |
| [`evolve`](qiskit.quantum_info.Statevector.evolve#qiskit.quantum_info.Statevector.evolve "qiskit.quantum_info.Statevector.evolve")                                                 | Evolve a quantum state by the operator.                                 |
| [`expand`](qiskit.quantum_info.Statevector.expand#qiskit.quantum_info.Statevector.expand "qiskit.quantum_info.Statevector.expand")                                                 | Return the tensor product state other ⊗ self.                           |
| [`expectation_value`](qiskit.quantum_info.Statevector.expectation_value#qiskit.quantum_info.Statevector.expectation_value "qiskit.quantum_info.Statevector.expectation_value")     | Compute the expectation value of an operator.                           |
| [`from_instruction`](qiskit.quantum_info.Statevector.from_instruction#qiskit.quantum_info.Statevector.from_instruction "qiskit.quantum_info.Statevector.from_instruction")         | Return the output statevector of an instruction.                        |
| [`from_int`](qiskit.quantum_info.Statevector.from_int#qiskit.quantum_info.Statevector.from_int "qiskit.quantum_info.Statevector.from_int")                                         | Return a computational basis statevector.                               |
| [`from_label`](qiskit.quantum_info.Statevector.from_label#qiskit.quantum_info.Statevector.from_label "qiskit.quantum_info.Statevector.from_label")                                 | Return a tensor product of Pauli X,Y,Z eigenstates.                     |
| [`is_valid`](qiskit.quantum_info.Statevector.is_valid#qiskit.quantum_info.Statevector.is_valid "qiskit.quantum_info.Statevector.is_valid")                                         | Return True if a Statevector has norm 1.                                |
| [`measure`](qiskit.quantum_info.Statevector.measure#qiskit.quantum_info.Statevector.measure "qiskit.quantum_info.Statevector.measure")                                             | Measure subsystems and return outcome and post-measure state.           |
| [`probabilities`](qiskit.quantum_info.Statevector.probabilities#qiskit.quantum_info.Statevector.probabilities "qiskit.quantum_info.Statevector.probabilities")                     | Return the subsystem measurement probability vector.                    |
| [`probabilities_dict`](qiskit.quantum_info.Statevector.probabilities_dict#qiskit.quantum_info.Statevector.probabilities_dict "qiskit.quantum_info.Statevector.probabilities_dict") | Return the subsystem measurement probability dictionary.                |
| [`purity`](qiskit.quantum_info.Statevector.purity#qiskit.quantum_info.Statevector.purity "qiskit.quantum_info.Statevector.purity")                                                 | Return the purity of the quantum state.                                 |
| [`reset`](qiskit.quantum_info.Statevector.reset#qiskit.quantum_info.Statevector.reset "qiskit.quantum_info.Statevector.reset")                                                     | Reset state or subsystems to the 0-state.                               |
| [`reverse_qargs`](qiskit.quantum_info.Statevector.reverse_qargs#qiskit.quantum_info.Statevector.reverse_qargs "qiskit.quantum_info.Statevector.reverse_qargs")                     | Return a Statevector with reversed subsystem ordering.                  |
| [`sample_counts`](qiskit.quantum_info.Statevector.sample_counts#qiskit.quantum_info.Statevector.sample_counts "qiskit.quantum_info.Statevector.sample_counts")                     | Sample a dict of qubit measurement outcomes in the computational basis. |
| [`sample_memory`](qiskit.quantum_info.Statevector.sample_memory#qiskit.quantum_info.Statevector.sample_memory "qiskit.quantum_info.Statevector.sample_memory")                     | Sample a list of qubit measurement outcomes in the computational basis. |
| [`seed`](qiskit.quantum_info.Statevector.seed#qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed")                                                         | Set the seed for the quantum state RNG.                                 |
| [`tensor`](qiskit.quantum_info.Statevector.tensor#qiskit.quantum_info.Statevector.tensor "qiskit.quantum_info.Statevector.tensor")                                                 | Return the tensor product state self ⊗ other.                           |
| [`to_dict`](qiskit.quantum_info.Statevector.to_dict#qiskit.quantum_info.Statevector.to_dict "qiskit.quantum_info.Statevector.to_dict")                                             | Convert the statevector to dictionary form.                             |
| [`to_operator`](qiskit.quantum_info.Statevector.to_operator#qiskit.quantum_info.Statevector.to_operator "qiskit.quantum_info.Statevector.to_operator")                             | Convert state to a rank-1 projector operator                            |
| [`trace`](qiskit.quantum_info.Statevector.trace#qiskit.quantum_info.Statevector.trace "qiskit.quantum_info.Statevector.trace")                                                     | Return the trace of the quantum state as a density matrix.              |

## Attributes

<span id="undefined" />

### atol

`= 1e-08`

<span id="undefined" />

### data

Return data.

<span id="undefined" />

### dim

Return total state dimension.

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit state or None otherwise.

<span id="undefined" />

### rtol

`= 1e-05`

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`
