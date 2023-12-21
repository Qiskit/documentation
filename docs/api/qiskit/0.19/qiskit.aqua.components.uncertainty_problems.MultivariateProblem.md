---
title: MultivariateProblem
description: API reference for qiskit.aqua.components.uncertainty_problems.MultivariateProblem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_problems.MultivariateProblem
---

# MultivariateProblem

<span id="qiskit.aqua.components.uncertainty_problems.MultivariateProblem" />

`MultivariateProblem(uncertainty_model, aggregation_function, univariate_objective, conditions=None)`

Multivariate Uncertainty Problem.

Constructor.

**Parameters**

*   **uncertainty\_model** ([`MultivariateDistribution`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution "qiskit.aqua.components.uncertainty_models.multivariate_distribution.MultivariateDistribution")) – multivariate uncertainty model
*   **aggregation\_function** ([`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")) – aggregation function that maps the multiple dimension to an aggregated value
*   **univariate\_objective** ([`UnivariatePiecewiseLinearObjective`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective "qiskit.aqua.components.uncertainty_problems.univariate_piecewise_linear_objective.UnivariatePiecewiseLinearObjective")) – objective function applied to the aggregated value
*   **conditions** (`Union`\[`List`\[`Tuple`\[`int`, [`CircuitFactory`](qiskit.aqua.utils.CircuitFactory "qiskit.aqua.utils.circuit_factory.CircuitFactory")]], `ndarray`, `None`]) – list of pairs (int, CircuitFactory) = target dimension of uncertainty model and condition to be satisfied to apply the aggregation

## Attributes

|                                                                                                                                                                                                                  |                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`MultivariateProblem.num_target_qubits`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.num_target_qubits "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                                                                |                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`MultivariateProblem.build`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build")(qc, q\[, …])                                                                      | Adds corresponding sub-circuit to given circuit                       |
| [`MultivariateProblem.build_controlled`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`MultivariateProblem.build_controlled_inverse`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`MultivariateProblem.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`MultivariateProblem.build_controlled_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`MultivariateProblem.build_inverse`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`MultivariateProblem.build_inverse_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`MultivariateProblem.build_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`MultivariateProblem.get_num_qubits`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`MultivariateProblem.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`MultivariateProblem.required_ancillas`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas")()                                             | returns required ancillas                                             |
| [`MultivariateProblem.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas_controlled")()            | returns required ancillas controlled                                  |
| [`MultivariateProblem.value_to_estimation`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.value_to_estimation "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.value_to_estimation")(value)                                  | value to estimate                                                     |

