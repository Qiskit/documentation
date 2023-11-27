# CSwapGate[¶](#cswapgate "Permalink to this headline")

<span id="undefined" />

`CSwapGate(label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

Controlled-SWAP gate, also known as the Fredkin gate.

**Circuit symbol:**

```python
q_0: ─X─
      │
q_1: ─X─
      │
q_2: ─■─
```

**Matrix representation:**

$$
\begin{split}CSWAP\ q_0, q_1, q_2 =
    |0 \rangle \langle 0| \otimes I \otimes I +
    |1 \rangle \langle 1| \otimes SWAP =
    \begin{pmatrix}
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
        0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_2. Thus a textbook matrix for this gate will be:

  ```python
  q_0: ─■─
        │
  q_1: ─X─
        │
  q_2: ─X─
  ```

  $$
  \begin{split}CSWAP\ q_2, q_1, q_0 =
      |0 \rangle \langle 0| \otimes I \otimes I +
      |1 \rangle \langle 1| \otimes SWAP =
      \begin{pmatrix}
          1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
          0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
          0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
          0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
          0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
          0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
          0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
      \end{pmatrix}\end{split}
  $$
</Admonition>

In the computational basis, this gate swaps the states of the two target qubits if the control qubit is in the $|1\rangle$ state.

$$
|0, b, c\rangle \rightarrow |0, b, c\rangle
|1, b, c\rangle \rightarrow |1, c, b\rangle
$$

Create new CSWAP gate.

## Methods Defined Here

|                                                                                                                                           |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`inverse`](qiskit.circuit.library.CSwapGate.inverse#qiskit.circuit.library.CSwapGate.inverse "qiskit.circuit.library.CSwapGate.inverse") | Return inverse CSwap gate (itself). |

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
