---
title: U3Gate
description: API reference for qiskit.circuit.library.U3Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U3Gate
---

# U3Gate

<span id="qiskit.circuit.library.U3Gate" />

`U3Gate(theta, phi, lam, label=None)`

Generic single-qubit rotation gate with 3 Euler angles.

Implemented using two X90 pulses on IBM Quantum systems:

$$
U3(\theta, \phi, \lambda) =
    RZ(\phi - \pi/2) RX(\pi/2) RZ(\pi - \theta) RX(\pi/2) RZ(\lambda - \pi/2)
$$

**Circuit symbol:**

```python
     ┌───────────┐
q_0: ┤ U3(ϴ,φ,λ) ├
     └───────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}U3(\theta, \phi, \lambda) =
    \begin{pmatrix}
        \cos(\th)          & -e^{i\lambda}\sin(\th) \\
        e^{i\phi}\sin(\th) & e^{i(\phi+\lambda)}\cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

$$
U3(\theta, -\frac{\pi}{2}, \frac{pi}{2}) = RX(\theta)
$$

$$
U3(\theta, 0, 0) = RY(\theta)
$$

Create new U3 gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`U3Gate.decompositions`](qiskit.circuit.library.U3Gate.decompositions "qiskit.circuit.library.U3Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`U3Gate.definition`](qiskit.circuit.library.U3Gate.definition "qiskit.circuit.library.U3Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`U3Gate.label`](qiskit.circuit.library.U3Gate.label "qiskit.circuit.library.U3Gate.label")                            | Return gate label                                                             |
| [`U3Gate.params`](qiskit.circuit.library.U3Gate.params "qiskit.circuit.library.U3Gate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`U3Gate.add_decomposition`](qiskit.circuit.library.U3Gate.add_decomposition "qiskit.circuit.library.U3Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`U3Gate.assemble`](qiskit.circuit.library.U3Gate.assemble "qiskit.circuit.library.U3Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`U3Gate.broadcast_arguments`](qiskit.circuit.library.U3Gate.broadcast_arguments "qiskit.circuit.library.U3Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`U3Gate.c_if`](qiskit.circuit.library.U3Gate.c_if "qiskit.circuit.library.U3Gate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`U3Gate.control`](qiskit.circuit.library.U3Gate.control "qiskit.circuit.library.U3Gate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-U3 gate.                                     |
| [`U3Gate.copy`](qiskit.circuit.library.U3Gate.copy "qiskit.circuit.library.U3Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`U3Gate.inverse`](qiskit.circuit.library.U3Gate.inverse "qiskit.circuit.library.U3Gate.inverse")()                                                 | Return inverted U3 gate.                                                 |
| [`U3Gate.is_parameterized`](qiskit.circuit.library.U3Gate.is_parameterized "qiskit.circuit.library.U3Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`U3Gate.mirror`](qiskit.circuit.library.U3Gate.mirror "qiskit.circuit.library.U3Gate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`U3Gate.power`](qiskit.circuit.library.U3Gate.power "qiskit.circuit.library.U3Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`U3Gate.qasm`](qiskit.circuit.library.U3Gate.qasm "qiskit.circuit.library.U3Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`U3Gate.repeat`](qiskit.circuit.library.U3Gate.repeat "qiskit.circuit.library.U3Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`U3Gate.to_matrix`](qiskit.circuit.library.U3Gate.to_matrix "qiskit.circuit.library.U3Gate.to_matrix")()                                           | Return a Numpy.array for the U3 gate.                                    |

