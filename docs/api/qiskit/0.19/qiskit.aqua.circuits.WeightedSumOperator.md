---
title: WeightedSumOperator
description: API reference for qiskit.aqua.circuits.WeightedSumOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.WeightedSumOperator
---

# WeightedSumOperator

<span id="qiskit.aqua.circuits.WeightedSumOperator" />

`WeightedSumOperator(num_state_qubits, weights, i_state=None, i_sum=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/circuits/weighted_sum_operator.py "view source code")

Adds q^T \* w to separate register for non-negative integer weights w.

Computes the weighted sum controlled by state qubits

**Parameters**

*   **num\_state\_qubits** (*int*) – number of state qubits
*   **weights** (*Union(list, numpy.ndarray)*) – weights per state qubits
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of state qubits, set to range(num\_state\_qubits) if None
*   **i\_sum** (*Optional(int)*) – indices of target qubits (that represent the resulting sum), set to range(num\_state\_qubits, num\_state\_qubits + req\_num\_sum\_qubits) if None

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

### num\_carry\_qubits

returns num carry qubits

### num\_state\_qubits

returns num state qubits

### num\_sum\_qubits

returns num sum qubits

### num\_target\_qubits

Returns the number of target qubits

### weights

returns weights

## Methods

### build

<span id="qiskit.aqua.circuits.WeightedSumOperator.build" />

`WeightedSumOperator.build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

### build\_controlled

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_controlled" />

`WeightedSumOperator.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse" />

`WeightedSumOperator.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power" />

`WeightedSumOperator.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power" />

`WeightedSumOperator.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_inverse" />

`WeightedSumOperator.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power" />

`WeightedSumOperator.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_power" />

`WeightedSumOperator.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits" />

`WeightedSumOperator.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled" />

`WeightedSumOperator.get_num_qubits_controlled()`

returns number of qubits controlled

### get\_required\_sum\_qubits

<span id="qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits" />

`static WeightedSumOperator.get_required_sum_qubits(weights)`

get required sum qubits

### required\_ancillas

<span id="qiskit.aqua.circuits.WeightedSumOperator.required_ancillas" />

`WeightedSumOperator.required_ancillas()`

required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled" />

`WeightedSumOperator.required_ancillas_controlled()`

returns required ancillas controlled

