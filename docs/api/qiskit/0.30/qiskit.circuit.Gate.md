# Gate

<span id="undefined" />

`Gate(name, num_qubits, params, label=None)`

Bases: `qiskit.circuit.instruction.Instruction`

Unitary gate.

Create a new gate.

**Parameters**

*   **name** (`str`) – The Qobj name of the gate.
*   **num\_qubits** (`int`) – The number of qubits the gate acts on.
*   **params** (`List`) – A list of parameters.
*   **label** (`Optional`\[`str`]) – An optional label for the gate.

## Methods

|                                                                                                                                                    |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.circuit.Gate.add_decomposition#qiskit.circuit.Gate.add_decomposition "qiskit.circuit.Gate.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.circuit.Gate.assemble#qiskit.circuit.Gate.assemble "qiskit.circuit.Gate.assemble")                                             | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](qiskit.circuit.Gate.broadcast_arguments#qiskit.circuit.Gate.broadcast_arguments "qiskit.circuit.Gate.broadcast_arguments") | Validation and handling of the arguments and its relationship.           |
| [`c_if`](qiskit.circuit.Gate.c_if#qiskit.circuit.Gate.c_if "qiskit.circuit.Gate.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`control`](qiskit.circuit.Gate.control#qiskit.circuit.Gate.control "qiskit.circuit.Gate.control")                                                 | Return controlled version of gate.                                       |
| [`copy`](qiskit.circuit.Gate.copy#qiskit.circuit.Gate.copy "qiskit.circuit.Gate.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.circuit.Gate.inverse#qiskit.circuit.Gate.inverse "qiskit.circuit.Gate.inverse")                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](qiskit.circuit.Gate.is_parameterized#qiskit.circuit.Gate.is_parameterized "qiskit.circuit.Gate.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.circuit.Gate.mirror#qiskit.circuit.Gate.mirror "qiskit.circuit.Gate.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](qiskit.circuit.Gate.power#qiskit.circuit.Gate.power "qiskit.circuit.Gate.power")                                                         | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](qiskit.circuit.Gate.qasm#qiskit.circuit.Gate.qasm "qiskit.circuit.Gate.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.circuit.Gate.repeat#qiskit.circuit.Gate.repeat "qiskit.circuit.Gate.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.circuit.Gate.reverse_ops#qiskit.circuit.Gate.reverse_ops "qiskit.circuit.Gate.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.circuit.Gate.soft_compare#qiskit.circuit.Gate.soft_compare "qiskit.circuit.Gate.soft_compare")                             | Soft comparison between gates.                                           |
| [`to_matrix`](qiskit.circuit.Gate.to_matrix#qiskit.circuit.Gate.to_matrix "qiskit.circuit.Gate.to_matrix")                                         | Return a Numpy.array for the gate unitary matrix.                        |
| [`validate_parameter`](qiskit.circuit.Gate.validate_parameter#qiskit.circuit.Gate.validate_parameter "qiskit.circuit.Gate.validate_parameter")     | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

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
