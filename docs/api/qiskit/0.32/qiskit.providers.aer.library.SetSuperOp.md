# SetSuperOp



`SetSuperOp(state)`

Bases: `qiskit.circuit.instruction.Instruction`

Set superop state of the simulator

Create new instruction to set the superop simulator state.

**Parameters**

**state** (*QuantumChannel*) – A CPTP quantum channel.

**Raises**

**ExtensionError** – if the input QuantumChannel is not CPTP.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SetSuperOp.add_decomposition#qiskit.providers.aer.library.SetSuperOp.add_decomposition "qiskit.providers.aer.library.SetSuperOp.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SetSuperOp.assemble#qiskit.providers.aer.library.SetSuperOp.assemble "qiskit.providers.aer.library.SetSuperOp.assemble")                                             | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](qiskit.providers.aer.library.SetSuperOp.broadcast_arguments#qiskit.providers.aer.library.SetSuperOp.broadcast_arguments "qiskit.providers.aer.library.SetSuperOp.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SetSuperOp.c_if#qiskit.providers.aer.library.SetSuperOp.c_if "qiskit.providers.aer.library.SetSuperOp.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SetSuperOp.copy#qiskit.providers.aer.library.SetSuperOp.copy "qiskit.providers.aer.library.SetSuperOp.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SetSuperOp.inverse#qiskit.providers.aer.library.SetSuperOp.inverse "qiskit.providers.aer.library.SetSuperOp.inverse")                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](qiskit.providers.aer.library.SetSuperOp.is_parameterized#qiskit.providers.aer.library.SetSuperOp.is_parameterized "qiskit.providers.aer.library.SetSuperOp.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SetSuperOp.mirror#qiskit.providers.aer.library.SetSuperOp.mirror "qiskit.providers.aer.library.SetSuperOp.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SetSuperOp.qasm#qiskit.providers.aer.library.SetSuperOp.qasm "qiskit.providers.aer.library.SetSuperOp.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SetSuperOp.repeat#qiskit.providers.aer.library.SetSuperOp.repeat "qiskit.providers.aer.library.SetSuperOp.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SetSuperOp.reverse_ops#qiskit.providers.aer.library.SetSuperOp.reverse_ops "qiskit.providers.aer.library.SetSuperOp.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SetSuperOp.soft_compare#qiskit.providers.aer.library.SetSuperOp.soft_compare "qiskit.providers.aer.library.SetSuperOp.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SetSuperOp.validate_parameter#qiskit.providers.aer.library.SetSuperOp.validate_parameter "qiskit.providers.aer.library.SetSuperOp.validate_parameter")     | Instruction parameters has no validation or normalization.               |

## Attributes



### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.



### definition

Return definition in terms of other basic gates.



### duration

Get the duration.



### label

Return instruction label

**Return type**

`str`



### params

return instruction params.



### unit

Get the time unit of duration.
