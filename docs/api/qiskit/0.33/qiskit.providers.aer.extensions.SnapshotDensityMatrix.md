# SnapshotDensityMatrix

<span id="undefined" />

`SnapshotDensityMatrix(label, num_qubits)`

Bases: `qiskit.providers.aer.extensions.snapshot.Snapshot`

Snapshot instruction for density matrix method of Qasm simulator.

Create a density matrix state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the [`qiskit.providers.aer.library.SaveDensityMatrix`](qiskit.providers.aer.library.SaveDensityMatrix#qiskit.providers.aer.library.SaveDensityMatrix "qiskit.providers.aer.library.SaveDensityMatrix") instruction.
</Admonition>

## Methods

|                                                                                                                                                                                                                                                                              |                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition#qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition "qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition")                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble#qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble "qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble")                                                                 | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments#qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments")                     | Validation of the arguments.                                                                                     |
| [`c_if`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if#qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if "qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if")                                                                                 | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`copy`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy#qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy "qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy")                                                                                 | Copy of the instruction.                                                                                         |
| [`define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register#qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register") | Defines qubits to snapshot for all snapshot methods                                                              |
| [`inverse`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse#qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse "qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse")                                                                     | Special case.                                                                                                    |
| [`is_parameterized`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized#qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized "qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized")                                 | Return True .IFF.                                                                                                |
| [`mirror`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror#qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror "qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror")                                                                         | DEPRECATED: use instruction.reverse\_ops().                                                                      |
| [`qasm`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm#qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm "qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm")                                                                                 | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat#qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat "qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat")                                                                         | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops#qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops "qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops")                                                     | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.soft_compare#qiskit.providers.aer.extensions.SnapshotDensityMatrix.soft_compare "qiskit.providers.aer.extensions.SnapshotDensityMatrix.soft_compare")                                                 | Soft comparison between gates.                                                                                   |
| [`validate_parameter`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter#qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter "qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter")                         | Instruction parameters has no validation or normalization.                                                       |

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

### params

return instruction params.

<span id="undefined" />

### snapshot\_type

Return snapshot type

<span id="undefined" />

### unit

Get the time unit of duration.
