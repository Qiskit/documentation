# NumPyDiscriminator

<span id="undefined" />

`NumPyDiscriminator(n_features=1, n_out=1)`

Bases: `qiskit.aqua.components.neural_networks.discriminative_network.DiscriminativeNetwork`

Discriminator based on NumPy

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

## Methods

|                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`get_label`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label#qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label "qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label")     | Get data sample labels, i.e. true or fake.                                                                                                                                                                                                |
| [`load_model`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model#qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model "qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model") | Load discriminator model                                                                                                                                                                                                                  |
| [`loss`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss#qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss "qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss")                         | Loss function :param x: sample label (equivalent to discriminator output) :type x: numpy.ndarray :param y: target label :type y: numpy.ndarray :param weights: customized scaling for each sample (optional) :type weights: numpy.ndarray |
| [`save_model`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model#qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model "qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model") | Save discriminator model                                                                                                                                                                                                                  |
| [`set_seed`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed#qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed "qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed")         | Set seed.                                                                                                                                                                                                                                 |
| [`train`](qiskit.aqua.components.neural_networks.NumPyDiscriminator.train#qiskit.aqua.components.neural_networks.NumPyDiscriminator.train "qiskit.aqua.components.neural_networks.NumPyDiscriminator.train")                     | Perform one training step w\.r.t to the discriminator’s parameters                                                                                                                                                                        |

## Attributes

<span id="undefined" />

### discriminator\_net

Get discriminator

**Returns**

discriminator object

**Return type**

DiscriminatorNet
