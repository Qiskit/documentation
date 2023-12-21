---
title: RYGate
description: API reference for qiskit.circuit.library.RYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RYGate
---

# RYGate

<span id="qiskit.circuit.library.RYGate" />

`RYGate(theta, label=None)`

Single-qubit rotation about the Y axis.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Ry(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}RY(\theta) = exp(-i \th Y) =
    \begin{pmatrix}
        \cos{\th} & -\sin{\th} \\
        \sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RY gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RYGate.decompositions`](qiskit.circuit.library.RYGate.decompositions "qiskit.circuit.library.RYGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RYGate.definition`](qiskit.circuit.library.RYGate.definition "qiskit.circuit.library.RYGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RYGate.label`](qiskit.circuit.library.RYGate.label "qiskit.circuit.library.RYGate.label")                            | Return gate label                                                             |
| [`RYGate.params`](qiskit.circuit.library.RYGate.params "qiskit.circuit.library.RYGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`RYGate.add_decomposition`](qiskit.circuit.library.RYGate.add_decomposition "qiskit.circuit.library.RYGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RYGate.assemble`](qiskit.circuit.library.RYGate.assemble "qiskit.circuit.library.RYGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RYGate.broadcast_arguments`](qiskit.circuit.library.RYGate.broadcast_arguments "qiskit.circuit.library.RYGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RYGate.c_if`](qiskit.circuit.library.RYGate.c_if "qiskit.circuit.library.RYGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RYGate.control`](qiskit.circuit.library.RYGate.control "qiskit.circuit.library.RYGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-RY gate.                                     |
| [`RYGate.copy`](qiskit.circuit.library.RYGate.copy "qiskit.circuit.library.RYGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RYGate.inverse`](qiskit.circuit.library.RYGate.inverse "qiskit.circuit.library.RYGate.inverse")()                                                 | Return inverted RY gate.                                                 |
| [`RYGate.is_parameterized`](qiskit.circuit.library.RYGate.is_parameterized "qiskit.circuit.library.RYGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RYGate.mirror`](qiskit.circuit.library.RYGate.mirror "qiskit.circuit.library.RYGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RYGate.power`](qiskit.circuit.library.RYGate.power "qiskit.circuit.library.RYGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RYGate.qasm`](qiskit.circuit.library.RYGate.qasm "qiskit.circuit.library.RYGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RYGate.repeat`](qiskit.circuit.library.RYGate.repeat "qiskit.circuit.library.RYGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RYGate.to_matrix`](qiskit.circuit.library.RYGate.to_matrix "qiskit.circuit.library.RYGate.to_matrix")()                                           | Return a numpy.array for the RY gate.                                    |

