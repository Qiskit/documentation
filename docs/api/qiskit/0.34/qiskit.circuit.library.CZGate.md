# CZGate

<span id="undefined" />

`CZGate(label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

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

## Methods Defined Here

|                                                                                                                                  |                                   |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`inverse`](qiskit.circuit.library.CZGate.inverse#qiskit.circuit.library.CZGate.inverse "qiskit.circuit.library.CZGate.inverse") | Return inverted CZ gate (itself). |

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
