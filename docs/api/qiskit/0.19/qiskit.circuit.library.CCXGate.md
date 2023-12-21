---
title: CCXGate
description: API reference for qiskit.circuit.library.CCXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CCXGate
---

# CCXGate

<span id="qiskit.circuit.library.CCXGate" />

`CCXGate(label=None, ctrl_state=None)`

CCX gate, also known as Toffoli gate.

**Circuit symbol:**

```python
q_0: ──■──
       │
q_1: ──■──
     ┌─┴─┐
q_2: ┤ X ├
     └───┘
```

**Matrix representation:**

$$
\begin{split}CCX q_0, q_1, q_2 =
    |0 \rangle \langle 0| \otimes I \otimes I + |1 \rangle \langle 1| \otimes CX =
   \begin{pmatrix}
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
        0 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\
        0 & 0 & 1 & 0 & 0 & 0 & 0 & 0\\
        0 & 0 & 0 & 0 & 0 & 0 & 0 & 1\\
        0 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\
        0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
        0 & 0 & 0 & 0 & 0 & 0 & 1 & 0\\
        0 & 0 & 0 & 1 & 0 & 0 & 0 & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_2 and q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───┐
  q_0: ┤ X ├
       └─┬─┘
  q_1: ──■──
         │
  q_2: ──■──
  ```

  $$
  \begin{split}CCX\ q_2, q_1, q_0 =
      I \otimes I \otimes |0 \rangle \langle 0| + CX \otimes |1 \rangle \langle 1| =
      \begin{pmatrix}
          1 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
          0 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\
          0 & 0 & 1 & 0 & 0 & 0 & 0 & 0\\
          0 & 0 & 0 & 1 & 0 & 0 & 0 & 0\\
          0 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\
          0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 1\\
          0 & 0 & 0 & 0 & 0 & 0 & 1 & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CCX gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CCXGate.ctrl_state`](qiskit.circuit.library.CCXGate.ctrl_state "qiskit.circuit.library.CCXGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CCXGate.decompositions`](qiskit.circuit.library.CCXGate.decompositions "qiskit.circuit.library.CCXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CCXGate.definition`](qiskit.circuit.library.CCXGate.definition "qiskit.circuit.library.CCXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CCXGate.label`](qiskit.circuit.library.CCXGate.label "qiskit.circuit.library.CCXGate.label")                            | Return gate label                                                             |
| [`CCXGate.params`](qiskit.circuit.library.CCXGate.params "qiskit.circuit.library.CCXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`CCXGate.add_decomposition`](qiskit.circuit.library.CCXGate.add_decomposition "qiskit.circuit.library.CCXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CCXGate.assemble`](qiskit.circuit.library.CCXGate.assemble "qiskit.circuit.library.CCXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CCXGate.broadcast_arguments`](qiskit.circuit.library.CCXGate.broadcast_arguments "qiskit.circuit.library.CCXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CCXGate.c_if`](qiskit.circuit.library.CCXGate.c_if "qiskit.circuit.library.CCXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CCXGate.control`](qiskit.circuit.library.CCXGate.control "qiskit.circuit.library.CCXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Controlled version of this gate.                                         |
| [`CCXGate.copy`](qiskit.circuit.library.CCXGate.copy "qiskit.circuit.library.CCXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CCXGate.inverse`](qiskit.circuit.library.CCXGate.inverse "qiskit.circuit.library.CCXGate.inverse")()                                                 | Return an inverted CCX gate (also a CCX).                                |
| [`CCXGate.is_parameterized`](qiskit.circuit.library.CCXGate.is_parameterized "qiskit.circuit.library.CCXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CCXGate.mirror`](qiskit.circuit.library.CCXGate.mirror "qiskit.circuit.library.CCXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CCXGate.power`](qiskit.circuit.library.CCXGate.power "qiskit.circuit.library.CCXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CCXGate.qasm`](qiskit.circuit.library.CCXGate.qasm "qiskit.circuit.library.CCXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CCXGate.repeat`](qiskit.circuit.library.CCXGate.repeat "qiskit.circuit.library.CCXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CCXGate.to_matrix`](qiskit.circuit.library.CCXGate.to_matrix "qiskit.circuit.library.CCXGate.to_matrix")()                                           | Return a numpy.array for the CCX gate.                                   |

