---
title: SnapshotStabilizer
description: API reference for qiskit.providers.aer.extensions.SnapshotStabilizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotStabilizer
---

# SnapshotStabilizer

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer" />

`SnapshotStabilizer(label, num_qubits=0)`

Snapshot instruction for stabilizer method of Qasm simulator.

Create a stabilizer state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

## Attributes

|                                                                                                                                                                              |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SnapshotStabilizer.decompositions`](qiskit.providers.aer.extensions.SnapshotStabilizer.decompositions "qiskit.providers.aer.extensions.SnapshotStabilizer.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SnapshotStabilizer.definition`](qiskit.providers.aer.extensions.SnapshotStabilizer.definition "qiskit.providers.aer.extensions.SnapshotStabilizer.definition")             | Return definition in terms of other basic gates.                              |
| [`SnapshotStabilizer.label`](qiskit.providers.aer.extensions.SnapshotStabilizer.label "qiskit.providers.aer.extensions.SnapshotStabilizer.label")                            | Return snapshot label                                                         |
| [`SnapshotStabilizer.params`](qiskit.providers.aer.extensions.SnapshotStabilizer.params "qiskit.providers.aer.extensions.SnapshotStabilizer.params")                         | return instruction params.                                                    |
| [`SnapshotStabilizer.snapshot_type`](qiskit.providers.aer.extensions.SnapshotStabilizer.snapshot_type "qiskit.providers.aer.extensions.SnapshotStabilizer.snapshot_type")    | Return snapshot type                                                          |

## Methods

|                                                                                                                                                                                                               |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`SnapshotStabilizer.add_decomposition`](qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition "qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition")(…)                      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SnapshotStabilizer.assemble`](qiskit.providers.aer.extensions.SnapshotStabilizer.assemble "qiskit.providers.aer.extensions.SnapshotStabilizer.assemble")()                                                  | Assemble a QasmQobjInstruction                                           |
| [`SnapshotStabilizer.broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments")(…)                | Validation of the arguments.                                             |
| [`SnapshotStabilizer.c_if`](qiskit.providers.aer.extensions.SnapshotStabilizer.c_if "qiskit.providers.aer.extensions.SnapshotStabilizer.c_if")(classical, val)                                                | Add classical condition on register classical and value val.             |
| [`SnapshotStabilizer.copy`](qiskit.providers.aer.extensions.SnapshotStabilizer.copy "qiskit.providers.aer.extensions.SnapshotStabilizer.copy")(\[name])                                                       | Copy of the instruction.                                                 |
| [`SnapshotStabilizer.define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register")(…) | Defines qubits to snapshot for all snapshot methods                      |
| [`SnapshotStabilizer.inverse`](qiskit.providers.aer.extensions.SnapshotStabilizer.inverse "qiskit.providers.aer.extensions.SnapshotStabilizer.inverse")()                                                     | Special case.                                                            |
| [`SnapshotStabilizer.is_parameterized`](qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized "qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized")()                          | Return True .IFF.                                                        |
| [`SnapshotStabilizer.mirror`](qiskit.providers.aer.extensions.SnapshotStabilizer.mirror "qiskit.providers.aer.extensions.SnapshotStabilizer.mirror")()                                                        | For a composite instruction, reverse the order of sub-gates.             |
| [`SnapshotStabilizer.qasm`](qiskit.providers.aer.extensions.SnapshotStabilizer.qasm "qiskit.providers.aer.extensions.SnapshotStabilizer.qasm")()                                                              | Return a default OpenQASM string for the instruction.                    |
| [`SnapshotStabilizer.repeat`](qiskit.providers.aer.extensions.SnapshotStabilizer.repeat "qiskit.providers.aer.extensions.SnapshotStabilizer.repeat")(n)                                                       | Creates an instruction with gate repeated n amount of times.             |

