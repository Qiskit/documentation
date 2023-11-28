# WeightedSumOperator

<span id="undefined" />

`WeightedSumOperator(num_state_qubits, weights, i_state=None, i_sum=None)`

Bases: `qiskit.aqua.utils.circuit_factory.CircuitFactory`

Adds q^T \* w to separate register for non-negative integer weights w.

Computes the weighted sum controlled by state qubits

**Parameters**

*   **num\_state\_qubits** (*int*) – number of state qubits
*   **weights** (*Union(list, numpy.ndarray)*) – weights per state qubits
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of state qubits, set to range(num\_state\_qubits) if None
*   **i\_sum** (*Optional(int)*) – indices of target qubits (that represent the resulting sum), set to range(num\_state\_qubits, num\_state\_qubits + req\_num\_sum\_qubits) if None

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Methods

|                                                                                                                                                                                                                                                               |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`build`](qiskit.aqua.circuits.WeightedSumOperator.build#qiskit.aqua.circuits.WeightedSumOperator.build "qiskit.aqua.circuits.WeightedSumOperator.build")                                                                                                     | Adds corresponding sub-circuit to given circuit                       |
| [`build_controlled`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled#qiskit.aqua.circuits.WeightedSumOperator.build_controlled "qiskit.aqua.circuits.WeightedSumOperator.build_controlled")                                                         | Adds corresponding controlled sub-circuit to given circuit            |
| [`build_controlled_inverse`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse#qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse")                         | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`build_controlled_inverse_power`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power#qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power") | Adds controlled, inverse, power of corresponding circuit.             |
| [`build_controlled_power`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power#qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power")                                 | Adds controlled power of corresponding circuit.                       |
| [`build_inverse`](qiskit.aqua.circuits.WeightedSumOperator.build_inverse#qiskit.aqua.circuits.WeightedSumOperator.build_inverse "qiskit.aqua.circuits.WeightedSumOperator.build_inverse")                                                                     | Adds inverse of corresponding sub-circuit to given circuit            |
| [`build_inverse_power`](qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power#qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power "qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power")                                             | Adds inverse power of corresponding circuit.                          |
| [`build_power`](qiskit.aqua.circuits.WeightedSumOperator.build_power#qiskit.aqua.circuits.WeightedSumOperator.build_power "qiskit.aqua.circuits.WeightedSumOperator.build_power")                                                                             | Adds power of corresponding circuit.                                  |
| [`get_num_qubits`](qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits#qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits "qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits")                                                                 | returns number of qubits                                              |
| [`get_num_qubits_controlled`](qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled#qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled "qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled")                     | returns number of qubits controlled                                   |
| [`get_required_sum_qubits`](qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits#qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits "qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits")                             | get required sum qubits                                               |
| [`required_ancillas`](qiskit.aqua.circuits.WeightedSumOperator.required_ancillas#qiskit.aqua.circuits.WeightedSumOperator.required_ancillas "qiskit.aqua.circuits.WeightedSumOperator.required_ancillas")                                                     | required ancillas                                                     |
| [`required_ancillas_controlled`](qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled#qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled "qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled")         | returns required ancillas controlled                                  |

## Attributes

<span id="undefined" />

### num\_carry\_qubits

returns num carry qubits

<span id="undefined" />

### num\_state\_qubits

returns num state qubits

<span id="undefined" />

### num\_sum\_qubits

returns num sum qubits

<span id="undefined" />

### num\_target\_qubits

Returns the number of target qubits

<span id="undefined" />

### weights

returns weights
