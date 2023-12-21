---
title: loss
description: API reference for qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss
---

# loss

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss" />

`abstract DiscriminativeNetwork.loss(x, y, weights=None)`

Loss function used for optimization

**Parameters**

*   **x** (*Discriminator*) – output.
*   **y** (*Label*) – the data point
*   **weights** (*numpy.ndarray*) – Data weights.

**Returns**

Loss w\.r.t to the generated data points.

**Raises**

**NotImplementedError** – not implemented

