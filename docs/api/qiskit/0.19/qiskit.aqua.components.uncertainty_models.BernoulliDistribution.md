---
title: BernoulliDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.BernoulliDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.BernoulliDistribution
---

# BernoulliDistribution

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution" />

`BernoulliDistribution(p, low=0, high=1)`

The Univariate Bernoulli Distribution.

Distribution with only two values (low, high) and the corresponding probabilities represented by a single qubit.

**Parameters**

*   **p** (`float`) – Probability
*   **low** (`float`) – Low value
*   **high** (`float`) – High value

## Attributes

|                                                                                                                                                                                                                    |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`BernoulliDistribution.high`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.high "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.high")                                        | returns high                        |
| [`BernoulliDistribution.low`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.low "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.low")                                           | returns low                         |
| [`BernoulliDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.num_target_qubits") | Returns the number of target qubits |
| [`BernoulliDistribution.num_values`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.num_values "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.num_values")                      | returns number of values            |
| [`BernoulliDistribution.p`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.p "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.p")                                                 |                                     |
| [`BernoulliDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.probabilities "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.probabilities")             | returns probabilities               |
| [`BernoulliDistribution.values`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.values "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.values")                                  | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                  |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`BernoulliDistribution.build`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build")(qc, q\[, …])                                                                      |                                                                                                                                |
| [`BernoulliDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`BernoulliDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`BernoulliDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`BernoulliDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                                                                                |
| [`BernoulliDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`BernoulliDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                                                                                   |
| [`BernoulliDistribution.build_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                                                                           |
| [`BernoulliDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits")()                                                      | returns number of qubits                                                                                                       |
| [`BernoulliDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                                                                            |
| [`BernoulliDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.pdf_to_probabilities")(…)                                   | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`BernoulliDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas")()                                             | returns required ancillas                                                                                                      |
| [`BernoulliDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                                                                           |

