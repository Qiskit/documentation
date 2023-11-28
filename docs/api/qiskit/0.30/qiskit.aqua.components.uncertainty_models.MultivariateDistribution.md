# MultivariateDistribution

<span id="undefined" />

`MultivariateDistribution(num_qubits, probabilities=None, low=None, high=None)`

Bases: `qiskit.aqua.components.uncertainty_models.uncertainty_model.UncertaintyModel`, `abc.ABC`

This module contains the definition of a base class for multivariate distributions. (Interface for discrete bounded uncertainty models assuming an equidistant grid)

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Assigns qubits to dimensions
*   **probabilities** (`Optional`\[`Dict`]) – Map - maps index tuples to probabilities
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lowest value per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Highest value per dimension

## Methods

|                                                                                                                                                                                                                                                                                                                                             |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build")                                                                                                     |                                                                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.pdf_to_probabilities")                                         | pdf to probabilities                                                  |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                  |

## Attributes

<span id="undefined" />

### dimension

returns dimensions

<span id="undefined" />

### high

returns high

<span id="undefined" />

### low

returns low

<span id="undefined" />

### num\_qubits

returns num qubits

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

### probabilities\_vector

returns probabilities vector

<span id="undefined" />

### values

returns values
