# Kraus[¶](#kraus "Permalink to this headline")

<span id="undefined" />

`Kraus(data, input_dims=None, output_dims=None)`

Bases: `qiskit.quantum_info.operators.channel.quantum_channel.QuantumChannel`

Kraus representation of a quantum channel.

For a quantum channel $\mathcal{E}$, the Kraus representation is given by a set of matrices $[A_0,...,A_{K-1}]$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(\rho) = \sum_{i=0}^{K-1} A_i \rho A_i^\dagger
$$

A general operator map $\mathcal{G}$ can also be written using the generalized Kraus representation which is given by two sets of matrices $[A_0,...,A_{K-1}]$, $[B_0,...,A_{B-1}]$ such that

$$
\mathcal{G}(\rho) = \sum_{i=0}^{K-1} A_i \rho B_i^\dagger
$$

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Kraus operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a a list of Kraus matrices.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a list of Numpy arrays of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input does not correspond to an N-qubit channel, it will assign a single subsystem with dimension specified by the shape of the input.

## Methods

|                                                                                                                                                  |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.Kraus.adjoint#qiskit.quantum_info.Kraus.adjoint "qiskit.quantum_info.Kraus.adjoint")                             | Return the adjoint quantum channel.                                        |
| [`compose`](qiskit.quantum_info.Kraus.compose#qiskit.quantum_info.Kraus.compose "qiskit.quantum_info.Kraus.compose")                             | Return the operator composition with another Kraus.                        |
| [`conjugate`](qiskit.quantum_info.Kraus.conjugate#qiskit.quantum_info.Kraus.conjugate "qiskit.quantum_info.Kraus.conjugate")                     | Return the conjugate quantum channel.                                      |
| [`copy`](qiskit.quantum_info.Kraus.copy#qiskit.quantum_info.Kraus.copy "qiskit.quantum_info.Kraus.copy")                                         | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.Kraus.dot#qiskit.quantum_info.Kraus.dot "qiskit.quantum_info.Kraus.dot")                                             | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.Kraus.expand#qiskit.quantum_info.Kraus.expand "qiskit.quantum_info.Kraus.expand")                                 | Return the reverse-order tensor product with another Kraus.                |
| [`input_dims`](qiskit.quantum_info.Kraus.input_dims#qiskit.quantum_info.Kraus.input_dims "qiskit.quantum_info.Kraus.input_dims")                 | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](qiskit.quantum_info.Kraus.is_cp#qiskit.quantum_info.Kraus.is_cp "qiskit.quantum_info.Kraus.is_cp")                                     | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](qiskit.quantum_info.Kraus.is_cptp#qiskit.quantum_info.Kraus.is_cptp "qiskit.quantum_info.Kraus.is_cptp")                             | Return True if completely-positive trace-preserving.                       |
| [`is_tp`](qiskit.quantum_info.Kraus.is_tp#qiskit.quantum_info.Kraus.is_tp "qiskit.quantum_info.Kraus.is_tp")                                     | Test if a channel is trace-preserving (TP)                                 |
| [`is_unitary`](qiskit.quantum_info.Kraus.is_unitary#qiskit.quantum_info.Kraus.is_unitary "qiskit.quantum_info.Kraus.is_unitary")                 | Return True if QuantumChannel is a unitary channel.                        |
| [`output_dims`](qiskit.quantum_info.Kraus.output_dims#qiskit.quantum_info.Kraus.output_dims "qiskit.quantum_info.Kraus.output_dims")             | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.Kraus.power#qiskit.quantum_info.Kraus.power "qiskit.quantum_info.Kraus.power")                                     | Return the power of the quantum channel.                                   |
| [`reshape`](qiskit.quantum_info.Kraus.reshape#qiskit.quantum_info.Kraus.reshape "qiskit.quantum_info.Kraus.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](qiskit.quantum_info.Kraus.tensor#qiskit.quantum_info.Kraus.tensor "qiskit.quantum_info.Kraus.tensor")                                 | Return the tensor product with another Kraus.                              |
| [`to_instruction`](qiskit.quantum_info.Kraus.to_instruction#qiskit.quantum_info.Kraus.to_instruction "qiskit.quantum_info.Kraus.to_instruction") | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](qiskit.quantum_info.Kraus.to_operator#qiskit.quantum_info.Kraus.to_operator "qiskit.quantum_info.Kraus.to_operator")             | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](qiskit.quantum_info.Kraus.transpose#qiskit.quantum_info.Kraus.transpose "qiskit.quantum_info.Kraus.transpose")                     | Return the transpose quantum channel.                                      |

## Attributes

<span id="undefined" />

### atol

`= 1e-08`

<span id="undefined" />

### data

Return list of Kraus matrices for channel.

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

Return settings.
