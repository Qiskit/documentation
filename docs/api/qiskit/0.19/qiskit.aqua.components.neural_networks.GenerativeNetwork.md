---
title: GenerativeNetwork
description: API reference for qiskit.aqua.components.neural_networks.GenerativeNetwork
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.GenerativeNetwork
---

# GenerativeNetwork

<span id="qiskit.aqua.components.neural_networks.GenerativeNetwork" />

`GenerativeNetwork`

Base class for generative Quantum and Classical Neural Networks.

This method should initialize the module, but raise an exception if a required component of the module is not available.

## Methods

|                                                                                                                                                                                       |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`GenerativeNetwork.get_output`](qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output "qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output")(…)        | Apply quantum/classical neural network to given input and get the respective output |
| [`GenerativeNetwork.loss`](qiskit.aqua.components.neural_networks.GenerativeNetwork.loss "qiskit.aqua.components.neural_networks.GenerativeNetwork.loss")()                           | Loss function used for optimization                                                 |
| [`GenerativeNetwork.set_seed`](qiskit.aqua.components.neural_networks.GenerativeNetwork.set_seed "qiskit.aqua.components.neural_networks.GenerativeNetwork.set_seed")(seed)           | Set seed.                                                                           |
| [`GenerativeNetwork.train`](qiskit.aqua.components.neural_networks.GenerativeNetwork.train "qiskit.aqua.components.neural_networks.GenerativeNetwork.train")(\[quantum\_instance, …]) | Perform one training step w\.r.t to the generator’s parameters                      |

