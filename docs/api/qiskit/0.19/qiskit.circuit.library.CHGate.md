---
title: CHGate
description: API reference for qiskit.circuit.library.CHGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CHGate
---

# CHGate

<span id="qiskit.circuit.library.CHGate" />

`CHGate(label=None, ctrl_state=None)`

Controlled-Hadamard gate.

Applies a Hadamard on the target qubit if the control is in the $|1\rangle$ state.

**Circuit symbol:**

> **q\_0: ──■──**
>
> ┌─┴─┐
>
> **q\_1: ┤ H ├**
>
> └───┘

**Matrix Representation:**

$$
\begin{split}CH\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| + H \otimes |1\rangle\langle 1| =
    \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 1 \\
        0 & 0 & 1 & 0 \\
        0 & 1 & 0 & -1
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───┐
  q_0: ┤ H ├
       └─┬─┘
  q_1: ──■──
  ```

  $$
  \begin{split}CH\ q_1, q_0 =
      |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes H =
      \frac{1}{\sqrt{2}}
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & 1 & 1 \\
          0 & 0 & 1 & -1
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CH gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CHGate.ctrl_state`](qiskit.circuit.library.CHGate.ctrl_state "qiskit.circuit.library.CHGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CHGate.decompositions`](qiskit.circuit.library.CHGate.decompositions "qiskit.circuit.library.CHGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CHGate.definition`](qiskit.circuit.library.CHGate.definition "qiskit.circuit.library.CHGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CHGate.label`](qiskit.circuit.library.CHGate.label "qiskit.circuit.library.CHGate.label")                            | Return gate label                                                             |
| [`CHGate.params`](qiskit.circuit.library.CHGate.params "qiskit.circuit.library.CHGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`CHGate.add_decomposition`](qiskit.circuit.library.CHGate.add_decomposition "qiskit.circuit.library.CHGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CHGate.assemble`](qiskit.circuit.library.CHGate.assemble "qiskit.circuit.library.CHGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CHGate.broadcast_arguments`](qiskit.circuit.library.CHGate.broadcast_arguments "qiskit.circuit.library.CHGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CHGate.c_if`](qiskit.circuit.library.CHGate.c_if "qiskit.circuit.library.CHGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CHGate.control`](qiskit.circuit.library.CHGate.control "qiskit.circuit.library.CHGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CHGate.copy`](qiskit.circuit.library.CHGate.copy "qiskit.circuit.library.CHGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CHGate.inverse`](qiskit.circuit.library.CHGate.inverse "qiskit.circuit.library.CHGate.inverse")()                                                 | Return inverted CH gate (itself).                                        |
| [`CHGate.is_parameterized`](qiskit.circuit.library.CHGate.is_parameterized "qiskit.circuit.library.CHGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CHGate.mirror`](qiskit.circuit.library.CHGate.mirror "qiskit.circuit.library.CHGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CHGate.power`](qiskit.circuit.library.CHGate.power "qiskit.circuit.library.CHGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CHGate.qasm`](qiskit.circuit.library.CHGate.qasm "qiskit.circuit.library.CHGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CHGate.repeat`](qiskit.circuit.library.CHGate.repeat "qiskit.circuit.library.CHGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CHGate.to_matrix`](qiskit.circuit.library.CHGate.to_matrix "qiskit.circuit.library.CHGate.to_matrix")()                                           | Return a numpy.array for the CH gate.                                    |

