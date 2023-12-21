---
title: MultivariateDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateDistribution
---

# MultivariateDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution" />

`MultivariateDistribution(num_qubits, probabilities=None, low=None, high=None)`

This module contains the definition of a base class for multivariate distributions. (Interface for discrete bounded uncertainty models assuming an equidistant grid)

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Assigns qubits to dimensions
*   **probabilities** (`Optional`\[`Dict`]) – Map - maps index tuples to probabilities
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lowest value per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Highest value per dimension

## Attributes

|                                                                                                                                                                                                                                      |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`MultivariateDistribution.dimension`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.dimension")                                  | returns dimensions                  |
| [`MultivariateDistribution.high`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.high")                                                 | returns high                        |
| [`MultivariateDistribution.low`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.low")                                                    | returns low                         |
| [`MultivariateDistribution.num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_qubits")                               | returns num qubits                  |
| [`MultivariateDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`MultivariateDistribution.num_values`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_values")                               | returns number of values            |
| [`MultivariateDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities")                      | returns probabilities               |
| [`MultivariateDistribution.probabilities_vector`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities_vector") | returns probabilities vector        |
| [`MultivariateDistribution.values`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.values")                                           | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                           |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`MultivariateDistribution.build`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build")(qc, q\[, …])                                                                      |                                                                       |
| [`MultivariateDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`MultivariateDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`MultivariateDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`MultivariateDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`MultivariateDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`MultivariateDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`MultivariateDistribution.build_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power")(qc, q, …)                                                       | Adds power of corresponding circuit.                                  |
| [`MultivariateDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`MultivariateDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`MultivariateDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities")(…)                                   | pdf to probabilities                                                  |
| [`MultivariateDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas")()                                             | returns required ancillas                                             |
| [`MultivariateDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

