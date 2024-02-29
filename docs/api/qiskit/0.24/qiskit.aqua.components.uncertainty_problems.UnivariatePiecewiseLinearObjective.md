---
title: UnivariatePiecewiseLinearObjective
description: API reference for qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective
---

<span id="qiskit-aqua-components-uncertainty-problems-univariatepiecewiselinearobjective" />

# qiskit.aqua.components.uncertainty\_problems.UnivariatePiecewiseLinearObjective

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective" />

`UnivariatePiecewiseLinearObjective(num_state_qubits, min_state_value, max_state_value, breakpoints, slopes, offsets, f_min, f_max, c_approx, i_state=None, i_objective=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/uncertainty_problems/univariate_piecewise_linear_objective.py "view source code")

Univariate Piecewise Linear Objective Function.

This objective function applies controlled Y-rotation to the target qubit, where the control qubits represent integer value, and rotation approximates a piecewise linear function of the amplitude f:

$$
|x\rangle |0\rangle \mapsto |x\rangle (\sqrt(1 - f(x))|0\rangle + sqrt(f(x))|1\rangle )
$$

**Parameters**

*   **num\_state\_qubits** (`int`) – number of qubits to represent the state
*   **min\_state\_value** (`float`) – lower bound of values to be represented by state qubits
*   **max\_state\_value** (`float`) – upper bound of values to be represented by state qubits
*   **breakpoints** (`Union`\[`List`\[`float`], `ndarray`]) – breakpoints of piecewise linear function
*   **slopes** (`Union`\[`List`\[`float`], `ndarray`]) – slopes of linear segments
*   **offsets** (`Union`\[`List`\[`float`], `ndarray`]) – offset of linear segments
*   **f\_min** (`float`) – minimal value of resulting function (required for normalization of amplitude)
*   **f\_max** (`float`) – maximal value of resulting function (required for normalization of amplitude)
*   **c\_approx** (`float`) – approximating factor (linear segments are approximated by contracting rotation around pi/4, where sin^2() is locally linear)
*   **i\_state** (`Optional`\[`List`\[`int`]]) – indices of qubits that represent the state
*   **i\_objective** (`Optional`\[`int`]) – index of target qubit to apply the rotation to

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.__init__" />

`__init__(num_state_qubits, min_state_value, max_state_value, breakpoints, slopes, offsets, f_min, f_max, c_approx, i_state=None, i_objective=None)`

**Parameters**

*   **num\_state\_qubits** (`int`) – number of qubits to represent the state
*   **min\_state\_value** (`float`) – lower bound of values to be represented by state qubits
*   **max\_state\_value** (`float`) – upper bound of values to be represented by state qubits
*   **breakpoints** (`Union`\[`List`\[`float`], `ndarray`]) – breakpoints of piecewise linear function
*   **slopes** (`Union`\[`List`\[`float`], `ndarray`]) – slopes of linear segments
*   **offsets** (`Union`\[`List`\[`float`], `ndarray`]) – offset of linear segments
*   **f\_min** (`float`) – minimal value of resulting function (required for normalization of amplitude)
*   **f\_max** (`float`) – maximal value of resulting function (required for normalization of amplitude)
*   **c\_approx** (`float`) – approximating factor (linear segments are approximated by contracting rotation around pi/4, where sin^2() is locally linear)
*   **i\_state** (`Optional`\[`List`\[`int`]]) – indices of qubits that represent the state
*   **i\_objective** (`Optional`\[`int`]) – index of target qubit to apply the rotation to

## Methods

|                                                                                                                                                                                                                                                                                    |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.__init__ "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.__init__")(num\_state\_qubits, min\_state\_value, …)                                         | **type num\_state\_qubits**`int`                                      |
| [`build`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build")(qc, q\[, q\_ancillas, params])                                                             |                                                                       |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas")()                                                      | requires ancillas                                                     |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |
| [`value_to_estimation`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.value_to_estimation "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.value_to_estimation")(value)                                           | value to estimation                                                   |

## Attributes

|                                                                                                                                                                                                                             |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.num_target_qubits "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.num_target_qubits") | Returns the number of target qubits |

### build

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build" />

`build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas" />

`required_ancillas()`

requires ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### value\_to\_estimation

<span id="qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.value_to_estimation" />

`value_to_estimation(value)`

value to estimation

