# Operator

<span id="undefined" />

`Operator(data, input_dims=None, output_dims=None)`

Bases: `qiskit.quantum_info.operators.linear_op.LinearOp`

Matrix operator class

This represents a matrix operator $M$ that will [`evolve()`](qiskit.quantum_info.Statevector.evolve#qiskit.quantum_info.Statevector.evolve "qiskit.quantum_info.Statevector.evolve") a [`Statevector`](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector") $|\psi\rangle$ by matrix-vector multiplication

$$
|\psi\rangle \mapsto M|\psi\rangle,
$$

and will [`evolve()`](qiskit.quantum_info.DensityMatrix.evolve#qiskit.quantum_info.DensityMatrix.evolve "qiskit.quantum_info.DensityMatrix.evolve") a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ by left and right multiplication

$$
\rho \mapsto M \rho M^\dagger.
$$

Initialize an operator object.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize operator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as an operator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Methods

|                                                                                                                                                           |                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.Operator.adjoint#qiskit.quantum_info.Operator.adjoint "qiskit.quantum_info.Operator.adjoint")                             | Return the adjoint of the Operator.                                        |
| [`compose`](qiskit.quantum_info.Operator.compose#qiskit.quantum_info.Operator.compose "qiskit.quantum_info.Operator.compose")                             | Return the operator composition with another Operator.                     |
| [`conjugate`](qiskit.quantum_info.Operator.conjugate#qiskit.quantum_info.Operator.conjugate "qiskit.quantum_info.Operator.conjugate")                     | Return the conjugate of the Operator.                                      |
| [`copy`](qiskit.quantum_info.Operator.copy#qiskit.quantum_info.Operator.copy "qiskit.quantum_info.Operator.copy")                                         | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.Operator.dot#qiskit.quantum_info.Operator.dot "qiskit.quantum_info.Operator.dot")                                             | Return the right multiplied operator self \* other.                        |
| [`equiv`](qiskit.quantum_info.Operator.equiv#qiskit.quantum_info.Operator.equiv "qiskit.quantum_info.Operator.equiv")                                     | Return True if operators are equivalent up to global phase.                |
| [`expand`](qiskit.quantum_info.Operator.expand#qiskit.quantum_info.Operator.expand "qiskit.quantum_info.Operator.expand")                                 | Return the reverse-order tensor product with another Operator.             |
| [`from_label`](qiskit.quantum_info.Operator.from_label#qiskit.quantum_info.Operator.from_label "qiskit.quantum_info.Operator.from_label")                 | Return a tensor product of single-qubit operators.                         |
| [`input_dims`](qiskit.quantum_info.Operator.input_dims#qiskit.quantum_info.Operator.input_dims "qiskit.quantum_info.Operator.input_dims")                 | Return tuple of input dimension for specified subsystems.                  |
| [`is_unitary`](qiskit.quantum_info.Operator.is_unitary#qiskit.quantum_info.Operator.is_unitary "qiskit.quantum_info.Operator.is_unitary")                 | Return True if operator is a unitary matrix.                               |
| [`output_dims`](qiskit.quantum_info.Operator.output_dims#qiskit.quantum_info.Operator.output_dims "qiskit.quantum_info.Operator.output_dims")             | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.Operator.power#qiskit.quantum_info.Operator.power "qiskit.quantum_info.Operator.power")                                     | Return the matrix power of the operator.                                   |
| [`reshape`](qiskit.quantum_info.Operator.reshape#qiskit.quantum_info.Operator.reshape "qiskit.quantum_info.Operator.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`reverse_qargs`](qiskit.quantum_info.Operator.reverse_qargs#qiskit.quantum_info.Operator.reverse_qargs "qiskit.quantum_info.Operator.reverse_qargs")     | Return an Operator with reversed subsystem ordering.                       |
| [`tensor`](qiskit.quantum_info.Operator.tensor#qiskit.quantum_info.Operator.tensor "qiskit.quantum_info.Operator.tensor")                                 | Return the tensor product with another Operator.                           |
| [`to_instruction`](qiskit.quantum_info.Operator.to_instruction#qiskit.quantum_info.Operator.to_instruction "qiskit.quantum_info.Operator.to_instruction") | Convert to a UnitaryGate instruction.                                      |
| [`to_operator`](qiskit.quantum_info.Operator.to_operator#qiskit.quantum_info.Operator.to_operator "qiskit.quantum_info.Operator.to_operator")             | Convert operator to matrix operator class                                  |
| [`transpose`](qiskit.quantum_info.Operator.transpose#qiskit.quantum_info.Operator.transpose "qiskit.quantum_info.Operator.transpose")                     | Return the transpose of the Operator.                                      |

## Attributes

<span id="undefined" />

### atol

`= 1e-08`

<span id="undefined" />

### data

Return data.

<span id="undefined" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

### qargs

Return the qargs for the operator.

<span id="undefined" />

### rtol

`= 1e-05`

<span id="undefined" />

### settings

Return operator settings.
