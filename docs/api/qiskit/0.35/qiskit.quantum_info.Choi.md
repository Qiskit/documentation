# Choi

<span id="undefined" />

`Choi(data, input_dims=None, output_dims=None)`

Bases: `qiskit.quantum_info.operators.channel.quantum_channel.QuantumChannel`

Choi-matrix representation of a Quantum Channel.

The Choi-matrix representation of a quantum channel $\mathcal{E}$ is a matrix

$$
\Lambda = \sum_{i,j} |i\rangle\!\langle j|\otimes
            \mathcal{E}\left(|i\rangle\!\langle j|\right)
$$

Evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ with respect to the Choi-matrix is given by

$$
\mathcal{E}(\rho) = \mbox{Tr}_{1}\left[\Lambda
                    (\rho^T \otimes \mathbb{I})\right]
$$

where $\mbox{Tr}_1$ is the [`partial_trace()`](qiskit.quantum_info.partial_trace#qiskit.quantum_info.partial_trace "qiskit.quantum_info.partial_trace") over subsystem 1.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Choi matrix operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a Choi matrix.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (4\*\*N, 4\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Methods

|                                                                                                                                               |                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.Choi.adjoint#qiskit.quantum_info.Choi.adjoint "qiskit.quantum_info.Choi.adjoint")                             | Return the adjoint quantum channel.                                        |
| [`compose`](qiskit.quantum_info.Choi.compose#qiskit.quantum_info.Choi.compose "qiskit.quantum_info.Choi.compose")                             | Return the operator composition with another Choi.                         |
| [`conjugate`](qiskit.quantum_info.Choi.conjugate#qiskit.quantum_info.Choi.conjugate "qiskit.quantum_info.Choi.conjugate")                     | Return the conjugate quantum channel.                                      |
| [`copy`](qiskit.quantum_info.Choi.copy#qiskit.quantum_info.Choi.copy "qiskit.quantum_info.Choi.copy")                                         | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.Choi.dot#qiskit.quantum_info.Choi.dot "qiskit.quantum_info.Choi.dot")                                             | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.Choi.expand#qiskit.quantum_info.Choi.expand "qiskit.quantum_info.Choi.expand")                                 | Return the reverse-order tensor product with another Choi.                 |
| [`input_dims`](qiskit.quantum_info.Choi.input_dims#qiskit.quantum_info.Choi.input_dims "qiskit.quantum_info.Choi.input_dims")                 | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](qiskit.quantum_info.Choi.is_cp#qiskit.quantum_info.Choi.is_cp "qiskit.quantum_info.Choi.is_cp")                                     | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](qiskit.quantum_info.Choi.is_cptp#qiskit.quantum_info.Choi.is_cptp "qiskit.quantum_info.Choi.is_cptp")                             | Return True if completely-positive trace-preserving (CPTP).                |
| [`is_tp`](qiskit.quantum_info.Choi.is_tp#qiskit.quantum_info.Choi.is_tp "qiskit.quantum_info.Choi.is_tp")                                     | Test if a channel is trace-preserving (TP)                                 |
| [`is_unitary`](qiskit.quantum_info.Choi.is_unitary#qiskit.quantum_info.Choi.is_unitary "qiskit.quantum_info.Choi.is_unitary")                 | Return True if QuantumChannel is a unitary channel.                        |
| [`output_dims`](qiskit.quantum_info.Choi.output_dims#qiskit.quantum_info.Choi.output_dims "qiskit.quantum_info.Choi.output_dims")             | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.Choi.power#qiskit.quantum_info.Choi.power "qiskit.quantum_info.Choi.power")                                     | Return the power of the quantum channel.                                   |
| [`reshape`](qiskit.quantum_info.Choi.reshape#qiskit.quantum_info.Choi.reshape "qiskit.quantum_info.Choi.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](qiskit.quantum_info.Choi.tensor#qiskit.quantum_info.Choi.tensor "qiskit.quantum_info.Choi.tensor")                                 | Return the tensor product with another Choi.                               |
| [`to_instruction`](qiskit.quantum_info.Choi.to_instruction#qiskit.quantum_info.Choi.to_instruction "qiskit.quantum_info.Choi.to_instruction") | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](qiskit.quantum_info.Choi.to_operator#qiskit.quantum_info.Choi.to_operator "qiskit.quantum_info.Choi.to_operator")             | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](qiskit.quantum_info.Choi.transpose#qiskit.quantum_info.Choi.transpose "qiskit.quantum_info.Choi.transpose")                     | Return the transpose quantum channel.                                      |

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

Return settings.
