---
title: CRYGate
description: API reference for qiskit.circuit.library.CRYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CRYGate
---

# CRYGate

<span id="qiskit.circuit.library.CRYGate" />

`CRYGate(theta, label=None, ctrl_state=None)`

Controlled-RY gate.

**Circuit symbol:**

> **q\_0: ────■────**
>
> ┌───┴───┐
>
> **q\_1: ┤ Ry(ϴ) ├**
>
> └───────┘

**Matrix representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CRY(\theta)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| + RY(\theta) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0         & 0 & 0 \\
        0 & \cos{\th} & 0 & -\sin{\th} \\
        0 & 0         & 1 & 0 \\
        0 & \sin{\th} & 0 & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───────┐
  q_0: ┤ Ry(ϴ) ├
       └───┬───┘
  q_1: ────■────
  ```

  $$
   \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CRY(\theta)\ q_1, q_0 =
  |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes RY(\theta) =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & \cos{\th} & -\sin{\th} \\
          0 & 0 & \sin{\th} & \cos{\th}
      \end{pmatrix}\end{split}\end{aligned}\end{align} 
  $$
</Admonition>

Create new CRY gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CRYGate.ctrl_state`](qiskit.circuit.library.CRYGate.ctrl_state "qiskit.circuit.library.CRYGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CRYGate.decompositions`](qiskit.circuit.library.CRYGate.decompositions "qiskit.circuit.library.CRYGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CRYGate.definition`](qiskit.circuit.library.CRYGate.definition "qiskit.circuit.library.CRYGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CRYGate.label`](qiskit.circuit.library.CRYGate.label "qiskit.circuit.library.CRYGate.label")                            | Return gate label                                                             |
| [`CRYGate.params`](qiskit.circuit.library.CRYGate.params "qiskit.circuit.library.CRYGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`CRYGate.add_decomposition`](qiskit.circuit.library.CRYGate.add_decomposition "qiskit.circuit.library.CRYGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CRYGate.assemble`](qiskit.circuit.library.CRYGate.assemble "qiskit.circuit.library.CRYGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CRYGate.broadcast_arguments`](qiskit.circuit.library.CRYGate.broadcast_arguments "qiskit.circuit.library.CRYGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CRYGate.c_if`](qiskit.circuit.library.CRYGate.c_if "qiskit.circuit.library.CRYGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CRYGate.control`](qiskit.circuit.library.CRYGate.control "qiskit.circuit.library.CRYGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CRYGate.copy`](qiskit.circuit.library.CRYGate.copy "qiskit.circuit.library.CRYGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CRYGate.inverse`](qiskit.circuit.library.CRYGate.inverse "qiskit.circuit.library.CRYGate.inverse")()                                                 | Return inverse RY gate (i.e.                                             |
| [`CRYGate.is_parameterized`](qiskit.circuit.library.CRYGate.is_parameterized "qiskit.circuit.library.CRYGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CRYGate.mirror`](qiskit.circuit.library.CRYGate.mirror "qiskit.circuit.library.CRYGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CRYGate.power`](qiskit.circuit.library.CRYGate.power "qiskit.circuit.library.CRYGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CRYGate.qasm`](qiskit.circuit.library.CRYGate.qasm "qiskit.circuit.library.CRYGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CRYGate.repeat`](qiskit.circuit.library.CRYGate.repeat "qiskit.circuit.library.CRYGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CRYGate.to_matrix`](qiskit.circuit.library.CRYGate.to_matrix "qiskit.circuit.library.CRYGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

