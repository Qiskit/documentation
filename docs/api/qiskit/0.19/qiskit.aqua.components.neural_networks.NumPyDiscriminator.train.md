---
title: train
description: API reference for qiskit.aqua.components.neural_networks.NumPyDiscriminator.train
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.NumPyDiscriminator.train
---

# train

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.train" />

`NumPyDiscriminator.train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (*tuple(numpy.ndarray, numpy.ndarray)*) – real\_batch: array, Training data batch. generated\_batch: array, Generated data batch.
*   **weights** (*tuple*) – real problem, generated problem
*   **penalty** (*bool*) – Depreciated for classical networks.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Depreciated for classical networks.
*   **shots** (*int*) – Number of shots for hardware or qasm execution. Ignored for classical networks.

**Returns**

with Discriminator loss and updated parameters.

**Return type**

dict

