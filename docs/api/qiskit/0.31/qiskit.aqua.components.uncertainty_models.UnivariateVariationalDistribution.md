# UnivariateVariationalDistribution

<span id="undefined" />

`UnivariateVariationalDistribution(num_qubits, var_form, params, low=0, high=1)`

Bases: `qiskit.aqua.components.uncertainty_models.univariate_distribution.UnivariateDistribution`

The Univariate Variational Distribution.

**Parameters**

*   **num\_qubits** (`int`) – Number of qubits
*   **var\_form** (`QuantumCircuit`) – Variational form
*   **params** (`Union`\[`List`\[`float`], `ndarray`]) – Parameters for variational form
*   **low** (`float`) – Lower bound
*   **high** (`float`) – Upper bound

## Methods

|                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`build`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build")                                                                                                     |                                                                                                                                |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit                                                                     |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit                                                          |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.                                                                      |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                                                                                |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit                                                                     |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                                                                                   |
| [`build_power`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.build_power")                                                                             | Adds power of corresponding circuit.                                                                                           |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits")                                                                 | returns number of qubits                                                                                                       |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.get_num_qubits_controlled")                     | returns number of qubits controlled                                                                                            |
| [`pdf_to_probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.pdf_to_probabilities")                                         | Takes a probability density function (pdf), and returns a truncated and discretized array of probabilities corresponding to it |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas")                                                     | returns required ancillas                                                                                                      |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.required_ancillas_controlled")         | returns required ancillas controlled                                                                                           |
| [`set_probabilities`](qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities#qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities "qiskit.aqua.components.uncertainty_models.UnivariateVariationalDistribution.set_probabilities")                                                     | Set Probabilities                                                                                                              |

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
