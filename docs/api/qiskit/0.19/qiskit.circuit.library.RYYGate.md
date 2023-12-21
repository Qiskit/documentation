---
title: RYYGate
description: API reference for qiskit.circuit.library.RYYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RYYGate
---

# RYYGate

<span id="qiskit.circuit.library.RYYGate" />

`RYYGate(theta)`

A parameteric 2-qubit $Y \otimes Y$ interaction (rotation about YY).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤1        ├
     │  Ryy(ϴ) │
q_1: ┤0        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{YY}(\theta) = exp(-i \th Y{\otimes}Y) =
    \begin{pmatrix}
        \cos(\th)   & 0           & 0           & i\sin(\th) \\
        0           & \cos(\th)   & -i\sin(\th) & 0 \\
        0           & -i\sin(\th) & \cos(\th)   & 0 \\
        i\sin(\th)  & 0           & 0           & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

> $$
> R_{YY}(\theta = 0) = I
> $$
>
> $$
> R_{YY}(\theta = \pi) = i Y \otimes Y
> $$
>
> $$
> \begin{split}R_{YY}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1 & 0 & 0 & i \\
>                             0 & 1 & -i & 0 \\
>                             0 & -i & 1 & 0 \\
>                             i & 0 & 0 & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RYY gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RYYGate.decompositions`](qiskit.circuit.library.RYYGate.decompositions "qiskit.circuit.library.RYYGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RYYGate.definition`](qiskit.circuit.library.RYYGate.definition "qiskit.circuit.library.RYYGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RYYGate.label`](qiskit.circuit.library.RYYGate.label "qiskit.circuit.library.RYYGate.label")                            | Return gate label                                                             |
| [`RYYGate.params`](qiskit.circuit.library.RYYGate.params "qiskit.circuit.library.RYYGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`RYYGate.add_decomposition`](qiskit.circuit.library.RYYGate.add_decomposition "qiskit.circuit.library.RYYGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RYYGate.assemble`](qiskit.circuit.library.RYYGate.assemble "qiskit.circuit.library.RYYGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RYYGate.broadcast_arguments`](qiskit.circuit.library.RYYGate.broadcast_arguments "qiskit.circuit.library.RYYGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RYYGate.c_if`](qiskit.circuit.library.RYYGate.c_if "qiskit.circuit.library.RYYGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RYYGate.control`](qiskit.circuit.library.RYYGate.control "qiskit.circuit.library.RYYGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`RYYGate.copy`](qiskit.circuit.library.RYYGate.copy "qiskit.circuit.library.RYYGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RYYGate.inverse`](qiskit.circuit.library.RYYGate.inverse "qiskit.circuit.library.RYYGate.inverse")()                                                 | Return inverse RYY gate (i.e.                                            |
| [`RYYGate.is_parameterized`](qiskit.circuit.library.RYYGate.is_parameterized "qiskit.circuit.library.RYYGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RYYGate.mirror`](qiskit.circuit.library.RYYGate.mirror "qiskit.circuit.library.RYYGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RYYGate.power`](qiskit.circuit.library.RYYGate.power "qiskit.circuit.library.RYYGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RYYGate.qasm`](qiskit.circuit.library.RYYGate.qasm "qiskit.circuit.library.RYYGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RYYGate.repeat`](qiskit.circuit.library.RYYGate.repeat "qiskit.circuit.library.RYYGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RYYGate.to_matrix`](qiskit.circuit.library.RYYGate.to_matrix "qiskit.circuit.library.RYYGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

