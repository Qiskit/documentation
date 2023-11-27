# MCPhaseGate[¶](#mcphasegate "Permalink to this headline")

<span id="undefined" />

`MCPhaseGate(lam, num_ctrl_qubits, label=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

Multi-controlled-Phase gate.

This is a diagonal and symmetric gate that induces a phase on the state of the target qubit, depending on the state of the control qubits.

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

|                                                                                                                                                 |                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`control`](qiskit.circuit.library.MCPhaseGate.control#qiskit.circuit.library.MCPhaseGate.control "qiskit.circuit.library.MCPhaseGate.control") | Controlled version of this gate.                                      |
| [`inverse`](qiskit.circuit.library.MCPhaseGate.inverse#qiskit.circuit.library.MCPhaseGate.inverse "qiskit.circuit.library.MCPhaseGate.inverse") | Return inverted MCU1 gate ($MCU1(\lambda){\dagger} = MCU1(-\lambda)$) |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="undefined" />

### unit

Get the time unit of duration.
