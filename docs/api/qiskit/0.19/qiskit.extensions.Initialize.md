---
title: Initialize
description: API reference for qiskit.extensions.Initialize
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.Initialize
---

# Initialize

<span id="qiskit.extensions.Initialize" />

`Initialize(params)`

Complex amplitude initialization.

Class that implements the (complex amplitude) initialization of some flexible collection of qubit registers (assuming the qubits are in the zero state). Note that Initialize is an Instruction and not a Gate since it contains a reset instruction, which is not unitary.

Create new initialize composite.

params (list): vector of complex amplitudes to initialize to

## Attributes

|                                                                                                                          |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`Initialize.decompositions`](qiskit.extensions.Initialize.decompositions "qiskit.extensions.Initialize.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Initialize.definition`](qiskit.extensions.Initialize.definition "qiskit.extensions.Initialize.definition")             | Return definition in terms of other basic gates.                              |
| [`Initialize.params`](qiskit.extensions.Initialize.params "qiskit.extensions.Initialize.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                       |                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`Initialize.add_decomposition`](qiskit.extensions.Initialize.add_decomposition "qiskit.extensions.Initialize.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.  |
| [`Initialize.assemble`](qiskit.extensions.Initialize.assemble "qiskit.extensions.Initialize.assemble")()                                              | Assemble a QasmQobjInstruction                                            |
| [`Initialize.broadcast_arguments`](qiskit.extensions.Initialize.broadcast_arguments "qiskit.extensions.Initialize.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                              |
| [`Initialize.c_if`](qiskit.extensions.Initialize.c_if "qiskit.extensions.Initialize.c_if")(classical, val)                                            | Add classical condition on register classical and value val.              |
| [`Initialize.copy`](qiskit.extensions.Initialize.copy "qiskit.extensions.Initialize.copy")(\[name])                                                   | Copy of the instruction.                                                  |
| [`Initialize.gates_to_uncompute`](qiskit.extensions.Initialize.gates_to_uncompute "qiskit.extensions.Initialize.gates_to_uncompute")()                | Call to create a circuit with gates that take the desired vector to zero. |
| [`Initialize.inverse`](qiskit.extensions.Initialize.inverse "qiskit.extensions.Initialize.inverse")()                                                 | Invert this instruction.                                                  |
| [`Initialize.is_parameterized`](qiskit.extensions.Initialize.is_parameterized "qiskit.extensions.Initialize.is_parameterized")()                      | Return True .IFF.                                                         |
| [`Initialize.mirror`](qiskit.extensions.Initialize.mirror "qiskit.extensions.Initialize.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.              |
| [`Initialize.qasm`](qiskit.extensions.Initialize.qasm "qiskit.extensions.Initialize.qasm")()                                                          | Return a default OpenQASM string for the instruction.                     |
| [`Initialize.repeat`](qiskit.extensions.Initialize.repeat "qiskit.extensions.Initialize.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.              |

