---
title: UncertaintyProblem
description: API reference for qiskit.aqua.components.uncertainty_problems.UncertaintyProblem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_problems.UncertaintyProblem
---

# UncertaintyProblem

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem" />

`UncertaintyProblem(num_qubits)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/uncertainty_problems/uncertainty_problem.py "view source code")

The abstract Uncertainty Problem component.

## Attributes

### num\_target\_qubits

Returns the number of target qubits

## Methods

### build

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build" />

`abstract UncertaintyProblem.build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled" />

`UncertaintyProblem.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse" />

`UncertaintyProblem.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse_power" />

`UncertaintyProblem.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_power" />

`UncertaintyProblem.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse" />

`UncertaintyProblem.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse_power" />

`UncertaintyProblem.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_power" />

`UncertaintyProblem.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits" />

`UncertaintyProblem.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits_controlled" />

`UncertaintyProblem.get_num_qubits_controlled()`

returns number of qubits controlled

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas" />

`UncertaintyProblem.required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas_controlled" />

`UncertaintyProblem.required_ancillas_controlled()`

returns required ancillas controlled

### value\_to\_estimation

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.value_to_estimation" />

`UncertaintyProblem.value_to_estimation(value)`

value to estimate

