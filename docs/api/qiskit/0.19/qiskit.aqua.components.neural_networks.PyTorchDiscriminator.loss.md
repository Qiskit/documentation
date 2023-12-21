---
title: loss
description: API reference for qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss
---

# loss

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss" />

`PyTorchDiscriminator.loss(x, y, weights=None)`

Loss function

**Parameters**

*   **x** (*torch.Tensor*) – Discriminator output.
*   **y** (*torch.Tensor*) – Label of the data point
*   **weights** (*torch.Tensor*) – Data weights.

**Returns**

Loss w\.r.t to the generated data points.

**Return type**

torch.Tensor

