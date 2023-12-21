---
title: iSwapGate
description: API reference for qiskit.circuit.library.iSwapGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.iSwapGate
---

# iSwapGate

<span id="qiskit.circuit.library.iSwapGate" />

`iSwapGate`

iSWAP gate.

A 2-qubit XX+YY interaction. This is a Clifford and symmetric gate. Its action is to swap two qubit states and phase the $|01\rangle$ and $|10\rangle$ amplitudes by i.

**Circuit Symbol:**

```python
q_0: ─⨂─
      │
q_1: ─⨂─
```

**Reference Implementation:**

```python
     ┌───┐┌───┐     ┌───┐
q_0: ┤ S ├┤ H ├──■──┤ X ├─────
     ├───┤└───┘┌─┴─┐└─┬─┘┌───┐
q_1: ┤ S ├─────┤ X ├──■──┤ H ├
     └───┘     └───┘     └───┘
```

**Matrix Representation:**

$$
\begin{split}iSWAP = R_{XX+YY}(-\frac{\pi}{2})
  = exp(i \frac{\pi}{4} (X{\otimes}X+Y{\otimes}Y)) =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & i & 0 \\
        0 & i & 0 & 0 \\
        0 & 0 & 0 & 1
    \end{pmatrix}\end{split}
$$

This gate is equivalent to a SWAP up to a diagonal.

$$
\begin{split}iSWAP =
   \begin{pmatrix}
       1 & 0 & 0 & 0 \\
       0 & 0 & 1 & 0 \\
       0 & 1 & 0 & 0 \\
       0 & 0 & 0 & 1
   \end{pmatrix}
.  \begin{pmatrix}
       1 & 0 & 0 & 0 \\
       0 & i & 0 & 0 \\
       0 & 0 & i & 0 \\
       0 & 0 & 0 & 1
   \end{pmatrix}\end{split}
$$

Create new iSwap gate.

## Attributes

|                                                                                                                                 |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`iSwapGate.decompositions`](qiskit.circuit.library.iSwapGate.decompositions "qiskit.circuit.library.iSwapGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`iSwapGate.definition`](qiskit.circuit.library.iSwapGate.definition "qiskit.circuit.library.iSwapGate.definition")             | Return definition in terms of other basic gates.                              |
| [`iSwapGate.label`](qiskit.circuit.library.iSwapGate.label "qiskit.circuit.library.iSwapGate.label")                            | Return gate label                                                             |
| [`iSwapGate.params`](qiskit.circuit.library.iSwapGate.params "qiskit.circuit.library.iSwapGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                              |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`iSwapGate.add_decomposition`](qiskit.circuit.library.iSwapGate.add_decomposition "qiskit.circuit.library.iSwapGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`iSwapGate.assemble`](qiskit.circuit.library.iSwapGate.assemble "qiskit.circuit.library.iSwapGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`iSwapGate.broadcast_arguments`](qiskit.circuit.library.iSwapGate.broadcast_arguments "qiskit.circuit.library.iSwapGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`iSwapGate.c_if`](qiskit.circuit.library.iSwapGate.c_if "qiskit.circuit.library.iSwapGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`iSwapGate.control`](qiskit.circuit.library.iSwapGate.control "qiskit.circuit.library.iSwapGate.control")(\[num\_ctrl\_qubits, label, …])                   | Return controlled version of gate.                                       |
| [`iSwapGate.copy`](qiskit.circuit.library.iSwapGate.copy "qiskit.circuit.library.iSwapGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`iSwapGate.inverse`](qiskit.circuit.library.iSwapGate.inverse "qiskit.circuit.library.iSwapGate.inverse")()                                                 | Invert this instruction.                                                 |
| [`iSwapGate.is_parameterized`](qiskit.circuit.library.iSwapGate.is_parameterized "qiskit.circuit.library.iSwapGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`iSwapGate.mirror`](qiskit.circuit.library.iSwapGate.mirror "qiskit.circuit.library.iSwapGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`iSwapGate.power`](qiskit.circuit.library.iSwapGate.power "qiskit.circuit.library.iSwapGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`iSwapGate.qasm`](qiskit.circuit.library.iSwapGate.qasm "qiskit.circuit.library.iSwapGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`iSwapGate.repeat`](qiskit.circuit.library.iSwapGate.repeat "qiskit.circuit.library.iSwapGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`iSwapGate.to_matrix`](qiskit.circuit.library.iSwapGate.to_matrix "qiskit.circuit.library.iSwapGate.to_matrix")()                                           | Return a numpy.array for the iSWAP gate.                                 |

