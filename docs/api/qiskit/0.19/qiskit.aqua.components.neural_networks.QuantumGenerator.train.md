---
title: train
description: API reference for qiskit.aqua.components.neural_networks.QuantumGenerator.train
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.QuantumGenerator.train
---

# train

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.train" />

`QuantumGenerator.train(quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the generator’s parameters

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run the generator circuit.
*   **shots** (*int*) – Number of shots for hardware or qasm execution.

**Returns**

generator loss(float) and updated parameters (array).

**Return type**

dict

