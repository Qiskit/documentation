---
title: MultivariateVariationalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution
---

# MultivariateVariationalDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution" />

`MultivariateVariationalDistribution(num_qubits, var_form, params, low=None, high=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/uncertainty_models/multivariate_variational_distribution.py "view source code")

The Multivariate Variational Distribution.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – List with the number of qubits per dimension
*   **var\_form** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`VariationalForm`](qiskit.aqua.components.variational_forms.VariationalForm "qiskit.aqua.components.variational_forms.variational_form.VariationalForm")]) – Variational form
*   **params** (`Union`\[`List`\[`float`], `ndarray`]) – Parameters for variational form
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the lower bounds per dimension, set to 0 for each dimension if None
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the upper bounds per dimension, set to 1 for each dimension if None

## Attributes

### dimension

returns dimensions

### high

returns high

### low

returns low

### num\_qubits

returns num qubits

### num\_target\_qubits

Returns the number of target qubits

### num\_values

returns number of values

### probabilities

returns probabilities

### probabilities\_vector

returns probabilities vector

### values

returns values

## Methods

### build

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build" />

`MultivariateVariationalDistribution.build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled" />

`MultivariateVariationalDistribution.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_inverse" />

`MultivariateVariationalDistribution.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_inverse_power" />

`MultivariateVariationalDistribution.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_controlled_power" />

`MultivariateVariationalDistribution.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_inverse" />

`MultivariateVariationalDistribution.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_inverse_power" />

`MultivariateVariationalDistribution.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.build_power" />

`MultivariateVariationalDistribution.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.get_num_qubits" />

`MultivariateVariationalDistribution.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.get_num_qubits_controlled" />

`MultivariateVariationalDistribution.get_num_qubits_controlled()`

returns number of qubits controlled

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.pdf_to_probabilities" />

`static MultivariateVariationalDistribution.pdf_to_probabilities(pdf, low, high, num_values)`

pdf to probabilities

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.required_ancillas" />

`MultivariateVariationalDistribution.required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.required_ancillas_controlled" />

`MultivariateVariationalDistribution.required_ancillas_controlled()`

returns required ancillas controlled

### set\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateVariationalDistribution.set_probabilities" />

`MultivariateVariationalDistribution.set_probabilities(quantum_instance)`

Set Probabilities

**Parameters**

**quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum Instance

