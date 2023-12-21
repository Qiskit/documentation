---
title: FixedValueComparator
description: API reference for qiskit.aqua.circuits.FixedValueComparator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.FixedValueComparator
---

# FixedValueComparator

<span id="qiskit.aqua.circuits.FixedValueComparator" />

`FixedValueComparator(num_state_qubits, value, geq=True, i_state=None, i_target=None)`

*DEPRECATED.* Fixed Value Comparator

<Admonition title="Deprecated since version 0.7.0" type="danger">
  Use Terra’s qiskit.circuit.library.IntegerComparator instead.
</Admonition>

Operator compares basis states |i>\_n against a classically given fixed value L and flips a target qubit if i >= L (or \< depending on parameters):

> |i>\_n|0> –> |i>\_n|1> if i >= L else |i>|0>

Operator is based on two’s complement implementation of binary subtraction but only uses carry bits and no actual result bits. If the most significant carry bit (= results bit) is 1, the “>=” condition is True otherwise it is False.

**Parameters**

*   **num\_state\_qubits** (*int*) – number of state qubits, the target qubit comes on top of this
*   **value** (*int*) – fixed value to compare with
*   **geq** (*Optional(bool)*) – evaluate “>=” condition of “\<” condition
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of state qubits in given list of qubits / register, if None, i\_state = list(range(num\_state\_qubits)) is used
*   **i\_target** (*Optional(int)*) – index of target qubit in given list of qubits / register, if None, i\_target = num\_state\_qubits is used

## Attributes

|                                                                                                                                                                       |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`FixedValueComparator.num_state_qubits`](qiskit.aqua.circuits.FixedValueComparator.num_state_qubits "qiskit.aqua.circuits.FixedValueComparator.num_state_qubits")    | returns num state qubits            |
| [`FixedValueComparator.num_target_qubits`](qiskit.aqua.circuits.FixedValueComparator.num_target_qubits "qiskit.aqua.circuits.FixedValueComparator.num_target_qubits") | Returns the number of target qubits |
| [`FixedValueComparator.value`](qiskit.aqua.circuits.FixedValueComparator.value "qiskit.aqua.circuits.FixedValueComparator.value")                                     | returns value                       |

## Methods

|                                                                                                                                                                                                                     |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`FixedValueComparator.build`](qiskit.aqua.circuits.FixedValueComparator.build "qiskit.aqua.circuits.FixedValueComparator.build")(qc, q\[, …])                                                                      | Adds corresponding sub-circuit to given circuit                       |
| [`FixedValueComparator.build_controlled`](qiskit.aqua.circuits.FixedValueComparator.build_controlled "qiskit.aqua.circuits.FixedValueComparator.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`FixedValueComparator.build_controlled_inverse`](qiskit.aqua.circuits.FixedValueComparator.build_controlled_inverse "qiskit.aqua.circuits.FixedValueComparator.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`FixedValueComparator.build_controlled_inverse_power`](qiskit.aqua.circuits.FixedValueComparator.build_controlled_inverse_power "qiskit.aqua.circuits.FixedValueComparator.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`FixedValueComparator.build_controlled_power`](qiskit.aqua.circuits.FixedValueComparator.build_controlled_power "qiskit.aqua.circuits.FixedValueComparator.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`FixedValueComparator.build_inverse`](qiskit.aqua.circuits.FixedValueComparator.build_inverse "qiskit.aqua.circuits.FixedValueComparator.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`FixedValueComparator.build_inverse_power`](qiskit.aqua.circuits.FixedValueComparator.build_inverse_power "qiskit.aqua.circuits.FixedValueComparator.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`FixedValueComparator.build_power`](qiskit.aqua.circuits.FixedValueComparator.build_power "qiskit.aqua.circuits.FixedValueComparator.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`FixedValueComparator.get_num_qubits`](qiskit.aqua.circuits.FixedValueComparator.get_num_qubits "qiskit.aqua.circuits.FixedValueComparator.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`FixedValueComparator.get_num_qubits_controlled`](qiskit.aqua.circuits.FixedValueComparator.get_num_qubits_controlled "qiskit.aqua.circuits.FixedValueComparator.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`FixedValueComparator.required_ancillas`](qiskit.aqua.circuits.FixedValueComparator.required_ancillas "qiskit.aqua.circuits.FixedValueComparator.required_ancillas")()                                             | returns required ancillas                                             |
| [`FixedValueComparator.required_ancillas_controlled`](qiskit.aqua.circuits.FixedValueComparator.required_ancillas_controlled "qiskit.aqua.circuits.FixedValueComparator.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

