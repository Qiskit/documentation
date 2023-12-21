---
title: gradient_penalty
description: API reference for qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty
---

# gradient\_penalty

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty" />

`PyTorchDiscriminator.gradient_penalty(x, lambda_=5.0, k=0.01, c=1.0)`

Compute gradient penalty for discriminator optimization

**Parameters**

*   **x** (*numpy.ndarray*) – Generated data sample.
*   **lambda** (*float*) – Gradient penalty coefficient 1.
*   **k** (*float*) – Gradient penalty coefficient 2.
*   **c** (*float*) – Gradient penalty coefficient 3.

**Returns**

Gradient penalty.

**Return type**

torch.Tensor

