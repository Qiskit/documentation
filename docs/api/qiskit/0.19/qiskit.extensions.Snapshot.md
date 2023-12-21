---
title: Snapshot
description: API reference for qiskit.extensions.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.Snapshot
---

# Snapshot

<span id="qiskit.extensions.Snapshot" />

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

|                                                                                                                    |                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`Snapshot.decompositions`](qiskit.extensions.Snapshot.decompositions "qiskit.extensions.Snapshot.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Snapshot.definition`](qiskit.extensions.Snapshot.definition "qiskit.extensions.Snapshot.definition")             | Return definition in terms of other basic gates.                              |
| [`Snapshot.label`](qiskit.extensions.Snapshot.label "qiskit.extensions.Snapshot.label")                            | Return snapshot label                                                         |
| [`Snapshot.params`](qiskit.extensions.Snapshot.params "qiskit.extensions.Snapshot.params")                         | return instruction params.                                                    |
| [`Snapshot.snapshot_type`](qiskit.extensions.Snapshot.snapshot_type "qiskit.extensions.Snapshot.snapshot_type")    | Return snapshot type                                                          |

## Methods

|                                                                                                                                                 |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`Snapshot.add_decomposition`](qiskit.extensions.Snapshot.add_decomposition "qiskit.extensions.Snapshot.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`Snapshot.assemble`](qiskit.extensions.Snapshot.assemble "qiskit.extensions.Snapshot.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`Snapshot.broadcast_arguments`](qiskit.extensions.Snapshot.broadcast_arguments "qiskit.extensions.Snapshot.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`Snapshot.c_if`](qiskit.extensions.Snapshot.c_if "qiskit.extensions.Snapshot.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`Snapshot.copy`](qiskit.extensions.Snapshot.copy "qiskit.extensions.Snapshot.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`Snapshot.inverse`](qiskit.extensions.Snapshot.inverse "qiskit.extensions.Snapshot.inverse")()                                                 | Special case.                                                            |
| [`Snapshot.is_parameterized`](qiskit.extensions.Snapshot.is_parameterized "qiskit.extensions.Snapshot.is_parameterized")()                      | Return True .IFF.                                                        |
| [`Snapshot.mirror`](qiskit.extensions.Snapshot.mirror "qiskit.extensions.Snapshot.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`Snapshot.qasm`](qiskit.extensions.Snapshot.qasm "qiskit.extensions.Snapshot.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`Snapshot.repeat`](qiskit.extensions.Snapshot.repeat "qiskit.extensions.Snapshot.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |

