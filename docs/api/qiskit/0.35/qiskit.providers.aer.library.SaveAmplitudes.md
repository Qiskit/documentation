# SaveAmplitudes



`SaveAmplitudes(num_qubits, params, label='amplitudes', pershot=False, conditional=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveSingleData`

Save complex statevector amplitudes.

Instruction to save complex statevector amplitudes.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the snapshot type.
*   **params** (*list*) – list of entries to vale.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of amplitudes vectors for each shot of the simulation rather than the a single amplitude vector \[Default: False].
*   **conditional** (*bool*) – if True save the amplitudes vector conditional on the current classical register values \[Default: False].

**Raises**

**ExtensionError** – if params is invalid for the specified number of qubits.

## Methods

|                                                                                                                                                                                                                            |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.library.SaveAmplitudes.add_decomposition#qiskit.providers.aer.library.SaveAmplitudes.add_decomposition "qiskit.providers.aer.library.SaveAmplitudes.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.library.SaveAmplitudes.assemble#qiskit.providers.aer.library.SaveAmplitudes.assemble "qiskit.providers.aer.library.SaveAmplitudes.assemble")                                             | Return the QasmQobjInstruction for the intructions.                                                              |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveAmplitudes.broadcast_arguments#qiskit.providers.aer.library.SaveAmplitudes.broadcast_arguments "qiskit.providers.aer.library.SaveAmplitudes.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.library.SaveAmplitudes.c_if#qiskit.providers.aer.library.SaveAmplitudes.c_if "qiskit.providers.aer.library.SaveAmplitudes.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.library.SaveAmplitudes.copy#qiskit.providers.aer.library.SaveAmplitudes.copy "qiskit.providers.aer.library.SaveAmplitudes.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.providers.aer.library.SaveAmplitudes.inverse#qiskit.providers.aer.library.SaveAmplitudes.inverse "qiskit.providers.aer.library.SaveAmplitudes.inverse")                                                 | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.providers.aer.library.SaveAmplitudes.is_parameterized#qiskit.providers.aer.library.SaveAmplitudes.is_parameterized "qiskit.providers.aer.library.SaveAmplitudes.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.providers.aer.library.SaveAmplitudes.qasm#qiskit.providers.aer.library.SaveAmplitudes.qasm "qiskit.providers.aer.library.SaveAmplitudes.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.library.SaveAmplitudes.repeat#qiskit.providers.aer.library.SaveAmplitudes.repeat "qiskit.providers.aer.library.SaveAmplitudes.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.library.SaveAmplitudes.reverse_ops#qiskit.providers.aer.library.SaveAmplitudes.reverse_ops "qiskit.providers.aer.library.SaveAmplitudes.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.library.SaveAmplitudes.soft_compare#qiskit.providers.aer.library.SaveAmplitudes.soft_compare "qiskit.providers.aer.library.SaveAmplitudes.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.library.SaveAmplitudes.validate_parameter#qiskit.providers.aer.library.SaveAmplitudes.validate_parameter "qiskit.providers.aer.library.SaveAmplitudes.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

## Attributes



### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]



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



### name

Return the name.



### num\_clbits

Return the number of clbits.



### num\_qubits

Return the number of qubits.



### params

return instruction params.



### unit

Get the time unit of duration.
