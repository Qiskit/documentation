# FixedIncomeExpectedValue

<span id="undefined" />

`FixedIncomeExpectedValue(uncertainty_model, A, b, cash_flow, c_approx, i_state=None, i_objective=None)`

Bases: `qiskit.aqua.components.uncertainty_problems.uncertainty_problem.UncertaintyProblem`

The Fixed Income Expected Value.

Evaluates a fixed income asset with uncertain interest rates.

Constructor.

**Parameters**

*   **uncertainty\_model** (`UncertaintyModel`) – multivariate distribution
*   **A** (`ndarray`) – PCA matrix for delta\_r (changes in interest rates)
*   **b** (`List`\[`int`]) – offset for interest rates (= initial interest rates)
*   **cash\_flow** (`List`\[`float`]) – cash flow time series
*   **c\_approx** (`float`) – approximation scaling factor
*   **i\_state** (`Union`\[`List`\[`int`], `ndarray`, `None`]) – indices of qubits that represent the state
*   **i\_objective** (`Optional`\[`int`]) – index of target qubit to apply the rotation to

## Methods

|                                                                                                                                                                                                                                                                                                                                                            |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse_power#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_power#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse_power#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_power#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_power "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits_controlled#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits_controlled "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas_controlled#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas_controlled "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.required_ancillas_controlled")         | returns required ancillas controlled                                  |
| [`value_to_estimation`](qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.value_to_estimation#qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.value_to_estimation "qiskit.finance.components.uncertainty_problems.FixedIncomeExpectedValue.value_to_estimation")                                             | value to estimate                                                     |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
