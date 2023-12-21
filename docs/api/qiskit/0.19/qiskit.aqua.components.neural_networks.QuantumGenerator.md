---
title: QuantumGenerator
description: API reference for qiskit.aqua.components.neural_networks.QuantumGenerator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.neural_networks.QuantumGenerator
---

# QuantumGenerator

<span id="qiskit.aqua.components.neural_networks.QuantumGenerator" />

`QuantumGenerator(bounds, num_qubits, generator_circuit=None, init_params=None, snapshot_dir=None)`

Quantum Generator.

The quantum generator is a parametrized quantum circuit which can be trained with the [`QGAN`](qiskit.aqua.algorithms.QGAN "qiskit.aqua.algorithms.QGAN") algorithm to generate a quantum state which approximates the probability distribution of given training data. At the beginning of the training the parameters will be set randomly, thus, the output will is random. Throughout the training the quantum generator learns to represent the target distribution. Eventually, the trained generator can be used for state preparation e.g. in QAE.

**Parameters**

*   **bounds** (`ndarray`) – k min/max data values \[\[min\_1,max\_1],…,\[min\_k,max\_k]], given input data dim k
*   **num\_qubits** (`List`\[`int`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[n\_1,…, n\_k]
*   **generator\_circuit** (`Union`\[[`UnivariateVariationalDistribution`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution "qiskit.aqua.components.uncertainty_models.univariate_variational_distribution.UnivariateVariationalDistribution"), [`MultivariateVariationalDistribution`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution "qiskit.aqua.components.uncertainty_models.multivariate_variational_distribution.MultivariateVariationalDistribution"), [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `None`]) – a UnivariateVariationalDistribution for univariate data, a MultivariateVariationalDistribution for multivariate data, or a QuantumCircuit implementing the generator.
*   **init\_params** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – 1D numpy array or list, Initialization for the generator’s parameters.
*   **snapshot\_dir** (`Optional`\[`str`]) – str or None, if not None save the optimizer’s parameter after every update step to the given directory

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Set multivariate variational distribution to represent multivariate data

## Methods

|                                                                                                                                                                                                              |                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| [`QuantumGenerator.construct_circuit`](qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit "qiskit.aqua.components.neural_networks.QuantumGenerator.construct_circuit")(\[params])     | Construct generator circuit.                                   |
| [`QuantumGenerator.get_output`](qiskit.aqua.components.neural_networks.QuantumGenerator.get_output "qiskit.aqua.components.neural_networks.QuantumGenerator.get_output")(quantum\_instance)                  | Get classical data samples from the generator.                 |
| [`QuantumGenerator.loss`](qiskit.aqua.components.neural_networks.QuantumGenerator.loss "qiskit.aqua.components.neural_networks.QuantumGenerator.loss")(x, weights)                                           | Loss function for training the generator’s parameters.         |
| [`QuantumGenerator.set_discriminator`](qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator "qiskit.aqua.components.neural_networks.QuantumGenerator.set_discriminator")(discriminator) | Set discriminator network.                                     |
| [`QuantumGenerator.set_seed`](qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed "qiskit.aqua.components.neural_networks.QuantumGenerator.set_seed")(seed)                                     | Set seed.                                                      |
| [`QuantumGenerator.train`](qiskit.aqua.components.neural_networks.QuantumGenerator.train "qiskit.aqua.components.neural_networks.QuantumGenerator.train")(\[quantum\_instance, shots])                       | Perform one training step w\.r.t to the generator’s parameters |

