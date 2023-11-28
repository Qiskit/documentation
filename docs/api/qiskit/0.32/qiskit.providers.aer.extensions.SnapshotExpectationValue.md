# SnapshotExpectationValue

<span id="undefined" />

`SnapshotExpectationValue(label, op, single_shot=False, variance=False)`

Bases: `qiskit.providers.aer.extensions.snapshot.Snapshot`

Snapshot instruction for supported methods of Qasm simulator.

Create an expectation value snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **op** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of values \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the [`qiskit.providers.aer.library.SaveExpectationValue`](qiskit.providers.aer.library.SaveExpectationValue#qiskit.providers.aer.library.SaveExpectationValue "qiskit.providers.aer.library.SaveExpectationValue") and [`qiskit.providers.aer.library.SaveExpectationValueVariance`](qiskit.providers.aer.library.SaveExpectationValueVariance#qiskit.providers.aer.library.SaveExpectationValueVariance "qiskit.providers.aer.library.SaveExpectationValueVariance") instructions.
</Admonition>

## Methods

|                                                                                                                                                                                                                                                                                       |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition#qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition "qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition")                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble#qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble "qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble")                                                                 | Assemble a QasmQobjInstruction for snapshot\_expectation\_value.         |
| [`broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments#qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments")                     | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if#qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if "qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if")                                                                                 | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.extensions.SnapshotExpectationValue.copy#qiskit.providers.aer.extensions.SnapshotExpectationValue.copy "qiskit.providers.aer.extensions.SnapshotExpectationValue.copy")                                                                                 | Copy of the instruction.                                                 |
| [`define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register#qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register") | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse#qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse "qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse")                                                                     | Special case.                                                            |
| [`is_parameterized`](qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized#qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized "qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized")                                 | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror#qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror "qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror")                                                                         | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm#qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm "qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm")                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat#qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat "qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat")                                                                         | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops#qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops "qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops")                                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.extensions.SnapshotExpectationValue.soft_compare#qiskit.providers.aer.extensions.SnapshotExpectationValue.soft_compare "qiskit.providers.aer.extensions.SnapshotExpectationValue.soft_compare")                                                 | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter#qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter "qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter")                         | Instruction parameters has no validation or normalization.               |

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
