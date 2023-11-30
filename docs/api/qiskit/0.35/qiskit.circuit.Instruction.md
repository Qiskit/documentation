# Instruction

<span id="undefined" />

`Instruction(name, num_qubits, num_clbits, params, duration=None, unit='dt', label=None)`

Bases: `object`

Generic quantum instruction.

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
| [`add_decomposition`](qiskit.circuit.Instruction.add_decomposition#qiskit.circuit.Instruction.add_decomposition "qiskit.circuit.Instruction.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.Instruction.assemble#qiskit.circuit.Instruction.assemble "qiskit.circuit.Instruction.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.Instruction.broadcast_arguments#qiskit.circuit.Instruction.broadcast_arguments "qiskit.circuit.Instruction.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.Instruction.c_if#qiskit.circuit.Instruction.c_if "qiskit.circuit.Instruction.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.Instruction.copy#qiskit.circuit.Instruction.copy "qiskit.circuit.Instruction.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.Instruction.inverse#qiskit.circuit.Instruction.inverse "qiskit.circuit.Instruction.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.circuit.Instruction.is_parameterized#qiskit.circuit.Instruction.is_parameterized "qiskit.circuit.Instruction.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.circuit.Instruction.qasm#qiskit.circuit.Instruction.qasm "qiskit.circuit.Instruction.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.Instruction.repeat#qiskit.circuit.Instruction.repeat "qiskit.circuit.Instruction.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.Instruction.reverse_ops#qiskit.circuit.Instruction.reverse_ops "qiskit.circuit.Instruction.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.Instruction.soft_compare#qiskit.circuit.Instruction.soft_compare "qiskit.circuit.Instruction.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.Instruction.validate_parameter#qiskit.circuit.Instruction.validate_parameter "qiskit.circuit.Instruction.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
