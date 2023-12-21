---
title: RXGate
description: API reference for qiskit.circuit.library.RXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RXGate
---

# RXGate

<span id="qiskit.circuit.library.RXGate" />

`RXGate(theta, label=None)`

Single-qubit rotation about the X axis.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Rx(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}RX(\theta) = exp(-i \th X) =
    \begin{pmatrix}
        \cos{\th}   & -i\sin{\th} \\
        -i\sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RX gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`RXGate.decompositions`](qiskit.circuit.library.RXGate.decompositions "qiskit.circuit.library.RXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`RXGate.definition`](qiskit.circuit.library.RXGate.definition "qiskit.circuit.library.RXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`RXGate.label`](qiskit.circuit.library.RXGate.label "qiskit.circuit.library.RXGate.label")                            | Return gate label                                                             |
| [`RXGate.params`](qiskit.circuit.library.RXGate.params "qiskit.circuit.library.RXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`RXGate.add_decomposition`](qiskit.circuit.library.RXGate.add_decomposition "qiskit.circuit.library.RXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`RXGate.assemble`](qiskit.circuit.library.RXGate.assemble "qiskit.circuit.library.RXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`RXGate.broadcast_arguments`](qiskit.circuit.library.RXGate.broadcast_arguments "qiskit.circuit.library.RXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`RXGate.c_if`](qiskit.circuit.library.RXGate.c_if "qiskit.circuit.library.RXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`RXGate.control`](qiskit.circuit.library.RXGate.control "qiskit.circuit.library.RXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (mutli-)controlled-RX gate.                                     |
| [`RXGate.copy`](qiskit.circuit.library.RXGate.copy "qiskit.circuit.library.RXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`RXGate.inverse`](qiskit.circuit.library.RXGate.inverse "qiskit.circuit.library.RXGate.inverse")()                                                 | Return inverted RX gate.                                                 |
| [`RXGate.is_parameterized`](qiskit.circuit.library.RXGate.is_parameterized "qiskit.circuit.library.RXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`RXGate.mirror`](qiskit.circuit.library.RXGate.mirror "qiskit.circuit.library.RXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`RXGate.power`](qiskit.circuit.library.RXGate.power "qiskit.circuit.library.RXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`RXGate.qasm`](qiskit.circuit.library.RXGate.qasm "qiskit.circuit.library.RXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`RXGate.repeat`](qiskit.circuit.library.RXGate.repeat "qiskit.circuit.library.RXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`RXGate.to_matrix`](qiskit.circuit.library.RXGate.to_matrix "qiskit.circuit.library.RXGate.to_matrix")()                                           | Return a numpy.array for the RX gate.                                    |

