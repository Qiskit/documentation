# CircuitFactory

<span id="undefined" />

`CircuitFactory(num_target_qubits)`

Bases: `abc.ABC`

Base class for CircuitFactories

## Methods

|                                                                                                                                                                                                                                       |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.utils.CircuitFactory.build#qiskit.aqua.utils.CircuitFactory.build "qiskit.aqua.utils.CircuitFactory.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.aqua.utils.CircuitFactory.build_controlled#qiskit.aqua.utils.CircuitFactory.build_controlled "qiskit.aqua.utils.CircuitFactory.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.utils.CircuitFactory.build_controlled_inverse#qiskit.aqua.utils.CircuitFactory.build_controlled_inverse "qiskit.aqua.utils.CircuitFactory.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.utils.CircuitFactory.build_controlled_inverse_power#qiskit.aqua.utils.CircuitFactory.build_controlled_inverse_power "qiskit.aqua.utils.CircuitFactory.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.utils.CircuitFactory.build_controlled_power#qiskit.aqua.utils.CircuitFactory.build_controlled_power "qiskit.aqua.utils.CircuitFactory.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.utils.CircuitFactory.build_inverse#qiskit.aqua.utils.CircuitFactory.build_inverse "qiskit.aqua.utils.CircuitFactory.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.utils.CircuitFactory.build_inverse_power#qiskit.aqua.utils.CircuitFactory.build_inverse_power "qiskit.aqua.utils.CircuitFactory.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.utils.CircuitFactory.build_power#qiskit.aqua.utils.CircuitFactory.build_power "qiskit.aqua.utils.CircuitFactory.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.utils.CircuitFactory.get_num_qubits#qiskit.aqua.utils.CircuitFactory.get_num_qubits "qiskit.aqua.utils.CircuitFactory.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.utils.CircuitFactory.get_num_qubits_controlled#qiskit.aqua.utils.CircuitFactory.get_num_qubits_controlled "qiskit.aqua.utils.CircuitFactory.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`required_ancillas`](qiskit.aqua.utils.CircuitFactory.required_ancillas#qiskit.aqua.utils.CircuitFactory.required_ancillas "qiskit.aqua.utils.CircuitFactory.required_ancillas")                                                     | returns required ancillas                                             |
| [`required_ancillas_controlled`](qiskit.aqua.utils.CircuitFactory.required_ancillas_controlled#qiskit.aqua.utils.CircuitFactory.required_ancillas_controlled "qiskit.aqua.utils.CircuitFactory.required_ancillas_controlled")         | returns required ancillas controlled                                  |

## Attributes

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits
