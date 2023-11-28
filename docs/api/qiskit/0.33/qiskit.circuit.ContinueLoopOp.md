# ContinueLoopOp

<span id="undefined" />

`ContinueLoopOp(num_qubits, num_clbits, label=None)`

Bases: `qiskit.circuit.instruction.Instruction`

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
*   **params** (*list\[int|float|complex|str|ndarray|list|ParameterExpression]*) – list of parameters
*   **duration** (*int or float*) – instruction’s duration. it must be integer if `unit` is ‘dt’
*   **unit** (*str*) – time unit of duration
*   **label** (*str or None*) – An optional label for identifying the instruction.

**Raises**

**CircuitError** – when the register is not in the correct format.

## Methods

|                                                                                                                                                                                  |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.ContinueLoopOp.add_decomposition#qiskit.circuit.ContinueLoopOp.add_decomposition "qiskit.circuit.ContinueLoopOp.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.ContinueLoopOp.assemble#qiskit.circuit.ContinueLoopOp.assemble "qiskit.circuit.ContinueLoopOp.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.ContinueLoopOp.broadcast_arguments#qiskit.circuit.ContinueLoopOp.broadcast_arguments "qiskit.circuit.ContinueLoopOp.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.ContinueLoopOp.c_if#qiskit.circuit.ContinueLoopOp.c_if "qiskit.circuit.ContinueLoopOp.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.ContinueLoopOp.copy#qiskit.circuit.ContinueLoopOp.copy "qiskit.circuit.ContinueLoopOp.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.ContinueLoopOp.inverse#qiskit.circuit.ContinueLoopOp.inverse "qiskit.circuit.ContinueLoopOp.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.circuit.ContinueLoopOp.is_parameterized#qiskit.circuit.ContinueLoopOp.is_parameterized "qiskit.circuit.ContinueLoopOp.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.circuit.ContinueLoopOp.mirror#qiskit.circuit.ContinueLoopOp.mirror "qiskit.circuit.ContinueLoopOp.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.circuit.ContinueLoopOp.qasm#qiskit.circuit.ContinueLoopOp.qasm "qiskit.circuit.ContinueLoopOp.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.ContinueLoopOp.repeat#qiskit.circuit.ContinueLoopOp.repeat "qiskit.circuit.ContinueLoopOp.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.ContinueLoopOp.reverse_ops#qiskit.circuit.ContinueLoopOp.reverse_ops "qiskit.circuit.ContinueLoopOp.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.ContinueLoopOp.soft_compare#qiskit.circuit.ContinueLoopOp.soft_compare "qiskit.circuit.ContinueLoopOp.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.ContinueLoopOp.validate_parameter#qiskit.circuit.ContinueLoopOp.validate_parameter "qiskit.circuit.ContinueLoopOp.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
