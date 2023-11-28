# SaveStatevectorDict

<span id="undefined" />

`SaveStatevectorDict(num_qubits, label='statevector_dict', pershot=False, conditional=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveSingleData`

Save statevector as ket-form dictionary.

Create new instruction to save the simulator statevector as a dict.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of statevectors for each shot of the simulation rather than a single statevector \[Default: False].
*   **conditional** (*bool*) – if True save data conditional on the current classical register values \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                                           |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.library.SaveStatevectorDict.add_decomposition#qiskit.providers.aer.library.SaveStatevectorDict.add_decomposition "qiskit.providers.aer.library.SaveStatevectorDict.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.library.SaveStatevectorDict.assemble#qiskit.providers.aer.library.SaveStatevectorDict.assemble "qiskit.providers.aer.library.SaveStatevectorDict.assemble")                                             | Return the QasmQobjInstruction for the intructions.                                                              |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveStatevectorDict.broadcast_arguments#qiskit.providers.aer.library.SaveStatevectorDict.broadcast_arguments "qiskit.providers.aer.library.SaveStatevectorDict.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.library.SaveStatevectorDict.c_if#qiskit.providers.aer.library.SaveStatevectorDict.c_if "qiskit.providers.aer.library.SaveStatevectorDict.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.library.SaveStatevectorDict.copy#qiskit.providers.aer.library.SaveStatevectorDict.copy "qiskit.providers.aer.library.SaveStatevectorDict.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.providers.aer.library.SaveStatevectorDict.inverse#qiskit.providers.aer.library.SaveStatevectorDict.inverse "qiskit.providers.aer.library.SaveStatevectorDict.inverse")                                                 | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.providers.aer.library.SaveStatevectorDict.is_parameterized#qiskit.providers.aer.library.SaveStatevectorDict.is_parameterized "qiskit.providers.aer.library.SaveStatevectorDict.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.providers.aer.library.SaveStatevectorDict.qasm#qiskit.providers.aer.library.SaveStatevectorDict.qasm "qiskit.providers.aer.library.SaveStatevectorDict.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.library.SaveStatevectorDict.repeat#qiskit.providers.aer.library.SaveStatevectorDict.repeat "qiskit.providers.aer.library.SaveStatevectorDict.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.library.SaveStatevectorDict.reverse_ops#qiskit.providers.aer.library.SaveStatevectorDict.reverse_ops "qiskit.providers.aer.library.SaveStatevectorDict.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.library.SaveStatevectorDict.soft_compare#qiskit.providers.aer.library.SaveStatevectorDict.soft_compare "qiskit.providers.aer.library.SaveStatevectorDict.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.library.SaveStatevectorDict.validate_parameter#qiskit.providers.aer.library.SaveStatevectorDict.validate_parameter "qiskit.providers.aer.library.SaveStatevectorDict.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
