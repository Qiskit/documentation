# GaussianConditionalIndependenceModel

<span id="undefined" />

`GaussianConditionalIndependenceModel(n_normal, normal_max_value, p_zeros, rhos, i_normal=None, i_ps=None)`

Bases: `qiskit.aqua.components.uncertainty_models.multivariate_distribution.MultivariateDistribution`

The Gaussian Conditional Independence Model for Credit Risk.

Reference: [https://arxiv.org/abs/1412.1183](https://arxiv.org/abs/1412.1183)

Dependency between individual risk variables and latent variable is approximated linearly.

**Parameters**

*   **n\_normal** (`int`) – Number of qubits to represent the latent normal random variable Z
*   **normal\_max\_value** (`float`) – Min/max value to truncate the latent normal random variable Z
*   **p\_zeros** (`Union`\[`List`\[`float`], `ndarray`]) – Standard default probabilities for each asset
*   **rhos** (`Union`\[`List`\[`float`], `ndarray`]) – Sensitivities of default probability of assets with respect to latent variable Z
*   **i\_normal** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent normal variable
*   **i\_ps** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent asset defaults

## Methods

|                                                                                                                                                                                                                                                                                                                                                                                 |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build")                                                                                                     |                                                                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities")                                         | pdf to probabilities                                                  |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled")         | returns required ancillas controlled                                  |

## Attributes

<span id="undefined" />

### dimension

returns dimensions

<span id="undefined" />

### high

returns high

<span id="undefined" />

### low

returns low

<span id="undefined" />

### num\_qubits

returns num qubits

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits

<span id="undefined" />

### num\_values

returns number of values

<span id="undefined" />

### probabilities

returns probabilities

<span id="undefined" />

### probabilities\_vector

returns probabilities vector

<span id="undefined" />

### values

returns values
