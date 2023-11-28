<span id="qiskit-finance-components-uncertainty-problems-europeancallexpectedvalue" />

# qiskit.finance.components.uncertainty\_problems.EuropeanCallExpectedValue

<span id="undefined" />

`EuropeanCallExpectedValue(uncertainty_model, strike_price, c_approx, i_state=None, i_compare=None, i_objective=None)`

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

<span id="undefined" />

`__init__(uncertainty_model, strike_price, c_approx, i_state=None, i_compare=None, i_objective=None)`

Constructor.

**Parameters**

*   **uncertainty\_model** (`UnivariateDistribution`) – uncertainty model for spot price
*   **strike\_price** (`float`) – strike price of the European option
*   **c\_approx** (`float`) – approximation factor for linear payoff
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits representing the uncertainty
*   **i\_compare** (`Optional`\[`int`]) – index of qubit for comparing spot price to strike price (enabling payoff or not)
*   **i\_objective** (`Optional`\[`int`]) – index of qubit for objective function

## Methods

|                                                                                                                                                                                                                                                                        |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.__init__ "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.__init__")(uncertainty\_model, strike\_price, …)                                             | Constructor.                                                          |
| [`build`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build")(qc, q\[, q\_ancillas, params])                                                             | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_power "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`required_ancillas`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas")()                                                      | returns required ancillas                                             |
| [`required_ancillas_controlled`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |
| [`value_to_estimation`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.value_to_estimation "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.value_to_estimation")(value)                                           | value to estimate                                                     |

## Attributes

|                                                                                                                                                                                                                 |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`num_target_qubits`](#qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.num_target_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallExpectedValue.num_target_qubits") | Returns the number of target qubits |

<span id="undefined" />

`build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

<span id="undefined" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

<span id="undefined" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

<span id="undefined" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

<span id="undefined" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`get_num_qubits()`

returns number of qubits

<span id="undefined" />

`get_num_qubits_controlled()`

returns number of qubits controlled

<span id="undefined" />

`property num_target_qubits`

Returns the number of target qubits

<span id="undefined" />

`required_ancillas()`

returns required ancillas

<span id="undefined" />

`required_ancillas_controlled()`

returns required ancillas controlled

<span id="undefined" />

`value_to_estimation(value)`

value to estimate
