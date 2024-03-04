---
title: SnapshotExpectationValue
description: API reference for qiskit.providers.aer.extensions.SnapshotExpectationValue
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotExpectationValue
---

<span id="qiskit-providers-aer-extensions-snapshotexpectationvalue" />

# qiskit.providers.aer.extensions.SnapshotExpectationValue

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue" />

`SnapshotExpectationValue(label, op, single_shot=False, variance=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.7/qiskit/providers/aer/extensions/snapshot_expectation_value.py "view source code")

Snapshot instruction for supported methods of Qasm simulator.

Create an expectation value snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **op** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of values \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

### \_\_init\_\_

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.__init__" />

`__init__(label, op, single_shot=False, variance=False)`

Create an expectation value snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **op** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of values \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

## Methods

|                                                                                                                                                                                                                            |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.__init__ "qiskit.providers.aer.extensions.SnapshotExpectationValue.__init__")(label, op\[, single\_shot, variance])                                 | Create an expectation value snapshot instruction.                        |
| [`add_decomposition`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition "qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition")(decomposition)                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble "qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble")()                                                                     | Assemble a QasmQobjInstruction for snapshot\_expectation\_value.         |
| [`broadcast_arguments`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments")(qargs, cargs)                        | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if "qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if")(classical, val)                                                                   | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.copy "qiskit.providers.aer.extensions.SnapshotExpectationValue.copy")(\[name])                                                                          | Copy of the instruction.                                                 |
| [`define_snapshot_register`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register")(circuit\[, label, …]) | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse "qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse")()                                                                        | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized "qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized")()                                             | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror "qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror")()                                                                           | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm "qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm")()                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat "qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat")(n)                                                                          | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops "qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops")()                                                            | For a composite instruction, reverse the order of sub-instructions.      |
| [`validate_parameter`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter "qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter")(parameter)                              | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.decompositions "qiskit.providers.aer.extensions.SnapshotExpectationValue.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.definition "qiskit.providers.aer.extensions.SnapshotExpectationValue.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.duration "qiskit.providers.aer.extensions.SnapshotExpectationValue.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.label "qiskit.providers.aer.extensions.SnapshotExpectationValue.label")                            | Return snapshot label                                                         |
| [`params`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.params "qiskit.providers.aer.extensions.SnapshotExpectationValue.params")                         | return instruction params.                                                    |
| [`snapshot_type`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.snapshot_type "qiskit.providers.aer.extensions.SnapshotExpectationValue.snapshot_type")    | Return snapshot type                                                          |
| [`unit`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.unit "qiskit.providers.aer.extensions.SnapshotExpectationValue.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble" />

`assemble()`

Assemble a QasmQobjInstruction for snapshot\_expectation\_value.

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments" />

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

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.copy" />

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

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register" />

`static define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### definition

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.label" />

`property label`

Return snapshot label

### mirror

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat" />

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

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### snapshot\_type

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.snapshot_type" />

`property snapshot_type`

Return snapshot type

### unit

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

