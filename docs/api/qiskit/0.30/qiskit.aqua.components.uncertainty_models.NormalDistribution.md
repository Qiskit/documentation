# NormalDistribution

<span id="undefined" />

`NormalDistribution(num_target_qubits, mu=0, sigma=1, low=- 1, high=1)`

Bases: `qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution`

The Univariate Normal Distribution.

Normal distribution, truncated to lower and upper bound and discretized on a grid defined by the number of qubits.

**Parameters**

*   **num\_target\_qubits** (`int`) – Number of qubits it acts on, has a minimum value of 1.
*   **mu** (`float`) – Expected value of considered normal distribution
*   **sigma** (`float`) – standard deviation of considered normal distribution
*   **low** (`float`) – Lower bound, i.e., the value corresponding to |0…0> (assuming an equidistant grid)
*   **high** (`float`) – Upper bound, i.e., the value corresponding to |1…1> (assuming an equidistant grid)

## Methods

|                                                                                                                                                                                                                                                                                                                           |                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`build`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build#qiskit.aqua.components.uncertainty_models.NormalDistribution.build "qiskit.aqua.components.uncertainty_models.NormalDistribution.build")                                                                                                     |                                                                                                                                |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                                                                                |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                                                                                   |
| [`build_power`](qiskit.aqua.components.uncertainty_models.NormalDistribution.build_power#qiskit.aqua.components.uncertainty_models.NormalDistribution.build_power "qiskit.aqua.components.uncertainty_models.NormalDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                                                                           |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits")                                                                 | returns number of qubits                                                                                                       |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.NormalDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                                                                            |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.NormalDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.NormalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.NormalDistribution.pdf_to_probabilities")                                         | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas")                                                     | returns required ancillas                                                                                                      |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.NormalDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                                                                           |

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
