---
title: CRXGate
description: API reference for qiskit.circuit.library.CRXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CRXGate
---

# CRXGate

<span id="qiskit.circuit.library.CRXGate" />

`CRXGate(theta, label=None, ctrl_state=None)`

Controlled-RX gate.

**Circuit symbol:**

```python
q_0: ────■────
     ┌───┴───┐
q_1: ┤ Rx(ϴ) ├
     └───────┘
```

**Matrix representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CRX(\lambda)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| + RX(\theta) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & \cos{\th} & 0 & -i\sin{\th} \\
        0 & 0 & 1 & 0 \\
        0 & -i\sin{\th} & 0 & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───────┐
  q_0: ┤ Rx(ϴ) ├
       └───┬───┘
  q_1: ────■────
  ```

  $$
   \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CRX(\theta)\ q_1, q_0 =
  |0\rangle\langle0| \otimes I + |1\rangle\langle1| \otimes RX(\theta) =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & \cos{\th}   & -i\sin{\th} \\
          0 & 0 & -i\sin{\th} & \cos{\th}
      \end{pmatrix}\end{split}\end{aligned}\end{align} 
  $$
</Admonition>

Create new CRX gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CRXGate.ctrl_state`](qiskit.circuit.library.CRXGate.ctrl_state "qiskit.circuit.library.CRXGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CRXGate.decompositions`](qiskit.circuit.library.CRXGate.decompositions "qiskit.circuit.library.CRXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CRXGate.definition`](qiskit.circuit.library.CRXGate.definition "qiskit.circuit.library.CRXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CRXGate.label`](qiskit.circuit.library.CRXGate.label "qiskit.circuit.library.CRXGate.label")                            | Return gate label                                                             |
| [`CRXGate.params`](qiskit.circuit.library.CRXGate.params "qiskit.circuit.library.CRXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`CRXGate.add_decomposition`](qiskit.circuit.library.CRXGate.add_decomposition "qiskit.circuit.library.CRXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CRXGate.assemble`](qiskit.circuit.library.CRXGate.assemble "qiskit.circuit.library.CRXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CRXGate.broadcast_arguments`](qiskit.circuit.library.CRXGate.broadcast_arguments "qiskit.circuit.library.CRXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CRXGate.c_if`](qiskit.circuit.library.CRXGate.c_if "qiskit.circuit.library.CRXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CRXGate.control`](qiskit.circuit.library.CRXGate.control "qiskit.circuit.library.CRXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CRXGate.copy`](qiskit.circuit.library.CRXGate.copy "qiskit.circuit.library.CRXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CRXGate.inverse`](qiskit.circuit.library.CRXGate.inverse "qiskit.circuit.library.CRXGate.inverse")()                                                 | Return inverse RX gate (i.e.                                             |
| [`CRXGate.is_parameterized`](qiskit.circuit.library.CRXGate.is_parameterized "qiskit.circuit.library.CRXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CRXGate.mirror`](qiskit.circuit.library.CRXGate.mirror "qiskit.circuit.library.CRXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CRXGate.power`](qiskit.circuit.library.CRXGate.power "qiskit.circuit.library.CRXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CRXGate.qasm`](qiskit.circuit.library.CRXGate.qasm "qiskit.circuit.library.CRXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CRXGate.repeat`](qiskit.circuit.library.CRXGate.repeat "qiskit.circuit.library.CRXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CRXGate.to_matrix`](qiskit.circuit.library.CRXGate.to_matrix "qiskit.circuit.library.CRXGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

