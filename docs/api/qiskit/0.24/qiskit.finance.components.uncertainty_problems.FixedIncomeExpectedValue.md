---
title: FixedIncomeExpectedValue
description: API reference for qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue
---

<span id="qiskit-finance-components-uncertainty-problems-fixedincomeexpectedvalue" />

# qiskit.finance.components.uncertainty\_problems.FixedIncomeExpectedValue

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue" />

`FixedIncomeExpectedValue(uncertainty_model, A, b, cash_flow, c_approx, i_state=None, i_objective=None)`

The Fixed Income Expected Value.

Evaluates a fixed income asset with uncertain interest rates.

Constructor.

**Parameters**

*   **uncertainty\_model** (`UncertaintyModel`) – multivariate distribution
*   **A** (`ndarray`) – PCA matrix for delta\_r (changes in interest rates)
*   **b** (`List`\[`int`]) – offset for interest rates (= initial interest rates)
*   **cash\_flow** (`List`\[`float`]) – cash flow time series
*   **c\_approx** (`float`) – approximation scaling factor
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits that represent the state
*   **i\_objective** (`Optional`\[`int`]) – index of target qubit to apply the rotation to

### \_\_init\_\_

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.__init__" />

`__init__(uncertainty_model, A, b, cash_flow, c_approx, i_state=None, i_objective=None)`

Constructor.

**Parameters**

*   **uncertainty\_model** (`UncertaintyModel`) – multivariate distribution
*   **A** (`ndarray`) – PCA matrix for delta\_r (changes in interest rates)
*   **b** (`List`\[`int`]) – offset for interest rates (= initial interest rates)
*   **cash\_flow** (`List`\[`float`]) – cash flow time series
*   **c\_approx** (`float`) – approximation scaling factor
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits that represent the state
*   **i\_objective** (`Optional`\[`int`]) – index of target qubit to apply the rotation to

## Methods

## Attributes

### build

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build" />

`build(qc, q, q_ancillas=None, params=None)`

Adds corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **params** (*list*) – parameters for circuit

### build\_controlled

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### num\_target\_qubits

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### required\_ancillas

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### value\_to\_estimation

<span id="qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.value_to_estimation" />

`value_to_estimation(value)`

value to estimate

