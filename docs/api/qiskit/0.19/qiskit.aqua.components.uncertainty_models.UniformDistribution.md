---
title: UniformDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.UniformDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.UniformDistribution
---

# UniformDistribution

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution" />

`UniformDistribution(num_target_qubits, low=0, high=1)`

The Univariate Uniform Distribution.

Uniform distribution is defined by the number of qubits that should be used to represent the distribution, as well as the lower bound and upper bound of the considered interval.

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a minimum value of 1.
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

## Attributes

|                                                                                                                                                                                                              |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`UniformDistribution.high`](qiskit.aqua.components.uncertainty_models.UniformDistribution.high "qiskit.aqua.components.uncertainty_models.UniformDistribution.high")                                        | returns high                        |
| [`UniformDistribution.low`](qiskit.aqua.components.uncertainty_models.UniformDistribution.low "qiskit.aqua.components.uncertainty_models.UniformDistribution.low")                                           | returns low                         |
| [`UniformDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.UniformDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.UniformDistribution.num_target_qubits") | Returns the number of target qubits |
| [`UniformDistribution.num_values`](qiskit.aqua.components.uncertainty_models.UniformDistribution.num_values "qiskit.aqua.components.uncertainty_models.UniformDistribution.num_values")                      | returns number of values            |
| [`UniformDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.UniformDistribution.probabilities "qiskit.aqua.components.uncertainty_models.UniformDistribution.probabilities")             | returns probabilities               |
| [`UniformDistribution.values`](qiskit.aqua.components.uncertainty_models.UniformDistribution.values "qiskit.aqua.components.uncertainty_models.UniformDistribution.values")                                  | returns values                      |

## Methods

|                                                                                                                                                                                                                                                            |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`UniformDistribution.build`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build "qiskit.aqua.components.uncertainty_models.UniformDistribution.build")(qc, q\[, …])                                                                      |                                                                                                                                |
| [`UniformDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`UniformDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`UniformDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`UniformDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                                                                                |
| [`UniformDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`UniformDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                                                                                   |
| [`UniformDistribution.build_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                                                                           |
| [`UniformDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits")()                                                      | returns number of qubits                                                                                                       |
| [`UniformDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                                                                            |
| [`UniformDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities")(…)                                   | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`UniformDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas")()                                             | returns required ancillas                                                                                                      |
| [`UniformDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                                                                           |

