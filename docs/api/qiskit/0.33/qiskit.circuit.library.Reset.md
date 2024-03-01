---
title: Reset
description: API reference for qiskit.circuit.library.Reset
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Reset
---

# Reset

<span id="qiskit.circuit.library.Reset" />

`Reset` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/reset.py "view source code")

Bases: `qiskit.circuit.instruction.Instruction`

Qubit reset.

Create new reset instruction.

## Methods Defined Here

### broadcast\_arguments

<span id="qiskit.circuit.library.Reset.broadcast_arguments" />

`Reset.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

## Attributes

<span id="qiskit.circuit.library.Reset.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.Reset.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.Reset.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.Reset.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.Reset.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.Reset.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.Reset.unit" />

### unit

Get the time unit of duration.

