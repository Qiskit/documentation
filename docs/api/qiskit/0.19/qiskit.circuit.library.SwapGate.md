---
title: SwapGate
description: API reference for qiskit.circuit.library.SwapGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SwapGate
---

# SwapGate

<span id="qiskit.circuit.library.SwapGate" />

`SwapGate(label=None)`

The SWAP gate.

This is a symmetric and Clifford gate.

**Circuit symbol:**

```python
q_0: ─X─
      │
q_1: ─X─
```

**Matrix Representation:**

$$
\begin{split}SWAP =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 0 & 1
    \end{pmatrix}\end{split}
$$

The gate is equivalent to a state swap and is a classical logic gate.

$$
|a, b\rangle \rightarrow |b, a\rangle
$$

Create new SWAP gate.

## Attributes

|                                                                                                                              |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`SwapGate.decompositions`](qiskit.circuit.library.SwapGate.decompositions "qiskit.circuit.library.SwapGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`SwapGate.definition`](qiskit.circuit.library.SwapGate.definition "qiskit.circuit.library.SwapGate.definition")             | Return definition in terms of other basic gates.                              |
| [`SwapGate.label`](qiskit.circuit.library.SwapGate.label "qiskit.circuit.library.SwapGate.label")                            | Return gate label                                                             |
| [`SwapGate.params`](qiskit.circuit.library.SwapGate.params "qiskit.circuit.library.SwapGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                           |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`SwapGate.add_decomposition`](qiskit.circuit.library.SwapGate.add_decomposition "qiskit.circuit.library.SwapGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`SwapGate.assemble`](qiskit.circuit.library.SwapGate.assemble "qiskit.circuit.library.SwapGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`SwapGate.broadcast_arguments`](qiskit.circuit.library.SwapGate.broadcast_arguments "qiskit.circuit.library.SwapGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`SwapGate.c_if`](qiskit.circuit.library.SwapGate.c_if "qiskit.circuit.library.SwapGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`SwapGate.control`](qiskit.circuit.library.SwapGate.control "qiskit.circuit.library.SwapGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return a (multi-)controlled-SWAP gate.                                   |
| [`SwapGate.copy`](qiskit.circuit.library.SwapGate.copy "qiskit.circuit.library.SwapGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`SwapGate.inverse`](qiskit.circuit.library.SwapGate.inverse "qiskit.circuit.library.SwapGate.inverse")()                                                 | Return inverse Swap gate (itself).                                       |
| [`SwapGate.is_parameterized`](qiskit.circuit.library.SwapGate.is_parameterized "qiskit.circuit.library.SwapGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`SwapGate.mirror`](qiskit.circuit.library.SwapGate.mirror "qiskit.circuit.library.SwapGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`SwapGate.power`](qiskit.circuit.library.SwapGate.power "qiskit.circuit.library.SwapGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`SwapGate.qasm`](qiskit.circuit.library.SwapGate.qasm "qiskit.circuit.library.SwapGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`SwapGate.repeat`](qiskit.circuit.library.SwapGate.repeat "qiskit.circuit.library.SwapGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`SwapGate.to_matrix`](qiskit.circuit.library.SwapGate.to_matrix "qiskit.circuit.library.SwapGate.to_matrix")()                                           | Return a numpy.array for the SWAP gate.                                  |

