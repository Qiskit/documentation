---
title: Snapshot
description: API reference for qiskit.providers.aer.extensions.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.Snapshot
---

# qiskit.providers.aer.extensions.Snapshot

<span id="qiskit.providers.aer.extensions.Snapshot" />

`Snapshot(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)`

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

### \_\_init\_\_

<span id="qiskit.providers.aer.extensions.Snapshot.__init__" />

`__init__(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)`

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

## Attributes

### add\_decomposition

<span id="qiskit.providers.aer.extensions.Snapshot.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.Snapshot.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.Snapshot.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.extensions.Snapshot.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.Snapshot.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### decompositions

<span id="qiskit.providers.aer.extensions.Snapshot.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.Snapshot.define_snapshot_register" />

`static define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### definition

<span id="qiskit.providers.aer.extensions.Snapshot.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.extensions.Snapshot.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.extensions.Snapshot.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.Snapshot.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.providers.aer.extensions.Snapshot.label" />

`property label`

Return snapshot label

### mirror

<span id="qiskit.providers.aer.extensions.Snapshot.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.extensions.Snapshot.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.extensions.Snapshot.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.Snapshot.repeat" />

`repeat(n)`

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

<span id="qiskit.providers.aer.extensions.Snapshot.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### snapshot\_type

<span id="qiskit.providers.aer.extensions.Snapshot.snapshot_type" />

`property snapshot_type`

Return snapshot type

### soft\_compare

<span id="qiskit.providers.aer.extensions.Snapshot.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### unit

<span id="qiskit.providers.aer.extensions.Snapshot.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.extensions.Snapshot.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

