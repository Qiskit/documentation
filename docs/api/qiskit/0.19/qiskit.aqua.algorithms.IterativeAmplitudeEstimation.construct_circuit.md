---
title: construct_circuit
description: API reference for qiskit.aqua.algorithms.IterativeAmplitudeEstimation.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.IterativeAmplitudeEstimation.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.algorithms.IterativeAmplitudeEstimation.construct_circuit" />

`IterativeAmplitudeEstimation.construct_circuit(k, measurement=False)`

Construct the circuit Q^k A |0>.

The A operator is the unitary specifying the QAE problem and Q the associated Grover operator.

**Parameters**

*   **k** (`int`) – The power of the Q operator.
*   **measurement** (`bool`) – Boolean flag to indicate if measurements should be included in the circuits.

**Return type**

[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

**Returns**

The circuit Q^k A |0>.

