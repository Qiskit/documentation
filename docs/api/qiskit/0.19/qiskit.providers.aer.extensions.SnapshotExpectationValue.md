---
title: SnapshotExpectationValue
description: API reference for qiskit.providers.aer.extensions.SnapshotExpectationValue
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotExpectationValue
---

# SnapshotExpectationValue

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue" />

`SnapshotExpectationValue(label, op, single_shot=False, variance=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.5/qiskit/providers/aer/extensions/snapshot_expectation_value.py "view source code")

Snapshot instruction for supported methods of Qasm simulator.

Create a probability snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **op** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

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

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition" />

`SnapshotExpectationValue.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble" />

`SnapshotExpectationValue.assemble()`

Assemble a QasmQobjInstruction for snapshot\_expectation\_value.

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments" />

`SnapshotExpectationValue.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if" />

`SnapshotExpectationValue.c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.copy" />

`SnapshotExpectationValue.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register" />

`static SnapshotExpectationValue.define_snapshot_register(circuit, label, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse" />

`SnapshotExpectationValue.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized" />

`SnapshotExpectationValue.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror" />

`SnapshotExpectationValue.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm" />

`SnapshotExpectationValue.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat" />

`SnapshotExpectationValue.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

