---
title: UnivariateDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.UnivariateDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.UnivariateDistribution
---

# UnivariateDistribution

<span id="qiskit.aqua.components.uncertainty_models.UnivariateDistribution" />

`UnivariateDistribution(num_target_qubits, probabilities=None, low=0, high=1)`

This module contains the definition of a base class for univariate distributions. (Interface for discrete bounded uncertainty models assuming an equidistant grid)

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a min. value of 1.
*   **probabilities** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Probabilities for different states
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – num qubits and length of probabilities vector do not match

## Attributes

|                                                                                                                                                                                                                       |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`UnivariateDistribution.high`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.high "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.high")                                        | returns high                        |
| [`UnivariateDistribution.low`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.low "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.low")                                           | returns low                         |
| [`UnivariateDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.num_target_qubits") | Returns the number of target qubits |
| [`UnivariateDistribution.num_values`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.num_values "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.num_values")                      | returns number of values            |
| [`UnivariateDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.probabilities "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.probabilities")             | returns probabilities               |
| [`UnivariateDistribution.values`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.values "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.values")                                  | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                     |                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`UnivariateDistribution.build`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build")(qc, q\[, …])                                                                      |                                                                                                                                |
| [`UnivariateDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`UnivariateDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`UnivariateDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`UnivariateDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                                                                                |
| [`UnivariateDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`UnivariateDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                                                                                   |
| [`UnivariateDistribution.build_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                                                                           |
| [`UnivariateDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits")()                                                      | returns number of qubits                                                                                                       |
| [`UnivariateDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                                                                            |
| [`UnivariateDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.pdf_to_probabilities")(…)                                   | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`UnivariateDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas")()                                             | returns required ancillas                                                                                                      |
| [`UnivariateDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                                                                           |

