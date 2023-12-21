---
title: mcrz
description: API reference for qiskit.circuit.library.FunctionalPauliRotations.mcrz
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.FunctionalPauliRotations.mcrz
---

# mcrz

<span id="qiskit.circuit.library.FunctionalPauliRotations.mcrz" />

`FunctionalPauliRotations.mcrz(lam, q_controls, q_target, use_basis_gates=False)`

Apply Multiple-Controlled Z rotation gate

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to apply the mcrz gate on.
*   **lam** (*float*) – angle lambda
*   **q\_controls** (*list(*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*)*) – The list of control qubits
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit
*   **use\_basis\_gates** (*bool*) – use u1, u2, u3, cx, id

**Raises**

**QiskitError** – parameter errors

