---
title: RYGate
description: API reference for qiskit.circuit.library.RYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RYGate
---

# RYGate

<span id="qiskit.circuit.library.RYGate" />

`RYGate(theta, label=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/standard_gates/ry.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single-qubit rotation about the Y axis.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`ry()`](qiskit.circuit.QuantumCircuit#ry "qiskit.circuit.QuantumCircuit.ry") method.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Ry(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}RY(\theta) = \exp\left(-i \th Y\right) =
    \begin{pmatrix}
        \cos\left(\th\right) & -\sin\left(\th\right) \\
        \sin\left(\th\right) & \cos\left(\th\right)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RY gate.

**Methods Defined Here**

|                                                                                            |                                      |
| ------------------------------------------------------------------------------------------ | ------------------------------------ |
| [`control`](qiskit.circuit.library.RYGate#control "qiskit.circuit.library.RYGate.control") | Return a (multi-)controlled-RY gate. |
| [`inverse`](qiskit.circuit.library.RYGate#inverse "qiskit.circuit.library.RYGate.inverse") | Return inverted RY gate.             |
| [`power`](qiskit.circuit.library.RYGate#power "qiskit.circuit.library.RYGate.power")       | Raise gate to a power.               |

## Attributes

<span id="qiskit.circuit.library.RYGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RYGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RYGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RYGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RYGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RYGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RYGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RYGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RYGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RYGate.unit" />

### unit

Get the time unit of duration.

