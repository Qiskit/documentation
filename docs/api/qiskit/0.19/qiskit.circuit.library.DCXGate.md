---
title: DCXGate
description: API reference for qiskit.circuit.library.DCXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.DCXGate
---

# DCXGate

<span id="qiskit.circuit.library.DCXGate" />

`DCXGate`

Double-CNOT gate.

A 2-qubit Clifford gate consisting of two back-to-back CNOTs with alternate controls.

```python
          ┌───┐
q_0: ──■──┤ X ├
     ┌─┴─┐└─┬─┘
q_1: ┤ X ├──■──
     └───┘
```

This is a classical logic gate, equivalent to a CNOT-SWAP (CNS) sequence, and locally equivalent to an iSWAP.

$$
\begin{split}DCX\ q_0, q_1 =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0
    \end{pmatrix}\end{split}
$$

Create new DCX gate.

## Attributes

|                                                                                                                           |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`DCXGate.decompositions`](qiskit.circuit.library.DCXGate.decompositions "qiskit.circuit.library.DCXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`DCXGate.definition`](qiskit.circuit.library.DCXGate.definition "qiskit.circuit.library.DCXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`DCXGate.label`](qiskit.circuit.library.DCXGate.label "qiskit.circuit.library.DCXGate.label")                            | Return gate label                                                             |
| [`DCXGate.params`](qiskit.circuit.library.DCXGate.params "qiskit.circuit.library.DCXGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                        |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`DCXGate.add_decomposition`](qiskit.circuit.library.DCXGate.add_decomposition "qiskit.circuit.library.DCXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`DCXGate.assemble`](qiskit.circuit.library.DCXGate.assemble "qiskit.circuit.library.DCXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`DCXGate.broadcast_arguments`](qiskit.circuit.library.DCXGate.broadcast_arguments "qiskit.circuit.library.DCXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`DCXGate.c_if`](qiskit.circuit.library.DCXGate.c_if "qiskit.circuit.library.DCXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`DCXGate.control`](qiskit.circuit.library.DCXGate.control "qiskit.circuit.library.DCXGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`DCXGate.copy`](qiskit.circuit.library.DCXGate.copy "qiskit.circuit.library.DCXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`DCXGate.inverse`](qiskit.circuit.library.DCXGate.inverse "qiskit.circuit.library.DCXGate.inverse")()                                                 | Invert this instruction.                                                 |
| [`DCXGate.is_parameterized`](qiskit.circuit.library.DCXGate.is_parameterized "qiskit.circuit.library.DCXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`DCXGate.mirror`](qiskit.circuit.library.DCXGate.mirror "qiskit.circuit.library.DCXGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`DCXGate.power`](qiskit.circuit.library.DCXGate.power "qiskit.circuit.library.DCXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`DCXGate.qasm`](qiskit.circuit.library.DCXGate.qasm "qiskit.circuit.library.DCXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`DCXGate.repeat`](qiskit.circuit.library.DCXGate.repeat "qiskit.circuit.library.DCXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`DCXGate.to_matrix`](qiskit.circuit.library.DCXGate.to_matrix "qiskit.circuit.library.DCXGate.to_matrix")()                                           | Return a numpy.array for the DCX gate.                                   |

