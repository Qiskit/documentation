---
title: Barrier
description: API reference for qiskit.circuit.library.Barrier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Barrier
---

# Barrier

<span id="qiskit.circuit.library.Barrier" />

`Barrier(num_qubits)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/barrier.py "view source code")

Barrier instruction.

Create new barrier instruction.

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### params

return instruction params.

## Methods

### add\_decomposition

<span id="qiskit.circuit.library.Barrier.add_decomposition" />

`Barrier.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.Barrier.assemble" />

`Barrier.assemble()`

Assemble a QasmQobjInstruction

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

Add classical condition on register classical and value val.

### copy

<span id="qiskit.circuit.library.Barrier.copy" />

`Barrier.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.library.Barrier.inverse" />

`Barrier.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.circuit.library.Barrier.is_parameterized" />

`Barrier.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.circuit.library.Barrier.mirror" />

`Barrier.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### qasm

<span id="qiskit.circuit.library.Barrier.qasm" />

`Barrier.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.Barrier.repeat" />

`Barrier.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

