# SnapshotStabilizer

<span id="undefined" />

`SnapshotStabilizer(label, num_qubits=0)`

Bases: `qiskit.providers.aer.extensions.snapshot.Snapshot`

Snapshot instruction for stabilizer method of Qasm simulator.

Create a stabilizer state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the [`qiskit.providers.aer.library.SaveStabilizer`](qiskit.providers.aer.library.SaveStabilizer#qiskit.providers.aer.library.SaveStabilizer "qiskit.providers.aer.library.SaveStabilizer") instruction.
</Admonition>

## Methods

|                                                                                                                                                                                                                                                                     |                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition#qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition "qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition")                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.extensions.SnapshotStabilizer.assemble#qiskit.providers.aer.extensions.SnapshotStabilizer.assemble "qiskit.providers.aer.extensions.SnapshotStabilizer.assemble")                                                                 | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments#qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments")                     | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.extensions.SnapshotStabilizer.c_if#qiskit.providers.aer.extensions.SnapshotStabilizer.c_if "qiskit.providers.aer.extensions.SnapshotStabilizer.c_if")                                                                                 | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.extensions.SnapshotStabilizer.copy#qiskit.providers.aer.extensions.SnapshotStabilizer.copy "qiskit.providers.aer.extensions.SnapshotStabilizer.copy")                                                                                 | Copy of the instruction.                                                                                         |
| [`define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register#qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register") | Defines qubits to snapshot for all snapshot methods                                                              |
| [`inverse`](qiskit.providers.aer.extensions.SnapshotStabilizer.inverse#qiskit.providers.aer.extensions.SnapshotStabilizer.inverse "qiskit.providers.aer.extensions.SnapshotStabilizer.inverse")                                                                     | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized#qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized "qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized")                                 | Return True .IFF.                                                                                                |
| [`qasm`](qiskit.providers.aer.extensions.SnapshotStabilizer.qasm#qiskit.providers.aer.extensions.SnapshotStabilizer.qasm "qiskit.providers.aer.extensions.SnapshotStabilizer.qasm")                                                                                 | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.extensions.SnapshotStabilizer.repeat#qiskit.providers.aer.extensions.SnapshotStabilizer.repeat "qiskit.providers.aer.extensions.SnapshotStabilizer.repeat")                                                                         | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.extensions.SnapshotStabilizer.reverse_ops#qiskit.providers.aer.extensions.SnapshotStabilizer.reverse_ops "qiskit.providers.aer.extensions.SnapshotStabilizer.reverse_ops")                                                     | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.extensions.SnapshotStabilizer.soft_compare#qiskit.providers.aer.extensions.SnapshotStabilizer.soft_compare "qiskit.providers.aer.extensions.SnapshotStabilizer.soft_compare")                                                 | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.extensions.SnapshotStabilizer.validate_parameter#qiskit.providers.aer.extensions.SnapshotStabilizer.validate_parameter "qiskit.providers.aer.extensions.SnapshotStabilizer.validate_parameter")                         | Instruction parameters has no validation or normalization.                                                       |

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
