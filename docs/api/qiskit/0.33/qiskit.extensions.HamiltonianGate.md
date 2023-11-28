# HamiltonianGate

<span id="undefined" />

`HamiltonianGate(data, time, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Class for representing evolution by a Hermitian Hamiltonian operator as a gate. This gate resolves to a UnitaryGate U(t) = exp(-1j \* t \* H), which can be decomposed into basis gates if it is 2 qubits or less, or simulated directly in Aer for more qubits.

Create a gate from a hamiltonian operator and evolution time parameter t

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a hermitian operator.
*   **time** (*float*) – time evolution parameter.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

|                                                                                                                                                                                              |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.extensions.HamiltonianGate.add_decomposition#qiskit.extensions.HamiltonianGate.add_decomposition "qiskit.extensions.HamiltonianGate.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`adjoint`](qiskit.extensions.HamiltonianGate.adjoint#qiskit.extensions.HamiltonianGate.adjoint "qiskit.extensions.HamiltonianGate.adjoint")                                                 | Return the adjoint of the unitary.                                                                               |
| [`assemble`](qiskit.extensions.HamiltonianGate.assemble#qiskit.extensions.HamiltonianGate.assemble "qiskit.extensions.HamiltonianGate.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.extensions.HamiltonianGate.broadcast_arguments#qiskit.extensions.HamiltonianGate.broadcast_arguments "qiskit.extensions.HamiltonianGate.broadcast_arguments") | Validation and handling of the arguments and its relationship.                                                   |
| [`c_if`](qiskit.extensions.HamiltonianGate.c_if#qiskit.extensions.HamiltonianGate.c_if "qiskit.extensions.HamiltonianGate.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`conjugate`](qiskit.extensions.HamiltonianGate.conjugate#qiskit.extensions.HamiltonianGate.conjugate "qiskit.extensions.HamiltonianGate.conjugate")                                         | Return the conjugate of the Hamiltonian.                                                                         |
| [`control`](qiskit.extensions.HamiltonianGate.control#qiskit.extensions.HamiltonianGate.control "qiskit.extensions.HamiltonianGate.control")                                                 | Return controlled version of gate.                                                                               |
| [`copy`](qiskit.extensions.HamiltonianGate.copy#qiskit.extensions.HamiltonianGate.copy "qiskit.extensions.HamiltonianGate.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.extensions.HamiltonianGate.inverse#qiskit.extensions.HamiltonianGate.inverse "qiskit.extensions.HamiltonianGate.inverse")                                                 | Return the adjoint of the unitary.                                                                               |
| [`is_parameterized`](qiskit.extensions.HamiltonianGate.is_parameterized#qiskit.extensions.HamiltonianGate.is_parameterized "qiskit.extensions.HamiltonianGate.is_parameterized")             | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.extensions.HamiltonianGate.mirror#qiskit.extensions.HamiltonianGate.mirror "qiskit.extensions.HamiltonianGate.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`power`](qiskit.extensions.HamiltonianGate.power#qiskit.extensions.HamiltonianGate.power "qiskit.extensions.HamiltonianGate.power")                                                         | Creates a unitary gate as gate^exponent.                                                                         |
| [`qasm`](qiskit.extensions.HamiltonianGate.qasm#qiskit.extensions.HamiltonianGate.qasm "qiskit.extensions.HamiltonianGate.qasm")                                                             | Raise an error, as QASM is not defined for the HamiltonianGate.                                                  |
| [`repeat`](qiskit.extensions.HamiltonianGate.repeat#qiskit.extensions.HamiltonianGate.repeat "qiskit.extensions.HamiltonianGate.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.extensions.HamiltonianGate.reverse_ops#qiskit.extensions.HamiltonianGate.reverse_ops "qiskit.extensions.HamiltonianGate.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.extensions.HamiltonianGate.soft_compare#qiskit.extensions.HamiltonianGate.soft_compare "qiskit.extensions.HamiltonianGate.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`to_matrix`](qiskit.extensions.HamiltonianGate.to_matrix#qiskit.extensions.HamiltonianGate.to_matrix "qiskit.extensions.HamiltonianGate.to_matrix")                                         | Return a Numpy.array for the gate unitary matrix.                                                                |
| [`transpose`](qiskit.extensions.HamiltonianGate.transpose#qiskit.extensions.HamiltonianGate.transpose "qiskit.extensions.HamiltonianGate.transpose")                                         | Return the transpose of the Hamiltonian.                                                                         |
| [`validate_parameter`](qiskit.extensions.HamiltonianGate.validate_parameter#qiskit.extensions.HamiltonianGate.validate_parameter "qiskit.extensions.HamiltonianGate.validate_parameter")     | Hamiltonian parameter has to be an ndarray, operator or float.                                                   |

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
