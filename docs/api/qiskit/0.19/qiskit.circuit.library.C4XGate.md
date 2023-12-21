---
title: C4XGate
description: API reference for qiskit.circuit.library.C4XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.C4XGate
---

# C4XGate

<span id="qiskit.circuit.library.C4XGate" />

`C4XGate(label=None, ctrl_state=None)`

The 4-qubit controlled X gate.

This implementation is based on Page 21, Lemma 7.5, of \[1].

## References

\[1] Barenco et al., 1995. [https://arxiv.org/pdf/quant-ph/9503016.pdf](https://arxiv.org/pdf/quant-ph/9503016.pdf)

Create a new 4-qubit controlled X gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`C4XGate.ctrl_state`](qiskit.circuit.library.C4XGate.ctrl_state "qiskit.circuit.library.C4XGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`C4XGate.decompositions`](qiskit.circuit.library.C4XGate.decompositions "qiskit.circuit.library.C4XGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`C4XGate.definition`](qiskit.circuit.library.C4XGate.definition "qiskit.circuit.library.C4XGate.definition")             | Return definition in terms of other basic gates.                              |
| [`C4XGate.label`](qiskit.circuit.library.C4XGate.label "qiskit.circuit.library.C4XGate.label")                            | Return gate label                                                             |
| [`C4XGate.params`](qiskit.circuit.library.C4XGate.params "qiskit.circuit.library.C4XGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`C4XGate.add_decomposition`](qiskit.circuit.library.C4XGate.add_decomposition "qiskit.circuit.library.C4XGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`C4XGate.assemble`](qiskit.circuit.library.C4XGate.assemble "qiskit.circuit.library.C4XGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`C4XGate.broadcast_arguments`](qiskit.circuit.library.C4XGate.broadcast_arguments "qiskit.circuit.library.C4XGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`C4XGate.c_if`](qiskit.circuit.library.C4XGate.c_if "qiskit.circuit.library.C4XGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`C4XGate.control`](qiskit.circuit.library.C4XGate.control "qiskit.circuit.library.C4XGate.control")(\[num\_ctrl\_qubits, label, …])                   | Controlled version of this gate.                                         |
| [`C4XGate.copy`](qiskit.circuit.library.C4XGate.copy "qiskit.circuit.library.C4XGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`C4XGate.inverse`](qiskit.circuit.library.C4XGate.inverse "qiskit.circuit.library.C4XGate.inverse")()                                                 | Invert this gate.                                                        |
| [`C4XGate.is_parameterized`](qiskit.circuit.library.C4XGate.is_parameterized "qiskit.circuit.library.C4XGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`C4XGate.mirror`](qiskit.circuit.library.C4XGate.mirror "qiskit.circuit.library.C4XGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`C4XGate.power`](qiskit.circuit.library.C4XGate.power "qiskit.circuit.library.C4XGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`C4XGate.qasm`](qiskit.circuit.library.C4XGate.qasm "qiskit.circuit.library.C4XGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`C4XGate.repeat`](qiskit.circuit.library.C4XGate.repeat "qiskit.circuit.library.C4XGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`C4XGate.to_matrix`](qiskit.circuit.library.C4XGate.to_matrix "qiskit.circuit.library.C4XGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

