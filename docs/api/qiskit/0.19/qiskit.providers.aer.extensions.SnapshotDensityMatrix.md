---
title: SnapshotDensityMatrix
description: API reference for qiskit.providers.aer.extensions.SnapshotDensityMatrix
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotDensityMatrix
---

# SnapshotDensityMatrix

<span id="qiskit.providers.aer.extensions.SnapshotDensityMatrix" />

`SnapshotDensityMatrix(label, num_qubits)`

Snapshot instruction for density matrix method of Qasm simulator.

Create a density matrix state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.

**Raises**

**ExtensionError** – if snapshot is invalid.

## Attributes

|                                                                                                                                                                                       |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SnapshotDensityMatrix.decompositions`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.decompositions "qiskit.providers.aer.extensions.SnapshotDensityMatrix.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SnapshotDensityMatrix.definition`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.definition "qiskit.providers.aer.extensions.SnapshotDensityMatrix.definition")             | Return definition in terms of other basic gates.                              |
| [`SnapshotDensityMatrix.label`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.label "qiskit.providers.aer.extensions.SnapshotDensityMatrix.label")                            | Return snapshot label                                                         |
| [`SnapshotDensityMatrix.params`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.params "qiskit.providers.aer.extensions.SnapshotDensityMatrix.params")                         | return instruction params.                                                    |
| [`SnapshotDensityMatrix.snapshot_type`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.snapshot_type "qiskit.providers.aer.extensions.SnapshotDensityMatrix.snapshot_type")    | Return snapshot type                                                          |

## Methods

|                                                                                                                                                                                                                        |                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`SnapshotDensityMatrix.add_decomposition`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition "qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition")(…)                      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SnapshotDensityMatrix.assemble`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble "qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble")()                                                  | Assemble a QasmQobjInstruction                                           |
| [`SnapshotDensityMatrix.broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments")(…)                | Validation of the arguments.                                             |
| [`SnapshotDensityMatrix.c_if`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if "qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if")(classical, val)                                                | Add classical condition on register classical and value val.             |
| [`SnapshotDensityMatrix.copy`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy "qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy")(\[name])                                                       | Copy of the instruction.                                                 |
| [`SnapshotDensityMatrix.define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register")(…) | Defines qubits to snapshot for all snapshot methods                      |
| [`SnapshotDensityMatrix.inverse`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse "qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse")()                                                     | Special case.                                                            |
| [`SnapshotDensityMatrix.is_parameterized`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized "qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized")()                          | Return True .IFF.                                                        |
| [`SnapshotDensityMatrix.mirror`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror "qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror")()                                                        | For a composite instruction, reverse the order of sub-gates.             |
| [`SnapshotDensityMatrix.qasm`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm "qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm")()                                                              | Return a default OpenQASM string for the instruction.                    |
| [`SnapshotDensityMatrix.repeat`](qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat "qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat")(n)                                                       | Creates an instruction with gate repeated n amount of times.             |

