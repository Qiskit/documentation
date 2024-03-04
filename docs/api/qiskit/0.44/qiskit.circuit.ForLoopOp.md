---
title: ForLoopOp
description: API reference for qiskit.circuit.ForLoopOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ForLoopOp
---

# ForLoopOp

<span id="qiskit.circuit.ForLoopOp" />

`qiskit.circuit.ForLoopOp(indexset, loop_parameter, body, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/circuit/controlflow/for_loop.py "view source code")

Bases: [`ControlFlowOp`](qiskit.circuit.ControlFlowOp "qiskit.circuit.controlflow.control_flow.ControlFlowOp")

A circuit operation which repeatedly executes a subcircuit (`body`) parameterized by a parameter `loop_parameter` through the set of integer values provided in `indexset`.

**Parameters**

*   **indexset** ([*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – A collection of integers to loop over.
*   **loop\_parameter** ([*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.parameter.Parameter") *| None*) – The placeholder parameterizing `body` to which the values from `indexset` will be assigned.
*   **body** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")) – The loop body to be repeatedly executed.
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – An optional label for identifying the instruction.

**Circuit symbol:**

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1          ├
     │  for_loop │
q_2: ┤2          ├
     │           │
c_0: ╡0          ╞
     └───────────┘
```

Create a new instruction.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – instruction name
*   **num\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – instruction’s qubit width
*   **num\_clbits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – instruction’s clbit width
*   **params** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*|*[*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")*|*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*|ndarray|*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*]*) – list of parameters
*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *or*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – instruction’s duration. it must be integer if `unit` is ‘dt’
*   **unit** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – time unit of duration
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *or None*) – An optional label for identifying the instruction.

**Raises**

*   [**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – when the register is not in the correct format.
*   [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – when the optional label is provided, but it is not a string.

## Attributes

<span id="qiskit.circuit.ForLoopOp.blocks" />

### blocks

<span id="qiskit.circuit.ForLoopOp.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.ForLoopOp.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.ForLoopOp.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.ForLoopOp.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.ForLoopOp.label" />

### label

Return instruction label

<span id="qiskit.circuit.ForLoopOp.name" />

### name

Return the name.

<span id="qiskit.circuit.ForLoopOp.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.ForLoopOp.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.ForLoopOp.params" />

### params

<span id="qiskit.circuit.ForLoopOp.unit" />

### unit

Get the time unit of duration.

## Methods

### add\_decomposition

<span id="qiskit.circuit.ForLoopOp.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.ForLoopOp.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.ForLoopOp.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.ForLoopOp.c_if" />

`c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.circuit.ForLoopOp.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.ForLoopOp.inverse" />

`inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.circuit.ForLoopOp.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.circuit.ForLoopOp.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. `measure q[0] -> c[0];`).

<Admonition title="Deprecated since version 0.25.0" type="danger">
  The method `qiskit.circuit.instruction.Instruction.qasm()` is deprecated as of qiskit-terra 0.25.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
</Admonition>

### repeat

<span id="qiskit.circuit.ForLoopOp.repeat" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If n \< 1.

### replace\_blocks

<span id="qiskit.circuit.ForLoopOp.replace_blocks" />

`replace_blocks(blocks)`

Replace blocks and return new instruction. :param blocks: Tuple of QuantumCircuits to replace in instruction.

**Returns**

New ControlFlowOp with replaced blocks.

### reverse\_ops

<span id="qiskit.circuit.ForLoopOp.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.ForLoopOp.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### validate\_parameter

<span id="qiskit.circuit.ForLoopOp.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

