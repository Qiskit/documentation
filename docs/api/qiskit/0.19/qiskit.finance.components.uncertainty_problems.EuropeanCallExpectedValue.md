---
title: EuropeanCallExpectedValue
description: API reference for qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue
---

# EuropeanCallExpectedValue

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue" />

`EuropeanCallExpectedValue(uncertainty_model, strike_price, c_approx, i_state=None, i_compare=None, i_objective=None)`

The European Call Option Expected Value.

Evaluates the expected payoff for a European call option given an uncertainty model. The payoff function is f(S, K) = max(0, S - K) for a spot price S and strike price K.

Constructor.

**Parameters**

*   **uncertainty\_model** ([`UnivariateDistribution`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution "qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution")) – uncertainty model for spot price
*   **strike\_price** (`float`) – strike price of the European option
*   **c\_approx** (`float`) – approximation factor for linear payoff
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits representing the uncertainty
*   **i\_compare** (`Optional`\[`int`]) – index of qubit for comparing spot price to strike price (enabling payoff or not)
*   **i\_objective** (`Optional`\[`int`]) – index of qubit for objective function

## Attributes

|                                                                                                                                                                                                                                          |                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`EuropeanCallExpectedValue.num_target_qubits`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.num_target_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                                                                                        |                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`EuropeanCallExpectedValue.build`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build")(qc, q\[, …])                                                                      | Adds corresponding sub-circuit to given circuit                       |
| [`EuropeanCallExpectedValue.build_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`EuropeanCallExpectedValue.build_controlled_inverse`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`EuropeanCallExpectedValue.build_controlled_inverse_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`EuropeanCallExpectedValue.build_controlled_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`EuropeanCallExpectedValue.build_inverse`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`EuropeanCallExpectedValue.build_inverse_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`EuropeanCallExpectedValue.build_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_power")(qc, q, …)                                                       | Adds power of corresponding circuit.                                  |
| [`EuropeanCallExpectedValue.get_num_qubits`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`EuropeanCallExpectedValue.get_num_qubits_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`EuropeanCallExpectedValue.required_ancillas`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas")()                                             | returns required ancillas                                             |
| [`EuropeanCallExpectedValue.required_ancillas_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas_controlled")()            | returns required ancillas controlled                                  |
| [`EuropeanCallExpectedValue.value_to_estimation`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.value_to_estimation "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.value_to_estimation")(value)                                  | value to estimate                                                     |

