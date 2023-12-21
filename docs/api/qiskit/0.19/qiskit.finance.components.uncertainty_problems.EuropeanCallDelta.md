---
title: EuropeanCallDelta
description: API reference for qiskit.finance.components.uncertainty_problems.EuropeanCallDelta
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.components.uncertainty_problems.EuropeanCallDelta
---

# EuropeanCallDelta

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta" />

`EuropeanCallDelta(uncertainty_model, strike_price, i_state=None, i_objective=None)`

The European Call Option Delta.

Evaluates the variance for a European call option given an uncertainty model. The payoff function is f(S, K) = max(0, S - K) for a spot price S and strike price K.

Constructor.

**Parameters**

*   **uncertainty\_model** ([`UnivariateDistribution`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution "qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution")) – uncertainty model for spot price
*   **strike\_price** (`float`) – strike price of the European option
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits representing the uncertainty
*   **i\_objective** (`Optional`\[`int`]) – index of qubit for objective function

## Attributes

|                                                                                                                                                                                                                  |                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`EuropeanCallDelta.num_target_qubits`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.num_target_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                                                                |                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`EuropeanCallDelta.build`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build")(qc, q\[, q\_ancillas, …])                                                         | Adds corresponding sub-circuit to given circuit                       |
| [`EuropeanCallDelta.build_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`EuropeanCallDelta.build_controlled_inverse`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`EuropeanCallDelta.build_controlled_inverse_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`EuropeanCallDelta.build_controlled_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`EuropeanCallDelta.build_inverse`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`EuropeanCallDelta.build_inverse_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse_power")(qc, q, …)                               | Adds inverse power of corresponding circuit.                          |
| [`EuropeanCallDelta.build_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`EuropeanCallDelta.get_num_qubits`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`EuropeanCallDelta.get_num_qubits_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`EuropeanCallDelta.required_ancillas`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas")()                                             | returns required ancillas                                             |
| [`EuropeanCallDelta.required_ancillas_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas_controlled")()            | returns required ancillas controlled                                  |
| [`EuropeanCallDelta.value_to_estimation`](qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.value_to_estimation "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.value_to_estimation")(value)                                  | value to estimate                                                     |

