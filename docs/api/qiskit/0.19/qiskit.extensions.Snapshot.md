---
title: Snapshot
description: API reference for qiskit.extensions.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.Snapshot
---

# Snapshot

<span id="qiskit.extensions.Snapshot" />

`Snapshot(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/extensions/simulator/snapshot.py "view source code")

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

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### label

Return snapshot label

### params

return instruction params.

### snapshot\_type

Return snapshot type

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

Add classical condition on register classical and value val.

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

### mirror

<span id="qiskit.extensions.Snapshot.mirror" />

`Snapshot.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

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

