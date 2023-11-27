# Snapshot[¶](#snapshot "Permalink to this headline")

<span id="undefined" />

`Snapshot(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)`

Bases: `qiskit.circuit.instruction.Instruction`

Simulator snapshot instruction.

Create new snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label for result data.
*   **snapshot\_type** (*str*) – the type of the snapshot.
*   **num\_qubits** (*int*) – the number of qubits for the snapshot type \[Default: 0].
*   **num\_clbits** (*int*) – the number of classical bits for the snapshot type \[Default: 0].
*   **params** (*list or None*) – the parameters for snapshot\_type \[Default: None].

**Raises**

**ExtensionError** – if snapshot label is invalid.

## Methods

|                                                                                                                                                                         |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.extensions.Snapshot.add_decomposition#qiskit.extensions.Snapshot.add_decomposition "qiskit.extensions.Snapshot.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.extensions.Snapshot.assemble#qiskit.extensions.Snapshot.assemble "qiskit.extensions.Snapshot.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.extensions.Snapshot.broadcast_arguments#qiskit.extensions.Snapshot.broadcast_arguments "qiskit.extensions.Snapshot.broadcast_arguments") | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.extensions.Snapshot.c_if#qiskit.extensions.Snapshot.c_if "qiskit.extensions.Snapshot.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.extensions.Snapshot.copy#qiskit.extensions.Snapshot.copy "qiskit.extensions.Snapshot.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.extensions.Snapshot.inverse#qiskit.extensions.Snapshot.inverse "qiskit.extensions.Snapshot.inverse")                                                 | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.extensions.Snapshot.is_parameterized#qiskit.extensions.Snapshot.is_parameterized "qiskit.extensions.Snapshot.is_parameterized")             | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.extensions.Snapshot.qasm#qiskit.extensions.Snapshot.qasm "qiskit.extensions.Snapshot.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.extensions.Snapshot.repeat#qiskit.extensions.Snapshot.repeat "qiskit.extensions.Snapshot.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.extensions.Snapshot.reverse_ops#qiskit.extensions.Snapshot.reverse_ops "qiskit.extensions.Snapshot.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.extensions.Snapshot.soft_compare#qiskit.extensions.Snapshot.soft_compare "qiskit.extensions.Snapshot.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.extensions.Snapshot.validate_parameter#qiskit.extensions.Snapshot.validate_parameter "qiskit.extensions.Snapshot.validate_parameter")     | Instruction parameters has no validation or normalization.                                                       |

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

Return snapshot label

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

### snapshot\_type

Return snapshot type

<span id="undefined" />

### unit

Get the time unit of duration.
