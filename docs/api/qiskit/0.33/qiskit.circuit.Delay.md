# Delay

<span id="undefined" />

`Delay(duration, unit='dt')`

Bases: `qiskit.circuit.instruction.Instruction`

Do nothing and just delay/wait/idle for a specified duration.

Create new delay instruction.

## Methods

|                                                                                                                                                       |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.Delay.add_decomposition#qiskit.circuit.Delay.add_decomposition "qiskit.circuit.Delay.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.Delay.assemble#qiskit.circuit.Delay.assemble "qiskit.circuit.Delay.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.Delay.broadcast_arguments#qiskit.circuit.Delay.broadcast_arguments "qiskit.circuit.Delay.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.Delay.c_if#qiskit.circuit.Delay.c_if "qiskit.circuit.Delay.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.Delay.copy#qiskit.circuit.Delay.copy "qiskit.circuit.Delay.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.Delay.inverse#qiskit.circuit.Delay.inverse "qiskit.circuit.Delay.inverse")                                                 | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.circuit.Delay.is_parameterized#qiskit.circuit.Delay.is_parameterized "qiskit.circuit.Delay.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.circuit.Delay.mirror#qiskit.circuit.Delay.mirror "qiskit.circuit.Delay.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.circuit.Delay.qasm#qiskit.circuit.Delay.qasm "qiskit.circuit.Delay.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.Delay.repeat#qiskit.circuit.Delay.repeat "qiskit.circuit.Delay.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.Delay.reverse_ops#qiskit.circuit.Delay.reverse_ops "qiskit.circuit.Delay.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.Delay.soft_compare#qiskit.circuit.Delay.soft_compare "qiskit.circuit.Delay.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`to_matrix`](qiskit.circuit.Delay.to_matrix#qiskit.circuit.Delay.to_matrix "qiskit.circuit.Delay.to_matrix")                                         | Return a Numpy.array for the unitary matrix.                                                                     |
| [`validate_parameter`](qiskit.circuit.Delay.validate_parameter#qiskit.circuit.Delay.validate_parameter "qiskit.circuit.Delay.validate_parameter")     | Delay parameter (i.e.                                                                                            |

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

Get the duration of this delay.

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
