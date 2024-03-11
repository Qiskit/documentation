---
title: SaveProbabilitiesDict
description: API reference for qiskit_aer.library.SaveProbabilitiesDict
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.library.SaveProbabilitiesDict
---

# SaveProbabilitiesDict

<span id="qiskit_aer.library.SaveProbabilitiesDict" />

`SaveProbabilitiesDict(num_qubits, label='probabilities_dict', unnormalized=False, pershot=False, conditional=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.12/qiskit_aer/library/save_instructions/save_probabilities.py "view source code")

Bases: `qiskit_aer.library.save_instructions.save_data.SaveAverageData`

Save measurement outcome probabilities dict.

Instruction to save measurement probabilities dict.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the snapshot type.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated probabilities over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of probabilities for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the probabilities data conditional on the current classical register values \[Default: False].

## Methods

### add\_decomposition

<span id="qiskit_aer.library.SaveProbabilitiesDict.add_decomposition" />

`SaveProbabilitiesDict.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit_aer.library.SaveProbabilitiesDict.assemble" />

`SaveProbabilitiesDict.assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit_aer.library.SaveProbabilitiesDict.broadcast_arguments" />

`SaveProbabilitiesDict.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit_aer.library.SaveProbabilitiesDict.c_if" />

`SaveProbabilitiesDict.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit_aer.library.SaveProbabilitiesDict.copy" />

`SaveProbabilitiesDict.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit_aer.library.SaveProbabilitiesDict.inverse" />

`SaveProbabilitiesDict.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit_aer.library.SaveProbabilitiesDict.is_parameterized" />

`SaveProbabilitiesDict.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit_aer.library.SaveProbabilitiesDict.qasm" />

`SaveProbabilitiesDict.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit_aer.library.SaveProbabilitiesDict.repeat" />

`SaveProbabilitiesDict.repeat(n)`

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

<span id="qiskit_aer.library.SaveProbabilitiesDict.reverse_ops" />

`SaveProbabilitiesDict.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit_aer.library.SaveProbabilitiesDict.soft_compare" />

`SaveProbabilitiesDict.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit_aer.library.SaveProbabilitiesDict.validate_parameter" />

`SaveProbabilitiesDict.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit_aer.library.SaveProbabilitiesDict.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit_aer.library.SaveProbabilitiesDict.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit_aer.library.SaveProbabilitiesDict.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit_aer.library.SaveProbabilitiesDict.duration" />

### duration

Get the duration.

<span id="qiskit_aer.library.SaveProbabilitiesDict.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit_aer.library.SaveProbabilitiesDict.name" />

### name

Return the name.

<span id="qiskit_aer.library.SaveProbabilitiesDict.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit_aer.library.SaveProbabilitiesDict.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit_aer.library.SaveProbabilitiesDict.params" />

### params

return instruction params.

<span id="qiskit_aer.library.SaveProbabilitiesDict.unit" />

### unit

Get the time unit of duration.

