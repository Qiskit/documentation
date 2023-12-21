---
title: GaussianConditionalIndependenceModel
description: API reference for qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel
---

# GaussianConditionalIndependenceModel

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel" />

`GaussianConditionalIndependenceModel(n_normal, normal_max_value, p_zeros, rhos, i_normal=None, i_ps=None)`

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

## Attributes

|                                                                                                                                                                                                                                                                          |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`GaussianConditionalIndependenceModel.dimension`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.dimension "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.dimension")                                  | returns dimensions                  |
| [`GaussianConditionalIndependenceModel.high`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.high "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.high")                                                 | returns high                        |
| [`GaussianConditionalIndependenceModel.low`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.low "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.low")                                                    | returns low                         |
| [`GaussianConditionalIndependenceModel.num_qubits`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_qubits "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_qubits")                               | returns num qubits                  |
| [`GaussianConditionalIndependenceModel.num_target_qubits`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_target_qubits "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_target_qubits")          | Returns the number of target qubits |
| [`GaussianConditionalIndependenceModel.num_values`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_values "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_values")                               | returns number of values            |
| [`GaussianConditionalIndependenceModel.probabilities`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities")                      | returns probabilities               |
| [`GaussianConditionalIndependenceModel.probabilities_vector`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities_vector "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities_vector") | returns probabilities vector        |
| [`GaussianConditionalIndependenceModel.values`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.values "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.values")                                           | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                                                               |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`GaussianConditionalIndependenceModel.build`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build")(qc, q)                                                                            |                                                                       |
| [`GaussianConditionalIndependenceModel.build_controlled`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`GaussianConditionalIndependenceModel.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`GaussianConditionalIndependenceModel.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`GaussianConditionalIndependenceModel.build_controlled_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`GaussianConditionalIndependenceModel.build_inverse`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`GaussianConditionalIndependenceModel.build_inverse_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`GaussianConditionalIndependenceModel.build_power`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power")(qc, …)                                                          | Adds power of corresponding circuit.                                  |
| [`GaussianConditionalIndependenceModel.get_num_qubits`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`GaussianConditionalIndependenceModel.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`GaussianConditionalIndependenceModel.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities")(…)                                   | pdf to probabilities                                                  |
| [`GaussianConditionalIndependenceModel.required_ancillas`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas")()                                             | returns required ancillas                                             |
| [`GaussianConditionalIndependenceModel.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

