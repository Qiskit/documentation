# Measure

<span id="undefined" />

`Measure`

Bases: `qiskit.circuit.instruction.Instruction`

Quantum measurement in the computational basis.

Create new measurement instruction.

## Methods

|                                                                                                                                                             |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.circuit.Measure.add_decomposition#qiskit.circuit.Measure.add_decomposition "qiskit.circuit.Measure.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.circuit.Measure.assemble#qiskit.circuit.Measure.assemble "qiskit.circuit.Measure.assemble")                                             | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](qiskit.circuit.Measure.broadcast_arguments#qiskit.circuit.Measure.broadcast_arguments "qiskit.circuit.Measure.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.circuit.Measure.c_if#qiskit.circuit.Measure.c_if "qiskit.circuit.Measure.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.circuit.Measure.copy#qiskit.circuit.Measure.copy "qiskit.circuit.Measure.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.circuit.Measure.inverse#qiskit.circuit.Measure.inverse "qiskit.circuit.Measure.inverse")                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](qiskit.circuit.Measure.is_parameterized#qiskit.circuit.Measure.is_parameterized "qiskit.circuit.Measure.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.circuit.Measure.mirror#qiskit.circuit.Measure.mirror "qiskit.circuit.Measure.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.circuit.Measure.qasm#qiskit.circuit.Measure.qasm "qiskit.circuit.Measure.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.circuit.Measure.repeat#qiskit.circuit.Measure.repeat "qiskit.circuit.Measure.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.circuit.Measure.reverse_ops#qiskit.circuit.Measure.reverse_ops "qiskit.circuit.Measure.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.circuit.Measure.soft_compare#qiskit.circuit.Measure.soft_compare "qiskit.circuit.Measure.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.circuit.Measure.validate_parameter#qiskit.circuit.Measure.validate_parameter "qiskit.circuit.Measure.validate_parameter")     | Instruction parameters has no validation or normalization.               |

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
