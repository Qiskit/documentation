---
title: C3XGate
description: API reference for qiskit.circuit.library.C3XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.C3XGate
---

# C3XGate

<span id="qiskit.circuit.library.C3XGate" />

`C3XGate(angle=0.7853981633974483, label=None, ctrl_state=None)`

The 3-qubit controlled X gate.

This implementation is based on Page 17 of \[1].

## References

\[1] Barenco et al., 1995. [https://arxiv.org/pdf/quant-ph/9503016.pdf](https://arxiv.org/pdf/quant-ph/9503016.pdf)

Create a new 3-qubit controlled X gate.

**Parameters**

*   **angle** (*float*) – The angle used in the controlled-U1 gates. An angle of π/4 yields the 3-qubit controlled X gate, an angle of π/8 the 3-qubit controlled sqrt(X) gate.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`C3XGate.ctrl_state`](qiskit.circuit.library.C3XGate.ctrl_state "qiskit.circuit.library.C3XGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`C3XGate.decompositions`](qiskit.circuit.library.C3XGate.decompositions "qiskit.circuit.library.C3XGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`C3XGate.definition`](qiskit.circuit.library.C3XGate.definition "qiskit.circuit.library.C3XGate.definition")             | Return definition in terms of other basic gates.                              |
| [`C3XGate.label`](qiskit.circuit.library.C3XGate.label "qiskit.circuit.library.C3XGate.label")                            | Return gate label                                                             |
| [`C3XGate.params`](qiskit.circuit.library.C3XGate.params "qiskit.circuit.library.C3XGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`C3XGate.add_decomposition`](qiskit.circuit.library.C3XGate.add_decomposition "qiskit.circuit.library.C3XGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`C3XGate.assemble`](qiskit.circuit.library.C3XGate.assemble "qiskit.circuit.library.C3XGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`C3XGate.broadcast_arguments`](qiskit.circuit.library.C3XGate.broadcast_arguments "qiskit.circuit.library.C3XGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`C3XGate.c_if`](qiskit.circuit.library.C3XGate.c_if "qiskit.circuit.library.C3XGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`C3XGate.control`](qiskit.circuit.library.C3XGate.control "qiskit.circuit.library.C3XGate.control")(\[num\_ctrl\_qubits, label, …])                   | Controlled version of this gate.                                         |
| [`C3XGate.copy`](qiskit.circuit.library.C3XGate.copy "qiskit.circuit.library.C3XGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`C3XGate.inverse`](qiskit.circuit.library.C3XGate.inverse "qiskit.circuit.library.C3XGate.inverse")()                                                 | Invert this gate.                                                        |
| [`C3XGate.is_parameterized`](qiskit.circuit.library.C3XGate.is_parameterized "qiskit.circuit.library.C3XGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`C3XGate.mirror`](qiskit.circuit.library.C3XGate.mirror "qiskit.circuit.library.C3XGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`C3XGate.power`](qiskit.circuit.library.C3XGate.power "qiskit.circuit.library.C3XGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`C3XGate.qasm`](qiskit.circuit.library.C3XGate.qasm "qiskit.circuit.library.C3XGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`C3XGate.repeat`](qiskit.circuit.library.C3XGate.repeat "qiskit.circuit.library.C3XGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`C3XGate.to_matrix`](qiskit.circuit.library.C3XGate.to_matrix "qiskit.circuit.library.C3XGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

