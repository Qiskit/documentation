---
title: QGAN
description: API reference for qiskit.aqua.algorithms.QGAN
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QGAN
---

# QGAN

<span id="qiskit.aqua.algorithms.QGAN" />

`QGAN(data, bounds=None, num_qubits=None, batch_size=500, num_epochs=3000, seed=7, discriminator=None, generator=None, tol_rel_ent=None, snapshot_dir=None, quantum_instance=None)`

The Quantum Generative Adversarial Network algorithm.

The qGAN \[1] is a hybrid quantum-classical algorithm used for generative modeling tasks.

This adaptive algorithm uses the interplay of a generative [`GenerativeNetwork`](qiskit.aqua.components.neural_networks.GenerativeNetwork "qiskit.aqua.components.neural_networks.GenerativeNetwork") and a discriminative [`DiscriminativeNetwork`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork "qiskit.aqua.components.neural_networks.DiscriminativeNetwork") network to learn the probability distribution underlying given training data.

These networks are trained in alternating optimization steps, where the discriminator tries to differentiate between training data samples and data samples from the generator and the generator aims at generating samples which the discriminator classifies as training data samples. Eventually, the quantum generator learns the training data’s underlying probability distribution. The trained quantum generator loads a quantum state which is a model of the target distribution.

**References:**

**\[1] Zoufal et al.,**

[Quantum Generative Adversarial Networks for learning and loading random distributions](https://www.nature.com/articles/s41534-019-0223-2)

**Parameters**

*   **data** (`ndarray`) – Training data of dimension k
*   **bounds** (`Optional`\[`ndarray`]) – k min/max data values \[\[min\_0,max\_0],…,\[min\_k-1,max\_k-1]] if univariate data: \[min\_0,max\_0]
*   **num\_qubits** (`Optional`\[`ndarray`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[num\_qubits\_0,…, num\_qubits\_k-1]
*   **batch\_size** (`int`) – Batch size, has a min. value of 1.
*   **num\_epochs** (`int`) – Number of training epochs
*   **seed** (`int`) – Random number seed
*   **discriminator** (`Optional`\[[`DiscriminativeNetwork`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork "qiskit.aqua.components.neural_networks.discriminative_network.DiscriminativeNetwork")]) – Discriminates between real and fake data samples
*   **generator** (`Optional`\[[`GenerativeNetwork`](qiskit.aqua.components.neural_networks.GenerativeNetwork "qiskit.aqua.components.neural_networks.generative_network.GenerativeNetwork")]) – Generates ‘fake’ data samples
*   **tol\_rel\_ent** (`Optional`\[`float`]) – Set tolerance level for relative entropy. If the training achieves relative entropy equal or lower than tolerance it finishes.
*   **snapshot\_dir** (`Optional`\[`str`]) – Directory in to which to store cvs file with parameters, if None (default) then no cvs file is created.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

|                                                                                                                        |                                                                  |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [`QGAN.backend`](qiskit.aqua.algorithms.QGAN.backend "qiskit.aqua.algorithms.QGAN.backend")                            | Returns backend.                                                 |
| [`QGAN.d_loss`](qiskit.aqua.algorithms.QGAN.d_loss "qiskit.aqua.algorithms.QGAN.d_loss")                               | Returns discriminator loss                                       |
| [`QGAN.discriminator`](qiskit.aqua.algorithms.QGAN.discriminator "qiskit.aqua.algorithms.QGAN.discriminator")          | Returns discriminator                                            |
| [`QGAN.g_loss`](qiskit.aqua.algorithms.QGAN.g_loss "qiskit.aqua.algorithms.QGAN.g_loss")                               | Returns generator loss                                           |
| [`QGAN.generator`](qiskit.aqua.algorithms.QGAN.generator "qiskit.aqua.algorithms.QGAN.generator")                      | Returns generator                                                |
| [`QGAN.quantum_instance`](qiskit.aqua.algorithms.QGAN.quantum_instance "qiskit.aqua.algorithms.QGAN.quantum_instance") | Returns quantum instance.                                        |
| [`QGAN.random`](qiskit.aqua.algorithms.QGAN.random "qiskit.aqua.algorithms.QGAN.random")                               | Return a numpy random.                                           |
| [`QGAN.rel_entr`](qiskit.aqua.algorithms.QGAN.rel_entr "qiskit.aqua.algorithms.QGAN.rel_entr")                         | Returns relative entropy between target and trained distribution |
| [`QGAN.seed`](qiskit.aqua.algorithms.QGAN.seed "qiskit.aqua.algorithms.QGAN.seed")                                     | Returns random seed                                              |
| [`QGAN.tol_rel_ent`](qiskit.aqua.algorithms.QGAN.tol_rel_ent "qiskit.aqua.algorithms.QGAN.tol_rel_ent")                | Returns tolerance for relative entropy                           |

## Methods

|                                                                                                                                             |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`QGAN.get_rel_entr`](qiskit.aqua.algorithms.QGAN.get_rel_entr "qiskit.aqua.algorithms.QGAN.get_rel_entr")()                                | Get relative entropy between target and trained distribution |
| [`QGAN.run`](qiskit.aqua.algorithms.QGAN.run "qiskit.aqua.algorithms.QGAN.run")(\[quantum\_instance])                                       | Execute the algorithm with selected backend.                 |
| [`QGAN.set_backend`](qiskit.aqua.algorithms.QGAN.set_backend "qiskit.aqua.algorithms.QGAN.set_backend")(backend, \*\*kwargs)                | Sets backend with configuration.                             |
| [`QGAN.set_discriminator`](qiskit.aqua.algorithms.QGAN.set_discriminator "qiskit.aqua.algorithms.QGAN.set_discriminator")(\[discriminator]) | Initialize discriminator.                                    |
| [`QGAN.set_generator`](qiskit.aqua.algorithms.QGAN.set_generator "qiskit.aqua.algorithms.QGAN.set_generator")(\[generator\_circuit, …])     | Initialize generator.                                        |
| [`QGAN.train`](qiskit.aqua.algorithms.QGAN.train "qiskit.aqua.algorithms.QGAN.train")()                                                     | Train the qGAN                                               |

