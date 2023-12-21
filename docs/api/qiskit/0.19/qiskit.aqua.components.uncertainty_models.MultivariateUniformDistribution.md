---
title: MultivariateUniformDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution
---

# MultivariateUniformDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution" />

`MultivariateUniformDistribution(num_qubits, low=None, high=None)`

The Multivariate Uniform Distribution.

Although this just results in a Hadamard gate on all involved qubits, the lower and upper bounds and the assignment of the qubits to the different dimensions is important if used in a particular application.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – List with the number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the lower bounds per dimension, set to 0 for each dimension if None
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the upper bounds per dimension, set to 1 for each dimension if None

## Attributes

|                                                                                                                                                                                                                                                           |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`MultivariateUniformDistribution.dimension`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.dimension")                                  | returns dimensions                  |
| [`MultivariateUniformDistribution.high`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.high")                                                 | returns high                        |
| [`MultivariateUniformDistribution.low`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.low")                                                    | returns low                         |
| [`MultivariateUniformDistribution.num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_qubits")                               | returns num qubits                  |
| [`MultivariateUniformDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`MultivariateUniformDistribution.num_values`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_values")                               | returns number of values            |
| [`MultivariateUniformDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.probabilities")                      | returns probabilities               |
| [`MultivariateUniformDistribution.probabilities_vector`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.probabilities_vector") | returns probabilities vector        |
| [`MultivariateUniformDistribution.values`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.values")                                           | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                                                |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`MultivariateUniformDistribution.build`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build")(qc, q)                                                                            |                                                                       |
| [`MultivariateUniformDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`MultivariateUniformDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`MultivariateUniformDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`MultivariateUniformDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`MultivariateUniformDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`MultivariateUniformDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`MultivariateUniformDistribution.build_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_power")(qc, …)                                                          | Adds power of corresponding circuit.                                  |
| [`MultivariateUniformDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`MultivariateUniformDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`MultivariateUniformDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.pdf_to_probabilities")(…)                                   | pdf to probabilities                                                  |
| [`MultivariateUniformDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas")()                                             | returns required ancillas                                             |
| [`MultivariateUniformDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

