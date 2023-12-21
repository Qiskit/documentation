---
title: SdgGate
description: API reference for qiskit.circuit.library.SdgGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SdgGate
---

# SdgGate

<span id="qiskit.circuit.library.SdgGate" />

`SdgGate(label=None)`

Single qubit S-adjoint gate (\~Z\*\*0.5).

It induces a $-\pi/2$ phase.

This is a Clifford gate and a square-root of Pauli-Z.

**Matrix Representation:**

$$
\begin{split}Sdg = \begin{pmatrix}
        1 & 0 \\
        0 & -i
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌─────┐
q_0: ┤ Sdg ├
     └─────┘
```

Equivalent to a $\pi/2$ radian rotation about the Z axis.

Create new Sdg gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SdgGate.decompositions`](qiskit.circuit.library.SdgGate.decompositions "qiskit.circuit.library.SdgGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SdgGate.definition`](qiskit.circuit.library.SdgGate.definition "qiskit.circuit.library.SdgGate.definition")             | Return definition in terms of other basic gates.                              |
| [`SdgGate.label`](qiskit.circuit.library.SdgGate.label "qiskit.circuit.library.SdgGate.label")                            | Return gate label                                                             |
| [`SdgGate.params`](qiskit.circuit.library.SdgGate.params "qiskit.circuit.library.SdgGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`SdgGate.add_decomposition`](qiskit.circuit.library.SdgGate.add_decomposition "qiskit.circuit.library.SdgGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SdgGate.assemble`](qiskit.circuit.library.SdgGate.assemble "qiskit.circuit.library.SdgGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`SdgGate.broadcast_arguments`](qiskit.circuit.library.SdgGate.broadcast_arguments "qiskit.circuit.library.SdgGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`SdgGate.c_if`](qiskit.circuit.library.SdgGate.c_if "qiskit.circuit.library.SdgGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`SdgGate.control`](qiskit.circuit.library.SdgGate.control "qiskit.circuit.library.SdgGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`SdgGate.copy`](qiskit.circuit.library.SdgGate.copy "qiskit.circuit.library.SdgGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`SdgGate.inverse`](qiskit.circuit.library.SdgGate.inverse "qiskit.circuit.library.SdgGate.inverse")()                                                 | Return inverse of Sdg (SGate).                                           |
| [`SdgGate.is_parameterized`](qiskit.circuit.library.SdgGate.is_parameterized "qiskit.circuit.library.SdgGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`SdgGate.mirror`](qiskit.circuit.library.SdgGate.mirror "qiskit.circuit.library.SdgGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`SdgGate.power`](qiskit.circuit.library.SdgGate.power "qiskit.circuit.library.SdgGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`SdgGate.qasm`](qiskit.circuit.library.SdgGate.qasm "qiskit.circuit.library.SdgGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`SdgGate.repeat`](qiskit.circuit.library.SdgGate.repeat "qiskit.circuit.library.SdgGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`SdgGate.to_matrix`](qiskit.circuit.library.SdgGate.to_matrix "qiskit.circuit.library.SdgGate.to_matrix")()                                           | Return a numpy.array for the Sdg gate.                                   |

