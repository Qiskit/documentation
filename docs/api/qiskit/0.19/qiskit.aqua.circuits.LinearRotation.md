---
title: LinearRotation
description: API reference for qiskit.aqua.circuits.LinearRotation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.LinearRotation
---

# LinearRotation

<span id="qiskit.aqua.circuits.LinearRotation" />

`LinearRotation(slope, offset, num_state_qubits, basis='Y', i_state=None, i_target=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/circuits/linear_rotation.py "view source code")

*DEPRECATED.* Linearly-controlled X, Y or Z rotation.

<Admonition title="Deprecated since version 0.7.0" type="danger">
  Use Terra’s qiskit.circuit.library.LinearPauliRotations instead.
</Admonition>

For a register of state qubits |x> and a target qubit |0> this operator acts as:

> |x>|0> –> |x>( cos(slope \* x + offset)|0> + sin(slope \* x + offset)|1> )

**Parameters**

*   **slope** (*float*) – slope of the controlled rotation
*   **offset** (*float*) – offset of the controlled rotation
*   **num\_state\_qubits** (*int*) – number of qubits representing the state
*   **basis** (*str*) – type of Pauli rotation (‘X’, ‘Y’, ‘Z’)
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of the state qubits (least significant to most significant)
*   **i\_target** (*Optional(int)*) – index of target qubit

**Raises**

**ValueError** – invalid input

## Attributes

### num\_target\_qubits

Returns the number of target qubits

## Methods

### build

<span id="qiskit.aqua.circuits.LinearRotation.build" />

`LinearRotation.build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

### build\_controlled

<span id="qiskit.aqua.circuits.LinearRotation.build_controlled" />

`LinearRotation.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.circuits.LinearRotation.build_controlled_inverse" />

`LinearRotation.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.circuits.LinearRotation.build_controlled_inverse_power" />

`LinearRotation.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.circuits.LinearRotation.build_controlled_power" />

`LinearRotation.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.circuits.LinearRotation.build_inverse" />

`LinearRotation.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.circuits.LinearRotation.build_inverse_power" />

`LinearRotation.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.circuits.LinearRotation.build_power" />

`LinearRotation.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.circuits.LinearRotation.get_num_qubits" />

`LinearRotation.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.circuits.LinearRotation.get_num_qubits_controlled" />

`LinearRotation.get_num_qubits_controlled()`

returns number of qubits controlled

### required\_ancillas

<span id="qiskit.aqua.circuits.LinearRotation.required_ancillas" />

`LinearRotation.required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.circuits.LinearRotation.required_ancillas_controlled" />

`LinearRotation.required_ancillas_controlled()`

returns required ancillas controlled

