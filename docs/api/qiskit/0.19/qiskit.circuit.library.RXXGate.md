---
title: RXXGate
description: API reference for qiskit.circuit.library.RXXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RXXGate
---

# RXXGate

<span id="qiskit.circuit.library.RXXGate" />

`RXXGate(theta)`

A parameteric 2-qubit $X \otimes X$ interaction (rotation about XX).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤1        ├
     │  Rxx(ϴ) │
q_1: ┤0        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{XX}(\theta) = exp(-i \th X{\otimes}X) =
    \begin{pmatrix}
        \cos(\th)   & 0           & 0           & -i\sin(\th) \\
        0           & \cos(\th)   & -i\sin(\th) & 0 \\
        0           & -i\sin(\th) & \cos(\th)   & 0 \\
        -i\sin(\th) & 0           & 0           & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

> $$
> R_{XX}(\theta = 0) = I
> $$
>
> $$
> R_{XX}(\theta = \pi) = i X \otimes X
> $$
>
> $$
> \begin{split}R_{XX}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1  & 0  & 0  & -i \\
>                             0  & 1  & -i & 0 \\
>                             0  & -i & 1  & 0 \\
>                             -i & 0  & 0  & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RXX gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RXXGate.decompositions`](qiskit.circuit.library.RXXGate.decompositions "qiskit.circuit.library.RXXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RXXGate.definition`](qiskit.circuit.library.RXXGate.definition "qiskit.circuit.library.RXXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RXXGate.label`](qiskit.circuit.library.RXXGate.label "qiskit.circuit.library.RXXGate.label")                            | Return gate label                                                             |
| [`RXXGate.params`](qiskit.circuit.library.RXXGate.params "qiskit.circuit.library.RXXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`RXXGate.add_decomposition`](qiskit.circuit.library.RXXGate.add_decomposition "qiskit.circuit.library.RXXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RXXGate.assemble`](qiskit.circuit.library.RXXGate.assemble "qiskit.circuit.library.RXXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RXXGate.broadcast_arguments`](qiskit.circuit.library.RXXGate.broadcast_arguments "qiskit.circuit.library.RXXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RXXGate.c_if`](qiskit.circuit.library.RXXGate.c_if "qiskit.circuit.library.RXXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RXXGate.control`](qiskit.circuit.library.RXXGate.control "qiskit.circuit.library.RXXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`RXXGate.copy`](qiskit.circuit.library.RXXGate.copy "qiskit.circuit.library.RXXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RXXGate.inverse`](qiskit.circuit.library.RXXGate.inverse "qiskit.circuit.library.RXXGate.inverse")()                                                 | Return inverse RXX gate (i.e.                                            |
| [`RXXGate.is_parameterized`](qiskit.circuit.library.RXXGate.is_parameterized "qiskit.circuit.library.RXXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RXXGate.mirror`](qiskit.circuit.library.RXXGate.mirror "qiskit.circuit.library.RXXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RXXGate.power`](qiskit.circuit.library.RXXGate.power "qiskit.circuit.library.RXXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RXXGate.qasm`](qiskit.circuit.library.RXXGate.qasm "qiskit.circuit.library.RXXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RXXGate.repeat`](qiskit.circuit.library.RXXGate.repeat "qiskit.circuit.library.RXXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RXXGate.to_matrix`](qiskit.circuit.library.RXXGate.to_matrix "qiskit.circuit.library.RXXGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

