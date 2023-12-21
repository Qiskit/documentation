---
title: HGate
description: API reference for qiskit.circuit.library.HGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.HGate
---

# HGate

<span id="qiskit.circuit.library.HGate" />

`HGate(label=None)`

Single-qubit Hadamard gate.

This gate is a pi rotation about the X+Z axis, and has the effect of changing computation basis from $|0\rangle,|1\rangle$ to $|+\rangle,|-\rangle$ and vice-versa.

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ H ├
     └───┘
```

**Matrix Representation:**

$$
\begin{split}H = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1 & 1 \\
        1 & -1
    \end{pmatrix}\end{split}
$$

Create new H gate.

## Attributes

|                                                                                                                     |                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`HGate.decompositions`](qiskit.circuit.library.HGate.decompositions "qiskit.circuit.library.HGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`HGate.definition`](qiskit.circuit.library.HGate.definition "qiskit.circuit.library.HGate.definition")             | Return definition in terms of other basic gates.                              |
| [`HGate.label`](qiskit.circuit.library.HGate.label "qiskit.circuit.library.HGate.label")                            | Return gate label                                                             |
| [`HGate.params`](qiskit.circuit.library.HGate.params "qiskit.circuit.library.HGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                  |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`HGate.add_decomposition`](qiskit.circuit.library.HGate.add_decomposition "qiskit.circuit.library.HGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`HGate.assemble`](qiskit.circuit.library.HGate.assemble "qiskit.circuit.library.HGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`HGate.broadcast_arguments`](qiskit.circuit.library.HGate.broadcast_arguments "qiskit.circuit.library.HGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`HGate.c_if`](qiskit.circuit.library.HGate.c_if "qiskit.circuit.library.HGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`HGate.control`](qiskit.circuit.library.HGate.control "qiskit.circuit.library.HGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (multi-)controlled-H gate.                                      |
| [`HGate.copy`](qiskit.circuit.library.HGate.copy "qiskit.circuit.library.HGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`HGate.inverse`](qiskit.circuit.library.HGate.inverse "qiskit.circuit.library.HGate.inverse")()                                                 | Return inverted H gate (itself).                                         |
| [`HGate.is_parameterized`](qiskit.circuit.library.HGate.is_parameterized "qiskit.circuit.library.HGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`HGate.mirror`](qiskit.circuit.library.HGate.mirror "qiskit.circuit.library.HGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`HGate.power`](qiskit.circuit.library.HGate.power "qiskit.circuit.library.HGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`HGate.qasm`](qiskit.circuit.library.HGate.qasm "qiskit.circuit.library.HGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`HGate.repeat`](qiskit.circuit.library.HGate.repeat "qiskit.circuit.library.HGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`HGate.to_matrix`](qiskit.circuit.library.HGate.to_matrix "qiskit.circuit.library.HGate.to_matrix")()                                           | Return a Numpy.array for the H gate.                                     |

