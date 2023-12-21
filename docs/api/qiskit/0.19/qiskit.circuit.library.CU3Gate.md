---
title: CU3Gate
description: API reference for qiskit.circuit.library.CU3Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CU3Gate
---

# CU3Gate

<span id="qiskit.circuit.library.CU3Gate" />

`CU3Gate(theta, phi, lam, label=None, ctrl_state=None)`

Controlled-U3 gate (3-parameter two-qubit gate).

This is a controlled version of the U3 gate (generic single qubit rotation). It is restricted to 3 parameters, and so cannot cover generic two-qubit controlled gates).

**Circuit symbol:**

```python
q_0: ──────■──────
     ┌─────┴─────┐
q_1: ┤ U3(ϴ,φ,λ) ├
     └───────────┘
```

**Matrix representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CU3(\theta, \phi, \lambda)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| +
    U3(\theta,\phi,\lambda) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0                   & 0 & 0 \\
        0 & \cos(\th)           & 0 & e^{-i\lambda}\sin(\th) \\
        0 & 0                   & 1 & 0 \\
        0 & e^{i\phi}\sin(\th)  & 0 & e^{i(\phi+\lambda)\cos(\th)}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───────────┐
  q_0: ┤ U3(ϴ,φ,λ) ├
       └─────┬─────┘
  q_1: ──────■──────
  ```

  $$
  \begin{split}CU3(\theta, \phi, \lambda)\ q_1, q_0 =
      |0\rangle\langle 0| \otimes I +
      |1\rangle\langle 1| \otimes U3(\theta,\phi,\lambda) =
      \begin{pmatrix}
          1 & 0   & 0                  & 0 \\
          0 & 1   & 0                  & 0 \\
          0 & 0   & \cos(\th)          & e^{-i\lambda}\sin(\th) \\
          0 & 0   & e^{i\phi}\sin(\th) & e^{i(\phi+\lambda)\cos(\th)}
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CU3 gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CU3Gate.ctrl_state`](qiskit.circuit.library.CU3Gate.ctrl_state "qiskit.circuit.library.CU3Gate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CU3Gate.decompositions`](qiskit.circuit.library.CU3Gate.decompositions "qiskit.circuit.library.CU3Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CU3Gate.definition`](qiskit.circuit.library.CU3Gate.definition "qiskit.circuit.library.CU3Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`CU3Gate.label`](qiskit.circuit.library.CU3Gate.label "qiskit.circuit.library.CU3Gate.label")                            | Return gate label                                                             |
| [`CU3Gate.params`](qiskit.circuit.library.CU3Gate.params "qiskit.circuit.library.CU3Gate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`CU3Gate.add_decomposition`](qiskit.circuit.library.CU3Gate.add_decomposition "qiskit.circuit.library.CU3Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CU3Gate.assemble`](qiskit.circuit.library.CU3Gate.assemble "qiskit.circuit.library.CU3Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CU3Gate.broadcast_arguments`](qiskit.circuit.library.CU3Gate.broadcast_arguments "qiskit.circuit.library.CU3Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CU3Gate.c_if`](qiskit.circuit.library.CU3Gate.c_if "qiskit.circuit.library.CU3Gate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CU3Gate.control`](qiskit.circuit.library.CU3Gate.control "qiskit.circuit.library.CU3Gate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CU3Gate.copy`](qiskit.circuit.library.CU3Gate.copy "qiskit.circuit.library.CU3Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CU3Gate.inverse`](qiskit.circuit.library.CU3Gate.inverse "qiskit.circuit.library.CU3Gate.inverse")()                                                 | Return inverted CU3 gate.                                                |
| [`CU3Gate.is_parameterized`](qiskit.circuit.library.CU3Gate.is_parameterized "qiskit.circuit.library.CU3Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CU3Gate.mirror`](qiskit.circuit.library.CU3Gate.mirror "qiskit.circuit.library.CU3Gate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CU3Gate.power`](qiskit.circuit.library.CU3Gate.power "qiskit.circuit.library.CU3Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CU3Gate.qasm`](qiskit.circuit.library.CU3Gate.qasm "qiskit.circuit.library.CU3Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CU3Gate.repeat`](qiskit.circuit.library.CU3Gate.repeat "qiskit.circuit.library.CU3Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CU3Gate.to_matrix`](qiskit.circuit.library.CU3Gate.to_matrix "qiskit.circuit.library.CU3Gate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

