---
title: RCCXGate
description: API reference for qiskit.circuit.library.RCCXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RCCXGate
---

# RCCXGate

<span id="qiskit.circuit.library.RCCXGate" />

`RCCXGate(label=None)`

The simplified Toffoli gate, also referred to as Margolus gate.

The simplified Toffoli gate implements the Toffoli gate up to relative phases. This implementation requires three CX gates which is the minimal amount possible, as shown in [https://arxiv.org/abs/quant-ph/0312225](https://arxiv.org/abs/quant-ph/0312225). Note, that the simplified Toffoli is not equivalent to the Toffoli. But can be used in places where the Toffoli gate is uncomputed again.

This concrete implementation is from [https://arxiv.org/abs/1508.03273](https://arxiv.org/abs/1508.03273), the dashed box of Fig. 3.

Create a new simplified CCX gate.

## Attributes

|                                                                                                                              |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RCCXGate.decompositions`](qiskit.circuit.library.RCCXGate.decompositions "qiskit.circuit.library.RCCXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RCCXGate.definition`](qiskit.circuit.library.RCCXGate.definition "qiskit.circuit.library.RCCXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RCCXGate.label`](qiskit.circuit.library.RCCXGate.label "qiskit.circuit.library.RCCXGate.label")                            | Return gate label                                                             |
| [`RCCXGate.params`](qiskit.circuit.library.RCCXGate.params "qiskit.circuit.library.RCCXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                           |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`RCCXGate.add_decomposition`](qiskit.circuit.library.RCCXGate.add_decomposition "qiskit.circuit.library.RCCXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RCCXGate.assemble`](qiskit.circuit.library.RCCXGate.assemble "qiskit.circuit.library.RCCXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RCCXGate.broadcast_arguments`](qiskit.circuit.library.RCCXGate.broadcast_arguments "qiskit.circuit.library.RCCXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RCCXGate.c_if`](qiskit.circuit.library.RCCXGate.c_if "qiskit.circuit.library.RCCXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RCCXGate.control`](qiskit.circuit.library.RCCXGate.control "qiskit.circuit.library.RCCXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`RCCXGate.copy`](qiskit.circuit.library.RCCXGate.copy "qiskit.circuit.library.RCCXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RCCXGate.inverse`](qiskit.circuit.library.RCCXGate.inverse "qiskit.circuit.library.RCCXGate.inverse")()                                                 | Invert this instruction.                                                 |
| [`RCCXGate.is_parameterized`](qiskit.circuit.library.RCCXGate.is_parameterized "qiskit.circuit.library.RCCXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RCCXGate.mirror`](qiskit.circuit.library.RCCXGate.mirror "qiskit.circuit.library.RCCXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RCCXGate.power`](qiskit.circuit.library.RCCXGate.power "qiskit.circuit.library.RCCXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RCCXGate.qasm`](qiskit.circuit.library.RCCXGate.qasm "qiskit.circuit.library.RCCXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RCCXGate.repeat`](qiskit.circuit.library.RCCXGate.repeat "qiskit.circuit.library.RCCXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RCCXGate.to_matrix`](qiskit.circuit.library.RCCXGate.to_matrix "qiskit.circuit.library.RCCXGate.to_matrix")()                                           | Return a numpy.array for the simplified CCX gate.                        |

