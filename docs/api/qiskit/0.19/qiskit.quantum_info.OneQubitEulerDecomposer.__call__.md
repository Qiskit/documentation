---
title: __call__
description: API reference for qiskit.quantum_info.OneQubitEulerDecomposer.__call__
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.OneQubitEulerDecomposer.__call__
---

# \_\_call\_\_

<span id="qiskit.quantum_info.OneQubitEulerDecomposer.__call__" />

`OneQubitEulerDecomposer.__call__(unitary, simplify=True, atol=1e-12)`

Decompose single qubit gate into a circuit.

**Parameters**

*   **unitary** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")  *or*[*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate") *or array*) – 1-qubit unitary matrix
*   **simplify** (*bool*) – reduce gate count in decomposition \[Default: True].
*   **atol** (*bool*) – absolute tolerance for checking angles when simplifing returnd circuit \[Default: 1e-12].

**Returns**

the decomposed single-qubit gate circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if input is invalid or synthesis fails.

