# qiskit.aqua.components.neural\_networks.PyTorchDiscriminator.loss

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
