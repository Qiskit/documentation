# SaveState

<span id="undefined" />

`SaveState(num_qubits, label=None, pershot=False, conditional=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveSingleData`

Save simulator state

The format of the saved state depends on the simulation method used.

Create new instruction to save the simualtor state.

The format of the saved state depends on the simulation method used.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits of the
*   **label** (*str or None*) – Optional, the key for retrieving saved data from results. If None the key will be the state type of the simulator.
*   **pershot** (*bool*) – if True save a list of states for each shot of the simulation rather than a single state \[Default: False].
*   **conditional** (*bool*) – if True save data conditional on the current classical register values \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                             |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SaveState.add_decomposition#qiskit.providers.aer.library.SaveState.add_decomposition "qiskit.providers.aer.library.SaveState.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SaveState.assemble#qiskit.providers.aer.library.SaveState.assemble "qiskit.providers.aer.library.SaveState.assemble")                                             | Return the QasmQobjInstruction for the intructions.                      |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveState.broadcast_arguments#qiskit.providers.aer.library.SaveState.broadcast_arguments "qiskit.providers.aer.library.SaveState.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SaveState.c_if#qiskit.providers.aer.library.SaveState.c_if "qiskit.providers.aer.library.SaveState.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SaveState.copy#qiskit.providers.aer.library.SaveState.copy "qiskit.providers.aer.library.SaveState.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SaveState.inverse#qiskit.providers.aer.library.SaveState.inverse "qiskit.providers.aer.library.SaveState.inverse")                                                 | Special case.                                                            |
| [`is_parameterized`](qiskit.providers.aer.library.SaveState.is_parameterized#qiskit.providers.aer.library.SaveState.is_parameterized "qiskit.providers.aer.library.SaveState.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SaveState.mirror#qiskit.providers.aer.library.SaveState.mirror "qiskit.providers.aer.library.SaveState.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SaveState.qasm#qiskit.providers.aer.library.SaveState.qasm "qiskit.providers.aer.library.SaveState.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SaveState.repeat#qiskit.providers.aer.library.SaveState.repeat "qiskit.providers.aer.library.SaveState.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SaveState.reverse_ops#qiskit.providers.aer.library.SaveState.reverse_ops "qiskit.providers.aer.library.SaveState.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SaveState.soft_compare#qiskit.providers.aer.library.SaveState.soft_compare "qiskit.providers.aer.library.SaveState.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SaveState.validate_parameter#qiskit.providers.aer.library.SaveState.validate_parameter "qiskit.providers.aer.library.SaveState.validate_parameter")     | Instruction parameters has no validation or normalization.               |

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
