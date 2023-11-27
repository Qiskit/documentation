# Chi[¶](#chi "Permalink to this headline")

<span id="undefined" />

`Chi(data, input_dims=None, output_dims=None)`

Bases: `qiskit.quantum_info.operators.channel.quantum_channel.QuantumChannel`

Pauli basis Chi-matrix representation of a quantum channel.

The Chi-matrix representation of an $n$-qubit quantum channel $\mathcal{E}$ is a matrix $\chi$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(ρ) = \sum_{i, j} \chi_{i,j} P_i ρ P_j
$$

where $[P_0, P_1, ..., P_{4^{n}-1}]$ is the $n$-qubit Pauli basis in lexicographic order. It is related to the [`Choi`](qiskit.quantum_info.Choi#qiskit.quantum_info.Choi "qiskit.quantum_info.Choi") representation by a change of basis of the Choi-matrix into the Pauli basis.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Chi-matrix operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a Chi-matrix.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The Chi matrix representation is only valid for N-qubit channels.

## Methods

|                                                                                                                                            |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.Chi.adjoint#qiskit.quantum_info.Chi.adjoint "qiskit.quantum_info.Chi.adjoint")                             | Return the adjoint quantum channel.                                        |
| [`compose`](qiskit.quantum_info.Chi.compose#qiskit.quantum_info.Chi.compose "qiskit.quantum_info.Chi.compose")                             | Return the operator composition with another Chi.                          |
| [`conjugate`](qiskit.quantum_info.Chi.conjugate#qiskit.quantum_info.Chi.conjugate "qiskit.quantum_info.Chi.conjugate")                     | Return the conjugate quantum channel.                                      |
| [`copy`](qiskit.quantum_info.Chi.copy#qiskit.quantum_info.Chi.copy "qiskit.quantum_info.Chi.copy")                                         | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.Chi.dot#qiskit.quantum_info.Chi.dot "qiskit.quantum_info.Chi.dot")                                             | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.Chi.expand#qiskit.quantum_info.Chi.expand "qiskit.quantum_info.Chi.expand")                                 | Return the reverse-order tensor product with another Chi.                  |
| [`input_dims`](qiskit.quantum_info.Chi.input_dims#qiskit.quantum_info.Chi.input_dims "qiskit.quantum_info.Chi.input_dims")                 | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](qiskit.quantum_info.Chi.is_cp#qiskit.quantum_info.Chi.is_cp "qiskit.quantum_info.Chi.is_cp")                                     | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](qiskit.quantum_info.Chi.is_cptp#qiskit.quantum_info.Chi.is_cptp "qiskit.quantum_info.Chi.is_cptp")                             | Return True if completely-positive trace-preserving (CPTP).                |
| [`is_tp`](qiskit.quantum_info.Chi.is_tp#qiskit.quantum_info.Chi.is_tp "qiskit.quantum_info.Chi.is_tp")                                     | Test if a channel is trace-preserving (TP)                                 |
| [`is_unitary`](qiskit.quantum_info.Chi.is_unitary#qiskit.quantum_info.Chi.is_unitary "qiskit.quantum_info.Chi.is_unitary")                 | Return True if QuantumChannel is a unitary channel.                        |
| [`output_dims`](qiskit.quantum_info.Chi.output_dims#qiskit.quantum_info.Chi.output_dims "qiskit.quantum_info.Chi.output_dims")             | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.Chi.power#qiskit.quantum_info.Chi.power "qiskit.quantum_info.Chi.power")                                     | Return the power of the quantum channel.                                   |
| [`reshape`](qiskit.quantum_info.Chi.reshape#qiskit.quantum_info.Chi.reshape "qiskit.quantum_info.Chi.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](qiskit.quantum_info.Chi.tensor#qiskit.quantum_info.Chi.tensor "qiskit.quantum_info.Chi.tensor")                                 | Return the tensor product with another Chi.                                |
| [`to_instruction`](qiskit.quantum_info.Chi.to_instruction#qiskit.quantum_info.Chi.to_instruction "qiskit.quantum_info.Chi.to_instruction") | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](qiskit.quantum_info.Chi.to_operator#qiskit.quantum_info.Chi.to_operator "qiskit.quantum_info.Chi.to_operator")             | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](qiskit.quantum_info.Chi.transpose#qiskit.quantum_info.Chi.transpose "qiskit.quantum_info.Chi.transpose")                     | Return the transpose quantum channel.                                      |

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
