---
title: construct_circuit
description: API reference for qiskit.aqua.algorithms.IQPE.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.IQPE.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.algorithms.IQPE.construct_circuit" />

`IQPE.construct_circuit(k=None, omega=0, measurement=False)`

Construct the kth iteration Quantum Phase Estimation circuit.

For details of parameters, please see Fig. 2 in [https://arxiv.org/pdf/quant-ph/0610214.pdf](https://arxiv.org/pdf/quant-ph/0610214.pdf).

**Parameters**

*   **k** (`Optional`\[`int`]) – the iteration idx.
*   **omega** (`float`) – the feedback angle.
*   **measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the quantum circuit per iteration

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

