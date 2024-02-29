---
title: MultivariateLogNormalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution
---

# qiskit.aqua.components.uncertainty\_models.MultivariateLogNormalDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution" />

`MultivariateLogNormalDistribution(num_qubits, low=None, high=None, mu=None, cov=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/uncertainty_models/multivariate_log_normal_distribution.py "view source code")

The Multivariate Log-Normal Distribution.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **cov** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.__init__" />

`__init__(num_qubits, low=None, high=None, mu=None, cov=None)`

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **cov** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

## Methods

|                                                                                                                                                                                                                                                                              |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.__init__ "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.__init__")(num\_qubits\[, low, high, mu, cov])                                               | **type num\_qubits**`Union`\[`List`\[`int`], `ndarray`]               |
| [`build`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build")(qc, q\[, q\_ancillas, params])                                                             |                                                                       |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.pdf_to_probabilities")(pdf, low, high, num\_values)                  | pdf to probabilities                                                  |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas")()                                                      | returns required ancillas                                             |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |

## Attributes

|                                                                                                                                                                                                                                |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`dimension`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.dimension")                                  | returns dimensions                  |
| [`high`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.high")                                                 | returns high                        |
| [`low`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.low")                                                    | returns low                         |
| [`num_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_qubits")                               | returns num qubits                  |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`num_values`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_values")                               | returns number of values            |
| [`probabilities`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities")                      | returns probabilities               |
| [`probabilities_vector`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities_vector") | returns probabilities vector        |
| [`values`](#qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.values")                                           | returns values                      |

### build

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build" />

`build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### dimension

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.dimension" />

`property dimension`

returns dimensions

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### high

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.high" />

`property high`

returns high

### low

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.low" />

`property low`

returns low

### num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_qubits" />

`property num_qubits`

returns num qubits

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### num\_values

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.num_values" />

`property num_values`

returns number of values

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.pdf_to_probabilities" />

`static pdf_to_probabilities(pdf, low, high, num_values)`

pdf to probabilities

### probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities" />

`property probabilities`

returns probabilities

### probabilities\_vector

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.probabilities_vector" />

`property probabilities_vector`

returns probabilities vector

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### values

<span id="qiskit.aqua.components.uncertainty_models.MultivariateLogNormalDistribution.values" />

`property values`

returns values

