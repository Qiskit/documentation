---
title: SwapGate
description: API reference for qiskit.circuit.library.SwapGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SwapGate
---

# SwapGate

<span id="qiskit.circuit.library.SwapGate" />

`SwapGate(label=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/standard_gates/swap.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

The SWAP gate.

This is a symmetric and Clifford gate.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`swap()`](qiskit.circuit.QuantumCircuit#swap "qiskit.circuit.QuantumCircuit.swap") method.

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
\vert a, b\rangle \rightarrow \vert b, a\rangle
$$

Create new SWAP gate.

**Methods Defined Here**

|                                                                                                |                                        |
| ---------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`control`](qiskit.circuit.library.SwapGate#control "qiskit.circuit.library.SwapGate.control") | Return a (multi-)controlled-SWAP gate. |
| [`inverse`](qiskit.circuit.library.SwapGate#inverse "qiskit.circuit.library.SwapGate.inverse") | Return inverse Swap gate (itself).     |

## Attributes

<span id="qiskit.circuit.library.SwapGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.SwapGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.SwapGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.SwapGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.SwapGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.SwapGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.SwapGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.SwapGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.SwapGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.SwapGate.unit" />

### unit

Get the time unit of duration.

