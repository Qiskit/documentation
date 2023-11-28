# QuantumGenerator

<span id="undefined" />

`QuantumGenerator(bounds, num_qubits, generator_circuit=None, init_params=None, optimizer=None, gradient_function=None, snapshot_dir=None)`

Bases: `qiskit.aqua.components.neural_networks.generative_network.GenerativeNetwork`

Quantum Generator.

The quantum generator is a parametrized quantum circuit which can be trained with the [`QGAN`](qiskit.aqua.algorithms.QGAN#qiskit.aqua.algorithms.QGAN "qiskit.aqua.algorithms.QGAN") algorithm to generate a quantum state which approximates the probability distribution of given training data. At the beginning of the training the parameters will be set randomly, thus, the output will is random. Throughout the training the quantum generator learns to represent the target distribution. Eventually, the trained generator can be used for state preparation e.g. in QAE.

**Parameters**

*   **bounds** (`ndarray`) – k min/max data values \[\[min\_1,max\_1],…,\[min\_k,max\_k]], given input data dim k
*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[n\_1,…, n\_k]
*   **generator\_circuit** (`Union`\[`UnivariateVariationalDistribution`, `MultivariateVariationalDistribution`, `QuantumCircuit`, `None`]) – a UnivariateVariationalDistribution for univariate data, a MultivariateVariationalDistribution for multivariate data, or a QuantumCircuit implementing the generator.
*   **init\_params** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – 1D numpy array or list, Initialization for the generator’s parameters.
*   **optimizer** (`Optional`\[`Optimizer`]) – optimizer to be used for the training of the generator
*   **gradient\_function** (`Union`\[`Callable`, `Gradient`, `None`]) – A Gradient object, or a function returning partial derivatives of the loss function w\.r.t. the generator variational params.
*   **snapshot\_dir** (`Optional`\[`str`]) – str or None, if not None save the optimizer’s parameter after every update step to the given directory

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Set multivariate variational distribution to represent multivariate data

## Methods

|                                                                                                                                                                                                                                                        |                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit#qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit "qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit") | Construct generator circuit.                                   |
| [`get_output`](qiskit.aqua.components.neural_networks.QuantumGenerator.get_output#qiskit.aqua.components.neural_networks.QuantumGenerator.get_output "qiskit.aqua.components.neural_networks.QuantumGenerator.get_output")                             | Get classical data samples from the generator.                 |
| [`loss`](qiskit.aqua.components.neural_networks.QuantumGenerator.loss#qiskit.aqua.components.neural_networks.QuantumGenerator.loss "qiskit.aqua.components.neural_networks.QuantumGenerator.loss")                                                     | Loss function for training the generator’s parameters.         |
| [`set_discriminator`](qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator#qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator "qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator") | Set discriminator network.                                     |
| [`set_seed`](qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed#qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed "qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed")                                     | Set seed.                                                      |
| [`train`](qiskit.aqua.components.neural_networks.QuantumGenerator.train#qiskit.aqua.components.neural_networks.QuantumGenerator.train "qiskit.aqua.components.neural_networks.QuantumGenerator.train")                                                 | Perform one training step w\.r.t to the generator’s parameters |

## Attributes

<span id="undefined" />

### discriminator

Get discriminator.

**Return type**

`DiscriminativeNetwork`

<span id="undefined" />

### optimizer

Get optimizer.

**Return type**

`Optimizer`

<span id="undefined" />

### parameter\_values

Get parameter values from the quantum generator

**Return type**

`Union`\[`List`, `ndarray`]

**Returns**

Current parameter values

<span id="undefined" />

### seed

Get seed.

**Return type**

`int`
