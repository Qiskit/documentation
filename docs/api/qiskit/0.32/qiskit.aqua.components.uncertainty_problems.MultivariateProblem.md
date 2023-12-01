# MultivariateProblem

<span id="undefined" />

`MultivariateProblem(uncertainty_model, aggregation_function, univariate_objective, conditions=None)`

Bases: `qiskit.aqua.components.uncertainty_problems.uncertainty_problem.UncertaintyProblem`

Multivariate Uncertainty Problem.

Constructor.

**Parameters**

*   **uncertainty\_model** (`MultivariateDistribution`) – multivariate uncertainty model
*   **aggregation\_function** (`CircuitFactory`) – aggregation function that maps the multiple dimension to an aggregated value
*   **univariate\_objective** (`UnivariatePiecewiseLinearObjective`) – objective function applied to the aggregated value
*   **conditions** (`Union`\[`List`\[`Tuple`\[`int`, `CircuitFactory`]], `ndarray`, `None`]) – list of pairs (int, CircuitFactory) = target dimension of uncertainty model and condition to be satisfied to apply the aggregation

## Methods

|                                                                                                                                                                                                                                                                                                                                    |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_power#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse_power#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_power#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_power "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas_controlled#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.required_ancillas_controlled")         | returns required ancillas controlled                                  |
| [`value_to_estimation`](qiskit.aqua.components.uncertainty_problems.MultivariateProblem.value_to_estimation#qiskit.aqua.components.uncertainty_problems.MultivariateProblem.value_to_estimation "qiskit.aqua.components.uncertainty_problems.MultivariateProblem.value_to_estimation")                                             | value to estimate                                                     |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
