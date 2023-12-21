---
title: SnapshotProbabilities
description: API reference for qiskit.providers.aer.extensions.SnapshotProbabilities
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotProbabilities
---

# SnapshotProbabilities

<span id="qiskit.providers.aer.extensions.SnapshotProbabilities" />

`SnapshotProbabilities(label, num_qubits, variance=False)`

Snapshot instruction for all methods of Qasm simulator.

Create a probability snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

## Attributes

|                                                                                                                                                                                       |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SnapshotProbabilities.decompositions`](qiskit.providers.aer.extensions.SnapshotProbabilities.decompositions "qiskit.providers.aer.extensions.SnapshotProbabilities.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SnapshotProbabilities.definition`](qiskit.providers.aer.extensions.SnapshotProbabilities.definition "qiskit.providers.aer.extensions.SnapshotProbabilities.definition")             | Return definition in terms of other basic gates.                              |
| [`SnapshotProbabilities.label`](qiskit.providers.aer.extensions.SnapshotProbabilities.label "qiskit.providers.aer.extensions.SnapshotProbabilities.label")                            | Return snapshot label                                                         |
| [`SnapshotProbabilities.params`](qiskit.providers.aer.extensions.SnapshotProbabilities.params "qiskit.providers.aer.extensions.SnapshotProbabilities.params")                         | return instruction params.                                                    |
| [`SnapshotProbabilities.snapshot_type`](qiskit.providers.aer.extensions.SnapshotProbabilities.snapshot_type "qiskit.providers.aer.extensions.SnapshotProbabilities.snapshot_type")    | Return snapshot type                                                          |

## Methods

|                                                                                                                                                                                                                        |                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`SnapshotProbabilities.add_decomposition`](qiskit.providers.aer.extensions.SnapshotProbabilities.add_decomposition "qiskit.providers.aer.extensions.SnapshotProbabilities.add_decomposition")(…)                      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SnapshotProbabilities.assemble`](qiskit.providers.aer.extensions.SnapshotProbabilities.assemble "qiskit.providers.aer.extensions.SnapshotProbabilities.assemble")()                                                  | Assemble a QasmQobjInstruction                                           |
| [`SnapshotProbabilities.broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotProbabilities.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotProbabilities.broadcast_arguments")(…)                | Validation of the arguments.                                             |
| [`SnapshotProbabilities.c_if`](qiskit.providers.aer.extensions.SnapshotProbabilities.c_if "qiskit.providers.aer.extensions.SnapshotProbabilities.c_if")(classical, val)                                                | Add classical condition on register classical and value val.             |
| [`SnapshotProbabilities.copy`](qiskit.providers.aer.extensions.SnapshotProbabilities.copy "qiskit.providers.aer.extensions.SnapshotProbabilities.copy")(\[name])                                                       | Copy of the instruction.                                                 |
| [`SnapshotProbabilities.define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotProbabilities.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotProbabilities.define_snapshot_register")(…) | Defines qubits to snapshot for all snapshot methods                      |
| [`SnapshotProbabilities.inverse`](qiskit.providers.aer.extensions.SnapshotProbabilities.inverse "qiskit.providers.aer.extensions.SnapshotProbabilities.inverse")()                                                     | Special case.                                                            |
| [`SnapshotProbabilities.is_parameterized`](qiskit.providers.aer.extensions.SnapshotProbabilities.is_parameterized "qiskit.providers.aer.extensions.SnapshotProbabilities.is_parameterized")()                          | Return True .IFF.                                                        |
| [`SnapshotProbabilities.mirror`](qiskit.providers.aer.extensions.SnapshotProbabilities.mirror "qiskit.providers.aer.extensions.SnapshotProbabilities.mirror")()                                                        | For a composite instruction, reverse the order of sub-gates.             |
| [`SnapshotProbabilities.qasm`](qiskit.providers.aer.extensions.SnapshotProbabilities.qasm "qiskit.providers.aer.extensions.SnapshotProbabilities.qasm")()                                                              | Return a default OpenQASM string for the instruction.                    |
| [`SnapshotProbabilities.repeat`](qiskit.providers.aer.extensions.SnapshotProbabilities.repeat "qiskit.providers.aer.extensions.SnapshotProbabilities.repeat")(n)                                                       | Creates an instruction with gate repeated n amount of times.             |

