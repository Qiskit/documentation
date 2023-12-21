---
title: UnivariateVariationalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution
---

# UnivariateVariationalDistribution

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution" />

`UnivariateVariationalDistribution(num_qubits, var_form, params, low=0, high=1)`

The Univariate Variational Distribution.

**Parameters**

*   **num\_qubits** (`int`) – Number of qubits
*   **var\_form** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`VariationalForm`](qiskit.aqua.components.variational_forms.VariationalForm "qiskit.aqua.components.variational_forms.variational_form.VariationalForm")]) – Variational form
*   **params** (`Union`\[`List`\[`float`], `ndarray`]) – Parameters for variational form
*   **low** (`float`) – Lower bound
*   **high** (`float`) – Upper bound

## Attributes

|                                                                                                                                                                                                                                                        |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`UnivariateVariationalDistribution.high`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.high "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.high")                                        | returns high                        |
| [`UnivariateVariationalDistribution.low`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.low "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.low")                                           | returns low                         |
| [`UnivariateVariationalDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_target_qubits") | Returns the number of target qubits |
| [`UnivariateVariationalDistribution.num_values`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_values "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_values")                      | returns number of values            |
| [`UnivariateVariationalDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.probabilities")             | returns probabilities               |
| [`UnivariateVariationalDistribution.values`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.values "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.values")                                  | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                                                      |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`UnivariateVariationalDistribution.build`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build")(qc, q)                                                                            |                                                                                                                                |
| [`UnivariateVariationalDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`UnivariateVariationalDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`UnivariateVariationalDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`UnivariateVariationalDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                                                                                |
| [`UnivariateVariationalDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`UnivariateVariationalDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                                                                                   |
| [`UnivariateVariationalDistribution.build_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power")(qc, …)                                                          | Adds power of corresponding circuit.                                                                                           |
| [`UnivariateVariationalDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits")()                                                      | returns number of qubits                                                                                                       |
| [`UnivariateVariationalDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                                                                            |
| [`UnivariateVariationalDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities")(…)                                   | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`UnivariateVariationalDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas")()                                             | returns required ancillas                                                                                                      |
| [`UnivariateVariationalDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                                                                           |
| [`UnivariateVariationalDistribution.set_probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities")(…)                                            | Set Probabilities                                                                                                              |

