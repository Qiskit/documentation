# Snapshot

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

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the save instructions in [`qiskit.providers.aer.library`](aer_library#module-qiskit.providers.aer.library "qiskit.providers.aer.library") module.
</Admonition>

## Methods

|                                                                                                                                                                                                                                       |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.extensions.Snapshot.add_decomposition#qiskit.providers.aer.extensions.Snapshot.add_decomposition "qiskit.providers.aer.extensions.Snapshot.add_decomposition")                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.extensions.Snapshot.assemble#qiskit.providers.aer.extensions.Snapshot.assemble "qiskit.providers.aer.extensions.Snapshot.assemble")                                                                 | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](qiskit.providers.aer.extensions.Snapshot.broadcast_arguments#qiskit.providers.aer.extensions.Snapshot.broadcast_arguments "qiskit.providers.aer.extensions.Snapshot.broadcast_arguments")                     | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.extensions.Snapshot.c_if#qiskit.providers.aer.extensions.Snapshot.c_if "qiskit.providers.aer.extensions.Snapshot.c_if")                                                                                 | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.extensions.Snapshot.copy#qiskit.providers.aer.extensions.Snapshot.copy "qiskit.providers.aer.extensions.Snapshot.copy")                                                                                 | Copy of the instruction.                                                 |
| [`define_snapshot_register`](qiskit.providers.aer.extensions.Snapshot.define_snapshot_register#qiskit.providers.aer.extensions.Snapshot.define_snapshot_register "qiskit.providers.aer.extensions.Snapshot.define_snapshot_register") | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](qiskit.providers.aer.extensions.Snapshot.inverse#qiskit.providers.aer.extensions.Snapshot.inverse "qiskit.providers.aer.extensions.Snapshot.inverse")                                                                     | Special case.                                                            |
| [`is_parameterized`](qiskit.providers.aer.extensions.Snapshot.is_parameterized#qiskit.providers.aer.extensions.Snapshot.is_parameterized "qiskit.providers.aer.extensions.Snapshot.is_parameterized")                                 | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.extensions.Snapshot.mirror#qiskit.providers.aer.extensions.Snapshot.mirror "qiskit.providers.aer.extensions.Snapshot.mirror")                                                                         | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.extensions.Snapshot.qasm#qiskit.providers.aer.extensions.Snapshot.qasm "qiskit.providers.aer.extensions.Snapshot.qasm")                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.extensions.Snapshot.repeat#qiskit.providers.aer.extensions.Snapshot.repeat "qiskit.providers.aer.extensions.Snapshot.repeat")                                                                         | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.extensions.Snapshot.reverse_ops#qiskit.providers.aer.extensions.Snapshot.reverse_ops "qiskit.providers.aer.extensions.Snapshot.reverse_ops")                                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.extensions.Snapshot.soft_compare#qiskit.providers.aer.extensions.Snapshot.soft_compare "qiskit.providers.aer.extensions.Snapshot.soft_compare")                                                 | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.extensions.Snapshot.validate_parameter#qiskit.providers.aer.extensions.Snapshot.validate_parameter "qiskit.providers.aer.extensions.Snapshot.validate_parameter")                         | Instruction parameters has no validation or normalization.               |

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

Return snapshot label

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### snapshot\_type

Return snapshot type

<span id="undefined" />

### unit

Get the time unit of duration.
