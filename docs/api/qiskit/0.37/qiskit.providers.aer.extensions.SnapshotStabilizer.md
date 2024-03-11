---
title: SnapshotStabilizer
description: API reference for qiskit.providers.aer.extensions.SnapshotStabilizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotStabilizer
---

# SnapshotStabilizer

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer" />

`SnapshotStabilizer(label, num_qubits=0)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.10/qiskit/providers/aer/extensions/snapshot_stabilizer.py "view source code")

Bases: [`qiskit.providers.aer.extensions.snapshot.Snapshot`](qiskit.providers.aer.extensions.Snapshot "qiskit.providers.aer.extensions.snapshot.Snapshot")

Snapshot instruction for stabilizer method of Qasm simulator.

Create a stabilizer state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the [`qiskit.providers.aer.library.SaveStabilizer`](qiskit.providers.aer.library.SaveStabilizer "qiskit.providers.aer.library.SaveStabilizer") instruction.
</Admonition>

## Methods

### add\_decomposition

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition" />

`SnapshotStabilizer.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.assemble" />

`SnapshotStabilizer.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments" />

`SnapshotStabilizer.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.c_if" />

`SnapshotStabilizer.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.copy" />

`SnapshotStabilizer.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register" />

`static SnapshotStabilizer.define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.inverse" />

`SnapshotStabilizer.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized" />

`SnapshotStabilizer.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.qasm" />

`SnapshotStabilizer.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.repeat" />

`SnapshotStabilizer.repeat(n)`

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

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.reverse_ops" />

`SnapshotStabilizer.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.soft_compare" />

`SnapshotStabilizer.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.validate_parameter" />

`SnapshotStabilizer.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.duration" />

### duration

Get the duration.

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.label" />

### label

Return snapshot label

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.name" />

### name

Return the name.

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.params" />

### params

return instruction params.

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.snapshot_type" />

### snapshot\_type

Return snapshot type

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.unit" />

### unit

Get the time unit of duration.

