---
title: YGate
description: API reference for qiskit.circuit.library.YGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.YGate
---

# YGate

<span id="qiskit.circuit.library.YGate" />

`YGate(label=None)`

The single-qubit Pauli-Y gate ($\sigma_y$).

**Matrix Representation:**

$$
\begin{split}Y = \begin{pmatrix}
        0 & -i \\
        i & 0
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ Y ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the Y axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RY(\pi)$ and $Y$.

  $$
  \begin{split}RY(\pi) = \begin{pmatrix}
              0 & -1 \\
              1 & 0
            \end{pmatrix}
          = -i Y\end{split}
  $$
</Admonition>

The gate is equivalent to a bit and phase flip.

$$
\begin{split}|0\rangle \rightarrow i|1\rangle \\
|1\rangle \rightarrow -i|0\rangle\end{split}
$$

Create new Y gate.

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`YGate.decompositions`](qiskit.circuit.library.YGate.decompositions "qiskit.circuit.library.YGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`YGate.definition`](qiskit.circuit.library.YGate.definition "qiskit.circuit.library.YGate.definition")             | Return definition in terms of other basic gates.                              |
| [`YGate.label`](qiskit.circuit.library.YGate.label "qiskit.circuit.library.YGate.label")                            | Return gate label                                                             |
| [`YGate.params`](qiskit.circuit.library.YGate.params "qiskit.circuit.library.YGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                  |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`YGate.add_decomposition`](qiskit.circuit.library.YGate.add_decomposition "qiskit.circuit.library.YGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`YGate.assemble`](qiskit.circuit.library.YGate.assemble "qiskit.circuit.library.YGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`YGate.broadcast_arguments`](qiskit.circuit.library.YGate.broadcast_arguments "qiskit.circuit.library.YGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`YGate.c_if`](qiskit.circuit.library.YGate.c_if "qiskit.circuit.library.YGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`YGate.control`](qiskit.circuit.library.YGate.control "qiskit.circuit.library.YGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-Y gate.                                      |
| [`YGate.copy`](qiskit.circuit.library.YGate.copy "qiskit.circuit.library.YGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`YGate.inverse`](qiskit.circuit.library.YGate.inverse "qiskit.circuit.library.YGate.inverse")()                                                 | Return inverted Y gate ($Y{\dagger} = Y$)                                |
| [`YGate.is_parameterized`](qiskit.circuit.library.YGate.is_parameterized "qiskit.circuit.library.YGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`YGate.mirror`](qiskit.circuit.library.YGate.mirror "qiskit.circuit.library.YGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`YGate.power`](qiskit.circuit.library.YGate.power "qiskit.circuit.library.YGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`YGate.qasm`](qiskit.circuit.library.YGate.qasm "qiskit.circuit.library.YGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`YGate.repeat`](qiskit.circuit.library.YGate.repeat "qiskit.circuit.library.YGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`YGate.to_matrix`](qiskit.circuit.library.YGate.to_matrix "qiskit.circuit.library.YGate.to_matrix")()                                           | Return a numpy.array for the Y gate.                                     |

