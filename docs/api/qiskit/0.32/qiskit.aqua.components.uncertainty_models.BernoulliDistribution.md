# BernoulliDistribution

<span id="undefined" />

`BernoulliDistribution(p, low=0, high=1)`

Bases: `qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution`

The Univariate Bernoulli Distribution.

Distribution with only two values (low, high) and the corresponding probabilities represented by a single qubit.

**Parameters**

*   **p** (`float`) – Probability
*   **low** (`float`) – Low value
*   **high** (`float`) – High value

## Methods

|                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`build`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build")                                                                                                     |                                                                                                                                |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                                                                                |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                                                                                   |
| [`build_power`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_power#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_power "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                                                                           |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits")                                                                 | returns number of qubits                                                                                                       |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                                                                            |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.pdf_to_probabilities")                                         | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas")                                                     | returns required ancillas                                                                                                      |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.BernoulliDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                                                                           |

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

### p

<span id="undefined" />

### probabilities

returns probabilities

<span id="undefined" />

### values

returns values
