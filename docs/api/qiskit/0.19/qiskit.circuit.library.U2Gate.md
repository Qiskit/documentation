---
title: U2Gate
description: API reference for qiskit.circuit.library.U2Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U2Gate
---

# U2Gate

<span id="qiskit.circuit.library.U2Gate" />

`U2Gate(phi, lam, label=None)`

Single-qubit rotation about the X+Z axis.

Implemented using one X90 pulse on IBM Quantum systems:

$$
U2(\phi, \lambda) = RZ(\phi+\pi/2).RX(\frac{\pi}{2}).RZ(\lambda-\pi/2)
$$

**Circuit symbol:**

```python
     ┌─────────┐
q_0: ┤ U2(φ,λ) ├
     └─────────┘
```

**Matrix Representation:**

$$
\begin{split}U2(\phi, \lambda) = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1          & -e^{i\lambda} \\
        e^{i\phi} & e^{i(\phi+\lambda)}
    \end{pmatrix}\end{split}
$$

**Examples:**

$$
U2(0, \pi) = H
$$

<Admonition title="See also" type="note">
  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.
</Admonition>

Create new U2 gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`U2Gate.decompositions`](qiskit.circuit.library.U2Gate.decompositions "qiskit.circuit.library.U2Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`U2Gate.definition`](qiskit.circuit.library.U2Gate.definition "qiskit.circuit.library.U2Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`U2Gate.label`](qiskit.circuit.library.U2Gate.label "qiskit.circuit.library.U2Gate.label")                            | Return gate label                                                             |
| [`U2Gate.params`](qiskit.circuit.library.U2Gate.params "qiskit.circuit.library.U2Gate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`U2Gate.add_decomposition`](qiskit.circuit.library.U2Gate.add_decomposition "qiskit.circuit.library.U2Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`U2Gate.assemble`](qiskit.circuit.library.U2Gate.assemble "qiskit.circuit.library.U2Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`U2Gate.broadcast_arguments`](qiskit.circuit.library.U2Gate.broadcast_arguments "qiskit.circuit.library.U2Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`U2Gate.c_if`](qiskit.circuit.library.U2Gate.c_if "qiskit.circuit.library.U2Gate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`U2Gate.control`](qiskit.circuit.library.U2Gate.control "qiskit.circuit.library.U2Gate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`U2Gate.copy`](qiskit.circuit.library.U2Gate.copy "qiskit.circuit.library.U2Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`U2Gate.inverse`](qiskit.circuit.library.U2Gate.inverse "qiskit.circuit.library.U2Gate.inverse")()                                                 | Return inverted U2 gate.                                                 |
| [`U2Gate.is_parameterized`](qiskit.circuit.library.U2Gate.is_parameterized "qiskit.circuit.library.U2Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`U2Gate.mirror`](qiskit.circuit.library.U2Gate.mirror "qiskit.circuit.library.U2Gate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`U2Gate.power`](qiskit.circuit.library.U2Gate.power "qiskit.circuit.library.U2Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`U2Gate.qasm`](qiskit.circuit.library.U2Gate.qasm "qiskit.circuit.library.U2Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`U2Gate.repeat`](qiskit.circuit.library.U2Gate.repeat "qiskit.circuit.library.U2Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`U2Gate.to_matrix`](qiskit.circuit.library.U2Gate.to_matrix "qiskit.circuit.library.U2Gate.to_matrix")()                                           | Return a Numpy.array for the U2 gate.                                    |

