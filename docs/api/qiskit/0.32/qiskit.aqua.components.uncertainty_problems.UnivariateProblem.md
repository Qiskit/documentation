# UnivariateProblem

<span id="undefined" />

`UnivariateProblem(uncertainty_model, univariate_objective, i_state=None, i_objective=None)`

Bases: `qiskit.aqua.components.uncertainty_problems.uncertainty_problem.UncertaintyProblem`

Univariate uncertainty problem.

Constructor.

**Parameters**

*   **uncertainty\_model** (`UnivariateDistribution`) – univariate uncertainty model to
*   **univariate\_objective** (`UnivariatePiecewiseLinearObjective`) – objective function based on uncertainty
*   **i\_state** (`Optional`\[`List`\[`int`]]) – indices of qubits representing uncertainty
*   **i\_objective** (`Optional`\[`int`]) – index of qubit representing the objective value in the amplitude

## Methods

|                                                                                                                                                                                                                                                                                                                              |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_power#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse_power#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_power#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_power "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas_controlled#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.required_ancillas_controlled")         | returns required ancillas controlled                                  |
| [`value_to_estimation`](qiskit.aqua.components.uncertainty_problems.UnivariateProblem.value_to_estimation#qiskit.aqua.components.uncertainty_problems.UnivariateProblem.value_to_estimation "qiskit.aqua.components.uncertainty_problems.UnivariateProblem.value_to_estimation")                                             | value to estimate                                                     |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
