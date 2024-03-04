---
title: SnapshotProbabilities
description: API reference for qiskit.providers.aer.extensions.SnapshotProbabilities
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotProbabilities
---

# SnapshotProbabilities

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities" />

`SnapshotProbabilities(label, num_qubits, variance=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.9/qiskit/providers/aer/extensions/snapshot_probabilities.py "view source code")

Bases: `qiskit.providers.aer.extensions.snapshot.Snapshot`

Snapshot instruction for all methods of Qasm simulator.

Create a probability snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the [`qiskit.providers.aer.library.SaveProbabilities`](qiskit.providers.aer.library.SaveProbabilities "qiskit.providers.aer.library.SaveProbabilities") and [`qiskit.providers.aer.library.SaveProbabilitiesDict`](qiskit.providers.aer.library.SaveProbabilitiesDict "qiskit.providers.aer.library.SaveProbabilitiesDict") instructions.
</Admonition>

## Methods

### add\_decomposition

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.add_decomposition" />

`SnapshotProbabilities.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.assemble" />

`SnapshotProbabilities.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.broadcast_arguments" />

`SnapshotProbabilities.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.c_if" />

`SnapshotProbabilities.c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.copy" />

`SnapshotProbabilities.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.define_snapshot_register" />

`static SnapshotProbabilities.define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.inverse" />

`SnapshotProbabilities.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.is_parameterized" />

`SnapshotProbabilities.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.mirror" />

`SnapshotProbabilities.mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.qasm" />

`SnapshotProbabilities.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.repeat" />

`SnapshotProbabilities.repeat(n)`

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

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.reverse_ops" />

`SnapshotProbabilities.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.soft_compare" />

`SnapshotProbabilities.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.validate_parameter" />

`SnapshotProbabilities.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.duration" />

### duration

Get the duration.

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.label" />

### label

Return snapshot label

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.params" />

### params

return instruction params.

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.snapshot_type" />

### snapshot\_type

Return snapshot type

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities.unit" />

### unit

Get the time unit of duration.

