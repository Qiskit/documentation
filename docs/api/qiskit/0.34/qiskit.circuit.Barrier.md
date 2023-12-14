# Barrier



`Barrier(num_qubits)`

Bases: `qiskit.circuit.instruction.Instruction`

Barrier instruction.

Create new barrier instruction.

## Methods

|                                                                                                                                                             |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.Barrier.add_decomposition#qiskit.circuit.Barrier.add_decomposition "qiskit.circuit.Barrier.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.Barrier.assemble#qiskit.circuit.Barrier.assemble "qiskit.circuit.Barrier.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.Barrier.broadcast_arguments#qiskit.circuit.Barrier.broadcast_arguments "qiskit.circuit.Barrier.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.circuit.Barrier.c_if#qiskit.circuit.Barrier.c_if "qiskit.circuit.Barrier.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.circuit.Barrier.copy#qiskit.circuit.Barrier.copy "qiskit.circuit.Barrier.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.Barrier.inverse#qiskit.circuit.Barrier.inverse "qiskit.circuit.Barrier.inverse")                                                 | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.circuit.Barrier.is_parameterized#qiskit.circuit.Barrier.is_parameterized "qiskit.circuit.Barrier.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.circuit.Barrier.qasm#qiskit.circuit.Barrier.qasm "qiskit.circuit.Barrier.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.Barrier.repeat#qiskit.circuit.Barrier.repeat "qiskit.circuit.Barrier.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.Barrier.reverse_ops#qiskit.circuit.Barrier.reverse_ops "qiskit.circuit.Barrier.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.Barrier.soft_compare#qiskit.circuit.Barrier.soft_compare "qiskit.circuit.Barrier.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.circuit.Barrier.validate_parameter#qiskit.circuit.Barrier.validate_parameter "qiskit.circuit.Barrier.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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
