---
title: UniformDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.UniformDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.UniformDistribution
---

# qiskit.aqua.components.uncertainty\_models.UniformDistribution

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution" />

`UniformDistribution(num_target_qubits, low=0, high=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/uncertainty_models/uniform_distribution.py "view source code")

The Univariate Uniform Distribution.

Uniform distribution is defined by the number of qubits that should be used to represent the distribution, as well as the lower bound and upper bound of the considered interval.

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a minimum value of 1.
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.__init__" />

`__init__(num_target_qubits, low=0, high=1)`

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a minimum value of 1.
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

## Methods

|                                                                                                                                                                                                                                                  |                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.__init__ "qiskit.aqua.components.uncertainty_models.UniformDistribution.__init__")(num\_target\_qubits\[, low, high])                                                | **type num\_target\_qubits**`int`                                                                                              |
| [`build`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build "qiskit.aqua.components.uncertainty_models.UniformDistribution.build")(qc, q\[, q\_ancillas, params])                                                             |                                                                                                                                |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                                                                                |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                                                                                   |
| [`build_power`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                                                                           |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits")()                                                               | returns number of qubits                                                                                                       |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled")()                              | returns number of qubits controlled                                                                                            |
| [`pdf_to_probabilities`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities")(pdf, low, high, num\_values)                  | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas")()                                                      | returns required ancillas                                                                                                      |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled")()                     | returns required ancillas controlled                                                                                           |

## Attributes

|                                                                                                                                                                                           |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`high`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.high "qiskit.aqua.components.uncertainty_models.UniformDistribution.high")                                        | returns high                        |
| [`low`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.low "qiskit.aqua.components.uncertainty_models.UniformDistribution.low")                                           | returns low                         |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.UniformDistribution.num_target_qubits") | Returns the number of target qubits |
| [`num_values`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.num_values "qiskit.aqua.components.uncertainty_models.UniformDistribution.num_values")                      | returns number of values            |
| [`probabilities`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.probabilities "qiskit.aqua.components.uncertainty_models.UniformDistribution.probabilities")             | returns probabilities               |
| [`values`](#qiskit.aqua.components.uncertainty_models.UniformDistribution.values "qiskit.aqua.components.uncertainty_models.UniformDistribution.values")                                  | returns values                      |

### build

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build" />

`build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### high

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.high" />

`property high`

returns high

### low

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.low" />

`property low`

returns low

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### num\_values

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.num_values" />

`property num_values`

returns number of values

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities" />

`static pdf_to_probabilities(pdf, low, high, num_values)`

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

### probabilities

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.probabilities" />

`property probabilities`

returns probabilities

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### values

<span id="qiskit.aqua.components.uncertainty_models.UniformDistribution.values" />

`property values`

returns values

