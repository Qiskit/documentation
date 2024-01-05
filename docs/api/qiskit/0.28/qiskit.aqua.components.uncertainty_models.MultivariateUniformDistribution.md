---
title: MultivariateUniformDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution
---

# qiskit.aqua.components.uncertainty\_models.MultivariateUniformDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution" />

`MultivariateUniformDistribution(num_qubits, low=None, high=None)`

The Multivariate Uniform Distribution.

Although this just results in a Hadamard gate on all involved qubits, the lower and upper bounds and the assignment of the qubits to the different dimensions is important if used in a particular application.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – List with the number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the lower bounds per dimension, set to 0 for each dimension if None
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the upper bounds per dimension, set to 1 for each dimension if None

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.__init__" />

`__init__(num_qubits, low=None, high=None)`

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – List with the number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the lower bounds per dimension, set to 0 for each dimension if None
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the upper bounds per dimension, set to 1 for each dimension if None

## Methods

## Attributes

### build

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build" />

`build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### dimension

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.dimension" />

`property dimension`

returns dimensions

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### high

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.high" />

`property high`

returns high

### low

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.low" />

`property low`

returns low

### num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_qubits" />

`property num_qubits`

returns num qubits

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### num\_values

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.num_values" />

`property num_values`

returns number of values

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.pdf_to_probabilities" />

`static pdf_to_probabilities(pdf, low, high, num_values)`

pdf to probabilities

### probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.probabilities" />

`property probabilities`

returns probabilities

### probabilities\_vector

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.probabilities_vector" />

`property probabilities_vector`

returns probabilities vector

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### values

<span id="qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.values" />

`property values`

returns values

