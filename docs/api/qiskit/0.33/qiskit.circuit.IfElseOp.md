# IfElseOp

<span id="undefined" />

`IfElseOp(condition, true_body, false_body=None, label=None)`

Bases: `qiskit.circuit.controlflow.control_flow.ControlFlowOp`

A circuit operation which executes a program (`true_body`) if a provided condition (`condition`) evaluates to true, and optionally evaluates another program (`false_body`) otherwise.

**Parameters**

*   **condition** (`Tuple`\[`Union`\[`ClassicalRegister`, `Clbit`], `int`]) – A condition to be evaluated at circuit runtime which, if true, will trigger the evaluation of `true_body`. Can be specified as either a tuple of a `ClassicalRegister` to be tested for equality with a given `int`, or as a tuple of a `Clbit` to be compared to either a `bool` or an `int`.
*   **true\_body** (`QuantumCircuit`) – A program to be executed if `condition` evaluates to true.
*   **false\_body** (`Optional`\[`QuantumCircuit`]) – A optional program to be executed if `condition` evaluates to false.
*   **label** (`Optional`\[`str`]) – An optional label for identifying the instruction.

If provided, `false_body` must be of the same `num_qubits` and `num_clbits` as `true_body`.

The classical bits used in `condition` must be a subset of those attached to the circuit on which this `IfElseOp` will be appended.

**Circuit symbol:**

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1          ├
     │  if_else  │
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

|                                                                                                                                                                |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.IfElseOp.add_decomposition#qiskit.circuit.IfElseOp.add_decomposition "qiskit.circuit.IfElseOp.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.IfElseOp.assemble#qiskit.circuit.IfElseOp.assemble "qiskit.circuit.IfElseOp.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.IfElseOp.broadcast_arguments#qiskit.circuit.IfElseOp.broadcast_arguments "qiskit.circuit.IfElseOp.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.IfElseOp.c_if#qiskit.circuit.IfElseOp.c_if "qiskit.circuit.IfElseOp.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.IfElseOp.copy#qiskit.circuit.IfElseOp.copy "qiskit.circuit.IfElseOp.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.IfElseOp.inverse#qiskit.circuit.IfElseOp.inverse "qiskit.circuit.IfElseOp.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.circuit.IfElseOp.is_parameterized#qiskit.circuit.IfElseOp.is_parameterized "qiskit.circuit.IfElseOp.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.circuit.IfElseOp.mirror#qiskit.circuit.IfElseOp.mirror "qiskit.circuit.IfElseOp.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.circuit.IfElseOp.qasm#qiskit.circuit.IfElseOp.qasm "qiskit.circuit.IfElseOp.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.IfElseOp.repeat#qiskit.circuit.IfElseOp.repeat "qiskit.circuit.IfElseOp.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.IfElseOp.reverse_ops#qiskit.circuit.IfElseOp.reverse_ops "qiskit.circuit.IfElseOp.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.IfElseOp.soft_compare#qiskit.circuit.IfElseOp.soft_compare "qiskit.circuit.IfElseOp.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.IfElseOp.validate_parameter#qiskit.circuit.IfElseOp.validate_parameter "qiskit.circuit.IfElseOp.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
