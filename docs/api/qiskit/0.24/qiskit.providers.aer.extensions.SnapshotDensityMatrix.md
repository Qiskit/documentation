---
title: SnapshotDensityMatrix
description: API reference for qiskit.providers.aer.extensions.SnapshotDensityMatrix
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotDensityMatrix
---

<span id="qiskit-providers-aer-extensions-snapshotdensitymatrix" />

# qiskit.providers.aer.extensions.SnapshotDensityMatrix

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix" />

`SnapshotDensityMatrix(label, num_qubits)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.7/qiskit/providers/aer/extensions/snapshot_density_matrix.py "view source code")

Snapshot instruction for density matrix method of Qasm simulator.

Create a density matrix state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.

**Raises**

**ExtensionError** – if snapshot is invalid.

### \_\_init\_\_

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.__init__" />

`__init__(label, num_qubits)`

Create a density matrix state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.

**Raises**

**ExtensionError** – if snapshot is invalid.

## Methods

|                                                                                                                                                                                                                      |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.__init__ "qiskit.providers.aer.extensions.SnapshotDensityMatrix.__init__")(label, num\_qubits)                                                   | Create a density matrix state snapshot instruction.                      |
| [`add_decomposition`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition "qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition")(decomposition)                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble "qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble")()                                                                     | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments")(qargs, cargs)                        | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if "qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if")(classical, val)                                                                   | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy "qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy")(\[name])                                                                          | Copy of the instruction.                                                 |
| [`define_snapshot_register`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register")(circuit\[, label, …]) | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse "qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse")()                                                                        | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized "qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized")()                                             | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror "qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror")()                                                                           | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm "qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm")()                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat "qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat")(n)                                                                          | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops "qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops")()                                                            | For a composite instruction, reverse the order of sub-instructions.      |
| [`validate_parameter`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter "qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter")(parameter)                              | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                                  |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.decompositions "qiskit.providers.aer.extensions.SnapshotDensityMatrix.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.definition "qiskit.providers.aer.extensions.SnapshotDensityMatrix.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.duration "qiskit.providers.aer.extensions.SnapshotDensityMatrix.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.label "qiskit.providers.aer.extensions.SnapshotDensityMatrix.label")                            | Return snapshot label                                                         |
| [`params`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.params "qiskit.providers.aer.extensions.SnapshotDensityMatrix.params")                         | return instruction params.                                                    |
| [`snapshot_type`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.snapshot_type "qiskit.providers.aer.extensions.SnapshotDensityMatrix.snapshot_type")    | Return snapshot type                                                          |
| [`unit`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.unit "qiskit.providers.aer.extensions.SnapshotDensityMatrix.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments" />

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

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy" />

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

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register" />

`static define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### definition

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.label" />

`property label`

Return snapshot label

### mirror

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat" />

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

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### snapshot\_type

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.snapshot_type" />

`property snapshot_type`

Return snapshot type

### unit

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

