# Reset[¶](#reset "Permalink to this headline")

<span id="undefined" />

`Reset`

Bases: `qiskit.circuit.instruction.Instruction`

Qubit reset.

Create new reset instruction.

## Methods

|                                                                                                                                                       |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.Reset.add_decomposition#qiskit.circuit.Reset.add_decomposition "qiskit.circuit.Reset.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.Reset.assemble#qiskit.circuit.Reset.assemble "qiskit.circuit.Reset.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.Reset.broadcast_arguments#qiskit.circuit.Reset.broadcast_arguments "qiskit.circuit.Reset.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.Reset.c_if#qiskit.circuit.Reset.c_if "qiskit.circuit.Reset.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.Reset.copy#qiskit.circuit.Reset.copy "qiskit.circuit.Reset.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.Reset.inverse#qiskit.circuit.Reset.inverse "qiskit.circuit.Reset.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.circuit.Reset.is_parameterized#qiskit.circuit.Reset.is_parameterized "qiskit.circuit.Reset.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.circuit.Reset.qasm#qiskit.circuit.Reset.qasm "qiskit.circuit.Reset.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.Reset.repeat#qiskit.circuit.Reset.repeat "qiskit.circuit.Reset.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.Reset.reverse_ops#qiskit.circuit.Reset.reverse_ops "qiskit.circuit.Reset.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.Reset.soft_compare#qiskit.circuit.Reset.soft_compare "qiskit.circuit.Reset.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.Reset.validate_parameter#qiskit.circuit.Reset.validate_parameter "qiskit.circuit.Reset.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
