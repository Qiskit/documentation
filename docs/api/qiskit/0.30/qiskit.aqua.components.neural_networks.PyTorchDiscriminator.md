---
title: PyTorchDiscriminator
description: API reference for qiskit.aqua.components.neural_networks.PyTorchDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.PyTorchDiscriminator
---

# PyTorchDiscriminator

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator" />

`PyTorchDiscriminator(n_features=1, n_out=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/neural_networks/pytorch_discriminator.py "view source code")

Bases: `qiskit.aqua.components.neural_networks.discriminative_network.DiscriminativeNetwork`

Discriminator based on PyTorch

**Parameters**

*   **n\_features** (`int`) – Dimension of input data vector.
*   **n\_out** (`int`) – Dimension of the discriminator’s output vector.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Pytorch not installed

## Methods

### get\_label

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.get_label" />

`PyTorchDiscriminator.get_label(x, detach=False)`

Get data sample labels, i.e. true or fake.

**Parameters**

*   **x** (*Union(numpy.ndarray, torch.Tensor)*) – Discriminator input, i.e. data sample.
*   **detach** (*bool*) – if None detach from torch tensor variable (optional)

**Returns**

Discriminator output, i.e. data label

**Return type**

torch.Tensor

### gradient\_penalty

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.gradient_penalty" />

`PyTorchDiscriminator.gradient_penalty(x, lambda_=5.0, k=0.01, c=1.0)`

Compute gradient penalty for discriminator optimization

**Parameters**

*   **x** (*numpy.ndarray*) – Generated data sample.
*   **lambda** (*float*) – Gradient penalty coefficient 1.
*   **k** (*float*) – Gradient penalty coefficient 2.
*   **c** (*float*) – Gradient penalty coefficient 3.

**Returns**

Gradient penalty.

**Return type**

torch.Tensor

### load\_model

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.load_model" />

`PyTorchDiscriminator.load_model(load_dir)`

Load discriminator model

**Parameters**

**load\_dir** (`str`) – file with stored pytorch discriminator model to be loaded

### loss

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.loss" />

`PyTorchDiscriminator.loss(x, y, weights=None)`

Loss function

**Parameters**

*   **x** (*torch.Tensor*) – Discriminator output.
*   **y** (*torch.Tensor*) – Label of the data point
*   **weights** (*torch.Tensor*) – Data weights.

**Returns**

Loss w\.r.t to the generated data points.

**Return type**

torch.Tensor

### save\_model

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.save_model" />

`PyTorchDiscriminator.save_model(snapshot_dir)`

Save discriminator model

**Parameters**

**snapshot\_dir** (`str`) – directory path for saving the model

### set\_seed

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.set_seed" />

`PyTorchDiscriminator.set_seed(seed)`

Set seed.

**Parameters**

**seed** (`int`) – seed

### train

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.train" />

`PyTorchDiscriminator.train(data, weights, penalty=False, quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the discriminator’s parameters

**Parameters**

*   **data** (`Iterable`) – Data batch.
*   **weights** (`Iterable`) – Data sample weights.
*   **penalty** (`bool`) – Indicate whether or not penalty function is applied to the loss function. Ignored if no penalty function defined.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run Quantum network. Ignored for a classical network.
*   **shots** (`Optional`\[`int`]) – Number of shots for hardware or qasm execution. Ignored for classical network

**Returns**

**with discriminator loss and updated parameters.data, weights, penalty=True,**

quantum\_instance=None, shots=None) -> Dict\[str, Any]:

**Return type**

dict

## Attributes

<span id="qiskit.aqua.components.neural_networks.PyTorchDiscriminator.discriminator_net" />

### discriminator\_net

Get discriminator

**Returns**

discriminator object

**Return type**

object

