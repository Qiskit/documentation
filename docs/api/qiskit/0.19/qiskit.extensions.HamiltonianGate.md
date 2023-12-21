---
title: HamiltonianGate
description: API reference for qiskit.extensions.HamiltonianGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.HamiltonianGate
---

# HamiltonianGate

<span id="qiskit.extensions.HamiltonianGate" />

`HamiltonianGate(data, time, label=None)`

Class for representing evolution by a Hermitian Hamiltonian operator as a gate. This gate resolves to a UnitaryGate U(t) = exp(-1j \* t \* H), which can be decomposed into basis gates if it is 2 qubits or less, or simulated directly in Aer for more qubits.

Create a gate from a hamiltonian operator and evolution time parameter t

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a hermitian operator.
*   **time** (*float*) – time evolution parameter.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Attributes

|                                                                                                                                         |                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`HamiltonianGate.decompositions`](qiskit.extensions.HamiltonianGate.decompositions "qiskit.extensions.HamiltonianGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`HamiltonianGate.definition`](qiskit.extensions.HamiltonianGate.definition "qiskit.extensions.HamiltonianGate.definition")             | Return definition in terms of other basic gates.                              |
| [`HamiltonianGate.label`](qiskit.extensions.HamiltonianGate.label "qiskit.extensions.HamiltonianGate.label")                            | Return gate label                                                             |
| [`HamiltonianGate.params`](qiskit.extensions.HamiltonianGate.params "qiskit.extensions.HamiltonianGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                                      |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`HamiltonianGate.add_decomposition`](qiskit.extensions.HamiltonianGate.add_decomposition "qiskit.extensions.HamiltonianGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`HamiltonianGate.adjoint`](qiskit.extensions.HamiltonianGate.adjoint "qiskit.extensions.HamiltonianGate.adjoint")()                                                 | Return the adjoint of the unitary.                                       |
| [`HamiltonianGate.assemble`](qiskit.extensions.HamiltonianGate.assemble "qiskit.extensions.HamiltonianGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`HamiltonianGate.broadcast_arguments`](qiskit.extensions.HamiltonianGate.broadcast_arguments "qiskit.extensions.HamiltonianGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`HamiltonianGate.c_if`](qiskit.extensions.HamiltonianGate.c_if "qiskit.extensions.HamiltonianGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`HamiltonianGate.conjugate`](qiskit.extensions.HamiltonianGate.conjugate "qiskit.extensions.HamiltonianGate.conjugate")()                                           | Return the conjugate of the Hamiltonian.                                 |
| [`HamiltonianGate.control`](qiskit.extensions.HamiltonianGate.control "qiskit.extensions.HamiltonianGate.control")(\[num\_ctrl\_qubits, …])                          | Return controlled version of gate.                                       |
| [`HamiltonianGate.copy`](qiskit.extensions.HamiltonianGate.copy "qiskit.extensions.HamiltonianGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`HamiltonianGate.inverse`](qiskit.extensions.HamiltonianGate.inverse "qiskit.extensions.HamiltonianGate.inverse")()                                                 | Return the adjoint of the unitary.                                       |
| [`HamiltonianGate.is_parameterized`](qiskit.extensions.HamiltonianGate.is_parameterized "qiskit.extensions.HamiltonianGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`HamiltonianGate.mirror`](qiskit.extensions.HamiltonianGate.mirror "qiskit.extensions.HamiltonianGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`HamiltonianGate.power`](qiskit.extensions.HamiltonianGate.power "qiskit.extensions.HamiltonianGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`HamiltonianGate.qasm`](qiskit.extensions.HamiltonianGate.qasm "qiskit.extensions.HamiltonianGate.qasm")()                                                          | Raise an error, as QASM is not defined for the HamiltonianGate.          |
| [`HamiltonianGate.repeat`](qiskit.extensions.HamiltonianGate.repeat "qiskit.extensions.HamiltonianGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`HamiltonianGate.to_matrix`](qiskit.extensions.HamiltonianGate.to_matrix "qiskit.extensions.HamiltonianGate.to_matrix")()                                           | Return matrix for the unitary.                                           |
| [`HamiltonianGate.transpose`](qiskit.extensions.HamiltonianGate.transpose "qiskit.extensions.HamiltonianGate.transpose")()                                           | Return the transpose of the Hamiltonian.                                 |

