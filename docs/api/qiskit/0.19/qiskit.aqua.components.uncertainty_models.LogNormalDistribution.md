---
title: LogNormalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.LogNormalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.LogNormalDistribution
---

# LogNormalDistribution

<span id="qiskit.aqua.components.uncertainty_models.LogNormalDistribution" />

`LogNormalDistribution(num_target_qubits, mu=0, sigma=1, low=0, high=1)`

The Univariate Log-Normal Distribution.

Log-normal distribution, truncated to lower and upper bound and discretized on a grid defined by the number of qubits.

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a minimum value of 1.
*   **mu** (`float`) – Expected value of considered normal distribution
*   **sigma** (`float`) – Standard deviation of considered normal distribution
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

## Attributes

|                                                                                                                                                                                                                    |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`LogNormalDistribution.high`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.high "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.high")                                        | returns high                        |
| [`LogNormalDistribution.low`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.low "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.low")                                           | returns low                         |
| [`LogNormalDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.num_target_qubits") | Returns the number of target qubits |
| [`LogNormalDistribution.num_values`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.num_values "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.num_values")                      | returns number of values            |
| [`LogNormalDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.probabilities")             | returns probabilities               |
| [`LogNormalDistribution.values`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.values "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.values")                                  | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                  |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`LogNormalDistribution.build`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build")(qc, q\[, …])                                                                      |                                                                                                                                |
| [`LogNormalDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`LogNormalDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`LogNormalDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`LogNormalDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                                                                                |
| [`LogNormalDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`LogNormalDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                                                                                   |
| [`LogNormalDistribution.build_power`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                                                                           |
| [`LogNormalDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.get_num_qubits")()                                                      | returns number of qubits                                                                                                       |
| [`LogNormalDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                                                                            |
| [`LogNormalDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.pdf_to_probabilities")(…)                                   | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`LogNormalDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.required_ancillas")()                                             | returns required ancillas                                                                                                      |
| [`LogNormalDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.LogNormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.LogNormalDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                                                                           |

