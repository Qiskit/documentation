# CZGate



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



### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`



### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.



### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`



### duration

Get the duration.



### label

Return instruction label

**Return type**

`str`



### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`



### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int



### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate



### unit

Get the time unit of duration.
