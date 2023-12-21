---
title: TGate
description: API reference for qiskit.circuit.library.TGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.TGate
---

# TGate

<span id="qiskit.circuit.library.TGate" />

`TGate(label=None)`

Single qubit T gate (Z\*\*0.25).

It induces a $\pi/4$ phase, and is sometimes called the pi/8 gate (because of how the RZ(pi/4) matrix looks like).

This is a non-Clifford gate and a fourth-root of Pauli-Z.

**Matrix Representation:**

$$
\begin{split}T = \begin{pmatrix}
        1 & 0 \\
        0 & 1+i
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ T ├
     └───┘
```

Equivalent to a $\pi/4$ radian rotation about the Z axis.

Create new T gate.

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`TGate.decompositions`](qiskit.circuit.library.TGate.decompositions "qiskit.circuit.library.TGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`TGate.definition`](qiskit.circuit.library.TGate.definition "qiskit.circuit.library.TGate.definition")             | Return definition in terms of other basic gates.                              |
| [`TGate.label`](qiskit.circuit.library.TGate.label "qiskit.circuit.library.TGate.label")                            | Return gate label                                                             |
| [`TGate.params`](qiskit.circuit.library.TGate.params "qiskit.circuit.library.TGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                  |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`TGate.add_decomposition`](qiskit.circuit.library.TGate.add_decomposition "qiskit.circuit.library.TGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`TGate.assemble`](qiskit.circuit.library.TGate.assemble "qiskit.circuit.library.TGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`TGate.broadcast_arguments`](qiskit.circuit.library.TGate.broadcast_arguments "qiskit.circuit.library.TGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`TGate.c_if`](qiskit.circuit.library.TGate.c_if "qiskit.circuit.library.TGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`TGate.control`](qiskit.circuit.library.TGate.control "qiskit.circuit.library.TGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`TGate.copy`](qiskit.circuit.library.TGate.copy "qiskit.circuit.library.TGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`TGate.inverse`](qiskit.circuit.library.TGate.inverse "qiskit.circuit.library.TGate.inverse")()                                                 | Return inverse T gate (i.e.                                              |
| [`TGate.is_parameterized`](qiskit.circuit.library.TGate.is_parameterized "qiskit.circuit.library.TGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`TGate.mirror`](qiskit.circuit.library.TGate.mirror "qiskit.circuit.library.TGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`TGate.power`](qiskit.circuit.library.TGate.power "qiskit.circuit.library.TGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`TGate.qasm`](qiskit.circuit.library.TGate.qasm "qiskit.circuit.library.TGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`TGate.repeat`](qiskit.circuit.library.TGate.repeat "qiskit.circuit.library.TGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`TGate.to_matrix`](qiskit.circuit.library.TGate.to_matrix "qiskit.circuit.library.TGate.to_matrix")()                                           | Return a numpy.array for the T gate.                                     |

