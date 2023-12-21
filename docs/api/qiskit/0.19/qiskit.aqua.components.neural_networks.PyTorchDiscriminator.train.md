---
title: train
description: API reference for qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train
---

# train

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train" />

`PyTorchDiscriminator.train(data, weights, penalty=True, quantum_instance=None, shots=None)`

Perform one training step w\.r.t. to the discriminator’s parameters

**Parameters**

*   **data** (*tuple*) – real\_batch: torch.Tensor, Training data batch. generated\_batch: numpy array, Generated data batch.
*   **weights** (*tuple*) – real problem, generated problem
*   **penalty** (*bool*) – Indicate whether or not penalty function is applied to the loss function.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum Instance (depreciated)
*   **shots** (*int*) – Number of shots for hardware or qasm execution. Not used for classical network (only quantum ones)

**Returns**

with Discriminator loss (torch.Tensor) and updated parameters (array).

**Return type**

dict

