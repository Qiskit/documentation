---
title: IGate
description: API reference for qiskit.circuit.library.IGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IGate
---

# IGate

<span id="qiskit.circuit.library.IGate" />

`IGate(label=None)`

Identity gate.

Identity gate corresponds to a single-qubit gate wait cycle, and should not be optimized or unrolled (it is an opaque gate).

**Matrix Representation:**

$$
\begin{split}I = \begin{pmatrix}
        1 & 0 \\
        0 & 1
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ I ├
     └───┘
```

Create new Identity gate.

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`IGate.decompositions`](qiskit.circuit.library.IGate.decompositions "qiskit.circuit.library.IGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`IGate.definition`](qiskit.circuit.library.IGate.definition "qiskit.circuit.library.IGate.definition")             | Return definition in terms of other basic gates.                              |
| [`IGate.label`](qiskit.circuit.library.IGate.label "qiskit.circuit.library.IGate.label")                            | Return gate label                                                             |
| [`IGate.params`](qiskit.circuit.library.IGate.params "qiskit.circuit.library.IGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                  |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`IGate.add_decomposition`](qiskit.circuit.library.IGate.add_decomposition "qiskit.circuit.library.IGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`IGate.assemble`](qiskit.circuit.library.IGate.assemble "qiskit.circuit.library.IGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`IGate.broadcast_arguments`](qiskit.circuit.library.IGate.broadcast_arguments "qiskit.circuit.library.IGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`IGate.c_if`](qiskit.circuit.library.IGate.c_if "qiskit.circuit.library.IGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`IGate.control`](qiskit.circuit.library.IGate.control "qiskit.circuit.library.IGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`IGate.copy`](qiskit.circuit.library.IGate.copy "qiskit.circuit.library.IGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`IGate.inverse`](qiskit.circuit.library.IGate.inverse "qiskit.circuit.library.IGate.inverse")()                                                 | Invert this gate.                                                        |
| [`IGate.is_parameterized`](qiskit.circuit.library.IGate.is_parameterized "qiskit.circuit.library.IGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`IGate.mirror`](qiskit.circuit.library.IGate.mirror "qiskit.circuit.library.IGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`IGate.power`](qiskit.circuit.library.IGate.power "qiskit.circuit.library.IGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`IGate.qasm`](qiskit.circuit.library.IGate.qasm "qiskit.circuit.library.IGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`IGate.repeat`](qiskit.circuit.library.IGate.repeat "qiskit.circuit.library.IGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`IGate.to_matrix`](qiskit.circuit.library.IGate.to_matrix "qiskit.circuit.library.IGate.to_matrix")()                                           | Return a numpy.array for the identity gate.                              |

