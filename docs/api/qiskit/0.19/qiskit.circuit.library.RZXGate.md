---
title: RZXGate
description: API reference for qiskit.circuit.library.RZXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RZXGate
---

# RZXGate

<span id="qiskit.circuit.library.RZXGate" />

`RZXGate(theta)`

A parameteric 2-qubit $Z \otimes X$ interaction (rotation about ZX).

This gate is maximally entangling at $\theta = \pi/2$.

The cross-resonance gate (CR) for superconducting qubits implements a ZX interaction (however other terms are also present in an experiment).

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤0        ├
     │  Rzx(θ) │
q_1: ┤1        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZX}(\theta)\ q_0, q_1 = exp(-i \frac{\theta}{2} X{\otimes}Z) =
    \begin{pmatrix}
        \cos(\th)   & 0          & -i\sin(\th)  & 0          \\
        0           & \cos(\th)  & 0            & i\sin(\th) \\
        -i\sin(\th) & 0          & \cos(\th)    & 0          \\
        0           & i\sin(\th) & 0            & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in the $X \otimes Z$ tensor order. Instead, if we apply it on (q\_1, q\_0), the matrix will be $Z \otimes X$:

  ```python
       ┌─────────┐
  q_0: ┤1        ├
       │  Rzx(θ) │
  q_1: ┤0        ├
       └─────────┘
  ```

  $$
   \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZX}(\theta)\ q_1, q_0 = exp(-i \frac{\theta}{2} Z{\otimes}X) =
      \begin{pmatrix}
          \cos(\th)   & -i\sin(\th) & 0           & 0          \\
          -i\sin(\th) & \cos(\th)   & 0           & 0          \\
          0           & 0           & \cos(\th)   & i\sin(\th) \\
          0           & 0           & i\sin(\th)  & \cos(\th)
      \end{pmatrix}\end{split}\end{aligned}\end{align} 
  $$

  This is a direct sum of RX rotations, so this gate is equivalent to a uniformly controlled (multiplexed) RX gate:

  $$
  \begin{split}R_{ZX}(\theta)\ q_1, q_0 =
      \begin{pmatrix}
          RX(\theta) & 0 \\
          0 & RX(-\theta)
      \end{pmatrix}\end{split}
  $$
</Admonition>

**Examples:**

> $$
> R_{ZX}(\theta = 0) = I
> $$
>
> $$
> R_{ZX}(\theta = 2\pi) = -I
> $$
>
> $$
> R_{ZX}(\theta = \pi) = -i Z \otimes X
> $$
>
> $$
> \begin{split}RZX(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1  & 0 & -i & 0 \\
>                             0  & 1 & 0  & i \\
>                             -i & 0 & 1  & 0 \\
>                             0  & i & 0  & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RZX gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RZXGate.decompositions`](qiskit.circuit.library.RZXGate.decompositions "qiskit.circuit.library.RZXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RZXGate.definition`](qiskit.circuit.library.RZXGate.definition "qiskit.circuit.library.RZXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RZXGate.label`](qiskit.circuit.library.RZXGate.label "qiskit.circuit.library.RZXGate.label")                            | Return gate label                                                             |
| [`RZXGate.params`](qiskit.circuit.library.RZXGate.params "qiskit.circuit.library.RZXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`RZXGate.add_decomposition`](qiskit.circuit.library.RZXGate.add_decomposition "qiskit.circuit.library.RZXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RZXGate.assemble`](qiskit.circuit.library.RZXGate.assemble "qiskit.circuit.library.RZXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RZXGate.broadcast_arguments`](qiskit.circuit.library.RZXGate.broadcast_arguments "qiskit.circuit.library.RZXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RZXGate.c_if`](qiskit.circuit.library.RZXGate.c_if "qiskit.circuit.library.RZXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RZXGate.control`](qiskit.circuit.library.RZXGate.control "qiskit.circuit.library.RZXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`RZXGate.copy`](qiskit.circuit.library.RZXGate.copy "qiskit.circuit.library.RZXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RZXGate.inverse`](qiskit.circuit.library.RZXGate.inverse "qiskit.circuit.library.RZXGate.inverse")()                                                 | Return inverse RZX gate (i.e.                                            |
| [`RZXGate.is_parameterized`](qiskit.circuit.library.RZXGate.is_parameterized "qiskit.circuit.library.RZXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RZXGate.mirror`](qiskit.circuit.library.RZXGate.mirror "qiskit.circuit.library.RZXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RZXGate.power`](qiskit.circuit.library.RZXGate.power "qiskit.circuit.library.RZXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RZXGate.qasm`](qiskit.circuit.library.RZXGate.qasm "qiskit.circuit.library.RZXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RZXGate.repeat`](qiskit.circuit.library.RZXGate.repeat "qiskit.circuit.library.RZXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RZXGate.to_matrix`](qiskit.circuit.library.RZXGate.to_matrix "qiskit.circuit.library.RZXGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

