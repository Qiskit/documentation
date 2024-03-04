---
title: NumPyDiscriminator
description: API reference for qiskit.aqua.components.neural_networks.NumPyDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.NumPyDiscriminator
---

<span id="qiskit-aqua-components-neural-networks-numpydiscriminator" />

# qiskit.aqua.components.neural\_networks.NumPyDiscriminator

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator" />

`NumPyDiscriminator(n_features=1, n_out=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/neural_networks/numpy_discriminator.py "view source code")

Discriminator based on NumPy

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

### \_\_init\_\_

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.__init__" />

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

### discriminator\_net

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.discriminator_net" />

`property discriminator_net`

Get discriminator

**Returns**

discriminator object

**Return type**

DiscriminatorNet

### get\_label

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.get_label" />

`get_label(x, detach=False)`

Get data sample labels, i.e. true or fake.

**Parameters**

*   **x** (*numpy.ndarray*) – Discriminator input, i.e. data sample.
*   **detach** (*bool*) – depreciated for numpy network

**Returns**

Discriminator output, i.e. data label

**Return type**

numpy.ndarray

### load\_model

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.load_model" />

`load_model(load_dir)`

Load discriminator model

**Parameters**

**load\_dir** (*str*) – file with stored pytorch discriminator model to be loaded

### loss

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.loss" />

`loss(x, y, weights=None)`

Loss function :param x: sample label (equivalent to discriminator output) :type x: numpy.ndarray :param y: target label :type y: numpy.ndarray :param weights: customized scaling for each sample (optional) :type weights: numpy.ndarray

**Returns**

loss function

**Return type**

float

### save\_model

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.save_model" />

`save_model(snapshot_dir)`

Save discriminator model

**Parameters**

**snapshot\_dir** (*str*) – directory path for saving the model

### set\_seed

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.set_seed" />

`set_seed(seed)`

Set seed. :param seed: seed :type seed: int

### train

<span id="qiskit.aqua.components.neural_networks.NumPyDiscriminator.train" />

`train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (*tuple(numpy.ndarray, numpy.ndarray)*) – real\_batch: array, Training data batch. generated\_batch: array, Generated data batch.
*   **weights** (*tuple*) – real problem, generated problem
*   **penalty** (*bool*) – Depreciated for classical networks.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Depreciated for classical networks.
*   **shots** (*int*) – Number of shots for hardware or qasm execution. Ignored for classical networks.

**Returns**

with Discriminator loss and updated parameters.

**Return type**

dict

