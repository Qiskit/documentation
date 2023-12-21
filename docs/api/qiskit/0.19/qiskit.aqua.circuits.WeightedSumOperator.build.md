---
title: build
description: API reference for qiskit.aqua.circuits.WeightedSumOperator.build
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.circuits.WeightedSumOperator.build
---

# build

<span id="qiskit.aqua.circuits.WeightedSumOperator.build" />

`WeightedSumOperator.build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

