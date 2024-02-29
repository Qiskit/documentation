---
title: ControlFlowOp
description: API reference for qiskit.circuit.ControlFlowOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ControlFlowOp
---

# ControlFlowOp

<span id="qiskit.circuit.ControlFlowOp" />

`ControlFlowOp(name, num_qubits, num_clbits, params, duration=None, unit='dt', label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/controlflow/control_flow.py "view source code")

Bases: [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), `ABC`

Abstract class to encapsulate all control flow operations.

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

<span id="qiskit-circuit-controlflowop-add-decomposition" />

### add\_decomposition

<span id="qiskit.circuit.ControlFlowOp.add_decomposition" />

`ControlFlowOp.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="qiskit-circuit-controlflowop-assemble" />

### assemble

<span id="qiskit.circuit.ControlFlowOp.assemble" />

`ControlFlowOp.assemble()`

Assemble a QasmQobjInstruction

<span id="qiskit-circuit-controlflowop-broadcast-arguments" />

### broadcast\_arguments

<span id="qiskit.circuit.ControlFlowOp.broadcast_arguments" />

`ControlFlowOp.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

<span id="qiskit-circuit-controlflowop-c-if" />

### c\_if

<span id="qiskit.circuit.ControlFlowOp.c_if" />

`ControlFlowOp.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

<span id="qiskit-circuit-controlflowop-copy" />

### copy

<span id="qiskit.circuit.ControlFlowOp.copy" />

`ControlFlowOp.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-circuit-controlflowop-inverse" />

### inverse

<span id="qiskit.circuit.ControlFlowOp.inverse" />

`ControlFlowOp.inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

<span id="qiskit-circuit-controlflowop-is-parameterized" />

### is\_parameterized

<span id="qiskit.circuit.ControlFlowOp.is_parameterized" />

`ControlFlowOp.is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="qiskit-circuit-controlflowop-qasm" />

### qasm

<span id="qiskit.circuit.ControlFlowOp.qasm" />

`ControlFlowOp.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

<span id="qiskit-circuit-controlflowop-repeat" />

### repeat

<span id="qiskit.circuit.ControlFlowOp.repeat" />

`ControlFlowOp.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

<span id="qiskit-circuit-controlflowop-replace-blocks" />

### replace\_blocks

<span id="qiskit.circuit.ControlFlowOp.replace_blocks" />

`abstract ControlFlowOp.replace_blocks(blocks)`

Replace blocks and return new instruction. :param blocks: Tuple of QuantumCircuits to replace in instruction.

**Returns**

New ControlFlowOp with replaced blocks.

**Return type**

[ControlFlowOp](qiskit.circuit.ControlFlowOp "qiskit.circuit.ControlFlowOp")

<span id="qiskit-circuit-controlflowop-reverse-ops" />

### reverse\_ops

<span id="qiskit.circuit.ControlFlowOp.reverse_ops" />

`ControlFlowOp.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-circuit-controlflowop-soft-compare" />

### soft\_compare

<span id="qiskit.circuit.ControlFlowOp.soft_compare" />

`ControlFlowOp.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

<span id="qiskit-circuit-controlflowop-validate-parameter" />

### validate\_parameter

<span id="qiskit.circuit.ControlFlowOp.validate_parameter" />

`ControlFlowOp.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.circuit.ControlFlowOp.blocks" />

### blocks

Tuple of QuantumCircuits which may be executed as part of the execution of this ControlFlowOp. May be parameterized by a loop parameter to be resolved at run time.

<span id="qiskit.circuit.ControlFlowOp.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.ControlFlowOp.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.ControlFlowOp.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.ControlFlowOp.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.ControlFlowOp.label" />

### label

Return instruction label

<span id="qiskit.circuit.ControlFlowOp.name" />

### name

Return the name.

<span id="qiskit.circuit.ControlFlowOp.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.ControlFlowOp.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.ControlFlowOp.params" />

### params

return instruction params.

<span id="qiskit.circuit.ControlFlowOp.unit" />

### unit

Get the time unit of duration.

