---
title: PauliGate
description: API reference for qiskit.circuit.library.PauliGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PauliGate
---

# PauliGate

<span id="qiskit.circuit.library.PauliGate" />

`PauliGate(label)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/circuit/library/generalized_gates/pauli.py "view source code")

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

A multi-qubit Pauli gate.

This gate exists for optimization purposes for the quantum statevector simulation, since applying multiple pauli gates to different qubits at once can be done via a single pass on the statevector.

The functionality is equivalent to applying the pauli gates sequentially using standard Qiskit gates.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`pauli()`](qiskit.circuit.QuantumCircuit#pauli "qiskit.circuit.QuantumCircuit.pauli") method.

Create a new gate.

**Parameters**

*   **name** – The Qobj name of the gate.
*   **num\_qubits** – The number of qubits the gate acts on.
*   **params** – A list of parameters.
*   **label** – An optional label for the gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.PauliGate.inverse" />

`PauliGate.inverse()`

Return inverted pauli gate (itself).

### validate\_parameter

<span id="qiskit.circuit.library.PauliGate.validate_parameter" />

`PauliGate.validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

## Attributes

<span id="qiskit.circuit.library.PauliGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.PauliGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.PauliGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.PauliGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.PauliGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.PauliGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.PauliGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.PauliGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.PauliGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.PauliGate.unit" />

### unit

Get the time unit of duration.

