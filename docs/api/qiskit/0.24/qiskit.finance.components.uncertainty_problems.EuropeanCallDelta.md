---
title: EuropeanCallDelta
description: API reference for qiskit.finance.components.uncertainty_problems.EuropeanCallDelta
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.components.uncertainty_problems.EuropeanCallDelta
---

<span id="qiskit-finance-components-uncertainty-problems-europeancalldelta" />

# qiskit.finance.components.uncertainty\_problems.EuropeanCallDelta

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta" />

`EuropeanCallDelta(uncertainty_model, strike_price, i_state=None, i_objective=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/finance/components/uncertainty_problems/european_call_delta.py "view source code")

The European Call Option Delta.

Evaluates the variance for a European call option given an uncertainty model. The payoff function is f(S, K) = max(0, S - K) for a spot price S and strike price K.

Constructor.

**Parameters**

*   **uncertainty\_model** (`UnivariateDistribution`) – uncertainty model for spot price
*   **strike\_price** (`float`) – strike price of the European option
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits representing the uncertainty
*   **i\_objective** (`Optional`\[`int`]) – index of qubit for objective function

### \_\_init\_\_

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.__init__" />

`__init__(uncertainty_model, strike_price, i_state=None, i_objective=None)`

Constructor.

**Parameters**

*   **uncertainty\_model** (`UnivariateDistribution`) – uncertainty model for spot price
*   **strike\_price** (`float`) – strike price of the European option
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits representing the uncertainty
*   **i\_objective** (`Optional`\[`int`]) – index of qubit for objective function

## Methods

|                                                                                                                                                                                                                                                        |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.__init__ "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.__init__")(uncertainty\_model, strike\_price\[, …])                                          | Constructor.                                                          |
| [`build`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build")(qc, q\[, q\_ancillas, params])                                                             | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_power "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`required_ancillas`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas")()                                                      | returns required ancillas                                             |
| [`required_ancillas_controlled`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas_controlled "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |
| [`value_to_estimation`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.value_to_estimation "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.value_to_estimation")(value)                                           | value to estimate                                                     |

## Attributes

|                                                                                                                                                                                                 |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`num_target_qubits`](#qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.num_target_qubits "qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.num_target_qubits") | Returns the number of target qubits |

### build

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build" />

`build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

### build\_controlled

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### num\_target\_qubits

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### required\_ancillas

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### value\_to\_estimation

<span id="qiskit.finance.components.uncertainty_problems.EuropeanCallDelta.value_to_estimation" />

`value_to_estimation(value)`

value to estimate

