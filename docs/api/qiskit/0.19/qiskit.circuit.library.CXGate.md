---
title: CXGate
description: API reference for qiskit.circuit.library.CXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CXGate
---

# CXGate

<span id="qiskit.circuit.library.CXGate" />

`CXGate(ctrl_state=None, label=None)`

Controlled-X gate.

**Circuit symbol:**

```python
q_0: ──■──
     ┌─┴─┐
q_1: ┤ X ├
     └───┘
```

**Matrix representation:**

$$
\begin{split}CX\ q_0, q_1 =
    I \otimes |0\rangle\langle0| + X \otimes |1\rangle\langle1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 \\
        0 & 0 & 1 & 0 \\
        0 & 1 & 0 & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───┐
  q_0: ┤ X ├
       └─┬─┘
  q_1: ──■──
  ```

  $$
  \begin{split}CX\ q_1, q_0 =
      |0 \rangle\langle 0| \otimes I + |1 \rangle\langle 1| \otimes X =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & 0 & 1 \\
          0 & 0 & 1 & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

In the computational basis, this gate flips the target qubit if the control qubit is in the $|1\rangle$ state. In this sense it is similar to a classical XOR gate.

$$
`|a, b\rangle \rightarrow |a, a \oplus b\rangle`
$$

Create new CX gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CXGate.ctrl_state`](qiskit.circuit.library.CXGate.ctrl_state "qiskit.circuit.library.CXGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CXGate.decompositions`](qiskit.circuit.library.CXGate.decompositions "qiskit.circuit.library.CXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CXGate.definition`](qiskit.circuit.library.CXGate.definition "qiskit.circuit.library.CXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CXGate.label`](qiskit.circuit.library.CXGate.label "qiskit.circuit.library.CXGate.label")                            | Return gate label                                                             |
| [`CXGate.params`](qiskit.circuit.library.CXGate.params "qiskit.circuit.library.CXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`CXGate.add_decomposition`](qiskit.circuit.library.CXGate.add_decomposition "qiskit.circuit.library.CXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CXGate.assemble`](qiskit.circuit.library.CXGate.assemble "qiskit.circuit.library.CXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CXGate.broadcast_arguments`](qiskit.circuit.library.CXGate.broadcast_arguments "qiskit.circuit.library.CXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CXGate.c_if`](qiskit.circuit.library.CXGate.c_if "qiskit.circuit.library.CXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CXGate.control`](qiskit.circuit.library.CXGate.control "qiskit.circuit.library.CXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a controlled-X gate with more control lines.                      |
| [`CXGate.copy`](qiskit.circuit.library.CXGate.copy "qiskit.circuit.library.CXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CXGate.inverse`](qiskit.circuit.library.CXGate.inverse "qiskit.circuit.library.CXGate.inverse")()                                                 | Return inverted CX gate (itself).                                        |
| [`CXGate.is_parameterized`](qiskit.circuit.library.CXGate.is_parameterized "qiskit.circuit.library.CXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CXGate.mirror`](qiskit.circuit.library.CXGate.mirror "qiskit.circuit.library.CXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CXGate.power`](qiskit.circuit.library.CXGate.power "qiskit.circuit.library.CXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CXGate.qasm`](qiskit.circuit.library.CXGate.qasm "qiskit.circuit.library.CXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CXGate.repeat`](qiskit.circuit.library.CXGate.repeat "qiskit.circuit.library.CXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CXGate.to_matrix`](qiskit.circuit.library.CXGate.to_matrix "qiskit.circuit.library.CXGate.to_matrix")()                                           | Return a numpy.array for the CX gate.                                    |

