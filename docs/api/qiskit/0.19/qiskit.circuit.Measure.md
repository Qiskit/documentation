---
title: Measure
description: API reference for qiskit.circuit.Measure
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Measure
---

# Measure

<span id="qiskit.circuit.Measure" />

`Measure`

Quantum measurement in the computational basis.

Create new measurement instruction.

## Attributes

|                                                                                                           |                                                                               |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`Measure.decompositions`](qiskit.circuit.Measure.decompositions "qiskit.circuit.Measure.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Measure.definition`](qiskit.circuit.Measure.definition "qiskit.circuit.Measure.definition")             | Return definition in terms of other basic gates.                              |
| [`Measure.params`](qiskit.circuit.Measure.params "qiskit.circuit.Measure.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                        |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`Measure.add_decomposition`](qiskit.circuit.Measure.add_decomposition "qiskit.circuit.Measure.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`Measure.assemble`](qiskit.circuit.Measure.assemble "qiskit.circuit.Measure.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`Measure.broadcast_arguments`](qiskit.circuit.Measure.broadcast_arguments "qiskit.circuit.Measure.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`Measure.c_if`](qiskit.circuit.Measure.c_if "qiskit.circuit.Measure.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`Measure.copy`](qiskit.circuit.Measure.copy "qiskit.circuit.Measure.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`Measure.inverse`](qiskit.circuit.Measure.inverse "qiskit.circuit.Measure.inverse")()                                                 | Invert this instruction.                                                 |
| [`Measure.is_parameterized`](qiskit.circuit.Measure.is_parameterized "qiskit.circuit.Measure.is_parameterized")()                      | Return True .IFF.                                                        |
| [`Measure.mirror`](qiskit.circuit.Measure.mirror "qiskit.circuit.Measure.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`Measure.qasm`](qiskit.circuit.Measure.qasm "qiskit.circuit.Measure.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`Measure.repeat`](qiskit.circuit.Measure.repeat "qiskit.circuit.Measure.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |

