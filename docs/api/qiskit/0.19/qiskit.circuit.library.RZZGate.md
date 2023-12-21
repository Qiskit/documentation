---
title: RZZGate
description: API reference for qiskit.circuit.library.RZZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RZZGate
---

# RZZGate

<span id="qiskit.circuit.library.RZZGate" />

`RZZGate(theta)`

A parameteric 2-qubit $Z \otimes Z$ interaction (rotation about ZZ).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
q_0: ───■────
        │zz(θ)
q_1: ───■────
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZZ}(\theta) = exp(-i \th Z{\otimes}Z) =
    \begin{pmatrix}
        e^{-i \th} & 0 & 0 & 0 \\
        0 & e^{i \th} & 0 & 0 \\
        0 & 0 & e^{i \th} & 0 \\
        0 & 0 & 0 & e^{-i \th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

This is a direct sum of RZ rotations, so this gate is equivalent to a uniformly controlled (multiplexed) RZ gate:

$$
\begin{split}R_{ZZ}(\theta) =
    \begin{pmatrix}
        RZ(\theta) & 0 \\
        0 & RZ(-\theta)
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> R_{ZZ}(\theta = 0) = I
> $$
>
> $$
> R_{ZZ}(\theta = 2\pi) = -I
> $$
>
> $$
> R_{ZZ}(\theta = \pi) = - Z \otimes Z
> $$
>
> $$
> \begin{split}R_{ZZ}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1-i & 0 & 0 & 0 \\
>                             0 & 1+i & 0 & 0 \\
>                             0 & 0 & 1+i & 0 \\
>                             0 & 0 & 0 & 1-i
>                         \end{pmatrix}\end{split}
> $$

Create new RZZ gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RZZGate.decompositions`](qiskit.circuit.library.RZZGate.decompositions "qiskit.circuit.library.RZZGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RZZGate.definition`](qiskit.circuit.library.RZZGate.definition "qiskit.circuit.library.RZZGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RZZGate.label`](qiskit.circuit.library.RZZGate.label "qiskit.circuit.library.RZZGate.label")                            | Return gate label                                                             |
| [`RZZGate.params`](qiskit.circuit.library.RZZGate.params "qiskit.circuit.library.RZZGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`RZZGate.add_decomposition`](qiskit.circuit.library.RZZGate.add_decomposition "qiskit.circuit.library.RZZGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RZZGate.assemble`](qiskit.circuit.library.RZZGate.assemble "qiskit.circuit.library.RZZGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RZZGate.broadcast_arguments`](qiskit.circuit.library.RZZGate.broadcast_arguments "qiskit.circuit.library.RZZGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RZZGate.c_if`](qiskit.circuit.library.RZZGate.c_if "qiskit.circuit.library.RZZGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RZZGate.control`](qiskit.circuit.library.RZZGate.control "qiskit.circuit.library.RZZGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`RZZGate.copy`](qiskit.circuit.library.RZZGate.copy "qiskit.circuit.library.RZZGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RZZGate.inverse`](qiskit.circuit.library.RZZGate.inverse "qiskit.circuit.library.RZZGate.inverse")()                                                 | Return inverse RZZ gate (i.e.                                            |
| [`RZZGate.is_parameterized`](qiskit.circuit.library.RZZGate.is_parameterized "qiskit.circuit.library.RZZGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RZZGate.mirror`](qiskit.circuit.library.RZZGate.mirror "qiskit.circuit.library.RZZGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RZZGate.power`](qiskit.circuit.library.RZZGate.power "qiskit.circuit.library.RZZGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RZZGate.qasm`](qiskit.circuit.library.RZZGate.qasm "qiskit.circuit.library.RZZGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RZZGate.repeat`](qiskit.circuit.library.RZZGate.repeat "qiskit.circuit.library.RZZGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RZZGate.to_matrix`](qiskit.circuit.library.RZZGate.to_matrix "qiskit.circuit.library.RZZGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

