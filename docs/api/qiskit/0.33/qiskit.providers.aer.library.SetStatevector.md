# SetStatevector

<span id="undefined" />

`SetStatevector(state)`

Bases: `qiskit.circuit.instruction.Instruction`

Set the statevector state of the simulator

Create new instruction to set the statevector state of the simulator.

**Parameters**

**state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – a statevector.

**Raises**

**ExtensionError** – if the input is not a valid state.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                                                                            |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.library.SetStatevector.add_decomposition#qiskit.providers.aer.library.SetStatevector.add_decomposition "qiskit.providers.aer.library.SetStatevector.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.library.SetStatevector.assemble#qiskit.providers.aer.library.SetStatevector.assemble "qiskit.providers.aer.library.SetStatevector.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.providers.aer.library.SetStatevector.broadcast_arguments#qiskit.providers.aer.library.SetStatevector.broadcast_arguments "qiskit.providers.aer.library.SetStatevector.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.library.SetStatevector.c_if#qiskit.providers.aer.library.SetStatevector.c_if "qiskit.providers.aer.library.SetStatevector.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.library.SetStatevector.copy#qiskit.providers.aer.library.SetStatevector.copy "qiskit.providers.aer.library.SetStatevector.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.providers.aer.library.SetStatevector.inverse#qiskit.providers.aer.library.SetStatevector.inverse "qiskit.providers.aer.library.SetStatevector.inverse")                                                 | Invert this instruction.                                                                                         |
| [`is_parameterized`](qiskit.providers.aer.library.SetStatevector.is_parameterized#qiskit.providers.aer.library.SetStatevector.is_parameterized "qiskit.providers.aer.library.SetStatevector.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.providers.aer.library.SetStatevector.mirror#qiskit.providers.aer.library.SetStatevector.mirror "qiskit.providers.aer.library.SetStatevector.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.providers.aer.library.SetStatevector.qasm#qiskit.providers.aer.library.SetStatevector.qasm "qiskit.providers.aer.library.SetStatevector.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.library.SetStatevector.repeat#qiskit.providers.aer.library.SetStatevector.repeat "qiskit.providers.aer.library.SetStatevector.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.library.SetStatevector.reverse_ops#qiskit.providers.aer.library.SetStatevector.reverse_ops "qiskit.providers.aer.library.SetStatevector.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.library.SetStatevector.soft_compare#qiskit.providers.aer.library.SetStatevector.soft_compare "qiskit.providers.aer.library.SetStatevector.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.library.SetStatevector.validate_parameter#qiskit.providers.aer.library.SetStatevector.validate_parameter "qiskit.providers.aer.library.SetStatevector.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
