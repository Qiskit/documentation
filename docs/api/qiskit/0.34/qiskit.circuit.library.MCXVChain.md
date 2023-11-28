# MCXVChain[¶](#mcxvchain "Permalink to this headline")

<span id="undefined" />

`MCXVChain(num_ctrl_qubits, dirty_ancillas=False, label=None, ctrl_state=None)`

Bases: `qiskit.circuit.library.standard_gates.x.MCXGate`

Implement the multi-controlled X gate using a V-chain of CX gates.

Create new MCX gate.

## Methods Defined Here

|                                                                                                                                                                                                       |                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`get_num_ancilla_qubits`](qiskit.circuit.library.MCXVChain.get_num_ancilla_qubits#qiskit.circuit.library.MCXVChain.get_num_ancilla_qubits "qiskit.circuit.library.MCXVChain.get_num_ancilla_qubits") | Get the number of required ancilla qubits. |
| [`inverse`](qiskit.circuit.library.MCXVChain.inverse#qiskit.circuit.library.MCXVChain.inverse "qiskit.circuit.library.MCXVChain.inverse")                                                             | Invert this gate.                          |

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

### num\_ancilla\_qubits

The number of ancilla qubits.

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
