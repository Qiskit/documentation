---
title: build_controlled
description: API reference for qiskit.aqua.circuits.WeightedSumOperator.build_controlled
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.circuits.WeightedSumOperator.build_controlled
---

# build\_controlled

<span id="qiskit.aqua.circuits.WeightedSumOperator.build_controlled" />

`WeightedSumOperator.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

