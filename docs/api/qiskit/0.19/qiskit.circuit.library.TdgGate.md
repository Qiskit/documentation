---
title: TdgGate
description: API reference for qiskit.circuit.library.TdgGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.TdgGate
---

# TdgGate

<span id="qiskit.circuit.library.TdgGate" />

`TdgGate(label=None)`

Single qubit T-adjoint gate (\~Z\*\*0.25).

It induces a $-\pi/4$ phase.

This is a non-Clifford gate and a fourth-root of Pauli-Z.

**Matrix Representation:**

$$
\begin{split}Tdg = \begin{pmatrix}
        1 & 0 \\
        0 & 1-i
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌─────┐
q_0: ┤ Tdg ├
     └─────┘
```

Equivalent to a $\pi/2$ radian rotation about the Z axis.

Create new Tdg gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`TdgGate.decompositions`](qiskit.circuit.library.TdgGate.decompositions "qiskit.circuit.library.TdgGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`TdgGate.definition`](qiskit.circuit.library.TdgGate.definition "qiskit.circuit.library.TdgGate.definition")             | Return definition in terms of other basic gates.                              |
| [`TdgGate.label`](qiskit.circuit.library.TdgGate.label "qiskit.circuit.library.TdgGate.label")                            | Return gate label                                                             |
| [`TdgGate.params`](qiskit.circuit.library.TdgGate.params "qiskit.circuit.library.TdgGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`TdgGate.add_decomposition`](qiskit.circuit.library.TdgGate.add_decomposition "qiskit.circuit.library.TdgGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`TdgGate.assemble`](qiskit.circuit.library.TdgGate.assemble "qiskit.circuit.library.TdgGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`TdgGate.broadcast_arguments`](qiskit.circuit.library.TdgGate.broadcast_arguments "qiskit.circuit.library.TdgGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`TdgGate.c_if`](qiskit.circuit.library.TdgGate.c_if "qiskit.circuit.library.TdgGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`TdgGate.control`](qiskit.circuit.library.TdgGate.control "qiskit.circuit.library.TdgGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`TdgGate.copy`](qiskit.circuit.library.TdgGate.copy "qiskit.circuit.library.TdgGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`TdgGate.inverse`](qiskit.circuit.library.TdgGate.inverse "qiskit.circuit.library.TdgGate.inverse")()                                                 | Return inverse Tdg gate (i.e.                                            |
| [`TdgGate.is_parameterized`](qiskit.circuit.library.TdgGate.is_parameterized "qiskit.circuit.library.TdgGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`TdgGate.mirror`](qiskit.circuit.library.TdgGate.mirror "qiskit.circuit.library.TdgGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`TdgGate.power`](qiskit.circuit.library.TdgGate.power "qiskit.circuit.library.TdgGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`TdgGate.qasm`](qiskit.circuit.library.TdgGate.qasm "qiskit.circuit.library.TdgGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`TdgGate.repeat`](qiskit.circuit.library.TdgGate.repeat "qiskit.circuit.library.TdgGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`TdgGate.to_matrix`](qiskit.circuit.library.TdgGate.to_matrix "qiskit.circuit.library.TdgGate.to_matrix")()                                           | Return a numpy.array for the inverse T gate.                             |

