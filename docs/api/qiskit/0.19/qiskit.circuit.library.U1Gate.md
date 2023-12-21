---
title: U1Gate
description: API reference for qiskit.circuit.library.U1Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U1Gate
---

# U1Gate

<span id="qiskit.circuit.library.U1Gate" />

`U1Gate(theta, label=None)`

Single-qubit rotation about the Z axis.

This is a diagonal gate. It can be implemented virtually in hardware via framechanges (i.e. at zero error and duration).

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ U1(λ) ├
     └───────┘
```

**Matrix Representation:**

$$
\begin{split}U1(\lambda) =
    \begin{pmatrix}
        1 & 0 \\
        0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> U1(\lambda = \pi) = Z
> $$
>
> $$
> U1(\lambda = \pi/2) = S
> $$
>
> $$
> U1(\lambda = \pi/4) = T
> $$

<Admonition title="See also" type="note">
  `RZGate`: This gate is equivalent to RZ up to a phase factor.

  > $$
  > U1(\lambda) = e^{i{\lambda}/2} RZ(\lambda)
  > $$

  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.

  Reference for virtual Z gate implementation: [1612.00858](https://arxiv.org/abs/1612.00858)
</Admonition>

Create new U1 gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`U1Gate.decompositions`](qiskit.circuit.library.U1Gate.decompositions "qiskit.circuit.library.U1Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`U1Gate.definition`](qiskit.circuit.library.U1Gate.definition "qiskit.circuit.library.U1Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`U1Gate.label`](qiskit.circuit.library.U1Gate.label "qiskit.circuit.library.U1Gate.label")                            | Return gate label                                                             |
| [`U1Gate.params`](qiskit.circuit.library.U1Gate.params "qiskit.circuit.library.U1Gate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`U1Gate.add_decomposition`](qiskit.circuit.library.U1Gate.add_decomposition "qiskit.circuit.library.U1Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`U1Gate.assemble`](qiskit.circuit.library.U1Gate.assemble "qiskit.circuit.library.U1Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`U1Gate.broadcast_arguments`](qiskit.circuit.library.U1Gate.broadcast_arguments "qiskit.circuit.library.U1Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`U1Gate.c_if`](qiskit.circuit.library.U1Gate.c_if "qiskit.circuit.library.U1Gate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`U1Gate.control`](qiskit.circuit.library.U1Gate.control "qiskit.circuit.library.U1Gate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-U1 gate.                                     |
| [`U1Gate.copy`](qiskit.circuit.library.U1Gate.copy "qiskit.circuit.library.U1Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`U1Gate.inverse`](qiskit.circuit.library.U1Gate.inverse "qiskit.circuit.library.U1Gate.inverse")()                                                 | Return inverted U1 gate ($U1(\lambda){\dagger} = U1(-\lambda)$)          |
| [`U1Gate.is_parameterized`](qiskit.circuit.library.U1Gate.is_parameterized "qiskit.circuit.library.U1Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`U1Gate.mirror`](qiskit.circuit.library.U1Gate.mirror "qiskit.circuit.library.U1Gate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`U1Gate.power`](qiskit.circuit.library.U1Gate.power "qiskit.circuit.library.U1Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`U1Gate.qasm`](qiskit.circuit.library.U1Gate.qasm "qiskit.circuit.library.U1Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`U1Gate.repeat`](qiskit.circuit.library.U1Gate.repeat "qiskit.circuit.library.U1Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`U1Gate.to_matrix`](qiskit.circuit.library.U1Gate.to_matrix "qiskit.circuit.library.U1Gate.to_matrix")()                                           | Return a numpy.array for the U1 gate.                                    |

