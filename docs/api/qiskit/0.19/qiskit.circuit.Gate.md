---
title: Gate
description: API reference for qiskit.circuit.Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Gate
---

# Gate

<span id="qiskit.circuit.Gate" />

`Gate(name, num_qubits, params, label=None)`

Unitary gate.

Create a new gate.

**Parameters**

*   **name** (`str`) – The Qobj name of the gate.
*   **num\_qubits** (`int`) – The number of qubits the gate acts on.
*   **params** (`List`) – A list of parameters.
*   **label** (`Optional`\[`str`]) – An optional label for the gate.

## Attributes

|                                                                                                  |                                                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`Gate.decompositions`](qiskit.circuit.Gate.decompositions "qiskit.circuit.Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Gate.definition`](qiskit.circuit.Gate.definition "qiskit.circuit.Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`Gate.label`](qiskit.circuit.Gate.label "qiskit.circuit.Gate.label")                            | Return gate label                                                             |
| [`Gate.params`](qiskit.circuit.Gate.params "qiskit.circuit.Gate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                               |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`Gate.add_decomposition`](qiskit.circuit.Gate.add_decomposition "qiskit.circuit.Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`Gate.assemble`](qiskit.circuit.Gate.assemble "qiskit.circuit.Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`Gate.broadcast_arguments`](qiskit.circuit.Gate.broadcast_arguments "qiskit.circuit.Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`Gate.c_if`](qiskit.circuit.Gate.c_if "qiskit.circuit.Gate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`Gate.control`](qiskit.circuit.Gate.control "qiskit.circuit.Gate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`Gate.copy`](qiskit.circuit.Gate.copy "qiskit.circuit.Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`Gate.inverse`](qiskit.circuit.Gate.inverse "qiskit.circuit.Gate.inverse")()                                                 | Invert this instruction.                                                 |
| [`Gate.is_parameterized`](qiskit.circuit.Gate.is_parameterized "qiskit.circuit.Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`Gate.mirror`](qiskit.circuit.Gate.mirror "qiskit.circuit.Gate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`Gate.power`](qiskit.circuit.Gate.power "qiskit.circuit.Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`Gate.qasm`](qiskit.circuit.Gate.qasm "qiskit.circuit.Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`Gate.repeat`](qiskit.circuit.Gate.repeat "qiskit.circuit.Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`Gate.to_matrix`](qiskit.circuit.Gate.to_matrix "qiskit.circuit.Gate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

