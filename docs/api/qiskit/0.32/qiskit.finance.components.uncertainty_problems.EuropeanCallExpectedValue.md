# EuropeanCallExpectedValue

<span id="undefined" />

`EuropeanCallExpectedValue(uncertainty_model, strike_price, c_approx, i_state=None, i_compare=None, i_objective=None)`

Bases: `qiskit.aqua.components.uncertainty_problems.uncertainty_problem.UncertaintyProblem`

The European Call Option Expected Value.

Evaluates the expected payoff for a European call option given an uncertainty model. The payoff function is f(S, K) = max(0, S - K) for a spot price S and strike price K.

Constructor.

**Parameters**

*   **uncertainty\_model** (`UnivariateDistribution`) – uncertainty model for spot price
*   **strike\_price** (`float`) – strike price of the European option
*   **c\_approx** (`float`) – approximation factor for linear payoff
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits representing the uncertainty
*   **i\_compare** (`Optional`\[`int`]) – index of qubit for comparing spot price to strike price (enabling payoff or not)
*   **i\_objective** (`Optional`\[`int`]) – index of qubit for objective function

## Methods

|                                                                                                                                                                                                                                                                                                                                                               |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse_power#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_power#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse_power#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_power#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits_controlled#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas_controlled#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas_controlled")         | returns required ancillas controlled                                  |
| [`value_to_estimation`](qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.value_to_estimation#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.value_to_estimation "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.value_to_estimation")                                             | value to estimate                                                     |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
