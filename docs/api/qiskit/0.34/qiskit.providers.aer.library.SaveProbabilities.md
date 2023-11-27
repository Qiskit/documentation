# SaveProbabilities[¶](#saveprobabilities "Permalink to this headline")

<span id="undefined" />

`SaveProbabilities(num_qubits, label='probabilities', unnormalized=False, pershot=False, conditional=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveAverageData`

Save measurement outcome probabilities vector.

Instruction to save measurement probabilities vector.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the snapshot type.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated probabilities over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of probabilities for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the probabilities data conditional on the current classical register values \[Default: False].

## Methods

|                                                                                                                                                                                                                                     |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.library.SaveProbabilities.add_decomposition#qiskit.providers.aer.library.SaveProbabilities.add_decomposition "qiskit.providers.aer.library.SaveProbabilities.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.library.SaveProbabilities.assemble#qiskit.providers.aer.library.SaveProbabilities.assemble "qiskit.providers.aer.library.SaveProbabilities.assemble")                                             | Return the QasmQobjInstruction for the intructions.                                                              |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveProbabilities.broadcast_arguments#qiskit.providers.aer.library.SaveProbabilities.broadcast_arguments "qiskit.providers.aer.library.SaveProbabilities.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.library.SaveProbabilities.c_if#qiskit.providers.aer.library.SaveProbabilities.c_if "qiskit.providers.aer.library.SaveProbabilities.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.library.SaveProbabilities.copy#qiskit.providers.aer.library.SaveProbabilities.copy "qiskit.providers.aer.library.SaveProbabilities.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.providers.aer.library.SaveProbabilities.inverse#qiskit.providers.aer.library.SaveProbabilities.inverse "qiskit.providers.aer.library.SaveProbabilities.inverse")                                                 | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.providers.aer.library.SaveProbabilities.is_parameterized#qiskit.providers.aer.library.SaveProbabilities.is_parameterized "qiskit.providers.aer.library.SaveProbabilities.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.providers.aer.library.SaveProbabilities.qasm#qiskit.providers.aer.library.SaveProbabilities.qasm "qiskit.providers.aer.library.SaveProbabilities.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.library.SaveProbabilities.repeat#qiskit.providers.aer.library.SaveProbabilities.repeat "qiskit.providers.aer.library.SaveProbabilities.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.library.SaveProbabilities.reverse_ops#qiskit.providers.aer.library.SaveProbabilities.reverse_ops "qiskit.providers.aer.library.SaveProbabilities.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.library.SaveProbabilities.soft_compare#qiskit.providers.aer.library.SaveProbabilities.soft_compare "qiskit.providers.aer.library.SaveProbabilities.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.library.SaveProbabilities.validate_parameter#qiskit.providers.aer.library.SaveProbabilities.validate_parameter "qiskit.providers.aer.library.SaveProbabilities.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
