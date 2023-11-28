<span id="qiskit-aqua-components-uncertainty-models-gaussianconditionalindependencemodel" />

# qiskit.aqua.components.uncertainty\_models.GaussianConditionalIndependenceModel

<span id="undefined" />

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

<span id="undefined" />

`__init__(n_normal, normal_max_value, p_zeros, rhos, i_normal=None, i_ps=None)`

**Parameters**

*   **n\_normal** (`int`) – Number of qubits to represent the latent normal random variable Z
*   **normal\_max\_value** (`float`) – Min/max value to truncate the latent normal random variable Z
*   **p\_zeros** (`Union`\[`List`\[`float`], `ndarray`]) – Standard default probabilities for each asset
*   **rhos** (`Union`\[`List`\[`float`], `ndarray`]) – Sensitivities of default probability of assets with respect to latent variable Z
*   **i\_normal** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent normal variable
*   **i\_ps** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Indices of qubits to represent asset defaults

## Methods

|                                                                                                                                                                                                                                                                                    |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.__init__ "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.__init__")(n\_normal, normal\_max\_value, …\[, …])                                           | **type n\_normal**`int`                                               |
| [`build`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build")(qc, q\[, q\_ancillas, params])                                                             |                                                                       |
| [`build_controlled`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled")(qc, q, q\_control\[, …])                                  | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse")(qc, q, q\_control\[, …])          | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_inverse_power")(qc, q, …\[, …]) | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_controlled_power")(qc, q, q\_control, power)               | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse")(qc, q\[, q\_ancillas])                                             | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_inverse_power")(qc, q, power\[, q\_ancillas])                    | Adds inverse power of corresponding circuit.                          |
| [`build_power`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.build_power")(qc, q, power\[, q\_ancillas])                                            | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits")()                                                               | returns number of qubits                                              |
| [`get_num_qubits_controlled`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.get_num_qubits_controlled")()                              | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.pdf_to_probabilities")(pdf, low, high, num\_values)                  | pdf to probabilities                                                  |
| [`required_ancillas`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas")()                                                      | returns required ancillas                                             |
| [`required_ancillas_controlled`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.required_ancillas_controlled")()                     | returns required ancillas controlled                                  |

## Attributes

|                                                                                                                                                                                                                                      |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`dimension`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.dimension "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.dimension")                                  | returns dimensions                  |
| [`high`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.high "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.high")                                                 | returns high                        |
| [`low`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.low "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.low")                                                    | returns low                         |
| [`num_qubits`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_qubits "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_qubits")                               | returns num qubits                  |
| [`num_target_qubits`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_target_qubits "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_target_qubits")          | Returns the number of target qubits |
| [`num_values`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_values "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.num_values")                               | returns number of values            |
| [`probabilities`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities")                      | returns probabilities               |
| [`probabilities_vector`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities_vector "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.probabilities_vector") | returns probabilities vector        |
| [`values`](#qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.values "qiskit.aqua.components.uncertainty_models.GaussianConditionalIndependenceModel.values")                                           | returns values                      |

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
