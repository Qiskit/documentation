---
title: UnivariateProblem
description: API reference for qiskit.aqua.components.uncertainty_problems.UnivariateProblem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_problems.UnivariateProblem
---

# UnivariateProblem

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem" />

`UnivariateProblem(uncertainty_model, univariate_objective, i_state=None, i_objective=None)`

Univariate uncertainty problem.

Constructor.

**Parameters**

*   **uncertainty\_model** ([`UnivariateDistribution`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution "qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution")) – univariate uncertainty model to
*   **univariate\_objective** ([`UnivariatePiecewiseLinearObjective`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective "qiskit.aqua.components.uncertainty_problems.univariate_piecewise_linear_objective.UnivariatePiecewiseLinearObjective")) – objective function based on uncertainty
*   **i\_state** (`Optional`\[`int`]) – indices of qubits representing uncertainty
*   **i\_objective** (`Optional`\[`int`]) – index of qubit representing the objective value in the amplitude

## Attributes

|                                                                                                                                                                                                            |                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`UnivariateProblem.num_target_qubits`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.num_target_qubits "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                                                          |                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`UnivariateProblem.build`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build")(qc, q\[, q\_ancillas, …])                                                         | Adds corresponding sub-circuit to given circuit                       |
| [`UnivariateProblem.build_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`UnivariateProblem.build_controlled_inverse`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`UnivariateProblem.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`UnivariateProblem.build_controlled_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`UnivariateProblem.build_inverse`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`UnivariateProblem.build_inverse_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse_power")(qc, q, …)                               | Adds inverse power of corresponding circuit.                          |
| [`UnivariateProblem.build_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`UnivariateProblem.get_num_qubits`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`UnivariateProblem.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`UnivariateProblem.required_ancillas`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas")()                                             | returns required ancillas                                             |
| [`UnivariateProblem.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas_controlled")()            | returns required ancillas controlled                                  |
| [`UnivariateProblem.value_to_estimation`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.value_to_estimation "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.value_to_estimation")(value)                                  | value to estimate                                                     |

