---
title: SaveStabilizer
description: API reference for qiskit.providers.aer.library.SaveStabilizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.library.SaveStabilizer
---

# qiskit.providers.aer.library.SaveStabilizer

<span id="qiskit.providers.aer.library.SaveStabilizer" />

`SaveStabilizer(num_qubits, label='stabilizer', pershot=False, conditional=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.8/qiskit/providers/aer/library/save_instructions/save_stabilizer.py "view source code")

Save Stabilizer instruction

Create new instruction to save the stabilizer simulator state.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits of the
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of Cliffords for each shot of the simulation rather than a single statevector \[Default: False].
*   **conditional** (*bool*) – if True save data conditional on the current classical register values \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

### \_\_init\_\_

<span id="qiskit.providers.aer.library.SaveStabilizer.__init__" />

`__init__(num_qubits, label='stabilizer', pershot=False, conditional=False)`

Create new instruction to save the stabilizer simulator state.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits of the
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of Cliffords for each shot of the simulation rather than a single statevector \[Default: False].
*   **conditional** (*bool*) – if True save data conditional on the current classical register values \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                           |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.library.SaveStabilizer.__init__ "qiskit.providers.aer.library.SaveStabilizer.__init__")(num\_qubits\[, label, pershot, …])             | Create new instruction to save the stabilizer simulator state.           |
| [`add_decomposition`](#qiskit.providers.aer.library.SaveStabilizer.add_decomposition "qiskit.providers.aer.library.SaveStabilizer.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.library.SaveStabilizer.assemble "qiskit.providers.aer.library.SaveStabilizer.assemble")()                                              | Return the QasmQobjInstruction for the intructions.                      |
| [`broadcast_arguments`](#qiskit.providers.aer.library.SaveStabilizer.broadcast_arguments "qiskit.providers.aer.library.SaveStabilizer.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.library.SaveStabilizer.c_if "qiskit.providers.aer.library.SaveStabilizer.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.     |
| [`copy`](#qiskit.providers.aer.library.SaveStabilizer.copy "qiskit.providers.aer.library.SaveStabilizer.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.providers.aer.library.SaveStabilizer.inverse "qiskit.providers.aer.library.SaveStabilizer.inverse")()                                                 | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.library.SaveStabilizer.is_parameterized "qiskit.providers.aer.library.SaveStabilizer.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.library.SaveStabilizer.mirror "qiskit.providers.aer.library.SaveStabilizer.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.library.SaveStabilizer.qasm "qiskit.providers.aer.library.SaveStabilizer.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.library.SaveStabilizer.repeat "qiskit.providers.aer.library.SaveStabilizer.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.library.SaveStabilizer.reverse_ops "qiskit.providers.aer.library.SaveStabilizer.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.library.SaveStabilizer.soft_compare "qiskit.providers.aer.library.SaveStabilizer.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.library.SaveStabilizer.validate_parameter "qiskit.providers.aer.library.SaveStabilizer.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                              |                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.library.SaveStabilizer.decompositions "qiskit.providers.aer.library.SaveStabilizer.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.library.SaveStabilizer.definition "qiskit.providers.aer.library.SaveStabilizer.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.library.SaveStabilizer.duration "qiskit.providers.aer.library.SaveStabilizer.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.library.SaveStabilizer.label "qiskit.providers.aer.library.SaveStabilizer.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.providers.aer.library.SaveStabilizer.params "qiskit.providers.aer.library.SaveStabilizer.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.providers.aer.library.SaveStabilizer.unit "qiskit.providers.aer.library.SaveStabilizer.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.providers.aer.library.SaveStabilizer.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.library.SaveStabilizer.assemble" />

`assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit.providers.aer.library.SaveStabilizer.broadcast_arguments" />

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

<span id="qiskit.providers.aer.library.SaveStabilizer.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.providers.aer.library.SaveStabilizer.copy" />

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

<span id="qiskit.providers.aer.library.SaveStabilizer.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.providers.aer.library.SaveStabilizer.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.library.SaveStabilizer.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.library.SaveStabilizer.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.library.SaveStabilizer.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.providers.aer.library.SaveStabilizer.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.providers.aer.library.SaveStabilizer.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.library.SaveStabilizer.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.library.SaveStabilizer.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.library.SaveStabilizer.repeat" />

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

<span id="qiskit.providers.aer.library.SaveStabilizer.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.library.SaveStabilizer.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### unit

<span id="qiskit.providers.aer.library.SaveStabilizer.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.library.SaveStabilizer.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

