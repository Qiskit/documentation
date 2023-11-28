# PyTorchDiscriminator

<span id="undefined" />

`PyTorchDiscriminator(n_features=1, n_out=1)`

Bases: `qiskit.aqua.components.neural_networks.discriminative_network.DiscriminativeNetwork`

Discriminator based on PyTorch

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Pytorch not installed

## Methods

|                                                                                                                                                                                                                                                                |                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`get_label`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label")                             | Get data sample labels, i.e. true or fake.                         |
| [`gradient_penalty`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty") | Compute gradient penalty for discriminator optimization            |
| [`load_model`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model")                         | Load discriminator model                                           |
| [`loss`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss")                                                 | Loss function                                                      |
| [`save_model`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model")                         | Save discriminator model                                           |
| [`set_seed`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed")                                 | Set seed.                                                          |
| [`train`](qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train#qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train "qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train")                                             | Perform one training step w\.r.t to the discriminator’s parameters |

## Attributes

<span id="undefined" />

### discriminator\_net

Get discriminator

**Returns**

discriminator object

**Return type**

object
