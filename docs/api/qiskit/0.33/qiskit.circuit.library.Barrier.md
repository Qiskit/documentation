---
title: Barrier
description: API reference for qiskit.circuit.library.Barrier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Barrier
---

# Barrier

<span id="qiskit.circuit.library.Barrier" />

`Barrier(num_qubits)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/barrier.py "view source code")

Bases: `qiskit.circuit.instruction.Instruction`

Barrier instruction.

Create new barrier instruction.

## Methods Defined Here

### broadcast\_arguments

<span id="qiskit.circuit.library.Barrier.broadcast_arguments" />

`Barrier.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.library.Barrier.c_if" />

`Barrier.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### inverse

<span id="qiskit.circuit.library.Barrier.inverse" />

`Barrier.inverse()`

Special case. Return self.

## Attributes

<span id="qiskit.circuit.library.Barrier.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.Barrier.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.Barrier.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.Barrier.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.Barrier.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.Barrier.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.Barrier.unit" />

### unit

Get the time unit of duration.

