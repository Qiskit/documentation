# C4XGate



`C4XGate(label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

The 4-qubit controlled X gate.

This implementation is based on Page 21, Lemma 7.5, of \[1], with the use of the relative phase version of c3x, the rc3x \[2].

## References

\[1] Barenco et al., 1995. [https://arxiv.org/pdf/quant-ph/9503016.pdf](https://arxiv.org/pdf/quant-ph/9503016.pdf) \[2] Maslov, 2015. [https://arxiv.org/abs/1508.03273](https://arxiv.org/abs/1508.03273)

Create a new 4-qubit controlled X gate.

## Methods Defined Here

|                                                                                                                                     |                                  |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`control`](qiskit.circuit.library.C4XGate.control#qiskit.circuit.library.C4XGate.control "qiskit.circuit.library.C4XGate.control") | Controlled version of this gate. |
| [`inverse`](qiskit.circuit.library.C4XGate.inverse#qiskit.circuit.library.C4XGate.inverse "qiskit.circuit.library.C4XGate.inverse") | Invert this gate.                |

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
