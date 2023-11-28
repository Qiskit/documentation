# SaveUnitary[¶](#saveunitary "Permalink to this headline")

<span id="undefined" />

`SaveUnitary(num_qubits, label='unitary', pershot=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveSingleData`

Save Unitary

Create new instruction to save the unitary simulator state.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits of the
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of unitaries for each shot of the simulation rather than a single statevector \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                   |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.library.SaveUnitary.add_decomposition#qiskit.providers.aer.library.SaveUnitary.add_decomposition "qiskit.providers.aer.library.SaveUnitary.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.library.SaveUnitary.assemble#qiskit.providers.aer.library.SaveUnitary.assemble "qiskit.providers.aer.library.SaveUnitary.assemble")                                             | Return the QasmQobjInstruction for the intructions.                                                              |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveUnitary.broadcast_arguments#qiskit.providers.aer.library.SaveUnitary.broadcast_arguments "qiskit.providers.aer.library.SaveUnitary.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.library.SaveUnitary.c_if#qiskit.providers.aer.library.SaveUnitary.c_if "qiskit.providers.aer.library.SaveUnitary.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.library.SaveUnitary.copy#qiskit.providers.aer.library.SaveUnitary.copy "qiskit.providers.aer.library.SaveUnitary.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.providers.aer.library.SaveUnitary.inverse#qiskit.providers.aer.library.SaveUnitary.inverse "qiskit.providers.aer.library.SaveUnitary.inverse")                                                 | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.providers.aer.library.SaveUnitary.is_parameterized#qiskit.providers.aer.library.SaveUnitary.is_parameterized "qiskit.providers.aer.library.SaveUnitary.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.providers.aer.library.SaveUnitary.qasm#qiskit.providers.aer.library.SaveUnitary.qasm "qiskit.providers.aer.library.SaveUnitary.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.library.SaveUnitary.repeat#qiskit.providers.aer.library.SaveUnitary.repeat "qiskit.providers.aer.library.SaveUnitary.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.library.SaveUnitary.reverse_ops#qiskit.providers.aer.library.SaveUnitary.reverse_ops "qiskit.providers.aer.library.SaveUnitary.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.library.SaveUnitary.soft_compare#qiskit.providers.aer.library.SaveUnitary.soft_compare "qiskit.providers.aer.library.SaveUnitary.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.library.SaveUnitary.validate_parameter#qiskit.providers.aer.library.SaveUnitary.validate_parameter "qiskit.providers.aer.library.SaveUnitary.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
