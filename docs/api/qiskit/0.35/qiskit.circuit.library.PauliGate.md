# PauliGate[¶](#pauligate "Permalink to this headline")

<span id="undefined" />

`PauliGate(label)`

Bases: `qiskit.circuit.gate.Gate`

A multi-qubit Pauli gate.

This gate exists for optimization purposes for the quantum statevector simulation, since applying multiple pauli gates to different qubits at once can be done via a single pass on the statevector.

The functionality is equivalent to applying the pauli gates sequentially using standard Qiskit gates

Create a new gate.

**Parameters**

*   **name** – The Qobj name of the gate.
*   **num\_qubits** – The number of qubits the gate acts on.
*   **params** – A list of parameters.
*   **label** – An optional label for the gate.

## Methods Defined Here

|                                                                                                                                                                                       |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`inverse`](qiskit.circuit.library.PauliGate.inverse#qiskit.circuit.library.PauliGate.inverse "qiskit.circuit.library.PauliGate.inverse")                                             | Return inverted pauli gate (itself).                         |
| [`validate_parameter`](qiskit.circuit.library.PauliGate.validate_parameter#qiskit.circuit.library.PauliGate.validate_parameter "qiskit.circuit.library.PauliGate.validate_parameter") | Gate parameters should be int, float, or ParameterExpression |

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
