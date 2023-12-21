# C3XGate

`C3XGate(angle=None, label=None, ctrl_state=None)`

Bases: `qiskit.circuit.controlledgate.ControlledGate`

The X gate controlled on 3 qubits.

This implementation uses $\sqrt{T}$ and 14 CNOT gates.

Create a new 3-qubit controlled X gate.

## Methods Defined Here

|                                                                                                                                     |                                  |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`control`](qiskit.circuit.library.C3XGate.control#qiskit.circuit.library.C3XGate.control "qiskit.circuit.library.C3XGate.control") | Controlled version of this gate. |
| [`inverse`](qiskit.circuit.library.C3XGate.inverse#qiskit.circuit.library.C3XGate.inverse "qiskit.circuit.library.C3XGate.inverse") | Invert this gate.                |

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
