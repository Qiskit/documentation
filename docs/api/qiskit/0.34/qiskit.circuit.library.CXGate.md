# CXGate



`CXGate(label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

Controlled-X gate.

**Circuit symbol:**

```python
q_0: ──■──
     ┌─┴─┐
q_1: ┤ X ├
     └───┘
```

**Matrix representation:**

$$
\begin{split}CX\ q_0, q_1 =
    I \otimes |0\rangle\langle0| + X \otimes |1\rangle\langle1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 \\
        0 & 0 & 1 & 0 \\
        0 & 1 & 0 & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───┐
  q_0: ┤ X ├
       └─┬─┘
  q_1: ──■──
  ```

  $$
  \begin{split}CX\ q_1, q_0 =
      |0 \rangle\langle 0| \otimes I + |1 \rangle\langle 1| \otimes X =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & 0 & 1 \\
          0 & 0 & 1 & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

In the computational basis, this gate flips the target qubit if the control qubit is in the $|1\rangle$ state. In this sense it is similar to a classical XOR gate.

$$
`|a, b\rangle \rightarrow |a, a \oplus b\rangle`
$$

Create new CX gate.

## Methods Defined Here

|                                                                                                                                  |                                                     |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`control`](qiskit.circuit.library.CXGate.control#qiskit.circuit.library.CXGate.control "qiskit.circuit.library.CXGate.control") | Return a controlled-X gate with more control lines. |
| [`inverse`](qiskit.circuit.library.CXGate.inverse#qiskit.circuit.library.CXGate.inverse "qiskit.circuit.library.CXGate.inverse") | Return inverted CX gate (itself).                   |

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
