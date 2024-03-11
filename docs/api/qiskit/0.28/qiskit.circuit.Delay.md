---
title: Delay
description: API reference for qiskit.circuit.Delay
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Delay
---

# qiskit.circuit.Delay

<span id="qiskit.circuit.Delay" />

`Delay(duration, unit='dt')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/delay.py "view source code")

Do nothing and just delay/wait/idle for a specified duration.

Create new delay instruction.

### \_\_init\_\_

<span id="qiskit.circuit.Delay.__init__" />

`__init__(duration, unit='dt')`

Create new delay instruction.

## Methods

|                                                                                                                             |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.Delay.__init__ "qiskit.circuit.Delay.__init__")(duration\[, unit])                             | Create new delay instruction.                                            |
| [`add_decomposition`](#qiskit.circuit.Delay.add_decomposition "qiskit.circuit.Delay.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.Delay.assemble "qiskit.circuit.Delay.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.Delay.broadcast_arguments "qiskit.circuit.Delay.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.circuit.Delay.c_if "qiskit.circuit.Delay.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.     |
| [`copy`](#qiskit.circuit.Delay.copy "qiskit.circuit.Delay.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.Delay.inverse "qiskit.circuit.Delay.inverse")()                                                 | Special case.                                                            |
| [`is_parameterized`](#qiskit.circuit.Delay.is_parameterized "qiskit.circuit.Delay.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.Delay.mirror "qiskit.circuit.Delay.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.circuit.Delay.qasm "qiskit.circuit.Delay.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.Delay.repeat "qiskit.circuit.Delay.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.Delay.reverse_ops "qiskit.circuit.Delay.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.Delay.soft_compare "qiskit.circuit.Delay.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.circuit.Delay.to_matrix "qiskit.circuit.Delay.to_matrix")()                                           | Return a Numpy.array for the unitary matrix.                             |
| [`validate_parameter`](#qiskit.circuit.Delay.validate_parameter "qiskit.circuit.Delay.validate_parameter")(parameter)       | Delay parameter (i.e.                                                    |

## Attributes

|                                                                                                |                                                                               |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.Delay.decompositions "qiskit.circuit.Delay.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.Delay.definition "qiskit.circuit.Delay.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.Delay.duration "qiskit.circuit.Delay.duration")                   | Get the duration of this delay.                                               |
| [`label`](#qiskit.circuit.Delay.label "qiskit.circuit.Delay.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.circuit.Delay.params "qiskit.circuit.Delay.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.Delay.unit "qiskit.circuit.Delay.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.Delay.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.Delay.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.Delay.broadcast_arguments" />

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

<span id="qiskit.circuit.Delay.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.circuit.Delay.copy" />

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

<span id="qiskit.circuit.Delay.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.Delay.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.Delay.duration" />

`property duration`

Get the duration of this delay.

### inverse

<span id="qiskit.circuit.Delay.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.circuit.Delay.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.Delay.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.Delay.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.Delay.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.circuit.Delay.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.Delay.repeat" />

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

<span id="qiskit.circuit.Delay.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.Delay.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.circuit.Delay.to_matrix" />

`to_matrix()`

Return a Numpy.array for the unitary matrix. This has been added to enable simulation without making delay a full Gate type.

**Returns**

matrix representation.

**Return type**

np.ndarray

### unit

<span id="qiskit.circuit.Delay.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.Delay.validate_parameter" />

`validate_parameter(parameter)`

Delay parameter (i.e. duration) must be int, float or ParameterExpression.

