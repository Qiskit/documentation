---
title: ControlledGate
description: API reference for qiskit.circuit.ControlledGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ControlledGate
---

# ControlledGate

<span id="qiskit.circuit.ControlledGate" />

`ControlledGate(name, num_qubits, params, label=None, num_ctrl_qubits=1, definition=None, ctrl_state=None)`

Controlled unitary gate.

Create a new ControlledGate. In the new gate the first `num_ctrl_qubits` of the gate are the controls.

**Parameters**

*   **name** (`str`) – The name of the gate.
*   **num\_qubits** (`int`) – The number of qubits the gate acts on.
*   **params** (`List`) – A list of parameters for the gate.
*   **label** (`Optional`\[`str`]) – An optional label for the gate.
*   **num\_ctrl\_qubits** (`Optional`\[`int`]) – Number of control qubits.
*   **definition** (`Optional`\[`List`\[`Tuple`\[[`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate"), `List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")], `List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]]]]) – A list of gate rules for implementing this gate. The elements of the list are tuples of ([`Gate()`](qiskit.circuit.Gate "qiskit.circuit.Gate"), \[qubit\_list], \[clbit\_list]).
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If specified as a bitstring the length must equal num\_ctrl\_qubits, MSB on left. If None, use 2\*\*num\_ctrl\_qubits-1.

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
     │  circuit12 │
q_2: ┤1           ├
     └─────┬──────┘
q_3: ──────■───────
                   
```

## Attributes

|                                                                                                                                |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`ControlledGate.ctrl_state`](qiskit.circuit.ControlledGate.ctrl_state "qiskit.circuit.ControlledGate.ctrl_state")             | Return the control state of the gate as a decimal integer.                    |
| [`ControlledGate.decompositions`](qiskit.circuit.ControlledGate.decompositions "qiskit.circuit.ControlledGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`ControlledGate.definition`](qiskit.circuit.ControlledGate.definition "qiskit.circuit.ControlledGate.definition")             | Return definition in terms of other basic gates.                              |
| [`ControlledGate.label`](qiskit.circuit.ControlledGate.label "qiskit.circuit.ControlledGate.label")                            | Return gate label                                                             |
| [`ControlledGate.params`](qiskit.circuit.ControlledGate.params "qiskit.circuit.ControlledGate.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                             |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`ControlledGate.add_decomposition`](qiskit.circuit.ControlledGate.add_decomposition "qiskit.circuit.ControlledGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`ControlledGate.assemble`](qiskit.circuit.ControlledGate.assemble "qiskit.circuit.ControlledGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`ControlledGate.broadcast_arguments`](qiskit.circuit.ControlledGate.broadcast_arguments "qiskit.circuit.ControlledGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`ControlledGate.c_if`](qiskit.circuit.ControlledGate.c_if "qiskit.circuit.ControlledGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`ControlledGate.control`](qiskit.circuit.ControlledGate.control "qiskit.circuit.ControlledGate.control")(\[num\_ctrl\_qubits, …])                          | Return controlled version of gate.                                       |
| [`ControlledGate.copy`](qiskit.circuit.ControlledGate.copy "qiskit.circuit.ControlledGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`ControlledGate.inverse`](qiskit.circuit.ControlledGate.inverse "qiskit.circuit.ControlledGate.inverse")()                                                 | Invert this gate by calling inverse on the base gate.                    |
| [`ControlledGate.is_parameterized`](qiskit.circuit.ControlledGate.is_parameterized "qiskit.circuit.ControlledGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`ControlledGate.mirror`](qiskit.circuit.ControlledGate.mirror "qiskit.circuit.ControlledGate.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`ControlledGate.power`](qiskit.circuit.ControlledGate.power "qiskit.circuit.ControlledGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`ControlledGate.qasm`](qiskit.circuit.ControlledGate.qasm "qiskit.circuit.ControlledGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`ControlledGate.repeat`](qiskit.circuit.ControlledGate.repeat "qiskit.circuit.ControlledGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`ControlledGate.to_matrix`](qiskit.circuit.ControlledGate.to_matrix "qiskit.circuit.ControlledGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |

