# qiskit.aqua.components.neural\_networks.PyTorchDiscriminator.get\_label

`PyTorchDiscriminator.get_label(x, detach=False)`

Get data sample labels, i.e. true or fake.

**Parameters**

*   **x** (*Union(numpy.ndarray, torch.Tensor)*) – Discriminator input, i.e. data sample.
*   **detach** (*bool*) – if None detach from torch tensor variable (optional)

**Returns**

Discriminator output, i.e. data label

**Return type**

torch.Tensor
