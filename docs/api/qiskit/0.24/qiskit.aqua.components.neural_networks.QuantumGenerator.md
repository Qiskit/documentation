---
title: QuantumGenerator
description: API reference for qiskit.aqua.components.neural_networks.QuantumGenerator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.QuantumGenerator
---

<span id="qiskit-aqua-components-neural-networks-quantumgenerator" />

# qiskit.aqua.components.neural\_networks.QuantumGenerator

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator" />

`QuantumGenerator(bounds, num_qubits, generator_circuit=None, init_params=None, optimizer=None, snapshot_dir=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/neural_networks/quantum_generator.py "view source code")

Quantum Generator.

The quantum generator is a parametrized quantum circuit which can be trained with the [`QGAN`](qiskit.aqua.algorithms.QGAN "qiskit.aqua.algorithms.QGAN") algorithm to generate a quantum state which approximates the probability distribution of given training data. At the beginning of the training the parameters will be set randomly, thus, the output will is random. Throughout the training the quantum generator learns to represent the target distribution. Eventually, the trained generator can be used for state preparation e.g. in QAE.

**Parameters**

*   **bounds** (`ndarray`) – k min/max data values \[\[min\_1,max\_1],…,\[min\_k,max\_k]], given input data dim k
*   **num\_qubits** (`List`\[`int`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[n\_1,…, n\_k]
*   **generator\_circuit** (`Union`\[`UnivariateVariationalDistribution`, `MultivariateVariationalDistribution`, `QuantumCircuit`, `None`]) – a UnivariateVariationalDistribution for univariate data, a MultivariateVariationalDistribution for multivariate data, or a QuantumCircuit implementing the generator.
*   **init\_params** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – 1D numpy array or list, Initialization for the generator’s parameters.
*   **optimizer** (`Optional`\[`Optimizer`]) – optimizer to be used for the training of the generator
*   **snapshot\_dir** (`Optional`\[`str`]) – str or None, if not None save the optimizer’s parameter after every update step to the given directory

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Set multivariate variational distribution to represent multivariate data

### \_\_init\_\_

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.__init__" />

`__init__(bounds, num_qubits, generator_circuit=None, init_params=None, optimizer=None, snapshot_dir=None)`

**Parameters**

*   **bounds** (`ndarray`) – k min/max data values \[\[min\_1,max\_1],…,\[min\_k,max\_k]], given input data dim k
*   **num\_qubits** (`List`\[`int`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[n\_1,…, n\_k]
*   **generator\_circuit** (`Union`\[`UnivariateVariationalDistribution`, `MultivariateVariationalDistribution`, `QuantumCircuit`, `None`]) – a UnivariateVariationalDistribution for univariate data, a MultivariateVariationalDistribution for multivariate data, or a QuantumCircuit implementing the generator.
*   **init\_params** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – 1D numpy array or list, Initialization for the generator’s parameters.
*   **optimizer** (`Optional`\[`Optimizer`]) – optimizer to be used for the training of the generator
*   **snapshot\_dir** (`Optional`\[`str`]) – str or None, if not None save the optimizer’s parameter after every update step to the given directory

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Set multivariate variational distribution to represent multivariate data

## Methods

|                                                                                                                                                                                               |                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.neural_networks.QuantumGenerator.__init__ "qiskit.aqua.components.neural_networks.QuantumGenerator.__init__")(bounds, num\_qubits\[, …])                 | **type bounds**`ndarray`                                       |
| [`construct_circuit`](#qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit "qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit")(\[params])      | Construct generator circuit.                                   |
| [`get_output`](#qiskit.aqua.components.neural_networks.QuantumGenerator.get_output "qiskit.aqua.components.neural_networks.QuantumGenerator.get_output")(quantum\_instance\[, params, shots]) | Get classical data samples from the generator.                 |
| [`loss`](#qiskit.aqua.components.neural_networks.QuantumGenerator.loss "qiskit.aqua.components.neural_networks.QuantumGenerator.loss")(x, weights)                                            | Loss function for training the generator’s parameters.         |
| [`set_discriminator`](#qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator "qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator")(discriminator)  | Set discriminator network.                                     |
| [`set_seed`](#qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed "qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed")(seed)                                      | Set seed.                                                      |
| [`train`](#qiskit.aqua.components.neural_networks.QuantumGenerator.train "qiskit.aqua.components.neural_networks.QuantumGenerator.train")(\[quantum\_instance, shots])                        | Perform one training step w\.r.t to the generator’s parameters |

### construct\_circuit

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit" />

`construct_circuit(params=None)`

Construct generator circuit.

**Parameters**

**params** (*list | dict*) – parameters which should be used to run the generator.

**Returns**

construct the quantum circuit and return as gate

**Return type**

[Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### get\_output

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.get_output" />

`get_output(quantum_instance, params=None, shots=None)`

Get classical data samples from the generator. Running the quantum generator circuit results in a quantum state. To train this generator with a classical discriminator, we need to sample classical outputs by measuring the quantum state and mapping them to feature space defined by the training data.

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum Instance, used to run the generator circuit.
*   **params** (*numpy.ndarray*) – array or None, parameters which should be used to run the generator, if None use self.\_params
*   **shots** (*int*) – if not None use a number of shots that is different from the number set in quantum\_instance

**Returns**

generated samples, array: sample occurrence in percentage

**Return type**

list

### loss

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.loss" />

`loss(x, weights)`

Loss function for training the generator’s parameters.

**Parameters**

*   **x** (*numpy.ndarray*) – sample label (equivalent to discriminator output)
*   **weights** (*numpy.ndarray*) – probability for measuring the sample

**Returns**

loss function

**Return type**

float

### set\_discriminator

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator" />

`set_discriminator(discriminator)`

Set discriminator network.

**Parameters**

**discriminator** (*Discriminator*) – Discriminator used to compute the loss function.

### set\_seed

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed" />

`set_seed(seed)`

Set seed.

**Parameters**

**seed** (*int*) – seed

### train

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator.train" />

`train(quantum_instance=None, shots=None)`

Perform one training step w\.r.t to the generator’s parameters

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – used to run the generator circuit.
*   **shots** (*int*) – Number of shots for hardware or qasm execution.

**Returns**

generator loss(float) and updated parameters (array).

**Return type**

dict

