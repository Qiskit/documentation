# UniformDistribution

<span id="undefined" />

`UniformDistribution(num_target_qubits, low=0, high=1)`

Bases: `qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution`

The Univariate Uniform Distribution.

Uniform distribution is defined by the number of qubits that should be used to represent the distribution, as well as the lower bound and upper bound of the considered interval.

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a minimum value of 1.
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

## Methods

|                                                                                                                                                                                                                                                                                                                              |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`build`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build#qiskit.aqua.components.uncertainty_models.UniformDistribution.build "qiskit.aqua.components.uncertainty_models.UniformDistribution.build")                                                                                                     |                                                                                                                                |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                                                                                |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                                                                                   |
| [`build_power`](qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power#qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power "qiskit.aqua.components.uncertainty_models.UniformDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                                                                           |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits")                                                                 | returns number of qubits                                                                                                       |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                                                                            |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UniformDistribution.pdf_to_probabilities")                                         | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas")                                                     | returns required ancillas                                                                                                      |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UniformDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                                                                           |

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
