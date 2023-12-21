---
title: build_inverse
description: API reference for qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse
---

# build\_inverse

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse" />

`EuropeanCallExpectedValue.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

