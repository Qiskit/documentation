---
title: Measure
description: API reference for qiskit.circuit.library.Measure
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Measure
---

# Measure

<span id="qiskit.circuit.library.Measure" />

`Measure`

Quantum measurement in the computational basis.

Create new measurement instruction.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`Measure.decompositions`](qiskit.circuit.library.Measure.decompositions "qiskit.circuit.library.Measure.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Measure.definition`](qiskit.circuit.library.Measure.definition "qiskit.circuit.library.Measure.definition")             | Return definition in terms of other basic gates.                              |
| [`Measure.params`](qiskit.circuit.library.Measure.params "qiskit.circuit.library.Measure.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`Measure.add_decomposition`](qiskit.circuit.library.Measure.add_decomposition "qiskit.circuit.library.Measure.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`Measure.assemble`](qiskit.circuit.library.Measure.assemble "qiskit.circuit.library.Measure.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`Measure.broadcast_arguments`](qiskit.circuit.library.Measure.broadcast_arguments "qiskit.circuit.library.Measure.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`Measure.c_if`](qiskit.circuit.library.Measure.c_if "qiskit.circuit.library.Measure.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`Measure.copy`](qiskit.circuit.library.Measure.copy "qiskit.circuit.library.Measure.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`Measure.inverse`](qiskit.circuit.library.Measure.inverse "qiskit.circuit.library.Measure.inverse")()                                                 | Invert this instruction.                                                 |
| [`Measure.is_parameterized`](qiskit.circuit.library.Measure.is_parameterized "qiskit.circuit.library.Measure.is_parameterized")()                      | Return True .IFF.                                                        |
| [`Measure.mirror`](qiskit.circuit.library.Measure.mirror "qiskit.circuit.library.Measure.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`Measure.qasm`](qiskit.circuit.library.Measure.qasm "qiskit.circuit.library.Measure.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`Measure.repeat`](qiskit.circuit.library.Measure.repeat "qiskit.circuit.library.Measure.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |

