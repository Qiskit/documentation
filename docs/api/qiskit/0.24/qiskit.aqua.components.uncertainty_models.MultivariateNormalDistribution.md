<span id="qiskit-aqua-components-uncertainty-models-multivariatenormaldistribution" />

# qiskit.aqua.components.uncertainty\_models.MultivariateNormalDistribution

<span id="undefined" />

`MultivariateNormalDistribution(num_qubits, low=None, high=None, mu=None, sigma=None)`

The Multivariate Normal Distribution.

Provides a discretized and truncated normal distribution loaded into a quantum state. Truncation bounds are given by lower and upper bound and discretization is specified by the number of qubits per dimension.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **sigma** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

<span id="undefined" />

`__init__(num_qubits, low=None, high=None, mu=None, sigma=None)`

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **sigma** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

## Methods

|                                                                                                                                                                                                                                                                        |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.__init__ "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.__init__")(num\_qubits\[, low, high, mu, sigma])                                             | **type num\_qubits**`Union`\[`List`\[`int`], `ndarray`]               |
| [`build`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build")(qc, q\[, q\_ancillas, params])                                                             |                                                                       |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities")(pdf, low, high, num\_values)                  | pdf to probabilities                                                  |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas")()                                                      | returns required ancillas                                             |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |

## Attributes

|                                                                                                                                                                                                                          |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`dimension`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.dimension "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.dimension")                                  | returns dimensions                  |
| [`high`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.high "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.high")                                                 | returns high                        |
| [`low`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.low "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.low")                                                    | returns low                         |
| [`num_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_qubits")                               | returns num qubits                  |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_target_qubits "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_target_qubits")          | Returns the number of target qubits |
| [`num_values`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_values "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.num_values")                               | returns number of values            |
| [`probabilities`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities")                      | returns probabilities               |
| [`probabilities_vector`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities_vector "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.probabilities_vector") | returns probabilities vector        |
| [`values`](#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.values "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.values")                                           | returns values                      |

<span id="undefined" />

`build(qc, q, q_ancillas=None, params=None)`

<span id="undefined" />

`build_controlled(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds corresponding controlled sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

<span id="undefined" />

`build_controlled_inverse(qc, q, q_control, q_ancillas=None, use_basis_gates=True)`

Adds controlled inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_control** ([*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – control qubit
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)
*   **use\_basis\_gates** (*bool*) – use basis gates for expansion of controlled circuit

<span id="undefined" />

`build_controlled_inverse_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled, inverse, power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_controlled_power(qc, q, q_control, power, q_ancillas=None, use_basis_gates=True)`

Adds controlled power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_inverse(qc, q, q_ancillas=None)`

Adds inverse of corresponding sub-circuit to given circuit

**Parameters**

*   **qc** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – quantum circuit
*   **q** (*list*) – list of qubits (has to be same length as self.\_num\_qubits)
*   **q\_ancillas** (*list*) – list of ancilla qubits (or None if none needed)

<span id="undefined" />

`build_inverse_power(qc, q, power, q_ancillas=None)`

Adds inverse power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`build_power(qc, q, power, q_ancillas=None)`

Adds power of corresponding circuit. May be overridden if a more efficient implementation is possible

<span id="undefined" />

`property dimension`

returns dimensions

<span id="undefined" />

`get_num_qubits()`

returns number of qubits

<span id="undefined" />

`get_num_qubits_controlled()`

returns number of qubits controlled

<span id="undefined" />

`property high`

returns high

<span id="undefined" />

`property low`

returns low

<span id="undefined" />

`property num_qubits`

returns num qubits

<span id="undefined" />

`property num_target_qubits`

Returns the number of target qubits

<span id="undefined" />

`property num_values`

returns number of values

<span id="undefined" />

`static pdf_to_probabilities(pdf, low, high, num_values)`

pdf to probabilities

<span id="undefined" />

`property probabilities`

returns probabilities

<span id="undefined" />

`property probabilities_vector`

returns probabilities vector

<span id="undefined" />

`required_ancillas()`

returns required ancillas

<span id="undefined" />

`required_ancillas_controlled()`

returns required ancillas controlled

<span id="undefined" />

`property values`

returns values
