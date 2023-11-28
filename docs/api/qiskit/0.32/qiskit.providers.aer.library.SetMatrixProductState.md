# SetMatrixProductState

<span id="undefined" />

`SetMatrixProductState(state)`

Bases: `qiskit.circuit.instruction.Instruction`

Set the matrix product state of the simulator

Create new instruction to set the matrix product state of the simulator.

**Parameters**

**state** (*Tuple\[List\[Tuple\[np.array\[complex\_t]]]], List\[List\[float]]*) – A matrix\_product\_state.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit. The matrix\_product\_state consists of a pair of vectors. The first is a vector of pairs of matrices of complex numbers. The second is a vector of vectors of double.
</Admonition>

## Methods

|                                                                                                                                                                                                                                                 |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SetMatrixProductState.add_decomposition#qiskit.providers.aer.library.SetMatrixProductState.add_decomposition "qiskit.providers.aer.library.SetMatrixProductState.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SetMatrixProductState.assemble#qiskit.providers.aer.library.SetMatrixProductState.assemble "qiskit.providers.aer.library.SetMatrixProductState.assemble")                                             | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](qiskit.providers.aer.library.SetMatrixProductState.broadcast_arguments#qiskit.providers.aer.library.SetMatrixProductState.broadcast_arguments "qiskit.providers.aer.library.SetMatrixProductState.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SetMatrixProductState.c_if#qiskit.providers.aer.library.SetMatrixProductState.c_if "qiskit.providers.aer.library.SetMatrixProductState.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SetMatrixProductState.copy#qiskit.providers.aer.library.SetMatrixProductState.copy "qiskit.providers.aer.library.SetMatrixProductState.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SetMatrixProductState.inverse#qiskit.providers.aer.library.SetMatrixProductState.inverse "qiskit.providers.aer.library.SetMatrixProductState.inverse")                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](qiskit.providers.aer.library.SetMatrixProductState.is_parameterized#qiskit.providers.aer.library.SetMatrixProductState.is_parameterized "qiskit.providers.aer.library.SetMatrixProductState.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SetMatrixProductState.mirror#qiskit.providers.aer.library.SetMatrixProductState.mirror "qiskit.providers.aer.library.SetMatrixProductState.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SetMatrixProductState.qasm#qiskit.providers.aer.library.SetMatrixProductState.qasm "qiskit.providers.aer.library.SetMatrixProductState.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SetMatrixProductState.repeat#qiskit.providers.aer.library.SetMatrixProductState.repeat "qiskit.providers.aer.library.SetMatrixProductState.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SetMatrixProductState.reverse_ops#qiskit.providers.aer.library.SetMatrixProductState.reverse_ops "qiskit.providers.aer.library.SetMatrixProductState.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SetMatrixProductState.soft_compare#qiskit.providers.aer.library.SetMatrixProductState.soft_compare "qiskit.providers.aer.library.SetMatrixProductState.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SetMatrixProductState.validate_parameter#qiskit.providers.aer.library.SetMatrixProductState.validate_parameter "qiskit.providers.aer.library.SetMatrixProductState.validate_parameter")     | Instruction parameters has no validation or normalization.               |

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
