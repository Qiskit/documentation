---
title: get_label
description: API reference for qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label
---

# get\_label

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label" />

`PyTorchDiscriminator.get_label(x, detach=False)`

Get data sample labels, i.e. true or fake.

**Parameters**

*   **x** (*Union(numpy.ndarray, torch.Tensor)*) – Discriminator input, i.e. data sample.
*   **detach** (*bool*) – if None detach from torch tensor variable (optional)

**Returns**

Discriminator output, i.e. data label

**Return type**

torch.Tensor

