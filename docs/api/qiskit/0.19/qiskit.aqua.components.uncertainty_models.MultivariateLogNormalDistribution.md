---
title: MultivariateLogNormalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution
---

# MultivariateLogNormalDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution" />

`MultivariateLogNormalDistribution(num_qubits, low=None, high=None, mu=None, cov=None)`

The Multivariate Log-Normal Distribution.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **cov** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

## Attributes

|                                                                                                                                                                                                                                                                 |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`MultivariateLogNormalDistribution.dimension`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.dimension")                                  | returns dimensions                  |
| [`MultivariateLogNormalDistribution.high`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.high")                                                 | returns high                        |
| [`MultivariateLogNormalDistribution.low`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.low")                                                    | returns low                         |
| [`MultivariateLogNormalDistribution.num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_qubits")                               | returns num qubits                  |
| [`MultivariateLogNormalDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`MultivariateLogNormalDistribution.num_values`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_values")                               | returns number of values            |
| [`MultivariateLogNormalDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities")                      | returns probabilities               |
| [`MultivariateLogNormalDistribution.probabilities_vector`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities_vector") | returns probabilities vector        |
| [`MultivariateLogNormalDistribution.values`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.values")                                           | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                                                      |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`MultivariateLogNormalDistribution.build`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build")(qc, q)                                                                            |                                                                       |
| [`MultivariateLogNormalDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`MultivariateLogNormalDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`MultivariateLogNormalDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`MultivariateLogNormalDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`MultivariateLogNormalDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`MultivariateLogNormalDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`MultivariateLogNormalDistribution.build_power`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_power")(qc, …)                                                          | Adds power of corresponding circuit.                                  |
| [`MultivariateLogNormalDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`MultivariateLogNormalDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`MultivariateLogNormalDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.pdf_to_probabilities")(…)                                   | pdf to probabilities                                                  |
| [`MultivariateLogNormalDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas")()                                             | returns required ancillas                                             |
| [`MultivariateLogNormalDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

