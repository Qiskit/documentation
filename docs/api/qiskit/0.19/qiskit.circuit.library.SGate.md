---
title: SGate
description: API reference for qiskit.circuit.library.SGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SGate
---

# SGate

<span id="qiskit.circuit.library.SGate" />

`SGate(label=None)`

Single qubit S gate (Z\*\*0.5).

It induces a $\pi/2$ phase, and is sometimes called the P gate (phase).

This is a Clifford gate and a square-root of Pauli-Z.

**Matrix Representation:**

$$
\begin{split}S = \begin{pmatrix}
        1 & 0 \\
        0 & i
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ S ├
     └───┘
```

Equivalent to a $\pi/2$ radian rotation about the Z axis.

Create new S gate.

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SGate.decompositions`](qiskit.circuit.library.SGate.decompositions "qiskit.circuit.library.SGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SGate.definition`](qiskit.circuit.library.SGate.definition "qiskit.circuit.library.SGate.definition")             | Return definition in terms of other basic gates.                              |
| [`SGate.label`](qiskit.circuit.library.SGate.label "qiskit.circuit.library.SGate.label")                            | Return gate label                                                             |
| [`SGate.params`](qiskit.circuit.library.SGate.params "qiskit.circuit.library.SGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                  |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`SGate.add_decomposition`](qiskit.circuit.library.SGate.add_decomposition "qiskit.circuit.library.SGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SGate.assemble`](qiskit.circuit.library.SGate.assemble "qiskit.circuit.library.SGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`SGate.broadcast_arguments`](qiskit.circuit.library.SGate.broadcast_arguments "qiskit.circuit.library.SGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`SGate.c_if`](qiskit.circuit.library.SGate.c_if "qiskit.circuit.library.SGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`SGate.control`](qiskit.circuit.library.SGate.control "qiskit.circuit.library.SGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`SGate.copy`](qiskit.circuit.library.SGate.copy "qiskit.circuit.library.SGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`SGate.inverse`](qiskit.circuit.library.SGate.inverse "qiskit.circuit.library.SGate.inverse")()                                                 | Return inverse of S (SdgGate).                                           |
| [`SGate.is_parameterized`](qiskit.circuit.library.SGate.is_parameterized "qiskit.circuit.library.SGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`SGate.mirror`](qiskit.circuit.library.SGate.mirror "qiskit.circuit.library.SGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`SGate.power`](qiskit.circuit.library.SGate.power "qiskit.circuit.library.SGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`SGate.qasm`](qiskit.circuit.library.SGate.qasm "qiskit.circuit.library.SGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`SGate.repeat`](qiskit.circuit.library.SGate.repeat "qiskit.circuit.library.SGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`SGate.to_matrix`](qiskit.circuit.library.SGate.to_matrix "qiskit.circuit.library.SGate.to_matrix")()                                           | Return a numpy.array for the S gate.                                     |

