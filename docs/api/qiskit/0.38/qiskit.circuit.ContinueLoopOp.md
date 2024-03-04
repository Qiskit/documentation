---
title: ContinueLoopOp
description: API reference for qiskit.circuit.ContinueLoopOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ContinueLoopOp
---

# ContinueLoopOp

<span id="qiskit.circuit.ContinueLoopOp" />

`ContinueLoopOp(num_qubits, num_clbits, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/circuit/controlflow/continue_loop.py "view source code")

Bases: [`qiskit.circuit.instruction.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

A circuit operation which, when encountered, moves to the next iteration of the nearest enclosing loop.

<Admonition title="Note" type="note">
  Can be inserted only within the body of a loop op, and must span the full width of that block.
</Admonition>

**Circuit symbol:**

```python
     ┌─────────────────┐
q_0: ┤0                ├
     │                 │
q_1: ┤1                ├
     │  continue_loop  │
q_2: ┤2                ├
     │                 │
c_0: ╡0                ╞
     └─────────────────┘
```

Create a new instruction.

**Parameters**

*   **name** (*str*) – instruction name
*   **num\_qubits** (*int*) – instruction’s qubit width
*   **num\_clbits** (*int*) – instruction’s clbit width
*   **params** (*list\[int|float|complex|str|ndarray|list|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*]*) – list of parameters
*   **duration** (*int or float*) – instruction’s duration. it must be integer if `unit` is ‘dt’
*   **unit** (*str*) – time unit of duration
*   **label** (*str or None*) – An optional label for identifying the instruction.

**Raises**

*   **CircuitError** – when the register is not in the correct format.
*   **TypeError** – when the optional label is provided, but it is not a string.

## Methods

### add\_decomposition

<span id="qiskit.circuit.ContinueLoopOp.add_decomposition" />

`ContinueLoopOp.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.ContinueLoopOp.assemble" />

`ContinueLoopOp.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.ContinueLoopOp.broadcast_arguments" />

`ContinueLoopOp.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.ContinueLoopOp.c_if" />

`ContinueLoopOp.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.circuit.ContinueLoopOp.copy" />

`ContinueLoopOp.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.ContinueLoopOp.inverse" />

`ContinueLoopOp.inverse()`

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

<span id="qiskit.circuit.ContinueLoopOp.is_parameterized" />

`ContinueLoopOp.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.circuit.ContinueLoopOp.qasm" />

`ContinueLoopOp.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.ContinueLoopOp.repeat" />

`ContinueLoopOp.repeat(n)`

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

<span id="qiskit.circuit.ContinueLoopOp.reverse_ops" />

`ContinueLoopOp.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.ContinueLoopOp.soft_compare" />

`ContinueLoopOp.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.circuit.ContinueLoopOp.validate_parameter" />

`ContinueLoopOp.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.circuit.ContinueLoopOp.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.ContinueLoopOp.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.ContinueLoopOp.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.ContinueLoopOp.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.ContinueLoopOp.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.ContinueLoopOp.name" />

### name

Return the name.

<span id="qiskit.circuit.ContinueLoopOp.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.ContinueLoopOp.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.ContinueLoopOp.params" />

### params

return instruction params.

<span id="qiskit.circuit.ContinueLoopOp.unit" />

### unit

Get the time unit of duration.

