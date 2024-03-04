---
title: Barrier
description: API reference for qiskit.circuit.library.Barrier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Barrier
---

# qiskit.circuit.library.Barrier

<span id="qiskit.circuit.library.Barrier" />

`Barrier(num_qubits)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/barrier.py "view source code")

Barrier instruction.

Create new barrier instruction.

### \_\_init\_\_

<span id="qiskit.circuit.library.Barrier.__init__" />

`__init__(num_qubits)`

Create new barrier instruction.

## Methods

|                                                                                                                                                 |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.Barrier.__init__ "qiskit.circuit.library.Barrier.__init__")(num\_qubits)                                   | Create new barrier instruction.                                          |
| [`add_decomposition`](#qiskit.circuit.library.Barrier.add_decomposition "qiskit.circuit.library.Barrier.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.Barrier.assemble "qiskit.circuit.library.Barrier.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.Barrier.broadcast_arguments "qiskit.circuit.library.Barrier.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.circuit.library.Barrier.c_if "qiskit.circuit.library.Barrier.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.     |
| [`copy`](#qiskit.circuit.library.Barrier.copy "qiskit.circuit.library.Barrier.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.Barrier.inverse "qiskit.circuit.library.Barrier.inverse")()                                                 | Special case.                                                            |
| [`is_parameterized`](#qiskit.circuit.library.Barrier.is_parameterized "qiskit.circuit.library.Barrier.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.Barrier.mirror "qiskit.circuit.library.Barrier.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.circuit.library.Barrier.qasm "qiskit.circuit.library.Barrier.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.Barrier.repeat "qiskit.circuit.library.Barrier.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.Barrier.reverse_ops "qiskit.circuit.library.Barrier.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.library.Barrier.soft_compare "qiskit.circuit.library.Barrier.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.circuit.library.Barrier.validate_parameter "qiskit.circuit.library.Barrier.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                    |                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.Barrier.decompositions "qiskit.circuit.library.Barrier.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.Barrier.definition "qiskit.circuit.library.Barrier.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.Barrier.duration "qiskit.circuit.library.Barrier.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.Barrier.label "qiskit.circuit.library.Barrier.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.circuit.library.Barrier.params "qiskit.circuit.library.Barrier.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.Barrier.unit "qiskit.circuit.library.Barrier.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.library.Barrier.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.Barrier.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.library.Barrier.broadcast_arguments" />

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

<span id="qiskit.circuit.library.Barrier.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.circuit.library.Barrier.copy" />

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

<span id="qiskit.circuit.library.Barrier.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.Barrier.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.library.Barrier.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.Barrier.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.circuit.library.Barrier.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.Barrier.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.Barrier.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.library.Barrier.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.circuit.library.Barrier.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.Barrier.repeat" />

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

<span id="qiskit.circuit.library.Barrier.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.library.Barrier.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### unit

<span id="qiskit.circuit.library.Barrier.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.Barrier.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

