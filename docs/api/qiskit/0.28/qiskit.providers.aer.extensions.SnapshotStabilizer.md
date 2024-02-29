---
title: SnapshotStabilizer
description: API reference for qiskit.providers.aer.extensions.SnapshotStabilizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotStabilizer
---

# qiskit.providers.aer.extensions.SnapshotStabilizer

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer" />

`SnapshotStabilizer(label, num_qubits=0)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.8/qiskit/providers/aer/extensions/snapshot_stabilizer.py "view source code")

Snapshot instruction for stabilizer method of Qasm simulator.

Create a stabilizer state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveStabilizer`](qiskit.providers.aer.library.SaveStabilizer "qiskit.providers.aer.library.SaveStabilizer") instruction.
</Admonition>

### \_\_init\_\_

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.__init__" />

`__init__(label, num_qubits=0)`

Create a stabilizer state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveStabilizer`](qiskit.providers.aer.library.SaveStabilizer "qiskit.providers.aer.library.SaveStabilizer") instruction.
</Admonition>

## Methods

|                                                                                                                                                                                                                |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.extensions.SnapshotStabilizer.__init__ "qiskit.providers.aer.extensions.SnapshotStabilizer.__init__")(label\[, num\_qubits])                                                | Create a stabilizer state snapshot instruction.                          |
| [`add_decomposition`](#qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition "qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition")(decomposition)                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.extensions.SnapshotStabilizer.assemble "qiskit.providers.aer.extensions.SnapshotStabilizer.assemble")()                                                                     | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments")(qargs, cargs)                        | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.extensions.SnapshotStabilizer.c_if "qiskit.providers.aer.extensions.SnapshotStabilizer.c_if")(classical, val)                                                                   | Add classical condition on register or cbit classical and value val.     |
| [`copy`](#qiskit.providers.aer.extensions.SnapshotStabilizer.copy "qiskit.providers.aer.extensions.SnapshotStabilizer.copy")(\[name])                                                                          | Copy of the instruction.                                                 |
| [`define_snapshot_register`](#qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register")(circuit\[, label, …]) | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](#qiskit.providers.aer.extensions.SnapshotStabilizer.inverse "qiskit.providers.aer.extensions.SnapshotStabilizer.inverse")()                                                                        | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized "qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized")()                                             | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.extensions.SnapshotStabilizer.mirror "qiskit.providers.aer.extensions.SnapshotStabilizer.mirror")()                                                                           | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.extensions.SnapshotStabilizer.qasm "qiskit.providers.aer.extensions.SnapshotStabilizer.qasm")()                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.extensions.SnapshotStabilizer.repeat "qiskit.providers.aer.extensions.SnapshotStabilizer.repeat")(n)                                                                          | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.extensions.SnapshotStabilizer.reverse_ops "qiskit.providers.aer.extensions.SnapshotStabilizer.reverse_ops")()                                                            | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.extensions.SnapshotStabilizer.soft_compare "qiskit.providers.aer.extensions.SnapshotStabilizer.soft_compare")(other)                                                    | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.extensions.SnapshotStabilizer.validate_parameter "qiskit.providers.aer.extensions.SnapshotStabilizer.validate_parameter")(parameter)                              | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                            |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.extensions.SnapshotStabilizer.decompositions "qiskit.providers.aer.extensions.SnapshotStabilizer.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.extensions.SnapshotStabilizer.definition "qiskit.providers.aer.extensions.SnapshotStabilizer.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.extensions.SnapshotStabilizer.duration "qiskit.providers.aer.extensions.SnapshotStabilizer.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.extensions.SnapshotStabilizer.label "qiskit.providers.aer.extensions.SnapshotStabilizer.label")                            | Return snapshot label                                                         |
| [`params`](#qiskit.providers.aer.extensions.SnapshotStabilizer.params "qiskit.providers.aer.extensions.SnapshotStabilizer.params")                         | return instruction params.                                                    |
| [`snapshot_type`](#qiskit.providers.aer.extensions.SnapshotStabilizer.snapshot_type "qiskit.providers.aer.extensions.SnapshotStabilizer.snapshot_type")    | Return snapshot type                                                          |
| [`unit`](#qiskit.providers.aer.extensions.SnapshotStabilizer.unit "qiskit.providers.aer.extensions.SnapshotStabilizer.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments" />

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

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.copy" />

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

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register" />

`static define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### definition

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.label" />

`property label`

Return snapshot label

### mirror

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.repeat" />

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

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### snapshot\_type

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.snapshot_type" />

`property snapshot_type`

Return snapshot type

### soft\_compare

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### unit

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

