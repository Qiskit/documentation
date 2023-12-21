# qiskit.aqua.components.neural\_networks.PyTorchDiscriminator.gradient\_penalty

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
