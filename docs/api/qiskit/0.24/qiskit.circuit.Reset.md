---
title: Reset
description: API reference for qiskit.circuit.Reset
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Reset
---

<span id="qiskit-circuit-reset" />

# qiskit.circuit.Reset

<span id="qiskit.circuit.Reset" />

`Reset` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/circuit/reset.py "view source code")

Qubit reset.

Create new reset instruction.

### \_\_init\_\_

<span id="qiskit.circuit.Reset.__init__" />

`__init__()`

Create new reset instruction.

## Methods

|                                                                                                                             |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.Reset.__init__ "qiskit.circuit.Reset.__init__")()                                              | Create new reset instruction.                                            |
| [`add_decomposition`](#qiskit.circuit.Reset.add_decomposition "qiskit.circuit.Reset.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.Reset.assemble "qiskit.circuit.Reset.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.Reset.broadcast_arguments "qiskit.circuit.Reset.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.circuit.Reset.c_if "qiskit.circuit.Reset.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.circuit.Reset.copy "qiskit.circuit.Reset.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.Reset.inverse "qiskit.circuit.Reset.inverse")()                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](#qiskit.circuit.Reset.is_parameterized "qiskit.circuit.Reset.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.Reset.mirror "qiskit.circuit.Reset.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.circuit.Reset.qasm "qiskit.circuit.Reset.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.Reset.repeat "qiskit.circuit.Reset.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.Reset.reverse_ops "qiskit.circuit.Reset.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`validate_parameter`](#qiskit.circuit.Reset.validate_parameter "qiskit.circuit.Reset.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                |                                                                               |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.Reset.decompositions "qiskit.circuit.Reset.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.Reset.definition "qiskit.circuit.Reset.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.Reset.duration "qiskit.circuit.Reset.duration")                   | Get the duration.                                                             |
| [`params`](#qiskit.circuit.Reset.params "qiskit.circuit.Reset.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.Reset.unit "qiskit.circuit.Reset.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.Reset.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.Reset.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.Reset.broadcast_arguments" />

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

<span id="qiskit.circuit.Reset.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.circuit.Reset.copy" />

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

<span id="qiskit.circuit.Reset.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.Reset.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.Reset.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.Reset.inverse" />

`inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.circuit.Reset.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.circuit.Reset.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.Reset.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.circuit.Reset.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.Reset.repeat" />

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

<span id="qiskit.circuit.Reset.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### unit

<span id="qiskit.circuit.Reset.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.Reset.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

