---
title: NormalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.NormalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.NormalDistribution
---

# NormalDistribution

<span id="qiskit.aqua.components.uncertainty_models.NormalDistribution" />

`NormalDistribution(num_target_qubits, mu=0, sigma=1, low=- 1, high=1)`

The Univariate Normal Distribution.

Normal distribution, truncated to lower and upper bound and discretized on a grid defined by the number of qubits.

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a minimum value of 1.
*   **mu** (`float`) – Expected value of considered normal distribution
*   **sigma** (`float`) – standard deviation of considered normal distribution
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

## Attributes

|                                                                                                                                                                                                           |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`NormalDistribution.high`](qiskit.aqua.components.uncertainty_models.NormalDistribution.high "qiskit.aqua.components.uncertainty_models.NormalDistribution.high")                                        | returns high                        |
| [`NormalDistribution.low`](qiskit.aqua.components.uncertainty_models.NormalDistribution.low "qiskit.aqua.components.uncertainty_models.NormalDistribution.low")                                           | returns low                         |
| [`NormalDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.NormalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.NormalDistribution.num_target_qubits") | Returns the number of target qubits |
| [`NormalDistribution.num_values`](qiskit.aqua.components.uncertainty_models.NormalDistribution.num_values "qiskit.aqua.components.uncertainty_models.NormalDistribution.num_values")                      | returns number of values            |
| [`NormalDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.NormalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.NormalDistribution.probabilities")             | returns probabilities               |
| [`NormalDistribution.values`](qiskit.aqua.components.uncertainty_models.NormalDistribution.values "qiskit.aqua.components.uncertainty_models.NormalDistribution.values")                                  | returns values                      |

## Methods

|                                                                                                                                                                                                                                                         |                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`NormalDistribution.build`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build "qiskit.aqua.components.uncertainty_models.NormalDistribution.build")(qc, q\[, …])                                                                      |                                                                                                                                |
| [`NormalDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`NormalDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`NormalDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`NormalDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                                                                                |
| [`NormalDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`NormalDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                                                                                   |
| [`NormalDistribution.build_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                                                                           |
| [`NormalDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits")()                                                      | returns number of qubits                                                                                                       |
| [`NormalDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                                                                            |
| [`NormalDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.NormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.NormalDistribution.pdf_to_probabilities")(pdf, …)                              | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`NormalDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas")()                                             | returns required ancillas                                                                                                      |
| [`NormalDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                                                                           |

