# UncertaintyProblem

<span id="undefined" />

`UncertaintyProblem(num_qubits)`

Bases: `qiskit.aqua.utils.circuit_factory.CircuitFactory`, `abc.ABC`

The abstract Uncertainty Problem component.

## Methods

|                                                                                                                                                                                                                                                                                                                                 |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_power#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse_power#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_power#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas_controlled#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas_controlled")         | returns required ancillas controlled                                  |
| [`value_to_estimation`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.value_to_estimation#qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.value_to_estimation "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.value_to_estimation")                                             | value to estimate                                                     |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
