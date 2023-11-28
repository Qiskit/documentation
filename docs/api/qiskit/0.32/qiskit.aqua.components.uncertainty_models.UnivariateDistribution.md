# UnivariateDistribution

<span id="undefined" />

`UnivariateDistribution(num_target_qubits, probabilities=None, low=0, high=1)`

Bases: `qiskit.aqua.components.uncertainty_models.uncertainty_model.UncertaintyModel`, `abc.ABC`

This module contains the definition of a base class for univariate distributions. (Interface for discrete bounded uncertainty models assuming an equidistant grid)

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a min. value of 1.
*   **probabilities** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Probabilities for different states
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – num qubits and length of probabilities vector do not match

## Methods

|                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`build`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build")                                                                                                     |                                                                                                                                |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                                                                                |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                                                                                   |
| [`build_power`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_power#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_power "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                                                                           |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits")                                                                 | returns number of qubits                                                                                                       |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                                                                            |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.pdf_to_probabilities")                                         | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas")                                                     | returns required ancillas                                                                                                      |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UnivariateDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                                                                           |

## Attributes

<span id="undefined" />

### high

returns high

<span id="undefined" />

### low

returns low

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits

<span id="undefined" />

### num\_values

returns number of values

<span id="undefined" />

### probabilities

returns probabilities

<span id="undefined" />

### values

returns values
