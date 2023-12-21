---
title: Snapshot
description: API reference for qiskit.providers.aer.extensions.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.Snapshot
---

# Snapshot

<span id="qiskit.providers.aer.extensions.Snapshot" />

`Snapshot(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)`

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

## Attributes

|                                                                                                                                                |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`Snapshot.decompositions`](qiskit.providers.aer.extensions.Snapshot.decompositions "qiskit.providers.aer.extensions.Snapshot.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Snapshot.definition`](qiskit.providers.aer.extensions.Snapshot.definition "qiskit.providers.aer.extensions.Snapshot.definition")             | Return definition in terms of other basic gates.                              |
| [`Snapshot.label`](qiskit.providers.aer.extensions.Snapshot.label "qiskit.providers.aer.extensions.Snapshot.label")                            | Return snapshot label                                                         |
| [`Snapshot.params`](qiskit.providers.aer.extensions.Snapshot.params "qiskit.providers.aer.extensions.Snapshot.params")                         | return instruction params.                                                    |
| [`Snapshot.snapshot_type`](qiskit.providers.aer.extensions.Snapshot.snapshot_type "qiskit.providers.aer.extensions.Snapshot.snapshot_type")    | Return snapshot type                                                          |

## Methods

|                                                                                                                                                                                              |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`Snapshot.add_decomposition`](qiskit.providers.aer.extensions.Snapshot.add_decomposition "qiskit.providers.aer.extensions.Snapshot.add_decomposition")(decomposition)                       | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`Snapshot.assemble`](qiskit.providers.aer.extensions.Snapshot.assemble "qiskit.providers.aer.extensions.Snapshot.assemble")()                                                               | Assemble a QasmQobjInstruction                                           |
| [`Snapshot.broadcast_arguments`](qiskit.providers.aer.extensions.Snapshot.broadcast_arguments "qiskit.providers.aer.extensions.Snapshot.broadcast_arguments")(qargs, cargs)                  | Validation of the arguments.                                             |
| [`Snapshot.c_if`](qiskit.providers.aer.extensions.Snapshot.c_if "qiskit.providers.aer.extensions.Snapshot.c_if")(classical, val)                                                             | Add classical condition on register classical and value val.             |
| [`Snapshot.copy`](qiskit.providers.aer.extensions.Snapshot.copy "qiskit.providers.aer.extensions.Snapshot.copy")(\[name])                                                                    | Copy of the instruction.                                                 |
| [`Snapshot.define_snapshot_register`](qiskit.providers.aer.extensions.Snapshot.define_snapshot_register "qiskit.providers.aer.extensions.Snapshot.define_snapshot_register")(circuit, label) | Defines qubits to snapshot for all snapshot methods                      |
| [`Snapshot.inverse`](qiskit.providers.aer.extensions.Snapshot.inverse "qiskit.providers.aer.extensions.Snapshot.inverse")()                                                                  | Special case.                                                            |
| [`Snapshot.is_parameterized`](qiskit.providers.aer.extensions.Snapshot.is_parameterized "qiskit.providers.aer.extensions.Snapshot.is_parameterized")()                                       | Return True .IFF.                                                        |
| [`Snapshot.mirror`](qiskit.providers.aer.extensions.Snapshot.mirror "qiskit.providers.aer.extensions.Snapshot.mirror")()                                                                     | For a composite instruction, reverse the order of sub-gates.             |
| [`Snapshot.qasm`](qiskit.providers.aer.extensions.Snapshot.qasm "qiskit.providers.aer.extensions.Snapshot.qasm")()                                                                           | Return a default OpenQASM string for the instruction.                    |
| [`Snapshot.repeat`](qiskit.providers.aer.extensions.Snapshot.repeat "qiskit.providers.aer.extensions.Snapshot.repeat")(n)                                                                    | Creates an instruction with gate repeated n amount of times.             |

