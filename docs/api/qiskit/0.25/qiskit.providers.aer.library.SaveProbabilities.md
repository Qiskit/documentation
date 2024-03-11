---
title: SaveProbabilities
description: API reference for qiskit.providers.aer.library.SaveProbabilities
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.library.SaveProbabilities
---

# qiskit.providers.aer.library.SaveProbabilities

<span id="qiskit.providers.aer.library.SaveProbabilities" />

`SaveProbabilities(num_qubits, label='probabilities', unnormalized=False, pershot=False, conditional=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.8/qiskit/providers/aer/library/save_instructions/save_probabilities.py "view source code")

Save measurement outcome probabilities vector.

Instruction to save measurement probabilities vector.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the snapshot type.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated probabilities over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of probabilities for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the probabilities data conditional on the current classical register values \[Default: False].

### \_\_init\_\_

<span id="qiskit.providers.aer.library.SaveProbabilities.__init__" />

`__init__(num_qubits, label='probabilities', unnormalized=False, pershot=False, conditional=False)`

Instruction to save measurement probabilities vector.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the snapshot type.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated probabilities over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of probabilities for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the probabilities data conditional on the current classical register values \[Default: False].

## Methods

|                                                                                                                                                                                 |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.library.SaveProbabilities.__init__ "qiskit.providers.aer.library.SaveProbabilities.__init__")(num\_qubits\[, label, unnormalized, …])        | Instruction to save measurement probabilities vector.                    |
| [`add_decomposition`](#qiskit.providers.aer.library.SaveProbabilities.add_decomposition "qiskit.providers.aer.library.SaveProbabilities.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.library.SaveProbabilities.assemble "qiskit.providers.aer.library.SaveProbabilities.assemble")()                                              | Return the QasmQobjInstruction for the intructions.                      |
| [`broadcast_arguments`](#qiskit.providers.aer.library.SaveProbabilities.broadcast_arguments "qiskit.providers.aer.library.SaveProbabilities.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.library.SaveProbabilities.c_if "qiskit.providers.aer.library.SaveProbabilities.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.providers.aer.library.SaveProbabilities.copy "qiskit.providers.aer.library.SaveProbabilities.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.providers.aer.library.SaveProbabilities.inverse "qiskit.providers.aer.library.SaveProbabilities.inverse")()                                                 | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.library.SaveProbabilities.is_parameterized "qiskit.providers.aer.library.SaveProbabilities.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.library.SaveProbabilities.mirror "qiskit.providers.aer.library.SaveProbabilities.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.library.SaveProbabilities.qasm "qiskit.providers.aer.library.SaveProbabilities.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.library.SaveProbabilities.repeat "qiskit.providers.aer.library.SaveProbabilities.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.library.SaveProbabilities.reverse_ops "qiskit.providers.aer.library.SaveProbabilities.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.library.SaveProbabilities.soft_compare "qiskit.providers.aer.library.SaveProbabilities.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.library.SaveProbabilities.validate_parameter "qiskit.providers.aer.library.SaveProbabilities.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                    |                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.library.SaveProbabilities.decompositions "qiskit.providers.aer.library.SaveProbabilities.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.library.SaveProbabilities.definition "qiskit.providers.aer.library.SaveProbabilities.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.library.SaveProbabilities.duration "qiskit.providers.aer.library.SaveProbabilities.duration")                   | Get the duration.                                                             |
| [`params`](#qiskit.providers.aer.library.SaveProbabilities.params "qiskit.providers.aer.library.SaveProbabilities.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.providers.aer.library.SaveProbabilities.unit "qiskit.providers.aer.library.SaveProbabilities.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.providers.aer.library.SaveProbabilities.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.library.SaveProbabilities.assemble" />

`assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit.providers.aer.library.SaveProbabilities.broadcast_arguments" />

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

<span id="qiskit.providers.aer.library.SaveProbabilities.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.providers.aer.library.SaveProbabilities.copy" />

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

<span id="qiskit.providers.aer.library.SaveProbabilities.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.providers.aer.library.SaveProbabilities.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.library.SaveProbabilities.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.library.SaveProbabilities.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.library.SaveProbabilities.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.providers.aer.library.SaveProbabilities.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.library.SaveProbabilities.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.library.SaveProbabilities.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.library.SaveProbabilities.repeat" />

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

<span id="qiskit.providers.aer.library.SaveProbabilities.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.library.SaveProbabilities.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### unit

<span id="qiskit.providers.aer.library.SaveProbabilities.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.library.SaveProbabilities.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

