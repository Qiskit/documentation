# ControlledGate[¶](#controlledgate "Permalink to this headline")

<span id="undefined" />

`ControlledGate(name, num_qubits, params, label=None, num_ctrl_qubits=1, definition=None, ctrl_state=None, base_gate=None)`

Bases: `qiskit.circuit.gate.Gate`

Controlled unitary gate.

Create a new ControlledGate. In the new gate the first `num_ctrl_qubits` of the gate are the controls.

**Parameters**

*   **name** (`str`) – The name of the gate.
*   **num\_qubits** (`int`) – The number of qubits the gate acts on.
*   **params** (`List`) – A list of parameters for the gate.
*   **label** (`Optional`\[`str`]) – An optional label for the gate.
*   **num\_ctrl\_qubits** (`Optional`\[`int`]) – Number of control qubits.
*   **definition** (`Optional`\[`QuantumCircuit`]) – A list of gate rules for implementing this gate. The elements of the list are tuples of ([`Gate()`](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate"), \[qubit\_list], \[clbit\_list]).
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If specified as a bitstring the length must equal num\_ctrl\_qubits, MSB on left. If None, use 2\*\*num\_ctrl\_qubits-1.
*   **base\_gate** (`Optional`\[`Gate`]) – Gate object to be controlled.

**Raises**

*   **CircuitError** – If `num_ctrl_qubits` >= `num_qubits`.
*   **CircuitError** – ctrl\_state \< 0 or ctrl\_state > 2\*\*num\_ctrl\_qubits.

Examples:

Create a controlled standard gate and apply it to a circuit.

```python
from qiskit import QuantumCircuit, QuantumRegister
from qiskit.circuit.library.standard_gates import HGate

qr = QuantumRegister(3)
qc = QuantumCircuit(qr)
c3h_gate = HGate().control(2)
qc.append(c3h_gate, qr)
qc.draw()
```

```python
           
q0_0: ──■──
        │  
q0_1: ──■──
      ┌─┴─┐
q0_2: ┤ H ├
      └───┘
```

Create a controlled custom gate and apply it to a circuit.

```python
from qiskit import QuantumCircuit, QuantumRegister
from qiskit.circuit.library.standard_gates import HGate

qc1 = QuantumCircuit(2)
qc1.x(0)
qc1.h(1)
custom = qc1.to_gate().control(2)

qc2 = QuantumCircuit(4)
qc2.append(custom, [0, 3, 1, 2])
qc2.draw()
```

```python
                   
q_0: ──────■───────
     ┌─────┴──────┐
q_1: ┤0           ├
     │  circuit-8 │
q_2: ┤1           ├
     └─────┬──────┘
q_3: ──────■───────
                   
```

## Methods

|                                                                                                                                                                                  |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.ControlledGate.add_decomposition#qiskit.circuit.ControlledGate.add_decomposition "qiskit.circuit.ControlledGate.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                         |
| [`assemble`](qiskit.circuit.ControlledGate.assemble#qiskit.circuit.ControlledGate.assemble "qiskit.circuit.ControlledGate.assemble")                                             | Assemble a QasmQobjInstruction                                                                                   |
| [`broadcast_arguments`](qiskit.circuit.ControlledGate.broadcast_arguments#qiskit.circuit.ControlledGate.broadcast_arguments "qiskit.circuit.ControlledGate.broadcast_arguments") | Validation and handling of the arguments and its relationship.                                                   |
| [`c_if`](qiskit.circuit.ControlledGate.c_if#qiskit.circuit.ControlledGate.c_if "qiskit.circuit.ControlledGate.c_if")                                                             | Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`. |
| [`control`](qiskit.circuit.ControlledGate.control#qiskit.circuit.ControlledGate.control "qiskit.circuit.ControlledGate.control")                                                 | Return controlled version of gate.                                                                               |
| [`copy`](qiskit.circuit.ControlledGate.copy#qiskit.circuit.ControlledGate.copy "qiskit.circuit.ControlledGate.copy")                                                             | Copy of the instruction.                                                                                         |
| [`inverse`](qiskit.circuit.ControlledGate.inverse#qiskit.circuit.ControlledGate.inverse "qiskit.circuit.ControlledGate.inverse")                                                 | Invert this gate by calling inverse on the base gate.                                                            |
| [`is_parameterized`](qiskit.circuit.ControlledGate.is_parameterized#qiskit.circuit.ControlledGate.is_parameterized "qiskit.circuit.ControlledGate.is_parameterized")             | Return True .IFF.                                                                                                |
| [`power`](qiskit.circuit.ControlledGate.power#qiskit.circuit.ControlledGate.power "qiskit.circuit.ControlledGate.power")                                                         | Creates a unitary gate as gate^exponent.                                                                         |
| [`qasm`](qiskit.circuit.ControlledGate.qasm#qiskit.circuit.ControlledGate.qasm "qiskit.circuit.ControlledGate.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                            |
| [`repeat`](qiskit.circuit.ControlledGate.repeat#qiskit.circuit.ControlledGate.repeat "qiskit.circuit.ControlledGate.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                     |
| [`reverse_ops`](qiskit.circuit.ControlledGate.reverse_ops#qiskit.circuit.ControlledGate.reverse_ops "qiskit.circuit.ControlledGate.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                              |
| [`soft_compare`](qiskit.circuit.ControlledGate.soft_compare#qiskit.circuit.ControlledGate.soft_compare "qiskit.circuit.ControlledGate.soft_compare")                             | Soft comparison between gates.                                                                                   |
| [`to_matrix`](qiskit.circuit.ControlledGate.to_matrix#qiskit.circuit.ControlledGate.to_matrix "qiskit.circuit.ControlledGate.to_matrix")                                         | Return a Numpy.array for the gate unitary matrix.                                                                |
| [`validate_parameter`](qiskit.circuit.ControlledGate.validate_parameter#qiskit.circuit.ControlledGate.validate_parameter "qiskit.circuit.ControlledGate.validate_parameter")     | Gate parameters should be int, float, or ParameterExpression                                                     |

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
