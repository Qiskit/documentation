---
title: MultivariateNormalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution
---

# MultivariateNormalDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution" />

`MultivariateNormalDistribution(num_qubits, low=None, high=None, mu=None, sigma=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/uncertainty_models/multivariate_normal_distribution.py "view source code")

The Multivariate Normal Distribution.

Provides a discretized and truncated normal distribution loaded into a quantum state. Truncation bounds are given by lower and upper bound and discretization is specified by the number of qubits per dimension.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **sigma** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

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

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build" />

`MultivariateNormalDistribution.build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled" />

`MultivariateNormalDistribution.build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse" />

`MultivariateNormalDistribution.build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power" />

`MultivariateNormalDistribution.build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power" />

`MultivariateNormalDistribution.build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse" />

`MultivariateNormalDistribution.build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power" />

`MultivariateNormalDistribution.build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power" />

`MultivariateNormalDistribution.build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits" />

`MultivariateNormalDistribution.get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled" />

`MultivariateNormalDistribution.get_num_qubits_controlled()`

returns number of qubits controlled

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities" />

`static MultivariateNormalDistribution.pdf_to_probabilities(pdf, low, high, num_values)`

pdf to probabilities

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas" />

`MultivariateNormalDistribution.required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled" />

`MultivariateNormalDistribution.required_ancillas_controlled()`

returns required ancillas controlled

