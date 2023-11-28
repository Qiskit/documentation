# BreakLoopOp

<span id="undefined" />

`BreakLoopOp(num_qubits, num_clbits, label=None)`

Bases: `qiskit.circuit.instruction.Instruction`

A circuit operation which, when encountered, jumps to the end of the nearest enclosing loop.

**Circuit symbol:**

```python
     ┌──────────────┐
q_0: ┤0             ├
     │              │
q_1: ┤1             ├
     │  break_loop  │
q_2: ┤2             ├
     │              │
c_0: ╡0             ╞
     └──────────────┘
```

Create a new instruction.

**Parameters**

*   **name** (*str*) – instruction name
*   **num\_qubits** (*int*) – instruction’s qubit width
*   **num\_clbits** (*int*) – instruction’s clbit width
*   **params** (*list\[int|float|complex|str|ndarray|list|ParameterExpression]*) – list of parameters
*   **duration** (*int or float*) – instruction’s duration. it must be integer if `unit` is ‘dt’
*   **unit** (*str*) – time unit of duration
*   **label** (*str or None*) – An optional label for identifying the instruction.

**Raises**

**CircuitError** – when the register is not in the correct format.

## Methods

|                                                                                                                                                                         |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.BreakLoopOp.add_decomposition#qiskit.circuit.BreakLoopOp.add_decomposition "qiskit.circuit.BreakLoopOp.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.BreakLoopOp.assemble#qiskit.circuit.BreakLoopOp.assemble "qiskit.circuit.BreakLoopOp.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.BreakLoopOp.broadcast_arguments#qiskit.circuit.BreakLoopOp.broadcast_arguments "qiskit.circuit.BreakLoopOp.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.BreakLoopOp.c_if#qiskit.circuit.BreakLoopOp.c_if "qiskit.circuit.BreakLoopOp.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.BreakLoopOp.copy#qiskit.circuit.BreakLoopOp.copy "qiskit.circuit.BreakLoopOp.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.BreakLoopOp.inverse#qiskit.circuit.BreakLoopOp.inverse "qiskit.circuit.BreakLoopOp.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.circuit.BreakLoopOp.is_parameterized#qiskit.circuit.BreakLoopOp.is_parameterized "qiskit.circuit.BreakLoopOp.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.circuit.BreakLoopOp.mirror#qiskit.circuit.BreakLoopOp.mirror "qiskit.circuit.BreakLoopOp.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.circuit.BreakLoopOp.qasm#qiskit.circuit.BreakLoopOp.qasm "qiskit.circuit.BreakLoopOp.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.BreakLoopOp.repeat#qiskit.circuit.BreakLoopOp.repeat "qiskit.circuit.BreakLoopOp.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.BreakLoopOp.reverse_ops#qiskit.circuit.BreakLoopOp.reverse_ops "qiskit.circuit.BreakLoopOp.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.BreakLoopOp.soft_compare#qiskit.circuit.BreakLoopOp.soft_compare "qiskit.circuit.BreakLoopOp.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.BreakLoopOp.validate_parameter#qiskit.circuit.BreakLoopOp.validate_parameter "qiskit.circuit.BreakLoopOp.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
