---
title: BernoulliDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.BernoulliDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.BernoulliDistribution
---

# BernoulliDistribution

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution" />

`BernoulliDistribution(p, low=0, high=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/uncertainty_models/bernoulli_distribution.py "view source code")

The Univariate Bernoulli Distribution.

Distribution with only two values (low, high) and the corresponding probabilities represented by a single qubit.

**Parameters**

*   **p** (`float`) – Probability
*   **low** (`float`) – Low value
*   **high** (`float`) – High value

## Attributes

### high

returns high

### low

returns low

### num\_target\_qubits

Returns the number of target qubits

### num\_values

returns number of values

### p

### probabilities

returns probabilities

### values

returns values

## Methods

### build

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build" />

`BernoulliDistribution.build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled" />

`BernoulliDistribution.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse" />

`BernoulliDistribution.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse_power" />

`BernoulliDistribution.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_power" />

`BernoulliDistribution.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse" />

`BernoulliDistribution.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse_power" />

`BernoulliDistribution.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_power" />

`BernoulliDistribution.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits" />

`BernoulliDistribution.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits_controlled" />

`BernoulliDistribution.get_num_qubits_controlled()`

returns number of qubits controlled

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.pdf_to_probabilities" />

`static BernoulliDistribution.pdf_to_probabilities(pdf, low, high, num_values)`

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

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas" />

`BernoulliDistribution.required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas_controlled" />

`BernoulliDistribution.required_ancillas_controlled()`

returns required ancillas controlled

