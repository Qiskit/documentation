# DiscriminativeNetwork

<span id="undefined" />

`DiscriminativeNetwork`

Bases: `abc.ABC`

Base class for discriminative Quantum or Classical Neural Networks.

This method should initialize the module but raise an exception if a required component of the module is not available.

## Methods

|                                                                                                                                                                                                                                           |                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [`get_label`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.get_label")     | Apply quantum/classical neural network to the given input sample and compute the respective data label |
| [`loss`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.loss")                         | Loss function used for optimization                                                                    |
| [`save_model`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.save_model#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.save_model "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.save_model") | Save discriminator model                                                                               |
| [`set_seed`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.set_seed")         | Set seed.                                                                                              |
| [`train`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train#qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train "qiskit.aqua.components.neural_networks.DiscriminativeNetwork.train")                     | Perform one training step w\.r.t to the discriminator’s parameters                                     |
