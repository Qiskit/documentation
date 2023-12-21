---
title: SnapshotExpectationValue
description: API reference for qiskit.providers.aer.extensions.SnapshotExpectationValue
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotExpectationValue
---

# SnapshotExpectationValue

<span id="qiskit.providers.aer.extensions.SnapshotExpectationValue" />

`SnapshotExpectationValue(label, op, single_shot=False, variance=False)`

Snapshot instruction for supported methods of Qasm simulator.

Create a probability snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **op** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

## Attributes

|                                                                                                                                                                                                |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SnapshotExpectationValue.decompositions`](qiskit.providers.aer.extensions.SnapshotExpectationValue.decompositions "qiskit.providers.aer.extensions.SnapshotExpectationValue.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SnapshotExpectationValue.definition`](qiskit.providers.aer.extensions.SnapshotExpectationValue.definition "qiskit.providers.aer.extensions.SnapshotExpectationValue.definition")             | Return definition in terms of other basic gates.                              |
| [`SnapshotExpectationValue.label`](qiskit.providers.aer.extensions.SnapshotExpectationValue.label "qiskit.providers.aer.extensions.SnapshotExpectationValue.label")                            | Return snapshot label                                                         |
| [`SnapshotExpectationValue.params`](qiskit.providers.aer.extensions.SnapshotExpectationValue.params "qiskit.providers.aer.extensions.SnapshotExpectationValue.params")                         | return instruction params.                                                    |
| [`SnapshotExpectationValue.snapshot_type`](qiskit.providers.aer.extensions.SnapshotExpectationValue.snapshot_type "qiskit.providers.aer.extensions.SnapshotExpectationValue.snapshot_type")    | Return snapshot type                                                          |

## Methods

|                                                                                                                                                                                                                                 |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`SnapshotExpectationValue.add_decomposition`](qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition "qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition")(…)                      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SnapshotExpectationValue.assemble`](qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble "qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble")()                                                  | Assemble a QasmQobjInstruction for snapshot\_expectation\_value.         |
| [`SnapshotExpectationValue.broadcast_arguments`](qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments")(…)                | Validation of the arguments.                                             |
| [`SnapshotExpectationValue.c_if`](qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if "qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if")(classical, val)                                                | Add classical condition on register classical and value val.             |
| [`SnapshotExpectationValue.copy`](qiskit.providers.aer.extensions.SnapshotExpectationValue.copy "qiskit.providers.aer.extensions.SnapshotExpectationValue.copy")(\[name])                                                       | Copy of the instruction.                                                 |
| [`SnapshotExpectationValue.define_snapshot_register`](qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register")(…) | Defines qubits to snapshot for all snapshot methods                      |
| [`SnapshotExpectationValue.inverse`](qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse "qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse")()                                                     | Special case.                                                            |
| [`SnapshotExpectationValue.is_parameterized`](qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized "qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized")()                          | Return True .IFF.                                                        |
| [`SnapshotExpectationValue.mirror`](qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror "qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror")()                                                        | For a composite instruction, reverse the order of sub-gates.             |
| [`SnapshotExpectationValue.qasm`](qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm "qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm")()                                                              | Return a default OpenQASM string for the instruction.                    |
| [`SnapshotExpectationValue.repeat`](qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat "qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat")(n)                                                       | Creates an instruction with gate repeated n amount of times.             |

