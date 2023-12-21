---
title: MultivariateVariationalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution
---

# MultivariateVariationalDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution" />

`MultivariateVariationalDistribution(num_qubits, var_form, params, low=None, high=None)`

The Multivariate Variational Distribution.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – List with the number of qubits per dimension
*   **var\_form** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`VariationalForm`](qiskit.aqua.components.variational_forms.VariationalForm "qiskit.aqua.components.variational_forms.variational_form.VariationalForm")]) – Variational form
*   **params** (`Union`\[`List`\[`float`], `ndarray`]) – Parameters for variational form
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the lower bounds per dimension, set to 0 for each dimension if None
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the upper bounds per dimension, set to 1 for each dimension if None

## Attributes

|                                                                                                                                                                                                                                                                       |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`MultivariateVariationalDistribution.dimension`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.dimension")                                  | returns dimensions                  |
| [`MultivariateVariationalDistribution.high`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.high")                                                 | returns high                        |
| [`MultivariateVariationalDistribution.low`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.low")                                                    | returns low                         |
| [`MultivariateVariationalDistribution.num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.num_qubits")                               | returns num qubits                  |
| [`MultivariateVariationalDistribution.num_target_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`MultivariateVariationalDistribution.num_values`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.num_values")                               | returns number of values            |
| [`MultivariateVariationalDistribution.probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.probabilities")                      | returns probabilities               |
| [`MultivariateVariationalDistribution.probabilities_vector`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.probabilities_vector") | returns probabilities vector        |
| [`MultivariateVariationalDistribution.values`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.values")                                           | returns values                      |

## Methods

|                                                                                                                                                                                                                                                                                                            |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`MultivariateVariationalDistribution.build`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build")(qc, q)                                                                            |                                                                       |
| [`MultivariateVariationalDistribution.build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`MultivariateVariationalDistribution.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`MultivariateVariationalDistribution.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`MultivariateVariationalDistribution.build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`MultivariateVariationalDistribution.build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`MultivariateVariationalDistribution.build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`MultivariateVariationalDistribution.build_power`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_power")(qc, …)                                                          | Adds power of corresponding circuit.                                  |
| [`MultivariateVariationalDistribution.get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`MultivariateVariationalDistribution.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`MultivariateVariationalDistribution.pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.pdf_to_probabilities")(…)                                   | pdf to probabilities                                                  |
| [`MultivariateVariationalDistribution.required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.required_ancillas")()                                             | returns required ancillas                                             |
| [`MultivariateVariationalDistribution.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.required_ancillas_controlled")()            | returns required ancillas controlled                                  |
| [`MultivariateVariationalDistribution.set_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.set_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.set_probabilities")(…)                                            | Set Probabilities                                                     |

