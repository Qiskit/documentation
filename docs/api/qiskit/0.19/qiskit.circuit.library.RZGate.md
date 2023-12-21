---
title: RZGate
description: API reference for qiskit.circuit.library.RZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RZGate
---

# RZGate

<span id="qiskit.circuit.library.RZGate" />

`RZGate(phi, label=None)`

Single-qubit rotation about the Z axis.

This is a diagonal gate. It can be implemented virtually in hardware via framechanges (i.e. at zero error and duration).

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Rz(λ) ├
     └───────┘
```

**Matrix Representation:**

$$
\begin{split}RZ(\lambda) = exp(-i\frac{\lambda}{2}Z) =
    \begin{pmatrix}
        e^{-i\frac{\lambda}{2}} & 0 \\
        0 & e^{i\frac{\lambda}{2}}
    \end{pmatrix}\end{split}
$$

<Admonition title="See also" type="note">
  `U1Gate` This gate is equivalent to U1 up to a phase factor.

  > $$
  > U1(\lambda) = e^{i{\lambda}/2}RZ(\lambda)
  > $$

  Reference for virtual Z gate implementation: [1612.00858](https://arxiv.org/abs/1612.00858)
</Admonition>

Create new RZ gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RZGate.decompositions`](qiskit.circuit.library.RZGate.decompositions "qiskit.circuit.library.RZGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RZGate.definition`](qiskit.circuit.library.RZGate.definition "qiskit.circuit.library.RZGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RZGate.label`](qiskit.circuit.library.RZGate.label "qiskit.circuit.library.RZGate.label")                            | Return gate label                                                             |
| [`RZGate.params`](qiskit.circuit.library.RZGate.params "qiskit.circuit.library.RZGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`RZGate.add_decomposition`](qiskit.circuit.library.RZGate.add_decomposition "qiskit.circuit.library.RZGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RZGate.assemble`](qiskit.circuit.library.RZGate.assemble "qiskit.circuit.library.RZGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RZGate.broadcast_arguments`](qiskit.circuit.library.RZGate.broadcast_arguments "qiskit.circuit.library.RZGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RZGate.c_if`](qiskit.circuit.library.RZGate.c_if "qiskit.circuit.library.RZGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RZGate.control`](qiskit.circuit.library.RZGate.control "qiskit.circuit.library.RZGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-RZ gate.                                     |
| [`RZGate.copy`](qiskit.circuit.library.RZGate.copy "qiskit.circuit.library.RZGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RZGate.inverse`](qiskit.circuit.library.RZGate.inverse "qiskit.circuit.library.RZGate.inverse")()                                                 | Return inverted RZ gate                                                  |
| [`RZGate.is_parameterized`](qiskit.circuit.library.RZGate.is_parameterized "qiskit.circuit.library.RZGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RZGate.mirror`](qiskit.circuit.library.RZGate.mirror "qiskit.circuit.library.RZGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RZGate.power`](qiskit.circuit.library.RZGate.power "qiskit.circuit.library.RZGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RZGate.qasm`](qiskit.circuit.library.RZGate.qasm "qiskit.circuit.library.RZGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RZGate.repeat`](qiskit.circuit.library.RZGate.repeat "qiskit.circuit.library.RZGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RZGate.to_matrix`](qiskit.circuit.library.RZGate.to_matrix "qiskit.circuit.library.RZGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

