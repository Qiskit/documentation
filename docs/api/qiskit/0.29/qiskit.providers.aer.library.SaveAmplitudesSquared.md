---
title: SaveAmplitudesSquared
description: API reference for qiskit.providers.aer.library.SaveAmplitudesSquared
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.library.SaveAmplitudesSquared
---

# SaveAmplitudesSquared

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared" />

`SaveAmplitudesSquared(num_qubits, params, label='amplitudes_squared', unnormalized=False, pershot=False, conditional=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.8/qiskit/providers/aer/library/save_instructions/save_amplitudes.py "view source code")

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveAverageData`

Save squared statevector amplitudes (probabilities).

Instruction to save squared statevector amplitudes (probabilities).

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the snapshot type.
*   **params** (*list*) – list of entries to vale.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated probabilities over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of probability vectors for each shot of the simulation rather than the a single amplitude vector \[Default: False].
*   **conditional** (*bool*) – if True save the probability vector conditional on the current classical register values \[Default: False].

**Raises**

**ExtensionError** – if params is invalid for the specified number of qubits.

## Methods

### add\_decomposition

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.add_decomposition" />

`SaveAmplitudesSquared.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.assemble" />

`SaveAmplitudesSquared.assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.broadcast_arguments" />

`SaveAmplitudesSquared.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.c_if" />

`SaveAmplitudesSquared.c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.copy" />

`SaveAmplitudesSquared.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.inverse" />

`SaveAmplitudesSquared.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.is_parameterized" />

`SaveAmplitudesSquared.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.mirror" />

`SaveAmplitudesSquared.mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### qasm

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.qasm" />

`SaveAmplitudesSquared.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.repeat" />

`SaveAmplitudesSquared.repeat(n)`

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

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.reverse_ops" />

`SaveAmplitudesSquared.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.soft_compare" />

`SaveAmplitudesSquared.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.validate_parameter" />

`SaveAmplitudesSquared.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.duration" />

### duration

Get the duration.

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.params" />

### params

return instruction params.

<span id="qiskit.providers.aer.library.SaveAmplitudesSquared.unit" />

### unit

Get the time unit of duration.

