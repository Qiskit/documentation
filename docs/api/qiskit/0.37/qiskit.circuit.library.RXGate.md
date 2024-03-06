---
title: RXGate
description: API reference for qiskit.circuit.library.RXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RXGate
---

# RXGate

<span id="qiskit.circuit.library.RXGate" />

`RXGate(theta, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/circuit/library/standard_gates/rx.py "view source code")

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

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
        \cos{\th}   & -i\sin{\th} \\
        -i\sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RX gate.

## Methods Defined Here

### control

<span id="qiskit.circuit.library.RXGate.control" />

`RXGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-RX gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.RXGate.inverse" />

`RXGate.inverse()`

Return inverted RX gate.

$RX(\lambda)^{\dagger} = RX(-\lambda)$

## Attributes

<span id="qiskit.circuit.library.RXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

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

**Return type**

`str`

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

