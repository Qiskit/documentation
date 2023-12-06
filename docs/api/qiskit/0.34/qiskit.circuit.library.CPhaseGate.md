# CPhaseGate



`CPhaseGate(theta, label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

Controlled-Phase gate.

This is a diagonal and symmetric gate that induces a phase on the state of the target qubit, depending on the control state.

**Circuit symbol:**

```python
q_0: ─■──
      │λ
q_1: ─■──
```

**Matrix representation:**

$$
\begin{split}CPhase =
    |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes P =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 0 & 0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

<Admonition title="See also" type="note">
  `CRZGate`: Due to the global phase difference in the matrix definitions of Phase and RZ, CPhase and CRZ are different gates with a relative phase difference.
</Admonition>

Create new CPhase gate.

## Methods Defined Here

|                                                                                                                                              |                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`control`](qiskit.circuit.library.CPhaseGate.control#qiskit.circuit.library.CPhaseGate.control "qiskit.circuit.library.CPhaseGate.control") | Controlled version of this gate.                                            |
| [`inverse`](qiskit.circuit.library.CPhaseGate.inverse#qiskit.circuit.library.CPhaseGate.inverse "qiskit.circuit.library.CPhaseGate.inverse") | Return inverted CPhase gate ($CPhase(\lambda){\dagger} = CPhase(-\lambda)$) |

## Attributes



### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]



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



### num\_clbits

Return the number of clbits.



### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int



### num\_qubits

Return the number of qubits.



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
