---
title: Delay
description: API reference for qiskit.circuit.Delay
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Delay
---

# Delay

<span id="qiskit.circuit.Delay" />

`Delay(duration, unit='dt')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/circuit/delay.py "view source code")

Bases: [`qiskit.circuit.instruction.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

Do nothing and just delay/wait/idle for a specified duration.

Create new delay instruction.

## Methods

### add\_decomposition

<span id="qiskit.circuit.Delay.add_decomposition" />

`Delay.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.Delay.assemble" />

`Delay.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.Delay.broadcast_arguments" />

`Delay.broadcast_arguments(qargs, cargs)`

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

`Delay.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.circuit.Delay.copy" />

`Delay.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.Delay.inverse" />

`Delay.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.circuit.Delay.is_parameterized" />

`Delay.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.circuit.Delay.qasm" />

`Delay.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.Delay.repeat" />

`Delay.repeat(n)`

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

`Delay.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.Delay.soft_compare" />

`Delay.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.circuit.Delay.to_matrix" />

`Delay.to_matrix()`

Return a Numpy.array for the unitary matrix. This has been added to enable simulation without making delay a full Gate type.

**Returns**

matrix representation.

**Return type**

np.ndarray

### validate\_parameter

<span id="qiskit.circuit.Delay.validate_parameter" />

`Delay.validate_parameter(parameter)`

Delay parameter (i.e. duration) must be int, float or ParameterExpression.

## Attributes

<span id="qiskit.circuit.Delay.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.Delay.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.Delay.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.Delay.duration" />

### duration

Get the duration of this delay.

<span id="qiskit.circuit.Delay.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.Delay.name" />

### name

Return the name.

<span id="qiskit.circuit.Delay.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.Delay.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.Delay.params" />

### params

return instruction params.

<span id="qiskit.circuit.Delay.unit" />

### unit

Get the time unit of duration.

