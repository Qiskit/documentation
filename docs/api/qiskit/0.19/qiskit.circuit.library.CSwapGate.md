---
title: CSwapGate
description: API reference for qiskit.circuit.library.CSwapGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CSwapGate
---

# CSwapGate

<span id="qiskit.circuit.library.CSwapGate" />

`CSwapGate(label=None, ctrl_state=None)`

Controlled-X gate.

**Circuit symbol:**

```python
q_0: ─X─
      │
q_1: ─X─
      │
q_2: ─■─
```

**Matrix representation:**

$$
\begin{split}CSWAP\ q_0, q_1, q_2 =
    |0 \rangle \langle 0| \otimes I \otimes I +
    |1 \rangle \langle 1| \otimes SWAP =
    \begin{pmatrix}
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
        0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_2. Thus a textbook matrix for this gate will be:

  ```python
  q_0: ─■─
        │
  q_1: ─X─
        │
  q_2: ─X─
  ```

  $$
  \begin{split}CSWAP\ q_2, q_1, q_0 =
      |0 \rangle \langle 0| \otimes I \otimes I +
      |1 \rangle \langle 1| \otimes SWAP =
      \begin{pmatrix}
          1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
          0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
          0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
          0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
          0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
          0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
      \end{pmatrix}\end{split}
  $$
</Admonition>

In the computational basis, this gate swaps the states of the two target qubits if the control qubit is in the $|1\rangle$ state.

$$
|0, b, c\rangle \rightarrow |0, b, c\rangle
|1, b, c\rangle \rightarrow |1, c, b\rangle
$$

Create new CSWAP gate.

## Attributes

|                                                                                                                                 |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CSwapGate.ctrl_state`](qiskit.circuit.library.CSwapGate.ctrl_state "qiskit.circuit.library.CSwapGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CSwapGate.decompositions`](qiskit.circuit.library.CSwapGate.decompositions "qiskit.circuit.library.CSwapGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CSwapGate.definition`](qiskit.circuit.library.CSwapGate.definition "qiskit.circuit.library.CSwapGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CSwapGate.label`](qiskit.circuit.library.CSwapGate.label "qiskit.circuit.library.CSwapGate.label")                            | Return gate label                                                             |
| [`CSwapGate.params`](qiskit.circuit.library.CSwapGate.params "qiskit.circuit.library.CSwapGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                              |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`CSwapGate.add_decomposition`](qiskit.circuit.library.CSwapGate.add_decomposition "qiskit.circuit.library.CSwapGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CSwapGate.assemble`](qiskit.circuit.library.CSwapGate.assemble "qiskit.circuit.library.CSwapGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CSwapGate.broadcast_arguments`](qiskit.circuit.library.CSwapGate.broadcast_arguments "qiskit.circuit.library.CSwapGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CSwapGate.c_if`](qiskit.circuit.library.CSwapGate.c_if "qiskit.circuit.library.CSwapGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CSwapGate.control`](qiskit.circuit.library.CSwapGate.control "qiskit.circuit.library.CSwapGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CSwapGate.copy`](qiskit.circuit.library.CSwapGate.copy "qiskit.circuit.library.CSwapGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CSwapGate.inverse`](qiskit.circuit.library.CSwapGate.inverse "qiskit.circuit.library.CSwapGate.inverse")()                                                 | Return inverse CSwap gate (itself).                                      |
| [`CSwapGate.is_parameterized`](qiskit.circuit.library.CSwapGate.is_parameterized "qiskit.circuit.library.CSwapGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CSwapGate.mirror`](qiskit.circuit.library.CSwapGate.mirror "qiskit.circuit.library.CSwapGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CSwapGate.power`](qiskit.circuit.library.CSwapGate.power "qiskit.circuit.library.CSwapGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CSwapGate.qasm`](qiskit.circuit.library.CSwapGate.qasm "qiskit.circuit.library.CSwapGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CSwapGate.repeat`](qiskit.circuit.library.CSwapGate.repeat "qiskit.circuit.library.CSwapGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CSwapGate.to_matrix`](qiskit.circuit.library.CSwapGate.to_matrix "qiskit.circuit.library.CSwapGate.to_matrix")()                                           | Return a numpy.array for the Fredkin (CSWAP) gate.                       |

