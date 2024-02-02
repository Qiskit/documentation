---
title: RXGate
description: API reference for qiskit.circuit.library.RXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RXGate
---

# RXGate

<span id="qiskit.circuit.library.RXGate" />

`RXGate(theta, label=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/standard_gates/rx.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single-qubit rotation about the X axis.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`rx()`](qiskit.circuit.QuantumCircuit#rx "qiskit.circuit.QuantumCircuit.rx") method.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Rx(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}RX(\theta) = \exp\left(-i \th X\right) =
    \begin{pmatrix}
        \cos\left(\th\right)   & -i\sin\left(\th\right) \\
        -i\sin\left(\th\right) & \cos\left(\th\right)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RX gate.

**Methods Defined Here**

|                                                                                            |                                      |
| ------------------------------------------------------------------------------------------ | ------------------------------------ |
| [`control`](qiskit.circuit.library.RXGate#control "qiskit.circuit.library.RXGate.control") | Return a (multi-)controlled-RX gate. |
| [`inverse`](qiskit.circuit.library.RXGate#inverse "qiskit.circuit.library.RXGate.inverse") | Return inverted RX gate.             |
| [`power`](qiskit.circuit.library.RXGate#power "qiskit.circuit.library.RXGate.power")       | Raise gate to a power.               |

## Attributes

<span id="qiskit.circuit.library.RXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RXGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RXGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RXGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RXGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RXGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RXGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RXGate.unit" />

### unit

Get the time unit of duration.

