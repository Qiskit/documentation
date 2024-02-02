---
title: StatePreparation
description: API reference for qiskit.circuit.library.StatePreparation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.StatePreparation
---

# StatePreparation

<span id="qiskit.circuit.library.StatePreparation" />

`StatePreparation(params, num_qubits=None, inverse=False, label=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/data_preparation/state_preparation.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Complex amplitude state preparation.

Class that implements the (complex amplitude) state preparation of some flexible collection of qubit registers.

**Parameters**

*   **params** (*str | list | int |* [*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector")) –

    *   Statevector: Statevector to initialize to.
    *   list: vector of complex amplitudes to initialize to.
    *   string: labels of basis states of the Pauli eigenstates Z, X, Y. See [`Statevector.from_label()`](qiskit.quantum_info.Statevector#from_label "qiskit.quantum_info.Statevector.from_label"). Notice the order of the labels is reversed with respect to the qubit index to be applied to. Example label ‘01’ initializes the qubit zero to $\vert 1\rangle$ and the qubit one to $\vert 0\rangle$.
    *   int: an integer that is used as a bitmap indicating which qubits to initialize to $\vert 1\rangle$. Example: setting params to 5 would initialize qubit 0 and qubit 2 to $\vert 1\rangle$ and qubit 1 to $\vert 0\rangle$.

*   **num\_qubits** (*int | None*) – This parameter is only used if params is an int. Indicates the total number of qubits in the initialize call. Example: initialize covers 5 qubits and params is 3. This allows qubits 0 and 1 to be initialized to $\vert 1\rangle$ and the remaining 3 qubits to be initialized to $\vert 0\rangle$.

*   **inverse** (*bool*) – if True, the inverse state is constructed.

*   **label** (*str | None*) – An optional label for the gate

**Raises**

**QiskitError** – `num_qubits` parameter used when `params` is not an integer

When a Statevector argument is passed the state is prepared using a recursive initialization algorithm, including optimizations, from \[1], as well as some additional optimizations including removing zero rotations and double cnots.

**References:** \[1] Shende, Bullock, Markov. Synthesis of Quantum Logic Circuits (2004) \[[https://arxiv.org/abs/quant-ph/0406176v5](https://arxiv.org/abs/quant-ph/0406176v5)]

**Methods Defined Here**

|                                                                                                                                                    |                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`broadcast_arguments`](qiskit.circuit.library.StatePreparation#broadcast_arguments "qiskit.circuit.library.StatePreparation.broadcast_arguments") | Validation and handling of the arguments and its relationship.              |
| [`inverse`](qiskit.circuit.library.StatePreparation#inverse "qiskit.circuit.library.StatePreparation.inverse")                                     | Return inverted StatePreparation                                            |
| [`validate_parameter`](qiskit.circuit.library.StatePreparation#validate_parameter "qiskit.circuit.library.StatePreparation.validate_parameter")    | StatePreparation instruction parameter can be str, int, float, and complex. |

## Attributes

<span id="qiskit.circuit.library.StatePreparation.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.StatePreparation.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.StatePreparation.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.StatePreparation.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.StatePreparation.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.StatePreparation.name" />

### name

Return the name.

<span id="qiskit.circuit.library.StatePreparation.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.StatePreparation.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.StatePreparation.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.StatePreparation.unit" />

### unit

Get the time unit of duration.

