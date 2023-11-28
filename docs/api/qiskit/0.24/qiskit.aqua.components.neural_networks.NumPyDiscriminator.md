<span id="qiskit-aqua-components-neural-networks-numpydiscriminator" />

# qiskit.aqua.components.neural\_networks.NumPyDiscriminator

<span id="undefined" />

`NumPyDiscriminator(n_features=1, n_out=1)`

Discriminator based on NumPy

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

<span id="undefined" />

`__init__(n_features=1, n_out=1)`

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

## Methods

|                                                                                                                                                                                |                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.__init__ "qiskit.aqua.components.neural_networks.NumPyDiscriminator.__init__")(\[n\_features, n\_out]) | **type n\_features**`int`                                                                                                                                                                                                                 |
| [`get_label`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label "qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label")(x\[, detach])        | Get data sample labels, i.e. true or fake.                                                                                                                                                                                                |
| [`load_model`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model "qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model")(load\_dir)        | Load discriminator model                                                                                                                                                                                                                  |
| [`loss`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss "qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss")(x, y\[, weights])                   | Loss function :param x: sample label (equivalent to discriminator output) :type x: numpy.ndarray :param y: target label :type y: numpy.ndarray :param weights: customized scaling for each sample (optional) :type weights: numpy.ndarray |
| [`save_model`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model "qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model")(snapshot\_dir)    | Save discriminator model                                                                                                                                                                                                                  |
| [`set_seed`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed "qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed")(seed)                   | Set seed.                                                                                                                                                                                                                                 |
| [`train`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.train "qiskit.aqua.components.neural_networks.NumPyDiscriminator.train")(data, weights\[, penalty, …])    | Perform one training step w\.r.t to the discriminator’s parameters                                                                                                                                                                        |

## Attributes

|                                                                                                                                                                                   |                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`discriminator_net`](#qiskit.aqua.components.neural_networks.NumPyDiscriminator.discriminator_net "qiskit.aqua.components.neural_networks.NumPyDiscriminator.discriminator_net") | Get discriminator |

<span id="undefined" />

`property discriminator_net`

Get discriminator

**Returns**

discriminator object

**Return type**

DiscriminatorNet

<span id="undefined" />

`get_label(x, detach=False)`

Get data sample labels, i.e. true or fake.

**Parameters**

*   **x** (*numpy.ndarray*) – Discriminator input, i.e. data sample.
*   **detach** (*bool*) – depreciated for numpy network

**Returns**

Discriminator output, i.e. data label

**Return type**

numpy.ndarray

<span id="undefined" />

`load_model(load_dir)`

Load discriminator model

**Parameters**

**load\_dir** (*str*) – file with stored pytorch discriminator model to be loaded

<span id="undefined" />

`loss(x, y, weights=None)`

Loss function :param x: sample label (equivalent to discriminator output) :type x: numpy.ndarray :param y: target label :type y: numpy.ndarray :param weights: customized scaling for each sample (optional) :type weights: numpy.ndarray

**Returns**

loss function

**Return type**

float

<span id="undefined" />

`save_model(snapshot_dir)`

Save discriminator model

**Parameters**

**snapshot\_dir** (*str*) – directory path for saving the model

<span id="undefined" />

`set_seed(seed)`

Set seed. :param seed: seed :type seed: int

<span id="undefined" />

`train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (*tuple(numpy.ndarray, numpy.ndarray)*) – real\_batch: array, Training data batch. generated\_batch: array, Generated data batch.
*   **weights** (*tuple*) – real problem, generated problem
*   **penalty** (*bool*) – Depreciated for classical networks.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Depreciated for classical networks.
*   **shots** (*int*) – Number of shots for hardware or qasm execution. Ignored for classical networks.

**Returns**

with Discriminator loss and updated parameters.

**Return type**

dict
