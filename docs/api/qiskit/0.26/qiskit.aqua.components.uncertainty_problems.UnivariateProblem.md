---
title: UnivariateProblem
description: API reference for qiskit.aqua.components.uncertainty_problems.UnivariateProblem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_problems.UnivariateProblem
---

# qiskit.aqua.components.uncertainty\_problems.UnivariateProblem

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem" />

`UnivariateProblem(uncertainty_model, univariate_objective, i_state=None, i_objective=None)`

Univariate uncertainty problem.

Constructor.

**Parameters**

*   **uncertainty\_model** (`UnivariateDistribution`) – univariate uncertainty model to
*   **univariate\_objective** (`UnivariatePiecewiseLinearObjective`) – objective function based on uncertainty
*   **i\_state** (`Optional`\[`List`\[`int`]]) – indices of qubits representing uncertainty
*   **i\_objective** (`Optional`\[`int`]) – index of qubit representing the objective value in the amplitude

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.__init__" />

`__init__(uncertainty_model, univariate_objective, i_state=None, i_objective=None)`

Constructor.

**Parameters**

*   **uncertainty\_model** (`UnivariateDistribution`) – univariate uncertainty model to
*   **univariate\_objective** (`UnivariatePiecewiseLinearObjective`) – objective function based on uncertainty
*   **i\_state** (`Optional`\[`List`\[`int`]]) – indices of qubits representing uncertainty
*   **i\_objective** (`Optional`\[`int`]) – index of qubit representing the objective value in the amplitude

## Methods

## Attributes

### build

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build" />

`build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### value\_to\_estimation

<span id="qiskit.aqua.components.uncertainty_problems.UnivariateProblem.value_to_estimation" />

`value_to_estimation(value)`

value to estimate

