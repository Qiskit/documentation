# QGAN

<span id="undefined" />

`QGAN(data, bounds=None, num_qubits=None, batch_size=500, num_epochs=3000, seed=7, discriminator=None, generator=None, tol_rel_ent=None, snapshot_dir=None, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

The Quantum Generative Adversarial Network algorithm.

The qGAN \[1] is a hybrid quantum-classical algorithm used for generative modeling tasks.

This adaptive algorithm uses the interplay of a generative [`GenerativeNetwork`](qiskit.aqua.components.neural_networks.GenerativeNetwork#qiskit.aqua.components.neural_networks.GenerativeNetwork "qiskit.aqua.components.neural_networks.GenerativeNetwork") and a discriminative [`DiscriminativeNetwork`](qiskit.aqua.components.neural_networks.DiscriminativeNetwork#qiskit.aqua.components.neural_networks.DiscriminativeNetwork "qiskit.aqua.components.neural_networks.DiscriminativeNetwork") network to learn the probability distribution underlying given training data.

These networks are trained in alternating optimization steps, where the discriminator tries to differentiate between training data samples and data samples from the generator and the generator aims at generating samples which the discriminator classifies as training data samples. Eventually, the quantum generator learns the training data’s underlying probability distribution. The trained quantum generator loads a quantum state which is a model of the target distribution.

**References:**

**\[1] Zoufal et al.,**

[Quantum Generative Adversarial Networks for learning and loading random distributions](https://www.nature.com/articles/s41534-019-0223-2)

**Parameters**

*   **data** (`Union`\[`ndarray`, `List`]) – Training data of dimension k
*   **bounds** (`Union`\[`ndarray`, `List`, `None`]) – k min/max data values \[\[min\_0,max\_0],…,\[min\_k-1,max\_k-1]] if univariate data: \[min\_0,max\_0]
*   **num\_qubits** (`Union`\[`ndarray`, `List`, `None`]) – k numbers of qubits to determine representation resolution, i.e. n qubits enable the representation of 2\*\*n values \[num\_qubits\_0,…, num\_qubits\_k-1]
*   **batch\_size** (`int`) – Batch size, has a min. value of 1.
*   **num\_epochs** (`int`) – Number of training epochs
*   **seed** (`int`) – Random number seed
*   **discriminator** (`Optional`\[`DiscriminativeNetwork`]) – Discriminates between real and fake data samples
*   **generator** (`Optional`\[`GenerativeNetwork`]) – Generates ‘fake’ data samples
*   **tol\_rel\_ent** (`Optional`\[`float`]) – Set tolerance level for relative entropy. If the training achieves relative entropy equal or lower than tolerance it finishes.
*   **snapshot\_dir** (`Optional`\[`str`]) – Directory in to which to store cvs file with parameters, if None (default) then no cvs file is created.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

|                                                                                                                                                                    |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| [`get_rel_entr`](qiskit.aqua.algorithms.QGAN.get_rel_entr#qiskit.aqua.algorithms.QGAN.get_rel_entr "qiskit.aqua.algorithms.QGAN.get_rel_entr")                     | Get relative entropy between target and trained distribution |
| [`run`](qiskit.aqua.algorithms.QGAN.run#qiskit.aqua.algorithms.QGAN.run "qiskit.aqua.algorithms.QGAN.run")                                                         | Execute the algorithm with selected backend.                 |
| [`set_backend`](qiskit.aqua.algorithms.QGAN.set_backend#qiskit.aqua.algorithms.QGAN.set_backend "qiskit.aqua.algorithms.QGAN.set_backend")                         | Sets backend with configuration.                             |
| [`set_discriminator`](qiskit.aqua.algorithms.QGAN.set_discriminator#qiskit.aqua.algorithms.QGAN.set_discriminator "qiskit.aqua.algorithms.QGAN.set_discriminator") | Initialize discriminator.                                    |
| [`set_generator`](qiskit.aqua.algorithms.QGAN.set_generator#qiskit.aqua.algorithms.QGAN.set_generator "qiskit.aqua.algorithms.QGAN.set_generator")                 | Initialize generator.                                        |
| [`train`](qiskit.aqua.algorithms.QGAN.train#qiskit.aqua.algorithms.QGAN.train "qiskit.aqua.algorithms.QGAN.train")                                                 | Train the qGAN                                               |

## Attributes

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### d\_loss

Returns discriminator loss

**Return type**

`List`\[`float`]

<span id="undefined" />

### discriminator

Returns discriminator

<span id="undefined" />

### g\_loss

Returns generator loss

**Return type**

`List`\[`float`]

<span id="undefined" />

### generator

Returns generator

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.

<span id="undefined" />

### rel\_entr

Returns relative entropy between target and trained distribution

**Return type**

`List`\[`float`]

<span id="undefined" />

### seed

Returns random seed

<span id="undefined" />

### tol\_rel\_ent

Returns tolerance for relative entropy
