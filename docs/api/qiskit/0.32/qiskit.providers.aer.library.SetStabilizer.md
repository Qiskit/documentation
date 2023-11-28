# SetStabilizer

<span id="undefined" />

`SetStabilizer(state)`

Bases: `qiskit.circuit.instruction.Instruction`

Set the Clifford stabilizer state of the simulator

Create new instruction to set the Clifford stabilizer state of the simulator.

**Parameters**

**state** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – A clifford operator.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                         |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SetStabilizer.add_decomposition#qiskit.providers.aer.library.SetStabilizer.add_decomposition "qiskit.providers.aer.library.SetStabilizer.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SetStabilizer.assemble#qiskit.providers.aer.library.SetStabilizer.assemble "qiskit.providers.aer.library.SetStabilizer.assemble")                                             | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](qiskit.providers.aer.library.SetStabilizer.broadcast_arguments#qiskit.providers.aer.library.SetStabilizer.broadcast_arguments "qiskit.providers.aer.library.SetStabilizer.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SetStabilizer.c_if#qiskit.providers.aer.library.SetStabilizer.c_if "qiskit.providers.aer.library.SetStabilizer.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SetStabilizer.copy#qiskit.providers.aer.library.SetStabilizer.copy "qiskit.providers.aer.library.SetStabilizer.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SetStabilizer.inverse#qiskit.providers.aer.library.SetStabilizer.inverse "qiskit.providers.aer.library.SetStabilizer.inverse")                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](qiskit.providers.aer.library.SetStabilizer.is_parameterized#qiskit.providers.aer.library.SetStabilizer.is_parameterized "qiskit.providers.aer.library.SetStabilizer.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SetStabilizer.mirror#qiskit.providers.aer.library.SetStabilizer.mirror "qiskit.providers.aer.library.SetStabilizer.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SetStabilizer.qasm#qiskit.providers.aer.library.SetStabilizer.qasm "qiskit.providers.aer.library.SetStabilizer.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SetStabilizer.repeat#qiskit.providers.aer.library.SetStabilizer.repeat "qiskit.providers.aer.library.SetStabilizer.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SetStabilizer.reverse_ops#qiskit.providers.aer.library.SetStabilizer.reverse_ops "qiskit.providers.aer.library.SetStabilizer.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SetStabilizer.soft_compare#qiskit.providers.aer.library.SetStabilizer.soft_compare "qiskit.providers.aer.library.SetStabilizer.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SetStabilizer.validate_parameter#qiskit.providers.aer.library.SetStabilizer.validate_parameter "qiskit.providers.aer.library.SetStabilizer.validate_parameter")     | Instruction parameters has no validation or normalization.               |

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
