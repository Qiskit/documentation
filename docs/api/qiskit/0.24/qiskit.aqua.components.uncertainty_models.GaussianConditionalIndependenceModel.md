---
title: GaussianConditionalIndependenceModel
description: API reference for qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel
---

<span id="qiskit-aqua-components-uncertainty-models-gaussianconditionalindependencemodel" />

# qiskit.aqua.components.uncertainty\_models.GaussianConditionalIndependenceModel

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel" />

`GaussianConditionalIndependenceModel(n_normal, normal_max_value, p_zeros, rhos, i_normal=None, i_ps=None)`

The Gaussian Conditional Independence Model for Credit Risk.

Reference: [https://arxiv.org/abs/1412.1183](https://arxiv.org/abs/1412.1183)

Dependency between individual risk variables and latent variable is approximated linearly.

**Parameters**

*   **n\_normal** (`int`) – Number of qubits to represent the latent normal random variable Z
*   **normal\_max\_value** (`float`) – Min/max value to truncate the latent normal random variable Z
*   **p\_zeros** (`Union`\[`List`\[`float`], `ndarray`]) – Standard default probabilities for each asset
*   **rhos** (`Union`\[`List`\[`float`], `ndarray`]) – Sensitivities of default probability of assets with respect to latent variable Z
*   **i\_normal** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent normal variable
*   **i\_ps** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent asset defaults

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.__init__" />

`__init__(n_normal, normal_max_value, p_zeros, rhos, i_normal=None, i_ps=None)`

**Parameters**

*   **n\_normal** (`int`) – Number of qubits to represent the latent normal random variable Z
*   **normal\_max\_value** (`float`) – Min/max value to truncate the latent normal random variable Z
*   **p\_zeros** (`Union`\[`List`\[`float`], `ndarray`]) – Standard default probabilities for each asset
*   **rhos** (`Union`\[`List`\[`float`], `ndarray`]) – Sensitivities of default probability of assets with respect to latent variable Z
*   **i\_normal** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent normal variable
*   **i\_ps** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent asset defaults

## Methods

## Attributes

### build

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build" />

`build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### dimension

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.dimension" />

`property dimension`

returns dimensions

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### high

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.high" />

`property high`

returns high

### low

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.low" />

`property low`

returns low

### num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_qubits" />

`property num_qubits`

returns num qubits

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### num\_values

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_values" />

`property num_values`

returns number of values

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities" />

`static pdf_to_probabilities(pdf, low, high, num_values)`

pdf to probabilities

### probabilities

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities" />

`property probabilities`

returns probabilities

### probabilities\_vector

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities_vector" />

`property probabilities_vector`

returns probabilities vector

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### values

<span id="qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.values" />

`property values`

returns values

