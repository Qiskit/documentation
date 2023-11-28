# SaveMatrixProductState

<span id="undefined" />

`SaveMatrixProductState(num_qubits, label='matrix_product_state', pershot=False, conditional=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveSingleData`

Save matrix product state instruction

Create new instruction to save the matrix product state.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save the mps for each shot of the simulation \[Default: False].
*   **conditional** (*bool*) – if True save data conditional on the current classical register values \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                                                    |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SaveMatrixProductState.add_decomposition#qiskit.providers.aer.library.SaveMatrixProductState.add_decomposition "qiskit.providers.aer.library.SaveMatrixProductState.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SaveMatrixProductState.assemble#qiskit.providers.aer.library.SaveMatrixProductState.assemble "qiskit.providers.aer.library.SaveMatrixProductState.assemble")                                             | Return the QasmQobjInstruction for the intructions.                      |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveMatrixProductState.broadcast_arguments#qiskit.providers.aer.library.SaveMatrixProductState.broadcast_arguments "qiskit.providers.aer.library.SaveMatrixProductState.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SaveMatrixProductState.c_if#qiskit.providers.aer.library.SaveMatrixProductState.c_if "qiskit.providers.aer.library.SaveMatrixProductState.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SaveMatrixProductState.copy#qiskit.providers.aer.library.SaveMatrixProductState.copy "qiskit.providers.aer.library.SaveMatrixProductState.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SaveMatrixProductState.inverse#qiskit.providers.aer.library.SaveMatrixProductState.inverse "qiskit.providers.aer.library.SaveMatrixProductState.inverse")                                                 | Special case.                                                            |
| [`is_parameterized`](qiskit.providers.aer.library.SaveMatrixProductState.is_parameterized#qiskit.providers.aer.library.SaveMatrixProductState.is_parameterized "qiskit.providers.aer.library.SaveMatrixProductState.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SaveMatrixProductState.mirror#qiskit.providers.aer.library.SaveMatrixProductState.mirror "qiskit.providers.aer.library.SaveMatrixProductState.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SaveMatrixProductState.qasm#qiskit.providers.aer.library.SaveMatrixProductState.qasm "qiskit.providers.aer.library.SaveMatrixProductState.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SaveMatrixProductState.repeat#qiskit.providers.aer.library.SaveMatrixProductState.repeat "qiskit.providers.aer.library.SaveMatrixProductState.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SaveMatrixProductState.reverse_ops#qiskit.providers.aer.library.SaveMatrixProductState.reverse_ops "qiskit.providers.aer.library.SaveMatrixProductState.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SaveMatrixProductState.soft_compare#qiskit.providers.aer.library.SaveMatrixProductState.soft_compare "qiskit.providers.aer.library.SaveMatrixProductState.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SaveMatrixProductState.validate_parameter#qiskit.providers.aer.library.SaveMatrixProductState.validate_parameter "qiskit.providers.aer.library.SaveMatrixProductState.validate_parameter")     | Instruction parameters has no validation or normalization.               |

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
