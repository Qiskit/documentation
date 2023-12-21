---
title: Barrier
description: API reference for qiskit.circuit.library.Barrier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Barrier
---

# Barrier

<span id="qiskit.circuit.library.Barrier" />

`Barrier(num_qubits)`

Barrier instruction.

Create new barrier instruction.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`Barrier.decompositions`](qiskit.circuit.library.Barrier.decompositions "qiskit.circuit.library.Barrier.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Barrier.definition`](qiskit.circuit.library.Barrier.definition "qiskit.circuit.library.Barrier.definition")             | Return definition in terms of other basic gates.                              |
| [`Barrier.params`](qiskit.circuit.library.Barrier.params "qiskit.circuit.library.Barrier.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`Barrier.add_decomposition`](qiskit.circuit.library.Barrier.add_decomposition "qiskit.circuit.library.Barrier.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`Barrier.assemble`](qiskit.circuit.library.Barrier.assemble "qiskit.circuit.library.Barrier.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`Barrier.broadcast_arguments`](qiskit.circuit.library.Barrier.broadcast_arguments "qiskit.circuit.library.Barrier.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`Barrier.c_if`](qiskit.circuit.library.Barrier.c_if "qiskit.circuit.library.Barrier.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`Barrier.copy`](qiskit.circuit.library.Barrier.copy "qiskit.circuit.library.Barrier.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`Barrier.inverse`](qiskit.circuit.library.Barrier.inverse "qiskit.circuit.library.Barrier.inverse")()                                                 | Special case.                                                            |
| [`Barrier.is_parameterized`](qiskit.circuit.library.Barrier.is_parameterized "qiskit.circuit.library.Barrier.is_parameterized")()                      | Return True .IFF.                                                        |
| [`Barrier.mirror`](qiskit.circuit.library.Barrier.mirror "qiskit.circuit.library.Barrier.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`Barrier.qasm`](qiskit.circuit.library.Barrier.qasm "qiskit.circuit.library.Barrier.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`Barrier.repeat`](qiskit.circuit.library.Barrier.repeat "qiskit.circuit.library.Barrier.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |

