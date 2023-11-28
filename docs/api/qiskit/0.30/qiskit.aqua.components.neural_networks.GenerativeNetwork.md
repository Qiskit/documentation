# GenerativeNetwork

<span id="undefined" />

`GenerativeNetwork`

Bases: `abc.ABC`

Base class for generative Quantum and Classical Neural Networks.

This method should initialize the module, but raise an exception if a required component of the module is not available.

## Methods

|                                                                                                                                                                                                                                                           |                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`get_output`](qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output#qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output "qiskit.aqua.components.neural_networks.GenerativeNetwork.get_output")                             | Apply quantum/classical neural network to given input and get the respective output |
| [`loss`](qiskit.aqua.components.neural_networks.GenerativeNetwork.loss#qiskit.aqua.components.neural_networks.GenerativeNetwork.loss "qiskit.aqua.components.neural_networks.GenerativeNetwork.loss")                                                     | Loss function used for optimization                                                 |
| [`set_discriminator`](qiskit.aqua.components.neural_networks.GenerativeNetwork.set_discriminator#qiskit.aqua.components.neural_networks.GenerativeNetwork.set_discriminator "qiskit.aqua.components.neural_networks.GenerativeNetwork.set_discriminator") | Set discriminator network.                                                          |
| [`set_seed`](qiskit.aqua.components.neural_networks.GenerativeNetwork.set_seed#qiskit.aqua.components.neural_networks.GenerativeNetwork.set_seed "qiskit.aqua.components.neural_networks.GenerativeNetwork.set_seed")                                     | Set seed.                                                                           |
| [`train`](qiskit.aqua.components.neural_networks.GenerativeNetwork.train#qiskit.aqua.components.neural_networks.GenerativeNetwork.train "qiskit.aqua.components.neural_networks.GenerativeNetwork.train")                                                 | Perform one training step w\.r.t to the generator’s parameters                      |

## Attributes

<span id="undefined" />

### parameter\_values

Get parameter values from the generator

**Raises**

**NotImplementedError** – not implemented
