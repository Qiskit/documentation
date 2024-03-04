---
title: UnivariateVariationalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution
---

# UnivariateVariationalDistribution

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution" />

`UnivariateVariationalDistribution(num_qubits, var_form, params, low=0, high=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/uncertainty_models/univariate_variational_distribution.py "view source code")

Bases: `qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution`

The Univariate Variational Distribution.

**Parameters**

*   **num\_qubits** (`int`) – Number of qubits
*   **var\_form** (`QuantumCircuit`) – Variational form
*   **params** (`Union`\[`List`\[`float`], `ndarray`]) – Parameters for variational form
*   **low** (`float`) – Lower bound
*   **high** (`float`) – Upper bound

## Methods

### build

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build" />

`UnivariateVariationalDistribution.build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled" />

`UnivariateVariationalDistribution.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse" />

`UnivariateVariationalDistribution.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power" />

`UnivariateVariationalDistribution.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power" />

`UnivariateVariationalDistribution.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse" />

`UnivariateVariationalDistribution.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power" />

`UnivariateVariationalDistribution.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power" />

`UnivariateVariationalDistribution.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits" />

`UnivariateVariationalDistribution.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled" />

`UnivariateVariationalDistribution.get_num_qubits_controlled()`

returns number of qubits controlled

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities" />

`static UnivariateVariationalDistribution.pdf_to_probabilities(pdf, low, high, num_values)`

Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it

**Parameters**

*   **pdf** (*function*) – probability density function
*   **low** (*float*) – lower bound of equidistant grid
*   **high** (*float*) – upper bound of equidistant grid
*   **num\_values** (*int*) – number of grid points

**Returns**

array of probabilities

**Return type**

list

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas" />

`UnivariateVariationalDistribution.required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled" />

`UnivariateVariationalDistribution.required_ancillas_controlled()`

returns required ancillas controlled

### set\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities" />

`UnivariateVariationalDistribution.set_probabilities(quantum_instance)`

Set Probabilities

**Parameters**

**quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum instance

## Attributes

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.high" />

### high

returns high

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.low" />

### low

returns low

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_target_qubits" />

### num\_target\_qubits

Returns the number of target qubits

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_values" />

### num\_values

returns number of values

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.probabilities" />

### probabilities

returns probabilities

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.values" />

### values

returns values

