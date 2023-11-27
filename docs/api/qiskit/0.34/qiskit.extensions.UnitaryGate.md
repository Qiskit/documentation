# UnitaryGate[¶](#unitarygate "Permalink to this headline")

<span id="undefined" />

`UnitaryGate(data, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Class for representing unitary gates

Create a gate from a numeric unitary matrix.

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – unitary operator.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

|                                                                                                                                                                                  |                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.extensions.UnitaryGate.add_decomposition#qiskit.extensions.UnitaryGate.add_decomposition "qiskit.extensions.UnitaryGate.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                                     |
| [`adjoint`](qiskit.extensions.UnitaryGate.adjoint#qiskit.extensions.UnitaryGate.adjoint "qiskit.extensions.UnitaryGate.adjoint")                                                 | Return the adjoint of the unitary.                                                                                           |
| [`assemble`](qiskit.extensions.UnitaryGate.assemble#qiskit.extensions.UnitaryGate.assemble "qiskit.extensions.UnitaryGate.assemble")                                             | Assemble a QasmQobjInstruction                                                                                               |
| [`broadcast_arguments`](qiskit.extensions.UnitaryGate.broadcast_arguments#qiskit.extensions.UnitaryGate.broadcast_arguments "qiskit.extensions.UnitaryGate.broadcast_arguments") | Validation and handling of the arguments and its relationship.                                                               |
| [`c_if`](qiskit.extensions.UnitaryGate.c_if#qiskit.extensions.UnitaryGate.c_if "qiskit.extensions.UnitaryGate.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.             |
| [`conjugate`](qiskit.extensions.UnitaryGate.conjugate#qiskit.extensions.UnitaryGate.conjugate "qiskit.extensions.UnitaryGate.conjugate")                                         | Return the conjugate of the unitary.                                                                                         |
| [`control`](qiskit.extensions.UnitaryGate.control#qiskit.extensions.UnitaryGate.control "qiskit.extensions.UnitaryGate.control")                                                 | Return controlled version of gate                                                                                            |
| [`copy`](qiskit.extensions.UnitaryGate.copy#qiskit.extensions.UnitaryGate.copy "qiskit.extensions.UnitaryGate.copy")                                                             | Copy of the instruction.                                                                                                     |
| [`inverse`](qiskit.extensions.UnitaryGate.inverse#qiskit.extensions.UnitaryGate.inverse "qiskit.extensions.UnitaryGate.inverse")                                                 | Return the adjoint of the unitary.                                                                                           |
| [`is_parameterized`](qiskit.extensions.UnitaryGate.is_parameterized#qiskit.extensions.UnitaryGate.is_parameterized "qiskit.extensions.UnitaryGate.is_parameterized")             | Return True .IFF.                                                                                                            |
| [`power`](qiskit.extensions.UnitaryGate.power#qiskit.extensions.UnitaryGate.power "qiskit.extensions.UnitaryGate.power")                                                         | Creates a unitary gate as gate^exponent.                                                                                     |
| [`qasm`](qiskit.extensions.UnitaryGate.qasm#qiskit.extensions.UnitaryGate.qasm "qiskit.extensions.UnitaryGate.qasm")                                                             | The qasm for a custom unitary gate This is achieved by adding a custom gate that corresponds to the definition of this gate. |
| [`repeat`](qiskit.extensions.UnitaryGate.repeat#qiskit.extensions.UnitaryGate.repeat "qiskit.extensions.UnitaryGate.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                                 |
| [`reverse_ops`](qiskit.extensions.UnitaryGate.reverse_ops#qiskit.extensions.UnitaryGate.reverse_ops "qiskit.extensions.UnitaryGate.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                                          |
| [`soft_compare`](qiskit.extensions.UnitaryGate.soft_compare#qiskit.extensions.UnitaryGate.soft_compare "qiskit.extensions.UnitaryGate.soft_compare")                             | Soft comparison between gates.                                                                                               |
| [`to_matrix`](qiskit.extensions.UnitaryGate.to_matrix#qiskit.extensions.UnitaryGate.to_matrix "qiskit.extensions.UnitaryGate.to_matrix")                                         | Return a Numpy.array for the gate unitary matrix.                                                                            |
| [`transpose`](qiskit.extensions.UnitaryGate.transpose#qiskit.extensions.UnitaryGate.transpose "qiskit.extensions.UnitaryGate.transpose")                                         | Return the transpose of the unitary.                                                                                         |
| [`validate_parameter`](qiskit.extensions.UnitaryGate.validate_parameter#qiskit.extensions.UnitaryGate.validate_parameter "qiskit.extensions.UnitaryGate.validate_parameter")     | Unitary gate parameter has to be an ndarray.                                                                                 |

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
