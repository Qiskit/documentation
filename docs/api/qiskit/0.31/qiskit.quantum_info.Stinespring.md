# Stinespring

<span id="undefined" />

`Stinespring(data, input_dims=None, output_dims=None)`

Bases: `qiskit.quantum_info.operators.channel.quantum_channel.QuantumChannel`

Stinespring representation of a quantum channel.

The Stinespring representation of a quantum channel $\mathcal{E}$ is a rectangular matrix $A$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(ρ) = \mbox{Tr}_2\left[A ρ A^\dagger\right]
$$

where $\mbox{Tr}_2$ is the [`partial_trace()`](qiskit.quantum_info.partial_trace#qiskit.quantum_info.partial_trace "qiskit.quantum_info.partial_trace") over subsystem 2.

A general operator map $\mathcal{G}$ can also be written using the generalized Stinespring representation which is given by two matrices $A$, $B$ such that

$$
\mathcal{G}(ρ) = \mbox{Tr}_2\left[A ρ B^\dagger\right]
$$

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Stinespring operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a a list of Kraus matrices.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. This can fail for the Stinespring operator if the output dimension cannot be automatically determined.

## Methods

|                                                                                                                                                                    |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.Stinespring.adjoint#qiskit.quantum_info.Stinespring.adjoint "qiskit.quantum_info.Stinespring.adjoint")                             | Return the adjoint quantum channel.                                        |
| [`compose`](qiskit.quantum_info.Stinespring.compose#qiskit.quantum_info.Stinespring.compose "qiskit.quantum_info.Stinespring.compose")                             | Return the operator composition with another Stinespring.                  |
| [`conjugate`](qiskit.quantum_info.Stinespring.conjugate#qiskit.quantum_info.Stinespring.conjugate "qiskit.quantum_info.Stinespring.conjugate")                     | Return the conjugate quantum channel.                                      |
| [`copy`](qiskit.quantum_info.Stinespring.copy#qiskit.quantum_info.Stinespring.copy "qiskit.quantum_info.Stinespring.copy")                                         | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.Stinespring.dot#qiskit.quantum_info.Stinespring.dot "qiskit.quantum_info.Stinespring.dot")                                             | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.Stinespring.expand#qiskit.quantum_info.Stinespring.expand "qiskit.quantum_info.Stinespring.expand")                                 | Return the reverse-order tensor product with another Stinespring.          |
| [`input_dims`](qiskit.quantum_info.Stinespring.input_dims#qiskit.quantum_info.Stinespring.input_dims "qiskit.quantum_info.Stinespring.input_dims")                 | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](qiskit.quantum_info.Stinespring.is_cp#qiskit.quantum_info.Stinespring.is_cp "qiskit.quantum_info.Stinespring.is_cp")                                     | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](qiskit.quantum_info.Stinespring.is_cptp#qiskit.quantum_info.Stinespring.is_cptp "qiskit.quantum_info.Stinespring.is_cptp")                             | Return True if completely-positive trace-preserving.                       |
| [`is_tp`](qiskit.quantum_info.Stinespring.is_tp#qiskit.quantum_info.Stinespring.is_tp "qiskit.quantum_info.Stinespring.is_tp")                                     | Test if a channel is trace-preserving (TP)                                 |
| [`is_unitary`](qiskit.quantum_info.Stinespring.is_unitary#qiskit.quantum_info.Stinespring.is_unitary "qiskit.quantum_info.Stinespring.is_unitary")                 | Return True if QuantumChannel is a unitary channel.                        |
| [`output_dims`](qiskit.quantum_info.Stinespring.output_dims#qiskit.quantum_info.Stinespring.output_dims "qiskit.quantum_info.Stinespring.output_dims")             | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.Stinespring.power#qiskit.quantum_info.Stinespring.power "qiskit.quantum_info.Stinespring.power")                                     | Return the power of the quantum channel.                                   |
| [`reshape`](qiskit.quantum_info.Stinespring.reshape#qiskit.quantum_info.Stinespring.reshape "qiskit.quantum_info.Stinespring.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](qiskit.quantum_info.Stinespring.tensor#qiskit.quantum_info.Stinespring.tensor "qiskit.quantum_info.Stinespring.tensor")                                 | Return the tensor product with another Stinespring.                        |
| [`to_instruction`](qiskit.quantum_info.Stinespring.to_instruction#qiskit.quantum_info.Stinespring.to_instruction "qiskit.quantum_info.Stinespring.to_instruction") | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](qiskit.quantum_info.Stinespring.to_operator#qiskit.quantum_info.Stinespring.to_operator "qiskit.quantum_info.Stinespring.to_operator")             | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](qiskit.quantum_info.Stinespring.transpose#qiskit.quantum_info.Stinespring.transpose "qiskit.quantum_info.Stinespring.transpose")                     | Return the transpose quantum channel.                                      |

## Attributes

<span id="undefined" />

### atol

`= 1e-08`

<span id="undefined" />

### data

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
