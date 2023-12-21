---
title: CZGate
description: API reference for qiskit.circuit.library.CZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CZGate
---

# CZGate

<span id="qiskit.circuit.library.CZGate" />

`CZGate(label=None, ctrl_state=None)`

Controlled-Z gate.

This is a Clifford and symmetric gate.

**Circuit symbol:**

```python
q_0: ─■─
      │
q_1: ─■─
```

**Matrix representation:**

$$
\begin{split}CZ\ q_1, q_0 =
    |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes Z =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 0 & 0 & -1
    \end{pmatrix}\end{split}
$$

In the computational basis, this gate flips the phase of the target qubit if the control qubit is in the $|1\rangle$ state.

Create new CZ gate.

## Attributes

|                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`CZGate.ctrl_state`](qiskit.circuit.library.CZGate.ctrl_state "qiskit.circuit.library.CZGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`CZGate.decompositions`](qiskit.circuit.library.CZGate.decompositions "qiskit.circuit.library.CZGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`CZGate.definition`](qiskit.circuit.library.CZGate.definition "qiskit.circuit.library.CZGate.definition")             | Return definition in terms of other basic gates.                              |
| [`CZGate.label`](qiskit.circuit.library.CZGate.label "qiskit.circuit.library.CZGate.label")                            | Return gate label                                                             |
| [`CZGate.params`](qiskit.circuit.library.CZGate.params "qiskit.circuit.library.CZGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                     |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`CZGate.add_decomposition`](qiskit.circuit.library.CZGate.add_decomposition "qiskit.circuit.library.CZGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`CZGate.assemble`](qiskit.circuit.library.CZGate.assemble "qiskit.circuit.library.CZGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`CZGate.broadcast_arguments`](qiskit.circuit.library.CZGate.broadcast_arguments "qiskit.circuit.library.CZGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`CZGate.c_if`](qiskit.circuit.library.CZGate.c_if "qiskit.circuit.library.CZGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`CZGate.control`](qiskit.circuit.library.CZGate.control "qiskit.circuit.library.CZGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`CZGate.copy`](qiskit.circuit.library.CZGate.copy "qiskit.circuit.library.CZGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`CZGate.inverse`](qiskit.circuit.library.CZGate.inverse "qiskit.circuit.library.CZGate.inverse")()                                                 | Return inverted CZ gate (itself).                                        |
| [`CZGate.is_parameterized`](qiskit.circuit.library.CZGate.is_parameterized "qiskit.circuit.library.CZGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`CZGate.mirror`](qiskit.circuit.library.CZGate.mirror "qiskit.circuit.library.CZGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`CZGate.power`](qiskit.circuit.library.CZGate.power "qiskit.circuit.library.CZGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`CZGate.qasm`](qiskit.circuit.library.CZGate.qasm "qiskit.circuit.library.CZGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`CZGate.repeat`](qiskit.circuit.library.CZGate.repeat "qiskit.circuit.library.CZGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`CZGate.to_matrix`](qiskit.circuit.library.CZGate.to_matrix "qiskit.circuit.library.CZGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

