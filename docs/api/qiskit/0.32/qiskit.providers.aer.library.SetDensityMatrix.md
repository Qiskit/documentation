# SetDensityMatrix

<span id="undefined" />

`SetDensityMatrix(state)`

Bases: `qiskit.circuit.instruction.Instruction`

Set density matrix state of the simulator

Create new instruction to set the density matrix state of the simulator.

**Parameters**

**state** ([*DensityMatrix*](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a density matrix.

**Raises**

**ExtensionError** – if the input density matrix is not valid.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                                  |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SetDensityMatrix.add_decomposition#qiskit.providers.aer.library.SetDensityMatrix.add_decomposition "qiskit.providers.aer.library.SetDensityMatrix.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SetDensityMatrix.assemble#qiskit.providers.aer.library.SetDensityMatrix.assemble "qiskit.providers.aer.library.SetDensityMatrix.assemble")                                             | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](qiskit.providers.aer.library.SetDensityMatrix.broadcast_arguments#qiskit.providers.aer.library.SetDensityMatrix.broadcast_arguments "qiskit.providers.aer.library.SetDensityMatrix.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SetDensityMatrix.c_if#qiskit.providers.aer.library.SetDensityMatrix.c_if "qiskit.providers.aer.library.SetDensityMatrix.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SetDensityMatrix.copy#qiskit.providers.aer.library.SetDensityMatrix.copy "qiskit.providers.aer.library.SetDensityMatrix.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SetDensityMatrix.inverse#qiskit.providers.aer.library.SetDensityMatrix.inverse "qiskit.providers.aer.library.SetDensityMatrix.inverse")                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](qiskit.providers.aer.library.SetDensityMatrix.is_parameterized#qiskit.providers.aer.library.SetDensityMatrix.is_parameterized "qiskit.providers.aer.library.SetDensityMatrix.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SetDensityMatrix.mirror#qiskit.providers.aer.library.SetDensityMatrix.mirror "qiskit.providers.aer.library.SetDensityMatrix.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SetDensityMatrix.qasm#qiskit.providers.aer.library.SetDensityMatrix.qasm "qiskit.providers.aer.library.SetDensityMatrix.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SetDensityMatrix.repeat#qiskit.providers.aer.library.SetDensityMatrix.repeat "qiskit.providers.aer.library.SetDensityMatrix.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SetDensityMatrix.reverse_ops#qiskit.providers.aer.library.SetDensityMatrix.reverse_ops "qiskit.providers.aer.library.SetDensityMatrix.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SetDensityMatrix.soft_compare#qiskit.providers.aer.library.SetDensityMatrix.soft_compare "qiskit.providers.aer.library.SetDensityMatrix.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SetDensityMatrix.validate_parameter#qiskit.providers.aer.library.SetDensityMatrix.validate_parameter "qiskit.providers.aer.library.SetDensityMatrix.validate_parameter")     | Instruction parameters has no validation or normalization.               |

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
