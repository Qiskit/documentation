# DensityMatrix

<span id="undefined" />

`DensityMatrix(data, dims=None)`

Bases: `qiskit.quantum_info.states.quantum_state.QuantumState`, `qiskit.quantum_info.operators.mixins.tolerances.TolerancesMixin`

DensityMatrix class

Initialize a density matrix object.

**Parameters**

*   \*\*(****np.ndarray**** or ****list**** or ****matrix\_like**** or \*\***QuantumCircuit or** (*data*) – qiskit.circuit.Instruction): A statevector, quantum instruction or an object with a `to_operator` or `to_matrix` method from which the density matrix can be constructed. If a vector the density matrix is constructed as the projector of that vector. If a quantum instruction, the density matrix is constructed by assuming all qubits are initialized in the zero state.
*   **dims** (*int or tuple or list*) – Optional. The subsystem dimension of the state (See additional information).

**Raises**

**QiskitError** – if input data is not valid.

**Additional Information:**

The `dims` kwarg can be None, an integer, or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` or `None` – the leading dimension of the input matrix specifies the total dimension of the density matrix. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

## Methods

|                                                                                                                                                                                          |                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`conjugate`](qiskit.quantum_info.DensityMatrix.conjugate#qiskit.quantum_info.DensityMatrix.conjugate "qiskit.quantum_info.DensityMatrix.conjugate")                                     | Return the conjugate of the density matrix.                             |
| [`copy`](qiskit.quantum_info.DensityMatrix.copy#qiskit.quantum_info.DensityMatrix.copy "qiskit.quantum_info.DensityMatrix.copy")                                                         | Make a copy of current operator.                                        |
| [`dims`](qiskit.quantum_info.DensityMatrix.dims#qiskit.quantum_info.DensityMatrix.dims "qiskit.quantum_info.DensityMatrix.dims")                                                         | Return tuple of input dimension for specified subsystems.               |
| [`draw`](qiskit.quantum_info.DensityMatrix.draw#qiskit.quantum_info.DensityMatrix.draw "qiskit.quantum_info.DensityMatrix.draw")                                                         | Return a visualization of the Statevector.                              |
| [`evolve`](qiskit.quantum_info.DensityMatrix.evolve#qiskit.quantum_info.DensityMatrix.evolve "qiskit.quantum_info.DensityMatrix.evolve")                                                 | Evolve a quantum state by an operator.                                  |
| [`expand`](qiskit.quantum_info.DensityMatrix.expand#qiskit.quantum_info.DensityMatrix.expand "qiskit.quantum_info.DensityMatrix.expand")                                                 | Return the tensor product state other ⊗ self.                           |
| [`expectation_value`](qiskit.quantum_info.DensityMatrix.expectation_value#qiskit.quantum_info.DensityMatrix.expectation_value "qiskit.quantum_info.DensityMatrix.expectation_value")     | Compute the expectation value of an operator.                           |
| [`from_instruction`](qiskit.quantum_info.DensityMatrix.from_instruction#qiskit.quantum_info.DensityMatrix.from_instruction "qiskit.quantum_info.DensityMatrix.from_instruction")         | Return the output density matrix of an instruction.                     |
| [`from_int`](qiskit.quantum_info.DensityMatrix.from_int#qiskit.quantum_info.DensityMatrix.from_int "qiskit.quantum_info.DensityMatrix.from_int")                                         | Return a computational basis state density matrix.                      |
| [`from_label`](qiskit.quantum_info.DensityMatrix.from_label#qiskit.quantum_info.DensityMatrix.from_label "qiskit.quantum_info.DensityMatrix.from_label")                                 | Return a tensor product of Pauli X,Y,Z eigenstates.                     |
| [`is_valid`](qiskit.quantum_info.DensityMatrix.is_valid#qiskit.quantum_info.DensityMatrix.is_valid "qiskit.quantum_info.DensityMatrix.is_valid")                                         | Return True if trace 1 and positive semidefinite.                       |
| [`measure`](qiskit.quantum_info.DensityMatrix.measure#qiskit.quantum_info.DensityMatrix.measure "qiskit.quantum_info.DensityMatrix.measure")                                             | Measure subsystems and return outcome and post-measure state.           |
| [`probabilities`](qiskit.quantum_info.DensityMatrix.probabilities#qiskit.quantum_info.DensityMatrix.probabilities "qiskit.quantum_info.DensityMatrix.probabilities")                     | Return the subsystem measurement probability vector.                    |
| [`probabilities_dict`](qiskit.quantum_info.DensityMatrix.probabilities_dict#qiskit.quantum_info.DensityMatrix.probabilities_dict "qiskit.quantum_info.DensityMatrix.probabilities_dict") | Return the subsystem measurement probability dictionary.                |
| [`purity`](qiskit.quantum_info.DensityMatrix.purity#qiskit.quantum_info.DensityMatrix.purity "qiskit.quantum_info.DensityMatrix.purity")                                                 | Return the purity of the quantum state.                                 |
| [`reset`](qiskit.quantum_info.DensityMatrix.reset#qiskit.quantum_info.DensityMatrix.reset "qiskit.quantum_info.DensityMatrix.reset")                                                     | Reset state or subsystems to the 0-state.                               |
| [`reverse_qargs`](qiskit.quantum_info.DensityMatrix.reverse_qargs#qiskit.quantum_info.DensityMatrix.reverse_qargs "qiskit.quantum_info.DensityMatrix.reverse_qargs")                     | Return a DensityMatrix with reversed subsystem ordering.                |
| [`sample_counts`](qiskit.quantum_info.DensityMatrix.sample_counts#qiskit.quantum_info.DensityMatrix.sample_counts "qiskit.quantum_info.DensityMatrix.sample_counts")                     | Sample a dict of qubit measurement outcomes in the computational basis. |
| [`sample_memory`](qiskit.quantum_info.DensityMatrix.sample_memory#qiskit.quantum_info.DensityMatrix.sample_memory "qiskit.quantum_info.DensityMatrix.sample_memory")                     | Sample a list of qubit measurement outcomes in the computational basis. |
| [`seed`](qiskit.quantum_info.DensityMatrix.seed#qiskit.quantum_info.DensityMatrix.seed "qiskit.quantum_info.DensityMatrix.seed")                                                         | Set the seed for the quantum state RNG.                                 |
| [`tensor`](qiskit.quantum_info.DensityMatrix.tensor#qiskit.quantum_info.DensityMatrix.tensor "qiskit.quantum_info.DensityMatrix.tensor")                                                 | Return the tensor product state self ⊗ other.                           |
| [`to_dict`](qiskit.quantum_info.DensityMatrix.to_dict#qiskit.quantum_info.DensityMatrix.to_dict "qiskit.quantum_info.DensityMatrix.to_dict")                                             | Convert the density matrix to dictionary form.                          |
| [`to_operator`](qiskit.quantum_info.DensityMatrix.to_operator#qiskit.quantum_info.DensityMatrix.to_operator "qiskit.quantum_info.DensityMatrix.to_operator")                             | Convert to Operator                                                     |
| [`to_statevector`](qiskit.quantum_info.DensityMatrix.to_statevector#qiskit.quantum_info.DensityMatrix.to_statevector "qiskit.quantum_info.DensityMatrix.to_statevector")                 | Return a statevector from a pure density matrix.                        |
| [`trace`](qiskit.quantum_info.DensityMatrix.trace#qiskit.quantum_info.DensityMatrix.trace "qiskit.quantum_info.DensityMatrix.trace")                                                     | Return the trace of the density matrix.                                 |

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
