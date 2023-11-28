# StatePreparation

<span id="undefined" />

`StatePreparation(params, num_qubits=None, inverse=False, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Complex amplitude state preparation.

Class that implements the (complex amplitude) state preparation of some flexible collection of qubit registers.

**Parameters**

*   **params** (`Union`\[`str`, `list`, `int`, `Statevector`]) –

    *   Statevector: Statevector to initialize to.
    *   list: vector of complex amplitudes to initialize to.
    *   string: labels of basis states of the Pauli eigenstates Z, X, Y. See [`Statevector.from_label()`](qiskit.quantum_info.Statevector.from_label#qiskit.quantum_info.Statevector.from_label "qiskit.quantum_info.Statevector.from_label"). Notice the order of the labels is reversed with respect to the qubit index to be applied to. Example label ‘01’ initializes the qubit zero to $|1\rangle$ and the qubit one to $|0\rangle$.
    *   int: an integer that is used as a bitmap indicating which qubits to initialize to $|1\rangle$. Example: setting params to 5 would initialize qubit 0 and qubit 2 to $|1\rangle$ and qubit 1 to $|0\rangle$.

*   **num\_qubits** (`Optional`\[`int`]) – This parameter is only used if params is an int. Indicates the total number of qubits in the initialize call. Example: initialize covers 5 qubits and params is 3. This allows qubits 0 and 1 to be initialized to $|1\rangle$ and the remaining 3 qubits to be initialized to $|0\rangle$.

*   **inverse** (`bool`) – if True, the inverse state is constructed.

*   **label** (`Optional`\[`str`]) – An optional label for the gate

**Raises**

**QiskitError** – `num_qubits` parameter used when `params` is not an integer

When a Statevector argument is passed the state is prepared using a recursive initialization algorithm, including optimizations, from \[1], as well as some additional optimizations including removing zero rotations and double cnots.

**References:** \[1] Shende, Bullock, Markov. Synthesis of Quantum Logic Circuits (2004) \[[https://arxiv.org/abs/quant-ph/0406176v5](https://arxiv.org/abs/quant-ph/0406176v5)]

## Methods Defined Here

|                                                                                                                                                                                                                |                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`broadcast_arguments`](qiskit.circuit.library.StatePreparation.broadcast_arguments#qiskit.circuit.library.StatePreparation.broadcast_arguments "qiskit.circuit.library.StatePreparation.broadcast_arguments") | Validation and handling of the arguments and its relationship.              |
| [`inverse`](qiskit.circuit.library.StatePreparation.inverse#qiskit.circuit.library.StatePreparation.inverse "qiskit.circuit.library.StatePreparation.inverse")                                                 | Return inverted StatePreparation                                            |
| [`validate_parameter`](qiskit.circuit.library.StatePreparation.validate_parameter#qiskit.circuit.library.StatePreparation.validate_parameter "qiskit.circuit.library.StatePreparation.validate_parameter")     | StatePreparation instruction parameter can be str, int, float, and complex. |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### name

Return the name.

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
