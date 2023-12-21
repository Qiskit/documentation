---
title: WeightedSumOperator
description: API reference for qiskit.aqua.circuits.WeightedSumOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.WeightedSumOperator
---

# WeightedSumOperator

<span id="qiskit.aqua.circuits.WeightedSumOperator" />

`WeightedSumOperator(num_state_qubits, weights, i_state=None, i_sum=None)`

Adds q^T \* w to separate register for non-negative integer weights w.

Computes the weighted sum controlled by state qubits

**Parameters**

*   **num\_state\_qubits** (*int*) – number of state qubits
*   **weights** (*Union(list, numpy.ndarray)*) – weights per state qubits
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of state qubits, set to range(num\_state\_qubits) if None
*   **i\_sum** (*Optional(int)*) – indices of target qubits (that represent the resulting sum), set to range(num\_state\_qubits, num\_state\_qubits + req\_num\_sum\_qubits) if None

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input

## Attributes

|                                                                                                                                                                    |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`WeightedSumOperator.num_carry_qubits`](qiskit.aqua.circuits.WeightedSumOperator.num_carry_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_carry_qubits")    | returns num carry qubits            |
| [`WeightedSumOperator.num_state_qubits`](qiskit.aqua.circuits.WeightedSumOperator.num_state_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_state_qubits")    | returns num state qubits            |
| [`WeightedSumOperator.num_sum_qubits`](qiskit.aqua.circuits.WeightedSumOperator.num_sum_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_sum_qubits")          | returns num sum qubits              |
| [`WeightedSumOperator.num_target_qubits`](qiskit.aqua.circuits.WeightedSumOperator.num_target_qubits "qiskit.aqua.circuits.WeightedSumOperator.num_target_qubits") | Returns the number of target qubits |
| [`WeightedSumOperator.weights`](qiskit.aqua.circuits.WeightedSumOperator.weights "qiskit.aqua.circuits.WeightedSumOperator.weights")                               | returns weights                     |

## Methods

|                                                                                                                                                                                                                  |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`WeightedSumOperator.build`](qiskit.aqua.circuits.WeightedSumOperator.build "qiskit.aqua.circuits.WeightedSumOperator.build")(qc, q\[, …])                                                                      | Adds corresponding sub-circuit to given circuit                       |
| [`WeightedSumOperator.build_controlled`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled "qiskit.aqua.circuits.WeightedSumOperator.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`WeightedSumOperator.build_controlled_inverse`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`WeightedSumOperator.build_controlled_inverse_power`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`WeightedSumOperator.build_controlled_power`](qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power "qiskit.aqua.circuits.WeightedSumOperator.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`WeightedSumOperator.build_inverse`](qiskit.aqua.circuits.WeightedSumOperator.build_inverse "qiskit.aqua.circuits.WeightedSumOperator.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`WeightedSumOperator.build_inverse_power`](qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power "qiskit.aqua.circuits.WeightedSumOperator.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`WeightedSumOperator.build_power`](qiskit.aqua.circuits.WeightedSumOperator.build_power "qiskit.aqua.circuits.WeightedSumOperator.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`WeightedSumOperator.get_num_qubits`](qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits "qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`WeightedSumOperator.get_num_qubits_controlled`](qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled "qiskit.aqua.circuits.WeightedSumOperator.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`WeightedSumOperator.get_required_sum_qubits`](qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits "qiskit.aqua.circuits.WeightedSumOperator.get_required_sum_qubits")(weights)                    | get required sum qubits                                               |
| [`WeightedSumOperator.required_ancillas`](qiskit.aqua.circuits.WeightedSumOperator.required_ancillas "qiskit.aqua.circuits.WeightedSumOperator.required_ancillas")()                                             | required ancillas                                                     |
| [`WeightedSumOperator.required_ancillas_controlled`](qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled "qiskit.aqua.circuits.WeightedSumOperator.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

