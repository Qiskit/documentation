---
title: UnivariateVariationalDistribution
description: API reference for qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution
---

<span id="qiskit-aqua-components-uncertainty-models-univariatevariationaldistribution" />

# qiskit.aqua.components.uncertainty\_models.UnivariateVariationalDistribution

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution" />

`UnivariateVariationalDistribution(num_qubits, var_form, params, low=0, high=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/uncertainty_models/univariate_variational_distribution.py "view source code")

The Univariate Variational Distribution.

**Parameters**

*   **num\_qubits** (`int`) – Number of qubits
*   **var\_form** (`QuantumCircuit`) – Variational form
*   **params** (`Union`\[`List`\[`float`], `ndarray`]) – Parameters for variational form
*   **low** (`float`) – Lower bound
*   **high** (`float`) – Upper bound

### \_\_init\_\_

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.__init__" />

`__init__(num_qubits, var_form, params, low=0, high=1)`

**Parameters**

*   **num\_qubits** (`int`) – Number of qubits
*   **var\_form** (`QuantumCircuit`) – Variational form
*   **params** (`Union`\[`List`\[`float`], `ndarray`]) – Parameters for variational form
*   **low** (`float`) – Lower bound
*   **high** (`float`) – Upper bound

## Methods

|                                                                                                                                                                                                                                                                              |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.__init__ "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.__init__")(num\_qubits, var\_form, params\[, …])                                             | **type num\_qubits**`int`                                                                                                      |
| [`build`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build")(qc, q\[, q\_ancillas, params])                                                             |                                                                                                                                |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                                                                                |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                                                                                   |
| [`build_power`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                                                                           |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits")()                                                               | returns number of qubits                                                                                                       |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled")()                              | returns number of qubits controlled                                                                                            |
| [`pdf_to_probabilities`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities")(pdf, low, high, num\_values)                  | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas")()                                                      | returns required ancillas                                                                                                      |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled")()                     | returns required ancillas controlled                                                                                           |
| [`set_probabilities`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities")(quantum\_instance)                                     | Set Probabilities                                                                                                              |

## Attributes

|                                                                                                                                                                                                                       |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`high`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.high "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.high")                                        | returns high                        |
| [`low`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.low "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.low")                                           | returns low                         |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_target_qubits") | Returns the number of target qubits |
| [`num_values`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_values "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_values")                      | returns number of values            |
| [`probabilities`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.probabilities")             | returns probabilities               |
| [`values`](#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.values "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.values")                                  | returns values                      |

### build

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build" />

`build(qc, q, q_ancillas=None, params=None)`

### build\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

### build\_controlled\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_controlled\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_inverse

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

### build\_inverse\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

### build\_power

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

### get\_num\_qubits

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits" />

`get_num_qubits()`

returns number of qubits

### get\_num\_qubits\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled" />

`get_num_qubits_controlled()`

returns number of qubits controlled

### high

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.high" />

`property high`

returns high

### low

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.low" />

`property low`

returns low

### num\_target\_qubits

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_target_qubits" />

`property num_target_qubits`

Returns the number of target qubits

### num\_values

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.num_values" />

`property num_values`

returns number of values

### pdf\_to\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities" />

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

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.probabilities" />

`property probabilities`

returns probabilities

### required\_ancillas

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas" />

`required_ancillas()`

returns required ancillas

### required\_ancillas\_controlled

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled" />

`required_ancillas_controlled()`

returns required ancillas controlled

### set\_probabilities

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities" />

`set_probabilities(quantum_instance)`

Set Probabilities

**Parameters**

**quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – Quantum instance

### values

<span id="qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.values" />

`property values`

returns values

