---
title: SnapshotStatevector
description: API reference for qiskit.providers.aer.extensions.SnapshotStatevector
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotStatevector
---

# SnapshotStatevector

<span id="qiskit.providers.aer.extensions.SnapshotStatevector" />

`SnapshotStatevector(label, num_qubits=0)`

Snapshot instruction for statevector snapshot type

Create a statevector state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

## Attributes

|                                                                                                                                                                                 |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SnapshotStatevector.decompositions`](qiskit.providers.aer.extensions.SnapshotStatevector.decompositions "qiskit.providers.aer.extensions.SnapshotStatevector.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SnapshotStatevector.definition`](qiskit.providers.aer.extensions.SnapshotStatevector.definition "qiskit.providers.aer.extensions.SnapshotStatevector.definition")             | Return definition in terms of other basic gates.                              |
| [`SnapshotStatevector.label`](qiskit.providers.aer.extensions.SnapshotStatevector.label "qiskit.providers.aer.extensions.SnapshotStatevector.label")                            | Return snapshot label                                                         |
| [`SnapshotStatevector.params`](qiskit.providers.aer.extensions.SnapshotStatevector.params "qiskit.providers.aer.extensions.SnapshotStatevector.params")                         | return instruction params.                                                    |
| [`SnapshotStatevector.snapshot_type`](qiskit.providers.aer.extensions.SnapshotStatevector.snapshot_type "qiskit.providers.aer.extensions.SnapshotStatevector.snapshot_type")    | Return snapshot type                                                          |

## Methods

|                                                                                                                                                                                                                  |                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`SnapshotStatevector.add_decomposition`](qiskit.providers.aer.extensions.SnapshotStatevector.add_decomposition "qiskit.providers.aer.extensions.SnapshotStatevector.add_decomposition")(…)                      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SnapshotStatevector.assemble`](qiskit.providers.aer.extensions.SnapshotStatevector.assemble "qiskit.providers.aer.extensions.SnapshotStatevector.assemble")()                                                  | Assemble a QasmQobjInstruction                                           |
| [`SnapshotStatevector.broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotStatevector.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotStatevector.broadcast_arguments")(…)                | Validation of the arguments.                                             |
| [`SnapshotStatevector.c_if`](qiskit.providers.aer.extensions.SnapshotStatevector.c_if "qiskit.providers.aer.extensions.SnapshotStatevector.c_if")(classical, val)                                                | Add classical condition on register classical and value val.             |
| [`SnapshotStatevector.copy`](qiskit.providers.aer.extensions.SnapshotStatevector.copy "qiskit.providers.aer.extensions.SnapshotStatevector.copy")(\[name])                                                       | Copy of the instruction.                                                 |
| [`SnapshotStatevector.define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotStatevector.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotStatevector.define_snapshot_register")(…) | Defines qubits to snapshot for all snapshot methods                      |
| [`SnapshotStatevector.inverse`](qiskit.providers.aer.extensions.SnapshotStatevector.inverse "qiskit.providers.aer.extensions.SnapshotStatevector.inverse")()                                                     | Special case.                                                            |
| [`SnapshotStatevector.is_parameterized`](qiskit.providers.aer.extensions.SnapshotStatevector.is_parameterized "qiskit.providers.aer.extensions.SnapshotStatevector.is_parameterized")()                          | Return True .IFF.                                                        |
| [`SnapshotStatevector.mirror`](qiskit.providers.aer.extensions.SnapshotStatevector.mirror "qiskit.providers.aer.extensions.SnapshotStatevector.mirror")()                                                        | For a composite instruction, reverse the order of sub-gates.             |
| [`SnapshotStatevector.qasm`](qiskit.providers.aer.extensions.SnapshotStatevector.qasm "qiskit.providers.aer.extensions.SnapshotStatevector.qasm")()                                                              | Return a default OpenQASM string for the instruction.                    |
| [`SnapshotStatevector.repeat`](qiskit.providers.aer.extensions.SnapshotStatevector.repeat "qiskit.providers.aer.extensions.SnapshotStatevector.repeat")(n)                                                       | Creates an instruction with gate repeated n amount of times.             |

