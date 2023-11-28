# qiskit.aqua.components.uncertainty\_problems.MultivariateProblem

<span id="undefined" />

`MultivariateProblem(uncertainty_model, aggregation_function, univariate_objective, conditions=None)`

Multivariate Uncertainty Problem.

Constructor.

**Parameters**

*   **uncertainty\_model** (`MultivariateDistribution`) – multivariate uncertainty model
*   **aggregation\_function** (`CircuitFactory`) – aggregation function that maps the multiple dimension to an aggregated value
*   **univariate\_objective** (`UnivariatePiecewiseLinearObjective`) – objective function applied to the aggregated value
*   **conditions** (`Union`\[`List`\[`Tuple`\[`int`, `CircuitFactory`]], `ndarray`, `None`]) – list of pairs (int, CircuitFactory) = target dimension of uncertainty model and condition to be satisfied to apply the aggregation

<span id="undefined" />

`__init__(uncertainty_model, aggregation_function, univariate_objective, conditions=None)`

Constructor.

**Parameters**

*   **uncertainty\_model** (`MultivariateDistribution`) – multivariate uncertainty model
*   **aggregation\_function** (`CircuitFactory`) – aggregation function that maps the multiple dimension to an aggregated value
*   **univariate\_objective** (`UnivariatePiecewiseLinearObjective`) – objective function applied to the aggregated value
*   **conditions** (`Union`\[`List`\[`Tuple`\[`int`, `CircuitFactory`]], `ndarray`, `None`]) – list of pairs (int, CircuitFactory) = target dimension of uncertainty model and condition to be satisfied to apply the aggregation

## Methods

|                                                                                                                                                                                                                                                      |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.__init__ "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.__init__")(uncertainty\_model, …\[, conditions])                                             | Constructor.                                                          |
| [`build`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build")(qc, q\[, q\_ancillas, params])                                                             | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas")()                                                      | returns required ancillas                                             |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |
| [`value_to_estimation`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.value_to_estimation "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.value_to_estimation")(value)                                           | value to estimate                                                     |

## Attributes

|                                                                                                                                                                                               |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.num_target_qubits "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.num_target_qubits") | Returns the number of target qubits |

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
