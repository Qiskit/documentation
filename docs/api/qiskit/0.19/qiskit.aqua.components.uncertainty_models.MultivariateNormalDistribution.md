---
title: MultivariateNormalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution
---

# MultivariateNormalDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution" />

`MultivariateNormalDistribution(num_qubits, low=None, high=None, mu=None, sigma=None)`

The Multivariate Normal Distribution.

Provides a discretized and truncated normal distribution loaded into a quantum state. Truncation bounds are given by lower and upper bound and discretization is specified by the number of qubits per dimension.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **sigma** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

## Attributes

|                                                                                                                                                                                                                                                        |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`MultivariateNormalDistribution.dimension`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.dimension")                                  | returns dimensions                  |
| [`MultivariateNormalDistribution.high`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.high")                                                 | returns high                        |
| [`MultivariateNormalDistribution.low`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.low")                                                    | returns low                         |
| [`MultivariateNormalDistribution.num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_qubits")                               | returns num qubits                  |
| [`MultivariateNormalDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`MultivariateNormalDistribution.num_values`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_values")                               | returns number of values            |
| [`MultivariateNormalDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities")                      | returns probabilities               |
| [`MultivariateNormalDistribution.probabilities_vector`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities_vector") | returns probabilities vector        |
| [`MultivariateNormalDistribution.values`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.values")                                           | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                                             |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`MultivariateNormalDistribution.build`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build")(qc, q)                                                                            |                                                                       |
| [`MultivariateNormalDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`MultivariateNormalDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`MultivariateNormalDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`MultivariateNormalDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`MultivariateNormalDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`MultivariateNormalDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`MultivariateNormalDistribution.build_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power")(qc, …)                                                          | Adds power of corresponding circuit.                                  |
| [`MultivariateNormalDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`MultivariateNormalDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`MultivariateNormalDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities")(…)                                   | pdf to probabilities                                                  |
| [`MultivariateNormalDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas")()                                             | returns required ancillas                                             |
| [`MultivariateNormalDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

