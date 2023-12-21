---
title: NumPyDiscriminator
description: API reference for qiskit.aqua.components.neural_networks.NumPyDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.NumPyDiscriminator
---

# NumPyDiscriminator

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator" />

`NumPyDiscriminator(n_features=1, n_out=1)`

Discriminator based on NumPy

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

## Attributes

|                                                                                                                                                                                                     |                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`NumPyDiscriminator.discriminator_net`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.discriminator_net "qiskit.aqua.components.neural_networks.NumPyDiscriminator.discriminator_net") | Get discriminator |

## Methods

|                                                                                                                                                                                               |                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`NumPyDiscriminator.get_label`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label "qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label")(x\[, detach])     | Get data sample labels, i.e. true or fake.                                                                                                                                                                                                |
| [`NumPyDiscriminator.load_model`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model "qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model")(load\_dir)     | Load discriminator model                                                                                                                                                                                                                  |
| [`NumPyDiscriminator.loss`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss "qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss")(x, y\[, weights])                | Loss function :param x: sample label (equivalent to discriminator output) :type x: numpy.ndarray :param y: target label :type y: numpy.ndarray :param weights: customized scaling for each sample (optional) :type weights: numpy.ndarray |
| [`NumPyDiscriminator.save_model`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model "qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model")(snapshot\_dir) | Save discriminator model                                                                                                                                                                                                                  |
| [`NumPyDiscriminator.set_seed`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed "qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed")(seed)                | Set seed.                                                                                                                                                                                                                                 |
| [`NumPyDiscriminator.train`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.train "qiskit.aqua.components.neural_networks.NumPyDiscriminator.train")(data, weights\[, …])          | Perform one training step w\.r.t to the discriminator’s parameters                                                                                                                                                                        |

