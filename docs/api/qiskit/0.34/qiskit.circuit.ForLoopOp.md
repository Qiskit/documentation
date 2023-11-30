# ForLoopOp

<span id="undefined" />

`ForLoopOp(indexset, loop_parameter, body, label=None)`

Bases: `qiskit.circuit.controlflow.control_flow.ControlFlowOp`

A circuit operation which repeatedly executes a subcircuit (`body`) parameterized by a parameter `loop_parameter` through the set of integer values provided in `indexset`.

**Parameters**

*   **indexset** (`Iterable`\[`int`]) – A collection of integers to loop over.
*   **loop\_parameter** (`Optional`\[`Parameter`]) – The placeholder parameterizing `body` to which the values from `indexset` will be assigned.
*   **body** (`QuantumCircuit`) – The loop body to be repeatedly executed.
*   **label** (`Optional`\[`str`]) – An optional label for identifying the instruction.

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

|                                                                                                                                                                   |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.ForLoopOp.add_decomposition#qiskit.circuit.ForLoopOp.add_decomposition "qiskit.circuit.ForLoopOp.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.ForLoopOp.assemble#qiskit.circuit.ForLoopOp.assemble "qiskit.circuit.ForLoopOp.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.ForLoopOp.broadcast_arguments#qiskit.circuit.ForLoopOp.broadcast_arguments "qiskit.circuit.ForLoopOp.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.ForLoopOp.c_if#qiskit.circuit.ForLoopOp.c_if "qiskit.circuit.ForLoopOp.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.ForLoopOp.copy#qiskit.circuit.ForLoopOp.copy "qiskit.circuit.ForLoopOp.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.ForLoopOp.inverse#qiskit.circuit.ForLoopOp.inverse "qiskit.circuit.ForLoopOp.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.circuit.ForLoopOp.is_parameterized#qiskit.circuit.ForLoopOp.is_parameterized "qiskit.circuit.ForLoopOp.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.circuit.ForLoopOp.qasm#qiskit.circuit.ForLoopOp.qasm "qiskit.circuit.ForLoopOp.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.ForLoopOp.repeat#qiskit.circuit.ForLoopOp.repeat "qiskit.circuit.ForLoopOp.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.ForLoopOp.reverse_ops#qiskit.circuit.ForLoopOp.reverse_ops "qiskit.circuit.ForLoopOp.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.ForLoopOp.soft_compare#qiskit.circuit.ForLoopOp.soft_compare "qiskit.circuit.ForLoopOp.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.ForLoopOp.validate_parameter#qiskit.circuit.ForLoopOp.validate_parameter "qiskit.circuit.ForLoopOp.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

## Attributes

<span id="undefined" />

### blocks

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

### name

Return the name.

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

<span id="undefined" />

### unit

Get the time unit of duration.
