# PTM

<span id="undefined" />

`PTM(data, input_dims=None, output_dims=None)`

Bases: `qiskit.quantum_info.operators.channel.quantum_channel.QuantumChannel`

Pauli Transfer Matrix (PTM) representation of a Quantum Channel.

The PTM representation of an $n$-qubit quantum channel $\mathcal{E}$ is an $n$-qubit [`SuperOp`](qiskit.quantum_info.SuperOp#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") $R$ defined with respect to vectorization in the Pauli basis instead of column-vectorization. The elements of the PTM $R$ are given by

$$
R_{i,j} = \mbox{Tr}\left[P_i \mathcal{E}(P_j) \right]
$$

where $[P_0, P_1, ..., P_{4^{n}-1}]$ is the $n$-qubit Pauli basis in lexicographic order.

Evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ with respect to the PTM is given by

$$
|\mathcal{E}(\rho)\rangle\!\rangle_P = S_P |\rho\rangle\!\rangle_P
$$

where $|A\rangle\!\rangle_P$ denotes vectorization in the Pauli basis $\langle i | A\rangle\!\rangle_P = \mbox{Tr}[P_i A]$.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a PTM quantum channel operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a PTM.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The PTM representation is only valid for N-qubit channels.

## Methods

|                                                                                                                                            |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.PTM.adjoint#qiskit.quantum_info.PTM.adjoint "qiskit.quantum_info.PTM.adjoint")                             | Return the adjoint quantum channel.                                        |
| [`compose`](qiskit.quantum_info.PTM.compose#qiskit.quantum_info.PTM.compose "qiskit.quantum_info.PTM.compose")                             | Return the operator composition with another PTM.                          |
| [`conjugate`](qiskit.quantum_info.PTM.conjugate#qiskit.quantum_info.PTM.conjugate "qiskit.quantum_info.PTM.conjugate")                     | Return the conjugate quantum channel.                                      |
| [`copy`](qiskit.quantum_info.PTM.copy#qiskit.quantum_info.PTM.copy "qiskit.quantum_info.PTM.copy")                                         | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.PTM.dot#qiskit.quantum_info.PTM.dot "qiskit.quantum_info.PTM.dot")                                             | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.PTM.expand#qiskit.quantum_info.PTM.expand "qiskit.quantum_info.PTM.expand")                                 | Return the reverse-order tensor product with another PTM.                  |
| [`input_dims`](qiskit.quantum_info.PTM.input_dims#qiskit.quantum_info.PTM.input_dims "qiskit.quantum_info.PTM.input_dims")                 | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](qiskit.quantum_info.PTM.is_cp#qiskit.quantum_info.PTM.is_cp "qiskit.quantum_info.PTM.is_cp")                                     | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](qiskit.quantum_info.PTM.is_cptp#qiskit.quantum_info.PTM.is_cptp "qiskit.quantum_info.PTM.is_cptp")                             | Return True if completely-positive trace-preserving (CPTP).                |
| [`is_tp`](qiskit.quantum_info.PTM.is_tp#qiskit.quantum_info.PTM.is_tp "qiskit.quantum_info.PTM.is_tp")                                     | Test if a channel is trace-preserving (TP)                                 |
| [`is_unitary`](qiskit.quantum_info.PTM.is_unitary#qiskit.quantum_info.PTM.is_unitary "qiskit.quantum_info.PTM.is_unitary")                 | Return True if QuantumChannel is a unitary channel.                        |
| [`output_dims`](qiskit.quantum_info.PTM.output_dims#qiskit.quantum_info.PTM.output_dims "qiskit.quantum_info.PTM.output_dims")             | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.PTM.power#qiskit.quantum_info.PTM.power "qiskit.quantum_info.PTM.power")                                     | Return the power of the quantum channel.                                   |
| [`reshape`](qiskit.quantum_info.PTM.reshape#qiskit.quantum_info.PTM.reshape "qiskit.quantum_info.PTM.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](qiskit.quantum_info.PTM.tensor#qiskit.quantum_info.PTM.tensor "qiskit.quantum_info.PTM.tensor")                                 | Return the tensor product with another PTM.                                |
| [`to_instruction`](qiskit.quantum_info.PTM.to_instruction#qiskit.quantum_info.PTM.to_instruction "qiskit.quantum_info.PTM.to_instruction") | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](qiskit.quantum_info.PTM.to_operator#qiskit.quantum_info.PTM.to_operator "qiskit.quantum_info.PTM.to_operator")             | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](qiskit.quantum_info.PTM.transpose#qiskit.quantum_info.PTM.transpose "qiskit.quantum_info.PTM.transpose")                     | Return the transpose quantum channel.                                      |

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
