---
title: RC3XGate
description: API reference for qiskit.circuit.library.RC3XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RC3XGate
---

# RC3XGate

<span id="qiskit.circuit.library.RC3XGate" />

`RC3XGate(label=None)`

The simplified 3-controlled Toffoli gate.

The simplified Toffoli gate implements the Toffoli gate up to relative phases. Note, that the simplified Toffoli is not equivalent to the Toffoli. But can be used in places where the Toffoli gate is uncomputed again.

This concrete implementation is from [https://arxiv.org/abs/1508.03273](https://arxiv.org/abs/1508.03273), the complete circuit of Fig. 4.

Create a new RC3X gate.

## Attributes

|                                                                                                                              |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RC3XGate.decompositions`](qiskit.circuit.library.RC3XGate.decompositions "qiskit.circuit.library.RC3XGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RC3XGate.definition`](qiskit.circuit.library.RC3XGate.definition "qiskit.circuit.library.RC3XGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RC3XGate.label`](qiskit.circuit.library.RC3XGate.label "qiskit.circuit.library.RC3XGate.label")                            | Return gate label                                                             |
| [`RC3XGate.params`](qiskit.circuit.library.RC3XGate.params "qiskit.circuit.library.RC3XGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                           |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`RC3XGate.add_decomposition`](qiskit.circuit.library.RC3XGate.add_decomposition "qiskit.circuit.library.RC3XGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RC3XGate.assemble`](qiskit.circuit.library.RC3XGate.assemble "qiskit.circuit.library.RC3XGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RC3XGate.broadcast_arguments`](qiskit.circuit.library.RC3XGate.broadcast_arguments "qiskit.circuit.library.RC3XGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RC3XGate.c_if`](qiskit.circuit.library.RC3XGate.c_if "qiskit.circuit.library.RC3XGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RC3XGate.control`](qiskit.circuit.library.RC3XGate.control "qiskit.circuit.library.RC3XGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`RC3XGate.copy`](qiskit.circuit.library.RC3XGate.copy "qiskit.circuit.library.RC3XGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RC3XGate.inverse`](qiskit.circuit.library.RC3XGate.inverse "qiskit.circuit.library.RC3XGate.inverse")()                                                 | Invert this instruction.                                                 |
| [`RC3XGate.is_parameterized`](qiskit.circuit.library.RC3XGate.is_parameterized "qiskit.circuit.library.RC3XGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RC3XGate.mirror`](qiskit.circuit.library.RC3XGate.mirror "qiskit.circuit.library.RC3XGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RC3XGate.power`](qiskit.circuit.library.RC3XGate.power "qiskit.circuit.library.RC3XGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RC3XGate.qasm`](qiskit.circuit.library.RC3XGate.qasm "qiskit.circuit.library.RC3XGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RC3XGate.repeat`](qiskit.circuit.library.RC3XGate.repeat "qiskit.circuit.library.RC3XGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RC3XGate.to_matrix`](qiskit.circuit.library.RC3XGate.to_matrix "qiskit.circuit.library.RC3XGate.to_matrix")()                                           | Return a numpy.array for the RC3X gate.                                  |

