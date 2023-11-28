# WhileLoopOp

<span id="undefined" />

`WhileLoopOp(condition, body, label=None)`

Bases: `qiskit.circuit.controlflow.control_flow.ControlFlowOp`

A circuit operation which repeatedly executes a subcircuit (`body`) until a condition (`condition`) evaluates as False.

**Parameters**

*   **condition** (`Union`\[`Tuple`\[`ClassicalRegister`, `int`], `Tuple`\[`Clbit`, `int`], `Tuple`\[`Clbit`, `bool`]]) – A condition to be checked prior to executing `body`. Can be specified as either a tuple of a `ClassicalRegister` to be tested for equality with a given `int`, or as a tuple of a `Clbit` to be compared to either a `bool` or an `int`.
*   **body** (`QuantumCircuit`) – The loop body to be repeatedly executed.
*   **label** (`Optional`\[`str`]) – An optional label for identifying the instruction.

The classical bits used in `condition` must be a subset of those attached to `body`.

**Circuit symbol:**

```python
     ┌─────────────┐
q_0: ┤0            ├
     │             │
q_1: ┤1            ├
     │  while_loop │
q_2: ┤2            ├
     │             │
c_0: ╡0            ╞
     └─────────────┘
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
| [`add_decomposition`](qiskit.circuit.WhileLoopOp.add_decomposition#qiskit.circuit.WhileLoopOp.add_decomposition "qiskit.circuit.WhileLoopOp.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.WhileLoopOp.assemble#qiskit.circuit.WhileLoopOp.assemble "qiskit.circuit.WhileLoopOp.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.WhileLoopOp.broadcast_arguments#qiskit.circuit.WhileLoopOp.broadcast_arguments "qiskit.circuit.WhileLoopOp.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.WhileLoopOp.c_if#qiskit.circuit.WhileLoopOp.c_if "qiskit.circuit.WhileLoopOp.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.WhileLoopOp.copy#qiskit.circuit.WhileLoopOp.copy "qiskit.circuit.WhileLoopOp.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.WhileLoopOp.inverse#qiskit.circuit.WhileLoopOp.inverse "qiskit.circuit.WhileLoopOp.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.circuit.WhileLoopOp.is_parameterized#qiskit.circuit.WhileLoopOp.is_parameterized "qiskit.circuit.WhileLoopOp.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.circuit.WhileLoopOp.mirror#qiskit.circuit.WhileLoopOp.mirror "qiskit.circuit.WhileLoopOp.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.circuit.WhileLoopOp.qasm#qiskit.circuit.WhileLoopOp.qasm "qiskit.circuit.WhileLoopOp.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.WhileLoopOp.repeat#qiskit.circuit.WhileLoopOp.repeat "qiskit.circuit.WhileLoopOp.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.WhileLoopOp.reverse_ops#qiskit.circuit.WhileLoopOp.reverse_ops "qiskit.circuit.WhileLoopOp.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.WhileLoopOp.soft_compare#qiskit.circuit.WhileLoopOp.soft_compare "qiskit.circuit.WhileLoopOp.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.WhileLoopOp.validate_parameter#qiskit.circuit.WhileLoopOp.validate_parameter "qiskit.circuit.WhileLoopOp.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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

### params

<span id="undefined" />

### unit

Get the time unit of duration.
