# MultivariateNormalDistribution

<span id="undefined" />

`MultivariateNormalDistribution(num_qubits, low=None, high=None, mu=None, sigma=None)`

Bases: `qiskit.aqua.components.uncertainty_models.multivariate_distribution.MultivariateDistribution`

The Multivariate Normal Distribution.

Provides a discretized and truncated normal distribution loaded into a quantum state. Truncation bounds are given by lower and upper bound and discretization is specified by the number of qubits per dimension.

**Parameters**

*   **num\_qubits** (`Union`\[`List`\[`int`], `ndarray`]) – Number of qubits per dimension
*   **low** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Lower bounds per dimension
*   **high** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Upper bounds per dimension
*   **mu** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Expected values
*   **sigma** (`Union`\[`List`\[`float`], `ndarray`, `None`]) – Co-variance matrix

## Methods

|                                                                                                                                                                                                                                                                                                                                                               |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build")                                                                                                     |                                                                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.pdf_to_probabilities")                                         | pdf to probabilities                                                  |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.MultivariateNormalDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                  |

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
