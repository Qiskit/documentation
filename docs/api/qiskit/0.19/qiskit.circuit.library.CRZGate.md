---
title: CRZGate
description: API reference for qiskit.circuit.library.CRZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CRZGate
---

# CRZGate

<span id="qiskit.circuit.library.CRZGate" />

`CRZGate(theta, label=None, ctrl_state=None)`

Controlled-RZ gate.

This is a diagonal but non-symmetric gate that induces a phase on the state of the target qubit, depending on the control state.

**Circuit symbol:**

```python
q_0: ────■────
     ┌───┴───┐
q_1: ┤ Rz(λ) ├
     └───────┘
```

**Matrix representation:**

$$
\begin{split}CRZ(\lambda)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| + RZ(\lambda) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & e^{-i\frac{\lambda}{2}} & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 0 & 0 & e^{i\frac{\lambda}{2}}
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───────┐
  q_0: ┤ Rz(λ) ├
       └───┬───┘
  q_1: ────■────
  ```

  $$
  \begin{split}CRZ(\lambda)\ q_1, q_0 =
      |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes RZ(\lambda) =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & e^{-i\frac{\lambda}{2}} & 0 \\
          0 & 0 & 0 & e^{i\frac{\lambda}{2}}
      \end{pmatrix}\end{split}
  $$
</Admonition>

<Admonition title="See also" type="note">
  `CU1Gate`: Due to the global phase difference in the matrix definitions of U1 and RZ, CU1 and CRZ are different gates with a relative phase difference.
</Admonition>

Create new CRZ gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CRZGate.ctrl_state`](qiskit.circuit.library.CRZGate.ctrl_state "qiskit.circuit.library.CRZGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CRZGate.decompositions`](qiskit.circuit.library.CRZGate.decompositions "qiskit.circuit.library.CRZGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CRZGate.definition`](qiskit.circuit.library.CRZGate.definition "qiskit.circuit.library.CRZGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CRZGate.label`](qiskit.circuit.library.CRZGate.label "qiskit.circuit.library.CRZGate.label")                            | Return gate label                                                             |
| [`CRZGate.params`](qiskit.circuit.library.CRZGate.params "qiskit.circuit.library.CRZGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`CRZGate.add_decomposition`](qiskit.circuit.library.CRZGate.add_decomposition "qiskit.circuit.library.CRZGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CRZGate.assemble`](qiskit.circuit.library.CRZGate.assemble "qiskit.circuit.library.CRZGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CRZGate.broadcast_arguments`](qiskit.circuit.library.CRZGate.broadcast_arguments "qiskit.circuit.library.CRZGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CRZGate.c_if`](qiskit.circuit.library.CRZGate.c_if "qiskit.circuit.library.CRZGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CRZGate.control`](qiskit.circuit.library.CRZGate.control "qiskit.circuit.library.CRZGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CRZGate.copy`](qiskit.circuit.library.CRZGate.copy "qiskit.circuit.library.CRZGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CRZGate.inverse`](qiskit.circuit.library.CRZGate.inverse "qiskit.circuit.library.CRZGate.inverse")()                                                 | Return inverse RZ gate (i.e.                                             |
| [`CRZGate.is_parameterized`](qiskit.circuit.library.CRZGate.is_parameterized "qiskit.circuit.library.CRZGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CRZGate.mirror`](qiskit.circuit.library.CRZGate.mirror "qiskit.circuit.library.CRZGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CRZGate.power`](qiskit.circuit.library.CRZGate.power "qiskit.circuit.library.CRZGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CRZGate.qasm`](qiskit.circuit.library.CRZGate.qasm "qiskit.circuit.library.CRZGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CRZGate.repeat`](qiskit.circuit.library.CRZGate.repeat "qiskit.circuit.library.CRZGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CRZGate.to_matrix`](qiskit.circuit.library.CRZGate.to_matrix "qiskit.circuit.library.CRZGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

