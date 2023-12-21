---
title: ZGate
description: API reference for qiskit.circuit.library.ZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ZGate
---

# ZGate

<span id="qiskit.circuit.library.ZGate" />

`ZGate(label=None)`

The single-qubit Pauli-Z gate ($\sigma_z$).

**Matrix Representation:**

$$
\begin{split}Z = \begin{pmatrix}
        1 & 0 \\
        0 & -1
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ Z ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the Z axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RZ(\pi)$ and $Z$.

  $$
  \begin{split}RZ(\pi) = \begin{pmatrix}
              -1 & 0 \\
              0 & 1
            \end{pmatrix}
          = -Z\end{split}
  $$
</Admonition>

The gate is equivalent to a phase flip.

$$
\begin{split}|0\rangle \rightarrow |0\rangle \\
|1\rangle \rightarrow -|1\rangle\end{split}
$$

Create new Z gate.

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`ZGate.decompositions`](qiskit.circuit.library.ZGate.decompositions "qiskit.circuit.library.ZGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`ZGate.definition`](qiskit.circuit.library.ZGate.definition "qiskit.circuit.library.ZGate.definition")             | Return definition in terms of other basic gates.                              |
| [`ZGate.label`](qiskit.circuit.library.ZGate.label "qiskit.circuit.library.ZGate.label")                            | Return gate label                                                             |
| [`ZGate.params`](qiskit.circuit.library.ZGate.params "qiskit.circuit.library.ZGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                  |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`ZGate.add_decomposition`](qiskit.circuit.library.ZGate.add_decomposition "qiskit.circuit.library.ZGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`ZGate.assemble`](qiskit.circuit.library.ZGate.assemble "qiskit.circuit.library.ZGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`ZGate.broadcast_arguments`](qiskit.circuit.library.ZGate.broadcast_arguments "qiskit.circuit.library.ZGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`ZGate.c_if`](qiskit.circuit.library.ZGate.c_if "qiskit.circuit.library.ZGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`ZGate.control`](qiskit.circuit.library.ZGate.control "qiskit.circuit.library.ZGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-Z gate.                                      |
| [`ZGate.copy`](qiskit.circuit.library.ZGate.copy "qiskit.circuit.library.ZGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`ZGate.inverse`](qiskit.circuit.library.ZGate.inverse "qiskit.circuit.library.ZGate.inverse")()                                                 | Return inverted Z gate (itself).                                         |
| [`ZGate.is_parameterized`](qiskit.circuit.library.ZGate.is_parameterized "qiskit.circuit.library.ZGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`ZGate.mirror`](qiskit.circuit.library.ZGate.mirror "qiskit.circuit.library.ZGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`ZGate.power`](qiskit.circuit.library.ZGate.power "qiskit.circuit.library.ZGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`ZGate.qasm`](qiskit.circuit.library.ZGate.qasm "qiskit.circuit.library.ZGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`ZGate.repeat`](qiskit.circuit.library.ZGate.repeat "qiskit.circuit.library.ZGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`ZGate.to_matrix`](qiskit.circuit.library.ZGate.to_matrix "qiskit.circuit.library.ZGate.to_matrix")()                                           | Return a numpy.array for the Z gate.                                     |

