---
title: UnitaryGate
description: API reference for qiskit.extensions.UnitaryGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.UnitaryGate
---

# UnitaryGate

<span id="qiskit.extensions.UnitaryGate" />

`UnitaryGate(data, label=None)`

Class for representing unitary gates

Create a gate from a numeric unitary matrix.

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – unitary operator.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Attributes

|                                                                                                                             |                                                                               |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`UnitaryGate.decompositions`](qiskit.extensions.UnitaryGate.decompositions "qiskit.extensions.UnitaryGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`UnitaryGate.definition`](qiskit.extensions.UnitaryGate.definition "qiskit.extensions.UnitaryGate.definition")             | Return definition in terms of other basic gates.                              |
| [`UnitaryGate.label`](qiskit.extensions.UnitaryGate.label "qiskit.extensions.UnitaryGate.label")                            | Return gate label                                                             |
| [`UnitaryGate.params`](qiskit.extensions.UnitaryGate.params "qiskit.extensions.UnitaryGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                          |                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`UnitaryGate.add_decomposition`](qiskit.extensions.UnitaryGate.add_decomposition "qiskit.extensions.UnitaryGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                                     |
| [`UnitaryGate.adjoint`](qiskit.extensions.UnitaryGate.adjoint "qiskit.extensions.UnitaryGate.adjoint")()                                                 | Return the adjoint of the unitary.                                                                                           |
| [`UnitaryGate.assemble`](qiskit.extensions.UnitaryGate.assemble "qiskit.extensions.UnitaryGate.assemble")()                                              | Assemble a QasmQobjInstruction                                                                                               |
| [`UnitaryGate.broadcast_arguments`](qiskit.extensions.UnitaryGate.broadcast_arguments "qiskit.extensions.UnitaryGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.                                                               |
| [`UnitaryGate.c_if`](qiskit.extensions.UnitaryGate.c_if "qiskit.extensions.UnitaryGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.                                                                 |
| [`UnitaryGate.conjugate`](qiskit.extensions.UnitaryGate.conjugate "qiskit.extensions.UnitaryGate.conjugate")()                                           | Return the conjugate of the unitary.                                                                                         |
| [`UnitaryGate.control`](qiskit.extensions.UnitaryGate.control "qiskit.extensions.UnitaryGate.control")(\[num\_ctrl\_qubits, …])                          | Return controlled version of gate                                                                                            |
| [`UnitaryGate.copy`](qiskit.extensions.UnitaryGate.copy "qiskit.extensions.UnitaryGate.copy")(\[name])                                                   | Copy of the instruction.                                                                                                     |
| [`UnitaryGate.inverse`](qiskit.extensions.UnitaryGate.inverse "qiskit.extensions.UnitaryGate.inverse")()                                                 | Return the adjoint of the unitary.                                                                                           |
| [`UnitaryGate.is_parameterized`](qiskit.extensions.UnitaryGate.is_parameterized "qiskit.extensions.UnitaryGate.is_parameterized")()                      | Return True .IFF.                                                                                                            |
| [`UnitaryGate.mirror`](qiskit.extensions.UnitaryGate.mirror "qiskit.extensions.UnitaryGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.                                                                 |
| [`UnitaryGate.power`](qiskit.extensions.UnitaryGate.power "qiskit.extensions.UnitaryGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                                                                     |
| [`UnitaryGate.qasm`](qiskit.extensions.UnitaryGate.qasm "qiskit.extensions.UnitaryGate.qasm")()                                                          | The qasm for a custom unitary gate This is achieved by adding a custom gate that corresponds to the definition of this gate. |
| [`UnitaryGate.repeat`](qiskit.extensions.UnitaryGate.repeat "qiskit.extensions.UnitaryGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.                                                                 |
| [`UnitaryGate.to_matrix`](qiskit.extensions.UnitaryGate.to_matrix "qiskit.extensions.UnitaryGate.to_matrix")()                                           | Return matrix for the unitary.                                                                                               |
| [`UnitaryGate.transpose`](qiskit.extensions.UnitaryGate.transpose "qiskit.extensions.UnitaryGate.transpose")()                                           | Return the transpose of the unitary.                                                                                         |

