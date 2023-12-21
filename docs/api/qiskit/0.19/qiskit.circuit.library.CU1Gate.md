---
title: CU1Gate
description: API reference for qiskit.circuit.library.CU1Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CU1Gate
---

# CU1Gate

<span id="qiskit.circuit.library.CU1Gate" />

`CU1Gate(theta, label=None, ctrl_state=None)`

Controlled-U1 gate.

This is a diagonal and symmetric gate that induces a phase on the state of the target qubit, depending on the control state.

**Circuit symbol:**

```python
q_0: ─■──
      │λ
q_1: ─■──
```

**Matrix representation:**

$$
\begin{split}CU1 =
    |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes U1 =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 0 & 0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

<Admonition title="See also" type="note">
  `CRZGate`: Due to the global phase difference in the matrix definitions of U1 and RZ, CU1 and CRZ are different gates with a relative phase difference.
</Admonition>

Create new CU1 gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CU1Gate.ctrl_state`](qiskit.circuit.library.CU1Gate.ctrl_state "qiskit.circuit.library.CU1Gate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CU1Gate.decompositions`](qiskit.circuit.library.CU1Gate.decompositions "qiskit.circuit.library.CU1Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CU1Gate.definition`](qiskit.circuit.library.CU1Gate.definition "qiskit.circuit.library.CU1Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`CU1Gate.label`](qiskit.circuit.library.CU1Gate.label "qiskit.circuit.library.CU1Gate.label")                            | Return gate label                                                             |
| [`CU1Gate.params`](qiskit.circuit.library.CU1Gate.params "qiskit.circuit.library.CU1Gate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`CU1Gate.add_decomposition`](qiskit.circuit.library.CU1Gate.add_decomposition "qiskit.circuit.library.CU1Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CU1Gate.assemble`](qiskit.circuit.library.CU1Gate.assemble "qiskit.circuit.library.CU1Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CU1Gate.broadcast_arguments`](qiskit.circuit.library.CU1Gate.broadcast_arguments "qiskit.circuit.library.CU1Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CU1Gate.c_if`](qiskit.circuit.library.CU1Gate.c_if "qiskit.circuit.library.CU1Gate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CU1Gate.control`](qiskit.circuit.library.CU1Gate.control "qiskit.circuit.library.CU1Gate.control")(\[num\_ctrl\_qubits, label, …])                   | Controlled version of this gate.                                         |
| [`CU1Gate.copy`](qiskit.circuit.library.CU1Gate.copy "qiskit.circuit.library.CU1Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CU1Gate.inverse`](qiskit.circuit.library.CU1Gate.inverse "qiskit.circuit.library.CU1Gate.inverse")()                                                 | Return inverted CU1 gate ($CU1(\lambda){\dagger} = CU1(-\lambda)$)       |
| [`CU1Gate.is_parameterized`](qiskit.circuit.library.CU1Gate.is_parameterized "qiskit.circuit.library.CU1Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CU1Gate.mirror`](qiskit.circuit.library.CU1Gate.mirror "qiskit.circuit.library.CU1Gate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CU1Gate.power`](qiskit.circuit.library.CU1Gate.power "qiskit.circuit.library.CU1Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CU1Gate.qasm`](qiskit.circuit.library.CU1Gate.qasm "qiskit.circuit.library.CU1Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CU1Gate.repeat`](qiskit.circuit.library.CU1Gate.repeat "qiskit.circuit.library.CU1Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CU1Gate.to_matrix`](qiskit.circuit.library.CU1Gate.to_matrix "qiskit.circuit.library.CU1Gate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

