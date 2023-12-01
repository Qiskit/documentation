# SetUnitary

<span id="undefined" />

`SetUnitary(state)`

Bases: `qiskit.circuit.instruction.Instruction`

Set unitary state of the simulator

Create new instruction to set the unitary simulator state.

**Parameters**

**state** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – A unitary matrix.

**Raises**

**ExtensionError** – if the input matrix is not state.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.library.SetUnitary.add_decomposition#qiskit.providers.aer.library.SetUnitary.add_decomposition "qiskit.providers.aer.library.SetUnitary.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.library.SetUnitary.assemble#qiskit.providers.aer.library.SetUnitary.assemble "qiskit.providers.aer.library.SetUnitary.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.providers.aer.library.SetUnitary.broadcast_arguments#qiskit.providers.aer.library.SetUnitary.broadcast_arguments "qiskit.providers.aer.library.SetUnitary.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.library.SetUnitary.c_if#qiskit.providers.aer.library.SetUnitary.c_if "qiskit.providers.aer.library.SetUnitary.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.library.SetUnitary.copy#qiskit.providers.aer.library.SetUnitary.copy "qiskit.providers.aer.library.SetUnitary.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.providers.aer.library.SetUnitary.inverse#qiskit.providers.aer.library.SetUnitary.inverse "qiskit.providers.aer.library.SetUnitary.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.providers.aer.library.SetUnitary.is_parameterized#qiskit.providers.aer.library.SetUnitary.is_parameterized "qiskit.providers.aer.library.SetUnitary.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.providers.aer.library.SetUnitary.mirror#qiskit.providers.aer.library.SetUnitary.mirror "qiskit.providers.aer.library.SetUnitary.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.providers.aer.library.SetUnitary.qasm#qiskit.providers.aer.library.SetUnitary.qasm "qiskit.providers.aer.library.SetUnitary.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.library.SetUnitary.repeat#qiskit.providers.aer.library.SetUnitary.repeat "qiskit.providers.aer.library.SetUnitary.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.library.SetUnitary.reverse_ops#qiskit.providers.aer.library.SetUnitary.reverse_ops "qiskit.providers.aer.library.SetUnitary.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.library.SetUnitary.soft_compare#qiskit.providers.aer.library.SetUnitary.soft_compare "qiskit.providers.aer.library.SetUnitary.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.library.SetUnitary.validate_parameter#qiskit.providers.aer.library.SetUnitary.validate_parameter "qiskit.providers.aer.library.SetUnitary.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
