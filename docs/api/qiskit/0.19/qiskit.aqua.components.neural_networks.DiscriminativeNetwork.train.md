---
title: train
description: API reference for qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train
---

# train

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train" />

`abstract DiscriminativeNetwork.train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (*numpy.ndarray*) – Data batch.
*   **weights** (*numpy.ndarray*) – Data sample weights.
*   **penalty** (*bool*) – Indicate whether or not penalty function is applied to the loss function. Ignored if no penalty function defined.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run Quantum network. Ignored for a classical network.
*   **shots** (*int*) – Number of shots for hardware or qasm execution. Ignored for classical network

**Returns**

with Discriminator loss and updated parameters.

**Return type**

dict

**Raises**

**NotImplementedError** – not implemented

