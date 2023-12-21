---
title: MSGate
description: API reference for qiskit.circuit.library.MSGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MSGate
---

# MSGate

<span id="qiskit.circuit.library.MSGate" />

`MSGate(num_qubits, theta, *, n_qubits=None, label=None)`

Global Mølmer–Sørensen gate.

The Mølmer–Sørensen gate is native to ion-trap systems. The global MS can be applied to multiple ions to entangle multiple qubits simultaneously.

In the two-qubit case, this is equivalent to an XX(theta) interaction, and is thus reduced to the RXXGate.

Create new MS gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`MSGate.decompositions`](qiskit.circuit.library.MSGate.decompositions "qiskit.circuit.library.MSGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`MSGate.definition`](qiskit.circuit.library.MSGate.definition "qiskit.circuit.library.MSGate.definition")             | Return definition in terms of other basic gates.                              |
| [`MSGate.label`](qiskit.circuit.library.MSGate.label "qiskit.circuit.library.MSGate.label")                            | Return gate label                                                             |
| [`MSGate.params`](qiskit.circuit.library.MSGate.params "qiskit.circuit.library.MSGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`MSGate.add_decomposition`](qiskit.circuit.library.MSGate.add_decomposition "qiskit.circuit.library.MSGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`MSGate.assemble`](qiskit.circuit.library.MSGate.assemble "qiskit.circuit.library.MSGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`MSGate.broadcast_arguments`](qiskit.circuit.library.MSGate.broadcast_arguments "qiskit.circuit.library.MSGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`MSGate.c_if`](qiskit.circuit.library.MSGate.c_if "qiskit.circuit.library.MSGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`MSGate.control`](qiskit.circuit.library.MSGate.control "qiskit.circuit.library.MSGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`MSGate.copy`](qiskit.circuit.library.MSGate.copy "qiskit.circuit.library.MSGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`MSGate.inverse`](qiskit.circuit.library.MSGate.inverse "qiskit.circuit.library.MSGate.inverse")()                                                 | Invert this instruction.                                                 |
| [`MSGate.is_parameterized`](qiskit.circuit.library.MSGate.is_parameterized "qiskit.circuit.library.MSGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`MSGate.mirror`](qiskit.circuit.library.MSGate.mirror "qiskit.circuit.library.MSGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`MSGate.power`](qiskit.circuit.library.MSGate.power "qiskit.circuit.library.MSGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`MSGate.qasm`](qiskit.circuit.library.MSGate.qasm "qiskit.circuit.library.MSGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`MSGate.repeat`](qiskit.circuit.library.MSGate.repeat "qiskit.circuit.library.MSGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`MSGate.to_matrix`](qiskit.circuit.library.MSGate.to_matrix "qiskit.circuit.library.MSGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

