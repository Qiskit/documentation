---
title: DiscriminativeNetwork
description: API reference for qiskit.aqua.components.neural_networks.DiscriminativeNetwork
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.DiscriminativeNetwork
---

# DiscriminativeNetwork

<span id="qiskit.aqua.components.neural_networks.DiscriminativeNetwork" />

`DiscriminativeNetwork`

Base class for discriminative Quantum or Classical Neural Networks.

This method should initialize the module but raise an exception if a required component of the module is not available.

## Methods

|                                                                                                                                                                                               |                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [`DiscriminativeNetwork.get_label`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label")(x)       | Apply quantum/classical neural network to the given input sample and compute the respective data label |
| [`DiscriminativeNetwork.loss`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss")(x, y\[, weights])       | Loss function used for optimization                                                                    |
| [`DiscriminativeNetwork.set_seed`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed")(seed)       | Set seed.                                                                                              |
| [`DiscriminativeNetwork.train`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train")(data, weights\[, …]) | Perform one training step w\.r.t to the discriminator’s parameters                                     |

