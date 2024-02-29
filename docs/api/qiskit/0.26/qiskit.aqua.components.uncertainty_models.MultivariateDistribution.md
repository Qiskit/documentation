---
title: MultivariateDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.MultivariateDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.MultivariateDistribution
---

# qiskit.aqua.components.uncertainty\_models.MultivariateDistribution

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution" />

`MultivariateDistribution(num_qubits, probabilities=None, low=None, high=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/uncertainty_models/multivariate_distribution.py "view source code")

This module contains the definition of a base class for multivariate distributions. (Interface for discrete bounded uncertainty models assuming an equidistant grid)

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Assigns qubits to dimensions
*   **probabilities** (`Optional`\[`Dict`]) – Map - maps index tuples to probabilities
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lowest value per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Highest value per dimension

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.__init__" />

`__init__(num_qubits, probabilities=None, low=None, high=None)`

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Assigns qubits to dimensions
*   **probabilities** (`Optional`\[`Dict`]) – Map - maps index tuples to probabilities
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lowest value per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Highest value per dimension

## Methods

|                                                                                                                                                                                                                                                            |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.__init__ "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.__init__")(num\_qubits\[, probabilities, low, high])                                         | **type num\_qubits**`Union`\[`List`\[`int`], `ndarray`]               |
| [`build`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build")(qc, q\[, q\_ancillas, params])                                                             |                                                                       |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities")(pdf, low, high, num\_values)                  | pdf to probabilities                                                  |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas")()                                                      | returns required ancillas                                             |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |

## Attributes

|                                                                                                                                                                                                              |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`dimension`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.dimension")                                  | returns dimensions                  |
| [`high`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.high")                                                 | returns high                        |
| [`low`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.low")                                                    | returns low                         |
| [`num_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_qubits")                               | returns num qubits                  |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`num_values`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_values")                               | returns number of values            |
| [`probabilities`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities")                      | returns probabilities               |
| [`probabilities_vector`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities_vector") | returns probabilities vector        |
| [`values`](#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.values")                                           | returns values                      |

### build

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build" />

`build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### dimension

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.dimension" />

`property dimension`

returns dimensions

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### high

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.high" />

`property high`

returns high

### low

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.low" />

`property low`

returns low

### num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_qubits" />

`property num_qubits`

returns num qubits

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### num\_values

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.num_values" />

`property num_values`

returns number of values

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities" />

`static pdf_to_probabilities(pdf, low, high, num_values)`

pdf to probabilities

### probabilities

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities" />

`property probabilities`

returns probabilities

### probabilities\_vector

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.probabilities_vector" />

`property probabilities_vector`

returns probabilities vector

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### values

<span id="qiskit.aqua.components.uncertainty_models.MultivariateDistribution.values" />

`property values`

returns values

