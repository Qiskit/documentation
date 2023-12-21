---
title: PyTorchDiscriminator
description: API reference for qiskit.aqua.components.neural_networks.PyTorchDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.PyTorchDiscriminator
---

# PyTorchDiscriminator

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator" />

`PyTorchDiscriminator(n_features=1, n_out=1)`

Discriminator based on PyTorch

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

**Raises**

**NameError** – Pytorch not installed

## Attributes

|                                                                                                                                                                                                           |                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`PyTorchDiscriminator.discriminator_net`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.discriminator_net "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.discriminator_net") | Get discriminator |

## Methods

|                                                                                                                                                                                                                 |                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`PyTorchDiscriminator.get_label`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label")(x\[, detach])                 | Get data sample labels, i.e. true or fake.              |
| [`PyTorchDiscriminator.gradient_penalty`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty")(x\[, …]) | Compute gradient penalty for discriminator optimization |
| [`PyTorchDiscriminator.load_model`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model")(load\_dir)                 | Load discriminator model                                |
| [`PyTorchDiscriminator.loss`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss")(x, y\[, weights])                            | Loss function                                           |
| [`PyTorchDiscriminator.save_model`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model")(snapshot\_dir)             | Save discriminator model                                |
| [`PyTorchDiscriminator.set_seed`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed")(seed)                            | Set seed.                                               |
| [`PyTorchDiscriminator.train`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train")(data, weights\[, …])                      | Perform one training step w\.r.t.                       |

