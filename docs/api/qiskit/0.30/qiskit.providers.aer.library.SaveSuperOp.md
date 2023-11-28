# SaveSuperOp

<span id="undefined" />

`SaveSuperOp(num_qubits, label='superop', pershot=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveSingleData`

Save a SuperOp matrix.

Create new instruction to save the superop simulator state.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the save instruction.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of SuperOp matrices for each shot of the simulation \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                   |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SaveSuperOp.add_decomposition#qiskit.providers.aer.library.SaveSuperOp.add_decomposition "qiskit.providers.aer.library.SaveSuperOp.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SaveSuperOp.assemble#qiskit.providers.aer.library.SaveSuperOp.assemble "qiskit.providers.aer.library.SaveSuperOp.assemble")                                             | Return the QasmQobjInstruction for the intructions.                      |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveSuperOp.broadcast_arguments#qiskit.providers.aer.library.SaveSuperOp.broadcast_arguments "qiskit.providers.aer.library.SaveSuperOp.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SaveSuperOp.c_if#qiskit.providers.aer.library.SaveSuperOp.c_if "qiskit.providers.aer.library.SaveSuperOp.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SaveSuperOp.copy#qiskit.providers.aer.library.SaveSuperOp.copy "qiskit.providers.aer.library.SaveSuperOp.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SaveSuperOp.inverse#qiskit.providers.aer.library.SaveSuperOp.inverse "qiskit.providers.aer.library.SaveSuperOp.inverse")                                                 | Special case.                                                            |
| [`is_parameterized`](qiskit.providers.aer.library.SaveSuperOp.is_parameterized#qiskit.providers.aer.library.SaveSuperOp.is_parameterized "qiskit.providers.aer.library.SaveSuperOp.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SaveSuperOp.mirror#qiskit.providers.aer.library.SaveSuperOp.mirror "qiskit.providers.aer.library.SaveSuperOp.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SaveSuperOp.qasm#qiskit.providers.aer.library.SaveSuperOp.qasm "qiskit.providers.aer.library.SaveSuperOp.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SaveSuperOp.repeat#qiskit.providers.aer.library.SaveSuperOp.repeat "qiskit.providers.aer.library.SaveSuperOp.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SaveSuperOp.reverse_ops#qiskit.providers.aer.library.SaveSuperOp.reverse_ops "qiskit.providers.aer.library.SaveSuperOp.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SaveSuperOp.soft_compare#qiskit.providers.aer.library.SaveSuperOp.soft_compare "qiskit.providers.aer.library.SaveSuperOp.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SaveSuperOp.validate_parameter#qiskit.providers.aer.library.SaveSuperOp.validate_parameter "qiskit.providers.aer.library.SaveSuperOp.validate_parameter")     | Instruction parameters has no validation or normalization.               |

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
