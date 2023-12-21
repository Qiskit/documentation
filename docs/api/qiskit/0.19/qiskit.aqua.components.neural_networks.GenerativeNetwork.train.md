---
title: train
description: API reference for qiskit.aqua.components.neural_networks.GenerativeNetwork.train
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.GenerativeNetwork.train
---

# train

<span id="qiskit.aqua.components.neural_networks.GenerativeNetwork.train" />

`abstract GenerativeNetwork.train(quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the generator’s parameters

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run generator network. Ignored for a classical network.
*   **shots** (*int*) – Number of shots for hardware or qasm execution. Ignored for classical network

**Returns**

generator loss and updated parameters.

**Return type**

dict

**Raises**

**NotImplementedError** – not implemented

