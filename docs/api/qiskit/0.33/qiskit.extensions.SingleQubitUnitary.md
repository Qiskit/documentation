# SingleQubitUnitary

<span id="undefined" />

`SingleQubitUnitary(unitary_matrix, mode='ZYZ', up_to_diagonal=False)`

Bases: `qiskit.circuit.gate.Gate`

u = 2\*2 unitary (given as a (complex) numpy.ndarray)

mode - determines the used decomposition by providing the rotation axes

**up\_to\_diagonal - the single-qubit unitary is decomposed up to a diagonal matrix,**

i.e. a unitary u’ is implemented such that there exists a 2\*2 diagonal gate d with u = d.dot(u’).

Create a new single qubit gate based on the unitary `u`.

## Methods

|                                                                                                                                                                                                       |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.extensions.SingleQubitUnitary.add_decomposition#qiskit.extensions.SingleQubitUnitary.add_decomposition "qiskit.extensions.SingleQubitUnitary.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.extensions.SingleQubitUnitary.assemble#qiskit.extensions.SingleQubitUnitary.assemble "qiskit.extensions.SingleQubitUnitary.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.extensions.SingleQubitUnitary.broadcast_arguments#qiskit.extensions.SingleQubitUnitary.broadcast_arguments "qiskit.extensions.SingleQubitUnitary.broadcast_arguments") | Validation and handling of the arguments and its relationship.                                                   |
| [`c_if`](qiskit.extensions.SingleQubitUnitary.c_if#qiskit.extensions.SingleQubitUnitary.c_if "qiskit.extensions.SingleQubitUnitary.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`control`](qiskit.extensions.SingleQubitUnitary.control#qiskit.extensions.SingleQubitUnitary.control "qiskit.extensions.SingleQubitUnitary.control")                                                 | Return controlled version of gate.                                                                               |
| [`copy`](qiskit.extensions.SingleQubitUnitary.copy#qiskit.extensions.SingleQubitUnitary.copy "qiskit.extensions.SingleQubitUnitary.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.extensions.SingleQubitUnitary.inverse#qiskit.extensions.SingleQubitUnitary.inverse "qiskit.extensions.SingleQubitUnitary.inverse")                                                 | Return the inverse.                                                                                              |
| [`is_parameterized`](qiskit.extensions.SingleQubitUnitary.is_parameterized#qiskit.extensions.SingleQubitUnitary.is_parameterized "qiskit.extensions.SingleQubitUnitary.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.extensions.SingleQubitUnitary.mirror#qiskit.extensions.SingleQubitUnitary.mirror "qiskit.extensions.SingleQubitUnitary.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`power`](qiskit.extensions.SingleQubitUnitary.power#qiskit.extensions.SingleQubitUnitary.power "qiskit.extensions.SingleQubitUnitary.power")                                                         | Creates a unitary gate as gate^exponent.                                                                         |
| [`qasm`](qiskit.extensions.SingleQubitUnitary.qasm#qiskit.extensions.SingleQubitUnitary.qasm "qiskit.extensions.SingleQubitUnitary.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.extensions.SingleQubitUnitary.repeat#qiskit.extensions.SingleQubitUnitary.repeat "qiskit.extensions.SingleQubitUnitary.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.extensions.SingleQubitUnitary.reverse_ops#qiskit.extensions.SingleQubitUnitary.reverse_ops "qiskit.extensions.SingleQubitUnitary.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.extensions.SingleQubitUnitary.soft_compare#qiskit.extensions.SingleQubitUnitary.soft_compare "qiskit.extensions.SingleQubitUnitary.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`to_matrix`](qiskit.extensions.SingleQubitUnitary.to_matrix#qiskit.extensions.SingleQubitUnitary.to_matrix "qiskit.extensions.SingleQubitUnitary.to_matrix")                                         | Return a Numpy.array for the gate unitary matrix.                                                                |
| [`validate_parameter`](qiskit.extensions.SingleQubitUnitary.validate_parameter#qiskit.extensions.SingleQubitUnitary.validate_parameter "qiskit.extensions.SingleQubitUnitary.validate_parameter")     | Single-qubit unitary gate parameter has to be an ndarray.                                                        |

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

### diag

Returns the diagonal gate D up to which the single-qubit unitary u is implemented.

I.e. u=D.u’, where u’ is the unitary implemented by the found circuit.

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
