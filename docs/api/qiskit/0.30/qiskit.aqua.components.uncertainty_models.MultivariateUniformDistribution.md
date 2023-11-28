# MultivariateUniformDistribution

<span id="undefined" />

`MultivariateUniformDistribution(num_qubits, low=None, high=None)`

Bases: `qiskit.aqua.components.uncertainty_models.multivariate_distribution.MultivariateDistribution`

The Multivariate Uniform Distribution.

Although this just results in a Hadamard gate on all involved qubits, the lower and upper bounds and the assignment of the qubits to the different dimensions is important if used in a particular application.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – List with the number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the lower bounds per dimension, set to 0 for each dimension if None
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – List with the upper bounds per dimension, set to 1 for each dimension if None

## Methods

|                                                                                                                                                                                                                                                                                                                                                                  |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build")                                                                                                     |                                                                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_power#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.pdf_to_probabilities")                                         | pdf to probabilities                                                  |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateUniformDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                  |

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
