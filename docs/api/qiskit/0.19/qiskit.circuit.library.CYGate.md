---
title: CYGate
description: API reference for qiskit.circuit.library.CYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CYGate
---

# CYGate

<span id="qiskit.circuit.library.CYGate" />

`CYGate(label=None, ctrl_state=None)`

Controlled-Y gate.

**Circuit symbol:**

```python
q_0: ──■──
     ┌─┴─┐
q_1: ┤ Y ├
     └───┘
```

**Matrix representation:**

$$
\begin{split}CY\ q_0, q_1 =
I \otimes |0 \rangle\langle 0| + Y \otimes |1 \rangle\langle 1|  =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 0 & -i \\
        0 & 0 & 1 & 0 \\
        0 & i & 0 & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───┐
  q_0: ┤ Y ├
       └─┬─┘
  q_1: ──■──
  ```

  $$
  \begin{split}CY\ q_1, q_0 =
      |0 \rangle\langle 0| \otimes I + |1 \rangle\langle 1| \otimes Y =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & 0 & -i \\
          0 & 0 & i & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CY gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CYGate.ctrl_state`](qiskit.circuit.library.CYGate.ctrl_state "qiskit.circuit.library.CYGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CYGate.decompositions`](qiskit.circuit.library.CYGate.decompositions "qiskit.circuit.library.CYGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CYGate.definition`](qiskit.circuit.library.CYGate.definition "qiskit.circuit.library.CYGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CYGate.label`](qiskit.circuit.library.CYGate.label "qiskit.circuit.library.CYGate.label")                            | Return gate label                                                             |
| [`CYGate.params`](qiskit.circuit.library.CYGate.params "qiskit.circuit.library.CYGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`CYGate.add_decomposition`](qiskit.circuit.library.CYGate.add_decomposition "qiskit.circuit.library.CYGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CYGate.assemble`](qiskit.circuit.library.CYGate.assemble "qiskit.circuit.library.CYGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CYGate.broadcast_arguments`](qiskit.circuit.library.CYGate.broadcast_arguments "qiskit.circuit.library.CYGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CYGate.c_if`](qiskit.circuit.library.CYGate.c_if "qiskit.circuit.library.CYGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CYGate.control`](qiskit.circuit.library.CYGate.control "qiskit.circuit.library.CYGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CYGate.copy`](qiskit.circuit.library.CYGate.copy "qiskit.circuit.library.CYGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CYGate.inverse`](qiskit.circuit.library.CYGate.inverse "qiskit.circuit.library.CYGate.inverse")()                                                 | Return inverted CY gate (itself).                                        |
| [`CYGate.is_parameterized`](qiskit.circuit.library.CYGate.is_parameterized "qiskit.circuit.library.CYGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CYGate.mirror`](qiskit.circuit.library.CYGate.mirror "qiskit.circuit.library.CYGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CYGate.power`](qiskit.circuit.library.CYGate.power "qiskit.circuit.library.CYGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CYGate.qasm`](qiskit.circuit.library.CYGate.qasm "qiskit.circuit.library.CYGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CYGate.repeat`](qiskit.circuit.library.CYGate.repeat "qiskit.circuit.library.CYGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CYGate.to_matrix`](qiskit.circuit.library.CYGate.to_matrix "qiskit.circuit.library.CYGate.to_matrix")()                                           | Return a numpy.array for the CY gate.                                    |

