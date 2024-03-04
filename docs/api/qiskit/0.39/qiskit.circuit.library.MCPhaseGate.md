---
title: MCPhaseGate
description: API reference for qiskit.circuit.library.MCPhaseGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MCPhaseGate
---

# MCPhaseGate

<span id="qiskit.circuit.library.MCPhaseGate" />

`MCPhaseGate(lam, num_ctrl_qubits, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/circuit/library/standard_gates/p.py "view source code")

Bases: [`qiskit.circuit.controlledgate.ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

Multi-controlled-Phase gate.

This is a diagonal and symmetric gate that induces a phase on the state of the target qubit, depending on the state of the control qubits.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`mcp()`](qiskit.circuit.QuantumCircuit#mcp "qiskit.circuit.QuantumCircuit.mcp") method.

**Circuit symbol:**

```python
    q_0: ───■────
            │
            .
            │
q_(n-1): ───■────
         ┌──┴───┐
    q_n: ┤ P(λ) ├
         └──────┘
```

<Admonition title="See also" type="note">
  `CPhaseGate`: The singly-controlled-version of this gate.
</Admonition>

Create new MCPhase gate.

## Methods Defined Here

### control

<span id="qiskit.circuit.library.MCPhaseGate.control" />

`MCPhaseGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Controlled version of this gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.MCPhaseGate.inverse" />

`MCPhaseGate.inverse()`

Return inverted MCU1 gate ($MCU1(\lambda){\dagger} = MCU1(-\lambda)$)

## Attributes

<span id="qiskit.circuit.library.MCPhaseGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.MCPhaseGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="qiskit.circuit.library.MCPhaseGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.MCPhaseGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

<span id="qiskit.circuit.library.MCPhaseGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.MCPhaseGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.MCPhaseGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="qiskit.circuit.library.MCPhaseGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.MCPhaseGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.MCPhaseGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.MCPhaseGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.MCPhaseGate.unit" />

### unit

Get the time unit of duration.

