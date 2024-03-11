---
title: Snapshot
description: API reference for qiskit.extensions.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.Snapshot
---

# Snapshot

<span id="qiskit.extensions.Snapshot" />

`Snapshot(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/extensions/simulator/snapshot.py "view source code")

Bases: `qiskit.circuit.instruction.Instruction`

Simulator snapshot instruction.

Create new snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label for result data.
*   **snapshot\_type** (*str*) – the type of the snapshot.
*   **num\_qubits** (*int*) – the number of qubits for the snapshot type \[Default: 0].
*   **num\_clbits** (*int*) – the number of classical bits for the snapshot type \[Default: 0].
*   **params** (*list or None*) – the parameters for snapshot\_type \[Default: None].

**Raises**

**ExtensionError** – if snapshot label is invalid.

## Methods

### add\_decomposition

<span id="qiskit.extensions.Snapshot.add_decomposition" />

`Snapshot.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.extensions.Snapshot.assemble" />

`Snapshot.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.extensions.Snapshot.broadcast_arguments" />

`Snapshot.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.extensions.Snapshot.c_if" />

`Snapshot.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.extensions.Snapshot.copy" />

`Snapshot.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.extensions.Snapshot.inverse" />

`Snapshot.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.extensions.Snapshot.is_parameterized" />

`Snapshot.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.extensions.Snapshot.qasm" />

`Snapshot.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.extensions.Snapshot.repeat" />

`Snapshot.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

### reverse\_ops

<span id="qiskit.extensions.Snapshot.reverse_ops" />

`Snapshot.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.extensions.Snapshot.soft_compare" />

`Snapshot.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.extensions.Snapshot.validate_parameter" />

`Snapshot.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.extensions.Snapshot.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.extensions.Snapshot.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.extensions.Snapshot.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.extensions.Snapshot.duration" />

### duration

Get the duration.

<span id="qiskit.extensions.Snapshot.label" />

### label

Return snapshot label

<span id="qiskit.extensions.Snapshot.name" />

### name

Return the name.

<span id="qiskit.extensions.Snapshot.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.extensions.Snapshot.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.extensions.Snapshot.params" />

### params

return instruction params.

<span id="qiskit.extensions.Snapshot.snapshot_type" />

### snapshot\_type

Return snapshot type

<span id="qiskit.extensions.Snapshot.unit" />

### unit

Get the time unit of duration.

