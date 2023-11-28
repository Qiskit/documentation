# UnivariatePiecewiseLinearObjective

<span id="undefined" />

`UnivariatePiecewiseLinearObjective(num_state_qubits, min_state_value, max_state_value, breakpoints, slopes, offsets, f_min, f_max, c_approx, i_state=None, i_objective=None)`

Bases: `qiskit.aqua.utils.circuit_factory.CircuitFactory`

Univariate Piecewise Linear Objective Function.

This objective function applies controlled Y-rotation to the target qubit, where the control qubits represent integer value, and rotation approximates a piecewise linear function of the amplitude f:

$$
|x\rangle |0\rangle \mapsto |x\rangle (\sqrt(1 - f(x))|0\rangle + sqrt(f(x))|1\rangle )
$$

**Parameters**

*   **num\_state\_qubits** (`int`) – number of qubits to represent the state
*   **min\_state\_value** (`float`) – lower bound of values to be represented by state qubits
*   **max\_state\_value** (`float`) – upper bound of values to be represented by state qubits
*   **breakpoints** (`Union`\[`List`\[`float`], `ndarray`]) – breakpoints of piecewise linear function
*   **slopes** (`Union`\[`List`\[`float`], `ndarray`]) – slopes of linear segments
*   **offsets** (`Union`\[`List`\[`float`], `ndarray`]) – offset of linear segments
*   **f\_min** (`float`) – minimal value of resulting function (required for normalization of amplitude)
*   **f\_max** (`float`) – maximal value of resulting function (required for normalization of amplitude)
*   **c\_approx** (`float`) – approximating factor (linear segments are approximated by contracting rotation around pi/4, where sin^2() is locally linear)
*   **i\_state** (`Optional`\[`List`\[`int`]]) – indices of qubits that represent the state
*   **i\_objective** (`Optional`\[`int`]) – index of target qubit to apply the rotation to

## Methods

|                                                                                                                                                                                                                                                                                                                                                                                 |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build")                                                                                                     |                                                                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_power#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse_power#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_power#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_power "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas")                                                     | requires ancillas                                                     |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas_controlled#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.required_ancillas_controlled")         | returns required ancillas controlled                                  |
| [`value_to_estimation`](qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.value_to_estimation#qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.value_to_estimation "qiskit.aqua.components.uncertainty_problems.UnivariatePiecewiseLinearObjective.value_to_estimation")                                             | value to estimation                                                   |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
