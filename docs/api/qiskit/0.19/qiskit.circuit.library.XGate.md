---
title: XGate
description: API reference for qiskit.circuit.library.XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.XGate
---

# XGate

<span id="qiskit.circuit.library.XGate" />

`XGate(label=None)`

The single-qubit Pauli-X gate ($\sigma_x$).

**Matrix Representation:**

$$
\begin{split}X = \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ X ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the X axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(\pi)$ and $X$.

  $$
  \begin{split}RX(\pi) = \begin{pmatrix}
              0 & -i \\
              -i & 0
            \end{pmatrix}
          = -i X\end{split}
  $$
</Admonition>

The gate is equivalent to a classical bit flip.

$$
\begin{split}|0\rangle \rightarrow |1\rangle \\
|1\rangle \rightarrow |0\rangle\end{split}
$$

Create new X gate.

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`XGate.decompositions`](qiskit.circuit.library.XGate.decompositions "qiskit.circuit.library.XGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`XGate.definition`](qiskit.circuit.library.XGate.definition "qiskit.circuit.library.XGate.definition")             | Return definition in terms of other basic gates.                              |
| [`XGate.label`](qiskit.circuit.library.XGate.label "qiskit.circuit.library.XGate.label")                            | Return gate label                                                             |
| [`XGate.params`](qiskit.circuit.library.XGate.params "qiskit.circuit.library.XGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                  |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`XGate.add_decomposition`](qiskit.circuit.library.XGate.add_decomposition "qiskit.circuit.library.XGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`XGate.assemble`](qiskit.circuit.library.XGate.assemble "qiskit.circuit.library.XGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`XGate.broadcast_arguments`](qiskit.circuit.library.XGate.broadcast_arguments "qiskit.circuit.library.XGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`XGate.c_if`](qiskit.circuit.library.XGate.c_if "qiskit.circuit.library.XGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`XGate.control`](qiskit.circuit.library.XGate.control "qiskit.circuit.library.XGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-X gate.                                      |
| [`XGate.copy`](qiskit.circuit.library.XGate.copy "qiskit.circuit.library.XGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`XGate.inverse`](qiskit.circuit.library.XGate.inverse "qiskit.circuit.library.XGate.inverse")()                                                 | Return inverted X gate (itself).                                         |
| [`XGate.is_parameterized`](qiskit.circuit.library.XGate.is_parameterized "qiskit.circuit.library.XGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`XGate.mirror`](qiskit.circuit.library.XGate.mirror "qiskit.circuit.library.XGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`XGate.power`](qiskit.circuit.library.XGate.power "qiskit.circuit.library.XGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`XGate.qasm`](qiskit.circuit.library.XGate.qasm "qiskit.circuit.library.XGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`XGate.repeat`](qiskit.circuit.library.XGate.repeat "qiskit.circuit.library.XGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`XGate.to_matrix`](qiskit.circuit.library.XGate.to_matrix "qiskit.circuit.library.XGate.to_matrix")()                                           | Return a numpy.array for the X gate.                                     |

