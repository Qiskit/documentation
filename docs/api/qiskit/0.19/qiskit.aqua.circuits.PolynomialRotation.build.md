---
title: build
description: API reference for qiskit.aqua.circuits.PolynomialRotation.build
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.circuits.PolynomialRotation.build
---

# build

<span id="qiskit.aqua.circuits.PolynomialRotation.build" />

`PolynomialRotation.build(qc, q, q_target, q_ancillas=None, reverse=0)`

Build the circuit.

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.num\_state\_qubits)
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – qubit to be rotated. The algorithm is successful when this qubit is in the |1> state
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **reverse** (*int*) – if 1, apply with reversed list of qubits (i.e. q\_n as q\_0, q\_n-1 as q\_1, etc).

