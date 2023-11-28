# UncertaintyModel

<span id="undefined" />

`UncertaintyModel(num_target_qubits)`

Bases: `qiskit.aqua.utils.circuit_factory.CircuitFactory`, `abc.ABC`

The abstract Uncertainty Model

## Methods

|                                                                                                                                                                                                                                                                                                                     |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse_power#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_power#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse_power#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_power#qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits#qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits "qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits_controlled#qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas#qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas "qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas_controlled#qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas_controlled")         | returns required ancillas controlled                                  |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
